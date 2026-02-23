"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

const roles = ["цифровые продукты", "веб-платформы", "MVP и стартапы", "B2B-сервисы", "сложные интеграции"]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const targetText = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < targetText.length) {
            setDisplayText(targetText.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section className="relative px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center lg:min-h-[70vh]">
          {/* Left column - Text */}
          <div className="space-y-8 sm:space-y-10">
            <div className="space-y-3 animate-fade-in-up">
              <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
                x10Devs — команда разработки
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl text-balance">
                Запускаем продукты с AI
                <br />
                <span
                  className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text typing-cursor"
                >
                  быстрее и дешевле, чем вы думали
                </span>
              </h1>
            </div>

            <ul className="max-w-lg list-disc space-y-2 pl-5 text-base leading-relaxed text-foreground/90 sm:text-lg sm:font-medium animate-fade-in-up stagger-2">
              <li>MVP, боты, SaaS, автоматизация контента.</li>
              <li>24 проекта в продакшене.</li>
              <li>Команда, которая строит продукты на AI. В деле с GPT-3.</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-lg border border-primary bg-primary/10 px-7 py-4 sm:py-3.5 font-mono text-sm text-primary transition-all duration-500 hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
              >
                <span className="relative z-10">смотреть проекты</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                {/* Animated background */}
                <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
              </a>
              <a
                href="#connect"
                className="group inline-flex items-center justify-center gap-3 rounded-lg border border-border px-7 py-4 sm:py-3.5 font-mono text-sm text-muted-foreground transition-all duration-300 hover:border-foreground hover:text-foreground hover:bg-secondary/50 active:scale-[0.98]"
              >
                <span>обсудить задачу</span>
                <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right column - ASCII Art / Visual */}
          <div className="relative animate-scale-in stagger-4">
            <div className="relative rounded-xl border border-border bg-card/60 glass p-5 sm:p-8 lg:-mx-3 hover-lift">
              {/* Terminal header dots */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-destructive/60 transition-colors hover:bg-destructive" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60 transition-colors hover:bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-primary/60 transition-colors hover:bg-primary" />
              </div>
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 bg-background/50 rounded-md px-3 py-1 font-mono text-xs text-muted-foreground">
                terminal://x10devs
              </div>

              <pre className="mt-6 overflow-x-auto font-mono text-[10px] leading-relaxed text-primary/80 sm:text-xs md:text-sm">
                <span>{`██╗  ██╗ ██╗ ██████╗ ██████╗ ███████╗██╗   ██╗███████╗
╚██╗██╔╝███║██╔═████╗██╔══██╗██╔════╝██║   ██║██╔════╝
 ╚███╔╝ ╚██║██║██╔██║██║  ██║█████╗  ██║   ██║███████╗
 ██╔██╗  ██║████╔╝██║██║  ██║██╔══╝  ╚██╗ ██╔╝╚════██║
██╔╝ ██╗ ██║╚██████╔╝██████╔╝███████╗ ╚████╔╝ ███████║
╚═╝  ╚═╝ ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝  ╚═══╝  ╚══════╝

> проекты от $1,000
> среднее время до MVP: 2 недели
> консультация по AI и разработке: $100
> стаж в IT: 8+ лет
> статус: принимаем заказы [ok]`}</span>
              </pre>
            </div>

            <div className="absolute -right-2 sm:-right-6 -top-2 sm:-top-6 rounded-lg border border-primary/40 bg-primary/15 glass px-3 sm:px-4 py-1.5 font-mono text-[11px] sm:text-xs text-primary animate-float">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                v1.0.0
              </span>
            </div>
            <div
              className="absolute -bottom-3 sm:-bottom-6 -left-2 sm:-left-6 rounded-lg border border-border bg-card glass px-3 sm:px-4 py-1.5 font-mono text-[11px] sm:text-xs text-muted-foreground animate-float"
              style={{ animationDelay: "1s" }}
            >
              Апр. 2025
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-primary/5 blur-3xl" />
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-6 animate-fade-in stagger-6">
        <div className="hidden lg:flex flex-col items-center gap-2">
          <span className="font-mono text-xs text-muted-foreground">листай вниз</span>
          <div className="h-12 w-px animate-pulse bg-gradient-to-b from-primary/50 to-transparent" />
        </div>

        <div className="w-full max-w-7xl rounded-xl border border-border/60 bg-card/40 p-2 glass">
          <div style={{ width: "100%", height: "420px", overflow: "scroll" }} id="my-cal-inline-15min" />
        </div>
      </div>
      <Script id="cal-inline-15min" strategy="afterInteractive">{`
        (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
        Cal("init", "15min", {origin:"https://app.cal.com"});
        Cal.ns["15min"]("inline", {
          elementOrSelector:"#my-cal-inline-15min",
          config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
          calLink: "new-era-devs/15min",
        });
        Cal.ns["15min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
      `}</Script>
    </section>
  )
}
