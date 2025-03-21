import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 4173, // or any port you prefer
    host: "0.0.0.0", // Important for Docker
  },
});
