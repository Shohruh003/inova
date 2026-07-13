import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, Phone, Ruler } from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES, SITE } from "@/src/lib/data";
import Footer from "@/src/app/components/Footer";
import FloatingButtons from "@/src/app/components/FloatingButtons";
import ProductCard, { BADGE_COLORS } from "@/src/app/components/ProductCard";
import SubpageHeader from "@/src/app/components/SubpageHeader";
import { TelegramIcon } from "@/src/app/components/icons";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: "Mahsulot topilmadi — INOVA" };
  return {
    title: `${product.name} — ${product.profile} | INOVA`,
    description: product.description,
    openGraph: {
      title: `${product.name} — INOVA`,
      description: product.description,
      images: [product.img],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const category = PRODUCT_CATEGORIES.find((c) => c.id === product.category);
  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <SubpageHeader backHref="/products" backLabel="Katalogga qaytish" />

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #012F33 0%, #0F766E 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 flex-wrap" style={{ fontSize: 13.5 }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)" }} className="hover:underline">
              Bosh sahifa
            </Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>/</span>
            <Link href="/products" style={{ color: "rgba(255,255,255,0.6)" }} className="hover:underline">
              Mahsulotlar
            </Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>/</span>
            <span style={{ color: "#5EEAD4", fontWeight: 600 }}>{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-5 flex-wrap">
                <span
                  className="px-3 py-1.5 rounded-full text-white"
                  style={{
                    background: BADGE_COLORS[product.badge] || "linear-gradient(135deg, #059669, #34d399)",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {product.badge}
                </span>
                <span
                  className="px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    color: "#CCFBF1",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {category?.label}
                </span>
                <span
                  className="px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    color: "#CCFBF1",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {product.profile}
                </span>
              </div>

              <h1
                style={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  lineHeight: 1.15,
                }}
              >
                {product.name}
              </h1>
              <p
                className="mt-5 max-w-xl"
                style={{ color: "rgba(255,255,255,0.8)", fontSize: 17, lineHeight: 1.8 }}
              >
                {product.description}
              </p>

              {product.features.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7">
                  {product.features.map((f) => (
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
                  Narxini bilish
                </a>
                <Link
                  href="/#contact"
                  className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-white transition-all duration-200 hover:bg-white/10"
                  style={{
                    border: "1.5px solid rgba(255,255,255,0.4)",
                    fontWeight: 600,
                    fontSize: 16,
                  }}
                >
                  <Ruler size={18} />
                  Bepul o'lchov
                </Link>
              </div>
            </div>

            <div
              className="rounded-3xl overflow-hidden bg-white"
              style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.35)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.img}
                alt={product.name}
                className="w-full object-cover"
                style={{ maxHeight: 480, objectPosition: "center" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Texnik xususiyatlar */}
      {product.specs.length > 0 && (
        <section className="py-20" style={{ background: "#F0FDFA" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span
                className="inline-block px-4 py-1.5 rounded-full mb-4"
                style={{ background: "#CCFBF1", color: "#0F766E", fontSize: 13, fontWeight: 700 }}
              >
                Texnik ma'lumotlar
              </span>
              <h2 style={{ color: "#012F33", fontWeight: 800, fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)" }}>
                Xususiyatlari
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
                    alt={`${product.name} — profil kesimi`}
                    className="w-full object-contain"
                    style={{ maxHeight: 440 }}
                    loading="lazy"
                  />
                </div>
              )}
              <div
                className="rounded-3xl bg-white p-6 sm:p-8"
                style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.08)" }}
              >
                {product.specs.map((s, i) => (
                  <div
                    key={s.label}
                    className="flex items-center justify-between gap-4 py-3.5"
                    style={{
                      borderBottom:
                        i === product.specs.length - 1 ? "none" : "1px solid #f1f5f9",
                    }}
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
      {product.highlights.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span
                className="inline-block px-4 py-1.5 rounded-full mb-4"
                style={{ background: "#CCFBF1", color: "#0F766E", fontSize: 13, fontWeight: 700 }}
              >
                Nima uchun {product.name}?
              </span>
              <h2 style={{ color: "#012F33", fontWeight: 800, fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)" }}>
                Afzalliklari
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {product.highlights.map((h, i) => (
                <div
                  key={i}
                  className="rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "#F0FDFA",
                    border: "1px solid #CCFBF1",
                  }}
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

            {product.banner && (
              <div
                className="mt-12 rounded-3xl overflow-hidden max-w-5xl mx-auto"
                style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.1)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.banner}
                  alt={`${product.name} — namuna`}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #012F33 0%, #0F766E 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(1.4rem, 3.5vw, 2rem)" }}>
            {product.name} sizga mos keladimi?
          </h2>
          <p className="mt-3 mb-8" style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, lineHeight: 1.7 }}>
            Mutaxassisimiz bepul o'lchov olib, aniq narx va muddatni aytib beradi. O'lchov,
            yetkazib berish va konsultatsiya — bepul.
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
              Telegram orqali yozish
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
                O'xshash mahsulotlar
              </h2>
              <Link
                href="/products"
                className="flex items-center gap-1.5 hover:underline"
                style={{ color: "#0F766E", fontWeight: 600, fontSize: 15 }}
              >
                Barcha mahsulotlar
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
