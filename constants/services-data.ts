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
      "ลบโพสต์เสี่ยงย้อนหลัง ปรับ Bio ให้มืออาชีพ สำหรับคนหางานและข้าราชการ",
    description:
      "เตรียมตัวสมัครงานใหม่หรือสอบราชการอย่างมั่นใจ เราช่วยสแกนและลบโพสต์ย้อนหลัง 5-10 ปีที่มีความเสี่ยง ทั้งคำหยาบ รูปปาร์ตี้หลุดโลก หรือการบ่นเจ้านายเก่าที่อาจทำให้ HR ปัดตก พร้อมปรับตั้งค่าความเป็นส่วนตัว (Privacy Audit) ไม่ให้ใครขุดเจออดีตของคุณ",
    iconName: "History",
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
      "ลบรูปคู่ รูปหลุด คลิปส่วนตัว เพื่อการเริ่มต้นใหม่ที่สดใส",
    description:
      "เมื่อความรักจบ แต่ Digital Footprint ยังอยู่... เราช่วยเจรจาและดำเนินการทางเทคนิคเพื่อลบรูปคู่ที่ไม่อยากจำ หรือจัดการเคสรูปหลุด/คลิปส่วนตัว (Revenge Porn) อย่างเร่งด่วนและเป็นความลับที่สุด เพื่อให้คุณมูฟออนได้อย่างไร้กังวล",
    iconName: "ImageOff",
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
    shortDescription: "หยุดไฟดราม่า ลบต้นตอ และร่างแถลงการณ์ขอโทษอย่างถูกจริต",
    description:
      "เมื่อทัวร์ลงจนตั้งตัวไม่ทัน เราคือทีมฉุกเฉินที่จะเข้าไปช่วยดับไฟ ดำเนินการ Report ลบโพสต์ต้นเรื่อง ซ่อนคอมเมนต์ Toxic ยื่นเรื่อง De-index ข่าวเสียออกจาก Google พร้อมช่วยร่างคำแถลงการณ์ (Apology Statement) ที่จริงใจเพื่อเปลี่ยนกระแสลบให้กลับมาเป็นบวก",
    iconName: "Siren",
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
      "ลบรูปประจานหน้าบัตรประชาชน กู้คืนชื่อเสียงจากการถูกแอบอ้าง",
    description:
      "หากคุณค้นชื่อตัวเองแล้วเจอรูปถือบัตรประชาชน หรือถูกเว็บพนัน/แอปเงินกู้เถื่อนนำรูปไปประจานว่า 'โกง' ทั้งที่ไม่เป็นความจริง เราช่วยประสานงานแจ้งลบรูปเหล่านั้นออกจาก Google ด้วยกฎหมาย PDPA และสร้างหน้าโปรไฟล์ใหม่ที่มีความน่าเชื่อถือขึ้นมาแทนที่",
    iconName: "ShieldAlert",
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
      "จัดการรีวิวปลอม หน้าม้าดิสเครดิต ดันดาวร้านค้าให้กลับมาปัง",
    description:
      "ปกป้องธุรกิจของคุณจากการโจมตีของคู่แข่งและรีวิวผี (Fake Reviews) เรายื่นเรื่องคัดค้านรีวิวที่ไม่เป็นความจริงกับ Google Maps/Facebook พร้อมทำแคมเปญ 'Seeding น้ำดี' กระตุ้นให้ลูกค้าจริงกลับมารีวิว และเขียนบทความ SEO เชียร์ร้านเพื่อกลบข่าวด้านลบ",
    iconName: "Store",
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
]
