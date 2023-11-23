import {defineConfig} from 'vite'
import {ViteEjsPlugin} from "vite-plugin-ejs";
import * as path from "path";


export default defineConfig({
  root: 'src',
  base: './',

  plugins: [
    ViteEjsPlugin()
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },

  esbuild: false,

  build: {
    cssMinify: false,
    emptyOutDir: true,
    outDir: '../dist',
    modulePreload: false,
    rollupOptions: {
      output: {
        entryFileNames: `assets/js/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
        chunkFileNames: `assets/[name].js`,
      }
    }
  },

  optimizeDeps: false,
  optimizeDtsWatch: false,
})
