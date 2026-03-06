import Link from 'next/link'
import { getLocalizedPath } from "@/lib/i18n"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold mb-4 font-mono relative">
            <span className="glitch inline-block">404</span>
          </h1>
          <div className="h-1 w-32 bg-primary mx-auto mb-8" />
          <h2 className="text-3xl font-bold mb-4">Page not found</h2>
          <p className="text-muted-foreground text-lg mb-2">
            This route does not exist anymore or the link points the wrong way.
          </p>
          <p className="text-muted-foreground">
            Start from the localized homepage.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href={getLocalizedPath("ru")}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Открыть русский
          </Link>
          <Link
            href={getLocalizedPath("en")}
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
          >
            Open English
          </Link>
        </div>

        <div className="text-sm text-muted-foreground font-mono">
          <span className="text-primary">&gt;</span> Error code: 404_NOT_FOUND
        </div>
      </div>
    </div>
  )
}
