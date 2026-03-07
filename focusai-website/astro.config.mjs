// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
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
    '/services/ai-agents': '/ai-agents',
    '/ai-fullstack': '/ai-dev',
    '/links': '/',
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
      filter: (page) =>
        !page.includes('/links') &&
        !page.includes('GPTS') &&
        !page.includes('thank-you') &&
        !page.includes('unsubscribe') &&
        !page.includes('content-automation-watch') &&
        !page.includes('/services/') &&
        !page.includes('/privacy-policy') &&
        !page.includes('/terms') &&
        !page.includes('/admin/') &&
        !page.includes('/bot-camp-syllabus') &&
        !page.includes('/ai-dev-syllabus') &&
        !page.includes('/claude-code-guide') &&
        !page.includes('/webinar-links'),
    }),
  ],

  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});