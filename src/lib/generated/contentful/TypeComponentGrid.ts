import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeComponentRichTextSkeleton } from "./TypeComponentRichText";
import type { TypePartnerSkeleton } from "./TypePartner";
import type { TypeSpeakerSkeleton } from "./TypeSpeaker";
import type { TypeTeamMemberSkeleton } from "./TypeTeamMember";

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
     * Field type definition for field 'heading' (Titolo)
     * @name Titolo
     * @localized false
     * @summary Il titolo (opzionale) da mostrare prima della griglia come heading.
     */
    heading?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'mobileColumnsAmount' (Numero colonne mobile)
     * @name Numero colonne mobile
     * @localized false
     */
    mobileColumnsAmount: EntryFieldTypes.Symbol<"1" | "2" | "3" | "4" | "5" | "6">;
    /**
     * Field type definition for field 'tabletColumnsAmount' (Numero colonne Tablet)
     * @name Numero colonne Tablet
     * @localized false
     */
    tabletColumnsAmount: EntryFieldTypes.Symbol<"1" | "2" | "3" | "4" | "5" | "6">;
    /**
     * Field type definition for field 'desktopColumnsAmount' (Numero colonne desktop)
     * @name Numero colonne desktop
     * @localized false
     */
    desktopColumnsAmount: EntryFieldTypes.Symbol<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8">;
    /**
     * Field type definition for field 'gapX' (Spaziatura orizzontale)
     * @name Spaziatura orizzontale
     * @localized false
     * @summary Spaziatura orizzontale tra gli elementi della griglia
     */
    gapX: EntryFieldTypes.Symbol<"None" | "lg" | "sm" | "xlg" | "xsm" | "xxlg" | "xxsm">;
    /**
     * Field type definition for field 'gapY' (Spaziatura verticale)
     * @name Spaziatura verticale
     * @localized false
     * @summary Spaziatura verticale tra gli elementi
     */
    gapY: EntryFieldTypes.Symbol<"None" | "lg" | "sm" | "xlg" | "xsm" | "xxlg" | "xxsm">;
    /**
     * Field type definition for field 'elements' (Elementi)
     * @name Elementi
     * @localized false
     */
    elements: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeComponentRichTextSkeleton | TypePartnerSkeleton | TypeSpeakerSkeleton | TypeTeamMemberSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'componentGrid' (Componente: Griglia)
 * @name TypeComponentGridSkeleton
 * @type {TypeComponentGridSkeleton}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2023-12-22T21:32:33.934Z
 * @version 15
 */
export type TypeComponentGridSkeleton = EntrySkeletonType<TypeComponentGridFields, "componentGrid">;
/**
 * Entry type definition for content type 'componentGrid' (Componente: Griglia)
 * @name TypeComponentGrid
 * @type {TypeComponentGrid}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2023-12-22T21:32:33.934Z
 * @version 15
 */
export type TypeComponentGrid<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeComponentGridSkeleton, Modifiers, Locales>;

export function isTypeComponentGrid<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeComponentGrid<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'componentGrid'
}
