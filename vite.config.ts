import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/vizidiz/',  // ← Обязательно (имя репозитория)
  plugins: [react()],
})