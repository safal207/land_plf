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
      <section className={`relative overflow-hidden ${gradient} text-white min-h-[90vh] flex flex-col items-center justify-center px-4 py-16 sm:py-20 md:py-24 lg:py-32`}>
        {/* Animated background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
        
        {isDesktop && (
          <Particles
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            options={{
              particles: {
                number: { value: 80 },
                size: { value: 3 },
                color: { value: "#fff" },
                opacity: { value: 0.4 },
                move: { speed: 0.5 },
                links: {
                  enable: true,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.2,
                  width: 1
                }
              },
              interactivity: { 
                events: { onHover: { enable: true, mode: "repulse" } },
                modes: { repulse: { distance: 100 } }
              },
              fullScreen: { enable: false }
            }}
          />
        )}
        
        <div className="relative z-10 text-center max-w-5xl px-4 w-full">
          <div className="mb-6 sm:mb-8 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.1] mb-4 sm:mb-6 drop-shadow-2xl bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">
              {t.heroTitle}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 md:mb-12 text-gray-100 font-light leading-relaxed max-w-3xl mx-auto">
              {t.heroSubtitle}
            </p>
          </div>
          
          <div className="flex justify-center mb-8 sm:mb-10 animate-fade-in-up delay-300">
            <div className="relative group">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <svg
                className="relative transition-all duration-300 cursor-pointer hover:scale-110 w-16 h-16 sm:w-20 sm:h-20 filter drop-shadow-lg"
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
          </div>
          
          <div className="animate-fade-in-up delay-500">
            <button
              className="group relative px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 rounded-full bg-white text-indigo-600 font-bold text-base sm:text-lg md:text-xl shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-cyan-500/50 active:scale-95 overflow-hidden"
              onClick={() => {
                const ctaSection = document.querySelector('[data-cta-section]');
                ctaSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10">{t.ctaButtonText}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
          
          {/* ✅ Баннер Беты */}
          {ENV.BETA && (
            <div className="mt-6 sm:mt-8 bg-yellow-400/95 backdrop-blur-sm text-black py-2.5 px-5 sm:py-3 sm:px-6 rounded-full animate-pulse mx-auto max-w-md text-xs sm:text-sm md:text-base font-semibold shadow-lg">
              🧪 {lang === 'ru' ? 'Ты в режиме Бета! Используй новые возможности LIMINAL 🚀' : 'You are in Beta mode! Use new LIMINAL features 🚀'}
            </div>
          )}
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {lang === 'ru' ? 'Что даст тебе LIMINAL?' : 'What will LIMINAL give you?'}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {t.benefits.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-cyan-500/20 rounded-2xl p-6 sm:p-8 text-center transition-all duration-500 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-2 overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl sm:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-cyan-300 group-hover:text-cyan-200 transition-colors">{item.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {lang === 'ru' ? 'Путь трансформации' : 'Transformation Path'}
            </h2>
            <p className="text-center text-slate-300 text-base sm:text-lg md:text-xl mb-2">
              {lang === 'ru' ? 'Четыре этапа на пути к внутренней свободе' : 'Four stages on the path to inner freedom'}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            {t.steps.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 p-5 sm:p-7 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border-l-4 border-cyan-500/50 hover:border-cyan-500 hover:bg-slate-800/90 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-x-1"
              >
                {/* Connecting line (desktop only) */}
                {idx < t.steps.length - 1 && (
                  <div className="hidden sm:block absolute left-8 top-full w-0.5 h-8 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
                )}
                
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center text-2xl sm:text-3xl font-bold text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                    {item.number}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    <span className="text-2xl sm:text-3xl mr-3">{item.icon}</span>
                    {item.title}
                    <span className="block text-sm sm:text-base text-slate-400 font-normal mt-2">{item.sub}</span>
                  </h3>
                  <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                    {item.desc}
                    <span className="block text-sm text-slate-400 mt-2">{item.subDesc}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-cta-section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        ></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center relative z-10">
          <div className="mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              {t.ctaTitle}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-2 whitespace-pre-line leading-relaxed">
              {t.ctaSubtitle}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto mt-4 rounded-full"></div>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 rounded-full bg-white/15 backdrop-blur-sm border-2 border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 transition-all duration-300 text-base sm:text-lg shadow-xl"
                  autoComplete="email"
                />
              </div>
              <button
                type="submit"
                className="group relative px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hover:from-pink-500 hover:via-purple-500 hover:to-pink-500 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/50 whitespace-nowrap text-base sm:text-lg overflow-hidden"
              >
                <span className="relative z-10">{t.ctaButtonText}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </form>
          ) : (
            <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm border-2 border-cyan-500/50 rounded-3xl p-8 sm:p-10 max-w-md mx-auto shadow-2xl animate-scale-in">
              <div className="text-6xl sm:text-7xl mb-4 animate-bounce-in">✨</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-3">{t.ctaSuccessTitle}</h3>
              <p className="text-base sm:text-lg text-gray-200">{t.ctaSuccessDesc}</p>
            </div>
          )}
        </div>
      </section>

      {/* Live Memory */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {t.liveMemoryTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-8 sm:space-y-10">
            <MemoryTimeline />
            <InsightLog />
          </div>
        </div>
      </section>
    </div>
  )
}
