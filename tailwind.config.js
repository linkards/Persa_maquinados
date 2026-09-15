/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F4F9',
          100: '#DCE5F1',
          200: '#BDD0E6',
          800: '#152E4D',
          900: '#0F2744',
          950: '#0A192F',
        },
        cobalt: {
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      }
    }
  },
  plugins: []
}
