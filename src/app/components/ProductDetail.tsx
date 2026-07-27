"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, Ruler } from "lucide-react";
import type { Product } from "@/src/lib/data";
import { PRODUCTS, PRODUCT_CATEGORIES, SITE } from "@/src/lib/data";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";
import ProductCard, { BADGE_COLORS } from "./ProductCard";
import SubpageHeader from "./SubpageHeader";
import ProductColors from "./ProductColors";
import { getProductColors } from "@/src/lib/productColors";
import { getProductText } from "@/src/lib/productI18n";
import { TelegramIcon } from "./icons";
import { useI18n } from "@/src/lib/i18n";

export default function ProductDetail({ product }: { product: Product }) {
  const { t, lang } = useI18n();
  const category = PRODUCT_CATEGORIES.find((c) => c.id === product.category);
  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, 3);
  const tx = getProductText(product, lang);
  const colors = getProductColors(product.slug);

  return (
    <main className="min-h-screen bg-white">
      <SubpageHeader backHref="/products" backKey="detail.back" />

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #012F33 0%, #0F766E 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <nav className="mb-8 flex items-center gap-2 flex-wrap" style={{ fontSize: 13.5 }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)" }} className="hover:underline">
              {t("detail.crumbHome")}
            </Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>/</span>
            <Link href="/products" style={{ color: "rgba(255,255,255,0.6)" }} className="hover:underline">
              {t("detail.crumbProducts")}
            </Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>/</span>
            <span style={{ color: "#5EEAD4", fontWeight: 600 }}>{tx.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-5 flex-wrap">
                <span
                  className="px-3 py-1.5 rounded-full text-white"
                  style={{
                    background: BADGE_COLORS[product.badge] || "linear-gradient(135deg, #059669, #34d399)",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {t("badge." + product.badge)}
                </span>
                <span
                  className="px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.12)", color: "#CCFBF1", fontSize: 12, fontWeight: 600 }}
                >
                  {category ? t("cat." + category.id) : ""}
                </span>
                <span
                  className="px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.12)", color: "#CCFBF1", fontSize: 12, fontWeight: 600 }}
                >
                  {tx.profile}
                </span>
              </div>

              <h1
                style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15 }}
              >
                {tx.name}
              </h1>
              <p className="mt-5 max-w-xl" style={{ color: "rgba(255,255,255,0.8)", fontSize: 17, lineHeight: 1.8 }}>
                {tx.description}
              </p>

              {tx.features.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7">
                  {tx.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <CheckCircle size={17} style={{ color: "#5EEAD4", flexShrink: 0 }} />
                      <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 14.5 }}>{f}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 mt-9">
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl"
                  style={{ background: "#fff", color: "#012F33", fontWeight: 700, fontSize: 16 }}
                >
                  <Phone size={18} />
                  {t("detail.price")}
                </a>
                <Link
                  href="/#contact"
                  className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-white transition-all duration-200 hover:bg-white/10"
                  style={{ border: "1.5px solid rgba(255,255,255,0.4)", fontWeight: 600, fontSize: 16 }}
                >
                  <Ruler size={18} />
                  {t("detail.measure")}
                </Link>
              </div>
            </div>

            <div
              className="rounded-3xl overflow-hidden bg-white order-1 lg:order-2"
              style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.35)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.banner || product.img}
                alt={tx.name}
                className="w-full object-cover"
                style={{ maxHeight: 480, objectPosition: "center" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ranglar */}
      {colors && <ProductColors name={tx.name} colors={colors} />}

      {/* Texnik xususiyatlar */}
      {tx.specs.length > 0 && (
        <section className="py-20" style={{ background: "#F0FDFA" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span
                className="inline-block px-4 py-1.5 rounded-full mb-4"
                style={{ background: "#CCFBF1", color: "#0F766E", fontSize: 13, fontWeight: 700 }}
              >
                {t("detail.techBadge")}
              </span>
              <h2 style={{ color: "#012F33", fontWeight: 800, fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)" }}>
                {t("detail.techHeading")}
              </h2>
            </div>

            <div className={`grid gap-10 items-center ${product.specImg ? "lg:grid-cols-2" : "max-w-3xl mx-auto"}`}>
              {product.specImg && (
                <div
                  className="rounded-3xl overflow-hidden bg-white p-4"
                  style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.08)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.specImg}
                    alt={tx.name}
                    className="w-full object-contain"
                    style={{ maxHeight: 440 }}
                    loading="lazy"
                  />
                </div>
              )}
              <div className="rounded-3xl bg-white p-6 sm:p-8" style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.08)" }}>
                {tx.specs.map((s, i) => (
                  <div
                    key={s.label}
                    className="flex items-center justify-between gap-4 py-3.5"
                    style={{ borderBottom: i === tx.specs.length - 1 ? "none" : "1px solid #f1f5f9" }}
                  >
                    <span style={{ color: "#64748b", fontSize: 14.5 }}>{s.label}</span>
                    <span style={{ color: "#012F33", fontWeight: 700, fontSize: 14.5, textAlign: "right" }}>
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Afzalliklar */}
      {tx.highlights.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span
                className="inline-block px-4 py-1.5 rounded-full mb-4"
                style={{ background: "#CCFBF1", color: "#0F766E", fontSize: 13, fontWeight: 700 }}
              >
                {t("detail.whyBadge")} {tx.name}?
              </span>
              <h2 style={{ color: "#012F33", fontWeight: 800, fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)" }}>
                {t("detail.advantages")}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {tx.highlights.map((h, i) => (
                <div
                  key={i}
                  className="rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "#F0FDFA", border: "1px solid #CCFBF1" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "linear-gradient(135deg, #013B41, #0F766E)" }}
                  >
                    <CheckCircle size={20} style={{ color: "#5EEAD4" }} />
                  </div>
                  {h.title && (
                    <h3 style={{ color: "#012F33", fontWeight: 700, fontSize: 17, marginBottom: 8 }}>
                      {h.title}
                    </h3>
                  )}
                  <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.8 }}>{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #012F33 0%, #0F766E 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(1.4rem, 3.5vw, 2rem)" }}>
            {tx.name} {t("detail.ctaHeading")}
          </h2>
          <p className="mt-3 mb-8" style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, lineHeight: 1.7 }}>
            {t("detail.ctaDesc")}
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

      {/* O'xshash mahsulotlar */}
      {related.length > 0 && (
        <section className="py-20" style={{ background: "#F0FDFA" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
              <h2 style={{ color: "#012F33", fontWeight: 800, fontSize: "clamp(1.4rem, 3vw, 1.9rem)" }}>
                {t("detail.related")}
              </h2>
              <Link
                href="/products"
                className="flex items-center gap-1.5 hover:underline"
                style={{ color: "#0F766E", fontWeight: 600, fontSize: 15 }}
              >
                {t("detail.allProducts")}
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <FloatingButtons />
    </main>
  );
}
