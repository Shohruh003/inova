import { CheckCircle } from "lucide-react";
import { IMAGES, SITE } from "@/src/lib/data";

const POINTS = [
  "Faqat sertifikatlangan PVC profillar",
  "14 yillik ishonchli tajriba",
  "Har bir buyurtmaga individual yondashuv",
  "Raqobatbardosh narxlar va sifat kafolati",
];

export default function About() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #012F33 0%, #0F4042 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 60% 50%, #0F766E 0%, transparent 60%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full mb-4"
              style={{
                background: "rgba(20,184,166,0.2)",
                color: "#5EEAD4",
                fontSize: 13,
                fontWeight: 700,
                border: "1px solid rgba(20,184,166,0.3)",
              }}
            >
              Biz haqimizda
            </span>
            <h2
              style={{
                color: "#fff",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                lineHeight: 1.3,
              }}
            >
              Farg'ona tuman Chimyon shaharchasidan istalgan manzilga
            </h2>
            <p className="mt-4" style={{ color: "#cbd5e1", lineHeight: 1.8, fontSize: 16 }}>
              {SITE.experienceYears} yildan beri Farg'ona tumani Chimyon shaharchasida faoliyat
              yuritayotgan INOVA kompaniyasi PVC eshik va romlar sohasida ishonchli nom qozondi.
              Bizda O'zbekiston bo'yicha barcha mahsulot turlari mavjud.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              {POINTS.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(20,184,166,0.2)",
                      border: "1px solid rgba(20,184,166,0.4)",
                    }}
                  >
                    <CheckCircle size={14} color="#5EEAD4" />
                  </div>
                  <span style={{ color: "#e2e8f0", fontSize: 15 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES.building}
              alt="INOVA bino"
              className="w-full rounded-3xl object-cover"
              style={{ height: 380, boxShadow: "0 24px 64px rgba(0,0,0,0.4)" }}
            />
            <div
              className="absolute -bottom-4 -left-4 p-5 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #013B41, #0F766E)",
                boxShadow: "0 8px 32px rgba(20,184,166,0.4)",
              }}
            >
              <div style={{ color: "#fff", fontSize: "2rem", fontWeight: 800 }}>
                {SITE.experienceYears}+
              </div>
              <div style={{ color: "#99F6E4", fontSize: 13 }}>Yil tajriba</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
