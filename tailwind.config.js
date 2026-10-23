/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0284c7',
          blueHover: '#0369a1',
          cyan: '#38bdf8',
          cyanLight: '#7dd3fc',
          dark: '#0a0d13',
          cardDark: '#10141d',
          cardBorder: '#1c2433',
          muted: '#94a3b8'
        }
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', 'Oswald', 'sans-serif'],
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
