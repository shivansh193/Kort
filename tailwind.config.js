/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      navBg: "#3C0404",
      caseCard: "#5e1d16",
      white: "#ffffff",
    },
    fontFamily: {
      niceFont: ["NiceFont", "sans-serif"],
    },
  },
  plugins: [],
};
