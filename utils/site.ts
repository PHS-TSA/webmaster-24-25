/**
 * The name of the website.
 */
export const siteName = "Off The Griddle" as const;

/**
 * The slogan of the website.
 */
export const slogan = "From Farm to Fork" as const;

/**
 * A basic description of the website's content.
 */
export const description =
  `${siteName} is the best vegan restaurant in the greater St. Louis area` as const;

/**
 * The keywords for the website.
 */
export const keywords = ["food", "vegan", "sustainable", "tsa"] as const;

export type Title<T extends string> = `${T} | ${typeof siteName}`;

/**
 * Create a title for a page.
 */
export function makeTitle<const T extends string>(pageTitle: T): Title<T> {
  return `${pageTitle} | ${siteName}` as const;
}

export const faviconIcoUrl = "/favicon.ico" as const;
export const appleTouchIconPngUrl = "/apple-touch-icon.png" as const;
export const logoSvgUrl = "/logo.svg" as const;
export const logoAlt =
  `${siteName}’s logo: a scrumptious stack of pancakes topped with an ecological leaf` as const;
