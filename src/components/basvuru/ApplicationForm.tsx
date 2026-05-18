"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  User,
  Home,
  Wallet,
  ClipboardCheck,
  Upload,
  X,
  Check,
  ArrowLeft,
  ArrowRight,
  Mail,
  CalendarClock,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// ============ Types ============

type MulkTipi = "daire" | "mustakil" | "dukkan";

type FormState = {
  // Step 1
  adSoyad: string;
  eposta: string;
  telefon: string;
  tcKimlik: string;
  ikametSehir: string;

  // Step 2
  mulkTipi: MulkTipi | "";
  sehir: string;
  ilce: string;
  mahalle: string;
  adres: string;
  metrekare: string;
  odaSayisi: string;
  yapimYili: string;
  fotograflar: File[];

  // Step 3
  beklenenKira: string;
  sozlesmeSuresi: string;
  esyaliMi: "evet" | "hayir" | "";
  tercihler: string[];
  notlar: string;
};

const INITIAL: FormState = {
  adSoyad: "",
  eposta: "",
  telefon: "",
  tcKimlik: "",
  ikametSehir: "",
  mulkTipi: "",
  sehir: "",
  ilce: "",
  mahalle: "",
  adres: "",
  metrekare: "",
  odaSayisi: "",
  yapimYili: "",
  fotograflar: [],
  beklenenKira: "",
  sozlesmeSuresi: "12",
  esyaliMi: "",
  tercihler: [],
  notlar: "",
};

const SEHIRLER = [
  "Kahramanmaraş", "Gaziantep", "Adana", "Mersin", "Ankara", "İstanbul", "İzmir", "Diğer",
];

const ODA_SECENEKLER = ["1+0", "1+1", "2+1", "3+1", "4+1", "5+ ve üzeri"];

const TERCIH_SECENEKLER = [
  "Sadece aileye kiralanır",
  "Evcil hayvan kabul edilir",
  "Öğrenci kabul edilir",
  "Sigara içilmez",
  "Kısa süreli kiralama (Airbnb) yapılabilir",
];

const STEPS = [
  { Icon: User, baslik: "Kişisel Bilgiler", aciklama: "Sizi nasıl arayalım?" },
  { Icon: Home, baslik: "Mülk Detayları", aciklama: "Hangi mülkü kiraya vereceksiniz?" },
  { Icon: Wallet, baslik: "Kira & Tercihler", aciklama: "Beklentilerinizi söyleyin" },
  { Icon: ClipboardCheck, baslik: "Özet & Gönder", aciklama: "Son kez gözden geçirin" },
] as const;

// ============ Validation ============

const validateStep = (step: number, f: FormState): Record<string, string> => {
  const errors: Record<string, string> = {};
  if (step === 0) {
    if (f.adSoyad.trim().length < 3) errors.adSoyad = "Ad soyad en az 3 karakter";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.eposta)) errors.eposta = "Geçerli bir e-posta girin";
    if (!/^(\+?90)?\s?5\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/.test(f.telefon))
      errors.telefon = "Geçerli bir GSM numarası girin (05XX XXX XX XX)";
    if (f.tcKimlik && !/^\d{11}$/.test(f.tcKimlik)) errors.tcKimlik = "11 haneli olmalı";
    if (!f.ikametSehir) errors.ikametSehir = "İkamet şehrinizi seçin";
  }
  if (step === 1) {
    if (!f.mulkTipi) errors.mulkTipi = "Mülk tipi seçin";
    if (!f.sehir) errors.sehir = "Şehir seçin";
    if (f.ilce.trim().length < 2) errors.ilce = "İlçe girin";
    if (f.mahalle.trim().length < 2) errors.mahalle = "Mahalle girin";
    if (f.adres.trim().length < 5) errors.adres = "Adres çok kısa";
    const m2 = Number(f.metrekare);
    if (!m2 || m2 < 10) errors.metrekare = "Geçerli metrekare girin";
    if (!f.odaSayisi) errors.odaSayisi = "Oda sayısı seçin";
    const yil = Number(f.yapimYili);
    if (!yil || yil < 1900 || yil > 2026) errors.yapimYili = "Geçerli yıl girin";
  }
  if (step === 2) {
    const kira = Number(f.beklenenKira);
    if (!kira || kira < 1000) errors.beklenenKira = "Geçerli kira tutarı girin";
    const ay = Number(f.sozlesmeSuresi);
    if (!ay || ay < 6 || ay > 36) errors.sozlesmeSuresi = "6-36 ay arası olmalı";
    if (!f.esyaliMi) errors.esyaliMi = "Eşyalı/eşyasız seçin";
  }
  return errors;
};

const formatTRY = (n: number) =>
  new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 0 }).format(n);

// ============ Stepper ============

function Stepper({
  current,
  furthest,
  onJump,
}: {
  current: number;
  furthest: number;
  onJump: (i: number) => void;
}) {
  return (
    <nav aria-label="Başvuru adımları" className="mb-10">
      <ol className="grid grid-cols-4 gap-2 sm:gap-4">
        {STEPS.map((s, i) => {
          const done = i < furthest;
          const active = i === current;
          const clickable = i <= furthest;
          return (
            <li key={i}>
              <button
                type="button"
                onClick={() => clickable && onJump(i)}
                disabled={!clickable}
                className={cn(
                  "group w-full text-left transition-opacity disabled:opacity-50",
                  clickable && "cursor-pointer",
                )}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors",
                      active && "bg-primary text-primary-foreground ring-4 ring-primary/20",
                      done && !active && "bg-emerald-600 text-white",
                      !active && !done && "bg-muted text-muted-foreground",
                    )}
                  >
                    {done ? <Check className="size-4" /> : <s.Icon className="size-4" />}
                  </div>
                  <div className="hidden min-w-0 flex-1 sm:block">
                    <p
                      className={cn(
                        "truncate text-xs font-semibold uppercase tracking-wider",
                        active ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      Adım {i + 1}
                    </p>
                    <p
                      className={cn(
                        "truncate text-sm font-medium",
                        active || done ? "text-foreground" : "text-muted-foreground",
                      )}
                    >
                      {s.baslik}
                    </p>
                  </div>
                </div>
                <div
                  className={cn(
                    "mt-3 h-1 w-full rounded-full transition-colors",
                    done || active ? "bg-primary" : "bg-muted",
                  )}
                />
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// ============ Reusable field components ============

function Field({
  id,
  label,
  error,
  children,
  optional,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="flex items-center gap-1">
        <span>{label}</span>
        {optional && (
          <span className="text-[10px] font-normal uppercase text-muted-foreground">
            opsiyonel
          </span>
        )}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

function SelectField({
  id,
  value,
  onChange,
  options,
  placeholder = "Seçin",
  invalid,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
  placeholder?: string;
  invalid?: boolean;
}) {
  return (
    <select
      id={id}
      value={value}
      aria-invalid={invalid}
      onChange={(e) => onChange(e.target.value)}
      className="flex h-9 w-full rounded-lg border border-input bg-background px-3 text-sm shadow-sm transition-colors focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

// ============ Step 1 ============

function Step1({
  data,
  setField,
  errors,
}: {
  data: FormState;
  setField: <K extends keyof FormState>(k: K, v: FormState[K]) => void;
  errors: Record<string, string>;
}) {
  return (
    <div className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="adSoyad" label="Ad Soyad" error={errors.adSoyad}>
          <Input
            id="adSoyad"
            value={data.adSoyad}
            onChange={(e) => setField("adSoyad", e.target.value)}
            aria-invalid={!!errors.adSoyad}
          />
        </Field>
        <Field id="telefon" label="Telefon" error={errors.telefon}>
          <Input
            id="telefon"
            type="tel"
            placeholder="05XX XXX XX XX"
            value={data.telefon}
            onChange={(e) => setField("telefon", e.target.value)}
            aria-invalid={!!errors.telefon}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="eposta" label="E-posta" error={errors.eposta}>
          <Input
            id="eposta"
            type="email"
            value={data.eposta}
            onChange={(e) => setField("eposta", e.target.value)}
            aria-invalid={!!errors.eposta}
          />
        </Field>
        <Field id="tcKimlik" label="T.C. Kimlik No" error={errors.tcKimlik} optional>
          <Input
            id="tcKimlik"
            inputMode="numeric"
            maxLength={11}
            value={data.tcKimlik}
            onChange={(e) => setField("tcKimlik", e.target.value.replace(/\D/g, ""))}
            aria-invalid={!!errors.tcKimlik}
          />
        </Field>
      </div>

      <Field id="ikametSehir" label="İkamet Şehriniz" error={errors.ikametSehir}>
        <SelectField
          id="ikametSehir"
          value={data.ikametSehir}
          onChange={(v) => setField("ikametSehir", v)}
          options={[...SEHIRLER, "Yurt Dışında Yaşıyorum"]}
          placeholder="Şehir seçin"
          invalid={!!errors.ikametSehir}
        />
      </Field>

      <p className="rounded-lg border border-primary/15 bg-primary/5 p-3 text-xs text-muted-foreground">
        Bilgileriniz yalnızca size dönüş yapmak için kullanılır, üçüncü taraflarla paylaşılmaz.
      </p>
    </div>
  );
}

// ============ Step 2 ============

function PhotoUploader({
  files,
  onChange,
}: {
  files: File[];
  onChange: (files: File[]) => void;
}) {
  const onPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const picked = Array.from(e.target.files ?? []);
    const next = [...files, ...picked].slice(0, 8);
    onChange(next);
    e.target.value = "";
  };

  const remove = (i: number) => onChange(files.filter((_, idx) => idx !== i));

  return (
    <div className="space-y-3">
      <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-muted/30 px-6 py-10 text-center transition-colors hover:border-primary/40 hover:bg-primary/5">
        <Upload className="size-7 text-muted-foreground" />
        <span className="text-sm font-medium text-foreground">
          Fotoğraf yüklemek için tıklayın
        </span>
        <span className="text-xs text-muted-foreground">
          JPG, PNG · maks. 8 dosya · her biri 5MB&apos;a kadar
        </span>
        <input
          type="file"
          accept="image/*"
          multiple
          className="sr-only"
          onChange={onPick}
        />
      </label>

      {files.length > 0 && (
        <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4">
          {files.map((file, i) => {
            const url = URL.createObjectURL(file);
            return (
              <li key={i} className="group relative overflow-hidden rounded-lg border border-border bg-muted/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={url}
                  alt={file.name}
                  className="aspect-square w-full object-cover"
                  onLoad={() => URL.revokeObjectURL(url)}
                />
                <button
                  type="button"
                  onClick={() => remove(i)}
                  aria-label={`${file.name} kaldır`}
                  className="absolute right-1 top-1 inline-flex size-6 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <X className="size-3" />
                </button>
                <p className="absolute inset-x-0 bottom-0 truncate bg-black/50 px-1.5 py-0.5 text-[10px] text-white">
                  {file.name}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function Step2({
  data,
  setField,
  errors,
}: {
  data: FormState;
  setField: <K extends keyof FormState>(k: K, v: FormState[K]) => void;
  errors: Record<string, string>;
}) {
  const MULK_TIPLERI: { key: MulkTipi; label: string; emoji: string }[] = [
    { key: "daire", label: "Daire", emoji: "🏢" },
    { key: "mustakil", label: "Müstakil Ev", emoji: "🏡" },
    { key: "dukkan", label: "İşyeri / Dükkân", emoji: "🏪" },
  ];

  return (
    <div className="space-y-6">
      <Field id="mulkTipi" label="Mülk Tipi" error={errors.mulkTipi}>
        <div className="grid grid-cols-3 gap-2">
          {MULK_TIPLERI.map((m) => {
            const active = data.mulkTipi === m.key;
            return (
              <button
                key={m.key}
                type="button"
                onClick={() => setField("mulkTipi", m.key)}
                className={cn(
                  "flex flex-col items-center gap-2 rounded-xl border p-4 text-sm font-medium transition-colors",
                  active
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-border bg-card hover:border-primary/30",
                )}
              >
                <span className="text-2xl" aria-hidden>{m.emoji}</span>
                {m.label}
              </button>
            );
          })}
        </div>
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="sehir" label="Şehir" error={errors.sehir}>
          <SelectField
            id="sehir"
            value={data.sehir}
            onChange={(v) => setField("sehir", v)}
            options={SEHIRLER}
            placeholder="Şehir seçin"
            invalid={!!errors.sehir}
          />
        </Field>
        <Field id="ilce" label="İlçe" error={errors.ilce}>
          <Input
            id="ilce"
            value={data.ilce}
            onChange={(e) => setField("ilce", e.target.value)}
            aria-invalid={!!errors.ilce}
          />
        </Field>
      </div>

      <Field id="mahalle" label="Mahalle" error={errors.mahalle}>
        <Input
          id="mahalle"
          value={data.mahalle}
          onChange={(e) => setField("mahalle", e.target.value)}
          aria-invalid={!!errors.mahalle}
        />
      </Field>

      <Field id="adres" label="Adres / Sokak / No" error={errors.adres}>
        <textarea
          id="adres"
          rows={2}
          value={data.adres}
          onChange={(e) => setField("adres", e.target.value)}
          aria-invalid={!!errors.adres}
          className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-3">
        <Field id="metrekare" label="Metrekare" error={errors.metrekare}>
          <Input
            id="metrekare"
            type="number"
            inputMode="numeric"
            value={data.metrekare}
            onChange={(e) => setField("metrekare", e.target.value)}
            aria-invalid={!!errors.metrekare}
          />
        </Field>
        <Field id="odaSayisi" label="Oda Sayısı" error={errors.odaSayisi}>
          <SelectField
            id="odaSayisi"
            value={data.odaSayisi}
            onChange={(v) => setField("odaSayisi", v)}
            options={ODA_SECENEKLER}
            placeholder="Seçin"
            invalid={!!errors.odaSayisi}
          />
        </Field>
        <Field id="yapimYili" label="Yapım Yılı" error={errors.yapimYili}>
          <Input
            id="yapimYili"
            type="number"
            inputMode="numeric"
            min={1900}
            max={2026}
            value={data.yapimYili}
            onChange={(e) => setField("yapimYili", e.target.value)}
            aria-invalid={!!errors.yapimYili}
          />
        </Field>
      </div>

      <div>
        <Label className="mb-2 block">Fotoğraflar <span className="text-[10px] font-normal uppercase text-muted-foreground">opsiyonel</span></Label>
        <PhotoUploader
          files={data.fotograflar}
          onChange={(f) => setField("fotograflar", f)}
        />
      </div>
    </div>
  );
}

// ============ Step 3 ============

function Step3({
  data,
  setField,
  errors,
}: {
  data: FormState;
  setField: <K extends keyof FormState>(k: K, v: FormState[K]) => void;
  errors: Record<string, string>;
}) {
  const toggleTercih = (t: string) => {
    const next = data.tercihler.includes(t)
      ? data.tercihler.filter((x) => x !== t)
      : [...data.tercihler, t];
    setField("tercihler", next);
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="beklenenKira" label="Beklenen Aylık Kira (₺)" error={errors.beklenenKira}>
          <Input
            id="beklenenKira"
            type="number"
            inputMode="numeric"
            min={1000}
            step={500}
            value={data.beklenenKira}
            onChange={(e) => setField("beklenenKira", e.target.value)}
            aria-invalid={!!errors.beklenenKira}
          />
        </Field>
        <Field id="sozlesmeSuresi" label="Sözleşme Süresi (ay)" error={errors.sozlesmeSuresi}>
          <Input
            id="sozlesmeSuresi"
            type="number"
            inputMode="numeric"
            min={6}
            max={36}
            value={data.sozlesmeSuresi}
            onChange={(e) => setField("sozlesmeSuresi", e.target.value)}
            aria-invalid={!!errors.sozlesmeSuresi}
          />
        </Field>
      </div>

      <Field id="esyaliMi" label="Mülk eşyalı mı?" error={errors.esyaliMi}>
        <div className="grid grid-cols-2 gap-2">
          {(["evet", "hayir"] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setField("esyaliMi", v)}
              className={cn(
                "rounded-xl border p-3 text-sm font-medium transition-colors",
                data.esyaliMi === v
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border bg-card hover:border-primary/30",
              )}
            >
              {v === "evet" ? "✅ Eşyalı" : "🪑 Eşyasız"}
            </button>
          ))}
        </div>
      </Field>

      <div>
        <Label className="mb-2 block">Kiracı tercihleri <span className="text-[10px] font-normal uppercase text-muted-foreground">opsiyonel</span></Label>
        <div className="grid gap-2 sm:grid-cols-2">
          {TERCIH_SECENEKLER.map((t) => {
            const checked = data.tercihler.includes(t);
            return (
              <label
                key={t}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-lg border p-3 text-sm transition-colors",
                  checked
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card hover:border-primary/30",
                )}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleTercih(t)}
                  className="size-4 rounded border-input text-primary focus:ring-primary"
                />
                <span>{t}</span>
              </label>
            );
          })}
        </div>
      </div>

      <Field id="notlar" label="Eklemek istediğiniz notlar" optional>
        <textarea
          id="notlar"
          rows={3}
          value={data.notlar}
          onChange={(e) => setField("notlar", e.target.value)}
          placeholder="Bilmemizi istediğiniz başka bir şey var mı?"
          className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        />
      </Field>
    </div>
  );
}

// ============ Step 4 ============

function SummaryRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2.5 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-right font-medium text-foreground">{value || <span className="text-muted-foreground">—</span>}</span>
    </div>
  );
}

function Step4({ data, onEdit }: { data: FormState; onEdit: (step: number) => void }) {
  const kira = Number(data.beklenenKira) || 0;
  const sure = Number(data.sozlesmeSuresi) || 0;
  const garantili = kira * 0.92;

  return (
    <div className="space-y-5">
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
        <div className="flex items-start gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <Wallet className="size-4" />
          </div>
          <div>
            <p className="text-sm font-semibold text-emerald-900">
              Tahmini aylık net geliriniz: <span className="font-bold">{formatTRY(garantili)}</span>
            </p>
            <p className="mt-1 text-xs text-emerald-800">
              %8 hizmet bedeli düşülmüştür. Net teklif ekspertiz sonrası kesinleşir.
            </p>
          </div>
        </div>
      </div>

      {/* Section: Kişisel */}
      <section className="overflow-hidden rounded-xl border border-border bg-card">
        <header className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-3">
          <h3 className="flex items-center gap-2 text-sm font-semibold">
            <User className="size-4 text-primary" />
            Kişisel Bilgiler
          </h3>
          <button type="button" onClick={() => onEdit(0)} className="text-xs font-medium text-primary hover:underline">
            Düzenle
          </button>
        </header>
        <div className="divide-y divide-border px-4">
          <SummaryRow label="Ad Soyad" value={data.adSoyad} />
          <SummaryRow label="Telefon" value={data.telefon} />
          <SummaryRow label="E-posta" value={data.eposta} />
          {data.tcKimlik && <SummaryRow label="T.C. Kimlik" value={data.tcKimlik} />}
          <SummaryRow label="İkamet Şehri" value={data.ikametSehir} />
        </div>
      </section>

      {/* Section: Mülk */}
      <section className="overflow-hidden rounded-xl border border-border bg-card">
        <header className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-3">
          <h3 className="flex items-center gap-2 text-sm font-semibold">
            <Home className="size-4 text-primary" />
            Mülk Detayları
          </h3>
          <button type="button" onClick={() => onEdit(1)} className="text-xs font-medium text-primary hover:underline">
            Düzenle
          </button>
        </header>
        <div className="divide-y divide-border px-4">
          <SummaryRow
            label="Tip"
            value={
              data.mulkTipi === "daire" ? "Daire" :
              data.mulkTipi === "mustakil" ? "Müstakil Ev" :
              data.mulkTipi === "dukkan" ? "İşyeri / Dükkân" : ""
            }
          />
          <SummaryRow label="Adres" value={`${data.mahalle}, ${data.ilce} / ${data.sehir}`} />
          <SummaryRow label="Detay" value={data.adres} />
          <SummaryRow label="Metrekare" value={`${data.metrekare} m²`} />
          <SummaryRow label="Oda Sayısı" value={data.odaSayisi} />
          <SummaryRow label="Yapım Yılı" value={data.yapimYili} />
          <SummaryRow label="Fotoğraf" value={`${data.fotograflar.length} dosya`} />
        </div>
      </section>

      {/* Section: Kira & Tercihler */}
      <section className="overflow-hidden rounded-xl border border-border bg-card">
        <header className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-3">
          <h3 className="flex items-center gap-2 text-sm font-semibold">
            <Wallet className="size-4 text-primary" />
            Kira & Tercihler
          </h3>
          <button type="button" onClick={() => onEdit(2)} className="text-xs font-medium text-primary hover:underline">
            Düzenle
          </button>
        </header>
        <div className="divide-y divide-border px-4">
          <SummaryRow label="Beklenen Kira" value={kira ? formatTRY(kira) : ""} />
          <SummaryRow label="Sözleşme Süresi" value={sure ? `${sure} ay` : ""} />
          <SummaryRow label="Eşyalı" value={data.esyaliMi === "evet" ? "Evet" : data.esyaliMi === "hayir" ? "Hayır" : ""} />
          {data.tercihler.length > 0 && (
            <SummaryRow
              label="Tercihler"
              value={
                <ul className="space-y-0.5">
                  {data.tercihler.map((t) => (
                    <li key={t} className="text-xs">• {t}</li>
                  ))}
                </ul>
              }
            />
          )}
          {data.notlar && <SummaryRow label="Notlar" value={<span className="italic text-muted-foreground">{data.notlar}</span>} />}
        </div>
      </section>
    </div>
  );
}

// ============ Success ============

function SuccessState({ basvuruId, eposta }: { basvuruId: string; eposta: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
        <Check className="size-8" />
      </div>
      <h2 className="mt-6 text-3xl font-bold tracking-tight">
        Başvurunuz alındı!
      </h2>
      <p className="mt-3 text-muted-foreground">
        Onay e-postası <strong className="text-foreground">{eposta}</strong> adresine gönderildi.
      </p>

      <div className="mx-auto mt-6 inline-flex items-center gap-3 rounded-full border border-border bg-muted/30 px-4 py-2 text-sm">
        <span className="text-muted-foreground">Başvuru No</span>
        <span className="font-mono font-semibold text-foreground">{basvuruId}</span>
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-card p-6 text-left">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Şimdi ne olacak?
        </h3>
        <ol className="space-y-4">
          {[
            { Icon: Mail, baslik: "Onay e-postası", metin: "Birkaç dakika içinde e-posta kutunuza düşer." },
            { Icon: PhoneCall, baslik: "24 saat içinde arama", metin: "Uzman ekibimiz sizi arayıp detayları konuşur." },
            { Icon: CalendarClock, baslik: "1-2 gün içinde ekspertiz", metin: "Mülkünüze yerinde inceleme için gün ayarlanır." },
          ].map((s) => (
            <li key={s.baslik} className="flex items-start gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <s.Icon className="size-4" />
              </div>
              <div>
                <p className="text-sm font-semibold">{s.baslik}</p>
                <p className="text-sm text-muted-foreground">{s.metin}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button render={<Link href="/" />} variant="outline" size="lg">
          Ana sayfaya dön
        </Button>
        <Button
          render={<Link href="/blog" />}
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90"
        >
          Blog yazılarını okuyun
        </Button>
      </div>
    </div>
  );
}

// ============ Main Form ============

export function ApplicationForm() {
  const [step, setStep] = useState(0);
  const [furthest, setFurthest] = useState(0);
  const [data, setData] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<{ id: string; eposta: string } | null>(null);

  const setField = useCallback(
    <K extends keyof FormState>(k: K, v: FormState[K]) => {
      setData((s) => ({ ...s, [k]: v }));
      setErrors((e) => {
        if (!e[k as string]) return e;
        const next = { ...e };
        delete next[k as string];
        return next;
      });
    },
    [],
  );

  const goNext = () => {
    const errs = validateStep(step, data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      toast.error("Lütfen işaretli alanları kontrol edin.");
      return;
    }
    const next = Math.min(step + 1, STEPS.length - 1);
    setStep(next);
    setFurthest((f) => Math.max(f, next));
  };

  const goBack = () => setStep((s) => Math.max(0, s - 1));

  const jumpTo = (i: number) => {
    if (i <= furthest) setStep(i);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 1200));
      const id = `KG-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
      console.log("[MOCK SUBMIT]", { id, ...data, fotograflar: data.fotograflar.map((f) => f.name) });
      toast.success("Başvurunuz kaydedildi. Onay e-postası gönderildi.", {
        description: `Başvuru No: ${id}`,
      });
      setSuccess({ id, eposta: data.eposta });
    } catch {
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) return <SuccessState basvuruId={success.id} eposta={success.eposta} />;

  return (
    <div>
      <Stepper current={step} furthest={furthest} onJump={jumpTo} />

      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {STEPS[step].baslik}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">{STEPS[step].aciklama}</p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25 }}
          >
            {step === 0 && <Step1 data={data} setField={setField} errors={errors} />}
            {step === 1 && <Step2 data={data} setField={setField} errors={errors} />}
            {step === 2 && <Step3 data={data} setField={setField} errors={errors} />}
            {step === 3 && <Step4 data={data} onEdit={jumpTo} />}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={goBack}
          disabled={step === 0 || submitting}
        >
          <ArrowLeft className="mr-1 size-4" />
          Geri
        </Button>

        <div className="text-sm text-muted-foreground">
          {step + 1} / {STEPS.length}
        </div>

        {step < STEPS.length - 1 ? (
          <Button
            type="button"
            size="lg"
            onClick={goNext}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Devam
            <ArrowRight className="ml-1 size-4" />
          </Button>
        ) : (
          <Button
            type="button"
            size="lg"
            onClick={handleSubmit}
            disabled={submitting}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            {submitting ? "Gönderiliyor..." : "Başvuruyu Gönder"}
            <Check className="ml-1 size-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
