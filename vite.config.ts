import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/demo-marketing-studio/", // 👈 IMPORTANT for GitHub Pages
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
