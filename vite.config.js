import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    assetsInlineLimit: 0,
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./frontend/src/assets"),
      "@components": path.resolve(__dirname, "./frontend/src/components"),
      "@hooks": path.resolve(__dirname, "./frontend/src/hooks"),
      "@pages": path.resolve(__dirname, "./frontend/src/pages"),
      "@svg": path.resolve(__dirname, "./frontend/src/assets/svg"),
      "@img": path.resolve(__dirname, "./frontend/src/assets/img"),
      "@styles": path.resolve(__dirname, "./frontend/src/styles"),
      "@content": path.resolve(__dirname, "./frontend/src/content"),
      "@utils": path.resolve(__dirname, "./frontend/src/utils"),
      "@exports": path.resolve(__dirname, "./frontend/src/utils/exports"),
      "@utils-scss": path.resolve(__dirname, "./frontend/src/styles/utils/utils.scss"),
      "@router": path.resolve(__dirname, "./frontend/src/router"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        api: "modern-compiler",
      },
    },
  },
});
