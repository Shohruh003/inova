import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS, FEATURED_SLUGS } from "@/src/lib/data";
import ProductCard from "./ProductCard";

// Bosh sahifa bo'limi: 3 ta tanlangan mahsulot + to'liq katalogga havola.
export default function Products() {
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
            Mahsulot katalogi
          </span>
          <h2
            style={{
              color: "#012F33",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
            }}
          >
            INOVA Rom va Eshik Tizimlari
          </h2>
          <p
            className="mt-3 max-w-xl mx-auto"
            style={{ color: "#64748b", fontSize: 16, lineHeight: 1.7 }}
          >
            Eng ko'p so'raladigan modellar bilan tanishing. To'liq katalogda{" "}
            {PRODUCTS.length} ta mahsulot — plastik va alyumin romlar, eshiklar, surilma va
            fasad tizimlari, import yechimlar va aksessuarlar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
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
            Barcha mahsulotlarni ko'rish ({PRODUCTS.length})
            <ArrowRight size={18} />
          </Link>
          <p className="mt-6" style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.7 }}>
            Mahsulot turlari va narxlar buyurtmaga qarab o'zgaradi. Aniq ma'lumot uchun
            bog'laning.
          </p>
        </div>
      </div>
    </section>
  );
}
