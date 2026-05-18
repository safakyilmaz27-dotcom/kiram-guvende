import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const siteUrl = "https://kiramguvende.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "RealEstateAgent"],
      "@id": `${siteUrl}/#organization`,
      name: "Kiram Güvende",
      legalName: "Kiram Güvende Ltd. Şti.",
      description:
        "Türkiye'de bireysel ev sahiplerine kira garantisi ve mülk yönetimi hizmeti sunan platform. Kiracı ne yaparsa yapsın her ay aynı gün kira hesabınızda.",
      url: siteUrl,
      logo: `${siteUrl}/icon`,
      image: `${siteUrl}/opengraph-image`,
      telephone: "+90-545-133-28-59",
      email: "info@kiramguvende.com",
      priceRange: "%12 hizmet bedeli",
      address: {
        "@type": "PostalAddress",
        streetAddress: "İsmetpaşa Mah. Trabzon Bulvarı No: 1",
        addressLocality: "Onikişubat",
        addressRegion: "Kahramanmaraş",
        postalCode: "46050",
        addressCountry: "TR",
      },
      areaServed: [
        { "@type": "City", name: "Kahramanmaraş" },
        { "@type": "City", name: "Gaziantep" },
        { "@type": "City", name: "Adana" },
        { "@type": "City", name: "Mersin" },
        { "@type": "City", name: "Ankara" },
        { "@type": "City", name: "İstanbul" },
        { "@type": "City", name: "İzmir" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "16:00",
        },
      ],
      sameAs: [
        "https://instagram.com/kiramguvende",
        "https://linkedin.com/company/kiramguvende",
        "https://youtube.com/@kiramguvende",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "512",
        bestRating: "5",
        worstRating: "1",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Mülk Yönetim Hizmetleri",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Kira Garantisi",
              description:
                "Kiracı ödesin ödemesin, her ayın 1'inde garantili kira ödemesi.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Kiracı Bulma ve Yerleştirme",
              description: "Gelir, SGK ve referans kontrolü ile titiz kiracı seçimi.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Hukuki Destek",
              description: "İhtarname, icra takibi ve tahliye davası süreçleri dahil.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Kiram Güvende",
      inLanguage: "tr-TR",
      publisher: { "@id": `${siteUrl}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/blog?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kiram Güvende | Kira Garantisi ile Düzenli Gelir",
  description:
    "Ev sahibi misiniz? Kiracı ödemelerinden bağımsız, her ay aynı tarihte garantili kira alın. Kiracı bulmak, tahsilat, bakım — hepsi bizden.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Kiram Güvende",
    title: "Kiram Güvende | Kira Garantisi ile Düzenli Gelir",
    description:
      "Ev sahibi misiniz? Kiracı ödemelerinden bağımsız, her ay aynı tarihte garantili kira alın. Kiracı bulmak, tahsilat, bakım — hepsi bizden.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Kiram Güvende — Kira Garantisi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiram Güvende | Kira Garantisi ile Düzenli Gelir",
    description:
      "Ev sahibi misiniz? Kiracı ödemelerinden bağımsız, her ay aynı tarihte garantili kira alın.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster
            position="top-center"
            richColors
            closeButton
            toastOptions={{ duration: 5000 }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
