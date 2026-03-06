export const locales = ["ru", "en"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "ru"
export const localeCookieName = "preferred-locale"

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function getPreferredLocale(acceptLanguage?: string | null): Locale {
  if (!acceptLanguage) {
    return defaultLocale
  }

  const languageTags = acceptLanguage
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean) as string[]

  for (const tag of languageTags) {
    if (tag.startsWith("ru")) {
      return "ru"
    }

    if (tag.startsWith("en")) {
      return "en"
    }
  }

  return defaultLocale
}

export function resolveLocaleFromRequest(options: {
  cookieLocale?: string | null
  acceptLanguage?: string | null
}): Locale {
  if (options.cookieLocale && isLocale(options.cookieLocale)) {
    return options.cookieLocale
  }

  return getPreferredLocale(options.acceptLanguage)
}

export function stripLocaleFromPathname(pathname: string): string {
  const normalizedPath = pathname || "/"
  const segments = normalizedPath.split("/")
  const maybeLocale = segments[1]

  if (!isLocale(maybeLocale)) {
    return normalizedPath
  }

  const nextPath = `/${segments.slice(2).join("/")}`.replace(/\/+$/, "")
  return nextPath || "/"
}

export function getLocalizedPath(locale: Locale, pathname = "/"): string {
  if (pathname === "/") {
    return `/${locale}`
  }

  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`
  return `/${locale}${normalizedPath}`.replace(/\/+$/, "")
}

export function getLocalizedUrl(baseUrl: string, locale: Locale, pathname = "/"): string {
  return new URL(getLocalizedPath(locale, pathname), baseUrl).toString()
}

export function getAlternateLanguageUrls(baseUrl: string, pathname = "/") {
  return {
    ru: getLocalizedUrl(baseUrl, "ru", pathname),
    en: getLocalizedUrl(baseUrl, "en", pathname),
    "x-default": new URL(pathname === "/" ? "/" : pathname, baseUrl).toString(),
  }
}
