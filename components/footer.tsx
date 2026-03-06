import { Heart } from "lucide-react"
import { Locale, getLocalizedPath } from "@/lib/i18n"
import { SiteCopy } from "@/lib/site-copy"
import { CalEmbed } from "@/components/cal-embed"

interface FooterProps {
  locale: Locale
  copy: SiteCopy["footer"]
}

export function Footer({ locale, copy }: FooterProps) {
  return (
    <footer id="connect" className="border-t border-border/30 px-4 sm:px-6 py-16 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-2">
          {/* Left column */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">{copy.eyebrow}</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
                {`${copy.titleLead} `}
                <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text ">{copy.titleAccent}</span>
              </h2>
            </div>
            <p className="max-w-md text-base sm:text-lg text-muted-foreground leading-relaxed">
              {copy.description}
              <br />
              {copy.directContact}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a
                href="https://t.me/oleg_code"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl border border-primary bg-primary/10 px-8 py-4 sm:py-4 font-mono text-sm text-primary transition-all duration-500 hover:text-primary-foreground active:scale-[0.98] w-full sm:w-auto"
              >
                <span className="relative z-10">{copy.primaryCta}</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
              </a>
              <a
                href={getLocalizedPath(locale, "/how-we-work")}
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl border border-primary bg-primary/10 px-8 py-4 sm:py-4 font-mono text-sm text-primary transition-all duration-500 hover:text-primary-foreground active:scale-[0.98] w-full sm:w-auto"
              >
                <span className="relative z-10">{copy.secondaryCta}</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
              </a>
            </div>
          </div>

          <div className="space-y-6 stagger-2">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-muted-foreground">
              {copy.bookingTitle}
            </p>
            <div className="cal-embed-shell relative z-[110] overflow-hidden rounded-xl border border-border/60 bg-card/70 p-0 sm:p-2">
              <CalEmbed />
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-between gap-6 border-t border-border/30 pt-8 sm:pt-10 sm:flex-row animate-fade-in stagger-4">
          <div className="flex items-center gap-2.5 font-mono text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span>{copy.madeWithStart}</span>
            <Heart className="h-3.5 w-3.5 text-destructive animate-pulse" />
            <span>{copy.madeWithEnd}</span>
          </div>

          <p className="font-mono text-xs text-muted-foreground text-center sm:text-right">
            © {new Date().getFullYear()} x10Devs
          </p>
        </div>
      </div>
    </footer>
  )
}
