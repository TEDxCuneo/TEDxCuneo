import chalk from 'chalk';
import contentful from 'contentful';

import { formatTimestamp } from './utils';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const space = import.meta.env.CONTENTFUL_SPACE_ID!;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const accessToken = import.meta.env.CONTENTFUL_ACCESS_TOKEN!;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const previewToken = import.meta.env.CONTENTFUL_PREVIEW_TOKEN!;
const dev = import.meta.env.DEV;

const client = contentful.createClient({
	space,
	accessToken: dev ? previewToken : accessToken,
	host: dev ? 'preview.contentful.com' : 'cdn.contentful.com',
	requestLogger: (config) => {
		if ('method' in config && 'params' in config) {
			// eslint-disable-next-line no-console
			console.log(
				chalk.gray(formatTimestamp(new Date())),
				chalk.yellow('[Contentful]'),
				chalk.green(config.method?.toUpperCase()),
				chalk.green('-> Content-type:'),
				chalk.bold.blue(config.params.content_type),
				chalk.green('include:'),
				chalk.bold.blue(config.params.include),
			);
		}
	},
});

export default client.withoutUnresolvableLinks;
