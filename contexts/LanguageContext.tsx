"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { translations, type Lang, type Translations } from "@/lib/i18n";

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("bg");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "bg" ? "en" : "bg"));
  }, []);

  const t = translations[lang] as Translations;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
