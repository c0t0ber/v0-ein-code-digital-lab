import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowRight, Clock3, FileText, Rocket, Users, Wallet } from "lucide-react"
import { Locale, getLocalizedPath } from "@/lib/i18n"
import { SiteCopy } from "@/lib/site-copy"

const stepIcons = [Clock3, Users, Wallet, FileText, Rocket]

interface HowWeWorkPageContentProps {
  locale: Locale
  copy: SiteCopy["howWeWork"]
}

export function HowWeWorkPageContent({ locale, copy }: HowWeWorkPageContentProps) {
  return (
    <div className="px-4 sm:px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 sm:mb-14 space-y-4 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">{copy.eyebrow}</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
            {copy.title}
          </h1>
          <p className="max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            {copy.description}
          </p>
        </header>

        <div className="mb-8 flex flex-wrap gap-2 sm:gap-3 animate-fade-in-up stagger-2">
          {copy.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-lg border border-border/70 bg-secondary/40 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground"
            >
              {chip}
            </span>
          ))}
        </div>

        <section className="relative ml-3 border-l border-border/50 pl-8 sm:ml-5 sm:pl-10">
          {copy.steps.map((step, index) => {
            const Icon = stepIcons[index]

            return (
            <article key={step.id} className="relative pb-7 sm:pb-8 last:pb-0 animate-fade-in-up" style={{ animationDelay: `${index * 90 + 160}ms` }}>
              <span className="absolute -left-[2.05rem] top-6 flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-background font-mono text-xs text-primary sm:-left-[2.65rem]">
                {step.id}
              </span>

              <div
                className={cn(
                  "group rounded-xl border border-border/60 bg-card/50 glass p-5 sm:p-7 transition-all duration-400 hover-lift hover:border-primary/40 hover:bg-card/70",
                  index === 0 && "border-primary/40 bg-gradient-to-br from-primary/10 via-card/60 to-card/50",
                )}
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-primary">
                    {copy.stageLabel} {step.id}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                    <Clock3 className="h-3.5 w-3.5" />
                    {step.duration}
                  </span>
                </div>

                <div className="mb-3 flex items-start gap-3">
                  <div className="rounded-lg border border-border/70 bg-secondary/40 p-2.5 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-lg sm:text-xl font-semibold tracking-tight">{step.title}</h2>
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{step.goal}</p>
                  </div>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </article>
            )
          })}
        </section>

        <section className="mt-10 sm:mt-14 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card/60 to-card/50 p-6 sm:p-8 animate-fade-in-up stagger-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{copy.ctaTitle}</h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
            {copy.ctaDescription}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`${getLocalizedPath(locale)}#connect`}
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-primary bg-primary/10 px-6 py-3 font-mono text-xs uppercase tracking-wider text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
            >
              {copy.primaryCta}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href={getLocalizedPath(locale)}
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors duration-300 hover:border-primary/40 hover:text-foreground hover:bg-secondary/40 active:scale-[0.98]"
            >
              {copy.secondaryCta}
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
