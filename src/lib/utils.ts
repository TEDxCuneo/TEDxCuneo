import type { Entry as RawEntry, EntrySkeletonType } from "contentful";

export type ChainModifier = "WITHOUT_UNRESOLVABLE_LINKS";

export type Entry<T extends EntrySkeletonType> = RawEntry<
  T,
  ChainModifier,
  string
>;
