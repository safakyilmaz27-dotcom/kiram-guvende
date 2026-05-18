import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Kiram Güvende",
  description: "Admin dashboard",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span aria-hidden className="text-base leading-none">🏠</span>
            <Link href="/admin" className="text-sm font-semibold text-foreground">
              Kiram Güvende
            </Link>
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-700">
              Admin · Mock
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Siteye dön
            </Link>
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                SY
              </div>
              <span className="hidden text-sm font-medium text-foreground sm:inline">
                Şafak Yılmaz
              </span>
            </div>
          </div>
        </div>
      </div>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        {children}
      </main>
    </div>
  );
}
