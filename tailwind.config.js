/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#32C0C6',
        gray: {
          700: '#4E4E4E',
          600: '#616161',
          500: '#8c8c8c',
          200: '#E3E6E9',
          100: '#F3F3F5',
        },
        tech: {
          js: '#F5DA79',
          ts: '#3276C6',
          html: '#FF4343',
          css: '#4B97F1',
          java: '#A7752F',
          go: '#4DAAD4',
        },
      },
    },
  },
  plugins: [],
}
