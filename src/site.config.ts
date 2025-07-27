export const C = {
  // Key is the locale slug, value is the locale code
  LOCALES: { en: "en-US", de: "de-CH" },
  // Default locale referencing one of the keys in LOCALES
  DEFAULT_LOCALE: "en" as const,
  // Segment translations
  SEGMENT_TRANSLATIONS: {
    de: {
      products: "produkte",
    },
    en: {
      products: "products",
    },
  },
  // Various settings
  SETTINGS: {
    CONTACT: {
      EMAIL: "hi@code-for-humans.com",
      PHONE: "+41 44 520 02 22",
    },
    BROWSER: {
      THEME_COLOR: "#663399",
    },
  },
};

// Configuration helpers
export type Locale = keyof typeof C.LOCALES;
export const localeSlugs = Object.keys(C.LOCALES) as Locale[];
