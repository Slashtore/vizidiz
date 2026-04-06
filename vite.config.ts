import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  // ← Обязательно (имя репозитория)
  plugins: [react()],
})