"use client";

import { Ruler, Shield, Truck, Wrench } from "lucide-react";
import { useI18n } from "@/src/lib/i18n";

const SERVICES = [
  { icon: <Ruler size={32} />, tk: "services.s1t", dk: "services.s1d" },
  { icon: <Truck size={32} />, tk: "services.s2t", dk: "services.s2d" },
  { icon: <Wrench size={32} />, tk: "services.s3t", dk: "services.s3d" },
  { icon: <Shield size={32} />, tk: "services.s4t", dk: "services.s4d" },
];

export default function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "#CCFBF1",
              color: "#0F766E",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            {t("services.badge")}
          </span>
          <h2
            style={{
              color: "#012F33",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
            }}
          >
            {t("services.heading")}
          </h2>
          <p className="mt-3 max-w-xl mx-auto" style={{ color: "#64748b", fontSize: 16 }}>
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.tk}
              className="group p-7 rounded-3xl text-center transition-all duration-300 hover:-translate-y-2 cursor-default"
              style={{
                background: "#F0FDFA",
                border: "1.5px solid #e2e8f0",
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, #CCFBF1, #99F6E4)",
                  color: "#0F766E",
                }}
              >
                {s.icon}
              </div>
              <h3 style={{ color: "#012F33", fontWeight: 700, marginBottom: 10 }}>
                {t(s.tk)}
              </h3>
              <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7 }}>{t(s.dk)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
