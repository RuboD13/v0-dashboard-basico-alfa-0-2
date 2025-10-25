// [v0] i18n utilities and string exports

export { anunciosStrings } from "./anuncios-strings"
export type { AnunciosStringKey } from "./anuncios-strings"

/**
 * Get a translated string by key
 * In the future, this can be extended to support multiple languages
 * @param key - The string key
 * @returns The translated string
 */
export function t(key: string): string {
  // For now, just return the Spanish strings
  // In the future, this can check the current locale and return the appropriate translation
  return key
}
