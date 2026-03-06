import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CursorGlow } from "@/components/cursor-glow"
import { LandingNav } from "@/components/landing-nav"
import { HowWeWorkPageContent } from "@/components/public/how-we-work/how-we-work-page-content"
import { getAlternateLanguageUrls, getLocalizedUrl, isLocale, Locale } from "@/lib/i18n"
import { getSiteCopy } from "@/lib/site-copy"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://x10.stefanov.tech"

interface LocalizedHowWeWorkPageProps {
  params: Promise<{ locale: string }>
}

function getMetadata(locale: Locale): Metadata {
  const copy = getSiteCopy(locale)
  const canonical = getLocalizedUrl(baseUrl, locale, "/how-we-work")

  return {
    title: copy.metadata.howWeWork.title,
    description: copy.metadata.howWeWork.description,
    alternates: {
      canonical,
      languages: getAlternateLanguageUrls(baseUrl, "/how-we-work"),
    },
    openGraph: {
      type: "website",
      locale: copy.metadata.localeCode,
      url: canonical,
      title: `${copy.metadata.howWeWork.title} — x10Devs`,
      description: copy.metadata.howWeWork.description,
      siteName: copy.metadata.siteTitle,
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: copy.metadata.howWeWork.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${copy.metadata.howWeWork.title} — x10Devs`,
      description: copy.metadata.howWeWork.description,
      images: [`${baseUrl}/og-image.png`],
    },
  }
}

export async function generateMetadata({ params }: LocalizedHowWeWorkPageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return getMetadata(locale)
}

export default async function LocalizedHowWeWorkPage({ params }: LocalizedHowWeWorkPageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const copy = getSiteCopy(locale)

  return (
    <main className="relative min-h-screen overflow-hidden scanlines">
      <CursorGlow />
      <div className="relative z-10 pt-16 sm:pt-20">
        <LandingNav locale={locale} copy={copy.nav} />
        <HowWeWorkPageContent locale={locale} copy={copy.howWeWork} />
      </div>
    </main>
  )
}
