import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// Configure fonts with proper options
const geist = Geist({
  subsets: ["latin"],
  variable: '--font-geist',
  display: 'swap',
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
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
    "x10Devs — команда заказной разработки. Проектируем, разрабатываем и запускаем цифровые продукты для бизнеса.",
  keywords: ["Заказная разработка", "Web Development", "Next.js", "React", "TypeScript", "AI", "MVP", "Команда разработки"],
  authors: [{ name: "x10Devs" }],
  creator: "x10Devs",
  publisher: "x10Devs",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    title: "x10Devs — Команда разработки",
    description: "Запускаем цифровые продукты: веб-платформы, внутренние системы и интеграции для бизнеса.",
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
    description: "Запускаем цифровые продукты: от идеи и дизайна до релиза и поддержки.",
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
      </body>
    </html>
  )
}
