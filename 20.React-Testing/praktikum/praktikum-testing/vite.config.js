import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // Menyediakan DOM untuk pengujian React
    setupFiles: "./src/setupTests.js", // Setup tambahan jika diperlukan
    includeSource: ["src/**/*.{js,jsx}"],
  },
});
