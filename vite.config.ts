import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server: {
    open: true,
  },
  build: {
    sourcemap: true,
    commonjsOptions: {
      include: [],
    },
  },
  plugins: [react()],
  optimizeDeps: {
    disabled: false,
  },
})
