/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        catholic: {
          burgundy: "#4A3B2E",
          "burgundy-dark": "#2D2318",
          "burgundy-light": "#8B7355",
          gold: "#C9A84C",
          "gold-light": "#E8C96A",
          "gold-dark": "#A08030",
          cream: "#F7F3ED",
          "cream-dark": "#EDE5D8",
          darkblue: "#4A3B2E",
          "darkblue-light": "#8B7355",
          parchment: "#F0E8D8",
          stone: "#6B6058",
          "stone-light": "#A09488",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "Cambria", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
