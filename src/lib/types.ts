import type {
  Entry as RawEntry,
  EntrySkeletonType,
  Asset as RawAsset,
} from "contentful";

export type ChainModifier = "WITHOUT_UNRESOLVABLE_LINKS";

export type Entry<T extends EntrySkeletonType> = RawEntry<
  T,
  ChainModifier,
  string
>;

export type Link = {
  label: string;
  url: string;
  target?: string;
};

export type Asset = RawAsset<ChainModifier, string>;
