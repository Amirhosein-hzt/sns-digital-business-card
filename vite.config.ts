import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Plain Vite + React setup. The production build outputs static files to dist/.
// base './' makes asset URLs relative so the built site also works when hosted
// in a subdirectory, e.g. https://<user>.github.io/<repo>/ on GitHub Pages.
export default defineConfig({
  base: './',
  plugins: [react()],
});
