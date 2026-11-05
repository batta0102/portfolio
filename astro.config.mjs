// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://batta0102.github.io',
  base: '/portfolio',
  trailingSlash: 'ignore',
  // The stylesheet is small; inlining it removes the only render-blocking request.
  build: { inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR', en: 'en-US' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
