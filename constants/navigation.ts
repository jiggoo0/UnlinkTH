/**
 * UNLINK-TH | Global Navigation Protocols (2026 Optimized)
 * -------------------------------------------------------------------------
 * รวบรวมโครงสร้างเมนูที่เน้น User Journey แบบ Reputation Architect
 * ทุกจุดสัมผัส (Touchpoint) ถูกออกแบบมาเพื่อสร้าง Authority และ Trust
 */

import { siteConfig } from "./site-config"

/**
 * 1. Blueprint for Navigation items
 */
export interface NavItem {
  title: string
  href: string
  external?: boolean
  description?: string
  icon?: string // สำหรับกรณีใช้เป็นเมนูแบบ Mega Menu ในอนาคต
}

/**
 * 2. Primary Protocols (Main Navigation)
 * เมนูหลักที่แสดงบน Header - เน้นความกริบและเข้าถึงง่าย
 */
export const mainNav: NavItem[] = [
  {
    title: "Services",
    href: "/services",
    description: "ยุทธศาสตร์การถอดถอนและจัดการข้อมูลเชิงเทคนิค",
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    description: "บันทึกปฏิบัติการและผลลัพธ์การจัดการวิกฤตจริง",
  },
  {
    title: "FAQ",
    href: "/faq",
    description: "คลังความรู้เชิงนิติวิทยาศาสตร์ดิจิทัล",
  },
  {
    title: "About",
    href: "/about",
    description: "มาตรฐานสากลและมาตรการรักษาความลับสูงสุด",
  },
]

/**
 * 3. Resource Logs (Footer Navigation)
 * จัดกลุ่มตาม Topical Authority เพื่อประสิทธิภาพสูงสุดด้าน SEO
 */
export const footerNav = {
  protocols: [
    {
      title: "Google De-indexing",
      href: "/services/how-to-fix-negative-google-search-results",
    },
    {
      title: "Platform Cleanup",
      href: "/services/remove-social-media-content-pantip-twitter",
    },
    {
      title: "Background Shield",
      href: "/services/online-background-check-for-job-application",
    },
    {
      title: "PDPA Specialist",
      href: "/services/right-to-be-forgotten-thailand-pdpa",
    },
  ] as NavItem[],
  security: [
    {
      title: "Privacy Protocol",
      href: "/privacy",
    },
    {
      title: "Editorial Ethics",
      href: "/editorial-policy",
    },
    {
      title: "Knowledge Base",
      href: "/faq",
    },
    {
      title: "Consultant Liaison",
      href: "/contact",
    },
  ] as NavItem[],
  liaison: [
    {
      title: "LINE Official (VIP)",
      href: siteConfig.contact.lineUrl,
      external: true,
    },
    {
      title: "Direct Specialist",
      href: `mailto:${siteConfig.contact.email}`,
      external: true,
    },
  ] as NavItem[],
}

/**
 * 4. UI Operational Logic
 * ค่าคงที่สำหรับการควบคุม Interface ส่วนการนำทาง
 */
export const navigationConfig = {
  header: {
    sticky: true,
    blur: true,
    ctaText: "ประเมินเคสส่วนตัว (Private)",
  },
  footer: {
    disclaimer: "Every byte handled with 100% Confidentiality.",
    copy: `© ${new Date().getFullYear()} UNLINK-TH | Managed by AEMDEVWEB`,
  },
  securityNote: "Secure Submission: ข้อมูลทั้งหมดจะถูก Purge ทันทีหลังจบภารกิจ",
}
