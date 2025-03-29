import type {
  Asset as RawAsset,
  Entry as RawEntry,
  EntrySkeletonType,
} from "contentful";

export type ChainModifier = "WITHOUT_UNRESOLVABLE_LINKS";

export type Entry<T extends EntrySkeletonType> = RawEntry<
  T,
  ChainModifier,
  string
>;

export interface Link {
  label: string;
  url: string;
  target?: string;
}

export type Asset = RawAsset<ChainModifier, string>;
