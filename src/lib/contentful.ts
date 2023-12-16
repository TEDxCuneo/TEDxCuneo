import contentful from "contentful";

const space = import.meta.env.CONTENTFUL_SPACE_ID!;
const accessToken = import.meta.env.CONTENTFUL_ACCESS_TOKEN!;

const client = contentful.createClient({
  space,
  accessToken,
});

export default client.withoutUnresolvableLinks;
