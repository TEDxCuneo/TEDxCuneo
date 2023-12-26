import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeComponentGridSkeleton } from "./TypeComponentGrid";
import type { TypeComponentRichTextSkeleton } from "./TypeComponentRichText";

/**
 * Fields type definition for content type 'TypeComponentAccordion'
 * @name TypeComponentAccordionFields
 * @type {TypeComponentAccordionFields}
 * @memberof TypeComponentAccordion
 */
export interface TypeComponentAccordionFields {
    /**
     * Field type definition for field 'internalTitle' (Titolo interno)
     * @name Titolo interno
     * @localized false
     */
    internalTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'title' (Titolo)
     * @name Titolo
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'content' (Contenuto)
     * @name Contenuto
     * @localized false
     */
    content: EntryFieldTypes.EntryLink<TypeComponentGridSkeleton | TypeComponentRichTextSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'componentAccordion' (Componente: Accordion)
 * @name TypeComponentAccordionSkeleton
 * @type {TypeComponentAccordionSkeleton}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2023-12-26T20:37:47.836Z
 * @version 3
 */
export type TypeComponentAccordionSkeleton = EntrySkeletonType<TypeComponentAccordionFields, "componentAccordion">;
/**
 * Entry type definition for content type 'componentAccordion' (Componente: Accordion)
 * @name TypeComponentAccordion
 * @type {TypeComponentAccordion}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2023-12-26T20:37:47.836Z
 * @version 3
 */
export type TypeComponentAccordion<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeComponentAccordionSkeleton, Modifiers, Locales>;

export function isTypeComponentAccordion<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeComponentAccordion<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'componentAccordion'
}
