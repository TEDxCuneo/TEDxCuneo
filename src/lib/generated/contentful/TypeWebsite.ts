import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePageSkeleton } from "./TypePage";

/**
 * Fields type definition for content type 'TypeWebsite'
 * @name TypeWebsiteFields
 * @type {TypeWebsiteFields}
 * @memberof TypeWebsite
 */
export interface TypeWebsiteFields {
    /**
     * Field type definition for field 'internalName' (Internal name)
     * @name Internal name
     * @localized false
     */
    internalName?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'active' (Attivo)
     * @name Attivo
     * @localized false
     */
    active: EntryFieldTypes.Symbol<"Si">;
    /**
     * Field type definition for field 'linkedin' (URL Linkedin)
     * @name URL Linkedin
     * @localized false
     */
    linkedin?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'instagram' (URL Instagram)
     * @name URL Instagram
     * @localized false
     */
    instagram?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'facebook' (URL Facebook)
     * @name URL Facebook
     * @localized false
     */
    facebook?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'email' (Email)
     * @name Email
     * @localized false
     */
    email?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'menuPages' (Pagine nel menù)
     * @name Pagine nel menù
     * @localized false
     * @summary Le pagine da mostrare nell'header del sito.
     */
    menuPages: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePageSkeleton>>;
    /**
     * Field type definition for field 'hamburgerPages' (Pagine nel menù hamburger)
     * @name Pagine nel menù hamburger
     * @localized false
     */
    hamburgerPages?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePageSkeleton>>;
    /**
     * Field type definition for field 'footerPages' (Pagine nel footer)
     * @name Pagine nel footer
     * @localized false
     */
    footerPages?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePageSkeleton>>;
    /**
     * Field type definition for field 'copyrightText' (Testo copyright)
     * @name Testo copyright
     * @localized false
     */
    copyrightText?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'associationText' (Testo associazione)
     * @name Testo associazione
     * @localized false
     */
    associationText?: EntryFieldTypes.Text;
}

/**
 * Entry skeleton type definition for content type 'website' (Website)
 * @name TypeWebsiteSkeleton
 * @type {TypeWebsiteSkeleton}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2023-11-27T20:55:26.267Z
 * @version 21
 */
export type TypeWebsiteSkeleton = EntrySkeletonType<TypeWebsiteFields, "website">;
/**
 * Entry type definition for content type 'website' (Website)
 * @name TypeWebsite
 * @type {TypeWebsite}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2023-11-27T20:55:26.267Z
 * @version 21
 */
export type TypeWebsite<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeWebsiteSkeleton, Modifiers, Locales>;

export function isTypeWebsite<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeWebsite<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'website'
}
