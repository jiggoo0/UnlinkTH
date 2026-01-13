/** @format */

import {
  allWikiArticles,
  wikiCategories,
  type WikiArticle,
  type WikiCategory,
} from '@/data/wiki/articles'
import { wikiFAQs, type WikiFAQ } from '@/data/wiki/faq-data'
import { wikiGlossary, type GlossaryTerm } from '@/data/wiki/glossary'
import { legalFrameworks, type LegalArticle } from '@/data/wiki/legal-framework'

/**
 * [STRATEGY: IMMUTABLE DATA SERVICE v6.1]
 * - Fix: Resolved TS4104 by using 'readonly' return types to match 'as const' data.
 * - Integrity: Centralized Article & Category retrieval with strict typing.
 */

// 🏛️ Build Indexes (Lowercased for robust lookups)
const articleMap = new Map(
  allWikiArticles.map((a) => [a.slug.toLowerCase(), a]),
)
const categoryMap = new Map(wikiCategories.map((c) => [c.id.toLowerCase(), c]))
const glossaryMap = new Map(wikiGlossary.map((g) => [g.term.toLowerCase(), g]))

export const WikiService = {
  // 🏛️ 1. Article Retrieval Services
  /**
   * ดึงบทความทั้งหมด หรือกรองตามหมวดหมู่
   */
  getAllArticles: (categoryId?: string): readonly WikiArticle[] => {
    if (!categoryId || categoryId === 'ทั้งหมด') return allWikiArticles
    return allWikiArticles.filter(
      (article) => article.category.toLowerCase() === categoryId.toLowerCase(),
    )
  },

  /**
   * ดึงบทความเดียวจาก Slug (O(1) Performance)
   */
  getArticleBySlug: (slug: string): WikiArticle | undefined => {
    if (!slug) return undefined
    return articleMap.get(slug.toLowerCase())
  },

  /**
   * ค้นหาบทความที่เกี่ยวข้องในหมวดหมู่เดียวกัน
   */
  getRelatedArticles: (
    currentSlug: string,
    limit = 3,
  ): readonly WikiArticle[] => {
    const current = articleMap.get(currentSlug.toLowerCase())
    if (!current) return []

    return allWikiArticles
      .filter(
        (a) =>
          a.category.toLowerCase() === current.category.toLowerCase() &&
          a.slug.toLowerCase() !== currentSlug.toLowerCase(),
      )
      .slice(0, limit)
  },

  // 🏛️ 2. Category & Taxonomy Services
  getCategories: (): readonly WikiCategory[] => wikiCategories,

  getCategoryById: (id: string): WikiCategory | undefined => {
    if (!id) return undefined
    return categoryMap.get(id.toLowerCase())
  },

  // 🏛️ 3. Intelligence Augmentation
  getGlossaryTerm: (termName: string): GlossaryTerm | undefined => {
    if (!termName) return undefined
    return glossaryMap.get(termName.toLowerCase())
  },

  getLegalReferences: (sections: string[]): readonly LegalArticle[] => {
    const sectionSet = new Set(sections.map((s) => s.toLowerCase()))
    return legalFrameworks.filter((framework) =>
      sectionSet.has(framework.section.toLowerCase()),
    )
  },

  // 🏛️ 4. Knowledge Support
  getFaqsByCategory: (category: WikiFAQ['category']): readonly WikiFAQ[] => {
    return wikiFAQs.filter(
      (faq) => faq.category.toLowerCase() === category.toLowerCase(),
    )
  },

  getRandomFaqs: (limit = 3): readonly WikiFAQ[] => {
    return [...wikiFAQs].sort(() => 0.5 - Math.random()).slice(0, limit)
  },

  // 🏛️ 5. Search & Internal Linking (Advanced)
  searchArticles: (query: string): readonly WikiArticle[] => {
    const q = query.toLowerCase().trim()
    if (!q) return []
    return allWikiArticles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q),
    )
  },

  suggestInternalLinks: (content: string): string[] => {
    if (!content) return []
    const words = content.toLowerCase()
    return Array.from(glossaryMap.keys()).filter((term) =>
      words.includes(term.toLowerCase()),
    )
  },
}
