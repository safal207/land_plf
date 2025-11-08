import React, { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LanguageSwitcher, useLanguage, translations } from "../contexts/LanguageContext";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { lang } = useLanguage();
  const location = useLocation();
  const t = translations[lang];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/docs', label: t.nav.docs },
    { to: '/support', label: t.nav.support },
    { to: '/status', label: t.nav.status },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      {/* HEADER */}
      <header className="bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20 sticky top-0 z-50">
        <nav className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="text-xl sm:text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              LIMINAL
            </Link>
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Desktop Navigation */}
              <ul className="hidden sm:flex items-center gap-2 lg:gap-6">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link 
                      to={link.to}
                      className={`px-2 sm:px-3 py-2 rounded-lg text-white hover:bg-cyan-500/20 hover:text-cyan-300 transition-all text-sm sm:text-base ${
                        isActive(link.to) ? 'bg-cyan-500/30 text-cyan-300' : ''
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <LanguageSwitcher />
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="sm:hidden p-2 text-white hover:bg-cyan-500/20 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="sm:hidden mt-3 pb-3 border-t border-cyan-500/20 animate-fade-in-down">
              <ul className="flex flex-col gap-1 pt-3">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link 
                      to={link.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-2.5 rounded-lg text-white hover:bg-cyan-500/20 hover:text-cyan-300 transition-all text-sm ${
                        isActive(link.to) ? 'bg-cyan-500/30 text-cyan-300' : ''
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* Контент страницы */}
      <main className="flex-grow">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 border-t border-cyan-500/20 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} LIMINAL — AI Infrastructure Platform. {lang === 'ru' ? 'Все права защищены.' : 'All rights reserved.'}
        </div>
      </footer>
    </div>
  );
}
