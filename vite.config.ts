import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      includePublic: true,
      logStats: true,
      png: {
        quality: 65,
      },
      jpeg: {
        quality: 65,
        progressive: true,
      },
      webp: {
        quality: 60,
      },
      avif: {
        quality: 50,
      },
    }),
  ],
  base: "/demo-marketing-studio/", // IMPORTANT for GitHub Pages
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
