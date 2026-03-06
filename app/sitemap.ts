import { MetadataRoute } from 'next'
import { getLocalizedUrl, locales } from "@/lib/i18n"

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://x10.stefanov.tech'

  return locales.flatMap((locale) => [
    {
      url: getLocalizedUrl(baseUrl, locale),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: getLocalizedUrl(baseUrl, locale, '/how-we-work'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ])
}
