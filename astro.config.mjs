import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import tailwindcssNesting from 'tailwindcss/nesting';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.tedxcuneo.com',
  integrations: [tailwind(), sitemap(), robotsTxt(), react()],
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcssNesting()]
      }
    }
  }
});