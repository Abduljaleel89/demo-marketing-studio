import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Configured specifically for your GitHub Pages deployment
export default defineConfig({
  base: "/demo-marketing-studio/", // Required so assets load correctly on GitHub Pages
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
  server: {
    port: 5173,
  },
});
