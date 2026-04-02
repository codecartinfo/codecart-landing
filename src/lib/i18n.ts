export const locales = ["pl", "uk"] as const;
export const defaultLocale = "pl" as const;

export type Locale = (typeof locales)[number];

const dictionaries = {
  pl: () => import("@/dictionaries/pl.json").then((m) => m.default),
  uk: () => import("@/dictionaries/uk.json").then((m) => m.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
