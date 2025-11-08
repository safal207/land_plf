/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BASE_URL?: string;
    // Добавьте сюда другие переменные окружения, если они есть
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }