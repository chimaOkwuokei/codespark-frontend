import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src/custom-sw',
      filename: 'sw.ts'
    }),
    tailwindcss(),
  ],
  // server: {
  //   proxy: {
  //     // proxy's serve as temporary solutions for cors errors
  //     // "/api": {
  //     //   target: "https://codespark-backend.onrender.com",
  //     //   //  target: "https://sunfish-saving-killdeer.ngrok-free.app"
  //     //   changeOrigin: true,
  //     //   // rewrite: (path) => path.replace(/^\/api/, ""),
  //     // },
  //   }
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
