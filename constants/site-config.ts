/** @format */

import { SiteConfig } from "@/types"

/**
 * UNLINK-TH | Global Strategic Configuration (2026)
 * -------------------------------------------------------------------------
 * ศูนย์บัญชาการข้อมูล Metadata และ Identity สำหรับโครงการ Unlink-TH
 * ออกแบบเพื่อรองรับ Search Generative Experience (SGE) และคะแนน E-E-A-T
 */

export const siteConfig: SiteConfig = {
  name: "UNLINK-TH",
  fullName: "UNLINK-TH Reputation Architect",
  description:
    "Unlink the Past, Architect Your Future. บริการจัดการภาพลักษณ์ออนไลน์เชิงยุทธศาสตร์ ลบข้อมูลเชิงลบถาวร พร้อมสร้างตัวตนใหม่ที่ทรงพลังด้วยเทคนิค SEO Shadowing และ Knowledge Graph Architecture",

  url: "https://www.unlink-th.com",
  ogImage: "/images/og-main.png",

  locale: "th_TH",
  language: "th",

  // --- Secure Liaison Protocols (ช่องทางติดต่อรักษาความลับ) ---
  contact: {
    primaryChannel: "LINE Official (VIP)",
    lineUrl: "https://lin.ee/bWcwyir",
    lineId: "@204uuzew",
    phone: "099-999-8989",
    email: "contact@unlink-th.com",
    note: "Non-Disclosure Policy: ข้อมูลการสนทนาทั้งหมดถูกเข้ารหัสและทำลายทันทีหลังการประเมินเพื่อความปลอดภัยสูงสุดของลูกค้า",
  },

  // --- Identity Linkage (การเชื่อมโยงเครือข่าย) ---
  links: {
    facebook: "https://www.facebook.com/share/1DDfxWEdt5/",
    twitter: "https://twitter.com/unlinkth",
    line: "https://lin.ee/bWcwyir",
  },

  // --- Search Engine Architecture (SGE/AEO Mastery) ---
  seo: {
    titleTemplate: "%s | UNLINK-TH Reputation Architect",
    defaultTitle:
      "UNLINK-TH | บริการลบลิงก์ Google และออกแบบชื่อเสียงออนไลน์ใหม่",
    defaultDescription:
      "จัดการ Digital Footprint อย่างเป็นระบบ ลบข่าวเสีย กระทู้ Pantip และประวัติออนไลน์ที่ไม่พึงประสงค์ พร้อมปั้นโปรไฟล์ใหม่ให้มีความน่าเชื่อถือระดับ Authority โดยผู้เชี่ยวชาญตัวจริง",
    keywords: [
      // PHASE 1: UNLINK (Cleanup)
      "รับลบลิงก์ Google",
      "ลบข่าวเสีย",
      "ลบกระทู้ Pantip",
      "De-indexing Service Thailand",
      "ลบประวัติออนไลน์",

      // PHASE 2: ARCHITECT (Building)
      "Online Reputation Management",
      "SEO Shadowing",
      "Knowledge Graph Setup",
      "ปั้นแบรนด์บุคคล",
      "สร้างความน่าเชื่อถือบน Google",

      // COMPLIANCE
      "สิทธิในการถูกลืม (Right to be Forgotten)",
      "PDPA ข้อมูลส่วนบุคคล",
      "Digital Footprint Audit",
    ],
  },

  // --- Brand Philosophy & Positioning ---
  company: {
    slogan: "Unlink the Past, Architect Your Future",
    approach:
      "Reputation Engineering: เราใช้กระบวนการทางวิศวกรรมข้อมูลเพื่อจัดการอดีตที่บิดเบือน และใช้ศาสตร์การสื่อสารเพื่อสร้างภาพจำใหม่ที่โลกควรเห็น",
    positioning:
      "Silent Guardian: ที่ปรึกษาลับสำหรับผู้บริหาร ดารา และองค์กรชั้นนำ ที่ต้องการความกริบและความชัวร์ในการจัดการข้อมูลดิจิทัล",
  },

  // --- Trust & Technical Integrity ---
  footer: {
    disclaimer:
      "UNLINK-TH ดำเนินการภายใต้ขอบเขตของกฎหมายและสิทธิส่วนบุคคล เราขอสงวนสิทธิ์ไม่รับเคสที่เป็นการละเมิดจริยธรรมหรือข้อมูลที่ส่งผลต่อความปลอดภัยสาธารณะ",
    trustNote:
      "Managed & Engineered by Alongkorl (AEMDEVWEB) | All Operations are 100% Confidential.",
  },
}
