import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import remix from '@remix-run/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss() , remix()],
})
