"use client"

import { cn } from "@/lib/utils"
import { ExternalLink, Sparkles } from "lucide-react"

const projects = [
  {
    id: 0,
    title: "AI-бот холодных продаж в Telegram",
    description:
      "Бот сам пишет клиентам в Telegram, ведёт диалог и доводит до продажи. Антидетект, ротация аккаунтов, работает без присмотра.",
    outcomes: ["> 100+ клиентов в день", "> без участия человека", "> 4 недели на разработку"],
    tags: ["Python", "Next.js", "Postgres", "Redis", "Telegram API", "Anti-detect"],
    status: "zapushen",
    year: "2025",
    stars: 120,
    forks: 18,
    url: "https://github.com/ehsanghaffar/einui",
    featured: true,
    highlight: true,
  },
  {
    id: 1,
    title: "Контент-завод SEO-статей для онлайн-университета из топ-5",
    description:
      "Генератор SEO-статей по психологии для онлайн-университета. От подбора тем до публикации в WordPress, включая фактчекинг. Всё работает автоматом.",
    outcomes: ["> 200+ статей на выходе", "> ~800 часов сэкономлено", "> сделали за 2 недели"],
    tags: ["Python", "n8n", "WordPress API", "OpenAI", "RAG Pipeline"],
    status: "zapushen",
    year: "2025",
    stars: 65,
    forks: 10,
    url: "https://github.com/ehsanghaffar/einbiogpt",
    featured: false,
  },
  {
    id: 2,
    title: "AI-нутрициолог в Telegram",
    description:
      "Отправляешь фото еды — бот считает калории, собирает рацион и ведёт дневник. Внутри подписочная модель.",
    outcomes: ["> запустили за 2 недели"],
    tags: ["Python", "Postgres", "Redis", "Telegram"],
    status: "zapushen",
    year: "2025",
    stars: 84,
    forks: 13,
    url: "https://github.com/ehsanghaffar/javascript-playground",
    featured: false,
  },
  {
    id: 3,
    title: "Fanfy Studio — генерация AI-фанфиков",
    description:
      "Пользователь выбирает персонажей, сеттинг, задаёт сюжет — AI пишет готовый фанфик. Веб-приложение со стримингом генерации.",
    outcomes: ["> 4 недели от нуля до прода"],
    tags: ["Next.js", "TypeScript", "FastAPI", "Postgres", "OpenAI", "Streaming"],
    status: "zapushen",
    year: "2025",
    stars: 40,
    forks: 7,
    url: "https://github.com/ehsanghaffar/next16-docker-tw4-starter",
    homepage: "https://fanfy.studio/en",
    featured: true,
  },
  {
    id: 4,
    title: "MechaPost — универсальный контент-завод",
    description:
      "Платформа для создания видео с AI: аватары, озвучка, генерация изображений. Весь продакшен контента собран в одном месте.",
    outcomes: ["> разработка: 4 недели"],
    tags: ["Next.js", "Python", "Runway", "ElevenLabs", "Replicate", "GPU Inference"],
    status: "zapushen",
    year: "2025",
    stars: 52,
    forks: 9,
    url: "https://github.com/ehsanghaffar/awesome-clubhouse",
    homepage: "https://mechapost.app/",
    featured: false,
  },
]

export function ProjectsGrid() {
  return (
    <section id="projects" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14">
          <div className="space-y-3 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">Кейсы</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Запущенные проекты</h2>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const projectLink =
              project.homepage &&
              (project.title === "Fanfy Studio — генерация AI-фанфиков" ||
                project.title === "MechaPost — универсальный контент-завод")
                ? project.homepage
                : undefined

            return (
              <article
                key={project.id}
                className={cn(
                  "group relative overflow-hidden rounded-xl border bg-card/40 p-6 sm:p-7 glass transition-all duration-400 active:scale-[0.99] hover-lift hover:border-primary/40 hover:bg-card/70 animate-fade-in-up",
                  "highlight" in project && project.highlight
                    ? "sm:col-span-2 lg:col-span-2 border-primary/30 bg-gradient-to-br from-primary/8 via-card/50 to-primary/8"
                    : "border-border/60",
                  project.featured && !("highlight" in project && project.highlight) && "sm:col-span-2 lg:col-span-1",
                  projectLink && "cursor-pointer",
                )}
                style={{ animationDelay: `${(index % 6) * 100 + 200}ms` }}
                onClick={() => {
                  if (projectLink) {
                    window.open(projectLink, "_blank", "noopener,noreferrer")
                  }
                }}
                onKeyDown={(event) => {
                  if (!projectLink) {
                    return
                  }

                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    window.open(projectLink, "_blank", "noopener,noreferrer")
                  }
                }}
                role={projectLink ? "link" : undefined}
                tabIndex={projectLink ? 0 : undefined}
              >
              {"highlight" in project && project.highlight && (
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-1.5 animate-pulse-glow">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-medium">
                    Ключевой кейс
                  </span>
                </div>
              )}

              {/* Status indicator */}
              <div
                className={cn(
                  "absolute right-5 top-5 flex items-center gap-2.5",
                  "highlight" in project && project.highlight && "top-5",
                )}
              >
                <span
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-shadow duration-300",
                    "bg-primary shadow-sm shadow-primary/50",
                  )}
                />
                <span className="font-mono text-xs text-muted-foreground">запущен</span>
              </div>

              <div
                className={cn(
                  "mb-5 font-mono text-xs text-muted-foreground",
                  "highlight" in project && project.highlight && "mt-10",
                )}
              >
                {project.year}
              </div>

              <h3
                className={cn(
                  "mb-3 font-bold tracking-tight transition-all duration-300 group-hover:text-gradient",
                  "highlight" in project && project.highlight ? "text-xl sm:text-2xl" : "text-lg sm:text-xl",
                )}
              >
                {project.title}
              </h3>

              <p
                className={cn(
                  "mb-5 text-sm leading-relaxed text-muted-foreground",
                )}
              >
                {project.description}
              </p>

              {"outcomes" in project && project.outcomes && (
                <div className="mb-5 space-y-1 font-mono text-xs text-muted-foreground">
                  {project.outcomes.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              )}

              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {projectLink && (
                <div className="mb-2">
                  <a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 font-mono text-xs text-primary transition-all duration-300 hover:text-foreground"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-4 w-4 transition-transform group-hover/link:scale-110 group-hover/link:rotate-12" />
                    <span className="underline-animate">проект</span>
                  </a>
                </div>
              )}

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
