import React from "react";

/**
 * UNLINK-TH | Global Type Definitions (2026)
 * -------------------------------------------------------------------------
 * สถาปัตยกรรมประเภทข้อมูลเพื่อความปลอดภัยและโครงสร้างที่แม่นยำ
 */

export interface HeroSide {
  tone: "dark" | "bright" | string;
  headline: string;
  subHeadline: string;
  action: string;
}

export interface SiteConfig {
  name: string;
  fullName: string;
  description: string;
  url: string;
  ogImage: string;
  locale: string;
  language: string;

  founder: {
    name: string;
    nameTh: string;
    nickname?: string;
    alias?: string; // เพิ่มฟิลด์นี้
    role: string;
    roleTh: string;
    description?: string; // เพิ่มฟิลด์นี้
    url: string;
    sameAs: string[];
  };

  developer?: {
    name: string;
    fullname: string;
    url: string;
    mcp?: string;
    role: string;
  };

  contact: {
    primaryChannel: string;
    lineUrl: string;
    lineId: string;
    phone: string;
    email: string;
    qrImage?: string;
    note: string;
  };

  links: {
    facebook: string;
    twitter: string;
    line: string;
  };

  seo: {
    titleTemplate: string;
    defaultTitle: string;
    defaultDescription: string;
    keywords: string[];
  };

  company: {
    slogan: string;
    approach: string;
    positioning: string;
  };

  footer: {
    disclaimer: string;
    trustNote: string;
    copyright?: string;
    links?: Array<{ title: string; href: string }>;
  };

  hero?: {
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
    stats: Array<{ label: string; value: string }>;
    title?: string;
    subtitle?: string;
    badge?: string;
    leftSide: HeroSide;
    rightSide: HeroSide;
  };

  leadCapture?: {
    title: string;
    description: string;
    badge: string;
    successTitle: string;
    successDescription: string;
    buttonText: string;
    fields: {
      name: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      company: { label: string; placeholder: string };
    };
  };

  pricing?: {
    badge: string;
    title: string;
    description: string;
    tiers: Array<{
      name: string;
      price: string;
      description?: string;
      period?: string;
      highlighted?: boolean;
      cta?: string;
      features: string[];
    }>;
  };
  portfolio?: {
    badge: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      category: string;
      image: string;
      span?: string;
      aspect?: string;
    }>;
  };
  protocols?: {
    badge: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
      icon?: React.ElementType;
      features?: string[];
    }>;
  };

  [key: string]: unknown;
}

// ------------------------------------------------------------------
// SERVICE & SOLUTION TYPES
// ------------------------------------------------------------------

export interface ServicePrice {
  startingAt: string;
  unit: string;
  model: string;
}

export interface ServiceMetadata {
  defaultTitle: string;
  defaultDescription: string;
  keywords: string[];
}

export interface ServiceFrontmatter {
  id?: string;
  slug: string;
  title: string;
  description: string;
  shortDescription?: string;
  date?: string;
  author?: string;
  category?: string;
  image?: string;
  thumbnail?: string;
  imageUrl?: string;
  iconName?: string;
  features?: string[];
  priceInfo?: ServicePrice;
  metadata?: ServiceMetadata;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  iconName: string;
  image?: string;
  category: string;
  features: string[];
  priceInfo: ServicePrice;
  metadata: ServiceMetadata;
}

// ------------------------------------------------------------------
// CONTENT & MEDIA TYPES
// ------------------------------------------------------------------

export interface BlogPostFrontmatter {
  id?: string;
  slug: string;
  title: string;
  description: string;
  shortDescription?: string;
  date: string;
  author: string;
  category: string;
  thumbnail: string;
  image?: string;
  iconName?: string;
  features?: string[];
  priceInfo?: ServicePrice;
  metadata?: ServiceMetadata;
}

export interface BlogPost extends BlogPostFrontmatter {
  slug: string;
  content: string;
}

// ------------------------------------------------------------------
// EVIDENCE & PORTFOLIO TYPES
// ------------------------------------------------------------------

export interface CaseStudy {
  id?: string;
  slug: string;
  title: string;
  category: string;
  shortDescription?: string;
  thumbnail?: string;
  excerpt?: string;
  date: string;
  priority?: boolean | number;
  client?: string;
  description?: string;
  content?: string; // เพิ่มฟิลด์นี้เพื่อรองรับ MDX Body
  outcome?: string;
  image?: string;
  iconName?: string;
  features?: string[];
  priceInfo?: ServicePrice;
  metadata?: ServiceMetadata;
  // --- Tangible Proof Fields (Added 2026) ---
  legalReference?: string; // อ้างอิงข้อกฎหมายหรือระเบียบที่ใช้ (เช่น PDPA มาตรา 33)
  platform?: string; // แพลตฟอร์มที่เกี่ยวข้อง (เช่น Google Search, Blacklistseller)
  verificationSteps?: string[]; // ขั้นตอนที่ลูกค้าใช้ตรวจสอบผลลัพธ์ด้วยตนเอง
  auditLog?: Array<{ date: string; action: string }>; // บันทึกปฏิบัติการย่อย
  frontmatter?: Record<string, unknown>;
}

// ------------------------------------------------------------------
// NAVIGATION ARCHITECTURE
// ------------------------------------------------------------------

export interface NavItem {
  title: string;
  href: string;
  external?: boolean;
  description?: string;
}

/*
interface FooterNav {
  solutions: NavItem[];
  support: NavItem[];
  connect: NavItem[];
  protocols?: NavItem[];
  security?: NavItem[];
  liaison?: NavItem[];
}
*/
