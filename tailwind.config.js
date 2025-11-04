/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-indigo-600", "from-indigo-600", "to-cyan-500", "text-indigo-600",
    "flex", "grid", "hidden", "block", "inline-flex", "items-center", "justify-between",
    "px-3", "px-4", "px-5", "py-2", "py-3", "gap-3", "gap-6",
    "rounded-lg", "rounded-md", "rounded-xl", "rounded-2xl",
    "shadow", "shadow-lg", "shadow-sm",
    "container-max", "hero-accent", "card", "form-control"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: "#6366f1",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(to right, #6366f1, #06b6d4)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
