import type React from "react"
import { notFound } from "next/navigation"
import { HtmlLangSync } from "@/components/html-lang-sync"
import { isLocale, locales } from "@/lib/i18n"

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return (
    <>
      <HtmlLangSync locale={locale} />
      {children}
    </>
  )
}
