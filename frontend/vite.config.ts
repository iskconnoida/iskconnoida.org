import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssMinify: "lightningcss",
  },
  plugins: [
    react(),
    ViteImageOptimizer({ webp: { lossless: false, quality: 65 } }),
  ],
});
