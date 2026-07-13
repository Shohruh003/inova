import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { Product } from "@/src/lib/data";

export const BADGE_COLORS: Record<string, string> = {
  Premium: "linear-gradient(135deg, #7c3aed, #a78bfa)",
  Yangi: "linear-gradient(135deg, #d97706, #fbbf24)",
  Import: "linear-gradient(135deg, #1d4ed8, #60a5fa)",
  Xavfsizlik: "linear-gradient(135deg, #b91c1c, #f87171)",
};

export default function ProductCard({ product: p }: { product: Product }) {
  return (
    <div
      className="group rounded-3xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-2 flex flex-col"
      style={{
        boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
        border: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <Link
        href={`/products/${p.slug}`}
        className="relative overflow-hidden block"
        style={{ height: 260, background: "#0f172a" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)",
          }}
        />
        <span
          className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-white"
          style={{
            background:
              BADGE_COLORS[p.badge] || "linear-gradient(135deg, #059669, #34d399)",
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          {p.badge}
        </span>
        <div className="absolute bottom-4 left-6 right-6">
          <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 12 }}>{p.profile}</span>
          <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.4rem" }}>{p.name}</h3>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <p
          style={{
            color: "#64748b",
            lineHeight: 1.7,
            marginBottom: 18,
            fontSize: 15,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {p.description}
        </p>
        {p.features.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mb-6">
            {p.features.slice(0, 4).map((f) => (
              <div key={f} className="flex items-center gap-2">
                <CheckCircle size={15} style={{ color: "#0F766E", flexShrink: 0 }} />
                <span style={{ color: "#374151", fontSize: 13.5 }}>{f}</span>
              </div>
            ))}
          </div>
        )}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          <Link
            href={`/products/${p.slug}`}
            className="flex items-center justify-center gap-1.5 py-3 rounded-xl text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #013B41, #0F766E)",
              fontWeight: 600,
              fontSize: 14.5,
            }}
          >
            Batafsil
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/#contact"
            className="flex items-center justify-center py-3 rounded-xl transition-all duration-200 hover:bg-teal-50"
            style={{
              border: "1.5px solid #0F766E",
              color: "#0F766E",
              fontWeight: 600,
              fontSize: 14.5,
            }}
          >
            Narx so'rash
          </Link>
        </div>
      </div>
    </div>
  );
}
