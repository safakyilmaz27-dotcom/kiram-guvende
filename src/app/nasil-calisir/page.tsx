import Link from "next/link";
import type { Metadata } from "next";
import {
  Phone,
  ClipboardCheck,
  FileSignature,
  UserSearch,
  KeyRound,
  CalendarCheck,
  Check,
  ArrowRight,
  ShieldCheck,
  Wallet,
  Wrench,
  Scale,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Nasıl Çalışır | Kiram Güvende",
  description:
    "Mülk ekspertizinden kiracı yerleştirmeye, aylık tahsilattan hukuki sürece — Kiram Güvende’nin adım adım işleyişi.",
};

const STEPS = [
  {
    Icon: Phone,
    sure: "10 dakika",
    baslik: "Başvuru & Ön Görüşme",
    metin:
      "Formu doldurun veya bizi arayın. Mülkünüz, beklediğiniz kira ve sözleşme tercihiniz hakkında kısa bir görüşme yapalım. Bu aşama tamamen ücretsiz, hiçbir yükümlülük yok.",
    detay: [
      "Telefon veya web formu",
      "Sözlü ön kira tespiti",
      "Sözleşme yapısının anlatımı",
    ],
  },
  {
    Icon: ClipboardCheck,
    sure: "1–2 gün",
    baslik: "Mülk Ekspertizi",
    metin:
      "Uzman ekspertiz ekibimiz mülkünüzü yerinde inceler. Piyasa kira değerini belirler, her odanın 360° fotoğrafını ve hasar durumunu tutanak altına alır. Bu tutanak çıkışta haklarınızı korur.",
    detay: [
      "Piyasa kira tespiti",
      "Fotoğraflı teslim tutanağı",
      "İmar, tapu ve abonelik kontrolü",
    ],
  },
  {
    Icon: FileSignature,
    sure: "1 gün",
    baslik: "Sözleşme & Garanti Başlangıcı",
    metin:
      "Hizmet bedeli, garanti tutarı, süre ve tüm şartlar netleştirildikten sonra sözleşme imzalanır. Yurt dışındaysanız e-imza ile uzaktan da yapılabilir. İmzayla birlikte kira garantiniz devreye girer.",
    detay: [
      "Şeffaf %12 hizmet bedeli",
      "E-imza desteği (gurbetçiler için)",
      "12 ay kira teminatı",
    ],
  },
  {
    Icon: UserSearch,
    sure: "5–15 gün",
    baslik: "Kiracı Bulma & Onayınız",
    metin:
      "İlan yönetimi, başvuru filtreleme, gelir belgesi, SGK ve referans kontrolünü biz yaparız. Size en uygun 2-3 adayı sunarız — son onay her zaman sizdedir. Onaylamadığınız hiç kimse evinize girmez.",
    detay: [
      "İlan + portföy yönetimi",
      "Gelir, SGK, sicil kontrolü",
      "2–3 aday → siz seçersiniz",
    ],
  },
  {
    Icon: KeyRound,
    sure: "Aynı gün",
    baslik: "Anahtar Teslim",
    metin:
      "Kiracı seçildiğinde anahtar teslimini biz koordine ederiz. Çıkışta kullanılacak referans tutanak ve fotoğraflar imzalı şekilde saklanır. Süreç boyunca size sadece kısa bir bildirim.",
    detay: [
      "Anahtar teslim koordinasyonu",
      "Referans tutanak arşivi",
      "Kiracıya kullanım rehberi",
    ],
  },
  {
    Icon: CalendarCheck,
    sure: "Her ayın 1’i — sınırsız",
    baslik: "Kira Hesabınızda, Yönetim Bizde",
    metin:
      "Her ayın 1’inde kira hesabınızda. Kiracı geç yatırsa, hiç yatırmasa, ev boş kalsa — sizi ilgilendirmez. Bakım, tahsilat, raporlama ve gerekirse hukuki süreç tamamen bizim sorumluluğumuzdadır.",
    detay: [
      "Sapmasız aylık ödeme",
      "Dijital panel + aylık rapor",
      "7/24 bakım & hukuki süreç",
    ],
  },
];

const BIZIM_TARAFIMIZ = [
  { Icon: Wallet, baslik: "Tahsilat", metin: "Her ayın 1’inde otomatik banka transferi. Gecikme tazminatı sözleşmede." },
  { Icon: UserSearch, baslik: "Kiracı Yönetimi", metin: "Başvuru → filtreleme → onay → anahtar. Sizin yapacağınız tek şey son onay." },
  { Icon: Wrench, baslik: "Bakım & Onarım", metin: "7/24 sorun bildirim hattı. Anlaşmalı usta ağı, fatura raporlamada." },
  { Icon: Scale, baslik: "Hukuki Süreç", metin: "İhtarname, icra, tahliye davası — hepsi avukat ekibimizin sorumluluğunda." },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F2E47] via-[#1B4F72] to-[#2C6FA0] text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider ring-1 ring-white/20">
              Nasıl Çalışır
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Bir kere imzalayın,{" "}
              <span className="text-accent">gerisini biz yapalım.</span>
            </h1>
            <p className="mt-5 text-lg text-white/80">
              İlk telefondan ilk kiranızın hesabınıza geçtiği güne 6 adım, ortalama
              3 hafta. Sonrası sınırsız: kira her ay, her ay aynı gün.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                render={<Link href="/iletisim" />}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Hemen Başla
                <ArrowRight className="ml-1 size-4" />
              </Button>
              <Button
                render={<Link href="/#hesaplayici" />}
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                Kazancımı Hesapla
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Steps */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            6 adımda kira garantisi
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Her adım net, her sorumluluk yazılı. Sürpriz yok.
          </p>
        </div>

        <ol className="relative space-y-10 sm:space-y-12">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-6 top-3 bottom-3 hidden w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent sm:block"
          />

          {STEPS.map((step, i) => (
            <li key={step.baslik} className="relative sm:pl-20">
              {/* Step circle */}
              <div className="absolute left-0 top-0 hidden size-12 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-background sm:flex">
                <step.Icon className="size-5" />
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md sm:p-7">
                <div className="flex flex-wrap items-center gap-3 sm:hidden">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <step.Icon className="size-4" />
                  </div>
                  <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-semibold text-accent">
                    {step.sure}
                  </span>
                </div>

                <div className="hidden items-center gap-3 sm:flex">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Adım {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-semibold text-accent">
                    {step.sure}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-bold text-foreground sm:text-2xl">
                  {step.baslik}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {step.metin}
                </p>

                <ul className="mt-5 grid gap-2 sm:grid-cols-3">
                  {step.detay.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-2 rounded-lg bg-muted/60 px-3 py-2 text-xs text-foreground/80"
                    >
                      <Check className="size-3.5 shrink-0 text-emerald-600" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Behind the scenes */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Perde Arkası
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Sözleşmeden sonra biz neler yapıyoruz?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Siz mesajı görmeden önce arkada dönen iş.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BIZIM_TARAFIMIZ.map((b) => (
              <div
                key={b.baslik}
                className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <b.Icon className="size-5" />
                </div>
                <h3 className="mt-4 text-base font-bold">{b.baslik}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b.metin}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing transparency */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                <ShieldCheck className="size-3.5" />
                Şeffaf Fiyatlandırma
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Tek bir oran. Gerisi yok.
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Aylık kiranızın <strong className="text-primary">%12’si</strong>{" "}
                hizmet bedelidir. İlan ücreti, avukat masrafı, ekspertiz, bakım
                koordinasyonu, raporlama — hepsi bu orana dahildir. Sürpriz fatura
                yok.
              </p>

              <Button
                render={<Link href="/#hesaplayici" />}
                size="lg"
                className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Net Gelirimi Hesapla
                <ArrowRight className="ml-1 size-4" />
              </Button>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Bu oran neyi kapsıyor?
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  "İlan, kiracı arama, filtreleme",
                  "Mülk ekspertizi ve teslim tutanağı",
                  "Aylık otomatik tahsilat & raporlama",
                  "7/24 bakım koordinasyonu",
                  "İhtarname, icra, tahliye davası",
                  "Çıkış ekspertizi ve hasar tahsili",
                ].map((m) => (
                  <li key={m} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1B4F72] text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            İlk telefon 10 dakika. Sonrası 12 yıl huzur.
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Bilgi alın, ücretsiz değerleme isteyin. Hiçbir yükümlülüğünüz yok.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              render={<Link href="/iletisim" />}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Bizi Arayın
              <ArrowRight className="ml-1 size-4" />
            </Button>
            <Button
              render={<Link href="/#sss" />}
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              Sıkça Sorulan Sorular
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
