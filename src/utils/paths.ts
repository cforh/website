import { createI18nCollection, i18nPropsAndParams, resolvePath as originalResolvePath } from "astro-loader-i18n";
import { C, localeSlugs } from "../site.config";

export const defaultPropsAndParamsOptions = {
  defaultLocale: C.DEFAULT_LOCALE,
  segmentTranslations: C.SEGMENT_TRANSLATIONS,
}

export const resolvePath = (...path: Array<string | number | undefined>) => {
  return originalResolvePath(import.meta.env.BASE_URL ,...path);
}

export const generateGetStaticIndexPaths = (routePattern: string) => {
  return async () => {
    const collection = createI18nCollection({ locales: localeSlugs, routePattern, basePath: import.meta.env.BASE_URL });
    return i18nPropsAndParams(collection, {
      ...defaultPropsAndParamsOptions,
      routePattern
    })
  }
}
