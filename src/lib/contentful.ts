import contentful from "contentful";
import chalk from "chalk";
import { formatTimestamp } from "./utils";
import type { AxiosRequestConfig } from "axios";

const space = import.meta.env.CONTENTFUL_SPACE_ID!;
const accessToken = import.meta.env.CONTENTFUL_ACCESS_TOKEN!;
const previewToken = import.meta.env.CONTENTFUL_PREVIEW_TOKEN!;
const dev = import.meta.env.DEV;

const isAxiosRequestConfig = (
  config: any
): config is AxiosRequestConfig<any> => {
  return config.method !== undefined;
};

const client = contentful.createClient({
  space,
  accessToken: dev ? previewToken : accessToken,
  host: dev ? "preview.contentful.com" : "cdn.contentful.com",
  requestLogger: (config) => {
    if (!isAxiosRequestConfig(config)) return;
    console.log(
      chalk.gray(formatTimestamp(new Date())),
      chalk.yellow("[Contentful]"),
      chalk.green(config.method?.toUpperCase()),
      chalk.green("-> Content-type:"),
      chalk.bold.blue(config.params.content_type),
      chalk.green("include:"),
      chalk.bold.blue(config.params.include)
    );
  },
});

export default client.withoutUnresolvableLinks;
