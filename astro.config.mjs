import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import robotsTxt from "astro-robots-txt";
import tailwindcssNesting from 'tailwindcss/nesting';

export default defineConfig({
  site: 'https://www.tedxcuneo.com',
  integrations: [tailwind(), sitemap(), robotsTxt()],
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcssNesting()]
      }
    }
  }
});