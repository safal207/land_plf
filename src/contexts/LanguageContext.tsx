import React, { createContext, useContext, useState, ReactNode } from "react";

type Lang = "ru" | "en";
type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("ru");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

// Можно оставить LanguageSwitcher здесь, либо вынести в отдельный файл
export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex gap-1 sm:gap-2">
      <button
        className={`px-2 py-1 sm:px-3 rounded-l-lg text-xs sm:text-sm font-medium transition-colors ${
          lang === 'ru' 
            ? 'bg-cyan-600 text-white' 
            : 'bg-slate-700 text-cyan-400 hover:bg-slate-600'
        }`}
        onClick={() => setLang('ru')}
        aria-label="Switch to Russian"
      >
        RU
      </button>
      <button
        className={`px-2 py-1 sm:px-3 rounded-r-lg text-xs sm:text-sm font-medium transition-colors ${
          lang === 'en' 
            ? 'bg-cyan-600 text-white' 
            : 'bg-slate-700 text-cyan-400 hover:bg-slate-600'
        }`}
        onClick={() => setLang('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}

export const translations = {
  ru: {
    nav: {
      home: "Главная",
      docs: "Документация",
      support: "Поддержка",
      status: "Статус системы",
    },
    lang_ru: "RU",
    lang_en: "EN",
  },
  en: {
    nav: {
      home: "Home",
      docs: "Documentation",
      support: "Support",
      status: "System Status",
    },
    lang_ru: "RU",
    lang_en: "EN",
  }
};