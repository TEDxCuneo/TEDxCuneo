import contentful, { type ChainModifiers } from "contentful";

const space = import.meta.env.CONTENTFUL_SPACE_ID!;
const accessToken = import.meta.env.CONTENTFUL_ACCESS_TOKEN!;
const previewToken = import.meta.env.CONTENTFUL_PREVIEW_TOKEN!;
const dev = import.meta.env.DEV;

const client = contentful.createClient({
  space,
  environment: dev ? "dev" : "master",
  accessToken: dev ? previewToken : accessToken,
  host: dev ? "preview.contentful.com" : "cdn.contentful.com",
});

export default client.withoutUnresolvableLinks;
