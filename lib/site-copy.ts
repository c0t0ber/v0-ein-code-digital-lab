import { Locale } from "@/lib/i18n"

export const siteCopy = {
  ru: {
    metadata: {
      siteTitle: "x10Devs",
      localeCode: "ru_RU",
      home: {
        title: "x10Devs — Команда разработки",
        description:
          "x10Devs — команда разработки. AI-продукты, MVP, SaaS-платформы, автоматизация. Олег Стефанов, Данил Устинов, Кирилл Зубков.",
        keywords: [
          "x10Devs",
          "команда разработки",
          "заказная разработка",
          "AI разработка",
          "MVP разработка",
          "SaaS",
          "Telegram боты",
          "автоматизация",
        ],
        ogAlt: "x10Devs — Команда разработки",
      },
      howWeWork: {
        title: "Как мы работаем",
        description:
          "Пошаговый процесс работы x10Devs: короткий созвон, команда под задачу, ТЗ, еженедельные демо и запуск продукта.",
        ogAlt: "x10Devs — Как мы работаем",
      },
    },
    nav: {
      home: "Главная",
      projects: "Кейсы",
      howWeWork: "Как работаем",
      team: "Команда",
      contacts: "Контакты",
      switchLabel: "Язык сайта",
    },
    hero: {
      roles: ["цифровые продукты", "веб-платформы", "MVP и стартапы", "B2B-сервисы", "сложные интеграции"],
      eyebrow: "x10Devs — команда разработки",
      title: "Запускаем продукты с AI",
      highlight: "быстрее и дешевле, чем вы думаете",
      bullets: [
        "MVP, боты, SaaS-платформы, автоматизация контента. Если в задаче есть AI, мы такое уже строили.",
        "10 проектов в проде.",
        "Работаем с нейросетями с GPT-3, ещё до того как это стало мейнстримом.",
      ],
      primaryCta: "смотреть проекты",
      secondaryCta: "обсудить задачу",
      terminalLines: [
        "> проекты от $1,000",
        "> среднее время до MVP: 2 недели",
        "> консультация по AI и разработке: $100",
        "> стаж в IT: 8+ лет",
        "> статус: принимаем заказы [ok]",
      ],
      growthNote: "Растём вместе с вами с апреля 2025",
      scrollHint: "листай вниз",
    },
    projects: {
      eyebrow: "Кейсы",
      title: "Запущенные проекты",
      featuredLabel: "Ключевой кейс",
      statusLabel: "запущен",
      projectLinkLabel: "проект",
      items: [
        {
          id: 0,
          title: "AI-бот холодных продаж в Telegram",
          description:
            "Бот сам пишет клиентам в Telegram, ведёт диалог и доводит до продажи. Антидетект, ротация аккаунтов, работает без присмотра.",
          outcomes: ["> 100+ клиентов в день", "> без участия человека", "> 4 недели на разработку"],
          tags: ["Python", "Next.js", "Postgres", "Redis", "Telegram API", "Anti-detect"],
          year: "2025",
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
          year: "2025",
          featured: false,
        },
        {
          id: 2,
          title: "AI-нутрициолог в Telegram",
          description:
            "Отправляешь фото еды, бот считает калории, собирает рацион и ведёт дневник. Внутри подписочная модель.",
          outcomes: ["> запустили за 2 недели"],
          tags: ["Python", "Postgres", "Redis", "Telegram"],
          year: "2025",
          featured: false,
        },
        {
          id: 3,
          title: "Fanfy Studio — генерация AI-фанфиков",
          description:
            "Пользователь выбирает персонажей, сеттинг, задаёт сюжет, а AI пишет готовый фанфик. Веб-приложение со стримингом генерации.",
          outcomes: ["> 4 недели от нуля до прода"],
          tags: ["Next.js", "TypeScript", "FastAPI", "Postgres", "OpenAI", "Streaming"],
          year: "2025",
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
          year: "2025",
          homepage: "https://mechapost.app/",
          featured: false,
        },
      ],
    },
    team: {
      eyebrow: "Команда",
      title: "Команда с реальным опытом",
      skillsLabel: "роль и скиллы",
      members: [
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
            "Ваша точка контакта с командой. Следит, чтобы проект двигался, вы были в курсе, а сроки не плыли.",
          date: "3+ года в PM",
          category: "management",
          link: "https://www.linkedin.com/in/%D0%BA%D0%B8%D1%80%D0%B8%D0%BB%D0%BB-%D0%B7%D1%83%D0%B1%D0%BA%D0%BE%D0%B2-3875233b5",
          color: "from-primary/20 to-emerald-500/20",
        },
      ],
    },
    footer: {
      eyebrow: "Контакты",
      titleLead: "Обсудим ваш",
      titleAccent: "проект",
      description:
        "Напишите в телеграм или сразу забронируйте 15-минутный слот. Расскажите, что нужно, обсудим и найдём нормальный формат работы.",
      directContact: "Если хотите обратиться к Олегу напрямую, просто пишите в телеграм.",
      primaryCta: "написать нам",
      secondaryCta: "как мы работаем",
      bookingTitle: "Запись на созвон",
      madeWithStart: "Сделано с",
      madeWithEnd: "и вниманием к продукту",
    },
    howWeWork: {
      eyebrow: "Как мы работаем",
      title: "Пять шагов до рабочего продукта",
      description:
        "Мы не продаём часы разработки. Берём задачу и доводим до рабочего продукта. Вот как устроен процесс от первого звонка до деплоя.",
      chips: ["фиксированные сроки", "еженедельные демо", "команда под стек"],
      stageLabel: "этап",
      steps: [
        {
          id: "01",
          title: "Разбор задачи",
          goal: "Быстрый старт",
          duration: "15 минут",
          description:
            "Созваниваемся, вы рассказываете что нужно. Без брифов и презентаций, просто нормальным языком. Нам хватает 15 минут, чтобы понять, можем ли мы помочь. Если задача не наша, так и скажем.",
        },
        {
          id: "02",
          title: "Команда под проект",
          goal: "Установочный созвон",
          duration: "60 минут",
          description:
            "На проект выходят те, кто будет двигать его вперёд. Не менеджеры и не стажёры. Собираем людей под ваш стек, знакомим с задачей на установочном созвоне и договариваемся, как работаем дальше.",
        },
        {
          id: "03",
          title: "Предоплата и запуск",
          goal: "Фиксируем условия",
          duration: "1 день",
          description:
            "Договорились о формате, зафиксировали числа, стартуем. Предоплата нужна, чтобы мы забронировали команду под вас, а не раскидали её на другие проекты.",
        },
        {
          id: "04",
          title: "ТЗ",
          goal: "Чтобы потом не переделывать",
          duration: "2-5 дней",
          description:
            "Раскладываем проект на части. Архитектура, интеграции, что считается готовым по каждому этапу. Без этого документа через месяц почти всегда выясняется, что все имели в виду разное. Согласовываем вместе, правки включены.",
        },
        {
          id: "05",
          title: "Разработка",
          goal: "Еженедельные демо",
          duration: "Спринты",
          description:
            "Каждую неделю показываем рабочий проект, не слайды. Можно потыкать, дать фидбек, поменять приоритеты. Если что-то пошло не туда, вы узнаете об этом на демо, а не в день сдачи.",
        },
      ],
      ctaTitle: "Есть задача? Давайте разберём",
      ctaDescription:
        "Запишитесь на встречу на 15 минут. Расскажете, что нужно, а мы скажем, можем ли помочь и сколько это будет стоить.",
      primaryCta: "назначить встречу на 15 минут",
      secondaryCta: "на главную",
    },
    notFound: {
      title: "Страница не найдена",
      description: "Похоже, такой страницы больше нет или ссылка ведёт не туда.",
      subtext: "Вернём вас на нормальный маршрут.",
      primaryCta: "На главную",
      secondaryCta: "Как мы работаем",
      errorLabel: "Код ошибки: 404_NOT_FOUND",
    },
  },
  en: {
    metadata: {
      siteTitle: "x10Devs",
      localeCode: "en_US",
      home: {
        title: "x10Devs — Product Development Team",
        description:
          "x10Devs builds AI products, MVPs, SaaS platforms, and automations. Oleg Stefanov, Danil Ustinov, and Kirill Zubkov.",
        keywords: [
          "x10Devs",
          "product development team",
          "custom software development",
          "AI development",
          "MVP development",
          "SaaS",
          "Telegram bots",
          "automation",
        ],
        ogAlt: "x10Devs — Product Development Team",
      },
      howWeWork: {
        title: "How We Work",
        description:
          "How x10Devs runs projects: quick discovery, a team matched to the stack, specs, weekly demos, and launch.",
        ogAlt: "x10Devs — How We Work",
      },
    },
    nav: {
      home: "Home",
      projects: "Projects",
      howWeWork: "How We Work",
      team: "Team",
      contacts: "Contact",
      switchLabel: "Site language",
    },
    hero: {
      roles: ["digital products", "web platforms", "MVPs and startups", "B2B services", "complex integrations"],
      eyebrow: "x10Devs — product development team",
      title: "We launch AI products",
      highlight: "faster and cheaper than you'd expect",
      bullets: [
        "MVPs, bots, SaaS platforms, content automation. If AI is part of the task, we've probably built something like it already.",
        "10 production projects shipped.",
        "We've been working with neural nets since the GPT-3 days, before it went mainstream.",
      ],
      primaryCta: "see projects",
      secondaryCta: "discuss your task",
      terminalLines: [
        "> projects from $1,000",
        "> average MVP timeline: 2 weeks",
        "> AI + product consultation: $100",
        "> engineering experience: 8+ years",
        "> status: taking new projects [ok]",
      ],
      growthNote: "Building with clients since April 2025",
      scrollHint: "scroll down",
    },
    projects: {
      eyebrow: "Projects",
      title: "What we've shipped",
      featuredLabel: "Featured case",
      statusLabel: "shipped",
      projectLinkLabel: "live project",
      items: [
        {
          id: 0,
          title: "Telegram AI bot for outbound sales",
          description:
            "The bot reaches out to prospects in Telegram, handles the conversation, and moves them toward a sale. Anti-detect setup, account rotation, runs autonomously.",
          outcomes: ["> 100+ leads per day", "> no human in the loop", "> 4 weeks to build"],
          tags: ["Python", "Next.js", "Postgres", "Redis", "Telegram API", "Anti-detect"],
          year: "2025",
          featured: true,
          highlight: true,
        },
        {
          id: 1,
          title: "SEO article factory for a top-5 online university",
          description:
            "An automated pipeline for psychology SEO content. It covers topic selection, drafting, fact checking, and publishing straight to WordPress.",
          outcomes: ["> 200+ articles delivered", "> about 800 hours saved", "> built in 2 weeks"],
          tags: ["Python", "n8n", "WordPress API", "OpenAI", "RAG Pipeline"],
          year: "2025",
          featured: false,
        },
        {
          id: 2,
          title: "AI nutritionist in Telegram",
          description:
            "Send a food photo, the bot counts calories, builds a meal plan, and keeps a diary. Built-in subscription model.",
          outcomes: ["> shipped in 2 weeks"],
          tags: ["Python", "Postgres", "Redis", "Telegram"],
          year: "2025",
          featured: false,
        },
        {
          id: 3,
          title: "Fanfy Studio — AI fanfic generator",
          description:
            "Users choose characters, setting, and plot beats, then AI writes the full story. Web app with streamed generation.",
          outcomes: ["> 4 weeks from zero to prod"],
          tags: ["Next.js", "TypeScript", "FastAPI", "Postgres", "OpenAI", "Streaming"],
          year: "2025",
          homepage: "https://fanfy.studio/en",
          featured: true,
        },
        {
          id: 4,
          title: "MechaPost — all-in-one content factory",
          description:
            "A platform for AI video production: avatars, voice-over, image generation. The whole content pipeline in one place.",
          outcomes: ["> build time: 4 weeks"],
          tags: ["Next.js", "Python", "Runway", "ElevenLabs", "Replicate", "GPU Inference"],
          year: "2025",
          homepage: "https://mechapost.app/",
          featured: false,
        },
      ],
    },
    team: {
      eyebrow: "Team",
      title: "A team with real shipping experience",
      skillsLabel: "role and skills",
      members: [
        {
          id: 1,
          title: "Oleg Stefanov — Tech Lead @ Salmon",
          excerpt:
            "Builds AI products from scratch and advises businesses. If a workflow can be automated with LLMs, Oleg will tell you how.",
          date: "8+ years in engineering",
          category: "ai",
          link: "https://www.linkedin.com/in/oleg-stefanov-a887b1196/",
          color: "from-blue-500/20 to-cyan-500/20",
        },
        {
          id: 2,
          title: "Danil Ustinov — Team Lead @ SpectrumData",
          excerpt:
            "Architecture, stack decisions, deployment. He owns the technical side from the first commit to production.",
          date: "8+ years in engineering",
          category: "tech",
          link: "https://www.linkedin.com/in/danil-ustinov/",
          color: "from-purple-500/20 to-pink-500/20",
        },
        {
          id: 3,
          title: "Kirill Zubkov — Project Manager",
          excerpt:
            "Your main point of contact. He keeps the project moving, keeps you in the loop, and makes sure timelines don't drift.",
          date: "3+ years in PM",
          category: "delivery",
          link: "https://www.linkedin.com/in/%D0%BA%D0%B8%D1%80%D0%B8%D0%BB%D0%BB-%D0%B7%D1%83%D0%B1%D0%BA%D0%BE%D0%B2-3875233b5",
          color: "from-primary/20 to-emerald-500/20",
        },
      ],
    },
    footer: {
      eyebrow: "Contact",
      titleLead: "Let's talk about your",
      titleAccent: "project",
      description:
        "Message us on Telegram or book a 15-minute slot right away. Tell us what you need and we'll figure out if we're the right team for it.",
      directContact: "If you want to reach Oleg directly, Telegram is the fastest route.",
      primaryCta: "message us",
      secondaryCta: "how we work",
      bookingTitle: "Book a call",
      madeWithStart: "Built with",
      madeWithEnd: "and attention to detail",
    },
    howWeWork: {
      eyebrow: "How We Work",
      title: "Five steps to a working product",
      description:
        "We don't sell hours. We take the task and ship a working product. Here's how it works from the first call to deployment.",
      chips: ["fixed timelines", "weekly demos", "team matched to your stack"],
      stageLabel: "stage",
      steps: [
        {
          id: "01",
          title: "Discovery call",
          goal: "Fast start",
          duration: "15 minutes",
          description:
            "We get on a call and you explain what needs to be built. No giant brief, no deck, just plain language. Fifteen minutes is enough to understand if we can help. If it's not our kind of task, we'll say so directly.",
        },
        {
          id: "02",
          title: "Team for the project",
          goal: "Kickoff call",
          duration: "60 minutes",
          description:
            "The people who'll actually move the project forward join from the start. Not middlemen, not juniors. We shape the team around your stack, align on the task, and agree on the working setup.",
        },
        {
          id: "03",
          title: "Deposit & kickoff",
          goal: "Lock the terms",
          duration: "1 day",
          description:
            "Once the format and numbers are locked in, we start. The deposit lets us reserve the team for your project instead of spreading them across other work.",
        },
        {
          id: "04",
          title: "Spec",
          goal: "So we don't rebuild later",
          duration: "2-5 days",
          description:
            "We break the project into parts: architecture, integrations, and what counts as done for each stage. Skip this and a month later everyone discovers they meant different things. We write it together, revisions are included.",
        },
        {
          id: "05",
          title: "Development",
          goal: "Weekly demos",
          duration: "Sprints",
          description:
            "Every week we show a working product, not slides. You can click through it, give feedback, and shift priorities. If something's drifting, you'll hear about it in the demo — not on handoff day.",
        },
      ],
      ctaTitle: "Have a task? Let's break it down",
      ctaDescription:
        "Book a 15-minute call. You explain the task, we tell you if we can help and give you a rough estimate.",
      primaryCta: "book a 15-minute call",
      secondaryCta: "back to home",
    },
    notFound: {
      title: "Page not found",
      description: "This page doesn't exist anymore, or the link points the wrong way.",
      subtext: "Let's get you back on track.",
      primaryCta: "Go home",
      secondaryCta: "How we work",
      errorLabel: "Error code: 404_NOT_FOUND",
    },
  },
} as const

export type SiteCopy = (typeof siteCopy)[Locale]

export function getSiteCopy(locale: Locale): SiteCopy {
  return siteCopy[locale]
}
