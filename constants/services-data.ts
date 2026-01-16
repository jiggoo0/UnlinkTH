import {
  Trash2,
  Scale,
  Search,
  ShieldAlert,
  Zap,
  HeartHandshake,
} from "lucide-react"

/**
 * Interface สำหรับข้อมูลบริการ (เวอร์ชันสมบูรณ์พร้อมรูปภาพส่วนกลาง)
 */
export interface ServiceItem {
  id: string
  slug: string
  title: string
  priceDisplay: string
  targetGroup: string
  shortDescription: string
  fullDescription: string
  imageUrl: string // ✅ ฟิลด์สำหรับรูปภาพ Preview ของบริการ
  iconName: "remove" | "legal" | "seo" | "consult" | "audit" | "default"
  suitableFor: string[]
  features: string[]
  addOns?: {
    name: string
    price: string
  }[]
  ctaText: string
}

/**
 * ✅ Centralized Image Configuration
 * กำหนด Path รูปภาพส่วนกลางเพียงจุดเดียวเพื่อให้ง่ายต่อการแก้ไขในอนาคต
 * อ้างอิงจาก public/images/service/service.webp
 */
const SHARED_SERVICE_IMAGE = "/images/service/service.webp"

export const servicesData: ServiceItem[] = [
  {
    id: "audit",
    slug: "online-identity-audit",
    title: "ตรวจสุขภาพชื่อ (Online Audit)",
    priceDisplay: "เริ่มต้น 590.-",
    targetGroup: "นักศึกษา / คนเริ่มทำงาน / บุคคลทั่วไป",
    shortDescription:
      "เช็กประวัติออนไลน์ก่อนเริ่มชีวิตใหม่ เพื่อความมั่นใจ 100%",
    fullDescription:
      "บริการตรวจสอบชื่อ-นามสกุล บนโลกออนไลน์อย่างละเอียด ทั้ง Google, Social Media และฐานข้อมูลสาธารณะ พร้อมรายงานสรุปความเสี่ยงและแนวทางแก้ไขเบื้องต้น",
    imageUrl: SHARED_SERVICE_IMAGE,
    iconName: "audit",
    suitableFor: [
      "ใช้ยื่นสมัครงานบริษัทชั้นนำ",
      "ตรวจสอบก่อนเริ่มทำธุรกิจใหม่",
      "เช็กความปลอดภัยของข้อมูลส่วนตัว",
    ],
    features: [
      "รายงานสรุปผลในรูปแบบ PDF",
      "วิเคราะห์คะแนนความเสี่ยง (Risk Score)",
      "คำแนะนำการตั้งค่าความเป็นส่วนตัว",
    ],
    addOns: [
      { name: "ระบบแจ้งเตือนเมื่อมีคนพูดถึงชื่อคุณ (1 ปี)", price: "+490.-" },
      { name: "คู่มือ Clean-up โซเชียลมีเดียส่วนตัว", price: "+199.-" },
    ],
    ctaText: "เริ่มตรวจสุขภาพชื่อ",
  },
  {
    id: "consult",
    slug: "sos-consultation",
    title: "ปรึกษาด่วนกับพี่ชาย (SOS Call)",
    priceDisplay: "เพียง 300.- / 15 นาที",
    targetGroup: "คนต้องการคำตอบด่วน / งบน้อย",
    shortDescription:
      "คุยตรงจุด หาทางออกทันที สำหรับเคสที่ต้องการความช่วยเหลือเร่งด่วน",
    fullDescription:
      "บริการโทรปรึกษาแบบตัวต่อตัว เพื่อประเมินสถานการณ์เบื้องต้น แนะนำวิธีการรับมือ และวิเคราะห์โอกาสในการลบข้อมูลอย่างจริงใจ",
    imageUrl: SHARED_SERVICE_IMAGE,
    iconName: "consult",
    suitableFor: [
      "เพิ่งโดนโพสต์ประจาน/ขุดประวัติ",
      "ไม่แน่ใจว่าเคสของตัวเองลบได้ไหม",
      "ต้องการแนวทางคุยกับคู่กรณีด้วยตนเอง",
    ],
    features: [
      "คุยผ่าน Voice Call หรือ Video Call",
      "สรุปแนวทางแก้ไขให้หลังจบสาย",
      "นำค่าปรึกษาไปหักลบค่าบริการจริงได้ในภายหลัง",
    ],
    ctaText: "จองคิวปรึกษาด่วน",
  },
  {
    id: "remove",
    slug: "content-negotiation",
    title: "เจรจาลบข้อมูลต้นทาง",
    priceDisplay: "เริ่มต้น 3,500.- / จุด",
    targetGroup: "คนทำงาน / เจ้าของธุรกิจขนาดเล็ก",
    shortDescription:
      "ลบชื่อจากต้นตอด้วยการเจรจาเชิงลึก และสิทธิ์ความเป็นส่วนตัว",
    fullDescription:
      "เน้นการประสานงานโดยตรงกับแอดมินหรือเจ้าของเว็บ โดยใช้เทคนิคการเจรจาที่นุ่มนวลแต่มีหลักการ เพื่อขอให้ลบข้อมูลออกจากระบบอย่างถาวร",
    imageUrl: SHARED_SERVICE_IMAGE,
    iconName: "remove",
    suitableFor: [
      "กระทู้ประจานในเว็บบอร์ดชื่อดัง",
      "เว็บไซต์แบล็กลิสต์/เช็คเครดิตนอกระบบ",
      "ข้อมูลหลุดบนบล็อกส่วนตัว",
    ],
    features: [
      "ประสานงานโดยผู้เชี่ยวชาญ (พี่ชายแสนดี)",
      "รักษาความลับลูกค้าเป็นความลับสูงสุด",
      "ติดตามผลจนกว่าข้อมูลจะถูกลบจริง",
    ],
    addOns: [
      { name: "บริการเก็บหลักฐาน (Log) เพื่อดำเนินคดี", price: "+900.-" },
      { name: "เร่งด่วน (เริ่มงานภายใน 3 ชม.)", price: "+1,500.-" },
    ],
    ctaText: "ปรึกษาเคสลบข้อมูล",
  },
  {
    id: "legal",
    slug: "pdpa-legal-removal",
    title: "ใช้สิทธิ์ PDPA ลบข้อมูลผิดกฎหมาย",
    priceDisplay: "ประเมินตามเคส",
    targetGroup: "ผู้ที่โดนละเมิดสิทธิ์ / ผู้ที่ศาลตัดสินเป็นที่สิ้นสุดแล้ว",
    shortDescription:
      "ใช้สิทธิ์ 'ลืมฉัน' (Right to be Forgotten) ตามกฎหมาย PDPA",
    fullDescription:
      "ดำเนินการยื่นคำร้องต่อแพลตฟอร์มใหญ่ เช่น Google, Facebook หรือสำนักข่าว เพื่อขอให้ปลดข้อมูลที่ผิดกฎหมาย หรือข้อมูลที่ไม่เป็นปัจจุบันออก",
    imageUrl: SHARED_SERVICE_IMAGE,
    iconName: "legal",
    suitableFor: [
      "ข่าวเก่าที่ศาลยกฟ้องแล้ว",
      "ข้อมูลบิดเบือนความจริง",
      "ภาพหรือวิดีโอที่ถูกนำไปใช้โดยไม่ได้รับอนุญาต",
    ],
    features: [
      "ร่างเอกสารทางกฎหมายให้ครบถ้วน",
      "ยื่นเรื่องต่อ Search Engine โดยตรง",
      "ดูแลโดยผู้เชี่ยวชาญด้านกฎหมายดิจิทัล",
    ],
    addOns: [
      {
        name: "หนังสือรับรองการดำเนินงาน (เพื่อยื่น HR/ธนาคาร)",
        price: "+1,200.-",
      },
      { name: "ล้าง Cache ใน Google (หลังลบต้นทาง)", price: "ฟรี" },
    ],
    ctaText: "ตรวจสอบสิทธิ์ PDPA",
  },
  {
    id: "seo",
    slug: "seo-reputation-push",
    title: "SEO ดันชื่อดี กลบชื่อเสีย",
    priceDisplay: "รายเดือน เริ่มต้น 15,000.-",
    targetGroup: "ผู้บริหาร / แบรนด์ / บุคคลสาธารณะ",
    shortDescription:
      "สร้างตัวตนใหม่ที่ขาวสะอาด เพื่อเบียดข่าวลบให้หายไปจากหน้าแรก",
    fullDescription:
      "สำหรับกรณีที่ลบต้นทางไม่ได้ เราจะสร้าง Content เชิงบวกที่มีคุณภาพสูง เพื่อดันอันดับขึ้นหน้า 1 Google และเบียดข่าวเสียลงไปหน้าที่ลึกที่สุด",
    imageUrl: SHARED_SERVICE_IMAGE,
    iconName: "seo",
    suitableFor: [
      "ข่าวสำนักข่าวใหญ่ที่ลบไม่ได้",
      "กรณีชื่อพ้องกับบุคคลที่มีประวัติเสีย",
      "การปรับภาพลักษณ์แบรนด์ให้ดูดีขึ้น",
    ],
    features: [
      "สร้าง Content คุณภาพสูงรายเดือน",
      "จัดการอันดับหน้าแรกของ Google",
      "สร้างความน่าเชื่อถือใหม่ในระยะยาว",
    ],
    addOns: [
      {
        name: "สร้างเว็บไซต์ประวัติส่วนตัว (Personal Branding)",
        price: "+5,000.-",
      },
      { name: "รายงานอันดับรายปักษ์ (ทุก 2 สัปดาห์)", price: "ฟรี" },
    ],
    ctaText: "กู้ชื่อเสียงด้วย SEO",
  },
]

/**
 * ✅ Helper function สำหรับดึง Icon ตามชื่อ
 */
export const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case "audit":
      return Search
    case "remove":
      return Trash2
    case "legal":
      return Scale
    case "seo":
      return Zap
    case "consult":
      return HeartHandshake
    default:
      return ShieldAlert
  }
}
