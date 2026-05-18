import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "İletişim | Kiram Güvende",
  description:
    "Kiram Güvende ile iletişime geçin. Telefon, WhatsApp veya form üzerinden 24 saat içinde size dönüyoruz.",
};

const PHONE_DISPLAY = "0545 133 28 59";
const PHONE_TEL = "+905451332859";
const PHONE_WA = "905451332859";
const EMAIL = "info@kiramguvende.com";

const CHANNELS = [
  {
    Icon: Phone,
    title: "Telefon",
    primary: PHONE_DISPLAY,
    sub: "Pazartesi – Cumartesi 09:00 – 19:00",
    href: `tel:${PHONE_TEL}`,
    cta: "Hemen ara",
  },
  {
    Icon: MessageCircle,
    title: "WhatsApp",
    primary: PHONE_DISPLAY,
    sub: "Yazın, ortalama 12 dakikada dönelim",
    href: `https://wa.me/${PHONE_WA}`,
    cta: "WhatsApp’tan yaz",
    external: true,
  },
  {
    Icon: Mail,
    title: "E-posta",
    primary: EMAIL,
    sub: "Belge, sözleşme ve detaylı sorular için",
    href: `mailto:${EMAIL}`,
    cta: "E-posta gönder",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F2E47] via-[#1B4F72] to-[#2C6FA0] text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider ring-1 ring-white/20">
              İletişim
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Bir telefon, bir cevap, bir karar.
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Sorularınız için bizi arayın ya da kısa bir not bırakın.
              Ortalama <strong className="text-white">12 dakikada</strong> WhatsApp,{" "}
              <strong className="text-white">24 saatte</strong> form yanıtı veriyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {CHANNELS.map(({ Icon, title, primary, sub, href, cta, external }) => (
            <a
              key={title}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <h2 className="mt-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {title}
              </h2>
              <p className="mt-1 text-lg font-bold text-foreground">{primary}</p>
              <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                {cta}
                <Send className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Form + Office */}
      <section className="bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8 lg:py-20">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Mesaj bırakın, sizi arayalım
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Konunuza uygun uzmanı sizinle eşleştirip 24 saat içinde dönüyoruz.
              Form üzerinden iletilen bilgiler yalnızca size dönmek için
              kullanılır, üçüncü taraflarla paylaşılmaz.
            </p>

            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Merkez Ofis
              </h3>
              <div className="mt-4 flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed">
                  İsmetpaşa Mah. Trabzon Bulvarı No: 1<br />
                  Onikişubat / Kahramanmaraş
                </p>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
                <div className="text-sm leading-relaxed">
                  <p>Pazartesi – Cuma: 09:00 – 19:00</p>
                  <p>Cumartesi: 10:00 – 16:00</p>
                  <p className="text-muted-foreground">Pazar: Kapalı</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <iframe
                title="Kiram Güvende Merkez Ofis"
                src="https://www.google.com/maps?q=Kahramanmara%C5%9F+Onikisubat&output=embed"
                className="aspect-[4/3] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6">
              <h3 className="text-base font-bold text-foreground">
                Acil bir durum mu?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Kira ödenmedi, kiracı çıkmıyor, mülkünüzde acil bir sorun var —
                doğrudan arayın.
              </p>
              <a
                href={`tel:${PHONE_TEL}`}
                className="mt-4 inline-flex items-center gap-2 text-base font-bold text-primary"
              >
                <Phone className="size-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
