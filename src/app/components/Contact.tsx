"use client";

import { useState } from "react";
import { MapPin, Phone, Send } from "lucide-react";
import { SITE } from "@/src/lib/data";
import { InstagramIcon, TelegramIcon } from "./icons";

const CONTACT_CARDS = [
  {
    icon: <Phone size={22} color="#0F766E" />,
    title: "Telefon",
    value: SITE.phoneDisplay,
    href: `tel:${SITE.phone}`,
    bg: "#F0FDFA",
  },
  {
    icon: <TelegramIcon />,
    title: "Telegram",
    value: `@${SITE.telegram}`,
    href: `https://t.me/${SITE.telegram}`,
    bg: "#f0f9ff",
  },
  {
    icon: <InstagramIcon size={22} color="#e1306c" />,
    title: "Instagram",
    value: SITE.instagram,
    href: `https://instagram.com/${SITE.instagram}`,
    bg: "#fdf2f8",
  },
  {
    icon: <MapPin size={22} color="#ef4444" />,
    title: "Manzil",
    value: SITE.address,
    href: SITE.mapUrl,
    bg: "#fff5f5",
  },
];

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setStatus("error");
        setError(data.error || "Xato yuz berdi");
        return;
      }
      setStatus("success");
      setForm({ name: "", phone: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Tarmoq xatosi");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
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
            Bog'lanish
          </span>
          <h2
            style={{
              color: "#012F33",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
            }}
          >
            Biz bilan aloqaga chiqing
          </h2>
          <p className="mt-3" style={{ color: "#64748b", fontSize: 16 }}>
            Bepul konsultatsiya uchun hoziroq murojaat qiling
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="flex flex-col gap-5">
            {CONTACT_CARDS.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg group"
                style={{
                  background: c.bg,
                  border: "1.5px solid #e2e8f0",
                  textDecoration: "none",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
                >
                  {c.icon}
                </div>
                <div>
                  <div
                    style={{
                      color: "#94a3b8",
                      fontSize: 12,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {c.title}
                  </div>
                  <div
                    style={{
                      color: "#1e293b",
                      fontWeight: 700,
                      fontSize: 16,
                      marginTop: 2,
                    }}
                  >
                    {c.value}
                  </div>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <Send size={16} color="#94a3b8" />
                </div>
              </a>
            ))}

            <div
              className="p-6 rounded-2xl mt-2"
              style={{ background: "linear-gradient(135deg, #012F33, #0F4042)" }}
            >
              <div style={{ color: "#94a3b8", fontSize: 13, marginBottom: 8 }}>
                Ish vaqtlari
              </div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>
                Dushanba – Shanba
              </div>
              <div
                style={{ color: "#5EEAD4", fontWeight: 700, fontSize: 20, marginTop: 4 }}
              >
                09:00 – 18:00
              </div>
            </div>
          </div>

          {/* Quick contact form */}
          <div
            className="p-8 rounded-3xl"
            style={{ background: "#F0FDFA", border: "1.5px solid #e2e8f0" }}
          >
            <h3
              style={{
                color: "#012F33",
                fontWeight: 700,
                fontSize: "1.2rem",
                marginBottom: 20,
              }}
            >
              Tez murojaat
            </h3>
            <form onSubmit={submit} className="flex flex-col gap-4">
              <div>
                <label
                  style={{
                    color: "#374151",
                    fontSize: 14,
                    fontWeight: 600,
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  Ismingiz
                </label>
                <input
                  type="text"
                  placeholder="Ismingizni kiriting"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 focus:ring-2 focus:ring-teal-500"
                  style={{
                    border: "1.5px solid #e2e8f0",
                    background: "#fff",
                    fontSize: 15,
                    color: "#1e293b",
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    color: "#374151",
                    fontSize: 14,
                    fontWeight: 600,
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  Telefon raqam
                </label>
                <input
                  type="tel"
                  placeholder="+998 __ ___ __ __"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 focus:ring-2 focus:ring-teal-500"
                  style={{
                    border: "1.5px solid #e2e8f0",
                    background: "#fff",
                    fontSize: 15,
                    color: "#1e293b",
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    color: "#374151",
                    fontSize: 14,
                    fontWeight: 600,
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  Xabar (ixtiyoriy)
                </label>
                <textarea
                  placeholder="Qanday xizmat kerak? Qo'shimcha ma'lumot..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 focus:ring-2 focus:ring-teal-500 resize-none"
                  style={{
                    border: "1.5px solid #e2e8f0",
                    background: "#fff",
                    fontSize: 15,
                    color: "#1e293b",
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 rounded-xl text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] flex items-center justify-center gap-2 mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{
                  background: "linear-gradient(135deg, #013B41, #0F766E)",
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                <Send size={18} />
                {status === "sending" ? "Yuborilmoqda..." : "Yuborish"}
              </button>
              {status === "success" && (
                <div
                  className="text-center p-3 rounded-xl"
                  style={{
                    background: "#dcfce7",
                    color: "#15803d",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  ✓ Murojaatingiz qabul qilindi! Tez orada bog'lanamiz.
                </div>
              )}
              {status === "error" && (
                <div
                  className="text-center p-3 rounded-xl"
                  style={{
                    background: "#fee2e2",
                    color: "#991b1b",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  Xato: {error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
