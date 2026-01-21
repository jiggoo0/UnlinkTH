import { Service } from "@/types"

/**
 * UNLINK-TH | Services Data (2026 Optimized Matrix)
 * * ยุทธศาสตร์การนำเสนอ:
 * 1. Action-Oriented Title: ใช้ Keyword ที่คนไทยค้นหาเพื่อแก้ปัญหาจริง
 * 2. Strategic Pricing: ใช้โมเดล "Starting At" เพื่อคัดกรอง Lead และ "Success Fee" เพื่อปิดการขาย
 * 3. Technical Authority: ใช้คำศัพท์เฉพาะทางเพื่อสร้างความแตกต่างจาก Agency ทั่วไป
 */
export const servicesData: Service[] = [
  {
    id: "ser-001",
    slug: "how-to-fix-negative-google-search-results",
    title: "รับลบลิงก์ Google & ข่าวเสีย (Technical De-indexing)",
    shortDescription:
      "บริการถอดถอนรายชื่อ ข่าวอาชญากรรม และลิงก์ข่าวด้านลบออกจากหน้าแรก Google แบบถาวร ด้วยเทคนิควิศวกรรมข้อมูล",
    description:
      "เจาะลึกโครงสร้าง Indexing ของ Google เพื่อตัดวงจรการค้นหาข่าวเสียที่ต้นตอ เราใช้เทคนิค De-indexing เพื่อแจ้งให้ Search Engine ถอดถอน URL ที่ไม่พึงประสงค์ออกจากฐานข้อมูลถาวร ไม่ใช่เพียงการทำ SEO ดันลิงก์ แต่เป็นการลบจุดเชื่อมโยงข้อมูลในระดับ Metadata",
    iconName: "Search",
    category: "Technical",
    features: [
      "Permanent De-indexing: ลบลิงก์ออกจาก Google Search ถาวร",
      "Negative News Removal: จัดการข่าวเสีย ข่าวคดีความเก่า หรือข่าวบิดเบือน",
      "Metadata Cleansing: ล้างข้อมูล Cache ที่ตกค้างในระบบการค้นหา",
      "Search Console Audit: ตรวจสอบสถานะ URL ยืนยันผลลัพธ์ทางเทคนิค",
    ],
    priceInfo: {
      startingAt: "15,000",
      unit: "บาท / ลิงก์",
      model: "Success Fee",
    },
    metadata: {
      title: "รับลบลิงก์ Google ลบข่าวเสีย และประวัติการค้นหา | UNLINK-TH",
      description:
        "บริการลบลิงก์ข่าวเสียออกจาก Google ถาวร ด้วยวิธี De-indexing ที่ปลอดภัยและเห็นผลจริง แก้ไขชื่อติด Google ลบประวัติที่ไม่ต้องการ",
      keywords: [
        "รับลบลิงก์ Google",
        "ลบข่าวเสีย",
        "วิธีลบชื่อออกจาก Google",
        "จ้างลบประวัติ Google",
        "De-indexing Service Thailand",
      ],
    },
  },
  {
    id: "ser-002",
    slug: "remove-social-media-content-pantip-twitter",
    title: "ลบกระทู้ Pantip, รีวิว & ดราม่าโซเชียล (Platform Removal)",
    shortDescription:
      "จัดการดราม่าออนไลน์ ลบกระทู้หมิ่นประมาทใน Pantip, Twitter (X) และรีวิวปลอมใน Google Maps",
    description:
      "ปฏิบัติการระงับเหตุบนแพลตฟอร์มโซเชียลมีเดียโดยเฉพาะ ทีมงานผู้เชี่ยวชาญกฎชุมชน (Community Standards) ประสานงานแจ้งลบเนื้อหาที่ละเมิดสิทธิ หมิ่นประมาท หรือคุกคามความเป็นส่วนตัวบน Pantip, Facebook, X และ Google Maps อย่างเร่งด่วน",
    iconName: "MessageCircle",
    category: "Social",
    features: [
      "Pantip & Forum Takedown: ประสานงานลบกระทู้ต้นทางและลิงก์ Archive",
      "Review Management: แจ้งลบรีวิว 1 ดาว หรือการกลั่นแกล้งบน Google Maps",
      "Social Media Crisis: จัดการโพสต์หมิ่นประมาท รูปหลุด หรือการ Doxing",
      "Account Reporting: รายงานปิดเพจปลอม หรือบัญชีที่สร้างเพื่อโจมตี",
    ],
    priceInfo: {
      startingAt: "8,500",
      unit: "บาท / รายการ",
      model: "Fixed Rate",
    },
    metadata: {
      title:
        "รับลบกระทู้ Pantip ลบรีวิว Google Maps และดราม่าโซเชียล | UNLINK-TH",
      description:
        "บริการแจ้งลบกระทู้ Pantip ลบรีวิวแย่ๆ และจัดการดราม่าบน Twitter/Facebook ดำเนินการรวดเร็ว หยุดความเสียหายทันที",
      keywords: [
        "ลบกระทู้ Pantip",
        "ลบรีวิว Google Maps",
        "แจ้งลบ Twitter",
        "รับปิดเพจปลอม",
        "Cyberbullying Solution",
      ],
    },
  },
  {
    id: "ser-003",
    slug: "online-background-check-for-job-application",
    title: "ลบประวัติอาชญากรรมออนไลน์ & ตรวจสอบตัวตน (Digital Cleaning)",
    shortDescription:
      "คลีนประวัติออนไลน์ ลบชื่อจากเว็บประกาศจับ หรือ Blacklist เก่า เพื่อเตรียมพร้อมสมัครงานและทำธุรกิจ",
    description:
      "บริการ Deep Clean ประวัติดิจิทัลสำหรับผู้ที่ต้องการเริ่มต้นใหม่ เราตรวจสอบและดำเนินการถอนชื่อจากเว็บไซต์ Blacklist, ข่าวคดีความเก่าที่สิ้นสุดแล้ว หรือฐานข้อมูลสาธารณะที่ส่งผลต่อการทำ Background Check และความน่าเชื่อถือทางธุรกิจ",
    iconName: "Fingerprint",
    category: "Personal",
    features: [
      "Blacklist Cleansing: ลบชื่อจากเว็บ Blacklist กรณีที่เคลียร์ภาระผูกพันแล้ว",
      "Criminal Record Privacy: จัดการข่าวคดีความในอดีตที่สิ้นสุดผลทางกฎหมาย",
      "Name-Check Pre-screening: ตรวจสอบความสะอาดของชื่อในระบบดิจิทัล",
      "Privacy Hardening: ตั้งค่าความปลอดภัยเพื่อป้องกันการถูกขุดประวัติ",
    ],
    priceInfo: {
      startingAt: "19,500",
      unit: "บาท / โปรเจกต์",
      model: "Fixed Rate",
    },
    metadata: {
      title:
        "ลบประวัติอาชญากรรมออนไลน์ ลบชื่อ Blacklist ตรวจสอบประวัติ | UNLINK-TH",
      description:
        "บริการคลีนประวัติออนไลน์ ลบชื่อจากเว็บ Blacklist และข่าวคดีความเก่า เตรียมตัวสมัครงานอย่างมั่นใจ กู้คืนความน่าเชื่อถือ",
      keywords: [
        "ลบประวัติอาชญากรรมออนไลน์",
        "ลบชื่อ Blacklist",
        "เช็คประวัติอาชญากรรม",
        "ลบประวัติเสื่อมเสีย",
        "Digital Footprint Cleaning",
      ],
    },
  },
  {
    id: "ser-004",
    slug: "right-to-be-forgotten-thailand-pdpa",
    title: "ทนาย PDPA & สิทธิในการถูกลืม (Legal Takedown)",
    shortDescription:
      "ใช้กฎหมาย PDPA บังคับลบข้อมูล ดำเนินคดี พรบ.คอมฯ และใช้สิทธิ Right to be Forgotten",
    description:
      "ปฏิบัติการผ่านที่ปรึกษากฎหมายเชี่ยวชาญ PDPA และ พรบ.คอมพิวเตอร์ ดำเนินการร่างจดหมายโนติส (Notice) ถึงผู้ควบคุมข้อมูลเพื่อบังคับใช้สิทธิในการลบข้อมูล (Right to Erasure) ตามกฎหมายไทยอย่างเด็ดขาดและเป็นทางการ",
    iconName: "Scale",
    category: "Legal",
    features: [
      "Legal Notice Drafting: ร่างจดหมายเตือนอย่างเป็นทางการโดยทนายความ",
      "PDPA Enforcement: บังคับใช้สิทธิตามกฎหมายเพื่อระงับข้อมูลส่วนบุคคล",
      "ISP & Platform Liaison: ประสานงานฝ่ายกฎหมายของ Platform Provider",
      "Right to be Forgotten: ดำเนินการให้ข้อมูลถูกลืมจากระบบอย่างถูกต้อง",
    ],
    priceInfo: {
      startingAt: "12,000",
      unit: "บาท / ครั้ง",
      model: "Fixed Rate",
    },
    metadata: {
      title:
        "ทนาย PDPA รับปรึกษาสิทธิในการถูกลืม (Right to be Forgotten) | UNLINK-TH",
      description:
        "บริการทางกฎหมาย PDPA ยื่นโนติสบังคับลบข้อมูล ใช้สิทธิ Right to be Forgotten ดำเนินการโดยผู้เชี่ยวชาญกฎหมายดิจิทัล",
      keywords: [
        "ทนาย PDPA",
        "สิทธิในการถูกลืม",
        "ฟ้องหมิ่นประมาทออนไลน์",
        "พรบ คอมพิวเตอร์",
        "จ้างทนายลบรูป",
      ],
    },
  },
]
