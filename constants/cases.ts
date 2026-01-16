/**
 * Interface สำหรับข้อมูลผลงาน (Case Study)
 * เพื่อใช้ในการตรวจสอบ Type ทั่วทั้งโปรเจกต์
 */
export interface CaseStudy {
  slug: string
  title: string
  summary: string
  category: "Negotiation" | "SEO Push" | "Legal" | "Content Removal"
  status: "Success" | "Ongoing"
  imageUrl?: string
  date: string
  featured: boolean
}

/**
 * รายชื่อผลงานที่โดดเด่น (Featured Cases)
 * ข้อมูลนี้จะถูกดึงไปแสดงใน CaseStudySection บนหน้า Landing Page
 */
export const featuredCases: CaseStudy[] = [
  {
    slug: "clear-blacklist-reputation",
    title: "เคสลบชื่อจากเว็บประจานคนโกง",
    summary:
      "แก้ปัญหาความเข้าใจผิดจากการติดแบล็กลิสต์มานานกว่า 3 ปี เราใช้เทคนิคการเจรจาเชิงลึกจนแอดมินลบข้อมูลออกภายใน 7 วัน",
    category: "Negotiation",
    status: "Success",
    imageUrl: "/images/cases/case-blacklist.jpg",
    date: "2025-11-20",
    featured: true,
  },
  {
    slug: "seo-reputation-management",
    title: "เคสจัดการข่าวเสียในอดีต (SEO Push)",
    summary:
      "ข่าวเก่าที่ลบไม่ได้เนื่องจากเป็นสำนักข่าวใหญ่ เราใช้วิธีสร้าง Content Authority ใหม่เพื่อดันผลการค้นหาหน้าแรกให้เป็นเชิงบวก 100%",
    category: "SEO Push",
    status: "Success",
    imageUrl: "/images/cases/case-seo.jpg",
    date: "2025-12-15",
    featured: true,
  },
  {
    slug: "legal-privacy-content-removal",
    title: "เคสลบกระทู้ละเมิดความเป็นส่วนตัว",
    summary:
      "จัดการเนื้อหาที่มีการเปิดเผยข้อมูลส่วนตัว (Doxing) บนเว็บบอร์ดชื่อดังผ่านกระบวนการทางกฎหมายและนโยบายความเป็นส่วนตัว",
    category: "Legal",
    status: "Success",
    imageUrl: "/images/cases/case-legal.jpg",
    date: "2026-01-05",
    featured: false,
  },
]

/**
 * Helper function สำหรับดึงเฉพาะเคสที่ต้องการนำมาโชว์ที่หน้าแรก
 */
export const getFeaturedCases = () => featuredCases.filter((c) => c.featured)
