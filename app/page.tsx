import type { Metadata } from "next"
import { LocaleRedirect } from "@/components/locale-redirect"
import { getAlternateLanguageUrls } from "@/lib/i18n"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://x10.stefanov.tech"

export const metadata: Metadata = {
  title: "x10Devs",
  description: "Choose the Russian or English version of x10Devs. Browser language is detected automatically.",
  alternates: {
    canonical: baseUrl,
    languages: getAlternateLanguageUrls(baseUrl),
  },
}

export default function Home() {
  return (
    <LocaleRedirect
      heading="Choose site language / Выберите язык сайта"
      description="We detect the browser language and open the right version automatically. Если нужно, язык можно выбрать руками."
      noscriptLabel="JavaScript is disabled, so open the needed version manually."
    />
  )
}
