import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypePartner'
 * @name TypePartnerFields
 * @type {TypePartnerFields}
 * @memberof TypePartner
 */
export interface TypePartnerFields {
    /**
     * Field type definition for field 'name' (Nome)
     * @name Nome
     * @localized false
     */
    name: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'logo' (Logo)
     * @name Logo
     * @localized false
     */
    logo: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'url' (Link partner)
     * @name Link partner
     * @localized false
     * @summary Il sito web o pagina social del partner verso cui reindirizzare quandi si cliccal sul logo.
     */
    url?: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'partner' (Entità: Partner)
 * @name TypePartnerSkeleton
 * @type {TypePartnerSkeleton}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2023-12-26T12:11:41.108Z
 * @version 1
 */
export type TypePartnerSkeleton = EntrySkeletonType<TypePartnerFields, "partner">;
/**
 * Entry type definition for content type 'partner' (Entità: Partner)
 * @name TypePartner
 * @type {TypePartner}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2023-12-26T12:11:41.108Z
 * @version 1
 */
export type TypePartner<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePartnerSkeleton, Modifiers, Locales>;

export function isTypePartner<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePartner<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'partner'
}
