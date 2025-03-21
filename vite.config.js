// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://hook4startup-bakend-java-dev.onrender.com", // ⚡️ Backend ka URL
        changeOrigin: true,
        secure: true, // Agar https pe issue ho to
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
