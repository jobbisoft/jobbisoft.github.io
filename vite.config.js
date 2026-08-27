import { defineConfig } from 'vite'
import vue from '@vitejs/vue'

export default defineConfig({
  plugins: [vue()],
  base: '/jobbisoft-web/' // <-- Asegúrate de incluir las barras diagonales
})
