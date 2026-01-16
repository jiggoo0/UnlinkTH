/**
 * Interface สำหรับข้อมูลผลงาน (Case Study)
 * ปรับปรุงให้ตรงกับ Category และ Path ของไฟล์ MDX ในระบบใหม่
 */
export interface CaseStudy {
  slug: string
  title: string
  summary: string
  category:
    | "Blacklist Removal"
    | "Reputation Management"
    | "Crisis Management"
    | "Legal & Privacy"
  status: "Success" | "Ongoing"
  imageUrl: string
  date: string
  featured: boolean
}

/**
 * รายชื่อผลงานที่โดดเด่น (Featured Cases)
 * ข้อมูลนี้จะถูกดึงไปแสดงในหน้าแรก (Landing Page) และหน้าหมวดหมู่
 */
export const featuredCases: CaseStudy[] = [
  {
    slug: "clear-blacklist-misunderstand",
    title: "เคสลบชื่อจากเว็บประจานคนโกง",
    summary:
      "แก้ปัญหาความเข้าใจผิดจากการติดแบล็กลิสต์จากการโอนยอดซ้ำซ้อน เราใช้เทคนิคการเจรจาเชิงลึกจนข้อมูลถูกลบออกภายใน 7 วัน",
    category: "Blacklist Removal",
    status: "Success",
    imageUrl: "/images/cases/blacklist-clear.webp",
    date: "2026-01-15",
    featured: true,
  },
  {
    slug: "seo-push-negative-news",
    title: "เคสจัดการข่าวเสียในอดีต (SEO Push)",
    summary:
      "ข่าวเก่าบนเว็บข่าวใหญ่ที่ลบไม่ได้ เราใช้วิธีสร้าง Content Authority ใหม่เพื่อดันผลการค้นหาหน้าแรกให้เป็นเชิงบวก 100%",
    category: "Reputation Management",
    status: "Success",
    imageUrl: "/images/cases/seo-push.webp",
    date: "2026-01-16",
    featured: true,
  },
  {
    slug: "online-drama-negotiation",
    title: "เคสยุติเหตุการณ์ดราม่าออนไลน์",
    summary:
      "จัดการโพสต์ประจานบนโซเชียลที่มีการแชร์นับพันครั้ง ผ่านกระบวนการไกล่เกลี่ยระหว่างแบรนด์และคู่กรณีอย่างสันติวิธี",
    category: "Crisis Management",
    status: "Success",
    imageUrl: "/images/cases/negotiation-drama.webp",
    date: "2026-01-16",
    featured: true,
  },
  {
    slug: "pdpa-privacy-removal",
    title: "เคสลบข้อมูลส่วนตัวที่ถูกนำไปใช้ผิดกฎหมาย",
    summary:
      "ใช้สิทธิ์ตามกฎหมาย PDPA เพื่อสั่งลบภาพถ่ายและประวัติส่วนตัวออกจากเว็บไซต์บุคคลที่สาม เพื่อคืนความเป็นส่วนตัวให้ลูกค้า",
    category: "Legal & Privacy",
    status: "Success",
    imageUrl: "/images/cases/privacy-legal.webp",
    date: "2026-01-16",
    featured: false,
  },
]

/**
 * Helper function สำหรับดึงเฉพาะเคสที่ต้องการนำมาโชว์ที่หน้าแรก
 */
export const getFeaturedCases = (): CaseStudy[] =>
  featuredCases.filter((c) => c.featured)

/**
 * Helper function สำหรับดึงข้อมูลเคสทั้งหมด (สำหรับหน้า Case Studies Archive)
 */
export const getAllCasesList = (): CaseStudy[] => featuredCases
