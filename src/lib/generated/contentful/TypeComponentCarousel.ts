import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSpeakerSkeleton } from "./TypeSpeaker";

/**
 * Fields type definition for content type 'TypeComponentCarousel'
 * @name TypeComponentCarouselFields
 * @type {TypeComponentCarouselFields}
 * @memberof TypeComponentCarousel
 */
export interface TypeComponentCarouselFields {
    /**
     * Field type definition for field 'internalTitle' (Titolo interno)
     * @name Titolo interno
     * @localized false
     */
    internalTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'type' (Tipo)
     * @name Tipo
     * @localized false
     * @summary Definisce il tipo di carosello, se mostrare le immagini o le card.
     */
    type: EntryFieldTypes.Symbol<"Card" | "Immagini">;
    /**
     * Field type definition for field 'showNavigation' (Mostra freccie navigatione)
     * @name Mostra freccie navigatione
     * @localized false
     */
    showNavigation: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'images' (Immagini)
     * @name Immagini
     * @localized false
     */
    images?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    /**
     * Field type definition for field 'cards' (Cards)
     * @name Cards
     * @localized false
     */
    cards?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSpeakerSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'componentCarousel' (Componente: Carousel)
 * @name TypeComponentCarouselSkeleton
 * @type {TypeComponentCarouselSkeleton}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2024-01-04T18:36:19.750Z
 * @version 5
 */
export type TypeComponentCarouselSkeleton = EntrySkeletonType<TypeComponentCarouselFields, "componentCarousel">;
/**
 * Entry type definition for content type 'componentCarousel' (Componente: Carousel)
 * @name TypeComponentCarousel
 * @type {TypeComponentCarousel}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2024-01-04T18:36:19.750Z
 * @version 5
 */
export type TypeComponentCarousel<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeComponentCarouselSkeleton, Modifiers, Locales>;

export function isTypeComponentCarousel<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeComponentCarousel<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'componentCarousel'
}
