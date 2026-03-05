import { HeroSection } from "@/components/hero-section"
import { ProjectsGrid } from "@/components/projects-grid"
import { LabNotes } from "@/components/lab-notes"
import { Footer } from "@/components/footer"
import { CursorGlow } from "@/components/cursor-glow"
import { LandingNav } from "@/components/landing-nav"
import { generateWebsiteStructuredData, generateOrganizationStructuredData } from "@/lib/structured-data"

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://x10.stefanov.tech'
  const websiteStructuredData = generateWebsiteStructuredData(baseUrl)
  const orgStructuredData = generateOrganizationStructuredData(baseUrl)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgStructuredData) }}
      />
      <main id="home" className="relative min-h-screen overflow-hidden scanlines">
        <CursorGlow />
        <div className="relative z-10">
          <LandingNav />
          <HeroSection />
          <ProjectsGrid />
          <LabNotes />
          <Footer />
        </div>
      </main>
    </>
  )
}
