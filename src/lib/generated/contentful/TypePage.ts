import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeComponentAccordionSkeleton } from "./TypeComponentAccordion";
import type { TypeComponentCTASkeleton } from "./TypeComponentCTA";
import type { TypeComponentCarouselSkeleton } from "./TypeComponentCarousel";
import type { TypeComponentGridSkeleton } from "./TypeComponentGrid";
import type { TypeComponentRichTextSkeleton } from "./TypeComponentRichText";
import type { TypeComponentSpecialSectionSkeleton } from "./TypeComponentSpecialSection";
import type { TypeComponentVideoSkeleton } from "./TypeComponentVideo";

/**
 * Fields type definition for content type 'TypePage'
 * @name TypePageFields
 * @type {TypePageFields}
 * @memberof TypePage
 */
export interface TypePageFields {
    /**
     * Field type definition for field 'internalTitle' (Titolo interno)
     * @name Titolo interno
     * @localized false
     */
    internalTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'slug' (Slug)
     * @name Slug
     * @localized false
     * @summary Il path della pagina (e.g. eventi/extraordinario-oltre-l-immaginario)
     */
    slug: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'layout' (Layout)
     * @name Layout
     * @localized false
     * @summary Il layout con cui renderizzare la pagina.
     */
    layout: EntryFieldTypes.Symbol<"Biglietti" | "Entra nel team" | "Evento 2021" | "Evento 2022" | "Evento 2023" | "Evento 2024" | "Generico" | "Homepage Metamorfosi" | "Homepage" | "Partner" | "Partnership" | "Showcase">;
    /**
     * Field type definition for field 'previousPage' (Pagina precedente)
     * @name Pagina precedente
     * @localized false
     * @summary La pagina precedente, se presente.
     */
    previousPage?: EntryFieldTypes.EntryLink<TypePageSkeleton>;
    /**
     * Field type definition for field 'previousPageLabel' (Testo link pagina precedente)
     * @name Testo link pagina precedente
     * @localized false
     * @summary Il testo da mostrare sul link per tornare alla pagina precedente (e.g. torna all'edizione).
     */
    previousPageLabel?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'pageName' (Nome pagina)
     * @name Nome pagina
     * @localized false
     * @summary Il nome breve della pagina da mostrare prima del titolo (e.g. team).
     */
    pageName?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'title' (Titolo)
     * @name Titolo
     * @localized false
     * @summary Il titolo della pagina da mostrare con un h1 (e.g. I volti dietro TEDxCuneo)
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'intro' (Intro)
     * @name Intro
     * @localized false
     * @summary Testo introduttivo della pagina.
     */
    intro?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'ogImage' (Immagine SEO)
     * @name Immagine SEO
     * @localized false
     * @summary L'immagine da mostrare quando si condivide la pagina.
     */
    ogImage: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'ogTitle' (Titolo SEO)
     * @name Titolo SEO
     * @localized false
     * @summary Il titolo della pagina da mostrare quando viene condivisa.
     */
    ogTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'ogDescription' (Descrizione SEO)
     * @name Descrizione SEO
     * @localized false
     * @summary La descrizione della pagina da mostrare quando viene condivisa.
     */
    ogDescription?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'keywords' (Keywords)
     * @name Keywords
     * @localized false
     */
    keywords?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    /**
     * Field type definition for field 'noIndex' (No-index)
     * @name No-index
     * @localized false
     * @summary Nascondi la pagina dai motori di ricerca (noindex)
     */
    noIndex: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'noFollow' (No-Follow)
     * @name No-Follow
     * @localized false
     * @summary Escludi link dai motori di ricerca (nofollow)
     */
    noFollow: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'browserTitle' (Testo nel tab del browser)
     * @name Testo nel tab del browser
     * @localized false
     * @summary Testo da visualizzare nella barra del browser (e.g. Extraordinario, oltre l'immaginario - TEDxCuneo 2023)
     */
    browserTitle?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'navbarLabel' (Label per menù)
     * @name Label per menù
     * @localized false
     * @summary Il testo visualizzato nel link verso questa pagina nel menù di navigazione. e.g. team.
     */
    navbarLabel?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'content' (Contenuto)
     * @name Contenuto
     * @localized false
     * @summary Il contenuto libero della pagina
     */
    content?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeComponentAccordionSkeleton | TypeComponentCTASkeleton | TypeComponentCarouselSkeleton | TypeComponentGridSkeleton | TypeComponentRichTextSkeleton | TypeComponentSpecialSectionSkeleton | TypeComponentVideoSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'page' (Pagina)
 * @name TypePageSkeleton
 * @type {TypePageSkeleton}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2023-11-27T21:05:54.456Z
 * @version 85
 */
export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
/**
 * Entry type definition for content type 'page' (Pagina)
 * @name TypePage
 * @type {TypePage}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2023-11-27T21:05:54.456Z
 * @version 85
 */
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;

export function isTypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePage<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'page'
}
