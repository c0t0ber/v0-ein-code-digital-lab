const navItems = [
  { label: "Главная", href: "#home" },
  { label: "Кейсы", href: "#projects" },
  { label: "Команда", href: "#notes" },
  { label: "Технологии", href: "#workbench" },
  { label: "Контакты", href: "#connect" },
]

export function LandingNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#home" className="font-mono text-sm tracking-tight text-foreground">
          x10<span className="text-primary">Devs</span>
        </a>

        <nav className="flex items-center gap-1 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
