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
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  thumbnail: string;
  image?: string;
}

export interface BlogPost extends BlogPostFrontmatter {
  slug: string;
  content: string;
}

// ------------------------------------------------------------------
// EVIDENCE & PORTFOLIO TYPES
// ------------------------------------------------------------------

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  thumbnail?: string;
  excerpt?: string;
  date: string;
  priority?: boolean | number;
  client?: string;
  description?: string;
  outcome?: string;
  image?: string;
  frontmatter?: Record<string, unknown>; // รองรับข้อมูลดิบจาก MDX โดยไม่ใช้ any
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
