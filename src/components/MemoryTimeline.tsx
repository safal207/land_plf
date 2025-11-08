import React from 'react';
import { memory } from '../memory/memoryStore';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  ru: {
    title: '🧠 Путь воспоминаний',
    empty: 'Пока нет событий в памяти...',
  },
  en: {
    title: '🧠 Memory Path',
    empty: 'No events in memory yet...',
  },
};

export default function MemoryTimeline() {
  const { lang } = useLanguage();
  const t = translations[lang];

  if (memory.length === 0) {
    return (
      <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 sm:p-8 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-3 sm:mb-4">{t.title}</h3>
        <p className="text-sm sm:text-base text-gray-400">{t.empty}</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-4 sm:p-6">
      <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-4 sm:mb-6">{t.title}</h3>
      <div className="space-y-2 sm:space-y-3">
        {memory.slice().reverse().map((m) => (
          <div 
            key={m.id} 
            className="p-3 sm:p-4 bg-slate-900/50 rounded-lg border-l-4 border-cyan-500/50 hover:border-cyan-500 hover:bg-slate-900/70 transition-all duration-300"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-cyan-400 font-mono text-xs sm:text-sm font-semibold">
                {new Date(m.timestamp).toLocaleTimeString()}
              </span>
              <span className="text-white text-sm sm:text-base">{m.context}</span>
              <span className="px-2 py-1 bg-pink-500/20 text-pink-400 rounded text-xs font-medium">
                {m.emotion}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
