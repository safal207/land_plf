import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from "../contexts/LanguageContext";

const translations = {
  ru: {
    title: "LIMINAL: Вход в ноосферу",
    desc: "Ты на пороге новой эры самопознания и гармонии. Добро пожаловать в LIMINAL.",
    button: "Войти в LIMINAL →"
  },
  en: {
    title: "LIMINAL: Enter the Noosphere",
    desc: "You are on the threshold of a new era of self-discovery and harmony. Welcome to LIMINAL.",
    button: "Enter LIMINAL →"
  }
};

export default function LandingPage() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-950 to-indigo-900 text-white text-center p-8">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold mb-6 animate-fade-in">
          {t.title}
        </h1>
        <p className="text-xl mb-8 animate-fade-in delay-300">
          {t.desc}
        </p>
        <Link
          to="/home"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded transition-colors duration-300 animate-bounce"
        >
          {t.button}
        </Link>
      </div>
    </div>
  );
}
