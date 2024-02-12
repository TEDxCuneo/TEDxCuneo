import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import tailwindcssNesting from 'tailwindcss/nesting';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.tedxcuneo.com',
	integrations: [tailwind(), sitemap()],
	vite: {
		css: {
			postcss: {
				plugins: [tailwindcssNesting()],
			},
		},
	},
});
