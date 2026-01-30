/** @format */

import { SiteConfig } from "@/types"

export const siteConfig: SiteConfig = {
  name: "UNLINK-TH",
  fullName: "มืออาชีพด้านการจัดการวิกฤตชื่อเสียงและภาพลักษณ์",
  description:
    "เปลี่ยนวิกฤตให้เป็นโอกาส ลบทุกประวัติที่อยากให้หายไป พร้อมวางแผนสร้างภาพลักษณ์ใหม่ให้ดูดีมีระดับ เพื่อการยอมรับครั้งใหม่ที่ดียิ่งกว่า",

  url: "https://www.unlink-th.com",
  ogImage: "/images/og-main.png",

  locale: "th_TH",
  language: "th",

  // ------------------------------------------------------------------
  // ENTITY LINKING: FOUNDER & AUTHORITY (Bilingual Identity for Google)
  // ------------------------------------------------------------------
  founder: {
    name: "Alongkorl Yomkerd",
    nameTh: "อลงกรณ์ ยมเกิด",
    role: "Technical Data Architect",
    roleTh: "สถาปนิกข้อมูลทางเทคนิค",
    url: "https://me.aemdevweb.com",
    sameAs: [
      "https://www.aemdevweb.com",
      "https://www.linkedin.com/in/alongkorl-aemdevweb",
    ],
  },

  // ------------------------------------------------------------------
  // STRATEGY: DARK & BRIGHT (ลบอดีต vs สร้างอนาคต)
  // ------------------------------------------------------------------
  hero: {
    leftSide: {
      tone: "dark",
      headline: "จบทุกดราม่าที่เคยแพ้",
      subHeadline: "ลบประวัติเสียและข้อมูลที่ทำร้ายคุณ",
      action: "ลบประวัติเสีย",
    },
    rightSide: {
      tone: "bright",
      headline: "สร้างกระแสใหม่ที่น่าชื่นชม",
      subHeadline: "ปั้นภาพลักษณ์ใหม่ให้ดูดีมีระดับ",
      action: "สร้างภาพลักษณ์",
    },
  },

  // ------------------------------------------------------------------
  // SECURE LIAISON (ช่องทางติดต่อความลับสูง)
  // ------------------------------------------------------------------
  contact: {
    primaryChannel: "LINE Official (VIP)",
    lineUrl: "https://lin.ee/bWcwyir",
    lineId: "@204uuzew",
    phone: "099-999-8989",
    email: "contact@unlink-th.com",
    note: "Non-Disclosure Policy: ข้อมูลการสนทนาทั้งหมดถูกเข้ารหัสและทำลายทันทีหลังการประเมินเพื่อความปลอดภัยสูงสุดของลูกค้า",
  },

  links: {
    facebook: "https://www.facebook.com/share/1DDfxWEdt5/",
    twitter: "https://twitter.com/unlinkth",
    line: "https://lin.ee/bWcwyir",
  },

  // ------------------------------------------------------------------
  // SEO ARCHITECTURE
  // ------------------------------------------------------------------
  seo: {
    titleTemplate: "%s | UNLINK-TH Reputation Management",
    defaultTitle:
      "UNLINK-TH | บริการลบข่าวเสีย ลบประวัติออนไลน์ และสร้างภาพลักษณ์ใหม่",
    defaultDescription:
      "บริการจัดการชื่อเสียงครบวงจร รับลบลิงก์ข่าวเสีย กระทู้โจมตี และข้อมูล PDPA พร้อมบริการ Personal Branding สร้างตัวตนใหม่ที่น่าเชื่อถือ ปรึกษาฟรี รักษาความลับ 100%",
    keywords: [
      // SOLUTION: DELETE (ลบ)
      "รับลบข่าวเสีย",
      "ลบประวัติ Google",
      "ลบกระทู้ Pantip",
      "ลบรูปหลุด",
      "แจ้งลบรีวิว Google Maps",
      "PDPA ลบข้อมูลส่วนบุคคล",

      // SOLUTION: BUILD (สร้าง)
      "สร้างภาพลักษณ์ผู้บริหาร",
      "Personal Branding",
      "แก้ข่าวเสีย",
      "รับมือทัวร์ลง",
      "SEO สายขาว",
      "Reputation Management Thailand",

      // BRAND BRANDING
      "UNLINK-TH",
      "สิทธิในการเริ่มต้นใหม่",
    ],
  },

  // ------------------------------------------------------------------
  // BRAND PHILOSOPHY
  // ------------------------------------------------------------------
  company: {
    slogan: "จบทุกดราม่าที่เคยแพ้ สร้างกระแสใหม่ที่น่าชื่นชม",
    approach:
      "Strategic Reputation Renewal: เราไม่เพียงแค่ลบอดีต แต่เราออกแบบอนาคตดิจิทัลของคุณใหม่ ด้วยกลยุทธ์ที่ผสมผสานเทคนิคการลบข้อมูล (Deletion) และการสร้างสรรค์ตัวตน (Creation) อย่างสมดุล",
    positioning:
      "The Crisis Solver: ที่พึ่งสุดท้ายสำหรับผู้ที่ต้องการจบปัญหาชื่อเสียงออนไลน์อย่างมืออาชีพ และต้องการกลับมายืนในสังคมได้อย่างสง่างาม",
  },

  footer: {
    disclaimer:
      "UNLINK-TH ดำเนินการภายใต้ขอบเขตของกฎหมายและสิทธิส่วนบุคคล มุ่งเน้นการให้โอกาสและการเริ่มต้นใหม่ เราขอสงวนสิทธิ์ไม่รับเคสที่ขัดต่อความมั่นคงสาธารณะ",
    trustNote:
      "Managed & Engineered by Alongkorl (AEMDEVWEB) | All Operations are 100% Confidential.",
  },
}
