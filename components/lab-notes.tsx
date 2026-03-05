"use client"

import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

const notes = [
  {
    id: 1,
    title: "Олег Стефанов — Tech Lead @ Salmon",
    excerpt:
      "Собирает AI-продукты с нуля и консультирует бизнес. Если задачу можно автоматизировать нейросетями, Олег скажет как.",
    date: "8+ лет в разработке",
    category: "ai",
    link: "https://www.linkedin.com/in/oleg-stefanov-a887b1196/",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "Данил Устинов — Team Lead @ SpectrumData",
    excerpt:
      "Архитектура, стек, деплой. На нём техническая часть проектов от первого коммита до прода.",
    date: "8+ лет в разработке",
    category: "tech",
    link: "https://www.linkedin.com/in/danil-ustinov/",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "Кирилл Зубков — Project Manager",
    excerpt:
      "Ваша точка контакта с командой. Следит чтобы проект двигался, вы были в курсе, а сроки не плыли.",
    date: "3+ года в PM",
    category: "management",
    link: "https://www.linkedin.com/in/%D0%BA%D0%B8%D1%80%D0%B8%D0%BB%D0%BB-%D0%B7%D1%83%D0%B1%D0%BA%D0%BE%D0%B2-3875233b5",
    color: "from-primary/20 to-emerald-500/20",
  },
]

export function LabNotes() {
  return (
    <section id="notes" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">Команда</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Команда с реальным опытом</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {notes.map((note, index) => (
            <article
              key={note.id}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-border bg-card/40 glass p-6 sm:p-7 transition-all duration-400 hover:border-primary/40 hover:bg-card/60 active:scale-[0.99] hover-lift animate-fade-in-up",
                note.link && "cursor-pointer",
              )}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
              onClick={() => {
                if (note.link) {
                  window.open(note.link, "_blank", "noopener,noreferrer")
                }
              }}
              onKeyDown={(event) => {
                if (!note.link) {
                  return
                }

                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault()
                  window.open(note.link, "_blank", "noopener,noreferrer")
                }
              }}
              role={note.link ? "link" : undefined}
              tabIndex={note.link ? 0 : undefined}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  note.color,
                )}
              />

              <div className="relative z-10">
                <div className="mb-4 sm:mb-5 flex items-center justify-between gap-3">
                  <span className="rounded-lg border border-border/80 bg-secondary/60 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-foreground">
                    {note.category}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{note.date}</span>
                </div>

                <h3 className="mb-3 text-lg sm:text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-gradient">
                  {note.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">{note.excerpt}</p>

                {note.link ? (
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-primary transition-all duration-300 hover:text-foreground sm:opacity-0 sm:translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0">
                    <span>роль и скиллы</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                ) : (
                  <div className="mt-5 flex items-center gap-2 font-mono text-xs text-primary transition-all duration-300 sm:opacity-0 sm:translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0">
                    <span>роль и скиллы</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                )}
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
