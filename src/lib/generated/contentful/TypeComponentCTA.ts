import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePageSkeleton } from "./TypePage";

/**
 * Fields type definition for content type 'TypeComponentCTA'
 * @name TypeComponentCTAFields
 * @type {TypeComponentCTAFields}
 * @memberof TypeComponentCTA
 */
export interface TypeComponentCTAFields {
    /**
     * Field type definition for field 'internalTitle' (Titolo interno)
     * @name Titolo interno
     * @localized false
     */
    internalTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'layout' (Layout)
     * @name Layout
     * @localized false
     */
    layout: EntryFieldTypes.Symbol<"Biglietti" | "Standard">;
    /**
     * Field type definition for field 'image' (Immagine)
     * @name Immagine
     * @localized false
     */
    image?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'kicker' (Kicker)
     * @name Kicker
     * @localized false
     */
    kicker?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'title' (Titolo)
     * @name Titolo
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'description' (Descrizione)
     * @name Descrizione
     * @localized false
     */
    description?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'actionLabel' (Label azione)
     * @name Label azione
     * @localized false
     */
    actionLabel: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'page' (Pagina)
     * @name Pagina
     * @localized false
     * @summary La pagina verso cui reindirizzare quando si clicca sulla CTA. Se non selezionata, si può specificare un URL esterno.
     */
    page?: EntryFieldTypes.EntryLink<TypePageSkeleton>;
    /**
     * Field type definition for field 'externalURL' (URL esterno)
     * @name URL esterno
     * @localized false
     */
    externalURL?: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'componentCTA' (Componente: Call To Action)
 * @name TypeComponentCTASkeleton
 * @type {TypeComponentCTASkeleton}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2024-02-04T10:57:38.601Z
 * @version 5
 */
export type TypeComponentCTASkeleton = EntrySkeletonType<TypeComponentCTAFields, "componentCTA">;
/**
 * Entry type definition for content type 'componentCTA' (Componente: Call To Action)
 * @name TypeComponentCTA
 * @type {TypeComponentCTA}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2024-02-04T10:57:38.601Z
 * @version 5
 */
export type TypeComponentCTA<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeComponentCTASkeleton, Modifiers, Locales>;

export function isTypeComponentCTA<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeComponentCTA<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'componentCTA'
}
