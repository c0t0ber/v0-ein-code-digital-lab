import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowRight, Clock3, FileText, Rocket, Users, Wallet } from "lucide-react"

const processSteps = [
  {
    id: "01",
    title: "Разбор задачи",
    goal: "Быстрый старт",
    duration: "15 минут",
    description:
      "Созваниваемся, вы рассказываете что нужно. Без брифов и презентаций, просто нормальным языком. Нам хватит 15 минут чтобы понять, можем ли мы помочь. Если задача не наша, так и скажем.",
    icon: Clock3,
  },
  {
    id: "02",
    title: "Команда под проект",
    goal: "Установочный созвон",
    duration: "60 минут",
    description:
      "На проект выходят те, кто будет двигать его вперёд. Не менеджеры и не стажёры. Собираем людей под ваш стек, знакомим с задачей на установочном созвоне и договариваемся как будем работать.",
    icon: Users,
  },
  {
    id: "03",
    title: "Предоплата и запуск",
    goal: "Фиксируем условия",
    duration: "1 день",
    description:
      "Договорились о формате, зафиксировали числа, стартуем. Предоплата нужна чтобы мы забронировали команду под вас, а не раскидали её на другие проекты.",
    icon: Wallet,
  },
  {
    id: "04",
    title: "ТЗ",
    goal: "Чтобы потом не переделывать",
    duration: "2-5 дней",
    description:
      "Раскладываем проект на части. Архитектура, интеграции, что считается «готово» по каждому этапу. Без этого документа через месяц обязательно выяснится, что все имели в виду разное. Согласовываем вместе, правки включены.",
    icon: FileText,
  },
  {
    id: "05",
    title: "Разработка",
    goal: "Еженедельные демо",
    duration: "Спринты",
    description:
      "Каждую неделю показываем рабочий проект, не слайды. Можно потыкать, можно дать фидбек, можно поменять приоритеты. Если что-то пошло не туда, вы узнаете на демо, а не когда мы придём сдавать проект.",
    icon: Rocket,
  },
]

export function HowWeWorkPageContent() {
  return (
    <div className="px-4 sm:px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 sm:mb-14 space-y-4 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">How We Work</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
            Пять шагов до&nbsp;рабочего продукта
          </h1>
          <p className="max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Мы не продаём часы разработки. Берём задачу и доводим до рабочего продукта.
            Вот как устроен процесс от первого звонка до деплоя.
          </p>
        </header>

        <div className="mb-8 flex flex-wrap gap-2 sm:gap-3 animate-fade-in-up stagger-2">
          {["фиксированные сроки", "еженедельные демо", "команда под стек"].map((chip) => (
            <span
              key={chip}
              className="rounded-lg border border-border/70 bg-secondary/40 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground"
            >
              {chip}
            </span>
          ))}
        </div>

        <section className="relative ml-3 border-l border-border/50 pl-8 sm:ml-5 sm:pl-10">
          {processSteps.map((step, index) => (
            <article key={step.id} className="relative pb-7 sm:pb-8 last:pb-0 animate-fade-in-up" style={{ animationDelay: `${index * 90 + 160}ms` }}>
              <span className="absolute -left-[2.05rem] top-6 flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-background font-mono text-xs text-primary sm:-left-[2.65rem]">
                {step.id}
              </span>

              <div
                className={cn(
                  "group rounded-xl border border-border/60 bg-card/50 glass p-5 sm:p-7 transition-all duration-400 hover-lift hover:border-primary/40 hover:bg-card/70",
                  index === 0 && "border-primary/40 bg-gradient-to-br from-primary/10 via-card/60 to-card/50",
                )}
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-primary">
                    этап {step.id}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                    <Clock3 className="h-3.5 w-3.5" />
                    {step.duration}
                  </span>
                </div>

                <div className="mb-3 flex items-start gap-3">
                  <div className="rounded-lg border border-border/70 bg-secondary/40 p-2.5 text-primary">
                    <step.icon className="h-4 w-4" />
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-lg sm:text-xl font-semibold tracking-tight">{step.title}</h2>
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{step.goal}</p>
                  </div>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-10 sm:mt-14 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card/60 to-card/50 p-6 sm:p-8 animate-fade-in-up stagger-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Есть задача? Давайте разберём</h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
            Запишитесь на встречу на 15 минут. Расскажете что нужно, мы скажем можем ли помочь и сколько это стоит.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#connect"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-primary bg-primary/10 px-6 py-3 font-mono text-xs uppercase tracking-wider text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
            >
              назначить встречу на 15 минут
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors duration-300 hover:border-primary/40 hover:text-foreground hover:bg-secondary/40 active:scale-[0.98]"
            >
              на главную
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
