import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeComponentSpecialSection'
 * @name TypeComponentSpecialSectionFields
 * @type {TypeComponentSpecialSectionFields}
 * @memberof TypeComponentSpecialSection
 */
export interface TypeComponentSpecialSectionFields {
    /**
     * Field type definition for field 'section' (Sezione)
     * @name Sezione
     * @localized false
     */
    section: EntryFieldTypes.Symbol<"Newsletter form" | "Partner form">;
}

/**
 * Entry skeleton type definition for content type 'componentSpecialSection' (Componente: Sezione speciale)
 * @name TypeComponentSpecialSectionSkeleton
 * @type {TypeComponentSpecialSectionSkeleton}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2024-01-05T21:35:56.664Z
 * @version 1
 */
export type TypeComponentSpecialSectionSkeleton = EntrySkeletonType<TypeComponentSpecialSectionFields, "componentSpecialSection">;
/**
 * Entry type definition for content type 'componentSpecialSection' (Componente: Sezione speciale)
 * @name TypeComponentSpecialSection
 * @type {TypeComponentSpecialSection}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2024-01-05T21:35:56.664Z
 * @version 1
 */
export type TypeComponentSpecialSection<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeComponentSpecialSectionSkeleton, Modifiers, Locales>;

export function isTypeComponentSpecialSection<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeComponentSpecialSection<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'componentSpecialSection'
}
