import Link from "next/link";
import {
  ShieldCheck,
  Wallet,
  Wrench,
  Search,
  FileSignature,
  CalendarCheck,
  AlertTriangle,
  Check,
  X,
  Quote,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { KiraHesaplayici } from "@/components/KiraHesaplayici";
import { Form } from "@/components/Form";
import { StatsSection } from "@/components/home/StatsSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { QuickApplySection } from "@/components/home/QuickApplySection";
import { ContractSection } from "@/components/home/ContractSection";

const SSS: { q: string; lead: string; a: string }[] = [
  {
    q: "Eviniz boş kalırsa ne olur?",
    lead: "Yine de ödeme yapılır.",
    a: "Mülkünüz boşta kalsa bile, sözleşmeniz yürürlükteyken aylık kira ödemeniz her ayın 1’inde hesabınıza yatar. Kiracı arama süreci tamamen bizim sorumluluğumuzdadır; siz beklemezsiniz.",
  },
  {
    q: "Kiracı zarar verirse?",
    lead: "Sigorta + depozito ile karşılanır.",
    a: "Giriş sırasındaki fotoğraflı teslim tutanağı, kiracı depozitosu ve bizim teminat sigortamız üç katmanlı koruma sağlar. Kiracıdan tahsil edilemeyen hasarlar bile size yansıtılmaz — bedeli biz öderiz.",
  },
  {
    q: "Sözleşmeyi iptal edebilir miyim?",
    lead: "30 gün önceden bildirimle.",
    a: "Standart 12 aylık sözleşmenizi 30 gün önceden yazılı bildirim ile feshedebilirsiniz. Cayma cezası uygulanmaz; devreye girmiş kira ödemeleriniz iptal tarihine kadar tam yatar.",
  },
  {
    q: "Kira artışı nasıl yapılır?",
    lead: "TÜFE oranında, her yıl otomatik.",
    a: "Yıllık kira artışı, Türk Borçlar Kanunu’nun belirlediği TÜFE 12 aylık ortalama değişim oranı çerçevesinde otomatik uygulanır. Sizden imza veya görüşme gerekmez; yeni tutar bir sonraki dönem ödemenizden itibaren geçerli olur.",
  },
  {
    q: "Mülkümü denetleyebilir miyim?",
    lead: "Evet, 3 ayda bir raporlama.",
    a: "Çeyrek bazlı denetim raporu (fotoğraflar, bakım notları, kiracı geri bildirimi) dijital panonuza otomatik düşer. İsterseniz ek olarak yıllık bir fiziki ziyaret de planlayabilirsiniz.",
  },
  {
    q: "Yurt dışındaysam nasıl başvururum?",
    lead: "Tam dijital, noter vekaleti ile.",
    a: "Konsoloslukta düzenlenen genel vekalet + e-imzalı sözleşme + video ekspertiz ile Türkiye’ye ayak basmadan tüm süreci tamamlarsınız. Gurbetçi ev sahipleri için özel bir başvuru kanalımız vardır.",
  },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B5286] via-[#2E8FD9] to-[#54AEF5] text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]"
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20">
              <span className="size-1.5 rounded-full bg-accent" />
              Türkiye&apos;nin kira garanti platformu
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Kiracınız ödemese bile{" "}
              <span className="text-accent">her ay kira hesabınızda.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/80">
              Aramaya, ihtar çekmeye, mahkemeye düşmeye son. Kiracı bulmak,
              tahsilat, bakım ve tahliye — hepsini biz üstleniyoruz. Siz sadece
              ayın 1&apos;inde mesajı görün.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<Link href="#hesaplayici" />}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Aylık Garantili Kiramı Hesapla
                <ArrowRight className="ml-1 size-4" />
              </Button>
              <Button
                render={<Link href="#nasil-calisir" />}
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                Nasıl Çalışıyor?
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-accent" />
                12 ay kira teminatı
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-accent" />
                Hukuki süreç dahil
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-accent" />
                Hasar tazminat zinciri
              </div>
            </div>
          </div>

          {/* Hero side panel: "Bu Ay Kazandıklarınız" mock-up */}
          <div className="relative flex items-center justify-center">
            {/* Floating notification — top right */}
            <div className="absolute -top-4 right-0 z-10 w-[280px] animate-[slideIn_0.6s_ease-out] rounded-xl border border-emerald-400/30 bg-[#1B5286] p-4 shadow-2xl ring-1 ring-emerald-400/20 sm:-right-4">
              <div className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                  <Check className="size-5 text-emerald-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-semibold text-white">Kiram Güvende</p>
                    <span className="text-[10px] text-white/40">şimdi</span>
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-white">
                    Kasım kirası yatırıldı
                  </p>
                  <p className="mt-0.5 text-sm font-bold text-emerald-300">
                    ₺18.500
                  </p>
                </div>
              </div>
            </div>

            {/* Main card: "Bu Ay Kazandıklarınız" */}
            <div className="w-full max-w-md rounded-2xl bg-white/10 p-1 ring-1 ring-white/20 backdrop-blur">
              <div className="rounded-xl bg-[#1B5286]/85 p-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-wider text-white/50">
                    Bu Ay Kazandıklarınız
                  </p>
                  <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                    KASIM
                  </span>
                </div>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">₺18.500</span>
                  <span className="text-sm text-emerald-300">hesabınızda</span>
                </div>

                <div className="my-6 h-px bg-white/10" />

                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/40">
                  İki senaryo, tek sonuç
                </p>

                <div className="space-y-3">
                  {/* Scenario 1: tenant paid */}
                  <div className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="flex size-7 items-center justify-center rounded-full bg-emerald-500/15">
                        <Check className="size-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          Kiracı ödedi
                        </p>
                        <p className="text-[11px] text-white/50">
                          27 Ekim, banka transferi
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-emerald-300">
                      ✓ Ödendi
                    </span>
                  </div>

                  {/* Scenario 2: tenant did NOT pay — still paid */}
                  <div className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3.5 ring-1 ring-emerald-400/20">
                    <div className="flex items-center gap-3">
                      <div className="flex size-7 items-center justify-center rounded-full bg-emerald-500/15">
                        <Check className="size-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          Kiracı ödemedi
                        </p>
                        <p className="text-[11px] text-white/50">
                          Süreç bizde, hukuki takip başladı
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-emerald-300">
                      ✓ Ödendi
                    </span>
                  </div>
                </div>

                <p className="mt-6 text-center text-xs text-white/50">
                  Kiracı ne yaparsa yapsın, kira her ay hesabınızda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ İSTATİSTİKLER ============ */}
      <StatsSection />

      {/* ============ HİZMETLER ============ */}
      <FeaturesSection />

      {/* ============ PROBLEM ============ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ev sahibi olmak artık bir gelir değil,{" "}
            <span className="text-primary">bir iş hâline geldi.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tanıdık geliyor mu? Bu üç korku Türkiye&apos;deki her ev sahibinin sırtında.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Wallet,
              baslik: "Her ay aynı endişe",
              metin:
                "Ayın 5’i geliyor, kira hâlâ yok. Mesaj atıyorsun, telefonlara bakmıyor. Geçen ay da geç yatırmıştı.",
            },
            {
              icon: AlertTriangle,
              baslik: "Hukuki süreç 4-5 ay",
              metin:
                "İhtarname, icra, tahliye davası, arabulucu... Avukat parası ödediğin halde kiracın hâlâ evinde oturuyor.",
            },
            {
              icon: Wrench,
              baslik: "Tadilat şoku",
              metin:
                "“Evde bomba patlamış gibi” — Hürriyet’te okuduğun ev sahibi 150.000 TL tadilat masrafı çıkardı. Sıradaki sen olma.",
            },
          ].map((c) => (
            <div
              key={c.baslik}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="inline-flex size-11 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                <c.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{c.baslik}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.metin}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ NASIL ÇALIŞIR ============ */}
      <section id="nasil-calisir" className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Nasıl Çalışır
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              3 adımda kira garantisi
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Bir kere imzalayın, gerisini biz yapalım.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                num: "01",
                icon: Search,
                baslik: "Mülk ekspertizi",
                metin:
                  "Uzman ekibimiz mülkünüzü inceler, piyasa kirasını belirler, hasar tutanağı hazırlar.",
              },
              {
                num: "02",
                icon: FileSignature,
                baslik: "Sözleşme & kiracı",
                metin:
                  "Güvenilir kiracıyı biz buluruz, sözleşmeyi biz yaparız. Siz sadece onay verirsiniz.",
              },
              {
                num: "03",
                icon: CalendarCheck,
                baslik: "Her ayın 1’i kira hesapta",
                metin:
                  "Kiracı yatırsın veya yatırmasın — kira her ay aynı tarihte hesabınızda olur. Bitti.",
              },
            ].map((s, i) => (
              <div key={s.num} className="relative">
                <div className="absolute -top-3 left-6 text-6xl font-bold text-primary/10">
                  {s.num}
                </div>
                <div className="relative rounded-2xl border border-border bg-card p-6 pt-8">
                  <div className="inline-flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <s.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{s.baslik}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.metin}
                  </p>
                </div>
                {i < 2 && (
                  <div
                    aria-hidden
                    className="absolute top-1/2 right-0 hidden h-px w-8 translate-x-full bg-border md:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ KARŞILAŞTIRMA ============ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Kendi başınıza vs. Kiram Güvende
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Aynı evi kiraya verin. Ama farkı hissedin.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid grid-cols-3 divide-x divide-border">
            <div className="p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Konu
              </h3>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Kendi Başınıza
              </h3>
            </div>
            <div className="bg-primary/5 p-6 text-center">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Kiram Güvende
              </h3>
            </div>
          </div>

          {[
            ["Kira tahsilatı", "Her ay arama, mesaj, ısrar", "Otomatik, ayın 1'i"],
            ["Kiracı bulma", "Emlakçı + ilan + görüşmeler", "Biz buluruz, onaya sunarız"],
            ["Tahliye süreci", "4-5 ay, avukat ücreti", "Süreç bize ait, kira akmaya devam eder"],
            ["Hasar riski", "Tüm zarar size", "Teminat + sigorta zinciri"],
            ["Boş kalan ay", "Sıfır kira", "Garantili ödeme devam eder"],
            ["Aylık iş yükü", "Saatler", "Sıfır — sadece bildirimi okuyun"],
          ].map(([konu, kendi, biz]) => (
            <div
              key={konu}
              className="grid grid-cols-3 divide-x divide-border border-t border-border"
            >
              <div className="p-5 text-sm font-medium">{konu}</div>
              <div className="flex items-center justify-center gap-2 p-5 text-sm text-muted-foreground">
                <X className="size-4 shrink-0 text-destructive" />
                <span>{kendi}</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-primary/5 p-5 text-sm font-medium text-foreground">
                <Check className="size-4 shrink-0 text-emerald-600" />
                <span>{biz}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ HESAPLAYICI ============ */}
      <section
        id="hesaplayici"
        className="relative overflow-hidden bg-[#2E8FD9] text-white"
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]"
        />
        <div
          aria-hidden
          className="absolute -top-32 -right-32 size-96 rounded-full bg-accent/10 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-32 size-96 rounded-full bg-primary/30 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex items-center rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent ring-1 ring-accent/30">
              Hesaplayıcı
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Mülkünüz <span className="text-accent">Ne Kadar Kazanır?</span>
            </h2>
            <p className="mt-5 text-lg text-white/80">
              Aylık kira tutarınızı girin, hizmet bedeli düşülmüş net gelirinizi
              ve sözleşme süresince toplam kazancınızı anında görün. Kayıt yok,
              bilgi vermeye gerek yok — 30 saniyede sonuç.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                "Şeffaf hizmet bedeli (%8)",
                "Hiçbir gizli kesinti yok",
                "Yıllık brüt ve net karşılaştırması",
                "Kiracı ödemese bile garantili",
              ].map((m) => (
                <li key={m} className="flex items-center gap-3 text-sm text-white/90">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/30">
                    <Check className="size-3.5 text-emerald-300" />
                  </div>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <KiraHesaplayici />
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIAL / GÜVEN ============ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ev sahipleri ne diyor?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              ad: "Mehmet K.",
              rol: "Kahramanmaraş, 2 daire sahibi",
              metin:
                "İki yıldır kiracım kiramı geç yatırıyordu. Kiram Güvende ile artık ayın 1'inde mesajı görüyorum, o kadar. Huzur paha biçilemez.",
            },
            {
              ad: "Gülay T.",
              rol: "Almanya’dan, Alanya’da daire",
              metin:
                "Gurbetteyim, evimi uzaktan yönetemiyordum. Tatile her geldiğimde otelde kalıyorduk. Şimdi evim onların ellerinde, ben sadece kira alıyorum.",
            },
            {
              ad: "Ayşe D.",
              rol: "Emekli, İstanbul",
              metin:
                "Avukat tutmadan, mahkemeye gitmeden kiracı çıkardılar. Stresten kurtuldum. Eski emlakçımdan farklı, gerçekten arkamda olduklarını hissediyorum.",
            },
          ].map((t) => (
            <figure
              key={t.ad}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <Quote className="size-6 text-primary/30" />
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground">
                “{t.metin}”
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <div className="font-semibold text-foreground">{t.ad}</div>
                <div className="text-xs text-muted-foreground">{t.rol}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ============ SÖZLEŞME İÇERİĞİ ============ */}
      <ContractSection />

      {/* ============ HIZLI BAŞVURU ============ */}
      <QuickApplySection />

      {/* ============ SSS ============ */}
      <section id="sss" className="bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Sıkça Sorulan Sorular
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Aklınızdaki her şey
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ev sahiplerinin en çok merak ettikleri. Cevabını bulamadıysanız{" "}
              <Link href="/iletisim" className="font-medium text-primary underline-offset-4 hover:underline">
                bize yazın
              </Link>
              .
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card px-6 sm:px-8">
            <Accordion>
              {SSS.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="py-5">
                    <div className="flex flex-col items-start gap-1 text-left">
                      <span className="text-base font-semibold text-foreground">
                        {item.q}
                      </span>
                      <span className="text-sm font-medium text-primary">
                        {item.lead}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pr-8 text-sm leading-relaxed text-muted-foreground">
                    <p>{item.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ============ TEKRAR CTA ============ */}
      <QuickApplySection />

      {/* ============ FİNAL CTA / FORM ============ */}
      <section className="bg-[#2E8FD9] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Bu ayın kirası için endişelenmenize gerek yok.
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Bilgilerinizi bırakın, uzman ekibimiz 24 saat içinde sizi arasın.
              Ücretsiz mülk değerlemesi ve garantili kira teklifinizi alın.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Bilgileriniz emlakçıya satılmaz",
                "Tek bir arama — ısrar yok",
                "Beğenmezseniz hiçbir yükümlülük yok",
              ].map((m) => (
                <li key={m} className="flex items-center gap-3">
                  <div className="flex size-6 items-center justify-center rounded-full bg-accent/20">
                    <Check className="size-3.5 text-accent" />
                  </div>
                  <span className="text-white/90">{m}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Form />
          </div>
        </div>
      </section>
    </>
  );
}
