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
    <div className="flex gap-2">
      <button
        className={`px-3 py-1 rounded-l-lg ${lang === 'ru' ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-cyan-400'}`}
        onClick={() => setLang('ru')}
      >
        RU
      </button>
      <button
        className={`px-3 py-1 rounded-r-lg ${lang === 'en' ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-cyan-400'}`}
        onClick={() => setLang('en')}
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