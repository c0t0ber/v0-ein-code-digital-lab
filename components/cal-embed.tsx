"use client"

import { useEffect, useRef } from "react"

export function CalEmbed() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    // Give the element a unique ID for this mount
    const id = "cal-inline-" + Math.random().toString(36).slice(2, 8)
    el.id = id

    const w = window as any
    const ns = "ns_" + id

    // Cal.com IIFE — idempotent: creates queue proxy, loads embed.js only once
    ;(function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) { a.q.push(ar) }
      const d = C.document
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal
          const ar = arguments
          if (!cal.loaded) {
            cal.ns = {}
            cal.q = cal.q || []
            d.head.appendChild(d.createElement("script")).src = A
            cal.loaded = true
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments) } as any
            const namespace = ar[1]
            api.q = api.q || []
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api
              p(cal.ns[namespace], ar)
              p(cal, ["initNamespace", namespace])
            } else {
              p(cal, ar)
            }
            return
          }
          p(cal, ar)
        }
    })(w, "https://app.cal.com/embed/embed.js", "init")

    w.Cal("init", ns, { origin: "https://app.cal.com" })
    w.Cal.ns[ns]("inline", {
      elementOrSelector: "#" + id,
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "new-era-devs/15min",
    })
    w.Cal.ns[ns]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    })

    return () => {
      if (el) el.innerHTML = ""
    }
  }, [])

  return <div ref={containerRef} className="w-full overflow-hidden" />
}
