"use client"

import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { getLocalizedPath, getPreferredLocale, isLocale, localePreferenceKey } from "@/lib/i18n"

interface LocaleRedirectProps {
  pathname?: string
  heading?: string
  description?: string
  noscriptLabel?: string
}

function readStoredLocale() {
  if (typeof window === "undefined") {
    return null
  }

  const storedLocale = window.localStorage.getItem(localePreferenceKey)
  if (storedLocale && isLocale(storedLocale)) {
    return storedLocale
  }

  return null
}

function persistLocale(locale: "ru" | "en") {
  if (typeof window === "undefined") {
    return
  }

  window.localStorage.setItem(localePreferenceKey, locale)
}

export function LocaleRedirect({
  pathname = "/",
  heading = "Choose site language / Выберите язык сайта",
  description = "We will open the matching version automatically. Можно открыть нужную версию и вручную.",
  noscriptLabel = "JavaScript is off, so pick the language manually.",
}: LocaleRedirectProps) {
  const router = useRouter()

  useEffect(() => {
    const storedLocale = readStoredLocale()
    const detectedLocale = storedLocale || getPreferredLocale(navigator.languages?.join(",") || navigator.language)

    persistLocale(detectedLocale)
    router.replace(getLocalizedPath(detectedLocale, pathname))
  }, [pathname, router])

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">x10Devs</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h1>
        <p className="mt-4 text-muted-foreground">
          {description}
        </p>
        <noscript>
          <p className="mt-4 text-sm text-muted-foreground">{noscriptLabel}</p>
        </noscript>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href={getLocalizedPath("ru", pathname)}
            onClick={() => persistLocale("ru")}
            className="rounded-lg bg-primary px-5 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Открыть русский
          </Link>
          <Link
            href={getLocalizedPath("en", pathname)}
            onClick={() => persistLocale("en")}
            className="rounded-lg bg-secondary px-5 py-3 font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
          >
            Open English
          </Link>
        </div>
      </div>
    </main>
  )
}
