import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePageSkeleton } from "./TypePage";

/**
 * Fields type definition for content type 'TypeButton'
 * @name TypeButtonFields
 * @type {TypeButtonFields}
 * @memberof TypeButton
 */
export interface TypeButtonFields {
    /**
     * Field type definition for field 'internalTitle' (Titolo interno)
     * @name Titolo interno
     * @localized false
     */
    internalTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'variant' (Variante)
     * @name Variante
     * @localized false
     */
    variant: EntryFieldTypes.Symbol<"Bianco" | "Rosso">;
    /**
     * Field type definition for field 'label' (Label)
     * @name Label
     * @localized false
     */
    label: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'url' (URL)
     * @name URL
     * @localized false
     * @summary URL verso cui puntare
     */
    url?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'page' (Pagina interna verso cui puntare)
     * @name Pagina interna verso cui puntare
     * @localized false
     */
    page?: EntryFieldTypes.EntryLink<TypePageSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'button' (Entità: bottone)
 * @name TypeButtonSkeleton
 * @type {TypeButtonSkeleton}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2024-03-28T21:44:32.497Z
 * @version 3
 */
export type TypeButtonSkeleton = EntrySkeletonType<TypeButtonFields, "button">;
/**
 * Entry type definition for content type 'button' (Entità: bottone)
 * @name TypeButton
 * @type {TypeButton}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2024-03-28T21:44:32.497Z
 * @version 3
 */
export type TypeButton<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeButtonSkeleton, Modifiers, Locales>;

export function isTypeButton<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeButton<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'button'
}
