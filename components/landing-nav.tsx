import Link from "next/link"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Locale, getLocalizedPath } from "@/lib/i18n"
import { SiteCopy } from "@/lib/site-copy"

interface LandingNavProps {
  locale: Locale
  copy: SiteCopy["nav"]
}

export function LandingNav({ locale, copy }: LandingNavProps) {
  const homePath = getLocalizedPath(locale)
  const navItems = [
    { label: copy.home, href: `${homePath}#home` },
    { label: copy.projects, href: `${homePath}#projects` },
    { label: copy.howWeWork, href: getLocalizedPath(locale, "/how-we-work") },
    { label: copy.team, href: `${homePath}#notes` },
    { label: copy.contacts, href: `${homePath}#connect` },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={homePath} className="font-mono text-sm tracking-tight text-foreground">
          x10<span className="text-primary">Devs</span>
        </Link>

        <nav className="flex items-center gap-1 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <LanguageSwitcher locale={locale} label={copy.switchLabel} className="shrink-0" />
      </div>
    </header>
  )
}
