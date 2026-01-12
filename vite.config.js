import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          charts: ['react-apexcharts', 'apexcharts'],
          ui: ['bootstrap', '@iconify/react'],
          utils: ['lodash-es', 'clsx']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  define: {
    global: 'globalThis',
  },
  optimizeDeps: {
    include: ['jquery', 'bootstrap', 'datatables.net', 'datatables.net-dt']
  }
})