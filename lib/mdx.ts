import fs from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"
import React from "react"

const CASES_PATH = path.join(process.cwd(), "content/cases")

/**
 * Interface สำหรับข้อมูล Frontmatter ในไฟล์ MDX
 */
export interface CaseFrontmatter {
  title: string
  summary: string
  category: string
  date: string
  status?: string
  // ✅ แก้ไข: เพิ่ม featuredImage เพื่อให้ตรงกับข้อมูลในไฟล์ .mdx และ Component ต่างๆ
  featuredImage?: string 
  // คง image ไว้เผื่อกรณีมีการเรียกใช้จากจุดอื่นที่ยังไม่ได้เปลี่ยน
  image?: string
}

/**
 * Interface สำหรับข้อมูล Case Study ที่สมบูรณ์
 */
export interface CaseStudy {
  slug: string
  frontmatter: CaseFrontmatter
  content: React.ReactNode
}

/**
 * ดึงรายการชื่อไฟล์ (slug) ทั้งหมดในโฟลเดอร์ cases
 */
export function getCaseSlugs(): string[] {
  if (!fs.existsSync(CASES_PATH)) return []
  return fs.readdirSync(CASES_PATH).filter((fn) => fn.endsWith(".mdx"))
}

/**
 * ดึงข้อมูลเคสรายตัว และ Compile เนื้อหา MDX ให้เป็น React Component
 */
export async function getCaseBySlug(slug: string): Promise<CaseStudy | null> {
  try {
    const realSlug = slug.replace(/\.mdx$/, "")
    const filePath = path.join(CASES_PATH, `${realSlug}.mdx`)

    if (!fs.existsSync(filePath)) return null

    const fileContent = fs.readFileSync(filePath, "utf8")

    /**
     * ✅ ใช้ compileMDX พร้อมระบุ Generic Type <CaseFrontmatter>
     */
    const { frontmatter, content } = await compileMDX<CaseFrontmatter>({
      source: fileContent,
      options: {
        parseFrontmatter: true,
      },
    })

    return {
      slug: realSlug,
      frontmatter,
      content,
    }
  } catch (error) {
    console.error(`[MDX Error] Failed to load slug: ${slug}`, error)
    return null
  }
}

/**
 * ดึงเคสทั้งหมด (Metadata เท่านั้น)
 * ปรับปรุงการจัดการ Type เพื่อให้ปลอดภัย
 */
export async function getAllCases() {
  const filenames = getCaseSlugs()

  const cases = await Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.replace(/\.mdx$/, "")
      const caseData = await getCaseBySlug(slug)

      if (!caseData) return null

      return {
        slug,
        frontmatter: caseData.frontmatter,
      }
    })
  )

  // กรองเฉพาะเคสที่มีข้อมูล และเรียงตามวันที่ (ใหม่ไปเก่า)
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
