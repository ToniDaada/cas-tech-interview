/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      keyframes: {
        growUp: {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
      },
      animation: {
        growUp: "growUp 1.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
