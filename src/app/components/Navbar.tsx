"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, MapPin, Phone, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/src/lib/data";
import logo from "@/public/logo.png";
import { InstagramIcon, TelegramIcon } from "./icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menyu ochilganda body scroll'ni bloklash
  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // Mobile menyu ochilgani uchun navbarda fon kerak emas — drawer butun ekranni qoplaydi
  const hasBg = scrolled;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: hasBg ? "rgba(255,255,255,0.65)" : "transparent",
          boxShadow: hasBg ? "0 4px 24px rgba(15,23,42,0.06)" : "none",
          backdropFilter: hasBg ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: hasBg ? "blur(20px) saturate(180%)" : "none",
          borderBottom: hasBg
            ? "1px solid rgba(255,255,255,0.4)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-2.5 group relative z-[60]"
              aria-label="Bosh sahifa"
            >
              <div className="relative w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center bg-white shadow-md">
                <Image
                  src={logo}
                  alt="INOVA logo"
                  width={44}
                  height={44}
                  className="object-contain"
                  priority
                />
              </div>
              <span
                className="text-xl tracking-tight transition-colors duration-300"
                style={{
                  fontWeight: 800,
                  color: hasBg || menuOpen ? "#012F33" : "#fff",
                  textShadow: hasBg || menuOpen ? "none" : "0 2px 12px rgba(0,0,0,0.3)",
                }}
              >
                {SITE.brand}
              </span>
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-4 py-2 rounded-lg transition-all duration-200 hover:bg-teal-50/80"
                  style={{
                    color: hasBg ? "#374151" : "#fff",
                    fontWeight: 500,
                    fontSize: 15,
                    textShadow: hasBg ? "none" : "0 1px 6px rgba(0,0,0,0.3)",
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #013B41, #0F766E)",
                  fontWeight: 600,
                  fontSize: 15,
                }}
              >
                <Phone size={16} />
                {SITE.phoneShort}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg relative z-[60]"
              style={{ color: hasBg || menuOpen ? "#012F33" : "#fff" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menyu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-screen Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{
          background: "linear-gradient(160deg, #ffffff 0%, #F0FDFA 100%)",
        }}
        aria-hidden={!menuOpen}
      >
        <div
          className={`flex flex-col h-full pt-24 pb-8 px-6 transition-transform duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          {/* Links */}
          <div className="flex flex-col gap-1 flex-1">
            {NAV_LINKS.map((link, i) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left px-5 py-4 rounded-2xl transition-all duration-200 active:scale-[0.98]"
                style={{
                  background: "#fff",
                  border: "1.5px solid #e2e8f0",
                  fontWeight: 600,
                  fontSize: 17,
                  color: "#012F33",
                  boxShadow: "0 2px 8px rgba(1,47,51,0.04)",
                  transitionDelay: menuOpen ? `${i * 40}ms` : "0ms",
                  transform: menuOpen ? "translateY(0)" : "translateY(8px)",
                  opacity: menuOpen ? 1 : 0,
                }}
              >
                <div className="flex items-center justify-between">
                  <span>{link.label}</span>
                  <span style={{ color: "#0F766E", fontSize: 20 }}>→</span>
                </div>
              </button>
            ))}
          </div>

          {/* Bottom — Contact actions */}
          <div className="flex flex-col gap-3 mt-6">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center justify-center gap-2 py-4 rounded-2xl text-white shadow-lg active:scale-[0.98] transition-transform"
              style={{
                background: "linear-gradient(135deg, #013B41, #0F766E)",
                fontWeight: 700,
                fontSize: 17,
              }}
            >
              <Phone size={20} />
              {SITE.phoneDisplay}
            </a>

            <div className="grid grid-cols-3 gap-3">
              <a
                href={`https://t.me/${SITE.telegram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center py-3.5 rounded-xl"
                style={{
                  background: "#F0FDFA",
                  border: "1.5px solid #CCFBF1",
                  color: "#0F766E",
                }}
                aria-label="Telegram"
              >
                <TelegramIcon size={22} />
              </a>
              <a
                href={`https://instagram.com/${SITE.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center py-3.5 rounded-xl"
                style={{
                  background: "#fdf2f8",
                  border: "1.5px solid #fbcfe8",
                  color: "#e1306c",
                }}
                aria-label="Instagram"
              >
                <InstagramIcon size={22} color="#e1306c" />
              </a>
              <a
                href={SITE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center py-3.5 rounded-xl"
                style={{
                  background: "#fff5f5",
                  border: "1.5px solid #fecaca",
                  color: "#ef4444",
                }}
                aria-label="Manzil"
              >
                <MapPin size={22} />
              </a>
            </div>

            <div
              className="text-center mt-2"
              style={{ color: "#64748b", fontSize: 13 }}
            >
              {SITE.address} · {SITE.hours}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
