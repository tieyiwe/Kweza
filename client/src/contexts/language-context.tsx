import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { DEFAULT_LANGUAGE, dictionaries, type Language, type Translations } from "@/lib/i18n";

const STORAGE_KEY = "kweza-language";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLanguage(): Language {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "fr" || stored === "en" || stored === "sw") return stored;
  return DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(readStoredLanguage);

  useEffect(() => {
    document.documentElement.lang = dictionaries[language].meta.htmlLang;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const setLanguage = (next: Language) => setLanguageState(next);

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage, t: dictionaries[language] }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
