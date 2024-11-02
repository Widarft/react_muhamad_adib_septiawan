/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-bg-hero": "#37517E",
        white: "#ffffff",
        "bs-blue": "#0D6EFD",
        "blue-hover-btn": "#47B2E4",
        "white-news": "#F3F5FA",
        "gray-news": "#444444",
        "white-footer": "#5E5E5E",
        "gray-border": "#CED4DA",
        "blue-button-create-product": "#0D6EFD",
        "gray-p-product": "#212529",
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
