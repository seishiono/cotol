<<<<<<< HEAD
import { fileURLToPath, URL } from 'node:url'

=======
>>>>>>> refs/remotes/origin/main
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
<<<<<<< HEAD
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
=======
>>>>>>> refs/remotes/origin/main
})
