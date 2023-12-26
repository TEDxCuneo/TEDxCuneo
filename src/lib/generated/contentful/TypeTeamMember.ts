import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeTeamMember'
 * @name TypeTeamMemberFields
 * @type {TypeTeamMemberFields}
 * @memberof TypeTeamMember
 */
export interface TypeTeamMemberFields {
    /**
     * Field type definition for field 'firstName' (Nome)
     * @name Nome
     * @localized false
     */
    firstName: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'lastName' (Cognome)
     * @name Cognome
     * @localized false
     */
    lastName: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'image' (Immagine)
     * @name Immagine
     * @localized false
     */
    image?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'role' (Ruolo)
     * @name Ruolo
     * @localized false
     */
    role?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'linkLabel' (Label link)
     * @name Label link
     * @localized false
     */
    linkLabel?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'link' (Link)
     * @name Link
     * @localized false
     */
    link?: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'teamMember' (Entità: Membro del team)
 * @name TypeTeamMemberSkeleton
 * @type {TypeTeamMemberSkeleton}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2023-12-23T12:40:55.206Z
 * @version 13
 */
export type TypeTeamMemberSkeleton = EntrySkeletonType<TypeTeamMemberFields, "teamMember">;
/**
 * Entry type definition for content type 'teamMember' (Entità: Membro del team)
 * @name TypeTeamMember
 * @type {TypeTeamMember}
 * @author 6krpat7VFUspp3909jRjPB
 * @since 2023-12-23T12:40:55.206Z
 * @version 13
 */
export type TypeTeamMember<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeTeamMemberSkeleton, Modifiers, Locales>;

export function isTypeTeamMember<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeTeamMember<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'teamMember'
}
