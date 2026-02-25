/** @format */

import { Service } from "@/types"

export const servicesData: Service[] = [
  // ------------------------------------------------------------------
  // GROUP 1: PERSONAL CLEANUP (ล้างประวัติส่วนบุคคล)
  // ------------------------------------------------------------------
  {
    id: "ser-thai-001",
    slug: "digital-detox-jobbers",
    title: "Digital Detox for Jobbers (ล้างอดีตวัยเกรียน)",
    shortDescription:
      "สแกนและลบประวัติโซเชียลสุ่มเสี่ยงย้อนหลัง 10 ปี เพื่อผ่าน Background Check ในบริษัทชั้นนำและงานราชการ",
    description:
      "เตรียมตัวสมัครงานใหม่หรือสอบราชการอย่างมั่นใจ เราช่วยสแกนและลบโพสต์ย้อนหลัง 5-10 ปีที่มีความเสี่ยง ทั้งคำหยาบ รูปปาร์ตี้หลุดโลก หรือการบ่นเจ้านายเก่าที่อาจทำให้ HR ปัดตก พร้อมปรับตั้งค่าความเป็นส่วนตัว (Privacy Audit) ไม่ให้ใครขุดเจออดีตของคุณ",
    iconName: "History",
    image: "/images/service/jobbers-clean.webp",
    category: "Personal",
    features: [
      "Risk Scan: สแกนโพสต์ย้อนหลัง 5-10 ปี ด้วยคีย์เวิร์ดสุ่มเสี่ยง",
      "Toxic Clean: ลบคำหยาบและเนื้อหาที่ดูไม่เป็นมืออาชีพบน FB/IG/X",
      "Privacy Audit: ล็อกโปรไฟล์ให้ปลอดภัยจากการส่องของบุคคลภายนอก",
      "Pro Bio: แนะนำการเขียนแนะนำตัวใหม่ให้ดูภูมิฐานบน LinkedIn",
    ],
    priceInfo: {
      startingAt: "2,900",
      unit: "ครั้ง",
      model: "One-time Payment",
    },
    metadata: {
      defaultTitle: "บริการลบโพสต์ย้อนหลัง ตรวจประวัติก่อนสมัครงาน | UNLINK-TH",
      defaultDescription:
        "ล้างประวัติโซเชียล ลบคำหยาบ รูปปาร์ตี้ เตรียมตัวสมัครงานราชการและเอกชน",
      keywords: ["ลบโพสต์เก่า", "ตรวจประวัติโซเชียล", "Digital Footprint"],
    },
  },
  {
    id: "ser-thai-002",
    slug: "ex-partner-eraser",
    title: "Ex-Partner Eraser (มูฟออนความทรงจำ)",
    shortDescription:
      "จัดการลบรูปคู่และคลิปส่วนตัวออกจากระบบการค้นหาถาวร เพื่อการเริ่มต้นใหม่ที่สง่างามและเป็นส่วนตัว",
    description:
      "เมื่อความรักจบ แต่ Digital Footprint ยังอยู่... เราช่วยเจรจาและดำเนินการทางเทคนิคเพื่อลบรูปคู่ที่ไม่อยากจำ หรือจัดการเคสรูปหลุด/คลิปส่วนตัว (Revenge Porn) อย่างเร่งด่วนและเป็นความลับที่สุด เพื่อให้คุณมูฟออนได้อย่างไร้กังวล",
    iconName: "ImageOff",
    image: "/images/service/ex-eraser.webp",
    category: "Personal",
    features: [
      "Content Removal: แจ้งลบรูปคู่และแท็กที่ไม่ต้องการออกจากระบบ",
      "Sensitive Takedown: ดำเนินการทางกฎหมายลบภาพลับ/คลิปหลุดทันที",
      "DMCA Notice: แจ้งละเมิดลิขสิทธิ์ภาพส่วนตัว",
      "New Profile (Optional): บริการถ่ายรูปโปรไฟล์ใหม่ปรับลุคให้สดใส",
    ],
    priceInfo: {
      startingAt: "3,900",
      unit: "เคส",
      model: "Starting Price",
    },
    metadata: {
      defaultTitle: "รับลบรูปหลุด ลบรูปแฟนเก่า มูฟออนออนไลน์ | UNLINK-TH",
      defaultDescription:
        "บริการลบภาพส่วนตัว คลิปหลุด และจัดการ Digital Footprint หลังเลิกรา",
      keywords: ["ลบรูปหลุด", "Revenge Porn", "ลบรูปแฟนเก่า"],
    },
  },

  // ------------------------------------------------------------------
  // GROUP 2: REPUTATION RESCUE (กู้ชื่อเสียงและวิกฤต)
  // ------------------------------------------------------------------
  {
    id: "ser-thai-003",
    slug: "crisis-cleanup",
    title: "Crisis Clean-Up (จบดราม่าทัวร์ลง)",
    shortDescription:
      "ระงับวิกฤตทัวร์ลงใน 24 ชม. ลบต้นตอข่าวเสียและร่างแถลงการณ์เชิงยุทธศาสตร์เพื่อหยุดยั้งความเสียหาย",
    description:
      "เมื่อทัวร์ลงจนตั้งตัวไม่ทัน เราคือทีมฉุกเฉินที่จะเข้าไปช่วยดับไฟ ดำเนินการ Report ลบโพสต์ต้นเรื่อง ซ่อนคอมเมนต์ Toxic ยื่นเรื่อง De-index ข่าวเสียออกจาก Google พร้อมช่วยร่างคำแถลงการณ์ (Apology Statement) ที่จริงใจเพื่อเปลี่ยนกระแสลบให้กลับมาเป็นบวก",
    iconName: "Siren",
    image: "/images/service/crisis-radar.webp",
    category: "Crisis",
    features: [
      "Urgent Takedown: รีพอร์ตลบโพสต์และต้นตอดราม่าเร่งด่วน",
      "Toxic Comment Hide: ซ่อนคอมเมนต์ด่าทอที่สร้างความเสียหาย",
      "Google De-index: นำลิงก์ข่าวดราม่าออกจากผลการค้นหา",
      "Apology Script: ร่างคำขอโทษที่จริงใจ ลดแรงปะทะจากสังคม",
    ],
    priceInfo: {
      startingAt: "15,000",
      unit: "เคส",
      model: "Project Based",
    },
    metadata: {
      defaultTitle: "บริการแก้ข่าวเสีย รับมือทัวร์ลง ดราม่าโซเชียล | UNLINK-TH",
      defaultDescription:
        "ทีมฉุกเฉินกู้ชื่อเสียงจากดราม่า ลบข่าวเสีย ร่างคำแถลงการณ์หยุดวิกฤต",
      keywords: ["แก้ข่าวเสีย", "รับมือทัวร์ลง", "Crisis Management"],
    },
  },
  {
    id: "ser-thai-004",
    slug: "blacklist-remover",
    title: "Blacklist Remover (กู้ชื่อหนี้นอกระบบ)",
    shortDescription:
      "ลบชื่อจากเว็บแบล็คลิสต์และรูปประจานหน้าบัตรประชาชน กู้คืนศักดิ์ศรีจากการถูกแอบอ้างออนไลน์",
    description:
      "หากคุณค้นชื่อตัวเองแล้วเจอรูปถือบัตรประชาชน หรือถูกเว็บพนัน/แอปเงินกู้เถื่อนนำรูปไปประจานว่า 'โกง' ทั้งที่ไม่เป็นความจริง เราช่วยประสานงานแจ้งลบรูปเหล่านั้นออกจาก Google ด้วยกฎหมาย PDPA และสร้างหน้าโปรไฟล์ใหม่ที่มีความน่าเชื่อถือขึ้นมาแทนที่",
    iconName: "ShieldAlert",
    image: "/images/service/shield-id.webp",
    category: "Legal",
    features: [
      "PDPA Erasure: แจ้งลบรูปบัตรประชาชนและข้อมูลส่วนตัว",
      "Fake Site Report: รีพอร์ตปิดเว็บประจานที่ละเมิดกฎหมาย",
      "Search Clean: ลบผลการค้นหาคำว่า 'โกง' หรือ 'Blacklist' ที่ไม่จริง",
      "Profile Rebuild: สร้างโปรไฟล์ขาวสะอาดบนเว็บ Authority สูง",
    ],
    priceInfo: {
      startingAt: "5,900",
      unit: "ชื่อ/เคส",
      model: "Fixed Rate",
    },
    metadata: {
      defaultTitle: "รับลบรูปประจาน ลบแบล็คลิสต์ออนไลน์ | UNLINK-TH",
      defaultDescription:
        "กู้ชื่อเสียงจากการถูกแอปเงินกู้ประจาน ลบรูปบัตรประชาชนบน Google",
      keywords: ["ลบรูปประจาน", "ลบแบล็คลิสต์", "PDPA"],
    },
  },

  // ------------------------------------------------------------------
  // GROUP 3: BUSINESS BOOSTER (กู้ศักดิ์ศรีธุรกิจ)
  // ------------------------------------------------------------------
  {
    id: "ser-thai-005",
    slug: "sme-reputation-rescue",
    title: "SME Reputation Rescue (กู้ศักดิ์ศรีร้านค้า)",
    shortDescription:
      "จัดการรีวิวปลอมและหน้าม้าดิสเครดิตบน Google Maps กู้คะแนนดาวเพื่อรักษาฐานลูกค้าและผลกำไร",
    description:
      "ปกป้องธุรกิจของคุณจากการโจมตีของคู่แข่งและรีวิวผี (Fake Reviews) เรายื่นเรื่องคัดค้านรีวิวที่ไม่เป็นความจริงกับ Google Maps/Facebook พร้อมทำแคมเปญ 'Seeding น้ำดี' กระตุ้นให้ลูกค้าจริงกลับมารีวิว และเขียนบทความ SEO เชียร์ร้านเพื่อกลบข่าวด้านลบ",
    iconName: "Store",
    image: "/images/service/sme-rescue.webp",
    category: "Business",
    features: [
      "Fake Review Fight: ยื่นเรื่องลบรีวิวปลอมที่ผิดนโยบายแพลตฟอร์ม",
      "Pantip Defense: ชี้แจงและจัดการกระทู้โจมตีร้านค้า",
      "Good Seeding: กระตุ้นรีวิว 5 ดาวจากลูกค้าจริง",
      "SEO Shield: เขียนบทความเชียร์ร้านดันขึ้นหน้าแรก Google",
    ],
    priceInfo: {
      startingAt: "12,000",
      unit: "เดือน/โปรเจกต์",
      model: "Monthly/Project",
    },
    metadata: {
      defaultTitle: "รับลบรีวิวแย่ Google Maps กู้ดาวร้านค้า | UNLINK-TH",
      defaultDescription:
        "จัดการรีวิวหน้าม้า กู้ชื่อเสียงร้านอาหาร คลินิก และธุรกิจ SME",
      keywords: ["ลบรีวิว Google Maps", "แก้ดาวตก", "Reputation Management"],
    },
  },
  // ------------------------------------------------------------------
  // GROUP 4: EXTREME MEASURES (มาตรการขั้นเด็ดขาด)
  // ------------------------------------------------------------------
  {
    id: "ser-thai-006",
    slug: "extreme-intervention",
    title: "The Last Resort (ปฏิบัติการแทรกแซงขั้นสูงสุด)",
    shortDescription:
      "เทคนิคพิเศษเพื่อจัดการเคส 'ลบไม่ได้' หรือคู่กรณีที่มีอิทธิพลสูง ด้วยมาตรการแทรกแซงเชิงลึกที่เห็นผลจริง",
    description:
      "เมื่อมาตรการทางกฎหมายและเทคนิคปกติเข้าถึงจุดตัน เราใช้ 'Advanced Unconventional Tactics' เพื่อทำลายโครงสร้างพื้นฐานของข้อมูลเสียและระงับการเข้าถึงจากต้นตออย่างเบ็ดเสร็จ",
    iconName: "Zap",
    image: "/images/service/extreme-intervention.webp",
    category: "Extreme",
    features: [
      "Infrastructure Disruption: ตัดวงจรการทำงานของเว็บไซต์ต้นทาง",
      "Saturation Shield: กลบข้อมูลเสียด้วยระบบกระจายสัญญาณแบบ Multiplex",
      "Deep Liaison: การเจรจาเชิงลึกผ่านเครือข่าย Specialist สากล",
      "Total Erasure: มาตรการถอนรากถอนโคนข้อมูลที่ยากที่สุด",
    ],
    priceInfo: {
      startingAt: "50,000",
      unit: "โปรเจกต์",
      model: "Custom Strategy",
    },
    metadata: {
      defaultTitle:
        "บริการจัดการชื่อเสียงขั้นสูง เทคนิคพิเศษเห็นผลจริง | UNLINK-TH",
      defaultDescription:
        "มาตรการขั้นสุดท้ายสำหรับเคสที่ยากที่สุด จัดการข่าวเสียและข้อมูลทำลายชื่อเสียงที่ลบไม่สำเร็จด้วยวิธีปกติ",
      keywords: [
        "เทคนิคพิเศษลบข่าว",
        "แก้ชื่อเสียงเสียขั้นรุนแรง",
        "The Last Resort",
      ],
    },
  },
]
