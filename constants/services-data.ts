/** @format */

import { Service } from "@/types"

/**
 * UNLINK-TH | Services Matrix (2026 Reputation Architect Edition)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: "Unlink the Past, Architect Your Future"
 * จัดหมวดหมู่ตามกระบวนการ: Cleanup (ล้าง), Architect (สร้าง), Legal (คุ้มครอง)
 */

export const servicesData: Service[] = [
  // --- PHASE 1: THE CLEANUP (การจัดการอดีต) ---
  {
    id: "ser-cleanup-001",
    slug: "technical-de-indexing",
    title: "Technical De-indexing",
    shortDescription:
      "ถอนรากถอนโคนข้อมูลเชิงลบออกจากฐานข้อมูล Google Search ถาวร",
    description:
      "เหนือกว่าการดันลิงก์คือการ 'ลบ' เราใช้เทคนิค Metadata Cleansing และการส่งสัญญาณ De-indexing เพื่อแจ้งให้ Search Engine นำ URL ที่ไม่พึงประสงค์ออกจากฐานข้อมูลถาวร จัดการได้ทั้งข่าวอาชญากรรมเก่า ข่าวบิดเบือน หรือข้อมูลส่วนตัวที่รั่วไหล",
    iconName: "Trash2",
    category: "Cleanup",
    features: [
      "Permanent De-indexing: ลบ URL ออกจากผลการค้นหาถาวร",
      "Cache Removal: ล้างสำเนาข้อมูลเก่าที่ยังค้างอยู่ในระบบ",
      "Search Result Audit: รายงานสถานะความสะอาดของชื่อรายสัปดาห์",
      "Confidential Protocol: รักษาความลับลูกค้าขั้นสูงสุด",
    ],
    priceInfo: {
      startingAt: "15,000",
      unit: "บาท / ลิงก์",
      model: "Success Fee",
    },
    metadata: {
      defaultTitle:
        "รับลบลิงก์ Google และข่าวเสียด้วยเทคนิค De-indexing | UNLINK-TH",
      defaultDescription:
        "ลบชื่อติด Google และลิงก์ข่าวเสียถาวร ด้วยเทคนิควิศวกรรมข้อมูลระดับสูง ปลอดภัย 100% ประเมินโอกาสสำเร็จฟรี",
      keywords: [
        "รับลบลิงก์ Google",
        "ลบข่าวเสีย",
        "De-indexing Service",
        "ลบประวัติออนไลน์",
      ],
    },
  },
  {
    id: "ser-cleanup-002",
    slug: "social-platform-removal",
    title: "Platform Removal",
    shortDescription:
      "หยุดดราม่า ลบกระทู้หมิ่นประมาท และรีวิวปลอมบนโซเชียลมีเดีย",
    description:
      "จัดการปัญหาบนหน้าแพลตฟอร์มโดยตรง (Pantip, Facebook, X, Google Maps) เราประสานงานตามกฎชุมชนและข้อกฎหมายเพื่อระงับเนื้อหาที่คุกคามความเป็นส่วนตัวหรือรีวิวที่สร้างความเสียหายโดยไม่เป็นธรรม",
    iconName: "MessageSquareOff",
    category: "Cleanup",
    features: [
      "Forum Takedown: ประสานงานลบกระทู้ Pantip และ Archive ลิงก์",
      "Review Management: แจ้งลบรีวิวปลอมบน Google Maps",
      "Social Crisis Control: ระงับการกระจายของข้อมูลบิดเบือน",
      "Account Defense: รายงานปิดบัญชีปลอมที่สวมรอยเป็นธุรกิจ",
    ],
    priceInfo: {
      startingAt: "8,500",
      unit: "บาท / รายการ",
      model: "Fixed Rate",
    },
    metadata: {
      defaultTitle: "รับลบกระทู้ Pantip และรีวิว Google Maps | UNLINK-TH",
      defaultDescription:
        "บริการแจ้งลบเนื้อหาหมิ่นประมาทบนโซเชียลมีเดีย จัดการดราม่าออนไลน์รวดเร็ว เห็นผลทันใจ",
      keywords: [
        "ลบกระทู้ Pantip",
        "ลบรีวิว Google Maps",
        "แจ้งลบเพจปลอม",
        "จัดการดราม่า",
      ],
    },
  },

  // --- PHASE 2: THE ARCHITECT (การออกแบบอนาคต) ---
  {
    id: "ser-build-001",
    slug: "seo-shadowing-domination",
    title: "SEO Shadowing",
    shortDescription:
      "สร้าง 'กำแพงชื่อเสียง' ด้วยเนื้อหาเชิงบวก เพื่อบังและเบียดข้อมูลเสีย",
    description:
      "กลยุทธ์เชิงรุกที่ทรงพลังที่สุด เราสร้างเว็บไซต์และเนื้อหาคุณภาพสูง (High-Authority Assets) เพื่อเข้ายึดครองพื้นที่ 10 อันดับแรกของ Google ข่าวเสียจะถูกเบียดไปอยู่หน้าหลังจนไม่มีใครมองเห็น",
    iconName: "ShieldCheck",
    category: "Architect",
    features: [
      "SERP Domination: ยึดพื้นที่หน้า 1 ด้วยเว็บเครือข่ายคุณภาพสูง",
      "Narrative Control: ออกแบบเรื่องราวที่คุณต้องการให้โลกจำ",
      "Keyword Blocking: ป้องกันคำค้นหาเชิงลบใน Google Suggest",
      "Reputation Insurance: เฝ้าระวังและป้องกันข่าวเสียรายปี",
    ],
    priceInfo: {
      startingAt: "45,000",
      unit: "บาท / โปรเจกต์",
      model: "Project Based",
    },
    metadata: {
      defaultTitle:
        "SEO Shadowing บริการสร้างกำแพงชื่อเสียงบน Google | UNLINK-TH",
      defaultDescription:
        "จองพื้นที่หน้าแรก Google ด้วยเนื้อหาที่ดีที่สุดของคุณ ป้องกันข่าวเสียและสร้างความน่าเชื่อถือระดับสูงสุด",
      keywords: [
        "SEO Shadowing",
        "Online Reputation Management",
        "ปั้นชื่อเสียงแบรนด์",
        "คุมหน้าแรก Google",
      ],
    },
  },
  {
    id: "ser-build-002",
    slug: "digital-authority-hub",
    title: "Authority Hub",
    shortDescription:
      "สร้างความน่าเชื่อถือด้วย Google Knowledge Panel และ E-E-A-T Profile",
    description:
      "เราสร้าง 'ตัวตนระดับผู้เชี่ยวชาญ' (Authority) โดยการวางโครงสร้างข้อมูลให้ Google สร้าง Knowledge Panel เสริมความน่าเชื่อถือให้ธุรกิจหรือบุคคลสำคัญ",
    iconName: "UserCheck",
    category: "Architect",
    features: [
      "Knowledge Graph Setup: จัดการข้อมูล Schema เพื่อสร้าง Google Panel",
      "E-E-A-T Optimization: ปรับแต่งโปรไฟล์ให้บอท AI ยอมรับความเป็น Expert",
      "Editorial Placement: ผลักดันบทความประวัติไปยังเว็บไซต์ข่าวชั้นนำ",
      "Verified Persona: สร้างตัวตนดิจิทัลที่ขาวสะอาด",
    ],
    priceInfo: {
      startingAt: "25,000",
      unit: "บาท / โปรเจกต์",
      model: "Fixed Rate",
    },
    metadata: {
      defaultTitle:
        "รับทำ Google Knowledge Panel และสร้างตัวตนผู้เชี่ยวชาญ | UNLINK-TH",
      defaultDescription:
        "ยกระดับความน่าเชื่อถือด้วยการสร้างกล่องข้อมูล Google และวางระบบ E-E-A-T ให้ตัวตนของคุณดูแพงและเป็นมืออาชีพ",
      keywords: [
        "สร้าง Google Knowledge Panel",
        "ทำประวัติบุคคล",
        "Expert Branding",
        "E-E-A-T",
      ],
    },
  },

  // --- PHASE 3: LEGAL & COMPLIANCE (การคุ้มครองสิทธิ) ---
  {
    id: "ser-legal-001",
    slug: "pdpa-legal-takedown",
    title: "Legal Takedown",
    shortDescription:
      "บังคับลบข้อมูลด้วยข้อกฎหมาย PDPA และการยื่นโนติสโดยทนายความ",
    description:
      "ปฏิบัติการผ่านช่องทางกฎหมายดิจิทัล ดำเนินการร่าง Notice To Remove ถึงผู้ควบคุมข้อมูลตามสิทธิ Right to Erasure ของกฎหมาย PDPA เหมาะสำหรับเคสที่ต้องใช้มาตรการบังคับอย่างเป็นทางการ",
    iconName: "Gavel",
    category: "Legal",
    features: [
      "Official Notice: ร่างและส่งจดหมายเตือนอย่างเป็นทางการโดยทนายความ",
      "Right to Erasure: บังคับใช้สิทธิในการลบข้อมูลตามกฎหมายไทย",
      "Legal Liaison: ประสานงานฝ่ายกฎหมายของ ISP และแพลตฟอร์ม",
      "Compliance Audit: ตรวจสอบความสอดคล้องของข้อมูลตามหลัก PDPA",
    ],
    priceInfo: {
      startingAt: "12,000",
      unit: "บาท / เคส",
      model: "Fixed Rate",
    },
    metadata: {
      defaultTitle:
        "ทนายลบรูป ลบชื่อ ทนาย PDPA และสิทธิในการถูกลืม | UNLINK-TH",
      defaultDescription:
        "ใช้กฎหมายบังคับลบข้อมูลอย่างถูกต้อง ปรึกษาผู้เชี่ยวชาญกฎหมายดิจิทัลและ PDPA เพื่อปกป้องความเป็นส่วนตัว",
      keywords: [
        "ทนาย PDPA",
        "สิทธิในการถูกลืม",
        "ลบรูปหลุดทนาย",
        "โนติสลบข้อมูล",
      ],
    },
  },
]
