/** @format */

import { CaseStudy } from "@/types"
import { getAllMDXData, readMDXFile } from "./mdx"

interface CaseFrontmatter {
  title?: string
  category?: string
  thumbnail?: string
  image?: string
  excerpt?: string
  description?: string
  date?: string
  priority?: number
}

/**
 * ดึงรายการ Case Studies ทั้งหมด
 */
export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  const allData = getAllMDXData<CaseFrontmatter>("case-studies")

  const studies = allData.map((item) => {
    const { frontmatter, slug } = item
    return {
      slug,
      title: frontmatter.title || "Untitled Operation",
      category: frontmatter.category || "General",
      thumbnail:
        frontmatter.thumbnail ||
        frontmatter.image ||
        "/images/cases/unlink-th.webp",
      excerpt: frontmatter.excerpt || frontmatter.description || "",
      date: frontmatter.date || "2026-01-01",
      priority: frontmatter.priority || 0,
    } as CaseStudy
  })

  return studies.sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateB - dateA
  })
}

/**
 * ดึงข้อมูล Case Study รายรายการ
 */
export async function getCaseStudyBySlug(slug: string) {
  const item = readMDXFile<CaseFrontmatter>("case-studies", slug)
  if (!item) return null

  const { frontmatter, content } = item

  return {
    slug,
    frontmatter: {
      title: frontmatter.title || "Untitled Operation",
      category: frontmatter.category || "General",
      thumbnail:
        frontmatter.thumbnail ||
        frontmatter.image ||
        "/images/cases/unlink-th.webp",
      excerpt: frontmatter.excerpt || frontmatter.description || "",
      date: frontmatter.date || "2026-01-01",
      description: frontmatter.description || "",
    },
    content,
  }
}

/**
 * ดึงรายการล่าสุด
 */
export async function getLatestCaseStudies(
  limit: number = 3
): Promise<CaseStudy[]> {
  const allCases = await getAllCaseStudies()
  return allCases.slice(0, limit)
}
