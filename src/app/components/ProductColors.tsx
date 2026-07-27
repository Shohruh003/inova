"use client";

import { useState } from "react";
import type { ProductColor } from "@/src/lib/productColors";
import { useI18n, type Lang } from "@/src/lib/i18n";

// Rang nomlari tarjimasi (uz manba -> ru/en)
const COLOR_NAME_I18N: Record<string, Record<Lang, string>> = {
  "Oq": { uz: "Oq", ru: "Белый", en: "White" },
  "Oq-alyumin": { uz: "Oq-alyumin", ru: "Бело-алюминиевый", en: "White aluminum" },
  "Antratsit": { uz: "Antratsit", ru: "Антрацит", en: "Anthracite" },
  "Antratsit metbrash": { uz: "Antratsit metbrash", ru: "Метбраш антрацит", en: "Metbrush anthracite" },
  "Temir kulrang": { uz: "Temir kulrang", ru: "Железно-серый", en: "Iron grey" },
  "Kulrang": { uz: "Kulrang", ru: "Серый", en: "Grey" },
  "Kulrang eman": { uz: "Kulrang eman", ru: "Серый дуб", en: "Grey oak" },
  "Kvarts kulrang": { uz: "Kvarts kulrang", ru: "Серый кварц", en: "Quartz grey" },
  "Oltin eman": { uz: "Oltin eman", ru: "Золотой дуб", en: "Golden oak" },
  "Mokko eman": { uz: "Mokko eman", ru: "Дуб мокко", en: "Mocha oak" },
  "Solod eman": { uz: "Solod eman", ru: "Солодовый дуб", en: "Malt oak" },
  "Tog' emani": { uz: "Tog' emani", ru: "Высокогорный дуб", en: "Highland oak" },
  "Beton eman": { uz: "Beton eman", ru: "Бетонный дуб", en: "Concrete oak" },
  "Platina": { uz: "Platina", ru: "Платина", en: "Platinum" },
};

// imzo.uz'dan olingan real rang rasmlari bilan ishlaydi: swatch (tekstura) + oyna renderi.
export default function ProductColors({
  name,
  colors,
}: {
  name: string;
  colors: ProductColor[];
}) {
  const { t, lang } = useI18n();
  const [active, setActive] = useState(0);
  if (!colors || colors.length === 0) return null;
  const current = colors[active];
  const tc = (nm: string) => COLOR_NAME_I18N[nm]?.[lang] ?? nm;

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span
            className="inline-block px-4 py-1.5 rounded-full mb-4"
            style={{ background: "#CCFBF1", color: "#0F766E", fontSize: 13, fontWeight: 700 }}
          >
            {t("colors.badge")}
          </span>
          <h2 style={{ color: "#012F33", fontWeight: 800, fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)" }}>
            {t("colors.heading")}
          </h2>
          <p className="mt-3" style={{ color: "#64748b", fontSize: 15.5 }}>
            {name} {colors.length} {t("colors.subtitle1")}
          </p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,300px)_1fr] gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Swatch'lar */}
          <div className="grid grid-cols-4 gap-3 order-2 lg:order-1">
            {colors.map((c, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="flex flex-col items-center gap-1.5 group"
                  aria-label={tc(c.name)}
                  aria-pressed={isActive}
                  title={tc(c.name)}
                >
                  <span
                    className="w-full aspect-square rounded-2xl transition-all duration-200"
                    style={{
                      backgroundImage: `url(${c.sw})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      border: isActive ? "3px solid #0F766E" : "1.5px solid #e2e8f0",
                      boxShadow: isActive
                        ? "0 6px 18px rgba(15,118,110,0.35)"
                        : "0 2px 8px rgba(0,0,0,0.06)",
                      transform: isActive ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                  <span
                    className="text-center leading-tight"
                    style={{
                      fontSize: 11,
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#0F766E" : "#64748b",
                    }}
                  >
                    {tc(c.name)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tanlangan rangdagi render */}
          <div
            className="rounded-3xl bg-white p-6 sm:p-10 order-1 lg:order-2 flex items-center justify-center"
            style={{
              boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
              border: "1px solid #f1f5f9",
              minHeight: 320,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.img}
              alt={`${name} — ${tc(current.name)}`}
              className="w-full object-contain"
              style={{ height: 360, maxHeight: "60vh" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
