import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// Configure fonts with proper options
const geist = Geist({
  subsets: ["latin", "cyrillic"],
  variable: '--font-geist',
  display: 'swap',
})
const geistMono = Geist_Mono({
  subsets: ["latin", "cyrillic"],
  variable: '--font-geist-mono',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "cyrillic"],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://eindev.ir'),
  title: {
    default: "x10Devs — Команда разработки",
    template: "%s | x10Devs",
  },
  description:
    "x10Devs — команда разработки. AI-продукты, MVP, SaaS-платформы, автоматизация. Олег Стефанов, Данил Устинов, Кирилл Зубков. 10 проектов в проде.",
  keywords: [
    "x10Devs", "x10 Devs", "команда разработки", "заказная разработка",
    "Олег Стефанов", "Oleg Stefanov", "Данил Устинов", "Danil Ustinov", "Кирилл Зубков", "Kirill Zubkov",
    "AI разработка", "MVP разработка", "SaaS", "Telegram боты", "автоматизация",
    "Next.js", "React", "TypeScript", "Python",
  ],
  authors: [{ name: "x10Devs" }, { name: "Олег Стефанов" }, { name: "Данил Устинов" }, { name: "Кирилл Зубков" }],
  creator: "x10Devs",
  publisher: "x10Devs",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    title: "x10Devs — Команда разработки",
    description: "x10Devs — команда разработки. AI-продукты, MVP, SaaS, автоматизация. Олег Стефанов, Данил Устинов, Кирилл Зубков.",
    siteName: "x10Devs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "x10Devs — Команда разработки",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "x10Devs — Команда разработки",
    description: "x10Devs — команда разработки. AI-продукты, MVP, SaaS, автоматизация. 10 проектов в проде.",
    creator: "@x10devs",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} storageKey="theme-mode">
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
