import { SiteConfig } from "@/types"

/**
 * UNLINK-TH | Global Configuration Matrix (2026 Optimized)
 * ศูนย์กลางการกำหนดค่า Metadata, SEO, และช่องทางสื่อสารสำหรับ www.unlink-th.com
 * ยุทธศาสตร์: Action-Oriented (เน้นผลลัพธ์) + Search Intent (ตรงใจคนค้นหา)
 */
export const siteConfig: SiteConfig = {
  name: "UNLINK-TH",
  description:
    "บริการรับลบข่าวเสียและข้อมูลออนไลน์แบบถาวร โดยผู้เชี่ยวชาญ De-indexing กู้คืนชื่อเสียง ลบกระทู้ Pantip ลบรูปหลุด และประวัติอาชญากรรมออนไลน์ ด้วยวิธีทางเทคนิคและกฎหมาย PDPA ปลอดภัย 100%",

  url: "https://www.unlink-th.com",
  ogImage: "/images/og-main.png",

  locale: "th_TH",
  language: "th",

  // --- Operational Liaison & Security Protocol (ข้อมูลติดต่อ) ---
  contact: {
    primaryChannel: "LINE Official",
    lineUrl: "https://lin.ee/bWcwyir",
    lineId: "@204uuzew",
    phone: "099-999-8989",
    email: "contact@unlink-th.com",
    note: "เราเก็บความลับของคุณเป็นอันดับ 1 (Non-Disclosure Policy) ข้อมูลจะถูกทำลายทันทีหลังประเมินงาน",
  },

  // --- Network Linkage (ช่องทางโซเชียลมีเดีย) ---
  links: {
    facebook: "https://www.facebook.com/share/1DDfxWEdt5/",
    twitter: "https://twitter.com/unlinkth",
    line: "https://lin.ee/bWcwyir",
  },

  // --- SEO Optimization & Search Engine Strategy (AEO/SGE Ready) ---
  seo: {
    titleTemplate: "%s | UNLINK - รับลบข้อมูลออนไลน์ กู้ชื่อเสียงดิจิทัล",
    defaultTitle:
      "UNLINK | รับลบลิงก์ Google ลบข่าวเสีย ลบกระทู้ และจัดการประวัติออนไลน์",
    defaultDescription:
      "ปรึกษาฟรี! บริการรับลบข่าว ลบลิงก์ Google ลบรูปหลุด คลิปวีดีโอ และกระทู้หมิ่นประมาท (Pantip/Twitter/Facebook) กู้คืนชื่อเสียงธุรกิจและบุคคลด้วยทีมวิศวกรข้อมูลและนักกฎหมาย PDPA เห็นผลจริง",
    keywords: [
      // High-Conversion Action Keywords
      "รับลบข่าว",
      "ลบลิงก์กูเกิล",
      "ลบประวัติออนไลน์",
      "รับจ้างลบกระทู้",
      "ลบชื่อออกจาก Google",

      // Tactical Platform Specific
      "ลบกระทู้ Pantip",
      "ลบรีวิว Google Maps",
      "แจ้งลบคลิปหลุด",
      "ลบดราม่า Twitter",

      // Risk-Mitigation & Legal Compliance
      "ลบประวัติอาชญากรรมออนไลน์",
      "แก้ Blacklist ออนไลน์",
      "สิทธิในการถูกลืม",
      "ปรึกษา PDPA",
      "Digital Footprint Removal",

      // Technical Authority
      "De-indexing Service Thailand",
      "บริษัทบริหารชื่อเสียง",
    ],
  },

  // --- Corporate Philosophy & Technical Positioning ---
  company: {
    approach:
      "Result-Oriented: เราไม่ใช่นักการตลาด แต่คือ 'ผู้เชี่ยวชาญด้านการลบ' (Remover) ที่ใช้เทคนิคเจาะลึกระดับ Metadata และข้อกฎหมาย เพื่อผลลัพธ์ที่รวดเร็วและตรวจสอบได้",
    positioning:
      "Your Silent Guardian: เหมาะสำหรับผู้บริหาร ดารา และเจ้าของธุรกิจ ที่ต้องการเคลียร์ประวัติออนไลน์อย่างเงียบเชียบและปลอดภัยที่สุด",
  },

  // --- Legal Disclaimer & Technical Integrity ---
  footer: {
    disclaimer:
      "การดำเนินการของ UNLINK เป็นการใช้สิทธิตามกฎหมายและมาตรการทางเทคนิคเพื่อปกป้องความเป็นส่วนตัว ไม่รับลบข้อมูลที่เป็นประโยชน์ต่อสาธารณะตามคำสั่งศาล",
    trustNote:
      "Technical Assessment: เราประเมิน 'โอกาสสำเร็จ' ให้คุณทราบก่อนเริ่มงาน หากทำไม่ได้ เราแจ้งตามตรง ไม่เลี้ยงไข้",
  },
}
