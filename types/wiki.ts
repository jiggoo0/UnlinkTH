/** @format */

/**
 * [STRATEGY: TYPE DEFINITION ARCHITECTURE v5.1]
 * - Clarity: กำหนดมาตรฐานข้อมูลสำหรับระบบ Knowledge Base
 * - Scalability: รองรับการขยายตัวของ Metadata เช่น Tags หรือระดับความลับ
 */

export type WikiCategoryIcon =
  | 'scale'
  | 'shield-check'
  | 'zap'
  | 'lock'
  | 'fingerprint'
  | 'library'

/**
 * 🏛️ Category Interface
 * นิยามของหมวดหมู่หลักในฐานข้อมูลข่าวกรอง
 */
export interface WikiCategory {
  id: string
  title: string
  description: string
  iconName: WikiCategoryIcon
  articleCount?: number
}

/**
 * 🏛️ Article Interface
 * โครงสร้างข้อมูลของบทความแต่ละชุด (Dossier Record)
 * FIXED: เพิ่มความยืดหยุ่นของ Content และระบุฟิลด์ Tags ให้ชัดเจน
 */
export interface WikiArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  content?: string | React.ReactNode // รองรับทั้ง HTML string และ JSX สำหรับ Rich Content
  category: string // เชื่อมโยงกับ Category ID
  author: string
  date: string // ISO Format
  lastUpdated?: string
  readingTime?: string
  tags?: string[] // สำหรับระบบ Filter และ SEO
  isFeatured?: boolean // สำหรับแสดงในส่วนแนะนำ (Top Protocols)
}

/**
 * 🏛️ Search & Filter Types
 */
export interface WikiSearchParams {
  query?: string
  category?: string
  tag?: string
}

/**
 * 🏛️ Service Result Types
 */
export interface WikiServiceResponse {
  categories: WikiCategory[]
  featuredArticles: WikiArticle[]
  recentArticles: WikiArticle[]
}
