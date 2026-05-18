"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const formatTRY = (n: number) =>
  new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(Math.round(n));

const COMISYON_ORANI = 0.08;

export function KiraHesaplayici() {
  const [aylikKira, setAylikKira] = useState<number>(20000);
  const [sozlesmeAy, setSozlesmeAy] = useState<number>(12);

  const { garantiliAylik, toplamGelir, komisyon, netYillik } = useMemo(() => {
    const komisyonAylik = aylikKira * COMISYON_ORANI;
    const garantili = aylikKira - komisyonAylik;
    return {
      garantiliAylik: garantili,
      toplamGelir: aylikKira * sozlesmeAy,
      komisyon: komisyonAylik * sozlesmeAy,
      netYillik: garantili * sozlesmeAy,
    };
  }, [aylikKira, sozlesmeAy]);

  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Kira Garanti Hesaplayıcı</CardTitle>
        <p className="text-sm text-muted-foreground">
          Aylık kiranızı girin, garantili net gelirinizi anında görün.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="aylik-kira">Aylık Kira (₺)</Label>
          <Input
            id="aylik-kira"
            type="number"
            min={0}
            step={500}
            value={aylikKira}
            onChange={(e) => setAylikKira(Number(e.target.value) || 0)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="sozlesme-suresi">Sözleşme Süresi (ay)</Label>
          <Input
            id="sozlesme-suresi"
            type="number"
            min={1}
            max={60}
            value={sozlesmeAy}
            onChange={(e) => setSozlesmeAy(Number(e.target.value) || 1)}
          />
        </div>

        <div className="rounded-lg border bg-muted/40 p-4 space-y-3">
          <Row label="Garantili Aylık Gelir" value={formatTRY(garantiliAylik)} highlight />
          <Row label={`${sozlesmeAy} Aylık Net Gelir`} value={formatTRY(netYillik)} />
          <Row label="Toplam Brüt" value={formatTRY(toplamGelir)} muted />
          <Row label={`Hizmet Bedeli (%${COMISYON_ORANI * 100})`} value={`- ${formatTRY(komisyon)}`} muted />
        </div>

        <p className="text-xs text-muted-foreground">
          * Tahmini değerlerdir. Kesin teklif için bizimle iletişime geçin.
        </p>
      </CardContent>
    </Card>
  );
}

function Row({
  label,
  value,
  highlight,
  muted,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  muted?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className={muted ? "text-sm text-muted-foreground" : "text-sm"}>
        {label}
      </span>
      <span
        className={
          highlight
            ? "text-xl font-bold text-primary"
            : muted
              ? "text-sm text-muted-foreground"
              : "font-semibold"
        }
      >
        {value}
      </span>
    </div>
  );
}
