"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Building2, ShieldCheck, Timer, Star } from "lucide-react";

type Stat = {
  Icon: typeof Building2;
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
};

const STATS: Stat[] = [
  { Icon: Building2, target: 47, suffix: "+", label: "Yönetilen Mülk" },
  { Icon: ShieldCheck, target: 100, prefix: "%", label: "Ödeme Garantisi" },
  { Icon: Timer, target: 12, suffix: " Gün", label: "Ortalama Yerleştirme" },
  { Icon: Star, target: 4.9, decimals: 1, suffix: "/5", label: "Ev Sahibi Memnuniyeti" },
];

function Counter({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
  inView,
}: {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  inView: boolean;
}) {
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) =>
    `${prefix}${v.toLocaleString("tr-TR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}${suffix}`,
  );
  const [text, setText] = useState(`${prefix}0${decimals ? "," + "0".repeat(decimals) : ""}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, target, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
    });
    const unsub = display.on("change", (v) => setText(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, target, mv, display]);

  return <span>{text}</span>;
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-[#EAF1F8] via-[#F4F8FC] to-[#DCE7F2]"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,#2E8FD9_1px,transparent_0)] [background-size:32px_32px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Rakamlarla Kiram Güvende
          </h2>
          <p className="mt-3 text-base text-foreground/70">
            Binlerce ev sahibinin kira tahsilatını ve mülk yönetimini biz
            üstleniyoruz — her ay, sapmasız.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl border border-primary/10 bg-white/70 p-6 backdrop-blur-sm transition-shadow hover:shadow-lg sm:p-8"
            >
              <div className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <stat.Icon className="size-5" />
              </div>
              <div className="mt-5 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                <Counter
                  target={stat.target}
                  decimals={stat.decimals}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>
              <p className="mt-2 text-sm font-medium text-foreground/70 sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
