import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/scss/global.scss" as *;`,
      },
    },
  },
  base: "/", // Ensure correct base URL
  build: {
    outDir: "dist", // Ensure Vite builds to "dist" for Vercel
  },
  server: {
    historyApiFallback: true, // Ensure React Router works correctly
  },
});
