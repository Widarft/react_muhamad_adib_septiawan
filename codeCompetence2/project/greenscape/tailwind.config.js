/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-green": "#154114",
        "second-cream": "#FDF3EA",
        "dark-cream": "#F7E2CF",
        "dark-orange": "#F85430",
        "light-orange": "#F5684A",
        "light-green": "#56FF53",
        "main-black": "#141414",
        "gray-blue": "#DBE7E3",
        "blue-bg-hero": "#37517E",
        "bs-blue": "#0D6EFD",
        "blue-hover-btn": "#47B2E4",
        "white-news": "#F3F5FA",
        "gray-news": "#444444",
        "white-footer": "#5E5E5E",
        "gray-border": "#CED4DA",
        "blue-button-create-product": "#0D6EFD",
        "gray-p-product": "#212529",
      },
    },
  },
  plugins: [],
};
