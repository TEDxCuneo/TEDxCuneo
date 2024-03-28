import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeComponentRichText'
 * @name TypeComponentRichTextFields
 * @type {TypeComponentRichTextFields}
 * @memberof TypeComponentRichText
 */
export interface TypeComponentRichTextFields {
    /**
     * Field type definition for field 'internalTitle' (Titolo interno)
     * @name Titolo interno
     * @localized false
     */
    internalTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'noMargin' (Rimuovi margini paragrafi)
     * @name Rimuovi margini paragrafi
     * @localized false
     * @summary Quando selezionato, non ci sarò spaziatura tra paragrafi. Usare per blocchi di testo speciali, in cui si inseriscono appositi spazi andando a capo.
     */
    noMargin: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'content' (Contenuto)
     * @name Contenuto
     * @localized false
     */
    content?: EntryFieldTypes.RichText;
}

/**
 * Entry skeleton type definition for content type 'componentRichText' (Componente: Testo libero)
 * @name TypeComponentRichTextSkeleton
 * @type {TypeComponentRichTextSkeleton}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2023-11-27T21:28:54.496Z
 * @version 15
 */
export type TypeComponentRichTextSkeleton = EntrySkeletonType<TypeComponentRichTextFields, "componentRichText">;
/**
 * Entry type definition for content type 'componentRichText' (Componente: Testo libero)
 * @name TypeComponentRichText
 * @type {TypeComponentRichText}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2023-11-27T21:28:54.496Z
 * @version 15
 */
export type TypeComponentRichText<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeComponentRichTextSkeleton, Modifiers, Locales>;

export function isTypeComponentRichText<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeComponentRichText<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'componentRichText'
}
