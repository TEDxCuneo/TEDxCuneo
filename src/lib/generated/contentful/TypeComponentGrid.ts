import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeComponentRichTextSkeleton } from "./TypeComponentRichText";

/**
 * Fields type definition for content type 'TypeComponentGrid'
 * @name TypeComponentGridFields
 * @type {TypeComponentGridFields}
 * @memberof TypeComponentGrid
 */
export interface TypeComponentGridFields {
    /**
     * Field type definition for field 'internalTitle' (Titolo interno)
     * @name Titolo interno
     * @localized false
     */
    internalTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'mobileColumnsAmount' (Colonne mobile)
     * @name Colonne mobile
     * @localized false
     */
    mobileColumnsAmount: EntryFieldTypes.Symbol<"1" | "2" | "3" | "4" | "5" | "6">;
    /**
     * Field type definition for field 'tabletColumnsAmount' (Colonne Tablet)
     * @name Colonne Tablet
     * @localized false
     */
    tabletColumnsAmount: EntryFieldTypes.Symbol<"1" | "2" | "3" | "4" | "5" | "6">;
    /**
     * Field type definition for field 'desktopColumnsAmount' (Colonne desktop)
     * @name Colonne desktop
     * @localized false
     */
    desktopColumnsAmount: EntryFieldTypes.Symbol<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8">;
    /**
     * Field type definition for field 'elements' (Elementi)
     * @name Elementi
     * @localized false
     */
    elements: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeComponentRichTextSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'componentGrid' (Componente: griglia)
 * @name TypeComponentGridSkeleton
 * @type {TypeComponentGridSkeleton}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2023-12-22T21:32:33.934Z
 * @version 1
 */
export type TypeComponentGridSkeleton = EntrySkeletonType<TypeComponentGridFields, "componentGrid">;
/**
 * Entry type definition for content type 'componentGrid' (Componente: griglia)
 * @name TypeComponentGrid
 * @type {TypeComponentGrid}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2023-12-22T21:32:33.934Z
 * @version 1
 */
export type TypeComponentGrid<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeComponentGridSkeleton, Modifiers, Locales>;

export function isTypeComponentGrid<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeComponentGrid<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'componentGrid'
}
