/** @format */

import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "UNLINK-TH.",
  fullName:
    "UNLINK-TH. | ทางออกคนกู้ไม่ผ่าน ปลดล็อคบูโร และลบชื่อประจานออนไลน์",
  description:
    "เบื่อไหม? กู้บ้านไม่ผ่านเพราะติดบูโร หรือโดนประจานจนเสียคน UNLINK-TH. ช่วยคุณเริ่มชีวิตใหม่ด้วยวิธีที่ถูกต้อง ได้ผลจริง เพื่อให้คุณกลับมากู้สินเชื่อและมีชื่อเสียงที่สะอาดอีกครั้ง",

  url: "https://www.unlink-th.com",
  ogImage: "/og/og-main.webp",

  locale: "th_TH",
  language: "th",

  // ------------------------------------------------------------------
  // 👑 FOUNDER & AUTHORITY (เน้นความจริงใจ และเป็นที่พึ่งได้จริง)
  // ------------------------------------------------------------------
  founder: {
    name: "Alongkorl Yomkerd",
    nameTh: "นาย อลงกรณ์ ยมเกิด",
    nickname: "Mza-Marks",
    alias: "9mzm", 
    role: "Digital Privacy Expert & CEO",
    roleTh: "ที่ปรึกษาแก้ปัญหาหนี้เสียและกู้คืนชื่อเสียงออนไลน์",
    description:
      "มือหนึ่งเรื่องการเจรจาและจัดการข้อมูลเครดิต ช่วยคนกู้ไม่ผ่านให้มีบ้าน และช่วยคนโดนประจานให้กลับมาเดินในสังคมได้อย่างภาคภูมิใจ",
    url: "https://me.aemdevweb.com",
    sameAs: [
      "https://www.facebook.com/share/16jjyWbPyG/",
      "https://www.linkedin.com/in/alongkorl-aemdevweb",
      "https://www.aemdevweb.com",
    ],
  },

  company: {
    slogan: "UNLINK-TH. | ลบอดีตที่พลาด... เพื่อโอกาสกู้บ้านและเริ่มชีวิตใหม่",
    approach:
      "เน้นผลลัพธ์ ไม่ขายฝัน (Real Results) | เก็บความลับลูกค้าเป็นที่หนึ่ง (Top Secret)",
    positioning: "ที่ปรึกษาอันดับ 1 ของคนอยากกู้บ้านและอยากลบประวัติเสีย",
  },

  developer: {
    name: "9mzm (AemDevWeb)",
    fullname: "9mzm | Advanced Engineering Unit of AemDevWeb",
    url: "https://www.aemdevweb.com",
    role: "Full-stack Infrastructure & Security Architect",
  },

  // ------------------------------------------------------------------
  // 🎯 SEO & KEYWORDS (ใช้คำที่คนทั่วไปใช้ค้นหาเวลาเดือดร้อน)
  // ------------------------------------------------------------------
  seo: {
    titleTemplate: "UNLINK-TH. | %s",
    defaultTitle:
      "UNLINK-TH. | แก้บูโร 2569 ลบประจานออนไลน์ กู้บ้านไม่ผ่านเราช่วยได้",
    defaultDescription:
      "ติดแบล็คลิสต์ กู้บ้านไม่ผ่าน หรือโดนโพสต์ด่าประจาน? UNLINK-TH. ช่วยฟื้นฟูประวัติการเงินและลบชื่อเสียบนเน็ตแบบเนียนๆ เริ่มต้นใหม่ได้จริง ไม่ต้องรอนาน ปรึกษาเลย!",
    keywords: [
      "UNLINK-TH",
      "แก้เครดิตบูโร 2569",
      "กู้บ้านไม่ผ่านทำยังไง",
      "ติดแบล็คลิสต์ซื้อบ้านได้ไหม",
      "วิธีลบชื่อประจาน",
      "โดนโพสต์ด่าลบยังไง",
      "ลบประวัติเสียกู้บ้าน",
      "อลงกรณ์ ยมเกิด",
      "แก้บูโรที่ไหนดี",
    ],
  },

  contact: {
    primaryChannel: "LINE Official (ปรึกษาฟรี ไม่ต้องเกรงใจ)",
    lineUrl: "https://lin.ee/a8egw6Y",
    lineId: "@204uuzew",
    phone: "099-999-0000",
    email: "contact@unlink-global.com",
    qrImage: "https://qr-official.line.me/gs/M_204uuzew_BW.png?oat_content=qr",
    note: "เราเข้าใจคนเป็นหนี้และคนเดือดร้อน ข้อมูลของคุณจะปลอดภัยที่สุด ไม่มีการเปิดเผยให้ใครรู้แน่นอน",
  },

  links: {
    facebook: "https://www.facebook.com/share/16jjyWbPyG/",
    twitter: "https://twitter.com/unlinkth",
    line: "https://lin.ee/a8egw6Y",
  },

  footer: {
    disclaimer:
      "UNLINK-TH. ทำงานถูกต้องตามกฎหมายและรักษาความปลอดภัยข้อมูลส่วนบุคคลอย่างเข้มงวด",
    trustNote: "Architected by 9mzm | ระบบปลอดภัย มั่นใจได้ 100%",
    copyright: `© ${new Date().getFullYear()} UNLINK-TH. | คืนโอกาสให้คนไทยเริ่มต้นใหม่ (Signature: 9mzm)`,
    links: [
      { title: "นโยบายความเป็นส่วนตัว", href: "/privacy" },
      { title: "ขั้นตอนกู้บ้านสำหรับคนติดบูโร", href: "/how-to-fix" },
    ],
  },
};
