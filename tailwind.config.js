/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'soko-abyss':  '#020904',
        'soko-void':   '#061209',
        'soko-forest': '#0B2210',
        'soko-dark':   '#1B5E20',
        'soko':        '#2E7D32',
        'soko-light':  '#4CAF50',
        'soko-pale':   '#E8F5E9',
        'soko-accent': '#F9A825',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
