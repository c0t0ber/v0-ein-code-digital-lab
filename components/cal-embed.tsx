"use client"

import { useEffect, useRef } from "react"

export function CalEmbed() {
  const containerRef = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const w = window as any

    // Load Cal.com embed script if not already loaded
    if (!w.Cal) {
      w.Cal = function (...args: any[]) {
        w.Cal.q = w.Cal.q || []
        w.Cal.q.push(args)
      }
      w.Cal.ns = {}
      w.Cal.loaded = false

      const script = document.createElement("script")
      script.src = "https://app.cal.com/embed/embed.js"
      script.async = true
      document.head.appendChild(script)
    }

    // Initialize the inline embed
    w.Cal("init", "15minFooter", { origin: "https://app.cal.com" })
    w.Cal.ns["15minFooter"]("inline", {
      elementOrSelector: containerRef.current,
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "new-era-devs/15min",
    })
    w.Cal.ns["15minFooter"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    })
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden"
    />
  )
}
