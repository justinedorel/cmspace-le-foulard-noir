import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import site from './src/data/site.json';

export default defineConfig({
  site: site.seo_url || site.website || 'https://monsite.fr',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
