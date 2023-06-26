/// <reference types="vitest" />
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import pkg from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/mod.ts"),
      fileName: "mod",
      name: pkg.name,
    },
    sourcemap: true,
    manifest: true,
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  plugins: [dts({ rollupTypes: true })],

  /* Vitest config */
  define: { "import.meta.vitest": "undefined" },
  test: {
    includeSource: ["src/**/*.{js,ts}"],
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});
