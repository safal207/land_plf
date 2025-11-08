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

// Компонент для обработки hash навигации из 404.html
function HashHandler() {
  const navigate = useNavigate();
  
  React.useEffect(() => {
    // Если есть hash в URL (из 404.html редиректа), используем его как путь
    if (window.location.hash && window.location.hash.startsWith('#')) {
      const hashPath = window.location.hash.slice(1);
      // Убираем query параметры из hash если они там есть
      const path = hashPath.split('?')[0];
      if (path && path !== window.location.pathname) {
        navigate(path, { replace: true });
      }
    }
  }, [navigate]);
  
  return null;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter basename={getBasename()}>
        <HashHandler />
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>,
)