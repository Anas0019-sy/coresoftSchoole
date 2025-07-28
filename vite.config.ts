import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // تأكد من أن هذا السطر يطابق اسم مستودعك تمامًا
  base: '/coresoftSchoole/',
})