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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 text-white text-center p-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>
      
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-up">
          {t.title}
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed animate-fade-in-up delay-300">
          {t.desc}
        </p>
        <Link
          to="/home"
          className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-purple-500 hover:to-cyan-500 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-cyan-500/50 text-lg"
        >
          {t.button}
        </Link>
      </div>
    </div>
  );
}
