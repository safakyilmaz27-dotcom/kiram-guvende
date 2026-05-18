"use client";

import { FileText, ShieldCheck, Calendar, Wrench, FileX, TrendingUp } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const MADDELER = [
  {
    Icon: ShieldCheck,
    baslik: "Garanti Kapsamı",
    ozet: "Kiracı ödemese, ev boş kalsa, hukuki süreç uzasa — kiranız her ay hesabınızda.",
    detay: [
      "Aylık kira ödemesi, kiracı durumundan bağımsız garantilidir.",
      "12 ay boyunca kesintisiz teminat altındadır.",
      "Boş kalan dönemler dahil tüm sözleşme süresince ödeme devam eder.",
      "Hukuki süreç masrafları (avukat, dosya, icra) bizim üzerimizdedir.",
    ],
  },
  {
    Icon: Calendar,
    baslik: "Ödeme Tarihleri",
    ozet: "Her ayın 1’i. Sabit gün, sabit hesap, sabit tutar.",
    detay: [
      "Aylık kira her ayın 1’inde IBAN’ınıza otomatik transfer edilir.",
      "Resmi tatil veya hafta sonuna denk gelirse bir önceki iş günü yatırılır.",
      "Transfer gerçekleşince SMS + uygulama içi bildirim gönderilir.",
      "Gecikme yaşanırsa sözleşmedeki günlük tazminat oranı uygulanır.",
    ],
  },
  {
    Icon: Wrench,
    baslik: "Bakım Sorumluluğu",
    ozet: "Yapısal sorunlar ev sahibinde, gündelik kullanım hasarı kiracıda.",
    detay: [
      "Çatı, tesisat, ısıtma sistemi gibi yapısal onarımlar ev sahibinin sorumluluğundadır.",
      "Kiracı kaynaklı küçük hasarlar (kapı kolu, ampul, lavabo tıkanıklığı) kiracıya aittir.",
      "7/24 sorun bildirim hattımız üzerinden tüm talepler ücretsiz koordine edilir.",
      "Anlaşmalı usta ağı ile sabit fiyat ve şeffaf faturalandırma sağlanır.",
    ],
  },
  {
    Icon: FileX,
    baslik: "Sözleşme Feshi Koşulları",
    ozet: "30 gün önceden yazılı bildirimle, cayma cezası yok.",
    detay: [
      "Sözleşmeyi 30 gün önceden yazılı bildirim ile sonlandırabilirsiniz.",
      "Cayma cezası veya gizli masraf uygulanmaz.",
      "Devreye girmiş kiracı sözleşmesi yasal süresine kadar korunur.",
      "İptal tarihine kadar olan aylık ödemeleriniz tam olarak yatırılır.",
    ],
  },
  {
    Icon: TrendingUp,
    baslik: "TÜFE Kira Artışı",
    ozet: "Her yıl TÜFE 12 aylık ortalamasına göre otomatik artar.",
    detay: [
      "Yıllık kira artışı, Türk Borçlar Kanunu’nun 344. maddesine uygun uygulanır.",
      "TÜİK’in açıkladığı son 12 aylık TÜFE ortalama değişim oranı baz alınır.",
      "Yeni tutar bir sonraki dönem ödemenizden itibaren otomatik geçerli olur.",
      "Sizden imza, görüşme veya manuel onay istenmez.",
    ],
  },
];

export function ContractSection() {
  return (
    <section className="bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto_1.4fr] lg:gap-16">
          {/* Sol kolon: başlık + intro */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <FileText className="size-3.5" />
              Sözleşme İçeriği
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              İmzalamadan{" "}
              <span className="text-primary">her satırını okuyun.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Sözleşmemizin ana başlıkları aşağıda. Küçük puntolu sürpriz yok —
              hangi durumda ne olacağını imza atmadan görün. Tam metni e-posta
              olarak da iletebiliriz.
            </p>

            <div className="mt-6 rounded-xl border border-primary/15 bg-card p-4">
              <p className="text-sm font-semibold text-foreground">
                Sözleşmenin tam metnini ister misiniz?
              </p>
              <a
                href="mailto:info@kiramguvende.com?subject=Sözleşme Örneği Talebi"
                className="mt-2 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                E-posta ile gönder →
              </a>
            </div>
          </div>

          {/* Dikey ayırıcı çizgi */}
          <div aria-hidden className="hidden w-px bg-gradient-to-b from-transparent via-border to-transparent lg:block" />

          {/* Sağ kolon: accordion */}
          <div className="rounded-2xl border border-border bg-card px-6 sm:px-8">
            <Accordion>
              {MADDELER.map((m, i) => (
                <AccordionItem key={i} value={`madde-${i}`}>
                  <AccordionTrigger className="py-5">
                    <div className="flex items-start gap-4 text-left">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <m.Icon className="size-5" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-base font-semibold text-foreground">
                          {m.baslik}
                        </span>
                        <span className="text-sm font-normal text-muted-foreground">
                          {m.ozet}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-14 pr-4 text-sm leading-relaxed text-muted-foreground">
                    <ul className="space-y-2">
                      {m.detay.map((d, j) => (
                        <li key={j} className="flex gap-2.5">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/50" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
