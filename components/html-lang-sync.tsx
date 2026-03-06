"use client"

import { useEffect } from "react"
import { Locale } from "@/lib/i18n"

interface HtmlLangSyncProps {
  locale: Locale
}

export function HtmlLangSync({ locale }: HtmlLangSyncProps) {
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return null
}
