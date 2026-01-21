/**
 * UNLINK-TH | Navigation Architecture
 * -------------------------------------------------------------------------
 * ระบบการนำทางเชิงยุทธศาสตร์: ออกแบบเพื่อสร้างความเชื่อมั่น (Trust) และความปลอดภัย (Security)
 * เรียงลำดับตาม User Journey: ค้นหาทางแก้ -> ดูหลักฐาน -> ตรวจสอบตัวตน -> เคลียร์ข้อสงสัย
 */

import { siteConfig } from "./site-config"

export interface NavItem {
  title: string
  href: string
  external?: boolean
  description?: string // สำหรับใช้งานใน Navigation Menu / Hover Card
}

/**
 * Main Navigation (Primary Protocols)
 * รายการเมนูหลักที่แสดงบน Header ของเว็บไซต์
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
    title: "About",
    href: "/about",
    description: "มาตรฐานการทำงานและมาตรการรักษาความลับสูงสุด",
  },
  {
    title: "FAQ",
    href: "/faq",
    description: "ตอบข้อสงสัยเชิงเทคนิคเกี่ยวกับกระบวนการ UNLINK",
  },
]

/**
 * Footer Navigation (Resource Logs)
 * แบ่งหมวดหมู่เพื่อรองรับ SEO (Topical Authority) และการเข้าถึงนโยบายจริยธรรม
 */
export const footerNav = {
  services: [
    {
      title: "Google De-indexing",
      href: "/services/how-to-fix-negative-google-search-results",
    },
    {
      title: "Platform Removal",
      href: "/services/remove-social-media-content-pantip-twitter",
    },
    {
      title: "Digital Cleaning",
      href: "/services/online-background-check-for-job-application",
    },
    {
      title: "Right to be Forgotten",
      href: "/services/right-to-be-forgotten-thailand-pdpa",
    },
  ] as NavItem[],
  support: [
    {
      title: "Privacy Protocol",
      href: "/privacy",
    },
    {
      title: "Editorial Policy",
      href: "/editorial-policy",
    },
    {
      title: "Operational FAQ",
      href: "/faq",
    },
    {
      title: "Specialist Liaison",
      href: "/contact",
    },
  ] as NavItem[],
  social: [
    {
      title: "LINE Official",
      href: siteConfig.contact.lineUrl, // ดึงค่าจาก siteConfig โดยตรงเพื่อความแม่นยำ
      external: true,
    },
    {
      title: "Facebook",
      href: siteConfig.links.facebook,
      external: true,
    },
  ] as NavItem[],
}

/**
 * Operational Navigation Config
 * การตั้งค่าเพิ่มเติมสำหรับการแสดงผลระบบนำทาง
 */
export const navigationConfig = {
  stickyHeader: true,
  showContactButton: true,
  contactButtonText: "ประเมินเคสส่วนบุคคล",
  specialistNote:
    "*ข้อมูลการสื่อสารทั้งหมดจะถูกทำลาย (Secure Purge) ทันทีหลังการประเมิน",
}
