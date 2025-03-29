import type { TypePageSkeleton } from "./generated/contentful";
import type { Entry } from "./types";

/**
 * Formats a date as a string in the format "HH:MM:SS"
 *
 * @param date The date to format
 * @returns The formatted date as a string in the format "HH:MM:SS"
 */
export function formatTimestamp(date: Date): string {
  // format timestamp as HH:MM:SS
  const ts = `${date.getHours().toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}:${date.getMinutes().toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}:${date.getSeconds().toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}`;
  return ts;
}

/**
 * A fake page coming from Contentful
 */
export const fakePage: Entry<TypePageSkeleton> = {
  sys: {
    id: "page",
    type: "Entry",
    contentType: {
      sys: {
        type: "Link",
        linkType: "ContentType",
        id: "page",
      },
    },
    createdAt: "2021-08-31T14:00:00.000Z",
    updatedAt: "2021-08-31T14:00:00.000Z",
    revision: 1,
    space: {
      sys: {
        type: "Link",
        linkType: "Space",
        id: "space",
      },
    },
    environment: {
      sys: {
        id: "master",
        type: "Link",
        linkType: "Environment",
      },
    },
  },
  metadata: {
    tags: [],
  },
  fields: {
    title: "Page",
    slug: "page",
    internalTitle: "",
    layout: "Generico",
    ogImage: undefined,
    ogTitle: "",
    noIndex: true,
    noFollow: true,
  },
};

/**
 * Prepends a slash to a path if it doesn't already have one
 *
 * @param path The path to prepend a slash to
 * @returns The path with a slash prepended if it doesn't already have one
 */
export function prependSlash(path: string): string {
  return path.startsWith("/") ? path : `/${path}`;
}
