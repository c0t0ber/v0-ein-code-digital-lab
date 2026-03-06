import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CursorGlow } from "@/components/cursor-glow"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { LabNotes } from "@/components/lab-notes"
import { LandingNav } from "@/components/landing-nav"
import { ProjectsGrid } from "@/components/projects-grid"
import { getAlternateLanguageUrls, getLocalizedUrl, isLocale, Locale } from "@/lib/i18n"
import { getSiteCopy } from "@/lib/site-copy"
import { generateOrganizationStructuredData, generateWebsiteStructuredData } from "@/lib/structured-data"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://x10.stefanov.tech"

interface LocaleHomePageProps {
  params: Promise<{ locale: string }>
}

function getMetadata(locale: Locale): Metadata {
  const copy = getSiteCopy(locale)
  const homeUrl = getLocalizedUrl(baseUrl, locale)

  return {
    title: copy.metadata.home.title,
    description: copy.metadata.home.description,
    keywords: copy.metadata.home.keywords,
    authors: [{ name: "x10Devs" }, { name: "Oleg Stefanov" }, { name: "Danil Ustinov" }, { name: "Kirill Zubkov" }],
    creator: "x10Devs",
    publisher: "x10Devs",
    alternates: {
      canonical: homeUrl,
      languages: getAlternateLanguageUrls(baseUrl),
    },
    openGraph: {
      type: "website",
      locale: copy.metadata.localeCode,
      url: homeUrl,
      title: copy.metadata.home.title,
      description: copy.metadata.home.description,
      siteName: copy.metadata.siteTitle,
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: copy.metadata.home.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metadata.home.title,
      description: copy.metadata.home.description,
      creator: "@x10devs",
      images: [`${baseUrl}/og-image.png`],
    },
  }
}

export async function generateMetadata({ params }: LocaleHomePageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return getMetadata(locale)
}

export default async function LocaleHomePage({ params }: LocaleHomePageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const copy = getSiteCopy(locale)
  const homeUrl = getLocalizedUrl(baseUrl, locale)
  const websiteStructuredData = generateWebsiteStructuredData(homeUrl, locale, copy.metadata.home.description)
  const orgStructuredData = generateOrganizationStructuredData(baseUrl, copy.metadata.home.description)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgStructuredData) }}
      />
      <main id="home" className="relative min-h-screen overflow-hidden scanlines">
        <CursorGlow />
        <div className="relative z-10">
          <LandingNav locale={locale} copy={copy.nav} />
          <HeroSection copy={copy.hero} />
          <ProjectsGrid copy={copy.projects} />
          <LabNotes copy={copy.team} />
          <Footer locale={locale} copy={copy.footer} />
        </div>
      </main>
    </>
  )
}
