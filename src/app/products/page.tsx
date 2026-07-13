import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { PRODUCTS, SITE } from "@/src/lib/data";
import Footer from "@/src/app/components/Footer";
import FloatingButtons from "@/src/app/components/FloatingButtons";
import ProductsCatalog from "@/src/app/components/ProductsCatalog";
import SubpageHeader from "@/src/app/components/SubpageHeader";
import { TelegramIcon } from "@/src/app/components/icons";

export const metadata: Metadata = {
  title: "Mahsulot katalogi — IMZO Rom va Eshik Tizimlari | INOVA",
  description:
    "IMZO zavodining to'liq katalogi: plastik va alyumin romlar, eshiklar, surilma va fasad tizimlari, import yechimlar va aksessuarlar. O'lchov va konsultatsiya bepul.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubpageHeader backHref="/" backLabel="Bosh sahifa" />

      {/* Sahifa sarlavhasi */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #012F33 0%, #0F766E 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18 text-center">
          <nav
            className="mb-6 flex items-center justify-center gap-2"
            style={{ fontSize: 13.5 }}
          >
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)" }} className="hover:underline">
              Bosh sahifa
            </Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>/</span>
            <span style={{ color: "#5EEAD4", fontWeight: 600 }}>Mahsulotlar</span>
          </nav>
          <h1
            style={{
              color: "#fff",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)",
            }}
          >
            Mahsulot katalogi
          </h1>
          <p
            className="mt-4 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.8)", fontSize: 16.5, lineHeight: 1.8 }}
          >
            IMZO zavodining to'liq assortimenti — {PRODUCTS.length} ta mahsulot: plastik va
            alyumin romlar, eshiklar, surilma va fasad tizimlari, import yechimlar va
            aksessuarlar.
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
            Eslatma: Mahsulot turlari va narxlar buyurtmaga qarab o'zgaradi. O'zbekiston
            bo'ylab yetkazib beriladi. Aniq ma'lumot uchun biz bilan bog'laning.
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
            Qaysi mahsulot sizga mosligini bilmayapsizmi?
          </h2>
          <p
            className="mt-3 mb-8"
            style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, lineHeight: 1.7 }}
          >
            Mutaxassisimiz bepul konsultatsiya berib, ehtiyojingizga mos yechimni tavsiya
            qiladi. O'lchov, yetkazib berish va konsultatsiya — bepul.
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

      <Footer />
      <FloatingButtons />
    </main>
  );
}
