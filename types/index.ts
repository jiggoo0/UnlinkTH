/** @format */

/**
 * UNLINK-TH | Global Type Definitions (2026)
 * -------------------------------------------------------------------------
 * สถาปัตยกรรมประเภทข้อมูลเพื่อความปลอดภัยและโครงสร้างที่แม่นยำ
 */

export interface HeroSide {
  tone: "dark" | "bright" | string
  headline: string
  subHeadline: string
  action: string
}

export interface SiteConfig {
  name: string
  fullName: string
  description: string
  url: string
  ogImage: string
  locale: string
  language: string

  // ------------------------------------------------------------------
  // ENTITY LINKING: FOUNDER DATA Structure
  // ------------------------------------------------------------------
  founder: {
    name: string
    nameTh: string
    nickname?: string
    role: string
    roleTh: string
    url: string
    sameAs: string[]
  }

  // ------------------------------------------------------------------
  // DEVELOPER ATTRIBUTION (Business Entity)
  // ------------------------------------------------------------------
  developer?: {
    name: string
    fullname: string
    url: string
    mcp?: string
    role: string
  }

  // ------------------------------------------------------------------
  // UI & BRAND STRATEGY
  // ------------------------------------------------------------------
  hero: {
    title?: string
    subtitle?: string
    badge?: string
    leftSide: HeroSide
    rightSide: HeroSide
  }

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
    slogan: string
    approach: string
    positioning: string
  }

  footer: {
    disclaimer: string
    trustNote: string
  }

  /**
   * Index Signature: เพื่อความยืดหยุ่นในการดึงข้อมูลแบบ Dynamic
   * ช่วยป้องกัน Error TS18046 ในไฟล์ JsonLd และ Metadata
   */
  [key: string]: unknown
}

// ------------------------------------------------------------------
// SERVICE & SOLUTION TYPES
// ------------------------------------------------------------------

export interface ServicePrice {
  startingAt: string
  unit: string
  model: string
}

export interface ServiceMetadata {
  defaultTitle: string
  defaultDescription: string
  keywords: string[]
}

export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  iconName: string
  image?: string
  category:
    | "Cleanup"
    | "Architect"
    | "Legal"
    | "Personal"
    | "Crisis"
    | "Business"
    | "Extreme"
  features: string[]
  priceInfo: ServicePrice
  metadata: ServiceMetadata
}

// ------------------------------------------------------------------
// CONTENT & MEDIA TYPES
// ------------------------------------------------------------------

export interface BlogPostFrontmatter {
  title: string
  description: string
  date: string
  category: string
  thumbnail: string
}

export interface BlogPost extends BlogPostFrontmatter {
  slug: string
  content: string
}

// ------------------------------------------------------------------
// EVIDENCE & PORTFOLIO TYPES
// ------------------------------------------------------------------

export interface CaseStudy {
  slug: string
  title: string
  category: string
  thumbnail: string
  excerpt: string
  date: string
  priority?: number
  client?: string
  description?: string
  outcome?: string
  image?: string
}

// ------------------------------------------------------------------
// NAVIGATION ARCHITECTURE
// ------------------------------------------------------------------

export interface NavItem {
  title: string
  href: string
  external?: boolean
  description?: string
}

export interface FooterNav {
  solutions: NavItem[]
  support: NavItem[]
  connect: NavItem[]
  protocols?: NavItem[]
  security?: NavItem[]
  liaison?: NavItem[]
}
