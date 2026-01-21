import { Service } from "@/types";

/**
 * UNLINK Services Data (2026 Optimized):
 * รวบรวมข้อมูลบริการที่ปรับจูน Keyword ให้ตรงกับ "ปัญหาที่คนไทยค้นหาจริง"
 * ใช้สำหรับแสดงผลในหน้าแรกและหน้าบริการรวม
 */
export const servicesData: Service[] = [
  {
    id: "ser-001",
    slug: "how-to-fix-negative-google-search-results",
    title: "รับลบลิงก์ Google & ข่าวเสีย (Technical De-indexing)",
    shortDescription:
      "บริการถอดถอนรายชื่อ ข่าวอาชญากรรม และลิงก์ข่าวด้านลบออกจากหน้าแรก Google แบบถาวร ด้วยเทคนิควิศวกรรมข้อมูล",
    description:
      "เจาะลึกโครงสร้าง Indexing ของ Google เพื่อตัดวงจรการค้นหาข่าวเสียที่ต้นตอ เราไม่ได้แค่ 'ดันลิงก์' แต่เราใช้เทคนิค 'De-indexing' เพื่อแจ้งให้ Google ถอดลิงก์ที่ไม่พึงประสงค์ออกจากฐานข้อมูลถาวร เหมาะสำหรับผู้ที่ต้องการล้างประวัติบนหน้า Search Engine ให้สะอาดบริสุทธิ์",
    iconName: "Search", // ใช้ไอคอนสื่อถึงการค้นหา
    category: "Technical",
    features: [
      "Permanent De-indexing: ลบลิงก์ออกจาก Google Search ถาวร ไม่กลับมาแสดงซ้ำ",
      "Negative News Removal: จัดการข่าวเสีย ข่าวคดีความเก่า หรือข่าวที่บิดเบือนข้อเท็จจริง",
      "Metadata Cleansing: ล้างข้อมูล Cache ที่ตกค้างในระบบ เพื่อไม่ให้สืบค้นเจอแม้ผ่านไปนาน",
      "Search Console Audit: ตรวจสอบสถานะ URL แบบ Real-time ยืนยันผลลัพธ์ด้วยหลักฐานทางเทคนิค",
    ],
    metadata: {
      title: "รับลบลิงก์ Google ลบข่าวเสีย และประวัติการค้นหา | UNLINK",
      description:
        "บริการลบลิงก์ข่าวเสียออกจาก Google ถาวร ด้วยวิธี De-indexing ที่ปลอดภัยและเห็นผลจริง แก้ไขชื่อติด Google ลบประวัติที่ไม่ต้องการให้ใครเห็น",
      keywords: [
        "รับลบลิงก์ Google",
        "ลบข่าวเสีย",
        "วิธีลบชื่อออกจาก Google",
        "จ้างลบประวัติ Google",
        "De-indexing Service",
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
      "ปฏิบัติการระงับเหตุบนแพลตฟอร์มโซเชียลมีเดียโดยเฉพาะ ทีมงานของเราเชี่ยวชาญกฎชุมชน (Community Standards) ของแต่ละแพลตฟอร์ม ทั้ง Pantip, Facebook, Twitter และ TikTok เพื่อประสานงานแจ้งลบเนื้อหาที่ละเมิดสิทธิ หมิ่นประมาท หรือคุกคามความเป็นส่วนตัวอย่างเร่งด่วน",
    iconName: "MessageCircle", // ใช้ไอคอนสื่อถึงโซเชียล/แชท
    category: "Social",
    features: [
      "Pantip & Forum Takedown: ประสานงานลบกระทู้ต้นทางและกระทู้ Archive ที่สร้างความเสียหาย",
      "Review Management: แจ้งลบรีวิว 1 ดาว หรือรีวิวกลั่นแกล้งบน Google Maps และ Facebook Page",
      "Social Media Crisis: จัดการโพสต์หมิ่นประมาท รูปหลุด หรือการ Doxing บน Twitter (X)",
      "Account Reporting: รายงานปิดเพจปลอม หรือบัญชีอวตารที่สร้างขึ้นเพื่อโจมตีคุณ",
    ],
    metadata: {
      title: "รับลบกระทู้ Pantip ลบรีวิว Google Maps และดราม่าโซเชียล | UNLINK",
      description:
        "บริการแจ้งลบกระทู้ Pantip ลบรีวิวแย่ๆ และจัดการดราม่าบน Twitter/Facebook ผู้เชี่ยวชาญกฎชุมชน ดำเนินการรวดเร็ว หยุดความเสียหายทันที",
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
      "บริการ 'Deep Clean' ประวัติออนไลน์สำหรับบุคคลที่ต้องการเริ่มต้นใหม่ เราตรวจสอบและดำเนินการลบชื่อของคุณออกจากเว็บไซต์ Blacklist (ที่เคลียร์จบแล้ว), เว็บประกาศจับเก่า หรือฐานข้อมูลสาธารณะที่อาจส่งผลกระทบต่อการพิจารณารับเข้าทำงาน (Background Check) หรือการขอสินเชื่อ",
    iconName: "Fingerprint", // ใช้ไอคอนสื่อถึงอัตลักษณ์/ประวัติ
    category: "Personal",
    features: [
      "Blacklist Cleansing: ลบชื่อออกจากเว็บ Blacklist Online กรณีที่มีการชดใช้ค่าเสียหายแล้ว",
      "Criminal Record Privacy: จัดการข่าวกระทำความผิดในอดีตที่ศาลตัดสินแล้ว หรือคดีสิ้นสุดแล้ว",
      "Name-Check Pre-screening: ตรวจสอบความสะอาดของชื่อ-นามสกุลในระบบดิจิทัล ก่อนคุณไปสมัครงาน",
      "Privacy Hardening: ตั้งค่าบัญชีส่วนตัวให้ปลอดภัยจากการถูกขุดประวัติย้อนหลัง",
    ],
    metadata: {
      title: "ลบประวัติอาชญากรรมออนไลน์ ลบชื่อ Blacklist ตรวจสอบประวัติ | UNLINK",
      description:
        "บริการคลีนประวัติออนไลน์ ลบชื่อจากเว็บ Blacklist และข่าวคดีความเก่า เตรียมตัวสมัครงานอย่างมั่นใจ กู้คืนความน่าเชื่อถือให้ชื่อเสียงของคุณ",
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
      "เมื่อเทคนิคทางไอทีต้องทำงานร่วมกับกฎหมาย เรามีทีมที่ปรึกษากฎหมายเชี่ยวชาญด้าน PDPA และ พรบ.คอมพิวเตอร์ ดำเนินการร่างหนังสือโนติส (Notice) ถึงผู้ควบคุมข้อมูล (Data Controller) หรือเว็บไซต์ต้นทาง เพื่อบังคับใช้สิทธิในการลบข้อมูล (Right to Erasure) ตามกฎหมายไทยอย่างเด็ดขาด",
    iconName: "Scale", // ใช้ไอคอนสื่อถึงกฎหมาย
    category: "Legal",
    features: [
      "Legal Notice Drafting: ร่างจดหมายเตือนและโนติสอย่างเป็นทางการโดยทนายความลิขสิทธิ์/PDPA",
      "PDPA Enforcement: บังคับใช้สิทธิตามมาตรา 33-34 เพื่อขอให้ลบหรือระงับข้อมูลส่วนบุคคล",
      "ISP & Platform Liaison: ประสานงานฝ่ายกฎหมายของ ISP หรือ Platform Provider เพื่อกดดันให้ลบข้อมูล",
      "Right to be Forgotten: ดำเนินการทางกฎหมายเพื่อให้ข้อมูลของคุณ 'ถูกลืม' จากระบบดิจิทัลอย่างถูกต้อง",
    ],
    metadata: {
      title: "ทนาย PDPA รับปรึกษาสิทธิในการถูกลืม (Right to be Forgotten) | UNLINK",
      description:
        "บริการทางกฎหมาย PDPA ยื่นโนติสบังคับลบข้อมูล ใช้สิทธิ Right to be Forgotten ดำเนินการโดยผู้เชี่ยวชาญกฎหมายดิจิทัลและ พรบ.คอมพิวเตอร์",
      keywords: [
        "ทนาย PDPA",
        "สิทธิในการถูกลืม",
        "ฟ้องหมิ่นประมาทออนไลน์",
        "พรบ คอมพิวเตอร์",
        "จ้างทนายลบรูป",
      ],
    },
  },
];
