import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js', // Cambia esto si tu entry point es diferente
      name: 'CronicasDeLaMarcaLib',
      fileName: (format) => `cronicas-de-la-marca-lib.${format}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      // Excluye dependencias externas del bundle
      external: [],
      output: {}
    }
  },
  test: {
    // Opciones de Vitest (puedes personalizar según tus necesidades)
    globals: true,
    environment: 'node'
  }
})