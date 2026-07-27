"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { PRODUCTS, SITE } from "@/src/lib/data";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";
import ProductsCatalog from "./ProductsCatalog";
import SubpageHeader from "./SubpageHeader";
import { TelegramIcon } from "./icons";
import { useI18n } from "@/src/lib/i18n";

export default function CatalogView() {
  const { t } = useI18n();
  return (
    <main className="min-h-screen bg-white">
      <SubpageHeader backHref="/" backKey="nav.backHome" />

      {/* Sahifa sarlavhasi */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #012F33 0%, #0F766E 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18 text-center">
          <nav className="mb-6 flex items-center justify-center gap-2" style={{ fontSize: 13.5 }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)" }} className="hover:underline">
              {t("detail.crumbHome")}
            </Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>/</span>
            <span style={{ color: "#5EEAD4", fontWeight: 600 }}>{t("detail.crumbProducts")}</span>
          </nav>
          <h1
            style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)" }}
          >
            {t("products.badge")}
          </h1>
          <p
            className="mt-4 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.8)", fontSize: 16.5, lineHeight: 1.8 }}
          >
            {t("catalog.desc1")} {PRODUCTS.length} {t("products.subtitle2")}
          </p>
        </div>
      </section>

      {/* Katalog */}
      <section className="py-16" style={{ background: "#F0FDFA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductsCatalog />
          <p
            className="text-center mt-10 max-w-2xl mx-auto"
            style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.7 }}
          >
            {t("catalog.note")}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #012F33 0%, #0F766E 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(1.4rem, 3.5vw, 2rem)" }}>
            {t("catalog.ctaHeading")}
          </h2>
          <p
            className="mt-3 mb-8"
            style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, lineHeight: 1.7 }}
          >
            {t("catalog.ctaDesc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl"
              style={{ background: "#fff", color: "#012F33", fontWeight: 700, fontSize: 16 }}
            >
              <Phone size={18} />
              {SITE.phoneDisplay}
            </a>
            <a
              href={`https://t.me/${SITE.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white transition-all duration-200 hover:bg-white/10"
              style={{ border: "1.5px solid rgba(255,255,255,0.4)", fontWeight: 600, fontSize: 16 }}
            >
              <TelegramIcon size={18} />
              {t("detail.tgWrite")}
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
