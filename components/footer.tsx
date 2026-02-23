import Script from "next/script"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer id="connect" className="border-t border-border/30 px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-2">
          {/* Left column */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">Контакты</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
                {"Обсудим ваш "}
                <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text ">проект</span>
              </h2>
            </div>
            <p className="max-w-md text-base sm:text-lg text-muted-foreground leading-relaxed">
              Напишите — ответим в течение дня. Без брифов на 40 страниц, без "мы вам перезвоним". Сразу по делу.
            </p>

            <div className="pt-2">
              <a
                href="https://t.me/oleg_code"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl border border-primary bg-primary/10 px-8 py-4 sm:py-4 font-mono text-sm text-primary transition-all duration-500 hover:text-primary-foreground active:scale-[0.98] w-full sm:w-auto"
              >
                <span className="relative z-10">написать нам</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
              </a>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up stagger-2">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-muted-foreground">
              Запись на созвон
            </p>
            <div className="rounded-xl border border-border/60 bg-card/40 p-2 glass">
              <div style={{ width: "100%", height: "420px", overflow: "scroll" }} id="my-cal-inline-15min-footer" />
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-between gap-6 border-t border-border/30 pt-8 sm:pt-10 sm:flex-row animate-fade-in stagger-4">
          <div className="flex items-center gap-2.5 font-mono text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span>Сделано с</span>
            <Heart className="h-3.5 w-3.5 text-destructive animate-pulse" />
            <span>и вниманием к продукту</span>
          </div>

          <p className="font-mono text-xs text-muted-foreground text-center sm:text-right">
            © {new Date().getFullYear()} x10Devs — команда заказной разработки
          </p>
        </div>
      </div>
      <Script id="cal-inline-15min-footer" strategy="afterInteractive">{`
        (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
        Cal("init", "15minFooter", {origin:"https://app.cal.com"});
        Cal.ns["15minFooter"]("inline", {
          elementOrSelector:"#my-cal-inline-15min-footer",
          config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
          calLink: "new-era-devs/15min",
        });
        Cal.ns["15minFooter"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
      `}</Script>
    </footer>
  )
}
