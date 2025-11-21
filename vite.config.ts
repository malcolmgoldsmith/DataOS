import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://dataos.naea1.uds-dev.lenovo.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/lens2/api/public:udc-sm/v2'),
        secure: true,
      }
    }
  }
});
