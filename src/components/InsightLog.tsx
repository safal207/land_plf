import React from 'react';
import { transitions } from '../memory/memoryStore';
import { generateInsight } from '../memory/insight';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  ru: {
    title: '🔎 Инсайты',
    empty: 'Инсайтов пока нет...',
  },
  en: {
    title: '🔎 Insights',
    empty: 'No insights yet...',
  },
};

export default function InsightLog() {
  const { lang } = useLanguage();
  const t = translations[lang];

  if (transitions.length === 0) {
    return (
      <div className="insight-log">
        <h2 className="section-title">{t.title}</h2>
        <p className="text-gray-400">{t.empty}</p>
      </div>
    );
  }

  return (
    <div className="insight-log">
      <h2 className="section-title">{t.title}</h2>
      <ul className="space-y-2">
        {transitions.slice().reverse().map((transition, index) => (
          <li 
            key={index} 
            className="p-3 bg-slate-800/50 rounded-lg border border-slate-700 text-gray-300"
          >
            {generateInsight(transition)}
          </li>
        ))}
      </ul>
    </div>
  );
}
