"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Feature = {
  emoji: string;
  title: string;
  description: string;
  detailTitle: string;
  detailBody: string;
  detailFootnote?: string;
};

const FEATURES: Feature[] = [
  {
    emoji: "💰",
    title: "Garantili Kira",
    description: "Ayın aynı günü, boşluktan bağımsız.",
    detailTitle: "Garantili Kira",
    detailBody:
      "Kiracı ödese de ödemese de ayın 1'inde belirlenen tutar hesabınıza geçer. Boş kalan aylarda da ödeme devam eder. Hiçbir kesinti, hiçbir gecikme.",
  },
  {
    emoji: "🔍",
    title: "Titiz Kiracı Seçimi",
    description: "Gelir belgesi, SGK, referans kontrolü.",
    detailTitle: "Titiz Kiracı Seçimi",
    detailBody:
      "Adayların gelir belgesi, SGK kaydı, kira geçmişi ve referansları incelenir. Kara listedeki kiracılar sistemden elenir. Onay sizin — biz sadece güvenilir adayları sunarız.",
  },
  {
    emoji: "🔧",
    title: "Bakım Yönetimi",
    description: "7/24 sorun bildirimi ve usta koordinasyonu.",
    detailTitle: "Bakım Yönetimi",
    detailBody:
      "7/24 arıza hattı, anlaşmalı usta ağı, fotoğraflı işlem raporu. 500 TL altı onarımlar onayınız beklenmeden yapılır, size raporlanır.",
  },
  {
    emoji: "📊",
    title: "Aylık Raporlama",
    description: "Dijital panel, mülk durumu anlık izleme.",
    detailTitle: "Aylık Raporlama",
    detailBody:
      "Her ay dijital panelden mülkünüzün durumunu, kira ödemesini, bakım geçmişini ve kiracı bilgilerini görebilirsiniz. E-posta özeti otomatik gelir.",
  },
  {
    emoji: "⚖️",
    title: "Hukuki Destek",
    description: "Tahliye sürecini biz yönetiriz.",
    detailTitle: "Hukuki Altyapımız",
    detailBody:
      "Anlaşmalı hukuk büromuz aracılığıyla ihtarname, icra takibi ve tahliye davası süreçlerini uçtan uca yönetiyoruz. Kiracı tahliyesi tamamlanana kadar kiranız ödemeye devam eder. Mahkeme masrafları, icra harçları ve avukatlık ücretleri bize aittir — size sıfır ek maliyet.",
    detailFootnote:
      "Türkiye'de ortalama tahliye süreci 4-5 ay sürer. Biz bu süreçte sizin yerinize hareket ederiz.",
  },
  {
    emoji: "🌍",
    title: "Yurt Dışı Ev Sahipleri",
    description: "Türkiye’de mülkün var, sen dışarıdasın? Sorun değil.",
    detailTitle: "Yurt Dışı Ev Sahipleri",
    detailBody:
      "Noter vekaleti ile tüm işlemler uzaktan tamamlanır. WhatsApp, e-posta veya video görüşme ile iletişim. Zaman farkı bizim sorunumuz, sizin değil.",
  },
];

export function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Hizmetlerimiz
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Mülk yönetiminin her katmanı tek çatı altında
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Kira tahsilatından hukuki desteğe, kiracı seçiminden bakıma — siz
            sadece kira gelirinizi sayın.
          </p>
          <p className="mt-2 text-xs font-medium uppercase tracking-wider text-primary/70">
            Detay için karta tıklayın
          </p>
        </div>

        <div className="mt-14 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feat, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-lg ${
                  isOpen
                    ? "border-primary/40 shadow-lg"
                    : "border-border hover:-translate-y-1 hover:border-primary/30"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`feature-detail-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="relative block w-full cursor-pointer p-6 text-left sm:p-7"
                >
                  <div
                    aria-hidden
                    className="absolute -right-8 -top-8 size-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150"
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-3xl ring-1 ring-primary/10">
                        <span aria-hidden>{feat.emoji}</span>
                      </div>
                      <ChevronDown
                        className={`mt-2 size-5 shrink-0 text-primary/60 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden
                      />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-foreground">
                      {feat.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {feat.description}
                    </p>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`feature-detail-${i}`}
                      key="detail"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border/60 bg-muted/30 px-6 py-5 sm:px-7">
                        <h4 className="text-sm font-semibold text-primary">
                          {feat.detailTitle}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                          {feat.detailBody}
                        </p>
                        {feat.detailFootnote && (
                          <p className="mt-3 border-t border-border/60 pt-3 text-xs italic text-muted-foreground">
                            {feat.detailFootnote}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
