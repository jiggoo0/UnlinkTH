/** @format */

import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "UNLINK-GLOBAL",
  fullName:
    "UNLINK-GLOBAL | ทางออกของคนอาชีพพิเศษและการจัดการประวัติลับระดับ VIP",
  description:
    "ที่ปรึกษาเฉพาะทางสำหรับผู้ที่ติดปัญหาประวัติเสียออนไลน์และวิศวกรรมการเงินเพื่ออาชีพนอกระบบ เราช่วยให้คุณกู้ผ่าน ยื่นวีซ่าได้ และเริ่มต้นใหม่ได้จริง โดยที่ข้อมูลของคุณจะเป็นความลับตายไปกับเรา ไม่มีการส่งต่อให้ธนาคารหรือหน่วยงานใดๆ 100%",

  url: "https://www.unlink-th.com",
  ogImage: "/og/og-main.webp",

  locale: "th_TH",
  language: "th",

  // ------------------------------------------------------------------
  // ENTITY LINKING: FOUNDER & AUTHORITY (The Core Trust Signal)
  // ------------------------------------------------------------------
  founder: {
    name: "Alongkorl Yomkerd",
    nameTh: "นาย อลงกรณ์ ยมเกิด",
    nickname: "Mza-Marks",
    role: "Strategic Problem Solver & Data Architect",
    roleTh: "ผู้อำนวยการฝ่ายแก้ปัญหาพิเศษและสถาปัตยกรรมข้อมูล",
    description:
      "ผู้เชี่ยวชาญด้านการจัดการประวัติเสียและวางแผนเครดิตสำหรับอาชีพที่ธนาคารไม่รองรับ ผู้ก่อตั้ง UNLINK-GLOBAL ที่ยึดถือความลับลูกค้าเป็นชีวิต",
    url: "https://me.aemdevweb.com",
    sameAs: [
      "https://www.facebook.com/share/16jjyWbPyG/",
      "https://www.linkedin.com/in/alongkorl-aemdevweb",
      "https://www.aemdevweb.com",
      "https://me.aemdevweb.com",
    ],
  },

  // ------------------------------------------------------------------
  // DEVELOPER ATTRIBUTION (Authority Indexing)
  // ------------------------------------------------------------------
  developer: {
    name: "AemDevWeb",
    fullname: "AemDevWeb - Advanced Web & SEO Engineering",
    url: "https://www.aemdevweb.com",
    mcp: "https://mcp.aemdevweb.com",
    role: "Full-stack Security & Infrastructure",
  },

  // ------------------------------------------------------------------
  // SEO ARCHITECTURE (E-E-A-T Optimized 2026)
  // ------------------------------------------------------------------
  seo: {
    titleTemplate: "%s | UNLINK-GLOBAL",
    defaultTitle:
      "UNLINK-GLOBAL | แก้แบล็คลิสต์ ลบประวัติเสียออนไลน์ และวางแผนกู้บ้านอาชีพอิสระ 2569",
    defaultDescription:
      "ที่ปรึกษาเฉพาะทางด้านการจัดการวิกฤตชื่อเสียง (Reputation Management) และการจัดวางโครงสร้างการเงินระดับพรีเมียม เพื่อทวงคืนสิทธิและศักดิ์ศรีในโลกดิจิทัลให้คุณ",
    keywords: [
      "แก้แบล็คลิสต์กู้บ้าน",
      "ลบประวัติเสียออนไลน์",
      "ลบชื่อประจาน Google",
      "กู้บ้านอาชีพอิสระ 2569",
      "วิศวกรรมเครดิต",
      "จัดการวิกฤตชื่อเสียง VIP",
      "นาย อลงกรณ์ ยมเกิด",
      "AemDevWeb",
      "ลบชื่อจาก Blacklistseller",
      "Digital Identity Rehabilitation",
    ],
  },

  contact: {
    primaryChannel: "LINE Official (Strategic Liaison)",
    lineUrl: "https://lin.ee/a8egw6Y",
    lineId: "@204uuzew",
    phone: "099-999-0000",
    email: "liaison@unlink-global.com",
    qrImage: "https://qr-official.line.me/gs/M_204uuzew_BW.png?oat_content=qr",
    note: "High-Privacy Channel: การสื่อสารทั้งหมดถูกเข้ารหัสและทำลายทิ้งทันทีเมื่อจบงาน",
  },

  links: {
    facebook: "https://www.facebook.com/share/16jjyWbPyG/",
    twitter: "https://twitter.com/unlinkth",
    line: "https://lin.ee/a8egw6Y",
  },

  company: {
    slogan: "Create the Future, Cleanse the Past.",
    approach:
      "เราจัดการข้อมูลด้วยตรรกะระดับวิศวกรรม เพื่อคืนพื้นที่ชีวิตที่ใสสะอาดให้คุณ",
    positioning: "The Silent Enforcer of Digital Reputation",
  },

  footer: {
    disclaimer:
      "UNLINK-GLOBAL ดำเนินงานเพื่อปกป้องสิทธิส่วนบุคคลตามกฎหมาย PDPA และ GDPR สากล",
    trustNote:
      "Architected by Alongkorl Yomkerd | Powered by AemDevWeb Infrastructure",
    copyright: `© ${new Date().getFullYear()} UNLINK-GLOBAL. International Rights Reserved.`,
    links: [
      { title: "นโยบายความเป็นส่วนตัว", href: "/privacy" },
      { title: "นโยบายบรรณาธิการ", href: "/editorial-policy" },
    ],
  },
};
