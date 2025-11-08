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
      <div className="memory-timeline">
        <h2 className="section-title">{t.title}</h2>
        <p className="text-gray-400">{t.empty}</p>
      </div>
    );
  }

  return (
    <div className="memory-timeline">
      <h2 className="section-title">{t.title}</h2>
      <ul className="space-y-2">
        {memory.slice().reverse().map((m) => (
          <li key={m.id} className="memory-entry p-3 bg-slate-800/50 rounded-lg border border-slate-700">
            <strong className="text-cyan-400">
              {new Date(m.timestamp).toLocaleTimeString()}
            </strong>
            <span className="text-white ml-2">{m.context}</span>
            <span className="text-pink-400 ml-2">[{m.emotion}]</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
