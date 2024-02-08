import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import type { TypePageSkeleton } from "./TypePage";

/**
 * Fields type definition for content type 'TypeSpeaker'
 * @name TypeSpeakerFields
 * @type {TypeSpeakerFields}
 * @memberof TypeSpeaker
 */
export interface TypeSpeakerFields {
  /**
   * Field type definition for field 'internalTitle' (Titolo interno)
   * @name Titolo interno
   * @localized false
   */
  internalTitle: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'image' (Immagine)
   * @name Immagine
   * @localized false
   */
  image?: EntryFieldTypes.AssetLink;
  /**
   * Field type definition for field 'firstName' (Nome)
   * @name Nome
   * @localized false
   */
  firstName: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'lastName' (Cognome)
   * @name Cognome
   * @localized false
   */
  lastName: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'job' (Professione)
   * @name Professione
   * @localized false
   */
  job?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'talkTitle' (Titolo talk)
   * @name Titolo talk
   * @localized false
   */
  talkTitle?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'youtubeId' (ID video Youtube)
   * @name ID video Youtube
   * @localized false
   * @summary L'ID del video YouTube del talk, lo si trova nell'URL. ES: Y5JW7KYucC4
   */
  youtubeId?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'page' (Pagina dello speaker)
   * @name Pagina dello speaker
   * @localized false
   */
  page?: EntryFieldTypes.EntryLink<TypePageSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'speaker' (Entità: Speaker)
 * @name TypeSpeakerSkeleton
 * @type {TypeSpeakerSkeleton}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2023-12-23T14:59:21.889Z
 * @version 13
 */
export type TypeSpeakerSkeleton = EntrySkeletonType<
  TypeSpeakerFields,
  "speaker"
>;
/**
 * Entry type definition for content type 'speaker' (Entità: Speaker)
 * @name TypeSpeaker
 * @type {TypeSpeaker}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2023-12-23T14:59:21.889Z
 * @version 13
 */
export type TypeSpeaker<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeSpeakerSkeleton, Modifiers, Locales>;

export function isTypeSpeaker<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeSpeaker<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "speaker";
}
