import { defineConfig } from 'vite'
import * as path from 'node:path'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import { compression } from 'vite-plugin-compression2'
import viteImagemin from '@vheemstra/vite-plugin-imagemin'
import imageminGifSicle from 'imagemin-gifsicle'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminPngQuant from 'imagemin-pngquant'
import imageminSvgo from 'imagemin-svgo'
import imageminWebp from 'imagemin-webp'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    checker({ typescript: true, overlay: true }),
    compression(),
    viteImagemin({
      plugins: {
        jpg: imageminMozjpeg(),
        png: imageminPngQuant(),
        gif: imageminGifSicle(),
        svg: imageminSvgo(),
      },
      makeWebp: {
        plugins: {
          jpg: imageminWebp(),
          png: imageminWebp(),
        },
      },
    }),
  ],
  server: {
    host: 'localhost',
    port: 3000,
    cors: true,
  },
})
