// src/pages/Support.tsx
import React, { useState } from 'react';
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from 'react-router-dom';

const translations = {
  ru: {
    supportCenter: "Центр поддержки",
    helpText: "Мы здесь, чтобы помочь вам добиться успеха с платформой ИИ-инфраструктуры LIMINAL",
    contactUs: "📧 Связаться с нами",
    name: "Имя *",
    email: "Email *",
    subject: "Тема *",
    priority: "Приоритет",
    message: "Сообщение *",
    send: "Отправить сообщение",
    sent: "Сообщение отправлено!",
    sentDesc: "Мы получили ваше сообщение и ответим в течение 24 часов.",
    responseTime: "⏱️ Время ответа",
    otherWays: "📞 Другие способы связи",
    knowledge: "📚 Ресурсы самопомощи",
    stats: "📊 Статистика поддержки",
    satisfaction: "Удовлетворенность клиентов",
    avgResponse: "Среднее время ответа",
    support247: "Круглосуточная поддержка",
    solved: "Решенных проблем",
    corpSupport: "🚀 Нужна корпоративная поддержка?",
    corpDesc: "Получите выделенную поддержку, индивидуальные интеграции и приоритетную помощь с нашим корпоративным планом.",
    contactSales: "Связаться с отделом продаж",
    learnMore: "Узнать больше",
    priorities: [
      { value: "low", label: "🟢 Низкий - Общий вопрос" },
      { value: "medium", label: "🟡 Средний - Стандартная поддержка" },
      { value: "high", label: "🟠 Высокий - Срочная проблема" },
      { value: "critical", label: "🔴 Критический - Система не работает" }
    ],
    namePlaceholder: "Ваше имя",
    emailPlaceholder: "ваш@email.com",
    subjectPlaceholder: "Краткое описание вашей проблемы",
    messagePlaceholder: "Пожалуйста, опишите вашу проблему подробно...",
    chatTitle: "Онлайн-чат",
    chatDesc: "Доступен 24/7 для срочных вопросов",
    emailTitle: "Поддержка по email",
    emailDesc: "support@liminal.ai",
    discordTitle: "Discord сообщество",
    discordDesc: "Присоединяйтесь к 2,847+ разработчикам",
    hotlineTitle: "Экстренная линия",
    hotlineDesc: "+1 (555) LIMINAL",
    knowledgeLinks: [
      {
        href: "/docs",
        icon: "📖",
        title: "Документация",
        desc: "Полные руководства и справочник API"
      },
      {
        href: "/tutorials",
        icon: "🎯",
        title: "Учебники",
        desc: "Пошаговые руководства по внедрению"
      },
      {
        href: "/faq",
        icon: "❓",
        title: "Часто задаваемые вопросы",
        desc: "Ответы на популярные вопросы"
      },
      {
        href: "/status",
        icon: "🔍",
        title: "Статус системы",
        desc: "Мониторинг сервисов в реальном времени"
      }
    ],
    responseLevels: [
      { icon: "🔴", label: "Критический", time: "< 1 часа", color: "text-red-400", bgColor: "bg-red-900/20", borderColor: "border-red-500/30" },
      { icon: "🟠", label: "Высокий", time: "< 4 часов", color: "text-orange-400", bgColor: "bg-orange-900/20", borderColor: "border-orange-500/30" },
      { icon: "🟡", label: "Средний", time: "< 24 часов", color: "text-yellow-400", bgColor: "bg-yellow-900/20", borderColor: "border-yellow-500/30" },
      { icon: "🟢", label: "Низкий", time: "< 48 часов", color: "text-green-400", bgColor: "bg-green-900/20", borderColor: "border-green-500/30" },
    ],
  },
  en: {
    supportCenter: "Support Center",
    helpText: "We are here to help you succeed with the LIMINAL AI infrastructure platform",
    contactUs: "📧 Contact Us",
    name: "Name *",
    email: "Email *",
    subject: "Subject *",
    priority: "Priority",
    message: "Message *",
    send: "Send Message",
    sent: "Message Sent!",
    sentDesc: "We have received your message and will respond within 24 hours.",
    responseTime: "⏱️ Response Times",
    otherWays: "📞 Other Contact Methods",
    knowledge: "📚 Self-Help Resources",
    stats: "📊 Support Statistics",
    satisfaction: "Customer Satisfaction",
    avgResponse: "Average Response Time",
    support247: "24/7 Support",
    solved: "Issues Resolved",
    corpSupport: "🚀 Need Enterprise Support?",
    corpDesc: "Get dedicated support, custom integrations, and priority assistance with our enterprise plan.",
    contactSales: "Contact Sales",
    learnMore: "Learn More",
    priorities: [
      { value: "low", label: "🟢 Low - General question" },
      { value: "medium", label: "🟡 Medium - Standard support" },
      { value: "high", label: "🟠 High - Urgent issue" },
      { value: "critical", label: "🔴 Critical - System down" }
    ],
    namePlaceholder: "Your name",
    emailPlaceholder: "your@email.com",
    subjectPlaceholder: "Short description of your issue",
    messagePlaceholder: "Please describe your issue in detail...",
    chatTitle: "Online Chat",
    chatDesc: "Available 24/7 for urgent questions",
    emailTitle: "Email Support",
    emailDesc: "support@liminal.ai",
    discordTitle: "Discord Community",
    discordDesc: "Join 2,847+ developers",
    hotlineTitle: "Hotline",
    hotlineDesc: "+1 (555) LIMINAL",
    knowledgeLinks: [
      {
        href: "/docs",
        icon: "📖",
        title: "Documentation",
        desc: "Complete guides and API reference"
      },
      {
        href: "/tutorials",
        icon: "🎯",
        title: "Tutorials",
        desc: "Step-by-step implementation guides"
      },
      {
        href: "/faq",
        icon: "❓",
        title: "FAQ",
        desc: "Answers to popular questions"
      },
      {
        href: "/status",
        icon: "🔍",
        title: "System Status",
        desc: "Real-time service monitoring"
      }
    ],
    responseLevels: [
      { icon: "🔴", label: "Critical", time: "< 1 hour", color: "text-red-400", bgColor: "bg-red-900/20", borderColor: "border-red-500/30" },
      { icon: "🟠", label: "High", time: "< 4 hours", color: "text-orange-400", bgColor: "bg-orange-900/20", borderColor: "border-orange-500/30" },
      { icon: "🟡", label: "Medium", time: "< 24 hours", color: "text-yellow-400", bgColor: "bg-yellow-900/20", borderColor: "border-yellow-500/30" },
      { icon: "🟢", label: "Low", time: "< 48 hours", color: "text-green-400", bgColor: "bg-green-900/20", borderColor: "border-green-500/30" },
    ],
  }
};

export default function Support() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'medium',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Симуляция отправки
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        priority: 'medium',
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    { icon: "💬", title: t.chatTitle, desc: t.chatDesc, color: "from-cyan-500/20 to-blue-500/20", borderColor: "border-cyan-500/30", hoverColor: "hover:border-cyan-500/50" },
    { icon: "📧", title: t.emailTitle, desc: t.emailDesc, color: "from-purple-500/20 to-pink-500/20", borderColor: "border-purple-500/30", hoverColor: "hover:border-purple-500/50" },
    { icon: "🎮", title: t.discordTitle, desc: t.discordDesc, color: "from-indigo-500/20 to-purple-500/20", borderColor: "border-indigo-500/30", hoverColor: "hover:border-indigo-500/50" },
    { icon: "📱", title: t.hotlineTitle, desc: t.hotlineDesc, color: "from-green-500/20 to-emerald-500/20", borderColor: "border-green-500/30", hoverColor: "hover:border-green-500/50" },
  ];

  const stats = [
    { value: "98.7%", label: t.satisfaction, color: "text-cyan-400", icon: "⭐" },
    { value: "12 мин", label: t.avgResponse, color: "text-green-400", icon: "⚡" },
    { value: "24/7", label: t.support247, color: "text-pink-400", icon: "🌙" },
    { value: "15k+", label: t.solved, color: "text-yellow-400", icon: "✅" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {t.supportCenter}
          </h1>
          <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            {t.helpText}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-slate-700/50 shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">📧</span>
                <span>{lang === 'ru' ? 'Связаться с нами' : 'Contact Us'}</span>
              </h2>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-2">
                      <label className="block text-slate-300 text-sm font-medium">
                        {t.name}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 text-sm sm:text-base transition-all duration-200"
                        placeholder={t.namePlaceholder}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-slate-300 text-sm font-medium">
                        {t.email}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 text-sm sm:text-base transition-all duration-200"
                        placeholder={t.emailPlaceholder}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-slate-300 text-sm font-medium">
                      {t.subject}
                    </label>
                    <input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 text-sm sm:text-base transition-all duration-200"
                      placeholder={t.subjectPlaceholder}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-slate-300 text-sm font-medium">
                      {t.priority}
                    </label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 text-sm sm:text-base transition-all duration-200"
                    >
                      {t.priorities.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-slate-300 text-sm font-medium">
                      {t.message}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 resize-none text-sm sm:text-base transition-all duration-200"
                      placeholder={t.messagePlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 hover:from-cyan-700 hover:via-purple-700 hover:to-pink-700 text-white py-3 sm:py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {lang === 'ru' ? 'Отправка...' : 'Sending...'}
                      </span>
                    ) : (
                      t.send
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 sm:py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 mb-6 animate-scale-in">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-green-400 mb-3">{t.sent}</h3>
                  <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto">
                    {t.sentDesc}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Support Options */}
          <div className="space-y-4 sm:space-y-6">
            {/* Response Times */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-slate-700/50 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <span className="text-2xl">⏱️</span>
                <span>{lang === 'ru' ? 'Время ответа' : 'Response Times'}</span>
              </h3>
              <div className="space-y-3">
                {t.responseLevels.map(level => (
                  <div 
                    key={level.label} 
                    className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-300 hover:scale-105 ${level.bgColor} ${level.borderColor}`}
                  >
                    <span className="text-slate-300 text-sm sm:text-base font-medium flex items-center gap-2">
                      <span className="text-lg">{level.icon}</span>
                      <span>{level.label}</span>
                    </span>
                    <span className={`${level.color} font-bold text-sm sm:text-base`}>{level.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Methods */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-slate-700/50 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <span className="text-2xl">📞</span>
                <span>{lang === 'ru' ? 'Другие способы связи' : 'Other Contact Methods'}</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {contactMethods.map((method, idx) => (
                  <div
                    key={idx}
                    className={`group relative bg-gradient-to-br ${method.color} rounded-lg p-4 border ${method.borderColor} ${method.hoverColor} transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/10 transition-all duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-2xl sm:text-3xl mb-2">{method.icon}</div>
                      <div className="text-slate-300 font-semibold text-sm sm:text-base mb-1">{method.title}</div>
                      <div className="text-slate-400 text-xs sm:text-sm break-words">{method.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Knowledge Base */}
            <div className="bg-gradient-to-br from-cyan-900/30 via-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-cyan-500/30 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4 sm:mb-6 flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span>{lang === 'ru' ? 'Ресурсы самопомощи' : 'Self-Help Resources'}</span>
              </h3>
              <div className="space-y-3">
                {t.knowledgeLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.href}
                    className="block p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-slate-300 font-semibold text-sm sm:text-base mb-1 group-hover:text-cyan-400 transition-colors">{link.title}</div>
                        <div className="text-slate-400 text-xs sm:text-sm">{link.desc}</div>
                      </div>
                      <svg className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Support Stats */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-slate-700/50 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <span className="text-2xl">📊</span>
                <span>{lang === 'ru' ? 'Статистика поддержки' : 'Support Statistics'}</span>
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {stats.map((stat, idx) => (
                  <div 
                    key={idx}
                    className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-lg p-4 sm:p-5 text-center border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 group"
                  >
                    <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                    <div className={`text-2xl sm:text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                    <div className="text-slate-400 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Support Section */}
        <div className="mt-8 sm:mt-10 md:mt-12 bg-gradient-to-r from-cyan-900/30 via-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 md:p-10 border border-cyan-500/30 shadow-xl text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 flex items-center justify-center gap-3">
              <span className="text-3xl sm:text-4xl">🚀</span>
              <span>{t.corpSupport}</span>
            </h3>
            <p className="text-slate-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              {t.corpDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 hover:from-cyan-700 hover:via-purple-700 hover:to-pink-700 text-white py-3 sm:py-4 px-8 sm:px-10 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 text-sm sm:text-base">
                {t.contactSales}
              </button>
              <button className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 py-3 sm:py-4 px-8 sm:px-10 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base">
                {t.learnMore}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
