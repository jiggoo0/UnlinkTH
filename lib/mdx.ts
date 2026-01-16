import fs from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"
import React from "react"

/**
 * 📁 Path Configuration
 */
const CASES_PATH = path.join(process.cwd(), "content/cases")
const STORE_PATH = path.join(process.cwd(), "content/_store")

/**
 * ✅ CaseFrontmatter Interface
 * อัปเดตเพื่อรองรับ Metadata และแก้ปัญหา Property 'description' does not exist
 */
export interface CaseFrontmatter {
  title: string
  summary: string
  description?: string // ✅ เพิ่ม Optional field เพื่อใช้ใน SEO Metadata
  category: string
  date: string
  status?: string
  featuredImage?: string // รูปภาพหลัก (แนะนำให้ใช้)
  image?: string // Fallback สำหรับโครงสร้างข้อมูลเดิม
}

/**
 * MDXContent Interface
 */
export interface MDXContent {
  slug: string
  frontmatter: CaseFrontmatter
  content: React.ReactNode
}

// -----------------------------------------------------------------------------
// 📂 Case Studies Manager (content/cases)
// -----------------------------------------------------------------------------

export function getCaseSlugs(): string[] {
  if (!fs.existsSync(CASES_PATH)) return []
  return fs.readdirSync(CASES_PATH).filter((fn) => fn.endsWith(".mdx"))
}

export async function getCaseBySlug(slug: string): Promise<MDXContent | null> {
  try {
    const realSlug = slug.replace(/\.mdx$/, "")
    const filePath = path.join(CASES_PATH, `${realSlug}.mdx`)

    if (!fs.existsSync(filePath)) return null

    const fileContent = fs.readFileSync(filePath, "utf8")

    const { frontmatter, content } = await compileMDX<CaseFrontmatter>({
      source: fileContent,
      options: { parseFrontmatter: true },
    })

    return {
      slug: realSlug,
      frontmatter,
      content,
    }
  } catch (error) {
    console.error(`[MDX Error] Failed to load case slug: ${slug}`, error)
    return null
  }
}

export async function getAllCases() {
  const filenames = getCaseSlugs()

  const cases = await Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.replace(/\.mdx$/, "")
      const caseData = await getCaseBySlug(slug)
      if (!caseData) return null
      return { slug, frontmatter: caseData.frontmatter }
    })
  )

  return cases
    .filter(
      (c): c is { slug: string; frontmatter: CaseFrontmatter } => c !== null
    )
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    )
}

// -----------------------------------------------------------------------------
// 📂 Guides & Knowledge Store Manager (content/_store)
// -----------------------------------------------------------------------------

/**
 * ดึงข้อมูล Guides ทั้งหมดจาก content/_store
 */
export async function getAllGuides() {
  if (!fs.existsSync(STORE_PATH)) return []

  const filenames = fs
    .readdirSync(STORE_PATH)
    .filter((fn) => fn.endsWith(".mdx"))

  const guides = await Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.replace(/\.mdx$/, "")
      const filePath = path.join(STORE_PATH, filename)
      const fileContent = fs.readFileSync(filePath, "utf8")

      try {
        const { frontmatter } = await compileMDX<CaseFrontmatter>({
          source: fileContent,
          options: { parseFrontmatter: true },
        })

        return {
          slug,
          frontmatter,
        }
      } catch (err) {
        console.error(`[MDX Error] Failed to load guide slug: ${slug}`, err)
        return null
      }
    })
  )

  return guides
    .filter(
      (g): g is { slug: string; frontmatter: CaseFrontmatter } => g !== null
    )
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    )
}

/**
 * ดึงข้อมูล Guide รายตัว (สำหรับหน้า [slug] ของ Store/Guides)
 */
export async function getGuideBySlug(slug: string): Promise<MDXContent | null> {
  try {
    const realSlug = slug.replace(/\.mdx$/, "")
    const filePath = path.join(STORE_PATH, `${realSlug}.mdx`)

    if (!fs.existsSync(filePath)) return null

    const fileContent = fs.readFileSync(filePath, "utf8")

    const { frontmatter, content } = await compileMDX<CaseFrontmatter>({
      source: fileContent,
      options: { parseFrontmatter: true },
    })

    return {
      slug: realSlug,
      frontmatter,
      content,
    }
  } catch (error) {
    console.error(`[MDX Error] Failed to load guide slug: ${slug}`, error)
    return null
  }
}
