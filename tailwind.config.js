/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '360px',
      },
      colors: {
        primary: {
          DEFAULT: '#8a728e',
          dark: '#3f2f41',
          light: '#b9a5bf',
          pink: '#d8a7b1',
        },
        secondary: {
          DEFAULT: '#c49a6c',
          light: '#e3c5a8',
        },
        gray: {
          smoke: '#f4f1f6',
          nav: '#f5f5f5',
          text: '#fefefe',
          copyright: '#c6c0ba',
        },
      },
    },
  },
  plugins: [],
};
