// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // это важно для React + TS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
