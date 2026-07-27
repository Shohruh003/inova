"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS, FEATURED_SLUGS } from "@/src/lib/data";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import { useI18n } from "@/src/lib/i18n";

// Bosh sahifa bo'limi: tanlangan mahsulotlar + to'liq katalogga havola.
export default function Products() {
  const { t } = useI18n();
  const featured = FEATURED_SLUGS.map((slug) =>
    PRODUCTS.find((p) => p.slug === slug)
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section id="products" className="py-24" style={{ background: "#F0FDFA" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "#CCFBF1",
              color: "#0F766E",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            {t("products.badge")}
          </span>
          <h2
            style={{
              color: "#012F33",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
            }}
          >
            {t("products.heading")}
          </h2>
          <p
            className="mt-3 max-w-xl mx-auto"
            style={{ color: "#64748b", fontSize: 16, lineHeight: 1.7 }}
          >
            {t("products.subtitle1")} {PRODUCTS.length} {t("products.subtitle2")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90} y={30}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #013B41, #0F766E)",
              fontWeight: 700,
              fontSize: 16,
              boxShadow: "0 8px 32px rgba(15,118,110,0.35)",
            }}
          >
            {t("products.viewAll")} ({PRODUCTS.length})
            <ArrowRight size={18} />
          </Link>
          <p className="mt-6" style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.7 }}>
            {t("products.note")}
          </p>
        </div>
      </div>
    </section>
  );
}
