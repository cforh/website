import { defineConfig } from "astro/config";
import { C, localeSlugs } from "./src/site.config";
import nanostoresI18n from "astro-nanostores-i18n";
import unpluginFavicons from "@openscript/unplugin-favicons/vite";
import de from "./src/translations/de.json";
import mdx from "@astrojs/mdx";

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
    ],
  },
});
