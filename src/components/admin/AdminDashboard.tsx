"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import {
  Inbox,
  Clock,
  CheckCircle2,
  Search,
  Filter,
  X,
  Phone,
  Mail,
  MapPin,
  Home,
  Wallet,
  Calendar,
  User,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  MOCK_APPLICATIONS,
  STATUS_META,
  type Application,
  type ApplicationStatus,
} from "@/content/applications";

const STATUSES: ApplicationStatus[] = ["bekliyor", "degerleniyor", "onaylandi", "reddedildi"];

const formatTRY = (n: number) =>
  new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 0 }).format(n);

const formatDate = (iso: string) =>
  new Date(iso).toLocaleString("tr-TR", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

const mulkLabel = (t: Application["mulkTipi"]) =>
  t === "daire" ? "Daire" : t === "mustakil" ? "Müstakil" : "İşyeri";

function StatusBadge({ status }: { status: ApplicationStatus }) {
  const m = STATUS_META[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1",
        m.bg,
        m.color,
        m.ring,
      )}
    >
      <span className={cn("size-1.5 rounded-full", m.dot)} />
      {m.label}
    </span>
  );
}

function StatCard({
  Icon,
  label,
  value,
  delta,
  tone,
}: {
  Icon: typeof Inbox;
  label: string;
  value: string | number;
  delta?: string;
  tone: "default" | "amber" | "sky" | "emerald" | "rose";
}) {
  const tones: Record<string, string> = {
    default: "bg-primary/10 text-primary",
    amber: "bg-amber-100 text-amber-700",
    sky: "bg-sky-100 text-sky-700",
    emerald: "bg-emerald-100 text-emerald-700",
    rose: "bg-rose-100 text-rose-700",
  };
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <div className={cn("inline-flex size-10 items-center justify-center rounded-lg", tones[tone])}>
          <Icon className="size-5" />
        </div>
        {delta && (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
            <TrendingUp className="size-3" />
            {delta}
          </span>
        )}
      </div>
      <p className="mt-4 text-sm font-medium text-muted-foreground">{label}</p>
      <p className="mt-1 text-3xl font-bold tracking-tight text-foreground">{value}</p>
    </div>
  );
}

function DetailRow({
  Icon,
  label,
  value,
}: {
  Icon: typeof Inbox;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 py-2.5">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
        <Icon className="size-4" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
}

function DetailDrawer({
  app,
  onClose,
  onUpdateStatus,
  onUpdateNotes,
}: {
  app: Application;
  onClose: () => void;
  onUpdateStatus: (s: ApplicationStatus) => void;
  onUpdateNotes: (n: string) => void;
}) {
  const [draftNotes, setDraftNotes] = useState(app.notlar ?? "");

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      {/* Drawer */}
      <aside
        role="dialog"
        aria-label={`${app.adSoyad} başvuru detayı`}
        className="fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-md flex-col overflow-y-auto bg-background shadow-2xl"
      >
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/95 px-6 py-4 backdrop-blur">
          <div>
            <p className="font-mono text-xs text-muted-foreground">{app.id}</p>
            <h2 className="mt-0.5 text-lg font-bold text-foreground">{app.adSoyad}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Kapat"
            className="inline-flex size-9 items-center justify-center rounded-md text-foreground/60 hover:bg-muted hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        </header>

        <div className="space-y-6 px-6 py-6">
          {/* Status */}
          <section>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Durum
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {STATUSES.map((s) => {
                const m = STATUS_META[s];
                const active = app.status === s;
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => onUpdateStatus(s)}
                    className={cn(
                      "flex items-center justify-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors",
                      active
                        ? cn(m.bg, m.color, m.ring.replace("ring-", "border-"))
                        : "border-border bg-card text-muted-foreground hover:bg-muted",
                    )}
                  >
                    <span className={cn("size-1.5 rounded-full", m.dot)} />
                    {m.label}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Contact */}
          <section>
            <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              İletişim
            </h3>
            <div className="divide-y divide-border rounded-xl border border-border bg-card px-4">
              <DetailRow
                Icon={Phone}
                label="Telefon"
                value={
                  <a href={`tel:${app.telefon.replace(/\s/g, "")}`} className="hover:text-primary">
                    {app.telefon}
                  </a>
                }
              />
              <DetailRow
                Icon={Mail}
                label="E-posta"
                value={
                  <a href={`mailto:${app.eposta}`} className="hover:text-primary">
                    {app.eposta}
                  </a>
                }
              />
              <DetailRow Icon={MapPin} label="İkamet" value={app.ikametSehir} />
            </div>
          </section>

          {/* Property */}
          <section>
            <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Mülk
            </h3>
            <div className="divide-y divide-border rounded-xl border border-border bg-card px-4">
              <DetailRow Icon={Home} label="Tip" value={mulkLabel(app.mulkTipi)} />
              <DetailRow
                Icon={MapPin}
                label="Adres"
                value={`${app.mahalle}, ${app.ilce} / ${app.sehir}`}
              />
              <DetailRow
                Icon={Home}
                label="Detay"
                value={`${app.metrekare}m² · ${app.odaSayisi} · ${app.esyaliMi ? "Eşyalı" : "Eşyasız"}`}
              />
            </div>
          </section>

          {/* Rent */}
          <section>
            <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Kira
            </h3>
            <div className="divide-y divide-border rounded-xl border border-border bg-card px-4">
              <DetailRow Icon={Wallet} label="Beklenen Kira" value={formatTRY(app.beklenenKira)} />
              <DetailRow
                Icon={Wallet}
                label="Tahmini Net (%12)"
                value={
                  <span className="text-emerald-700">
                    {formatTRY(app.beklenenKira * 0.88)}
                  </span>
                }
              />
              <DetailRow Icon={Calendar} label="Sözleşme Süresi" value={`${app.sozlesmeSuresi} ay`} />
            </div>
          </section>

          {/* Meta */}
          <section>
            <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Süreç
            </h3>
            <div className="divide-y divide-border rounded-xl border border-border bg-card px-4">
              <DetailRow Icon={Calendar} label="Başvuru Tarihi" value={formatDate(app.basvuruTarihi)} />
              <DetailRow
                Icon={User}
                label="Atanan"
                value={app.atayan || <span className="text-muted-foreground">Atanmamış</span>}
              />
            </div>
          </section>

          {/* Notes */}
          <section>
            <Label htmlFor="notes" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              İç Notlar
            </Label>
            <textarea
              id="notes"
              rows={4}
              value={draftNotes}
              onChange={(e) => setDraftNotes(e.target.value)}
              placeholder="Bu başvuruyla ilgili iç notlar..."
              className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            />
            <Button
              type="button"
              size="sm"
              className="mt-2"
              onClick={() => {
                onUpdateNotes(draftNotes);
                toast.success("Notlar kaydedildi.");
              }}
            >
              Notları Kaydet
            </Button>
          </section>
        </div>
      </aside>
    </>
  );
}

export function AdminDashboard() {
  const [apps, setApps] = useState<Application[]>(MOCK_APPLICATIONS);
  const [filter, setFilter] = useState<ApplicationStatus | "tumu">("tumu");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const stats = useMemo(() => {
    const counts = apps.reduce(
      (acc, a) => ({ ...acc, [a.status]: (acc[a.status] ?? 0) + 1 }),
      {} as Record<ApplicationStatus, number>,
    );
    return {
      toplam: apps.length,
      bekliyor: counts.bekliyor ?? 0,
      degerleniyor: counts.degerleniyor ?? 0,
      onaylandi: counts.onaylandi ?? 0,
      reddedildi: counts.reddedildi ?? 0,
      toplamKira: apps.filter((a) => a.status === "onaylandi").reduce((s, a) => s + a.beklenenKira, 0),
    };
  }, [apps]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return apps
      .filter((a) => (filter === "tumu" ? true : a.status === filter))
      .filter((a) => {
        if (!q) return true;
        return (
          a.adSoyad.toLowerCase().includes(q) ||
          a.telefon.toLowerCase().includes(q) ||
          a.eposta.toLowerCase().includes(q) ||
          a.id.toLowerCase().includes(q) ||
          a.sehir.toLowerCase().includes(q)
        );
      })
      .sort((a, b) => +new Date(b.basvuruTarihi) - +new Date(a.basvuruTarihi));
  }, [apps, filter, query]);

  const selected = apps.find((a) => a.id === selectedId);

  const updateStatus = (id: string, status: ApplicationStatus) => {
    setApps((s) => s.map((a) => (a.id === id ? { ...a, status } : a)));
    toast.success(`Durum güncellendi: ${STATUS_META[status].label}`, {
      description: `Başvuru ${id}`,
    });
  };

  const updateNotes = (id: string, notlar: string) => {
    setApps((s) => s.map((a) => (a.id === id ? { ...a, notlar } : a)));
  };

  return (
    <>
      {/* Page header */}
      <header className="mb-8">
        <p className="text-sm text-muted-foreground">Admin Paneli</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-foreground">Başvurular</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Gelen başvuruları yönetin, durumlarını güncelleyin ve iç notlar ekleyin.
        </p>
      </header>

      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard Icon={Inbox} label="Toplam Başvuru" value={stats.toplam} tone="default" delta="+12 bu hafta" />
        <StatCard Icon={Clock} label="Bekliyor" value={stats.bekliyor} tone="amber" />
        <StatCard Icon={CheckCircle2} label="Onaylandı" value={stats.onaylandi} tone="emerald" />
        <StatCard
          Icon={Wallet}
          label="Onaylı Aylık Kira"
          value={formatTRY(stats.toplamKira)}
          tone="sky"
        />
      </section>

      {/* Toolbar */}
      <section className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setFilter("tumu")}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
              filter === "tumu"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/70",
            )}
          >
            <Filter className="size-3.5" />
            Tümü
            <span className="rounded-full bg-background/30 px-1.5 text-xs">{stats.toplam}</span>
          </button>
          {STATUSES.map((s) => {
            const m = STATUS_META[s];
            const count =
              s === "bekliyor" ? stats.bekliyor :
              s === "degerleniyor" ? stats.degerleniyor :
              s === "onaylandi" ? stats.onaylandi :
              stats.reddedildi;
            const active = filter === s;
            return (
              <button
                key={s}
                type="button"
                onClick={() => setFilter(s)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                  active
                    ? cn(m.bg, m.color, "ring-1", m.ring)
                    : "bg-muted text-muted-foreground hover:bg-muted/70",
                )}
              >
                <span className={cn("size-1.5 rounded-full", m.dot)} />
                {m.label}
                <span className="rounded-full bg-background/30 px-1.5 text-xs">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="relative max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Ad, telefon, ID, şehir..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-10 pl-9"
          />
        </div>
      </section>

      {/* Table */}
      <section className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-muted/40">
              <tr className="text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Başvuran</th>
                <th className="px-4 py-3">Mülk</th>
                <th className="px-4 py-3 text-right">Kira</th>
                <th className="px-4 py-3">Durum</th>
                <th className="px-4 py-3">Tarih</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-muted-foreground">
                    Filtrelere uyan başvuru yok.
                  </td>
                </tr>
              ) : (
                filtered.map((a) => (
                  <tr
                    key={a.id}
                    onClick={() => setSelectedId(a.id)}
                    className="cursor-pointer transition-colors hover:bg-muted/40"
                  >
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{a.id}</td>
                    <td className="px-4 py-3">
                      <p className="font-medium text-foreground">{a.adSoyad}</p>
                      <p className="text-xs text-muted-foreground">{a.telefon}</p>
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-foreground">
                        {mulkLabel(a.mulkTipi)} · {a.metrekare}m² · {a.odaSayisi}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {a.ilce} / {a.sehir}
                      </p>
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-foreground">
                      {formatTRY(a.beklenenKira)}
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={a.status} />
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">
                      {formatDate(a.basvuruTarihi)}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <ArrowUpRight className="size-4 text-muted-foreground" />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {selected && (
        <DetailDrawer
          app={selected}
          onClose={() => setSelectedId(null)}
          onUpdateStatus={(s) => updateStatus(selected.id, s)}
          onUpdateNotes={(n) => updateNotes(selected.id, n)}
        />
      )}
    </>
  );
}
