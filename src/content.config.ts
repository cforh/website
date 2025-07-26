import { extendI18nLoaderSchema, i18nLoader } from "astro-loader-i18n";
import { defineCollection, z } from "astro:content";

const pagesCollection = defineCollection({
  loader: i18nLoader({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
  schema: extendI18nLoaderSchema(
    z.object({
      path: z.string(),
      title: z.string(),
      template: z.enum(["article", "article-with-aside"]).optional().default("article"),
    }),
  ),
});

export const collections = {
  pages: pagesCollection,
};
