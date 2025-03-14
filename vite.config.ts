import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts"; // Добавляем поддержку деклараций

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true, // Добавляет `index.d.ts` в `dist`
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts", // Главный файл
      name: "LexicalEditor",
      formats: ["es", "cjs"], // ESM и CJS форматы
      fileName: (format) => `index.${format === "es" ? "mjs" : "cjs"}`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "lexical", "@lexical/react"], // External dependencies
    },
  },
});
