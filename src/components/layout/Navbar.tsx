"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog } from "@base-ui/react/dialog";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV_LINKS = [
  { href: "/nasil-calisir", label: "Nasıl Çalışır" },
  { href: "/ev-sahipleri", label: "Ev Sahipleri" },
  { href: "/kiracilar", label: "Kiracılar" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 text-lg font-bold text-primary",
        className,
      )}
    >
      <span aria-hidden className="text-xl leading-none">
        🏠
      </span>
      <span>Kiram Güvende</span>
    </Link>
  );
}

function NavLink({
  href,
  active,
  children,
  onClick,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative py-2 text-sm font-medium transition-colors",
        active
          ? "text-primary after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
          : "text-foreground/70 hover:text-primary",
      )}
    >
      {children}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrollPosition(8);
  const [open, setOpen] = useState(false);

  if (pathname?.startsWith("/admin")) return null;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent bg-background/95 backdrop-blur transition-shadow",
        scrolled && "border-border/60 shadow-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Ana navigasyon">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.href} href={l.href} active={isActive(l.href)}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button
            render={<Link href="/basvuru" />}
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Ücretsiz Değerleme Al
          </Button>
        </div>

        <div className="flex items-center md:hidden">
          <ThemeToggle />

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger
            render={
              <button
                type="button"
                aria-label="Menüyü aç"
                className="inline-flex items-center justify-center rounded-md p-2 text-primary md:hidden"
              >
                <Menu className="size-6" />
              </button>
            }
          />

          <Dialog.Portal>
            <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-200" />
            <Dialog.Popup
              className="fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-xs flex-col bg-background p-6 shadow-xl data-[starting-style]:translate-x-full data-[ending-style]:translate-x-full transition-transform duration-200 ease-out"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <Dialog.Close
                  render={
                    <button
                      type="button"
                      aria-label="Menüyü kapat"
                      className="inline-flex items-center justify-center rounded-md p-2 text-foreground/70 hover:text-primary"
                    >
                      <X className="size-6" />
                    </button>
                  }
                />
              </div>

              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobil navigasyon">
                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-md px-3 py-3 text-base font-medium transition-colors",
                      isActive(l.href)
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/80 hover:bg-muted hover:text-primary",
                    )}
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto pt-6">
                <Button
                  render={<Link href="/basvuru" onClick={() => setOpen(false)} />}
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Ücretsiz Değerleme Al
                </Button>
              </div>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
