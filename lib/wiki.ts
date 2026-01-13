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
 * [STRATEGY: IMMUTABLE DATA SERVICE v6.5]
 * - Fix: Ensuring Map initialization is robust for Next.js Server Components.
 * - Fix: Added safety check for 'content' to ensure it's never undefined.
 * - Performance: O(1) Access for Articles, Categories, and Glossary.
 */

// 🏛️ Private Data Indexing
const articleMap = new Map(
  allWikiArticles.map((a) => [a.slug.toLowerCase().trim(), a]),
)
const categoryMap = new Map(
  wikiCategories.map((c) => [c.id.toLowerCase().trim(), c]),
)
const glossaryMap = new Map(
  wikiGlossary.map((g) => [g.term.toLowerCase().trim(), g]),
)

export const WikiService = {
  // 🏛️ 1. Article Retrieval Services
  /**
   * ดึงบทความทั้งหมด หรือกรองตามหมวดหมู่
   */
  getAllArticles: (categoryId?: string): readonly WikiArticle[] => {
    if (!categoryId || categoryId === 'ทั้งหมด') return allWikiArticles
    return allWikiArticles.filter(
      (article) =>
        article.category.toLowerCase().trim() ===
        categoryId.toLowerCase().trim(),
    )
  },

  /**
   * ดึงบทความเดียวจาก Slug (รองรับ Case-insensitive และ Space trimming)
   */
  getArticleBySlug: (slug: string): WikiArticle | undefined => {
    if (!slug) return undefined
    // Normalize slug ก่อนค้นหา
    const normalizedSlug = decodeURIComponent(slug).toLowerCase().trim()
    return articleMap.get(normalizedSlug)
  },

  /**
   * ค้นหาบทความที่เกี่ยวข้องในหมวดหมู่เดียวกัน
   */
  getRelatedArticles: (
    currentSlug: string,
    limit = 3,
  ): readonly WikiArticle[] => {
    const current = WikiService.getArticleBySlug(currentSlug)
    if (!current) return []

    return allWikiArticles
      .filter(
        (a) =>
          a.category.toLowerCase() === current.category.toLowerCase() &&
          a.slug.toLowerCase() !== current.slug.toLowerCase(),
      )
      .slice(0, limit)
  },

  // 🏛️ 2. Category & Taxonomy Services
  getCategories: (): readonly WikiCategory[] => wikiCategories,

  getCategoryById: (id: string): WikiCategory | undefined => {
    if (!id) return undefined
    return categoryMap.get(id.toLowerCase().trim())
  },

  // 🏛️ 3. Intelligence Augmentation
  getGlossaryTerm: (termName: string): GlossaryTerm | undefined => {
    if (!termName) return undefined
    return glossaryMap.get(termName.toLowerCase().trim())
  },

  getLegalReferences: (sections: string[]): readonly LegalArticle[] => {
    const sectionSet = new Set(sections.map((s) => s.toLowerCase().trim()))
    return legalFrameworks.filter((framework) =>
      sectionSet.has(framework.section.toLowerCase().trim()),
    )
  },

  // 🏛️ 4. Knowledge Support
  getFaqsByCategory: (category: WikiFAQ['category']): readonly WikiFAQ[] => {
    return wikiFAQs.filter(
      (faq) =>
        faq.category.toLowerCase().trim() === category.toLowerCase().trim(),
    )
  },

  getRandomFaqs: (limit = 3): readonly WikiFAQ[] => {
    return [...wikiFAQs].sort(() => 0.5 - Math.random()).slice(0, limit)
  },

  // 🏛️ 5. Search & Internal Linking (Advanced Search Logic)
  searchArticles: (query: string): readonly WikiArticle[] => {
    const q = query.toLowerCase().trim()
    if (!q) return []
    return allWikiArticles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.content.toLowerCase().includes(q),
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
