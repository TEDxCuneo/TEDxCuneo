import contentful from "./contentful";
import type {
  TypePageSkeleton,
  TypeWebsiteSkeleton,
} from "./generated/contentful";

// Get pages to show in the navbar
const navbarPages: {
  title: string;
  slug: string;
}[] = (
  await contentful.getEntries<TypeWebsiteSkeleton>({
    content_type: "website",
    "fields.active": "Si", // workaround to make Website a singleton
    include: 1,
  })
).items.flatMap((item) => {
  const pages = item.fields.menuPages;
  return pages
    .filter((p) => p)
    .map((page) => {
      return {
        slug: page!.fields.slug,
        title: page!.fields.navbarLabel ?? page!.fields.title,
      };
    });
});

export default navbarPages;
