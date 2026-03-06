import type { BlogPost } from './blog-data'
import type { Locale } from './i18n'

export function generateBlogPostStructuredData(post: BlogPost, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${url}/og-images/${post.slug}.png`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Organization',
      name: 'x10Devs',
      url,
    },
    publisher: {
      '@type': 'Organization',
      name: 'x10Devs',
      url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    timeRequired: post.readTime,
  }
}

export function generateWebsiteStructuredData(url: string, locale: Locale, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'x10Devs',
    alternateName: 'x10 Devs',
    description,
    url,
    inLanguage: locale,
    publisher: {
      '@type': 'Organization',
      name: 'x10Devs',
      url,
    },
  }
}

export function generateOrganizationStructuredData(url: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'x10Devs',
    url,
    logo: `${url}/icon.svg`,
    description,
    foundingDate: '2025-04',
    founders: [
      {
        '@type': 'Person',
        name: 'Олег Стефанов',
        alternateName: 'Oleg Stefanov',
        jobTitle: 'Tech Lead',
        url: 'https://www.linkedin.com/in/oleg-stefanov-a887b1196/',
        sameAs: [
          'https://www.linkedin.com/in/oleg-stefanov-a887b1196/',
          'https://t.me/oleg_code',
        ],
      },
    ],
    member: [
      {
        '@type': 'Person',
        name: 'Олег Стефанов',
        alternateName: 'Oleg Stefanov',
        jobTitle: 'Tech Lead',
        url: 'https://www.linkedin.com/in/oleg-stefanov-a887b1196/',
      },
      {
        '@type': 'Person',
        name: 'Данил Устинов',
        alternateName: 'Danil Ustinov',
        jobTitle: 'Team Lead',
        url: 'https://www.linkedin.com/in/danil-ustinov/',
      },
      {
        '@type': 'Person',
        name: 'Кирилл Зубков',
        alternateName: 'Kirill Zubkov',
        jobTitle: 'Project Manager',
        url: 'https://www.linkedin.com/in/%D0%BA%D0%B8%D1%80%D0%B8%D0%BB%D0%BB-%D0%B7%D1%83%D0%B1%D0%BA%D0%BE%D0%B2-3875233b5',
      },
    ],
    sameAs: [
      'https://t.me/oleg_code',
      'https://www.linkedin.com/in/oleg-stefanov-a887b1196/',
      'https://www.linkedin.com/in/danil-ustinov/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      url: 'https://t.me/oleg_code',
      availableLanguage: ['Russian', 'English'],
    },
    knowsAbout: [
      'AI development',
      'MVP development',
      'SaaS platforms',
      'Telegram bots',
      'Content automation',
      'Web development',
      'Next.js',
      'Python',
      'TypeScript',
    ],
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
