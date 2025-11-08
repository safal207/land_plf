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
      <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6 sm:p-8 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold text-purple-400 mb-3 sm:mb-4">{t.title}</h3>
        <p className="text-sm sm:text-base text-gray-400">{t.empty}</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-4 sm:p-6">
      <h3 className="text-xl sm:text-2xl font-semibold text-purple-400 mb-4 sm:mb-6">{t.title}</h3>
      <div className="space-y-2 sm:space-y-3">
        {transitions.slice().reverse().map((transition, index) => (
          <div 
            key={index} 
            className="p-3 sm:p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border-l-4 border-purple-500/50 hover:border-purple-500 hover:from-purple-900/50 hover:to-pink-900/50 transition-all duration-300"
          >
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              {generateInsight(transition)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
