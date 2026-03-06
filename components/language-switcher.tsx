"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Locale, getLocalizedPath, localePreferenceKey, stripLocaleFromPathname } from "@/lib/i18n"

interface LanguageSwitcherProps {
  locale: Locale
  label: string
  className?: string
}

const languageLabels: Record<Locale, string> = {
  ru: "RU",
  en: "EN",
}

export function LanguageSwitcher({ locale, label, className }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const normalizedPath = stripLocaleFromPathname(pathname || "/")

  const rememberLocale = (nextLocale: Locale) => {
    if (typeof window === "undefined") {
      return
    }

    window.localStorage.setItem(localePreferenceKey, nextLocale)
  }

  return (
    <div
      aria-label={label}
      className={cn(
        "inline-flex items-center rounded-full border border-border/70 bg-card/70 p-1 text-[11px] font-mono uppercase tracking-wider",
        className,
      )}
    >
      {(["ru", "en"] as const).map((nextLocale) => (
        <Link
          key={nextLocale}
          href={getLocalizedPath(nextLocale, normalizedPath)}
          onClick={() => rememberLocale(nextLocale)}
          className={cn(
            "rounded-full px-2.5 py-1.5 transition-colors",
            locale === nextLocale
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {languageLabels[nextLocale]}
        </Link>
      ))}
    </div>
  )
}
