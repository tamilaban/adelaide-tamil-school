import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Adelaide Tamil School — static marketing site.
// React + Vite + Tailwind v4, sharing the Skyrin design language
// (navy #15355E / amber #CB8315, Outfit display type, glass panels).
export default defineConfig({
  base: '/adelaide-tamil-school/',
  plugins: [react(), tailwindcss()],
});
