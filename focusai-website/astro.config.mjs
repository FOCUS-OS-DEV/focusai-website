// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://focusai.co.il',
  base: '/',

  // RTL Hebrew support
  i18n: {
    defaultLocale: 'he',
    locales: ['he'],
  },

  redirects: {
    '/ai-tools': '/tools',
  },

  vite: {
    plugins: [tailwindcss()],
    // Optimize for production
    build: {
      cssMinify: true,
      minify: 'esbuild',
    },
  },

  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/links') && !page.includes('GPTS'),
    }),
    icon({
      include: {
        lucide: ['*'],  // All Lucide icons
        mdi: ['*'],     // All Material Design icons
      },
    }),
  ],

  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});