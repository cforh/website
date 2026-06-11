import { defineConfig } from "astro/config";
import { C, localeSlugs } from "./src/site.config";
import nanostoresI18n from "astro-nanostores-i18n";
import unpluginFavicons from "@openscript/unplugin-favicons/vite";
import de from "./src/translations/de.json";
import mdx from "@astrojs/mdx";
import Icons from "unplugin-icons/vite";
import { unified } from "@astrojs/markdown-remark";
import { rehypeWrapTables } from "./src/plugins/rehype-wrap-tables";
import { remarkUnwrapJsxParagraphs } from "./src/plugins/remark-unwrap-jsx-paragraphs";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  i18n: {
    defaultLocale: C.DEFAULT_LOCALE,
    locales: localeSlugs,
  },
  integrations: [
    nanostoresI18n({
      addMiddleware: true,
      translations: {
        de,
      },
    }),
    mdx(),
    sitemap({ i18n: { defaultLocale: C.DEFAULT_LOCALE, locales: C.LOCALES } }),
  ],
  markdown: {
    processor: unified({
      rehypePlugins: [rehypeWrapTables],
      remarkPlugins: [remarkUnwrapJsxParagraphs],
    }),
  },
  vite: {
    plugins: [
      unpluginFavicons({
        logo: "assets/icon.png",
        inject: true,
        favicons: {
          theme_color: C.SETTINGS.BROWSER.THEME_COLOR,
          icons: {
            android: true,
            appleIcon: true,
            favicons: true,
            windows: true,
            yandex: true,
            appleStartup: false,
          },
        },
      }),

      Icons({
        compiler: "astro",
      }),
    ],
  },
});
