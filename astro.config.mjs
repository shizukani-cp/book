// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://shizukani-cp.github.io',
  base: '/book',

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      preserveSymlinks: true,
    },
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },

  integrations: [sitemap()],
});