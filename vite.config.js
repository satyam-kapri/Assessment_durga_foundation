import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {

    alias: {

        '@': '/src' // This is the key part, make sure the path is correct

    }

}
})