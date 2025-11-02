/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#a78bfa",
          DEFAULT: "#7c3aed",
          dark: "#5b21b6"
        }
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(to right, #7c3aed, #06b6d4)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};
