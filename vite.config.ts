import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server: {
    open: true,
  },
  build: {
    target: "esnext",
    sourcemap: true,
  },
  preview: {
    open: true,
  },
  plugins: [react()],
})
