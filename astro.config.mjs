import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // shortcut: samakan dengan SITE.url selama memakai workers.dev.
  site: 'https://klp-kelampaian.akbariaidul.workers.dev',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
