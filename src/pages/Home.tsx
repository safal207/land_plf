import React, { useEffect, useState } from "react";
import { recordMoment } from '../memory/memoryStore'
import { Moment } from '../memory/moment'
import { v4 as uuidv4 } from 'uuid'
import Particles from "react-tsparticles";
import { useLanguage } from "../contexts/LanguageContext";

import MemoryTimeline from '../components/MemoryTimeline'
import InsightLog from '../components/InsightLog'

const translations = {
  ru: {
    heroTitle: "От тревоги к доверию.",
    heroSubtitle: "LIMINAL — твой путь к внутренней свободе",
    ctaButtonText: "🚀 Начать путь",
    ctaTitle: "Хочешь начать путь?",
    ctaSubtitle: 'Оставь email и получи гайд:\n"Как слушать свои внутренние голоса"',
    emailPlaceholder: "Твой email",
    ctaSuccessTitle: "Добро пожаловать в LIMINAL!",
    ctaSuccessDesc: "Гайд уже летит к тебе на почту",
    benefits: [
      { icon: '❤️', title: 'Понимание себя', desc: 'Разберись в своих эмоциях' },
      { icon: '🧠', title: 'Ясность', desc: 'Найди внутренний покой' },
      { icon: '💪', title: 'Уверенность', desc: 'Принимай решения с силой' },
      { icon: '🤝', title: 'Поддержка', desc: 'Помощь тогда, когда нужна' },
    ],
    steps: [
      { number: '1', icon: '🧠', title: 'Руководство', desc: 'Распознай паттерны и эмоции', sub: 'Guidance', subDesc: 'Recognize patterns and emotions' },
      { number: '2', icon: '🔍', title: 'Со-навигация', desc: 'Учишься видеть их сам', sub: 'Co-navigation', subDesc: 'Learn to see them yourself' },
      { number: '3', icon: '💡', title: 'Внутренний совет', desc: 'Эмоции становятся союзниками', sub: 'Inner Council', subDesc: 'Emotions become allies' },
      { number: '4', icon: '👑', title: 'Суверенность', desc: 'Ты — свой лучший навигатор', sub: 'Sovereignty', subDesc: 'You are your best navigator' },
    ],
    liveMemoryTitle: "🧬 Живая память",
    alertEmail: "Введите email",
    alertCorrectEmail: "Введите корректный email",
  },
  en: {
    heroTitle: "From anxiety to trust.",
    heroSubtitle: "LIMINAL — your path to inner freedom",
    ctaButtonText: "🚀 Start the journey",
    ctaTitle: "Want to start the journey?",
    ctaSubtitle: 'Leave your email and get the guide:\n"How to listen to your inner voices"',
    emailPlaceholder: "Your email",
    ctaSuccessTitle: "Welcome to LIMINAL!",
    ctaSuccessDesc: "The guide is already on its way to your inbox",
    benefits: [
      { icon: '❤️', title: 'Self-understanding', desc: 'Understand your emotions' },
      { icon: '🧠', title: 'Clarity', desc: 'Find inner peace' },
      { icon: '💪', title: 'Confidence', desc: 'Make decisions with strength' },
      { icon: '🤝', title: 'Support', desc: 'Help when you need it' },
    ],
    steps: [
      { number: '1', icon: '🧠', title: 'Guidance', desc: 'Recognize patterns and emotions', sub: 'Guidance', subDesc: 'Recognize patterns and emotions' },
      { number: '2', icon: '🔍', title: 'Co-navigation', desc: 'Learn to see them yourself', sub: 'Co-navigation', subDesc: 'Learn to see them yourself' },
      { number: '3', icon: '💡', title: 'Inner Council', desc: 'Emotions become allies', sub: 'Inner Council', subDesc: 'Emotions become allies' },
      { number: '4', icon: '👑', title: 'Sovereignty', desc: 'You are your best navigator', sub: 'Sovereignty', subDesc: 'You are your best navigator' },
    ],
    liveMemoryTitle: "🧬 Live Memory",
    alertEmail: "Please enter an email",
    alertCorrectEmail: "Please enter a valid email",
  }
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang];
  
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [gradient, setGradient] = useState("bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500");
  const [isDesktop, setIsDesktop] = useState(false);

  // Конфиг через ENV
  const ENV = {
    BASE_URL: import.meta.env.VITE_BASE_URL,
    API_URL: import.meta.env.VITE_API_URL,
    BETA: import.meta.env.VITE_FEATURE_BETA === 'true',
  };

  useEffect(() => {
    console.log('🚀 ENV CONFIG →', ENV);
    if (ENV.BETA) {
      console.log('🧪 Включён режим бета-функций!');
    }
  }, [ENV.BETA]);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 6) setGradient("bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-700"); // ночь
    else if (hour < 12) setGradient("bg-gradient-to-r from-blue-300 via-indigo-200 to-pink-200"); // утро
    else if (hour < 18) setGradient("bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"); // день
    else setGradient("bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-900"); // вечер
  }, []);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      alert(t.alertEmail);
      return;
    }
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      alert(t.alertCorrectEmail);
      return;
    }

    const moment: Moment = {
      id: uuidv4(),
      timestamp: Date.now(),
      emotion: 'calm',
      context: lang === 'ru' ? 'CTA: начал путь через email' : 'CTA: started journey via email',
      tags: ['cta', 'start', 'email'],
    };
    recordMoment(moment);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail('');
    console.log('📌 Moment записан:', moment);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className={`hero-section relative overflow-hidden ${gradient} text-white py-32 text-center`}>
        {isDesktop && (
          <Particles
            className="absolute inset-0 w-full h-full pointer-events-none"
            options={{
              particles: {
                number: { value: 30 },
                size: { value: 3 },
                color: { value: "#fff" },
                opacity: { value: 0.2 },
                move: { speed: 0.5 },
              },
              interactivity: { events: { onHover: { enable: false } } },
              fullScreen: { enable: false }
            }}
          />
        )}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg fade-in-up">
          {t.heroTitle}
        </h1>
        <p className="text-xl md:text-2xl mt-6 fade-in-up delay-300">
          {t.heroSubtitle}
        </p>
        <div className="flex justify-center mt-8">
          <svg
            className="heart-icon transition-all duration-300 cursor-pointer"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={e => e.currentTarget.classList.add('animate-heartbeat')}
            onMouseLeave={e => e.currentTarget.classList.remove('animate-heartbeat')}
          >
            <path
              d="M24 42s-1.74-1.62-4.55-4.13C13.4 32.36 6 26.28 6 18.5 6 12.7 10.7 8 16.5 8c2.74 0 5.41 1.19 7.5 3.22C26.09 9.19 28.76 8 31.5 8 37.3 8 42 12.7 42 18.5c0 7.78-7.4 13.86-13.45 19.37C25.74 40.38 24 42 24 42z"
              fill="#fff"
              stroke="#f472b6"
              strokeWidth="2"
            />
          </svg>
        </div>
        <button
          className={`mt-10 px-8 py-4 rounded-full bg-white text-indigo-600 font-bold text-lg shadow-lg transition-transform duration-300 hover:scale-105 ${
            isDesktop ? "animate-bounce" : ""
          }`}
        >
          {t.ctaButtonText}
        </button>
        
        {/* ✅ Баннер Беты */}
        {ENV.BETA && (
          <div className="beta-banner bg-yellow-400 text-black py-2 px-4 rounded-full mt-4 animate-pulse mx-auto max-w-md">
            🧪 {lang === 'ru' ? 'Ты в режиме Бета! Используй новые возможности LIMINAL 🚀' : 'You are in Beta mode! Use new LIMINAL features 🚀'}
          </div>
        )}
      </section>

      {/* Benefits Section */}
      <section className="section section-bg">
        <div className="container">
          <h2 className="section-title">Что даст тебе LIMINAL?</h2>
          <div className="grid">
            {t.benefits.map((item, idx) => (
              <div key={idx} className="card">
                <div className="card-icon">{item.icon}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section">
        <div className="container px-2 sm:px-6 py-8 max-w-3xl mx-auto">
          <h2 className="section-title text-2xl sm:text-3xl font-bold text-center text-cyan-400 mb-8">
            Путь трансформации<br />
            <span className="text-base text-slate-400 font-normal block mt-2">Transformation Path</span>
          </h2>
          <div className="steps">
            {t.steps.map((item, idx) => (
              <div key={idx} className="step flex flex-col md:flex-row items-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: `${200 + idx * 200}ms` }}>
                <div className="step-number text-4xl font-bold text-indigo-300 drop-shadow-md">{item.number}</div>
                <div className="step-content">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">{item.icon} {item.title}<br /><span className="text-base text-slate-400 font-normal">{item.sub}</span></h3>
                  <p className="text-gray-300 text-base sm:text-lg">{item.desc}<br /><span className="text-slate-400">{item.subDesc}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="section-title">{t.ctaTitle}</h2>
          <p className="cta-subtitle">
            {t.ctaSubtitle}
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="cta-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                className="cta-input"
                autoComplete="email"
              />
              <button
                type="submit"
                className={`cta-button bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-full transition-transform duration-300 transform hover:scale-105 shadow-xl ${
                  isDesktop ? "animate-bounce" : ""
                }`}
              >
                {t.ctaButtonText}
              </button>
            </form>
          ) : (
            <div className="cta-success">
              <div className="cta-icon">✨</div>
              <h3>{t.ctaSuccessTitle}</h3>
              <p>{t.ctaSuccessDesc}</p>
            </div>
          )}
        </div>
      </section>

      {/* Live Memory */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t.liveMemoryTitle}</h2>
          <MemoryTimeline />
          <InsightLog />
        </div>
      </section>
    </div>
  )
}
