import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import App from './App.tsx'
import './styles/tailwind.css';
import './styles/styles.css';
import { LanguageProvider } from "./contexts/LanguageContext";

// Определяем basename для роутера
const getBasename = () => {
  // Проверяем, запущены ли мы на GitHub Pages
  const isGitHubPages = window.location.hostname === 'safal207.github.io' || 
                        window.location.pathname.startsWith('/land_plf');
  
  if (isGitHubPages) {
    return '/land_plf';
  }
  
  // Используем переменную окружения или дефолтное значение
  const envBase = import.meta.env.VITE_BASE_URL;
  if (envBase) {
    // Убираем trailing slash если есть
    return envBase.endsWith('/') ? envBase.slice(0, -1) : envBase;
  }
  
  return '/';
};

// Компонент для обработки редиректа из 404.html
function RedirectHandler() {
  const navigate = useNavigate();
  
  React.useEffect(() => {
    // Проверяем, есть ли сохраненный путь из 404.html
    const savedPath = sessionStorage.getItem('redirectPath');
    if (savedPath) {
      sessionStorage.removeItem('redirectPath');
      // Парсим путь
      try {
        const url = new URL(savedPath, window.location.origin);
        const path = url.pathname;
        // Если путь отличается от текущего, навигируем
        if (path && path !== window.location.pathname) {
          const search = url.search;
          const hash = url.hash;
          navigate(path + search + hash, { replace: true });
        }
      } catch (e) {
        // Если не удалось распарсить, просто используем как путь
        if (savedPath !== window.location.pathname) {
          navigate(savedPath, { replace: true });
        }
      }
    }
  }, [navigate]);
  
  return null;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter basename={getBasename()}>
        <RedirectHandler />
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>,
)