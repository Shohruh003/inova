import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SITE } from "@/src/lib/data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "INOVA — Eshik va Romlar | Farg'ona, Chimyon",
    template: "%s | INOVA",
  },
  description:
    "Farg'ona tumani, Chimyon shaharchasi. 14 yillik tajriba. PVC va alyumin profillardan eshik va romlar. O'lchov, yetkazib berish va o'rnatish xizmatlari. 5 yil kafolat.",
  keywords: [
    "plastik romlar",
    "PVC rom",
    "PVC eshik",
    "alyumin rom",
    "alyumin oyna",
    "surilma tizim",
    "fasad tizimi",
    "romlar Farg'ona",
    "oyna Farg'ona",
    "Chimyon",
    "INOVA",
    "AKFA rom",
    "eshik o'rnatish",
    "rom o'rnatish",
    "rom narxi",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "INOVA — Eshik va Romlar | Farg'ona, Chimyon",
    description:
      "14 yillik tajriba. PVC va alyumin profillardan eshik va romlar. 5 yil kafolat. O'lchov, yetkazish va o'rnatish xizmatlari.",
    url: SITE.url,
    siteName: "INOVA",
    locale: "uz_UZ",
    type: "website",
    images: [{ url: "/logo.png", width: 240, height: 240, alt: "INOVA" }],
  },
};

// Google uchun tarkibiy ma'lumot (LocalBusiness) — Maps va mahalliy qidiruvda chiroyli chiqadi
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeGoodsStore",
  name: "INOVA",
  description:
    "PVC va alyumin profillardan eshik va romlar. O'lchov, yetkazib berish va o'rnatish. 14 yillik tajriba, 5 yil kafolat.",
  url: SITE.url,
  telephone: SITE.phone,
  image: `${SITE.url}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chimyon shaharchasi",
    addressLocality: "Farg'ona tumani",
    addressRegion: "Farg'ona viloyati",
    addressCountry: "UZ",
  },
  openingHours: "Mo-Sa 09:00-18:00",
  areaServed: "O'zbekiston",
  sameAs: [
    `https://t.me/${SITE.telegram}`,
    `https://instagram.com/${SITE.instagram}`,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
