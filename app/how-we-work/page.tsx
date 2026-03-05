import type { Metadata } from "next"
import { CursorGlow } from "@/components/cursor-glow"
import { HowWeWorkPageContent } from "@/components/public/how-we-work/how-we-work-page-content"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://eindev.ir"

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Прозрачный процесс работы x10Devs: от 15-минутного микро-созвона и формирования рабочей группы до ТЗ и реализации проекта.",
  openGraph: {
    title: "How We Work — x10Devs",
    description: "Пошаговый roadmap процесса работы: созвон, рабочая группа, предоплата, ТЗ и реализация проекта.",
    url: `${baseUrl}/how-we-work`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "x10Devs — How We Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Work — x10Devs",
    description: "Roadmap процесса работы x10Devs от первого звонка до запуска проекта.",
    images: [`${baseUrl}/og-image.png`],
  },
  alternates: {
    canonical: `${baseUrl}/how-we-work`,
  },
}

export default function HowWeWorkPage() {
  return (
    <main className="relative min-h-screen overflow-hidden scanlines">
      <CursorGlow />
      <div className="relative z-10 pt-16 sm:pt-20">
        <HowWeWorkPageContent />
      </div>
    </main>
  )
}
