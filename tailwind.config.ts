import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        liminal: {
          purple: '#5B47FB',
          pink: '#FF6B6B',
          dark: '#0A0A0F',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'float': 'float 6s ease-in-out infinite',
      }
    },
  },
} satisfies Config