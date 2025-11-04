import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Configured for your GitHub Pages repo
export default defineConfig({
  base: "/demo-marketing-studio/",
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
  server: {
    port: 5173,
  },
});

