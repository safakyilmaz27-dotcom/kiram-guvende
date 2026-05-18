"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SEHIRLER = [
  "Kahramanmaraş",
  "Gaziantep",
  "Adana",
  "Mersin",
  "Ankara",
  "İstanbul",
  "İzmir",
  "Diğer",
] as const;

const schema = z.object({
  adSoyad: z
    .string()
    .trim()
    .min(3, "Ad soyad en az 3 karakter olmalı")
    .max(60, "Ad soyad çok uzun"),
  telefon: z
    .string()
    .trim()
    .regex(
      /^(\+?90)?\s?5\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/,
      "Geçerli bir GSM numarası girin (05XX XXX XX XX)",
    ),
  sehir: z.enum(SEHIRLER, { message: "Şehir seçin" }),
});

type FormValues = z.infer<typeof schema>;

export function QuickApplySection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { adSoyad: "", telefon: "", sehir: undefined as unknown as FormValues["sehir"] },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await new Promise((r) => setTimeout(r, 800));
      console.log("Quick apply submission:", data);
      toast.success("Teşekkürler! 24 saat içinde sizi arayacağız.", {
        description: `${data.adSoyad}, talebiniz alındı.`,
      });
      reset();
    } catch {
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F2E47] via-[#1B4F72] to-[#2C6FA0] text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 right-1/4 size-96 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent ring-1 ring-accent/30">
            <Clock className="size-3.5" />
            Hızlı Başvuru
          </div>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            48 saat içinde size özel kira garantisi teklifimiz hazır.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/80 sm:text-lg">
            Bilgilerinizi bırakın, uzman ekibimiz mülkünüze özel teklifi
            hesaplayıp sizi arasın.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur sm:p-6"
        >
          <div className="grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end md:gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="adSoyad" className="text-xs text-white/80">
                Ad Soyad
              </Label>
              <Input
                id="adSoyad"
                placeholder="Adınız Soyadınız"
                aria-invalid={!!errors.adSoyad}
                className="h-11 border-white/20 bg-white/95 text-foreground placeholder:text-muted-foreground focus-visible:border-accent focus-visible:ring-accent/40"
                {...register("adSoyad")}
              />
              {errors.adSoyad && (
                <p className="text-xs text-rose-200">{errors.adSoyad.message}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="telefon" className="text-xs text-white/80">
                Telefon
              </Label>
              <Input
                id="telefon"
                type="tel"
                inputMode="tel"
                placeholder="05XX XXX XX XX"
                aria-invalid={!!errors.telefon}
                className="h-11 border-white/20 bg-white/95 text-foreground placeholder:text-muted-foreground focus-visible:border-accent focus-visible:ring-accent/40"
                {...register("telefon")}
              />
              {errors.telefon && (
                <p className="text-xs text-rose-200">{errors.telefon.message}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="sehir" className="text-xs text-white/80">
                Şehir
              </Label>
              <select
                id="sehir"
                aria-invalid={!!errors.sehir}
                defaultValue=""
                className="flex h-11 w-full rounded-lg border border-white/20 bg-white/95 px-3 text-sm text-foreground shadow-sm transition-colors focus-visible:border-accent focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-accent/40"
                {...register("sehir")}
              >
                <option value="" disabled>
                  Şehir seçin
                </option>
                {SEHIRLER.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.sehir && (
                <p className="text-xs text-rose-200">{errors.sehir.message}</p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="h-11 bg-[#F1C40F] text-[#0F2E47] hover:bg-[#F4D03F] disabled:opacity-70"
            >
              {isSubmitting ? "Gönderiliyor..." : "Hemen Başvur"}
              <ArrowRight className="ml-1 size-4" />
            </Button>
          </div>

          <p className="mt-4 text-center text-xs text-white/60">
            Bilgileriniz üçüncü taraflarla paylaşılmaz. KVKK uyumlu işlenir.
          </p>
        </form>
      </div>
    </section>
  );
}
