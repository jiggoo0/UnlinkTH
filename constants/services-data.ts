import { Trash2, Scale, Search, ShieldAlert } from "lucide-react" // ✅ แก้ไข: ลบ FileSearch และ Globe ออกเรียบร้อยแล้ว

/**
 * Interface สำหรับข้อมูลบริการ
 * แก้ไข iconName ให้รองรับ "negotiation" และ "default" เพื่อให้ตรงกับ ServiceCard และ Template
 */
export interface ServiceItem {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  // ✅ อัปเดตให้ครอบคลุม Type ทั้งหมดที่ใช้ในโปรเจกต์
  iconName: "remove" | "legal" | "seo" | "negotiation" | "default"
  suitableFor: string[]
  features: string[]
  ctaText: string
}

export const servicesData: ServiceItem[] = [
  {
    id: "remove",
    slug: "content-negotiation",
    title: "เจรจาลบข้อมูลต้นทาง",
    shortDescription:
      "ลบชื่อจากต้นตอด้วยเทคนิคการเจรจาเชิงลึกและสิทธิ์ส่วนบุคคล",
    fullDescription:
      "เน้นการประสานงานโดยตรงกับเจ้าของเว็บไซต์หรือผู้ดูแลระบบ (Admin) โดยใช้เทคนิคการเจรจาควบคู่กับสิทธิ์ทางกฎหมาย เพื่อให้ลบข้อมูลออกจากฐานข้อมูลอย่างถาวร",
    iconName: "remove",
    suitableFor: [
      "กระทู้ประจานในเว็บบอร์ด",
      "เว็บไซต์แบล็กลิสต์ไทย",
      "บล็อกส่วนตัวที่ละเมิดสิทธิ์",
    ],
    features: [
      "ประสานงานตรงกับผู้ดูแลระบบ",
      "ตรวจสอบประวัติการลบย้อนหลัง",
      "รักษาความลับของผู้จ้างวาน 100%",
    ],
    ctaText: "ปรึกษาเคสลบข้อมูล",
  },
  {
    id: "legal",
    slug: "pdpa-legal-removal",
    title: "ยื่นสิทธิ์ตามกฎหมาย PDPA",
    shortDescription:
      "ใช้สิทธิ์ Right to be Forgotten ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล",
    fullDescription:
      "ดำเนินการแจ้งใช้สิทธิ์กับแพลตฟอร์มปลายทาง (เช่น Google, Facebook) ในกรณีที่เป็นข้อมูลบิดเบือน ข้อมูลที่ไม่เป็นปัจจุบัน หรือข้อมูลที่ละเมิดกฎหมาย PDPA โดยตรง",
    iconName: "legal",
    suitableFor: [
      "ข่าวบิดเบือนความจริง",
      "คดีความที่ศาลตัดสินยกฟ้องแล้ว",
      "ข้อมูลส่วนตัวที่ถูกเปิดเผยโดยไม่ได้รับอนุญาต",
    ],
    features: [
      "ร่างเอกสารคำร้องตามมาตรฐานกฎหมาย",
      "ยื่นเรื่องต่อ Search Engine และ Platform",
      "ติดตามผลจนกว่าข้อมูลจะถูกปลดออกจากผลการค้นหา",
    ],
    ctaText: "ตรวจสอบสิทธิ์ PDPA",
  },
  {
    id: "seo",
    slug: "seo-reputation-push",
    title: "SEO ดันชื่อดีกลบชื่อเสีย",
    shortDescription:
      "สร้างตัวตนใหม่ที่ขาวสะอาดเพื่อเบียดผลการค้นหาด้านลบให้หายไป",
    fullDescription:
      "สำหรับกรณีที่ลบไม่ได้จริงๆ เราจะใช้กลยุทธ์ SEO ขั้นสูง สร้างโปรไฟล์และเนื้อหาเชิงบวกที่มีคุณภาพสูง เพื่อดันขึ้นมาอยู่หน้าแรกและเบียดข่าวเสียให้ลงไปอยู่ในหน้าที่ลึกที่สุด",
    iconName: "seo",
    suitableFor: [
      "ข่าวสำนักข่าวใหญ่ที่ลบยาก",
      "เว็บไซต์ต่างประเทศ",
      "กรณีชื่อและนามสกุลพ้องกับบุคคลที่มีประวัติเสีย",
    ],
    features: [
      "สร้าง Content Authority คุณภาพสูง",
      "จัดการอันดับผลการค้นหาหน้าแรก",
      "สร้างความน่าเชื่อถือใหม่ให้กับแบรนด์หรือบุคคล",
    ],
    ctaText: "เริ่มทำ SEO กู้ชื่อเสียง",
  },
]

/**
 * Helper สำหรับแปลง iconName เป็น Component (ใช้ในฝั่ง Client)
 */
export const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case "remove":
      return Trash2
    case "legal":
      return Scale
    case "seo":
      return Search
    case "negotiation":
      return Trash2 // กำหนด Icon ให้สอดคล้องกับหมวดหมู่เจรจา
    default:
      return ShieldAlert
  }
}
