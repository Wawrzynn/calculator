/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      chakra: ["Chakra Petch", "sans-serif"],
    },
    extend: {
      colors: {
        "dark-blue": "#4f4f60",
        "light-grey": "#75738f",
        red: "#d46b77",
        blue: "#7f86c7",
        green: "#bde2c0",
      },
    },
  },
  plugins: [],
};
