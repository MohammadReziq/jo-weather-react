import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // تأكد من أن المنفذ مطابق لما تستخدمه في Electron
  },
  build: {
    outDir: 'dist', // مجلد البناء الافتراضي لـ Vite
  },
});