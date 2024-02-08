import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

/**
 * Fields type definition for content type 'TypeComponentVideo'
 * @name TypeComponentVideoFields
 * @type {TypeComponentVideoFields}
 * @memberof TypeComponentVideo
 */
export interface TypeComponentVideoFields {
  /**
   * Field type definition for field 'internalTitle' (Titolo interno)
   * @name Titolo interno
   * @localized false
   */
  internalTitle: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'source' (Sorgente)
   * @name Sorgente
   * @localized false
   */
  source: EntryFieldTypes.Symbol<"vimeo" | "youtube">;
  /**
   * Field type definition for field 'id' (ID video)
   * @name ID video
   * @localized false
   * @summary L'ID del video (e.g. 8ShQfjJ4d_Y per Youtube o 822956892?h=cbc5dbedfd per Vimeo)
   */
  id: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'aspectRatio' (Aspect ratio)
   * @name Aspect ratio
   * @localized false
   * @summary L'aspect ratio che contiene l'embed del video
   */
  aspectRatio: EntryFieldTypes.Symbol<"16/9" | "21/9">;
  /**
   * Field type definition for field 'maxWidth' (Limita larghezza massima)
   * @name Limita larghezza massima
   * @localized false
   * @summary Se flaggato, il video avrà una larghezza massima limitata (in px).
   */
  maxWidth: EntryFieldTypes.Boolean;
}

/**
 * Entry skeleton type definition for content type 'componentVideo' (Componente: Video)
 * @name TypeComponentVideoSkeleton
 * @type {TypeComponentVideoSkeleton}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2024-01-04T16:30:22.025Z
 * @version 3
 */
export type TypeComponentVideoSkeleton = EntrySkeletonType<
  TypeComponentVideoFields,
  "componentVideo"
>;
/**
 * Entry type definition for content type 'componentVideo' (Componente: Video)
 * @name TypeComponentVideo
 * @type {TypeComponentVideo}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2024-01-04T16:30:22.025Z
 * @version 3
 */
export type TypeComponentVideo<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeComponentVideoSkeleton, Modifiers, Locales>;

export function isTypeComponentVideo<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeComponentVideo<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "componentVideo";
}
