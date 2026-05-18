"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Status = "idle" | "submitting" | "success" | "error";

export function Form() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    adSoyad: "",
    telefon: "",
    eposta: "",
    sehir: "",
    aylikKira: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((s) => ({ ...s, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      setForm({ adSoyad: "", telefon: "", eposta: "", sehir: "", aylikKira: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Ücretsiz Teklif Alın</CardTitle>
        <p className="text-sm text-muted-foreground">
          Bilgilerinizi bırakın, uzman ekibimiz 24 saat içinde sizi arasın.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="adSoyad">Ad Soyad</Label>
            <Input id="adSoyad" required value={form.adSoyad} onChange={update("adSoyad")} />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="sehir">Şehir</Label>
              <Input id="sehir" required value={form.sehir} onChange={update("sehir")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="aylikKira">Tahmini Aylık Kira (₺)</Label>
              <Input
                id="aylikKira"
                type="number"
                min={0}
                required
                value={form.aylikKira}
                onChange={update("aylikKira")}
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={status === "submitting"}>
            {status === "submitting" ? "Gönderiliyor..." : "Teklif Al"}
          </Button>

          {status === "success" && (
            <p className="text-sm text-green-600">
              Talebiniz alındı. En kısa sürede sizi arayacağız.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600">
              Bir hata oluştu. Lütfen tekrar deneyin.
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
