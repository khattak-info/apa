import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  clearScreen: false,
  plugins: [
    react(),
  ],
  server: {
    cors: true,
    allowedHosts: true,
    watch: {
      usePolling: true,
      interval: 500,
    },
  },
});