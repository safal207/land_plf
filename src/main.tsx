import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './styles/tailwind.css';
import './styles/styles.css';
import { LanguageProvider } from "./contexts/LanguageContext";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.VITE_BASE_URL ?? '/'}>
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>,
)