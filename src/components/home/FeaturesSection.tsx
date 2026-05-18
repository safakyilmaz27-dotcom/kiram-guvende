"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Feature = {
  emoji: string;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    emoji: "💰",
    title: "Garantili Kira",
    description: "Ayın aynı günü, boşluktan bağımsız.",
  },
  {
    emoji: "🔍",
    title: "Titiz Kiracı Seçimi",
    description: "Gelir belgesi, SGK, referans kontrolü.",
  },
  {
    emoji: "🔧",
    title: "Bakım Yönetimi",
    description: "7/24 sorun bildirimi ve usta koordinasyonu.",
  },
  {
    emoji: "📊",
    title: "Aylık Raporlama",
    description: "Dijital panel, mülk durumu anlık izleme.",
  },
  {
    emoji: "⚖️",
    title: "Hukuki Destek",
    description: "Tahliye sürecini biz yönetiriz.",
  },
  {
    emoji: "🌍",
    title: "Yurt Dışı Ev Sahipleri",
    description: "Türkiye’de mülkün var, sen dışarıdasın? Sorun değil.",
  },
];

export function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-7"
            >
              <div
                aria-hidden
                className="absolute -right-8 -top-8 size-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150"
              />

              <div className="relative">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-3xl ring-1 ring-primary/10">
                  <span aria-hidden>{feat.emoji}</span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {feat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
