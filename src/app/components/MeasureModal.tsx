"use client";

import { useEffect, useState } from "react";
import { Ruler, Send, X } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export default function MeasureModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  // Ochilganda body scroll'ni bloklash + Escape bilan yopish
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          message: `[Bepul o'lchash] ${form.message}`.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setStatus("error");
        setError(data.error || "Xato yuz berdi");
        return;
      }
      setStatus("success");
      setForm({ name: "", phone: "", message: "" });
      setTimeout(() => {
        setStatus("idle");
        onClose();
      }, 2500);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Tarmoq xatosi");
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-end sm:items-center justify-center transition-opacity duration-300 ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(1,47,51,0.55)", backdropFilter: "blur(4px)" }}
        onClick={onClose}
      />

      {/* Card */}
      <div
        className={`relative w-full sm:max-w-md mx-auto rounded-t-3xl sm:rounded-3xl bg-white p-6 sm:p-8 shadow-2xl transition-transform duration-300 ${
          open ? "translate-y-0" : "translate-y-8"
        }`}
        style={{ maxHeight: "92vh", overflowY: "auto" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Yopish"
        >
          <X size={22} />
        </button>

        <div className="flex items-center gap-3 mb-1.5">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "#CCFBF1", color: "#0F766E" }}
          >
            <Ruler size={22} />
          </div>
          <h3 style={{ color: "#012F33", fontWeight: 800, fontSize: "1.35rem" }}>
            Bepul o'lchash
          </h3>
        </div>
        <p style={{ color: "#64748b", fontSize: 14.5, marginBottom: 20 }}>
          Ma'lumotlaringizni qoldiring — mutaxassisimiz siz bilan bog'lanib, qulay vaqtda
          bepul o'lchov o'tkazadi.
        </p>

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
              Manzil / izoh (ixtiyoriy)
            </label>
            <textarea
              placeholder="Manzilingiz yoki qo'shimcha ma'lumot..."
              rows={3}
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
            className="w-full py-4 rounded-xl text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] flex items-center justify-center gap-2 mt-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
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
  );
}
