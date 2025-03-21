import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy ko yahan se hata do
    host: true, // Docker ke liye zaroori
    port: 3000,
  },
});
