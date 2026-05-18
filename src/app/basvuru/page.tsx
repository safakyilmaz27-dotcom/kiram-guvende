import type { Metadata } from "next";
import { ApplicationForm } from "@/components/basvuru/ApplicationForm";

export const metadata: Metadata = {
  title: "Online Başvuru | Kiram Güvende",
  description:
    "Mülkünüz için ücretsiz kira garantisi teklifi alın. 4 adımda online başvuru, 24 saat içinde geri dönüş.",
  robots: { index: true, follow: true },
};

export default function BasvuruPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Online Başvuru
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Mülkünüzü güvenceye alın
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
              4 adımda başvurun, 24 saat içinde size dönelim. Bilgileriniz
              KVKK uyumlu işlenir, üçüncü taraflarla paylaşılmaz.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <ApplicationForm />
      </section>
    </>
  );
}
