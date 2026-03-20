import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  base: "/vue-welcome-page/",
  plugins: [vue(), vueDevTools()],
  build: {
    target: "es2020", // Явно укажите целевую версию ES
  },
  define: {
    "process.env": {}, // Для совместимости с некоторыми плагинами
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
