/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8a728e",
          dark: "#3f2f41",
          light: "#b9a5bf",
          pink: "#d8a7b1",
        },
        secondary: {
          DEFAULT: "#c49a6c",
          light: "#e3c5a8"
        },
        ghost: {
          DEFAULT: "#f4f1f6"
        }
      }
    },
  },
  plugins: [],
}

