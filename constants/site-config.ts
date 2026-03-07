/** @format */

import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "UNLINK-GLOBAL",
  fullName: "Unlink-Global | International Data & Identity Architecture",
  description:
    "A premier consulting firm specializing in digital identity rehabilitation, capital access engineering, and strategic data management. We restore the 'right to start over' through professional technical infrastructure.",

  url: "https://www.unlink-th.com",
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
      "UNLINK-GLOBAL | แก้แบล็คลิสต์ ลบประวัติเสียออนไลน์ และวางแผนกู้บ้านอาชีพอิสระ 2569",
    defaultDescription:
      "ที่ปรึกษาอันดับ 1 ด้านการกู้คืนชื่อเสียงออนไลน์ (Reputation Management) และการวางโครงสร้างการเงินเพื่อการกู้บ้าน-ธุรกิจ สำหรับอาชีพอิสระภายใต้ความลับสูงสุด",
    keywords: [
      "แก้แบล็คลิสต์กู้บ้าน",
      "ลบประวัติเสียออนไลน์",
      "ลบชื่อประจาน",
      "กู้บ้านอาชีพอิสระ 2569",
      "วางแผนสเตทเม้นท์",
      "วิศวกรรมเครดิต",
      "ลบข้อมูลส่วนตัวจาก Google",
      "UNLINK-GLOBAL",
      "อลงกรณ์ ยมเกิด",
      "จัดการวิกฤตชื่อเสียง",
    ],
  },

  // ------------------------------------------------------------------
  // BRAND PHILOSOPHY: THE SHARP ENFORCER (INTERNAL LOGIC)
  // ------------------------------------------------------------------
  company: {
    slogan: "คืนชีวิตที่ใสสะอาด จัดการประวัติออนไลน์ให้เป็นระบบ",
    approach:
      "เรารู้ว่า 'ชื่อเสียง' สำคัญแค่ไหน เราจึงช่วยคุณแก้ปัญหาที่ต้นตอ เพื่อคืนโอกาสที่คุณควรได้รับอีกครั้ง ด้วยวิธีการที่ถูกต้องและปลอดภัยที่สุด",
    positioning:
      "ที่ปรึกษาลับส่วนตัว ที่ช่วยคุณจัดการทุกปัญหาประวัติออนไลน์อย่างเด็ดขาดและสุขุม",
  },

  footer: {
    disclaimer:
      "UNLINK-GLOBAL ดำเนินงานเพื่อปกป้องสิทธิส่วนบุคคลและช่วยสร้างจุดเริ่มต้นใหม่ที่มั่นคงให้กับทุกคน",
    trustNote:
      "ดูแลระบบและวางแผนกลยุทธ์โดยทีมผู้เชี่ยวชาญด้านข้อมูลและกฎหมายดิจิทัล",
    copyright: `© ${new Date().getFullYear()} UNLINK-GLOBAL. สงวนลิขสิทธิ์ตามกฎหมาย`,
    links: [
      { title: "นโยบายความเป็นส่วนตัว", href: "/privacy" },
      { title: "เงื่อนไขการใช้บริการ", href: "/terms" },
    ],
  },

  hero: {
    headlineLine1: "ล้างประวัติเสีย",
    headlineLine2: "เริ่มต้นชีวิตใหม่",
    description:
      "จัดการทุกร่องรอยดิจิทัลที่ฉุดรั้งคุณไว้ และออกแบบภาพลักษณ์ใหม่ให้ธนาคารและสังคมเชื่อใจคุณอีกครั้ง",
    ctaPrimary: { label: "ปรึกษาเคสของคุณผ่าน LINE", href: "https://lin.ee/a8egw6Y" },
    ctaSecondary: { label: "ดูวิธีการทำงานของเรา", href: "#protocol" },
    stats: [
      { label: "เคสที่ทำสำเร็จ", value: "98% SUCCESS" },
      { label: "ความลับสูงสุด", value: "100% PRIVATE" },
    ],
    leftSide: {
      tone: "dark",
      headline: "จัดการอดีต",
      subHeadline: "ลบประวัติที่ทำให้คุณกังวล",
      action: "เริ่มลบข้อมูล",
    },
    rightSide: {
      tone: "bright",
      headline: "ออกแบบอนาคต",
      subHeadline: "สร้างตัวตนใหม่ที่แข็งแกร่ง",
      action: "สร้างประวัติใหม่",
    },
  },

  leadCapture: {
    title: "ปรึกษาปัญหาแบบส่วนตัว",
    description: "ข้อมูลของคุณจะถูกเก็บเป็นความลับสูงสุดและไม่ถูกนำไปเผยแพร่",
    badge: "ช่องทางติดต่อที่ปลอดภัย",
    successTitle: "ได้รับข้อมูลเรียบร้อยแล้ว",
    successDescription:
      "เจ้าหน้าที่ผู้เชี่ยวชาญจะติดต่อกลับผ่านช่องทางที่คุณสะดวกในเร็วๆ นี้",
    buttonText: "ส่งข้อมูลเพื่อขอคำปรึกษา",
    fields: {
      name: {
        label: "ชื่อเรียกแทนคุณ",
        placeholder: "จะให้เราเรียกว่าอะไรดีครับ?",
      },
      email: { label: "อีเมลที่ติดต่อได้", placeholder: "contact@yourmail.com" },
      company: { label: "ปัญหาที่ต้องการปรึกษา", placeholder: "แจ้งรายละเอียดสั้นๆ ได้เลยครับ" },
    },
  },

  pricing: {
    badge: "ค่าบริการและแผนปฏิบัติงาน",
    title: "การลงทุนในชื่อเสียงของคุณ",
    description: "เรามีแผนงานที่ชัดเจน ตรงไปตรงมา เพื่อผลลัพธ์ที่ดีที่สุดสำหรับคุณ",
    tiers: [
      {
        name: "ประเมินและวิเคราะห์สถานะ",
        price: "ไม่มีค่าใช้จ่าย",
        description: "สำหรับผู้ที่ต้องการทราบแนวทางการแก้ไขเบื้องต้น",
        period: "รายครั้ง",
        highlighted: false,
        cta: "เริ่มปรึกษาฟรี",
        features: [
          "สแกนข้อมูลเสียบนโลกออนไลน์",
          "วิเคราะห์จุดเสี่ยงของประวัติ",
          "ประเมินโอกาสความสำเร็จ 100%",
          "คุยกับผู้เชี่ยวชาญ 15 นาที",
        ],
      },
      {
        name: "จัดการประวัติระดับมาตรฐาน",
        price: "ตามหน้างาน",
        description: "บริการลบและระงับข้อมูลเสียแบบครบวงจร",
        period: "จบในรอบเดียว",
        highlighted: true,
        cta: "นัดหมายทีมงาน",
        features: [
          "ลบชื่อประจาน/รูปหลุดถาวร",
          "จัดการข่าวเสียบน Google",
          "ใช้สิทธิกฎหมาย PDPA เต็มรูปแบบ",
          "วางแผนการเงินเบื้องต้น",
        ],
      },
      {
        name: "ดูแล VIP และองค์กร",
        price: "Executive",
        description: "การปกป้องชื่อเสียงระดับสูงสุดแบบต่อเนื่อง",
        period: "รายปี/โปรเจกต์",
        highlighted: false,
        cta: "ติดต่อที่ปรึกษา VIP",
        features: [
          "เฝ้าระวังข่าวเสียตลอด 24 ชม.",
          "จัดการวิกฤตชื่อเสียงฉุกเฉิน",
          "สร้างภาพลักษณ์ใหม่ให้น่าเชื่อถือ",
          "ที่ปรึกษาส่วนตัว (Liaison)",
        ],
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
        features: [
          "ตรวจสอบประวัติออนไลน์",
          "เฝ้าระวัง Dark Web",
          "สแกนข้อมูลเชิงลึก",
        ],
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
        features: [
          "ปรับแต่งโปรไฟล์ใหม่",
          "สร้างความน่าเชื่อถือ",
          "วางแผนสเตทเม้นท์",
        ],
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
