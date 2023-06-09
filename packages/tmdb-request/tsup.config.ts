import path from "node:path";
import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: {
    "tmdb-request": path.resolve(__dirname, "src/mod.ts"),
    "merge-deep": path.resolve(__dirname, "src/merge-deep.ts"),
  },
  format: ["esm"],
  clean: true,
  dts: true,

  // To delete the in-source testing (comes from vitest)
  // See: https://github.com/egoist/tsup/issues/625#issuecomment-1608591913
  define: { "import.meta.vitest": "false" },
  treeshake: true,
});
