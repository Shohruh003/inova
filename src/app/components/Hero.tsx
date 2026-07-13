"use client";

import Image from "next/image";
import { ChevronDown, Phone, Star } from "lucide-react";
import { IMAGES, SITE, STATS } from "@/src/lib/data";
import logo from "@/public/logo.png";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: 80 }}
    >
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMAGES.hero} alt="INOVA eshik va rom" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(1,47,51,0.85) 40%, rgba(15,118,110,0.55) 100%)",
          }}
        />

        {/* Orqa fondagi xira logo (watermark) */}
        <div
          className="absolute pointer-events-none select-none
                     bottom-[8%] right-[-12%] w-[70vw] max-w-[420px]
                     md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:right-[4%] md:w-[38vw] md:max-w-[560px]"
          style={{ opacity: 0.07 }}
        >
          <Image
            src={logo}
            alt=""
            aria-hidden
            priority
            className="w-full h-auto"
            style={{ filter: "grayscale(1) brightness(3)" }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl fade-up">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(20,184,166,0.18)",
              border: "1px solid rgba(20,184,166,0.4)",
            }}
          >
            <Star size={14} fill="#5EEAD4" color="#5EEAD4" />
            <span style={{ color: "#99F6E4", fontSize: 13, fontWeight: 600 }}>
              Farg'ona tumani — {SITE.experienceYears} yillik tajriba
            </span>
          </div>

          <h1
            className="text-white mb-6"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.15 }}
          >
            Zamonaviy{" "}
            <span className="block sm:inline">
              <span style={{ color: "#5EEAD4" }}>Eshik</span> va{" "}
              <span style={{ color: "#5EEAD4" }}>Romlar</span>
            </span>
          </h1>

          <p
            className="mb-8 sm:mb-10"
            style={{
              color: "#cbd5e1",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              lineHeight: 1.7,
              maxWidth: 580,
            }}
          >
            INOVA kompaniyasi tomonidan PVC va alyumin profillardan tayyorlangan eshik va romlar —
            Chimyon shaharchasidan O'zbekiston bo'ylab. O'lchov, yetkazib berish, o'rnatish va
            konsultatsiya xizmatlari mavjud.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 rounded-2xl text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #013B41, #0F766E)",
                fontWeight: 700,
                fontSize: 16,
                boxShadow: "0 8px 32px rgba(15,118,110,0.35)",
              }}
            >
              <Phone size={18} />
              Konsultatsiya olish
            </button>
            <button
              type="button"
              onClick={() => scrollTo("products")}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 rounded-2xl transition-all duration-200 hover:scale-[1.02] cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1.5px solid rgba(255,255,255,0.35)",
                color: "#fff",
                fontWeight: 600,
                fontSize: 16,
                backdropFilter: "blur(8px)",
              }}
            >
              Mahsulotlarni ko'rish
              <ChevronDown size={18} />
            </button>
          </div>

          <div className="mt-10 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="text-center p-4 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    fontWeight: 800,
                    color: "#5EEAD4",
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: 13, color: "#cbd5e1", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>Pastga</span>
        <ChevronDown size={20} color="rgba(255,255,255,0.5)" />
      </div>
    </section>
  );
}
