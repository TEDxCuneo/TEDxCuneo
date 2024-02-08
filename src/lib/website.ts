import contentful from './contentful'
import type { TypeWebsiteSkeleton } from './generated/contentful'

// Get website settings
const websiteSettings = (
	await contentful.getEntries<TypeWebsiteSkeleton>({
		content_type: 'website',
		'fields.active': 'Si', // workaround to make Website a singleton
		include: 1,
	})
).items[0]

export default websiteSettings
