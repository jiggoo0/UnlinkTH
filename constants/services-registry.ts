/**
 * UNLINK-GLOBAL | Service Registry (2026)
 * -------------------------------------------------------------------------
 * ศูนย์กลางการจัดการบริการและตัวกำหนดประเภทการทำงาน (Hybrid Registry)
 * ปรับปรุงใหม่เพื่อเน้นการเข้าถึงระบบอัตโนมัติ (Instant Conversion)
 */

export type ServiceType = "content" | "interactive";

export interface ServicePrice {
  startingAt: string;
  unit: string;
  model: string;
}

export interface ServiceMetadata {
  defaultTitle: string;
  defaultDescription: string;
  keywords: string[];
  isInstant?: boolean; // ระบุว่าเป็นบริการอัตโนมัติ
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  iconName: string;
  image?: string;
  category: string;
  features: string[];
  priceInfo: ServicePrice;
  metadata: ServiceMetadata;
  type: ServiceType;
}

export const SERVICES: Service[] = [
  // ⚡ INSTANT SERVICES (ระบบอัตโนมัติ - ทำเงินรวดเร็ว)
  {
    id: "SRV-IMM-01",
    slug: "flight-itinerary-visa",
    title: "Flight Itinerary Receipt Generator",
    shortDescription: "ระบบออกใบจองตั๋วเครื่องบินและใบเสร็จรับเงินมาตรฐาน GDS ทันที",
    description: "ระบบสร้างแบบร่างเอกสารยืนยันแผนการเดินทางและใบเสร็จรับเงิน (Confirmed Format) ผ่านสถาปัตยกรรม GDS รองรับสายการบินหลักทั่วโลก",
    iconName: "Plane",
    image: "/images/services/srv-flight-itinerary.webp",
    category: "Instant Alignment",
    type: "interactive",
    features: [
      "ออกตั๋วพร้อมใบเสร็จทันที",
      "รองรับสายการบินชั้นนำทั่วโลก",
      "รหัสการจอง (PNR) สมจริง",
      "ไฟล์ PDF ความละเอียดสูง",
    ],
    priceInfo: {
      startingAt: "490",
      unit: "ชุด",
      model: "Professional Alignment",
    },
    metadata: {
      isInstant: true,
      defaultTitle: "จองตั๋วเครื่องบินยื่นวีซ่า 2569 | UNLINK-GLOBAL",
      defaultDescription: "บริการออกใบจองตั๋วเครื่องบินและใบเสร็จสำหรับยื่นวีซ่า ข้อมูลตรงตามระบบสายการบิน",
      keywords: ["จองตั๋วเครื่องบินยื่นวีซ่า", "Flight Itinerary", "ใบเสร็จตั๋วเครื่องบิน"],
    },
  },
  {
    id: "SRV-IMM-05",
    slug: "hotel-booking",
    title: "Luxury Hotel Booking Alignment",
    shortDescription: "ระบบออกใบยืนยันการจองโรงแรมหรูทั่วยุโรปและใบเสร็จรับเงิน",
    description: "จัดทำแบบร่างใบยืนยันการจองโรงแรมหรูระดับ 5 ดาว พร้อมใบเสร็จรับเงินเพื่อใช้ประกอบการยื่นวีซ่าหรือเบิกค่าใช้จ่ายองค์กร",
    iconName: "Hotel",
    image: "/images/services/srv-hotel-verification.webp",
    category: "Instant Alignment",
    type: "interactive",
    features: [
      "โรงแรมหรู 5 ดาวในยุโรป/ทั่วโลก",
      "ออกใบจองคู่ใบเสร็จรับเงิน",
      "ข้อมูลเข้าพักสมจริง 97%+",
      "ระบบตรวจสอบสถานะออนไลน์",
    ],
    priceInfo: {
      startingAt: "590",
      unit: "ชุด",
      model: "Luxury Alignment",
    },
    metadata: {
      isInstant: true,
      defaultTitle: "ใบจองโรงแรมยื่นวีซ่าเชงเก้น | UNLINK-GLOBAL",
      defaultDescription: "บริการสร้างแบบร่างใบจองโรงแรมหรูเพื่อการยื่นวีซ่าและเบิกจ่าย ข้อมูลสมจริงระดับสากล",
      keywords: ["ใบจองโรงแรมวีซ่า", "จองโรงแรมหลอก", "Hotel Confirmation"],
    },
  },
  {
    id: "SRV-IMM-02",
    slug: "express-bus-ticket",
    title: "Express Bus E-Ticket Hub",
    shortDescription: "ระบบสร้างแบบร่างตั๋วรถทัวร์ บขส. 99/999 และใบรับเงิน",
    description: "ระบบสร้างเอกสารยืนยันการเดินทางรถทัวร์ บขส. 99/999 (E-Ticket) พร้อมใบเสร็จรับเงิน รูปแบบถูกต้องตามมาตรฐานการเบิกจ่าย",
    iconName: "BusFront",
    image: "/images/services/srv-bus-itinerary.webp",
    category: "Instant Alignment",
    type: "interactive",
    features: [
      "ตั๋ว บขส. 99/999 มาตรฐานจริง",
      "ออกคู่กับใบเสร็จรับเงิน",
      "รองรับเส้นทางทั่วประเทศไทย",
      "รับเอกสารทางอีเมลทันที",
    ],
    priceInfo: {
      startingAt: "450",
      unit: "ชุด",
      model: "Corporate Standard",
    },
    metadata: {
      isInstant: true,
      defaultTitle: "สร้างตั๋วรถทัวร์ บขส. สำหรับเบิกจ่าย | UNLINK-GLOBAL",
      defaultDescription: "ระบบสร้างแบบร่างตั๋วรถทัวร์และใบเสร็จมาตรฐาน บขส. 99/999 เพื่อใช้ประกอบการเบิกจ่าย",
      keywords: ["ตั๋วรถทัวร์ บขส.", "ใบเสร็จรถทัวร์", "เบิกค่าเดินทาง"],
    },
  },

  // 🛡️ REPUTATION SERVICES (จัดการชื่อเสียง)
  {
    id: "SRV-REP-01",
    slug: "extreme-intervention",
    title: "Extreme Reputation Intervention",
    shortDescription: "จัดการข่าวเสียและกู้ชื่อเสียงระดับ VIP ขั้นเด็ดขาด",
    description: "เมื่อการแจ้งลบปกติไม่ได้ผล เราเข้าจัดการด้วยเทคนิคพิเศษเพื่อจัดการมลพิษข้อมูลและทวงคืนศักดิ์ศรีให้คุณ",
    iconName: "Zap",
    image: "/images/services/srv-extreme-intervention.webp",
    category: "Reputation",
    type: "content",
    features: [
      "จัดการข่าวเสียบน Google",
      "ตอบโต้ข้อมูลเท็จเชิงลึก",
      "สถาปนาอัตลักษณ์ใหม่",
      "ระบบเฝ้าระวัง 24 ชม.",
    ],
    priceInfo: {
      startingAt: "50,000",
      unit: "โปรเจกต์",
      model: "High-Stake Intervention",
    },
    metadata: {
      defaultTitle: "ลบข่าวเสีย Google กู้ชื่อเสียงขั้นสูงสุด | UNLINK-GLOBAL",
      defaultDescription: "ทางออกสุดท้ายสำหรับเคสกู้ชื่อเสียงที่ซับซ้อน จัดการข่าวเสียและข้อมูลบิดเบือน",
      keywords: ["ลบข่าวเสีย Google", "จัดการคนประจานออนไลน์", "กู้ชื่อเสียง"],
    },
  },
  {
    id: "SRV-REP-02",
    slug: "blacklist-remover",
    title: "Blacklist Intelligence Removal",
    shortDescription: "ลบชื่อติดแบล็คลิสต์ออนไลน์ที่ไม่มีหลักฐาน",
    description: "ปฏิบัติการเชิงลึกเพื่อลบข้อมูลจากเว็บไซต์รวบรวมรายชื่อผู้กระทำผิดที่ขาดการตรวจสอบข้อเท็จจริง",
    iconName: "ShieldAlert",
    image: "/images/services/srv-security-protected.webp",
    category: "Reputation",
    type: "content",
    features: [
      "Blacklistseller Mediation",
      "False Accusation Counter",
      "Digital Footprint Cleansing",
    ],
    priceInfo: {
      startingAt: "15,000",
      unit: "เคส",
      model: "Intervention Protocol",
    },
    metadata: {
      defaultTitle: "ลบชื่อติดแบล็คลิสต์ออนไลน์ | UNLINK-GLOBAL",
      defaultDescription: "บริการจัดการลบชื่อออกจากเว็บไซต์แบล็คลิสต์ที่ไม่มีหลักฐานหรือถูกใส่ร้าย",
      keywords: ["ลบแบล็คลิสต์", "Blacklistseller", "ลบประวัติเสีย"],
    },
  },
  {
    id: "SRV-REP-03",
    slug: "crisis-cleanup",
    title: "Digital Crisis Cleanup",
    shortDescription: "ระงับวิกฤตชื่อเสียงออนไลน์เร่งด่วน 24/7",
    description: "มาตรการตอบโต้ทันทีเมื่อเกิดเหตุการณ์โจมตีชื่อเสียง หรือข้อมูลรั่วไหลที่ส่งผลกระทบอย่างรุนแรง",
    iconName: "Flame",
    image: "/images/services/srv-crisis-cleanup.webp",
    category: "Reputation",
    type: "content",
    features: [
      "Rapid Response Unit",
      "Search Engine Result Control",
      "Social Media Containment",
    ],
    priceInfo: {
      startingAt: "35,000",
      unit: "วิกฤต",
      model: "Emergency Protocol",
    },
    metadata: {
      defaultTitle: "จัดการวิกฤตชื่อเสียงออนไลน์เร่งด่วน | UNLINK-GLOBAL",
      defaultDescription: "ทีมตอบโต้สถานการณ์ฉุกเฉินเมื่อถูกโจมตีชื่อเสียงบนโลกออนไลน์",
      keywords: ["วิกฤตชื่อเสียง", "ลบโพสต์ประจาน", "Digital Crisis"],
    },
  },

  // 💰 FINANCIAL SERVICES (วิศวกรรมการเงิน)
  {
    id: "SRV-FIN-001",
    slug: "credit-engineering",
    title: "Credit Engineering & Recovery",
    shortDescription: "ฟื้นฟูเครดิตและการปรับโครงสร้างเพื่อการอนุมัติสินเชื่อ",
    description: "สำหรับคนอยากกู้บ้านแต่ติดแบล็คลิสต์ เราช่วยวิเคราะห์จุดตายและฟื้นฟูประวัติให้ธนาคารยอมรับ",
    iconName: "TrendingUp",
    image: "/images/services/srv-credit-engineering.webp",
    category: "Financial",
    type: "content",
    features: [
      "วิเคราะห์สาเหตุการถูกปฏิเสธ",
      "ฟื้นฟู Credit Scoring",
      "จัดเตรียมเอกสารรายได้",
      "ที่ปรึกษาจนถึงวันโอน",
    ],
    priceInfo: {
      startingAt: "9,900",
      unit: "โปรเจกต์",
      model: "Success-Based Action",
    },
    metadata: {
      defaultTitle: "กู้บ้านไม่ผ่าน ติดบูโร ทำยังไงดี? | UNLINK-GLOBAL",
      defaultDescription: "ทางออกสำหรับคนกู้บ้านไม่ผ่านเพราะติดบูโร ฟื้นฟูเครดิตและจัดเตรียมเอกสาร",
      keywords: ["กู้บ้านไม่ผ่าน", "แก้เครดิตบูโร", "ฟื้นฟูเครดิต"],
    },
  },
  {
    id: "SRV-FIN-002",
    slug: "statement-optimization",
    title: "Statement Optimization Protocol",
    shortDescription: "จัดระเบียบสเตทเม้นท์เพื่อการยื่นกู้และขอวีซ่า",
    description: "เราช่วยจัดการรายการเดินบัญชีของคุณให้กลายเป็นข้อมูลที่ธนาคารเชื่อถือ ผ่านการวางแผนที่ถูกต้อง",
    iconName: "FileText",
    image: "/images/services/srv-statement-optimization.webp",
    category: "Financial",
    type: "content",
    features: [
      "วางแผนการเดินเงินเข้า-ออก",
      "สร้างสภาพคล่องให้น่าเชื่อถือ",
      "ปรับพฤติกรรมการใช้จ่าย",
      "เชื่อมโยงข้อมูลกับเอกสารรายได้",
    ],
    priceInfo: {
      startingAt: "12,000",
      unit: "โปรเจกต์",
      model: "Success Protocol",
    },
    metadata: {
      defaultTitle: "วิธีเดินสเตทเม้นท์กู้บ้าน 2569 | UNLINK-GLOBAL",
      defaultDescription: "ที่ปรึกษาออกแบบรายการเดินบัญชี เตรียมความพร้อมเพื่อกู้บ้าน",
      keywords: ["วิธีเดินสเตทเม้นท์", "จัดระเบียบบัญชีธนาคาร", "วางแผนการเงิน"],
    },
  },

  // 📄 DOCUMENTATION SERVICES (เอกสาร)
  {
    id: "SRV-DOC-01",
    slug: "customized-income-documentation",
    title: "Customized Income Documentation",
    shortDescription: "จัดทำเอกสารรับรองรายได้และอาชีพตามสถานการณ์จริง",
    description: "ช่วยรวบรวมและจัดหมวดหมู่หลักฐานรายได้ให้มีความเป็นมืออาชีพตามมาตรฐานสถาบัน",
    iconName: "FileCheck",
    image: "/images/services/srv-income-documentation.webp",
    category: "Documentation",
    type: "content",
    features: [
      "Income Portfolio Assembly",
      "Professional Certification Layout",
      "Verification Ready Pack",
    ],
    priceInfo: {
      startingAt: "5,500",
      unit: "ชุด",
      model: "Operational Standard",
    },
    metadata: {
      defaultTitle: "จัดทำเอกสารรับรองรายได้อาชีพอิสระ | UNLINK-GLOBAL",
      defaultDescription: "บริการช่วยรวบรวมหลักฐานรายได้ให้ถูกต้องและน่าเชื่อถือเพื่อใช้ยื่นกู้หรือขอวีซ่า",
      keywords: ["เอกสารรับรองรายได้", "รายได้อาชีพอิสระ", "รับรองเงินเดือน"],
    },
  },
];
