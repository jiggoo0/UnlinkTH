/**
 * UNLINK-TH - Core Type Definitions (2026 Optimized)
 * รวบรวมคำนิยามประเภทข้อมูลเพื่อควบคุม Type Safety ทั่วทั้งโปรเจกต์
 */

// --- Shared Types ---
/**
 * Category: หมวดหมู่หลักของบริการและกรณีศึกษา
 * ใช้สำหรับการคัดกรอง (Filtering) และการจัดกลุ่มเนื้อหา
 */
export type Category =
  | "Personal"
  | "Corporate"
  | "Legal"
  | "Technical"
  | "Social"

/**
 * PriceModel: รูปแบบการคิดค่าบริการ
 * - Success Fee: จ่ายเมื่อสำเร็จเท่านั้น (Key Selling Point ของ Unlink)
 * - Fixed Rate: ราคาคงที่สำหรับงานมาตรฐาน
 * - Retainer: รายเดือนสำหรับการเฝ้าระวัง (Monitoring)
 */
export type PriceModel = "Success Fee" | "Fixed Rate" | "Retainer"

// --- Service Types ---
export interface Service {
  id: string
  slug: string
  title: string
  description: string
  shortDescription: string
  iconName: string // อ้างอิงชื่อไอคอนจาก Lucide Icons (e.g., "Search", "Shield")
  category: Category
  features: string[]
  content?: string // รองรับเนื้อหาแบบ MDX หรือ Plain Text

  /** * priceInfo: ข้อมูลราคาเบื้องต้นสำหรับการประเมินของลูกค้า
   */
  priceInfo?: {
    startingAt: string // เช่น "15,000"
    unit: string // เช่น "บาท / ลิงก์" หรือ "บาท / เคส"
    model: PriceModel
  }

  metadata: {
    title: string
    description: string
    keywords: string[]
  }
}

// --- Case Study Types ---
export interface CaseStudy {
  slug: string
  title: string
  category: string
  incident: string
  protocol: string
  result: string
  impact: string
  image: string
  contentPath: string
  date?: string // ISO Date หรือ String สำหรับ Sitemap
}

// --- Navigation Types ---
export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
  description?: string
}

// --- Global Site Configuration ---
/**
 * SiteConfig: โครงสร้างข้อมูลหลักของเว็บไซต์
 * สอดคล้องกับไฟล์ constants/site-config.ts
 */
export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  locale: string
  language: string
  contact: {
    primaryChannel: string
    lineUrl: string
    lineId: string
    phone: string
    email: string
    note: string
  }
  links: {
    facebook: string
    twitter: string
    line: string
  }
  seo: {
    titleTemplate: string
    defaultTitle: string
    defaultDescription: string
    keywords: string[]
  }
  company: {
    approach: string
    positioning: string
  }
  footer: {
    disclaimer: string
    trustNote: string
  }
}

// --- FAQ Types ---
export interface FAQItem {
  question: string
  answer: string
  category?: string
}
