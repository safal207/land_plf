/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SOME_KEY?: string // свои ключи можешь сюда тоже добавлять
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
