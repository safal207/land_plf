export default defineConfig({
  build: {
    rollupOptions: {
      input: './src/main.tsx'  // Явно указать React версию
    }
  }
})