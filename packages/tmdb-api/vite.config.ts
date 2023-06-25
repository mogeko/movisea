import path from "path";
import { defineConfig } from "vite";

import pkg from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/mod.ts"),
      name: pkg.name,
    },
    emptyOutDir: false,
    sourcemap: true,
  },
  define: {
    "import.meta.vitest": "undefined",
  },
});
