import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://x10.stefanov.tech'),
  title: {
    default: "x10Devs — AI Products, MVPs, SaaS",
    template: "%s | x10Devs",
  },
  description:
    "x10Devs builds AI products, MVPs, SaaS platforms, and automation workflows. Product development team for launch-ready software.",
  keywords: [
    "x10Devs",
    "x10 Devs",
    "AI development",
    "MVP development",
    "SaaS development",
    "automation",
    "product development team",
    "custom software development",
    "Telegram bots",
    "Next.js",
    "TypeScript",
    "Python",
  ],
  authors: [{ name: "x10Devs" }, { name: "Oleg Stefanov" }, { name: "Danil Ustinov" }, { name: "Kirill Zubkov" }],
  creator: "x10Devs",
  publisher: "x10Devs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "x10Devs — AI Products, MVPs, SaaS",
    description: "x10Devs builds AI products, MVPs, SaaS platforms, and automation workflows.",
    siteName: "x10Devs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "x10Devs — AI Products, MVPs, SaaS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "x10Devs — AI Products, MVPs, SaaS",
    description: "x10Devs builds AI products, MVPs, SaaS platforms, and automation workflows.",
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
  alternates: {
    canonical: "/",
  },
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
