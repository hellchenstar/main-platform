import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/main-platform/',
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/games/sokoban/': {
        target: 'http://127.0.0.1:4173',
        changeOrigin: true
      },
      '/news/ai-briefing/': {
        target: 'http://127.0.0.1:4174',
        changeOrigin: true
      }
    }
  }
})
