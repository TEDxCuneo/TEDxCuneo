import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePageSkeleton } from "./TypePage";

/**
 * Fields type definition for content type 'TypeComponentCard'
 * @name TypeComponentCardFields
 * @type {TypeComponentCardFields}
 * @memberof TypeComponentCard
 */
export interface TypeComponentCardFields {
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
    image: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'kicker' (Kicker)
     * @name Kicker
     * @localized false
     * @summary Testo prima del titolo in grilletto
     */
    kicker: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'title' (Titolo)
     * @name Titolo
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'actionLabel' (Testo azione)
     * @name Testo azione
     * @localized false
     * @summary Es: Scopri di più
     */
    actionLabel?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'actionPage' (Pagina azione)
     * @name Pagina azione
     * @localized false
     */
    actionPage?: EntryFieldTypes.EntryLink<TypePageSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'componentCard' (Componente: Card)
 * @name TypeComponentCardSkeleton
 * @type {TypeComponentCardSkeleton}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2024-02-12T21:53:58.782Z
 * @version 3
 */
export type TypeComponentCardSkeleton = EntrySkeletonType<TypeComponentCardFields, "componentCard">;
/**
 * Entry type definition for content type 'componentCard' (Componente: Card)
 * @name TypeComponentCard
 * @type {TypeComponentCard}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2024-02-12T21:53:58.782Z
 * @version 3
 */
export type TypeComponentCard<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeComponentCardSkeleton, Modifiers, Locales>;

export function isTypeComponentCard<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeComponentCard<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'componentCard'
}
