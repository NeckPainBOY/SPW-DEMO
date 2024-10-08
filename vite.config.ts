import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
        @import "@/assets/styles/less/bem.less";
        @import "@/assets/styles/less/layout.less";
        `,
      },
    },
  },
});
