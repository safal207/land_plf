import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'


// ВАЖНО: импорт глобальных стилей
import './index.css'
// ВАЖНО: импорт Tailwind стилей

import './styles/tailwind.css' // Здесь должны быть @tailwind base и т.д.
// (если ты всё же используешь index.css, можно добавить и его сюда)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
