/// <reference types="vitest" />
import path from "path";
import { defineConfig } from "vite";

import pkg from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/mod.ts"),
      name: pkg.name,
    },
    sourcemap: true,
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  define: { "import.meta.vitest": "undefined" },
  test: {
    includeSource: ["src/**/*.{js,ts}"],
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});
