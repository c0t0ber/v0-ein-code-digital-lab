"use client"

import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { getLocalizedPath, getPreferredLocale, isLocale, localeCookieName } from "@/lib/i18n"

interface LocaleRedirectProps {
  pathname?: string
}

function readStoredLocale() {
  if (typeof window === "undefined") {
    return null
  }

  const storedLocale = window.localStorage.getItem(localeCookieName)
  if (storedLocale && isLocale(storedLocale)) {
    return storedLocale
  }

  const cookieMatch = document.cookie.match(new RegExp(`(?:^|; )${localeCookieName}=([^;]+)`))
  const cookieLocale = cookieMatch?.[1]
  return cookieLocale && isLocale(cookieLocale) ? cookieLocale : null
}

function persistLocale(locale: "ru" | "en") {
  if (typeof window === "undefined") {
    return
  }

  window.localStorage.setItem(localeCookieName, locale)
  document.cookie = `${localeCookieName}=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`
}

export function LocaleRedirect({ pathname = "/" }: LocaleRedirectProps) {
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
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Выбираем язык сайта</h1>
        <p className="mt-4 text-muted-foreground">
          Сейчас отправим вас на нужную версию. Если хотите, можно открыть её руками.
        </p>
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
