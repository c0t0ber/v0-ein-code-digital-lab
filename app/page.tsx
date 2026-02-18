import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Zap, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Header */}
      <header className="relative z-10 border-b border-border bg-background/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <span className="text-xl font-bold text-accent-foreground">x10</span>
            </div>
            <span className="text-xl font-bold">x10Devs</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="#work" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Our Work
            </Link>
            <Link href="#team" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Team
            </Link>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <Zap className="h-4 w-4" />
            Now accepting new projects
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            Elite development team{" "}
            <span className="text-accent">delivering 10x results</span>
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl text-balance">
            We build high-performance web applications with cutting-edge technology. 
            Fast delivery, exceptional quality, and seamless collaboration.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base font-medium">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-border text-base font-medium">
              View Our Work
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent sm:text-4xl">10x</div>
              <div className="mt-2 text-sm text-muted-foreground">Faster delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent sm:text-4xl">100+</div>
              <div className="mt-2 text-sm text-muted-foreground">Projects shipped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent sm:text-4xl">50+</div>
              <div className="mt-2 text-sm text-muted-foreground">Happy clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent sm:text-4xl">99%</div>
              <div className="mt-2 text-sm text-muted-foreground">Client satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 border-t border-border bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              What makes us <span className="text-accent">10x better</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-balance">
              Our team combines speed, expertise, and modern technology to deliver exceptional results
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-card-foreground">Lightning Fast</h3>
              <p className="leading-relaxed text-muted-foreground">
                We move at 10x speed without compromising quality. Ship features in days, not months.
              </p>
            </div>

            <div className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Code2 className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-card-foreground">Modern Stack</h3>
              <p className="leading-relaxed text-muted-foreground">
                Next.js, React, TypeScript, and cutting-edge tools to build scalable applications.
              </p>
            </div>

            <div className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-card-foreground">Production Ready</h3>
              <p className="leading-relaxed text-muted-foreground">
                Security, performance, and reliability built-in from day one. Enterprise-grade quality.
              </p>
            </div>

            <div className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-card-foreground">Expert Team</h3>
              <p className="leading-relaxed text-muted-foreground">
                Senior engineers with years of experience building products used by millions.
              </p>
            </div>

            <div className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-card-foreground">Quality Assured</h3>
              <p className="leading-relaxed text-muted-foreground">
                Rigorous testing, code reviews, and best practices ensure zero-bug deployments.
              </p>
            </div>

            <div className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-card-foreground">Agile Workflow</h3>
              <p className="leading-relaxed text-muted-foreground">
                Continuous delivery, rapid iteration, and transparent communication throughout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-accent/20 bg-accent/5 px-6 py-16 text-center sm:px-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Ready to build something amazing?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-balance">
              Let's discuss your project and show you how we can deliver 10x faster results
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base font-medium">
                Schedule a Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-border text-base font-medium">
                hello@x10devs.com
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <span className="text-sm font-bold text-accent-foreground">x10</span>
              </div>
              <span className="font-bold">x10Devs</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 x10Devs. Elite development team delivering 10x results.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
