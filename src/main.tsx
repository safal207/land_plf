import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import App from './App.tsx'
import './styles/tailwind.css';
import './styles/styles.css';
import { LanguageProvider } from "./contexts/LanguageContext";

// Определяем basename для роутера
const getBasename = () => {
  const hostname = window.location.hostname;
  
  // Проверяем, запущены ли мы на GitHub Pages
  const isGitHubPages = hostname === 'safal207.github.io' || hostname.endsWith('.github.io');
  
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

// Компонент для обработки редиректа из 404.html и исправления дублирования basename
function RedirectHandler() {
  const navigate = useNavigate();
  
  React.useEffect(() => {
    const currentPath = window.location.pathname;
    const basePath = '/land_plf';
    
    // Исправляем дублирование basename в URL если оно есть
    if (currentPath.includes('/land_plf/land_plf')) {
      const correctedPath = currentPath.replace(/\/land_plf\/land_plf/g, '/land_plf');
      const newUrl = correctedPath + window.location.search + window.location.hash;
      window.history.replaceState({}, '', newUrl);
      // Навигируем на исправленный путь
      const routePath = correctedPath.replace(basePath, '') || '/';
      navigate(routePath + window.location.search + window.location.hash, { replace: true });
      return;
    }
    
    // Проверяем, есть ли сохраненный путь из 404.html
    const savedPath = sessionStorage.getItem('redirectPath');
    if (savedPath) {
      sessionStorage.removeItem('redirectPath');
      
      // Убираем basePath если он есть в сохраненном пути
      let cleanPath = savedPath;
      if (cleanPath.startsWith(basePath)) {
        cleanPath = cleanPath.replace(basePath, '') || '/';
      }
      
      // Парсим путь
      try {
        if (cleanPath.startsWith('/')) {
          const url = new URL(cleanPath, window.location.origin);
          const path = url.pathname;
          const search = url.search;
          const hash = url.hash;
          
          // Убираем basePath из path если он там есть
          const routePath = path.startsWith(basePath) ? path.replace(basePath, '') || '/' : path;
          navigate(routePath + search + hash, { replace: true });
        } else {
          navigate(cleanPath, { replace: true });
        }
      } catch (e) {
        // Если не удалось распарсить, убираем basePath и используем как путь
        const routePath = cleanPath.startsWith(basePath) ? cleanPath.replace(basePath, '') || '/' : cleanPath;
        navigate(routePath, { replace: true });
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