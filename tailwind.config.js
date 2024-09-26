/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./06.BOOTSTRAP/praktikum/landingPage.html",
  ],
  theme: {
    colors: {
      "blue-bg-hero": "#37517E",
      white: "#ffffff",
      "bs-blue": "#0D6EFD",
      "blue-hover-btn": "#47B2E4",
      "white-news": "#F3F5FA",
      "gray-news": "#444444",
      "white-footer": "#5E5E5E",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        jost: ["Jost", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
