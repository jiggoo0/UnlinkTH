/**
 * UNLINK-GLOBAL | Service Registry (2026)
 * -------------------------------------------------------------------------
 * ศูนย์กลางการจัดการบริการและตัวกำหนดประเภทการทำงาน (Hybrid Registry)
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
  {
    id: "SRV-IMM-01",
    slug: "flight-itinerary-visa",
    title: "Flight Itinerary Receipt Generator",
    shortDescription:
      "ระบบออกใบจองตั๋วเครื่องบินมาตรฐานสากลเพื่อการยื่นวีซ่าและแสดงต่อ ตม.",
    description:
      "ระบบสร้างแบบร่างเอกสารยืนยันแผนการเดินทาง (Confirmed Format) ผ่านสถาปัตยกรรม GDS รองรับสายการบินหลักทั่วโลก ข้อมูลถูกต้อง 100%",
    iconName: "Plane",
    image: "/images/services/srv-flight-itinerary.webp",
    category: "Immigration",
    type: "interactive",
    features: [
      "ระบบสร้างข้อมูลมาตรฐาน GDS",
      "รองรับสายการบินชั้นนำทั่วโลก",
      "เอกสารระบุรหัสจอง (PNR) จริง",
      "จัดเตรียมไฟล์ PDF คุณภาพสูง",
    ],
    priceInfo: {
      startingAt: "490",
      unit: "Protocol",
      model: "Professional Alignment",
    },
    metadata: {
      defaultTitle: "จองตั๋วเครื่องบินยื่นวีซ่า 2569 | UNLINK-GLOBAL",
      defaultDescription:
        "บริการออกใบจองตั๋วเครื่องบินสำหรับยื่นวีซ่าเชงเก้น อเมริกา และยุโรป ข้อมูลตรงตามระบบสายการบิน",
      keywords: [
        "จองตั๋วเครื่องบินยื่นวีซ่า",
        "Flight Itinerary for Visa",
        "ใบจองตั๋วเครื่องบิน",
      ],
    },
  },
  {
    id: "SRV-IMM-02",
    slug: "express-bus-ticket",
    title: "Express Bus E-Ticket",
    shortDescription: "ระบบสร้างแบบร่างตั๋วโดยสาร บขส. 99/999 มาตรฐานองค์กร",
    description:
      "ระบบสร้างเอกสารยืนยันการเดินทางรถทัวร์ บขส. 99/999 (E-Ticket) รูปแบบถูกต้องตามมาตรฐานการเบิกจ่ายบริษัทและหน่วยงานราชการ",
    iconName: "BusFront",
    image: "/images/services/srv-bus-itinerary.webp",
    category: "Immigration",
    type: "interactive",
    features: [
      "มาตรฐานการเบิกจ่ายองค์กร",
      "ความแม่นยำของข้อมูล 100%",
      "รองรับเส้นทางทั่วประเทศ",
      "ออกเอกสารได้ทันที",
    ],
    priceInfo: {
      startingAt: "450",
      unit: "ใบ",
      model: "Corporate Standard",
    },
    metadata: {
      defaultTitle: "สร้างตั๋วรถทัวร์ บขส. สำหรับเบิกจ่าย | UNLINK-GLOBAL",
      defaultDescription:
        "ระบบสร้างแบบร่างตั๋วรถทัวร์มาตรฐาน บขส. 99/999 เพื่อใช้ประกอบการเบิกจ่ายและยืนยันการเดินทาง",
      keywords: ["ตั๋วรถทัวร์ บขส.", "E-Ticket รถทัวร์", "ใบเสร็จรถทัวร์"],
    },
  },
  {
    id: "SRV-FIN-001",
    slug: "credit-engineering",
    title: "Credit Engineering & Recovery",
    shortDescription:
      "วิศวกรรมเครดิตและการปรับโครงสร้างการเงินเพื่อการอนุมัติสินเชื่อ",
    description:
      "สำหรับคนอยากกู้บ้านแต่ติดแบล็คลิสต์ หรือกู้ที่ไหนก็ไม่ผ่าน เราช่วยวิเคราะห์จุดตายและฟื้นฟูประวัติให้ธนาคารยอมรับ",
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
      defaultDescription:
        "ทางออกสำหรับคนกู้บ้านไม่ผ่านเพราะติดบูโร เราช่วยฟื้นฟูเครดิตและจัดเตรียมเอกสารรายได้ให้ถูกต้อง",
      keywords: ["กู้บ้านไม่ผ่าน", "แก้เครดิตบูโร", "ฟื้นฟูเครดิต"],
    },
  },
  {
    id: "SRV-FIN-002",
    slug: "statement-optimization",
    title: "Statement Optimization Protocol",
    shortDescription: "จัดระเบียบสเตทเม้นท์เพื่อการยื่นกู้และขอวีซ่า",
    description:
      "เราช่วยจัดการรายการเดินบัญชีของคุณให้กลายเป็นข้อมูลที่ธนาคารเชื่อถือ ผ่านการวางแผนเดินเงินที่ถูกต้อง",
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
      defaultDescription:
        "ที่ปรึกษาออกแบบรายการเดินบัญชี เตรียมความพร้อมเพื่อกู้บ้าน เปลี่ยนบัญชีทั่วไปให้เป็นสเตทเม้นท์เกรด A",
      keywords: [
        "วิธีเดินสเตทเม้นท์",
        "จัดระเบียบบัญชีธนาคาร",
        "วางแผนการเงิน",
      ],
    },
  },
  {
    id: "SRV-REP-01",
    slug: "extreme-intervention",
    title: "Extreme Reputation Intervention",
    shortDescription:
      "ทางออกสุดท้ายสำหรับเคสยาก จัดการข่าวเสียและกู้ชื่อเสียงระดับ VIP",
    description:
      "เมื่อการแจ้งลบปกติไม่ได้ผล เราเข้าจัดการด้วยเทคนิคพิเศษเพื่อจัดการมลพิษข้อมูลและทวงคืนศักดิ์ศรีให้คุณ",
    iconName: "Zap",
    image: "/images/services/srv-security-protected.webp",
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
      defaultDescription:
        "ทางออกสุดท้ายสำหรับเคสกู้ชื่อเสียงที่ซับซ้อน จัดการข่าวเสียและข้อมูลบิดเบือนด้วยเทคนิคระดับสูง",
      keywords: ["ลบข่าวเสีย Google", "จัดการคนประจานออนไลน์", "กู้ชื่อเสียง"],
    },
  },
  {
    id: "SRV-FIN-003",
    slug: "institutional-reliability",
    title: "Institutional Reliability Alignment",
    shortDescription:
      "ยกระดับความน่าเชื่อถือระดับสถาบันเพื่อการทำธุรกรรมขนาดใหญ่",
    description:
      "วางโครงสร้างตัวตนและเอกสารเพื่อสอดรับกับเกณฑ์การตรวจสอบของสถาบันการเงินระดับสากล",
    iconName: "Building2",
    image: "/images/services/srv-institutional.webp",
    category: "Financial",
    type: "content",
    features: [
      "Corporate Profile Alignment",
      "Financial Transparency Audit",
      "Compliance Structure Design",
    ],
    priceInfo: {
      startingAt: "25,000",
      unit: "โปรเจกต์",
      model: "Institutional Standard",
    },
    metadata: {
      defaultTitle:
        "ยกระดับความน่าเชื่อถือทางการเงินระดับสถาบัน | UNLINK-GLOBAL",
      defaultDescription:
        "บริการปรับจูนโปรไฟล์ทางการเงินให้สอดคล้องกับมาตรฐานการตรวจสอบของธนาคารชั้นนำ",
      keywords: [
        "Institutional Reliability",
        "Financial Compliance",
        "ธนาคารตรวจสอบ",
      ],
    },
  },
  {
    id: "SRV-FIN-004",
    slug: "transparent-investment",
    title: "Transparent Investment Documentation",
    shortDescription: "จัดทำเอกสารแสดงแหล่งที่มาของเงินลงทุนอย่างโปร่งใส",
    description:
      "ช่วยเตรียมข้อมูลและหลักฐานการลงทุนให้มีความชัดเจนตามกฎระเบียบป้องกันการฟอกเงิน (AMLO)",
    iconName: "PieChart",
    image: "/images/services/srv-investment.webp",
    category: "Financial",
    type: "content",
    features: [
      "Source of Funds Verification",
      "Investment Logic Documentation",
      "AMLO Compliance Check",
    ],
    priceInfo: {
      startingAt: "15,000",
      unit: "ชุด",
      model: "Compliance Standard",
    },
    metadata: {
      defaultTitle: "เอกสารแสดงแหล่งที่มาของเงินลงทุน | UNLINK-GLOBAL",
      defaultDescription:
        "บริการจัดเตรียมเอกสารที่มาของรายได้สำหรับการลงทุนขนาดใหญ่เพื่อให้ผ่านการตรวจสอบความโปร่งใส",
      keywords: ["ที่มาของเงิน", "AMLO Compliance", "เอกสารการลงทุน"],
    },
  },
  {
    id: "SRV-REP-02",
    slug: "blacklist-remover",
    title: "Blacklist Intelligence Removal",
    shortDescription: "จัดการชื่อติดแบล็คลิสต์ออนไลน์ที่ไม่มีหลักฐาน",
    description:
      "ปฏิบัติการเชิงลึกเพื่อลบข้อมูลจากเว็บไซต์รวบรวมรายชื่อผู้กระทำผิดที่ขาดการตรวจสอบข้อเท็จจริง",
    iconName: "ShieldAlert",
    image: "/images/services/srv-blacklist.webp",
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
      defaultDescription:
        "บริการจัดการลบชื่อออกจากเว็บไซต์แบล็คลิสต์ที่ไม่มีหลักฐานหรือถูกใส่ร้าย",
      keywords: ["ลบแบล็คลิสต์", "Blacklistseller", "ลบประวัติเสีย"],
    },
  },
  {
    id: "SRV-REP-03",
    slug: "crisis-cleanup",
    title: "Digital Crisis Cleanup",
    shortDescription: "ระงับวิกฤตชื่อเสียงออนไลน์แบบเร่งด่วน 24/7",
    description:
      "มาตรการตอบโต้ทันทีเมื่อเกิดเหตุการณ์โจมตีชื่อเสียง หรือข้อมูลรั่วไหลที่ส่งผลกระทบต่อภาพลักษณ์อย่างรุนแรง",
    iconName: "Flame",
    image: "/images/services/srv-crisis.webp",
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
      defaultDescription:
        "ทีมตอบโต้สถานการณ์ฉุกเฉินเมื่อถูกโจมตีชื่อเสียงบนโลกออนไลน์ พร้อมจัดการภายใน 24 ชม.",
      keywords: [
        "วิกฤตชื่อเสียง",
        "ลบโพสต์ประจาน",
        "Digital Crisis Management",
      ],
    },
  },
  {
    id: "SRV-REP-04",
    slug: "digital-detox-jobbers",
    title: "Professional Digital Detox",
    shortDescription: "ล้างประวัติออนไลน์เพื่อการสมัครงานและปรับโปรไฟล์ใหม่",
    description:
      "จัดการข้อมูลในอดีตที่อาจเป็นอุปสรรคต่อความก้าวหน้าทางอาชีพ เพื่อให้คุณเริ่มต้นใหม่ได้อย่างมั่นใจ",
    iconName: "UserMinus",
    image: "/images/services/srv-detox.webp",
    category: "Reputation",
    type: "content",
    features: [
      "Employment Background Prep",
      "Social History Cleansing",
      "Identity Refresh Strategy",
    ],
    priceInfo: {
      startingAt: "8,500",
      unit: "โปรไฟล์",
      model: "Personal Privacy Standard",
    },
    metadata: {
      defaultTitle: "ล้างประวัติออนไลน์เพื่อการสมัครงาน | UNLINK-GLOBAL",
      defaultDescription:
        "ปรับจูนตัวตนดิจิทัลให้ดูเป็นมืออาชีพ ลบข้อมูลสุ่มเสี่ยงที่อาจทำให้พลาดโอกาสงานสำคัญ",
      keywords: [
        "ล้างประวัติสมัครงาน",
        "Background Check Prep",
        "Privacy Management",
      ],
    },
  },
  {
    id: "SRV-REP-05",
    slug: "ex-partner-eraser",
    title: "Personal History Containment",
    shortDescription:
      "จัดการข้อมูลและความสัมพันธ์ในอดีตที่ส่งผลกระทบต่อปัจจุบัน",
    description:
      "บริการลบรูปภาพ ข้อความ หรือโพสต์ที่เกี่ยวข้องกับความสัมพันธ์เก่าภายใต้ความเป็นส่วนตัวสูงสุด",
    iconName: "HeartOff",
    image: "/images/services/srv-privacy.webp",
    category: "Reputation",
    type: "content",
    features: [
      "Content Removal Requests",
      "Link Suppression",
      "Privacy Shield Implementation",
    ],
    priceInfo: {
      startingAt: "12,000",
      unit: "เคส",
      model: "Privacy Protocol",
    },
    metadata: {
      defaultTitle: "ลบข้อมูลความสัมพันธ์เก่าออนไลน์ | UNLINK-GLOBAL",
      defaultDescription:
        "จัดการลบรูปคู่หรือโพสต์เก่าที่ไม่อยากให้ใครเห็นอีก เพื่อความเป็นส่วนตัวในชีวิตใหม่",
      keywords: ["ลบรูปแฟนเก่า", "จัดการความเป็นส่วนตัว", "ลบประวัติความรัก"],
    },
  },
  {
    id: "SRV-REP-06",
    slug: "sme-reputation-rescue",
    title: "SME Reputation Rescue",
    shortDescription:
      "กู้ชื่อเสียงและจัดการรีวิวเชิงลบสำหรับธุรกิจขนาดกลางและย่อม",
    description:
      "รับมือกับการรีวิวที่กลั่นแกล้งหรือข้อมูลเท็จที่ทำลายความเชื่อมั่นของลูกค้าต่อแบรนด์ของคุณ",
    iconName: "Store",
    image: "/images/services/srv-sme.webp",
    category: "Reputation",
    type: "content",
    features: [
      "Review Management Strategy",
      "Brand Sentiment Analysis",
      "Trust Recovery Campaign",
    ],
    priceInfo: {
      startingAt: "18,000",
      unit: "แบรนด์",
      model: "Business Recovery",
    },
    metadata: {
      defaultTitle: "จัดการรีวิวเสีย กู้ชื่อเสียงร้านค้า SME | UNLINK-GLOBAL",
      defaultDescription:
        "บริการกู้ความเชื่อมั่นให้ธุรกิจ SME จัดการรีวิวเชิงลบและข้อมูลเท็จที่ทำลายแบรนด์",
      keywords: ["ลบรีวิวเสีย", "กู้ชื่อเสียงร้านค้า", "SME Reputation"],
    },
  },
  {
    id: "SRV-IMM-03",
    slug: "bus-itinerary-verified",
    title: "Verified Bus Itinerary Protocol",
    shortDescription: "ระบบออกใบจองรถทัวร์อัตโนมัติเพื่อการยื่นวีซ่าเชงเก้น",
    description:
      "ออกใบจองรถทัวร์ (Bus Itinerary) พร้อมรหัสยืนยันจริงทันที สำหรับยื่นวีซ่าและแผนการเดินทางสากล",
    iconName: "Bus",
    image: "/images/services/srv-bus-itinerary.webp",
    category: "Immigration",
    type: "content",
    features: [
      "Real-time PDF Generation",
      "Valid Reference Codes",
      "Global Embassy Acceptance",
    ],
    priceInfo: {
      startingAt: "400",
      unit: "ใบ",
      model: "Automated Protocol",
    },
    metadata: {
      defaultTitle: "ใบจองรถทัวร์ยื่นวีซ่าเชงเก้น | UNLINK-GLOBAL",
      defaultDescription:
        "บริการออกใบจองรถทัวร์สำหรับการเดินทางในยุโรปและทั่วโลก เพื่อประกอบการยื่นขอวีซ่า",
      keywords: ["Bus Itinerary for Visa", "ใบจองรถทัวร์วีซ่า", "วีซ่าเชงเก้น"],
    },
  },
  {
    id: "SRV-IMM-04",
    slug: "lifestyle-mobility-independent-visa",
    title: "Lifestyle Mobility & Independent Visa",
    shortDescription:
      "ยุทธศาสตร์การเตรียมโปรไฟล์เพื่อขอวีซ่าพำนักระยะยาวสำหรับอาชีพอิสระ",
    description:
      "ออกแบบแผนการเดินทางและเอกสารประกอบเพื่อรองรับ Lifestyle การทำงานแบบ Digital Nomad ทั่วโลก",
    iconName: "Globe",
    image: "/images/services/srv-mobility.webp",
    category: "Immigration",
    type: "content",
    features: [
      "Digital Nomad Visa Strategy",
      "Independent Worker Profiling",
      "Global Mobility Planning",
    ],
    priceInfo: {
      startingAt: "15,000",
      unit: "โปรเจกต์",
      model: "Strategic Alignment",
    },
    metadata: {
      defaultTitle: "วางแผนวีซ่า Digital Nomad และ Freelance | UNLINK-GLOBAL",
      defaultDescription:
        "บริการเตรียมโปรไฟล์เพื่อขอวีซ่าพำนักระยะยาวในต่างประเทศสำหรับผู้ที่ทำงานอิสระ",
      keywords: [
        "Digital Nomad Visa",
        "อาชีพอิสระขอวีซ่า",
        "Lifestyle Mobility",
      ],
    },
  },
  {
    id: "SRV-DOC-01",
    slug: "customized-income-documentation",
    title: "Customized Income Documentation",
    shortDescription: "จัดทำเอกสารรับรองรายได้และอาชีพตามสถานการณ์จริง",
    description:
      "ช่วยรวบรวมและจัดหมวดหมู่หลักฐานรายได้ให้มีความเป็นมืออาชีพและน่าเชื่อถือตามมาตรฐานสถาบัน",
    iconName: "FileCheck",
    image: "/images/services/srv-documentation.webp",
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
      defaultDescription:
        "บริการช่วยรวบรวมหลักฐานรายได้ให้ถูกต้องและน่าเชื่อถือเพื่อใช้ยื่นกู้หรือขอวีซ่า",
      keywords: ["เอกสารรับรองรายได้", "รายได้อาชีพอิสระ", "รับรองเงินเดือน"],
    },
  },
];
