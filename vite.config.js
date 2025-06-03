import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",
      name: "CronicasDeLaMarcaLib",
      fileName: format => `cronicas-de-la-marca-lib.${format}.js`,
      formats: ["es", "cjs"]
    }
  },
  test: {
    globals: true,
    environment: "node"
  }
});
