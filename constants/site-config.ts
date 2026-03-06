/** @format */

import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "UNLINK-GLOBAL",
  fullName: "Unlink-Global | International Data & Identity Architecture",
  description:
    "A premier consulting firm specializing in digital identity rehabilitation, capital access engineering, and strategic data management. We restore the 'right to start over' through professional technical infrastructure.",

  url: "https://www.unlink-global.com",
  ogImage: "/og/og-main.webp",

  locale: "th_TH",
  language: "th",

  // ------------------------------------------------------------------
  // ENTITY LINKING: FOUNDER & AUTHORITY (Private Metadata for Google Trust)
  // ------------------------------------------------------------------
  founder: {
    name: "Alongkorl Yomkerd",
    nameTh: "อลงกรณ์ ยมเกิด",
    nickname: "Mza-Marks",
    role: "Chief Technology & Data Architect",
    roleTh: "ผู้อำนวยการฝ่ายสถาปัตยกรรมข้อมูลและเทคโนโลยี",
    url: "https://me.aemdevweb.com",
    sameAs: [
      "https://www.facebook.com/share/16jjyWbPyG/",
      "https://www.linkedin.com/in/alongkorl-aemdevweb",
    ],
  },

  // ------------------------------------------------------------------
  // DEVELOPER ATTRIBUTION (Authority Indexing)
  // ------------------------------------------------------------------
  developer: {
    name: "AemDevWeb",
    fullname: "AemDevWeb - Professional Full-stack & SEO Engineering",
    url: "https://www.aemdevweb.com",
    mcp: "https://mcp.aemdevweb.com",
    role: "System Architecture & Security Infrastructure",
  },

  // ------------------------------------------------------------------
  // SECURE LIAISON (Private Channels)
  // ------------------------------------------------------------------
  contact: {
    primaryChannel: "LINE Official (ปรึกษาส่วนตัว)",
    lineUrl: "https://lin.ee/a8egw6Y",
    lineId: "@204uuzew",
    phone: "099-999-0000",
    email: "consult@unlink-global.com",
    qrImage: "https://qr-official.line.me/gs/M_204uuzew_BW.png?oat_content=qr",
    note: "ช่องทางติดต่อที่ปลอดภัยที่สุด: เราเน้นความเป็นส่วนตัวระดับสูงสุด ข้อมูลการคุยทั้งหมดจะจบที่ LINE ไม่มีการเก็บลงฐานข้อมูลใดๆ ทั้งสิ้น",
  },

  links: {
    facebook: "https://www.facebook.com/share/16jjyWbPyG/",
    twitter: "https://twitter.com/unlinkth",
    line: "https://lin.ee/a8egw6Y",
  },

  // ------------------------------------------------------------------
  // SEO ARCHITECTURE (E-E-A-T Optimized)
  // ------------------------------------------------------------------
  seo: {
    titleTemplate: "%s | UNLINK-GLOBAL",
    defaultTitle:
      "UNLINK-GLOBAL | แก้ปัญหาแบล็คลิสต์ ลบประวัติเสียออนไลน์ และวางแผนการเงิน 2569",
    defaultDescription:
      "ที่ปรึกษาผู้เชี่ยวชาญในการแก้ปัญหาประวัติเสียออนไลน์ การเข้าถึงทุนสำหรับอาชีพอิสระ และการจัดการข้อมูลส่วนบุคคลภายใต้ความลับสูงสุด",
    keywords: [
      "แก้ปัญหาแบล็คลิสต์",
      "ลบประวัติเสียออนไลน์",
      "กู้บ้านอาชีพอิสระ",
      "ลบรูปประจาน",
      "ใช้สิทธิ์ PDPA",
      "กู้คืนชื่อเสียงออนไลน์",
      "UNLINK-GLOBAL",
      "อลงกรณ์ ยมเกิด",
    ],
  },

  // ------------------------------------------------------------------
  // BRAND PHILOSOPHY: THE SHARP ENFORCER (INTERNAL LOGIC)
  // ------------------------------------------------------------------
  company: {
    slogan: "จัดการข้อมูลให้เป็นระบบ เพิ่มโอกาสใหม่ให้ชีวิต",
    approach:
      "เราแก้ปัญหาข้อมูลที่ต้นตอ เพื่อคืนโอกาสที่ควรจะเป็นให้คุณอีกครั้ง ด้วยวิธีการที่ถูกต้องและปลอดภัย",
    positioning:
      "ที่ปรึกษาที่นิ่ง สุขุม และเฉียบขาด เปรียบเสมือนห้องนิรภัยที่ปกป้องความลับของคุณ",
  },

  footer: {
    disclaimer:
      "UNLINK-GLOBAL ดำเนินงานเพื่อปกป้องสิทธิความเป็นส่วนตัวและช่วยสร้างจุดเริ่มต้นใหม่ที่มั่นคง",
    trustNote:
      "Technical Engineering & SEO Management by Alongkorl (Mza-Marks) | AEMDEVWEB Operations.",
    copyright: `© ${new Date().getFullYear()} UNLINK-GLOBAL. All Rights Reserved.`,
    links: [
      { title: "นโยบายความเป็นส่วนตัว", href: "/privacy" },
      { title: "เงื่อนไขการใช้บริการ", href: "/terms" },
    ],
  },

  hero: {
    headlineLine1: "ลบประวัติเสีย",
    headlineLine2: "สร้างอนาคตใหม่",
    description:
      "จัดการชื่อเสียงออนไลน์และจัดวางโครงสร้างตัวตนดิจิทัลของคุณให้ถูกต้องและน่าเชื่อถือ",
    ctaPrimary: { label: "ปรึกษาฟรีผ่าน LINE", href: "https://lin.ee/a8egw6Y" },
    ctaSecondary: { label: "ขั้นตอนการทำงาน", href: "#protocol" },
    stats: [
      { label: "อัตราความสำเร็จ", value: "98%" },
      { label: "ความลับสูงสุด", value: "100%" },
    ],
    leftSide: {
      tone: "dark",
      headline: "ล้างประวัติเดิม",
      subHeadline: "ลบสิ่งที่ฉุดรั้งคุณไว้",
      action: "เริ่มเลย",
    },
    rightSide: {
      tone: "bright",
      headline: "สร้างชีวิตใหม่",
      subHeadline: "สร้างตัวตนที่แข็งแกร่ง",
      action: "เริ่มต้น",
    },
  },

  leadCapture: {
    title: "Initiate Secure Consultation",
    description: "Your data is encrypted and handled with absolute discretion.",
    badge: "Confidential Channel",
    successTitle: "Transmission Received",
    successDescription:
      "An operative will contact you via secure channel shortly.",
    buttonText: "Transmit Request",
    fields: {
      name: {
        label: "Alias / Identifier",
        placeholder: "How should we address you?",
      },
      email: { label: "Secure Email", placeholder: "contact@proton.me" },
      company: { label: "Objective", placeholder: "Brief nature of request" },
    },
  },

  pricing: {
    badge: "Service Fees",
    title: "Transparent Investment",
    description: "Architectural solutions with clearly defined scopes.",
    tiers: [
      {
        name: "Standard Assessment",
        price: "Complimentary",
        description: "Basic review",
        period: "One-time",
        highlighted: false,
        cta: "Start",
        features: ["Initial Audit", "Vulnerability Check"],
      },
      {
        name: "Strategic Intervention",
        price: "Custom",
        description: "Full execution",
        period: "Project-based",
        highlighted: true,
        cta: "Consult",
        features: ["Full Cleanup", "SEO Suppression", "Legal Notices"],
      },
    ],
  },

  portfolio: {
    badge: "Verified Intelligence",
    title: "Operational Records",
    description:
      "บันทึกปฏิบัติการจริงในการกู้คืนอัตลักษณ์และจัดวางโครงสร้างข้อมูลภายใต้สถานการณ์วิกฤต",
    items: [
      {
        title: "Global Income Alignment",
        category: "FINANCIAL",
        image: "/images/cases/case-data-fusion.webp",
        span: "md:col-span-2",
        aspect: "aspect-[2/1]",
      },
      {
        title: "Trust Reconstruction",
        category: "IMMIGRATION",
        image: "/images/cases/case-preview-vault.webp",
        span: "md:col-span-1",
        aspect: "aspect-square",
      },
      {
        title: "Credit Engineering",
        category: "FINANCIAL",
        image: "/images/cases/case-finance-jet.webp",
        span: "md:col-span-1",
        aspect: "aspect-square",
      },
    ],
  },

  protocols: {
    badge: "วิธีการทำงาน",
    title: "ขั้นตอนการปฏิบัติงาน",
    description:
      "กระบวนการจัดการข้อมูลเชิงลึกระดับวิศวกรรม เพื่อการกู้คืนสถานะและสิทธิในโลกดิจิทัลของคุณอย่างเป็นระบบ",
    items: [
      {
        title: "การตรวจสอบข้อมูล",
        description:
          "ปฏิบัติการสแกนและตรวจสอบร่องรอยดิจิทัล (Digital Footprint) ของคุณในทุกมิติอย่างละเอียด",
        features: ["ตรวจสอบประวัติออนไลน์", "เฝ้าระวัง Dark Web", "สแกนข้อมูลเชิงลึก"],
      },
      {
        title: "การจัดการระงับข้อมูล",
        description:
          "มาตรการระงับและถอดถอนข้อมูลที่ส่งผลเสียต่อชื่อเสียงและตัวตนของคุณออกจากระบบ",
        features: [
          "ใช้สิทธิขอให้ลบข้อมูล",
          "ลดการมองเห็นข้อมูลเสีย",
          "ดำเนินการทางกฎหมายดิจิทัล",
        ],
      },
      {
        title: "การฟื้นฟูชื่อเสียง",
        description:
          "การสร้างและจัดวางโครงสร้างตัวตนใหม่ให้มีความน่าเชื่อถือและภาพลักษณ์ที่ดีที่สุด",
        features: ["ปรับแต่งโปรไฟล์ใหม่", "สร้างความน่าเชื่อถือ", "วางแผนสเตทเม้นท์"],
      },
      {
        title: "การเฝ้าระวังต่อเนื่อง",
        description: "ระบบติดตามและป้องกันความปลอดภัยของข้อมูลส่วนตัวในระยะยาว",
        features: [
          "ติดตามผลต่อเนื่อง",
          "ลดความเสี่ยงข้อมูลใหม่",
          "ป้องกันความเป็นส่วนตัว",
        ],
      },
    ],
  },
};
