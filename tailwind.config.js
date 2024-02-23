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
        },
      },
    },
  },
  plugins: [],
}
