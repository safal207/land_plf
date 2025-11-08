import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/landing.css';
import { LanguageSwitcher, useLanguage, translations } from "../contexts/LanguageContext";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { lang } = useLanguage();
  const location = useLocation();
  const t = translations[lang];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="dashboard-container">
      {/* HEADER */}
      <header className="main-header">
        <nav className="navbar overflow-x-auto">
          <Link to="/" className="navbar-brand">LIMINAL</Link>
          <div className="flex items-center gap-4">
            <ul className="navbar-nav flex flex-col sm:flex-row gap-2 sm:gap-6 w-full sm:w-auto">
              <li>
                <Link 
                  to="/" 
                  className={`block px-2 sm:px-4 py-2 rounded-lg text-white hover:bg-cyan-600/20 hover:text-cyan-400 transition-colors text-center sm:text-left ${
                    isActive('/') ? 'bg-cyan-600/30 text-cyan-300' : ''
                  }`}
                >
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link 
                  to="/docs" 
                  className={`block px-2 sm:px-4 py-2 rounded-lg text-white hover:bg-cyan-600/20 hover:text-cyan-400 transition-colors text-center sm:text-left ${
                    isActive('/docs') ? 'bg-cyan-600/30 text-cyan-300' : ''
                  }`}
                >
                  {t.nav.docs}
                </Link>
              </li>
              <li>
                <Link 
                  to="/support" 
                  className={`block px-2 sm:px-4 py-2 rounded-lg text-white hover:bg-cyan-600/20 hover:text-cyan-400 transition-colors text-center sm:text-left ${
                    isActive('/support') ? 'bg-cyan-600/30 text-cyan-300' : ''
                  }`}
                >
                  {t.nav.support}
                </Link>
              </li>
              <li>
                <Link 
                  to="/status" 
                  className={`block px-2 sm:px-4 py-2 rounded-lg text-white hover:bg-cyan-600/20 hover:text-cyan-400 transition-colors text-center sm:text-left ${
                    isActive('/status') ? 'bg-cyan-600/30 text-cyan-300' : ''
                  }`}
                >
                  {t.nav.status}
                </Link>
              </li>
            </ul>
            <LanguageSwitcher />
          </div>
        </nav>
      </header>

      {/* Контент страницы */}
      <main className="dashboard-content">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="main-footer bg-slate-900 text-slate-400 py-6 mt-12 text-center text-sm">
        © {new Date().getFullYear()} LIMINAL — AI Infrastructure Platform. Все права защищены.
      </footer>
    </div>
  );
}
