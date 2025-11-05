import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/demo-marketing-studio/",
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 5173,
    open: true,
  },
  optimizeDeps: {
    include: ["framer-motion", "lucide-react"],
  },
});
