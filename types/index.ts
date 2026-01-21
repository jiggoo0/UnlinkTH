/**
 * UNLINK-TH - Core Type Definitions (2026 Optimized)
 * รวบรวมคำนิยามประเภทข้อมูลเพื่อควบคุม Type Safety ทั่วทั้งโปรเจกต์
 */

// --- Shared Types ---
/** * Category: หมวดหมู่หลักของบริการและกรณีศึกษา 
 * เพิ่ม "Social" เพื่อรองรับบริการ Platform Removal (Pantip, Twitter, etc.)
 */
export type Category = "Personal" | "Corporate" | "Legal" | "Technical" | "Social";

// --- Service Types ---
export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  iconName: string; // อ้างอิงชื่อไอคอนจาก Lucide Icons (e.g., "Search", "Shield")
  category: Category;
  features: string[];
  content?: string; // รองรับเนื้อหาแบบ MDX หรือ Plain Text
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// --- Case Study Types ---
export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  incident: string;
  protocol: string;
  result: string;
  impact: string;
  image: string;
  contentPath: string;
  date?: string; // ISO Date หรือ String สำหรับ Sitemap
}

// --- Navigation Types ---
export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  description?: string;
}

// --- Global Site Configuration ---
/**
 * SiteConfig: โครงสร้างข้อมูลหลักของเว็บไซต์
 * อัปเดตเพื่อรองรับระบบ Contact Deep Linking และ Social Network Links
 */
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  locale: string;
  language: string;
  contact: {
    primaryChannel: string;
    lineUrl: string; // ✅ เพิ่มเพื่อรองรับการเปิดแอป LINE โดยตรง
    lineId: string;
    phone: string;   // ✅ เพิ่มเพื่อให้ตรงกับข้อมูลจริงใน site-config.ts
    email: string;   // ✅ เพิ่มเพื่อให้ตรงกับข้อมูลจริงใน site-config.ts
    note: string;
  };
  links: {           // ✅ เพิ่มส่วนนี้เพื่อรองรับ Social Icons ใน Footer
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
    approach: string;
    positioning: string;
  };
  footer: {
    disclaimer: string;
    trustNote: string;
  };
}

// --- FAQ Types ---
export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
