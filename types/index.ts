/** @format */

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
  // ปรับปรุง: ให้รองรับโครงสร้าง Strategy: Dark & Bright
  hero: {
    title?: string // ใส่ ? เพื่อรองรับกรณีที่ไม่ได้ใช้ key นี้โดยตรง
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
  // Index Signature เพื่อความยืดหยุ่นของ JsonLd
  [key: string]: unknown
}

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
  category:
    | "Cleanup"
    | "Architect"
    | "Legal"
    | "Personal"
    | "Crisis"
    | "Business"
  features: string[]
  priceInfo: ServicePrice
  metadata: ServiceMetadata
}

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
