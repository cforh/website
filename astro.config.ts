import { defineConfig } from 'astro/config';
import { C } from './src/site.config';
import nanostoresI18n from 'astro-nanostores-i18n';
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
  ]
});
