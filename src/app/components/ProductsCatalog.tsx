"use client";

import { useState } from "react";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/src/lib/data";
import ProductCard from "./ProductCard";

// To'liq katalog: kategoriya filtri + barcha mahsulot kartalari (/products sahifasida).
export default function ProductsCatalog() {
  const [category, setCategory] = useState<string>("all");

  const visible =
    category === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === category);

  return (
    <div>
      {/* Kategoriya filtri */}
      <div
        className="flex gap-2 mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center"
        style={{ scrollbarWidth: "none" }}
      >
        {[
          { id: "all", label: "Barchasi" },
          // Bo'sh (0 mahsulotli) kategoriyalarni ko'rsatmaymiz
          ...PRODUCT_CATEGORIES.filter((c) =>
            PRODUCTS.some((p) => p.category === c.id)
          ),
        ].map((c) => {
          const active = category === c.id;
          const count =
            c.id === "all"
              ? PRODUCTS.length
              : PRODUCTS.filter((p) => p.category === c.id).length;
          return (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className="px-4 py-2.5 rounded-full whitespace-nowrap transition-all duration-200 flex-shrink-0"
              style={{
                background: active ? "linear-gradient(135deg, #013B41, #0F766E)" : "#fff",
                color: active ? "#fff" : "#374151",
                border: active ? "1px solid transparent" : "1px solid #e2e8f0",
                fontWeight: 600,
                fontSize: 14,
                boxShadow: active ? "0 4px 16px rgba(15,118,110,0.3)" : "none",
              }}
            >
              {c.label}
              <span className="ml-1.5" style={{ fontSize: 12, opacity: 0.7 }}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visible.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
