# TEDxCuneo Website

This repository contains the Astro codebase for `www.tedxcuneo.com`.

It builds to a static website hosted on Netlify.

The site is mostly Contentful-driven:

- pages are fetched from Contentful at build time
- a catch-all Astro route maps Contentful slugs to static pages
- page layouts are selected from a Contentful `layout` field
- reusable content blocks are rendered through typed dynamic components

In practice:

- the website is generated as static HTML, CSS, and JS during the build
- Netlify serves the built output
- when content changes in Contentful, the site is rebuilt and redeployed
- the live website does not query Contentful for page data at request time
- media assets are loaded directly from Contentful's CDN URLs

## Stack

- Astro
- Tailwind CSS
- SCSS
- React for a small interactive surface
- Contentful as CMS

## Project Structure

Key directories and files:

- `src/pages/[...slug].astro`: builds all Contentful pages and chooses the layout
- `src/layouts/`: event-specific and generic page layouts
- `src/layouts/abstract/`: shared layout shells
- `src/components/`: shared Astro and React components
- `src/components/dynamic/`: Contentful-driven content block renderers
- `src/lib/contentful.ts`: runtime Contentful client
- `src/lib/website.ts`: fetches website-wide settings from Contentful
- `src/lib/generated/contentful/`: generated TypeScript types for the Contentful model
- `public/`: static assets and downloadable files

## Environment Variables

Create a local `.env` file using `.env.example` as reference.

Required variables:

- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_MGMT_TOKEN`
- `CONTENTFUL_ACCESS_TOKEN`
- `CONTENTFUL_PREVIEW_TOKEN`

Usage:

- `CONTENTFUL_SPACE_ID`: Contentful space identifier
- `CONTENTFUL_MGMT_TOKEN`: used only for schema/type generation
- `CONTENTFUL_ACCESS_TOKEN`: production Content Delivery API token
- `CONTENTFUL_PREVIEW_TOKEN`: preview API token used in dev mode

## Development

Install dependencies:

```sh
npm install
```

Start the dev server:

```sh
npm run dev
```

Other useful commands:

```sh
npm run build
npm run lint
npm run lint:js+ts
npm run lint:types
npm run lint:fix
```

## Contentful Runtime Flow

This project is a static site, so Contentful data is fetched during build time, not on each user request.

At build/runtime configuration level, the site uses the Contentful Delivery API in production builds and the Preview API in development.

The client is configured in `src/lib/contentful.ts`:

- `import.meta.env.DEV === true`: uses `CONTENTFUL_PREVIEW_TOKEN` and `preview.contentful.com`
- otherwise: uses `CONTENTFUL_ACCESS_TOKEN` and `cdn.contentful.com`

Website-level settings are fetched once in `src/lib/website.ts`.

Page generation happens in `src/pages/[...slug].astro`:

1. fetch all `page` entries from Contentful
2. convert each Contentful slug into an Astro static path
3. pick a layout based on `page.fields.layout`
4. render the page through the selected layout

Production behavior:

- Netlify serves the static files produced by Astro
- Contentful content changes require a rebuild to appear on the live site
- the live site still loads image and media URLs from Contentful's CDN

## Contentful Type Generation

This project keeps generated TypeScript definitions for the Contentful model in:

```text
src/lib/generated/contentful/
```

Refresh them with:

```sh
npm run cf-codegen
```

The command reads `CONTENTFUL_SPACE_ID` and `CONTENTFUL_MGMT_TOKEN` from `.env`, uses the Contentful Management API, and regenerates the files in `src/lib/generated/contentful/`.

**Run it whenever the Contentful schema changes, then review the generated diff and update the app code if needed.**

## Generated Types in the App

Generated Contentful types are used throughout the app:

- `src/pages/[...slug].astro`: typed page queries
- `src/lib/website.ts`: typed website settings query
- `src/components/DynamicComponent.astro`: type-guard-based component dispatch
- `src/components/dynamic/RichText.astro`: typed embedded entries and links

## Maintenance Notes

Things worth knowing before making changes:

- the repo may contain event-specific layouts from past editions
- navigation and footer content come from the Contentful `website` entry
- `src/lib/generated/contentful/` is generated code and should not be hand-edited unless you know exactly why
