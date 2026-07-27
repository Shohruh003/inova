"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { TRANSLATIONS } from "./translations";

export type Lang = "uz" | "ru" | "en";
export const LANGS: { code: Lang; label: string }[] = [
  { code: "uz", label: "O'z" },
  { code: "ru", label: "Ру" },
  { code: "en", label: "En" },
];

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string };
const LangContext = createContext<Ctx>({ lang: "uz", setLang: () => {}, t: (k) => k });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("uz");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved && ["uz", "ru", "en"].includes(saved)) {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  };

  const t = (key: string): string => {
    const dict = TRANSLATIONS[lang] as Record<string, string>;
    return dict[key] ?? (TRANSLATIONS.uz as Record<string, string>)[key] ?? key;
  };

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useI18n = () => useContext(LangContext);
