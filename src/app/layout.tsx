import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "INOVA — Eshik va Romlar | Farg'ona, Chimyon",
  description:
    "Farg'ona tumani, Chimyon shaharchasi. 14 yillik tajriba. PVC va alyumin profillardan eshik va romlar. O'lchov, yetkazib berish va o'rnatish bepul. 5 yil kafolat.",
  keywords: [
    "PVC eshik",
    "PVC rom",
    "alyumin rom",
    "surilma tizim",
    "fasad tizimi",
    "Farg'ona",
    "Chimyon",
    "INOVA",
    "AKFA",
    "eshik o'rnatish",
    "rom o'rnatish",
  ],
  openGraph: {
    title: "INOVA — Eshik va Romlar",
    description:
      "14 yillik tajriba. PVC va alyumin profillardan eshik va romlar. 5 yil kafolat. O'lchov, yetkazish va o'rnatish bepul.",
    locale: "uz_UZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
