"use client";

import { useI18n } from "@/src/lib/i18n";

const LOGOS = [
  "/partners/p1.png",
  "/partners/p2.png",
  "/partners/p3.png",
  "/partners/p4.png",
  "/partners/p5.jpg",
  "/partners/p6.png",
  "/partners/p7.png",
];

export default function Partners() {
  const { t } = useI18n();
  const row = [...LOGOS, ...LOGOS]; // uzluksiz aylanish uchun ikki marta

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full mb-4"
            style={{ background: "#CCFBF1", color: "#0F766E", fontSize: 13, fontWeight: 700 }}
          >
            {t("partners.badge")}
          </span>
          <h2 style={{ color: "#012F33", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}>
            {t("partners.heading")}
          </h2>
          <p className="mt-3 max-w-xl mx-auto" style={{ color: "#64748b", fontSize: 16 }}>
            {t("partners.subtitle")}
          </p>
        </div>
      </div>

      <div className="marquee-mask overflow-hidden">
        <div className="flex items-center gap-5 w-max animate-marquee hover:[animation-play-state:paused]">
          {row.map((src, i) => (
            <div
              key={i}
              className="group flex-shrink-0 w-40 sm:w-48 h-24 rounded-2xl bg-white flex items-center justify-center px-6"
              style={{ border: "1.5px solid #e2e8f0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="INOVA hamkori"
                loading="lazy"
                className="max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
