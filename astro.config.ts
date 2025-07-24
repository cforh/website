import { defineConfig } from 'astro/config';
import { C } from './src/site.config';
import nanostoresI18n from 'astro-nanostores-i18n';
import unpluginFavicons from "@openscript/unplugin-favicons/vite";
import de from "./src/translations/de.json";

export default defineConfig({
  i18n: {
    defaultLocale: C.DEFAULT_LOCALE,
    locales: Object.keys(C.LOCALES),
  },
  integrations: [
    nanostoresI18n({
      addMiddleware: true,
      translations: {
        de
      }
    })
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
