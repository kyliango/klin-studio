/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black:    '#080808',
        surface:  '#111111',
        'surface-2': '#181818',
        border:   'rgba(255,255,255,0.07)',
        blue: {
          DEFAULT: '#1E90FF',
          light:   '#3AAAFF',
          dark:    '#1570CC',
          glow:    'rgba(30,144,255,0.18)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(30,144,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,144,255,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '56px 56px',
      },
      animation: {
        'pulse-slow':  'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'float':       'float 4s ease-in-out infinite',
        'glow':        'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(30,144,255,0.2)' },
          to:   { boxShadow: '0 0 40px rgba(30,144,255,0.5)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
