import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Correct GitHub Pages base
export default defineConfig({
  base: "/demo-marketing-studio/",
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
  server: {
    port: 5173,
    open: true,
  },
});
