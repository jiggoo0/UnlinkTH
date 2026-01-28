/**
 * UNLINK-TH | Global Type Definitions (2026 Optimized)
 * -------------------------------------------------------------------------
 * รวบรวม Schema ทั้งหมดของระบบเพื่อให้มั่นใจว่าข้อมูลไหลเวียนอย่างถูกต้อง
 * ตั้งแต่ Config, Services ไปจนถึง Case Studies
 */

import * as LucideIcons from "lucide-react"

/**
 * 1. SEO & Metadata Configuration
 */
export interface SEOConfig {
  titleTemplate?: string
  defaultTitle: string
  defaultDescription: string
  keywords: string[]
  title?: string // สำหรับหน้าย่อย
  description?: string // สำหรับหน้าย่อย
}

/**
 * 2. Contact & Identity Linkage
 */
export interface ContactInfo {
  primaryChannel: string
  lineUrl: string
  lineId: string
  phone: string
  email: string
  note: string
}

export interface SocialLinks {
  facebook?: string
  twitter?: string
  line: string
  linkedin?: string
  github?: string
}

/**
 * 3. Business Philosophy & Strategy
 */
export interface CompanyPhilosophy {
  slogan?: string
  approach: string
  positioning: string
}

export interface FooterConfig {
  disclaimer: string
  trustNote: string
}

/**
 * 4. Master Site Configuration
 */
export interface SiteConfig {
  name: string
  fullName: string
  description: string
  url: string
  ogImage: string
  locale: string
  language: string
  contact: ContactInfo
  links: SocialLinks
  seo: SEOConfig
  company: CompanyPhilosophy
  footer: FooterConfig
}

/**
 * 5. Service Schema (Reputation Architect Services)
 */
export type ServiceCategory =
  | "Technical"
  | "Social"
  | "Personal"
  | "Legal"
  | "Cleanup"
  | "Architect"

export interface PriceInfo {
  startingAt: string
  unit: string
  model:
    | "Success Fee"
    | "Fixed Rate"
    | "Subscription"
    | "Project Based"
    | string
}

export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  iconName: keyof typeof LucideIcons // ดึงชื่อ Icon จาก Lucide โดยตรง
  category: ServiceCategory
  features: string[]
  priceInfo: PriceInfo
  metadata: SEOConfig
}

/**
 * 6. Case Study Schema (Social Proof)
 */
export interface CaseStudy {
  slug: string
  title: string
  category: string
  thumbnail: string
  excerpt: string
  content?: any // สำหรับ MDX Remote หรือ MDX Component
  date: string
  featured?: boolean
  tags?: string[]
}

/**
 * 7. UI Components & Shared Types
 */
export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItem {
  items: NavItem[]
}
