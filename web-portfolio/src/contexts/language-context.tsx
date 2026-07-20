"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { en } from "@/data/locales/en";
import { id } from "@/data/locales/id";

type Lang = "en" | "id";

export type TranslationType = typeof en;

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: en,
});

const translations: Record<Lang, TranslationType> = {
  en: en as TranslationType,
  id: id as unknown as TranslationType,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const handleSetLang = useCallback((l: Lang) => {
    setLang(l);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
