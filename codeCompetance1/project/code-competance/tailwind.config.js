/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-footer": "#141414",
        "gray-font": "#BBBEC1",
        "white-background": "#F9FAFB",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        jost: ["Jost", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
