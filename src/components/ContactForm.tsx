"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Status = "idle" | "submitting" | "success" | "error";

const KONULAR = [
  "Kira Garantisi Hakkında Bilgi",
  "Mevcut Mülk için Teklif",
  "Yurt Dışından Başvuru",
  "Kiracı / Hukuki Süreç",
  "Diğer",
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    adSoyad: "",
    eposta: "",
    telefon: "",
    konu: KONULAR[0] as string,
    mesaj: "",
    kvkk: false,
  });

  const update =
    <K extends keyof typeof form>(k: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const v = e.target.type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;
      setForm((s) => ({ ...s, [k]: v }));
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.kvkk) return;
    setStatus("submitting");
    try {
      await new Promise((r) => setTimeout(r, 900));
      setStatus("success");
      setForm({
        adSoyad: "",
        eposta: "",
        telefon: "",
        konu: KONULAR[0],
        mesaj: "",
        kvkk: false,
      });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <Send className="size-5" />
        </div>
        <h3 className="mt-4 text-lg font-bold text-emerald-900">
          Mesajınız bize ulaştı.
        </h3>
        <p className="mt-2 text-sm text-emerald-800">
          24 saat içinde size dönüş yapacağız. Aciliyse 0545 133 28 59
          numaramızı arayabilirsiniz.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-emerald-900 underline-offset-4 hover:underline"
        >
          Yeni mesaj gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="adSoyad">Ad Soyad</Label>
          <Input id="adSoyad" required value={form.adSoyad} onChange={update("adSoyad")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telefon">Telefon</Label>
          <Input
            id="telefon"
            type="tel"
            required
            placeholder="05XX XXX XX XX"
            value={form.telefon}
            onChange={update("telefon")}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="eposta">E-posta</Label>
        <Input
          id="eposta"
          type="email"
          required
          value={form.eposta}
          onChange={update("eposta")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="konu">Konu</Label>
        <select
          id="konu"
          required
          value={form.konu}
          onChange={update("konu")}
          className="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          {KONULAR.map((k) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="mesaj">Mesajınız</Label>
        <textarea
          id="mesaj"
          required
          rows={5}
          value={form.mesaj}
          onChange={update("mesaj")}
          placeholder="Size nasıl yardımcı olabiliriz?"
          className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-muted-foreground">
        <input
          type="checkbox"
          required
          checked={form.kvkk}
          onChange={update("kvkk")}
          className="mt-0.5 size-4 rounded border-input text-primary focus:ring-primary"
        />
        <span>
          <a
            href="/gizlilik"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            KVKK Aydınlatma Metni
          </a>
          ’ni okudum, kişisel verilerimin işlenmesini onaylıyorum.
        </span>
      </label>

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting" || !form.kvkk}
        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
      >
        {status === "submitting" ? "Gönderiliyor..." : "Mesajı Gönder"}
      </Button>

      {status === "error" && (
        <p className="text-sm text-destructive">
          Bir hata oluştu. Lütfen tekrar deneyin veya bizi arayın.
        </p>
      )}
    </form>
  );
}
