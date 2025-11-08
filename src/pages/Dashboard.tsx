import React from 'react';
import { useLanguage } from "../contexts/LanguageContext";

const translations = {
  ru: {
    dashboardTitle: "Dashboard",
    analytics: "Здесь будет аналитика живой памяти и твоя персональная статистика.",
    memory: "Память",
    memoryDesc: "История всех твоих моментов и переходов. В будущем здесь появятся фильтры, графики и инсайты.",
    stats: "Здесь будет твоя живая статистика.",
  },
  en: {
    dashboardTitle: "Dashboard",
    analytics: "Here will be live memory analytics and your personal statistics.",
    memory: "Memory",
    memoryDesc: "History of all your moments and transitions. Filters, charts, and insights will appear here in the future.",
    stats: "Your live statistics will be here.",
  }
};

export default function Dashboard() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <>
      <h1>{t.dashboardTitle}</h1>
      <p>{t.analytics}</p>
      <div className="memory-section">
        <h2><span role="img" aria-label="dna">🧬</span> {t.memory}</h2>
        <p>{t.memoryDesc}</p>
        <div className="stats-box">
          <p><span role="img" aria-label="sparkles">✨</span> {t.stats}</p>
        </div>
      </div>
    </>
  );
}
