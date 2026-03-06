import type { Metadata } from "next"
import { LocaleRedirect } from "@/components/locale-redirect"
import { getAlternateLanguageUrls } from "@/lib/i18n"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://x10.stefanov.tech"

export const metadata: Metadata = {
  title: "How We Work",
  description: "Choose the Russian or English version of the x10Devs process page.",
  alternates: {
    canonical: `${baseUrl}/how-we-work`,
    languages: getAlternateLanguageUrls(baseUrl, "/how-we-work"),
  },
}

export default function HowWeWorkPage() {
  return (
    <LocaleRedirect
      pathname="/how-we-work"
      heading="How we work / Как мы работаем"
      description="We will open the matching process page automatically. Если хотите, можно выбрать язык сразу."
      noscriptLabel="JavaScript is disabled, so choose the language manually."
    />
  )
}
