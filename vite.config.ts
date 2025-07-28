import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/', // <--- هذا هو السطر الوحيد الذي ستضيفه
})