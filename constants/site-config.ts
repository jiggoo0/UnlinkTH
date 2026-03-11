/** @format */

import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "UNLINK-GLOBAL",
  fullName:
    "UNLINK-GLOBAL | ผู้เชี่ยวชาญด้านการจัดการข้อมูลและกู้คืนชื่อเสียงออนไลน์",
  description:
    "ช่วยคุณปลดล็อกปัญหาติดเครดิตบูโร กู้บ้านไม่ผ่าน หรือถูกประจานออนไลน์ ให้คุณกลับมาเริ่มต้นชีวิตใหม่ได้อย่างมั่นใจ ด้วยทีมงานมืออาชีพที่เข้าใจทุกปัญหาของคุณ",

  url: "https://www.unlink-th.com",
  ogImage: "/og/og-main.webp",

  locale: "th_TH",
  language: "th",

  // ------------------------------------------------------------------
  // 👑 FOUNDER & AUTHORITY (E-E-A-T OPTIMIZATION)
  // ------------------------------------------------------------------
  founder: {
    name: "Alongkorl Yomkerd",
    nameTh: "นาย อลงกรณ์ ยมเกิด",
    nickname: "Mza-Marks",
    alias: "9mzm", // Digital Signature
    role: "Digital Privacy Expert & CEO",
    roleTh: "ที่ปรึกษาด้านความเป็นส่วนตัวและชื่อเสียงดิจิทัล",
    description:
      "ผู้เชี่ยวชาญที่มีประสบการณ์ในการช่วยเหลือลูกค้าจัดการข้อมูลที่ละเอียดอ่อนและกู้คืนโอกาสทางการเงิน",
    url: "https://me.aemdevweb.com",
    sameAs: [
      "https://www.facebook.com/share/16jjyWbPyG/",
      "https://www.linkedin.com/in/alongkorl-aemdevweb",
      "https://www.aemdevweb.com",
      "https://me.aemdevweb.com",
      "https://mcp.aemdevweb.com",
    ],
  },

  company: {
    slogan: "ปลดล็อกอดีต เพื่อโอกาสใหม่ในอนาคตของคุณ",
    approach:
      "บริการที่เน้นผลลัพธ์และความลับสูงสุด (Result-Oriented & Discreet)",
    positioning: "ที่ปรึกษาอันดับหนึ่งด้านการจัดการประวัติและชื่อเสียงออนไลน์",
  },

  // ------------------------------------------------------------------
  // 🛠️ INFRASTRUCTURE & DEVELOPER ATTRIBUTION
  // ------------------------------------------------------------------
  developer: {
    name: "9mzm (AemDevWeb)",
    fullname: "9mzm | Advanced Engineering Unit of AemDevWeb",
    url: "https://www.aemdevweb.com",
    role: "Full-stack Infrastructure & Security Architect",
  },

  seo: {
    titleTemplate: "%s | UNLINK-GLOBAL",
    defaultTitle:
      "UNLINK-GLOBAL | แก้เครดิตบูโร ลบประจานออนไลน์ กู้บ้านไม่ผ่านเราช่วยได้",
    defaultDescription:
      "พบปัญหาติดเครดิตบูโร กู้บ้านไม่ผ่าน หรือถูกประจานออนไลน์? UNLINK-GLOBAL ช่วยคุณจัดการข้อมูลอย่างถูกต้องตามกฎหมาย เพื่อให้คุณเริ่มต้นใหม่ได้จริง",
    keywords: [
      "แก้เครดิตบูโร",
      "กู้บ้านไม่ผ่านทำยังไง",
      "ลบประจานออนไลน์",
      "ลบชื่อจากเน็ต",
      "ทำวีซ่าไม่ผ่าน",
      "จัดการชื่อเสียงออนไลน์",
      "กู้เงินธนาคาร",
      "UNLINK-GLOBAL",
      "อลงกรณ์ ยมเกิด",
    ],
  },

  contact: {
    primaryChannel: "LINE Official (ปรึกษาฟรี)",
    lineUrl: "https://lin.ee/a8egw6Y",
    lineId: "@204uuzew",
    phone: "099-999-0000",
    email: "contact@unlink-global.com",
    qrImage: "https://qr-official.line.me/gs/M_204uuzew_BW.png?oat_content=qr",
    note: "เราให้ความสำคัญกับความเป็นส่วนตัวของคุณเป็นอันดับหนึ่ง ปรึกษาได้ทุกกรณีโดยไม่มีการเปิดเผยข้อมูล",
  },

  links: {
    facebook: "https://www.facebook.com/share/16jjyWbPyG/",
    twitter: "https://twitter.com/unlinkth",
    line: "https://lin.ee/a8egw6Y",
  },

  footer: {
    disclaimer:
      "UNLINK-GLOBAL ดำเนินการภายใต้มาตรฐานความปลอดภัยข้อมูลระดับสากล",
    trustNote: "Architected by 9mzm | Powered by AemDevWeb Infrastructure",
    copyright: `© ${new Date().getFullYear()} UNLINK-GLOBAL. International Rights Reserved. (Signature: 9mzm)`,
    links: [
      { title: "นโยบายความเป็นส่วนตัว", href: "/privacy" },
      { title: "นโยบายบรรณาธิการ", href: "/editorial-policy" },
    ],
  },
};
