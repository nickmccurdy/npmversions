import { defineConfig } from "vitest/config"
import checker from "vite-plugin-checker"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: "eslint --ignore-path .gitignore .",
      },
    }),
  ],
  server: {
    open: true,
  },
  build: {
    sourcemap: true,
    commonjsOptions: {
      include: [],
    },
  },
  optimizeDeps: {
    disabled: false,
  },
  test: {
    globals: true,
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})
