"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const HIZMETLER = [
  { href: "/ev-sahipleri", label: "Ev Sahipleri" },
  { href: "/kiracilar", label: "Kiracılar" },
  { href: "/nasil-calisir", label: "Nasıl Çalışır" },
  { href: "/sss", label: "Sıkça Sorulan Sorular" },
];

const SIRKET = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
  { href: "/kariyer", label: "Kariyer" },
];

const SOSYAL = [
  { href: "https://instagram.com/kiramguvende", label: "Instagram", Icon: Instagram },
  { href: "https://linkedin.com/company/kiramguvende", label: "LinkedIn", Icon: Linkedin },
  { href: "https://youtube.com/@kiramguvende", label: "YouTube", Icon: Youtube },
];

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
      {children}
    </h3>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-white/70 transition-colors hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="bg-[#2E8FD9] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white">
              <span aria-hidden className="text-xl leading-none">🏠</span>
              <span>Kiram Güvende</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Ev sahibi misiniz? Kiracı ödemelerinden bağımsız, her ay aynı tarihte
              garantili kira alın. Kiracı bulmak, tahsilat, bakım — hepsi bizden.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {SOSYAL.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <ColumnTitle>Hizmetler</ColumnTitle>
            <ul className="space-y-2.5">
              {HIZMETLER.map((l) => (
                <FooterLink key={l.href} href={l.href}>
                  {l.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          <div>
            <ColumnTitle>Şirket</ColumnTitle>
            <ul className="space-y-2.5">
              {SIRKET.map((l) => (
                <FooterLink key={l.href} href={l.href}>
                  {l.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          <div>
            <ColumnTitle>İletişim</ColumnTitle>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 shrink-0" />
                <a href="tel:+905451332859" className="hover:text-white">
                  0545 133 28 59
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 shrink-0" />
                <a href="mailto:info@kiramguvende.com" className="hover:text-white">
                  info@kiramguvende.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>
                  İsmetpaşa Mah. Trabzon Bulvarı No: 1<br />
                  Onikişubat / Kahramanmaraş
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-5 text-center text-xs text-white/55">
          <p>
            🔒 KVKK Uyumlu &nbsp;|&nbsp; ⚖️ Hukuki Güvenceli &nbsp;|&nbsp; 📊
            Şeffaf Fiyatlandırma &nbsp;|&nbsp; 🏆 Türkiye&apos;nin Kira Garanti
            Platformu
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row">
          <p>© 2025 Kiram Güvende Ltd. Şti. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <Link href="/gizlilik" className="hover:text-white">
              Gizlilik Politikası
            </Link>
            <Link href="/kosullar" className="hover:text-white">
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
