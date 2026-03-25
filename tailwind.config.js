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
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#b3c5d8",
          300: "#6b8cae",
          400: "#4a7399",
          500: "#34568b",
          600: "#2a4678",
          700: "#1f3456",
          800: "#152338",
          900: "#0f1620",
        },
        accent: {
          50: "#f5f5f5",
          100: "#e7e7e7",
          200: "#cccccc",
          300: "#999999",
          400: "#666666",
          500: "#333333",
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

