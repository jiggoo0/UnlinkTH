/** @format */

import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "UNLINK-TH.",
  fullName:
    "UNLINK-TH. | ที่ปรึกษาปั้นโปรไฟล์การเงินและกู้คืนชื่อเสียงสำหรับสายบินตรง",
  description:
    "อดีตพลาด... เริ่มใหม่ได้! UNLINK-TH. ช่วยสายบินปั้นเอกสารการเงิน แก้บูโร และลบประวัติเสียออนไลน์ ให้คุณกลับมากู้บ้านผ่านชัวร์ มีที่ยืนในสังคมอย่างสง่างาม",

  url: "https://www.unlink-th.com",
  ogImage: "/og/og-main.webp",

  locale: "th_TH",
  language: "th",

  // ------------------------------------------------------------------
  // 👑 FOUNDER & AUTHORITY (เน้นความเป็นมืออาชีพที่เข้าถึงง่าย)
  // ------------------------------------------------------------------
  founder: {
    name: "Alongkorl Yomkerd",
    nameTh: "นาย อลงกรณ์ ยมเกิด",
    nickname: "Mza-Marks",
    alias: "9mzm", 
    role: "Digital Privacy Expert & CEO",
    roleTh: "ที่ปรึกษาปั้นโปรไฟล์การเงินและจัดการสิทธิข้อมูลดิจิทัล",
    description:
      "เบื้องหลังความสำเร็จของสายบินและคนทำงานต่างประเทศที่ต้องการกู้บ้านแต่ติดปัญหาเรื่องประวัติ ด้วยเทคนิคการจัดการ Data ที่ธนาคารยอมรับ",
    url: "https://me.aemdevweb.com",
    sameAs: [
      "https://www.facebook.com/share/16jjyWbPyG/",
      "https://www.linkedin.com/in/alongkorl-aemdevweb",
      "https://www.aemdevweb.com",
    ],
  },

  company: {
    slogan: "UNLINK-TH. | เคลียร์อดีตให้ใส ปั้นอนาคตให้กู้ผ่านชัวร์",
    approach:
      "ทำจริง เห็นผลไว (Fast Track) | ความลับสุดยอด (100% Confidentiality)",
    positioning: "ที่ปรึกษาเบอร์ 1 ของคนทำงานต่างประเทศที่อยากมีบ้านในไทย",
  },

  developer: {
    name: "9mzm (AemDevWeb)",
    fullname: "9mzm | Advanced Engineering Unit of AemDevWeb",
    url: "https://www.aemdevweb.com",
    role: "Full-stack Infrastructure & Security Architect",
  },

  // ------------------------------------------------------------------
  // 🎯 SEO & KEYWORDS (ปรับจูนเพื่อสายบินและคนปั้นโปรไฟล์)
  // ------------------------------------------------------------------
  seo: {
    titleTemplate: "UNLINK-TH. | %s",
    defaultTitle:
      "UNLINK-TH. | ปั้นเอกสารกู้บ้าน & สายบินทำงานต่างประเทศ แก้บูโรให้เราดูแล",
    defaultDescription:
      "ติดบูโร กู้บ้านไม่ผ่าน หรือโดนประจาน? UNLINK-TH. ช่วยสายบินปั้นโปรไฟล์การเงินใหม่ เคลียร์ประวัติเสียออนไลน์ เริ่มต้นชีวิตใหม่แบบใสสะอาด กู้ผ่านจริง 100% ปรึกษาเลย",
    keywords: [
      "UNLINK-TH",
      "ปั้นเอกสารกู้บ้าน สายบิน",
      "แก้เครดิตบูโร 2569",
      "สาวสายฃานตรงบินต่างประเทศ",
      "ทำงานต่างประเทศกู้บ้านยังไง",
      "วิธีลบชื่อประจานออนไลน์",
      "ลบประวัติเสียกู้บ้าน",
      "ฟื้นฟูสเตทเม้นท์กู้เงิน",
      "อลงกรณ์ ยมเกิด",
      "แก้บูโรสายบินตรง",
    ],
  },

  contact: {
    primaryChannel: "LINE Official (ปรึกษาลับเฉพาะทาง)",
    lineUrl: "https://lin.ee/a8egw6Y",
    lineId: "@204uuzew",
    phone: "099-999-0000",
    email: "contact@unlink-global.com",
    qrImage: "https://qr-official.line.me/gs/M_204uuzew_BW.png?oat_content=qr",
    note: "เราเข้าใจทุกความเหนื่อยของคุณ ข้อมูลทุกอย่างจะถูกเก็บเป็นความลับ เพื่อให้คุณเริ่มต้นใหม่ได้อย่างสบายใจที่สุด",
  },

  links: {
    facebook: "https://www.facebook.com/share/16jjyWbPyG/",
    twitter: "https://twitter.com/unlinkth",
    line: "https://lin.ee/a8egw6Y",
  },

  footer: {
    disclaimer:
      "UNLINK-TH. ดำเนินงานโดยผู้เชี่ยวชาญภายใต้ระบบความปลอดภัยข้อมูลขั้นสูง",
    trustNote: "Architected by 9mzm | ระบบจัดการข้อมูลที่มั่นคงและปลอดภัย",
    copyright: `© ${new Date().getFullYear()} UNLINK-TH. | คืนชีวิตใหม่ให้โปรไฟล์การเงินของคุณ (Signature: 9mzm)`,
    links: [
      { title: "นโยบายความเป็นส่วนตัว", href: "/privacy" },
      { title: "ขั้นตอนปั้นโปรไฟล์สำหรับสายบิน", href: "/flying-path" },
    ],
  },
};
