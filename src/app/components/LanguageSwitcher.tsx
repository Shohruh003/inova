"use client";

import { LANGS, useI18n } from "@/src/lib/i18n";

// Til almashtirgich (uz/ru/en) — segment ko'rinishida.
export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { lang, setLang } = useI18n();
  return (
    <div
      className="inline-flex items-center rounded-full p-0.5"
      style={{
        background: dark ? "rgba(255,255,255,0.12)" : "#F0FDFA",
        border: dark ? "1px solid rgba(255,255,255,0.25)" : "1.5px solid #CCFBF1",
      }}
    >
      {LANGS.map((l) => {
        const active = lang === l.code;
        return (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className="px-2.5 py-1 rounded-full transition-all duration-200"
            style={{
              background: active ? "linear-gradient(135deg, #013B41, #0F766E)" : "transparent",
              color: active ? "#fff" : dark ? "#e2e8f0" : "#0F766E",
              fontWeight: active ? 700 : 600,
              fontSize: 12.5,
              lineHeight: 1.2,
            }}
            aria-pressed={active}
            aria-label={l.label}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
