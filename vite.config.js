// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   preview: {
//     port: 4173, // or any port you prefer
//     host: "0.0.0.0", // Important for Docker
//     allowedHosts: ["hook-4-startup.onrender.com"], // ✅ Add Render domain here
//   },
//   server: {
//     host: "0.0.0.0", // Docker ke liye zaroori
//     port: 3000, // Ya koi bhi port jo tum use kar rahe ho
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // ✅ Docker ke liye zaroori
    port: 3000, // ✅ Frontend ka port

    proxy: {
      "/": {
        target: "https://hook4startup-bakend-java-dev.onrender.com", // ✅ Backend URL
        changeOrigin: true,
        secure: true, // ✅ HTTPS backend ke liye true rakho
      },
    },
  },
});
