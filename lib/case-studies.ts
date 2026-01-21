/**
 * UNLINK-TH | Data Repositories: Case Studies
 * -------------------------------------------------------------------------
 * จัดการข้อมูลปฏิบัติการจริง (Operational Logs) ที่เชื่อมโยงกับเนื้อหา MDX
 * และระบบประมวลผล Metadata สำหรับ Search Engine
 */

export interface CaseStudy {
  slug: string
  title: string
  category: string
  incident: string
  protocol: string
  result: string
  impact: string
  image: string
  contentPath: string
  date: string // ISO Format สำหรับ Sitemap และการเรียงลำดับ
}

/**
 * [DATABASE] บันทึกข้อมูลปฏิบัติการจริง
 * หมายเหตุ: ข้อมูลเหล่านี้จะถูกดึงไปแสดงผลในหน้า /case-studies และ /case-studies/[slug]
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "remove-leaked-content-silent-angel",
    title: "กู้ชีวิตจากคลิปหลุดที่ตามหลอกหลอน 1 ปี (Silent Angel)",
    category: "Special Ops",
    incident:
      "ผู้เสียหายถูกอดีตแฟนปล่อยคลิปส่วนตัวนาน 1 ปี จนเกิดภาวะวิกฤตทางจิตใจ",
    protocol: "Unrestricted Warfare (ปฏิบัติการไร้รูปแบบเพื่อระงับเหตุต้นทาง)",
    result: "ลบต้นตอเกลี้ยง 100% และปิดบัญชีผู้เผยแพร่ถาวร",
    impact: "ช่วยชีวิตผู้เสียหายและคืนศักดิ์ศรีความเป็นมนุษย์",
    image: "/images/cases/privacy-legal.webp",
    contentPath: "remove-leaked-content-silent-angel.mdx",
    date: "2026-01-20",
  },
  {
    slug: "remove-defamation-gambling-network",
    title: "ล้างบางเครือข่ายเว็บพนันที่แอบอ้างชื่อนักธุรกิจ",
    category: "Special Ops",
    incident: "ถูกเครือข่ายสีเทานำชื่อไปแอบอ้างทำ SEO ข่าวปลอมเพื่อเรียกค่าไถ่",
    protocol: "Hybrid Warfare (De-indexing + Source Neutralization)",
    result: "URL เป้าหมายถูกถอดจาก Google 100% และเว็บต้นทางล่มถาวร",
    impact: "กู้คืนชื่อเสียงมูลค่ากว่า 100 ล้านบาทและหยุดการแอบอ้าง",
    image: "/images/cases/blacklist-clear.webp",
    contentPath: "remove-defamation-gambling-network.mdx",
    date: "2026-01-18",
  },
  {
    slug: "seo-push-negative-news",
    title: "แก้ปัญหาข่าวเสียสะสมด้วยเทคนิค Suppression",
    category: "E-commerce",
    incident: "ข่าวเชิงลบจากอดีตยังคงครองอันดับสูงในหน้าแรกของผลการค้นหา",
    protocol: "Reverse SEO Strategy & Positive Content Authority Building",
    result: "ผลักดันข่าวเสียให้พ้นจากหน้าแรก (Top 10) สำเร็จภายใน 6 เดือน",
    impact: "ระดับความไว้วางใจของนักลงทุนและลูกค้ากลับมาเป็นปกติ",
    image: "/images/cases/seo-push.webp",
    contentPath: "seo-push-negative-news.mdx",
    date: "2026-01-16",
  },
  {
    slug: "negotiation-drama",
    title: "ยุติเหตุการณ์ดราม่าออนไลน์ด้วยการเจรจาเชิงยุทธวิธี",
    category: "Crisis Management",
    incident: "ประเด็นความเข้าใจผิดในตัวสินค้าลุกลามจนเกิดการประจานในกลุ่มใหญ่",
    protocol: "Strategic Mediation & The Neutral Liaison Protocol",
    result: "คู่กรณียอมรับข้อเสนอและลบโพสต์ต้นทางด้วยความเต็มใจ",
    impact: "เปลี่ยนวิกฤตดราม่าให้เป็นโอกาสในการสร้างความเชื่อมั่น",
    image: "/images/cases/negotiation-drama.webp",
    contentPath: "online-drama-negotiation.mdx",
    date: "2026-01-15",
  },
  {
    slug: "remove-defamation-post",
    title: "จัดการโพสต์หมิ่นประมาทและข้อมูลเท็จ (Fake News)",
    category: "Individual",
    incident: "บุคคลถูกโจมตีด้วยข้อมูลบิดเบือนในกลุ่มสาธารณะจนกระทบงานประมูล",
    protocol: "Crisis Response Protocol & Platform Escalation",
    result: "เนื้อหาถูกถอดถอนถาวรและล้างประวัติจาก Google Cache",
    impact: "ยุติการแพร่กระจายของข่าวปลอมและกู้คืนความยุติธรรม",
    image: "/images/cases/defamation-removal.webp",
    contentPath: "remove-defamation-post.mdx",
    date: "2026-01-14",
  },
  {
    slug: "clear-blacklist-misunderstand",
    title: "เคลียร์ชื่อจากเว็บแบล็กลิสต์ที่เกิดจากความเข้าใจผิด",
    category: "Blacklist Removal",
    incident: "ชื่อติดเว็บเช็กโกงเนื่องจากการโอนเงินล่าช้าจากระบบธนาคารขัดข้อง",
    protocol: "Right to be Forgotten Liaison & PDPA Enforcement",
    result: "ดำเนินการลบชื่อสำเร็จทั้งในระดับเว็บไซต์ต้นทางและ Google",
    impact: "ล้างประวัติขาวสะอาด พร้อมสำหรับการสมัครงานและทำธุรกิจ",
    image: "/images/cases/blacklist-clear.webp",
    contentPath: "clear-blacklist-misunderstand.mdx",
    date: "2026-01-11",
  },
]

/**
 * [GET] ดึงข้อมูล Case Studies ทั้งหมด (Sort ตามวันที่ล่าสุด)
 */
export async function getAllCases(): Promise<CaseStudy[]> {
  try {
    return [...caseStudies].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  } catch (error) {
    console.error("[CASE_LIB_ERROR] Fetching all cases:", error)
    return []
  }
}

/**
 * [GET] ดึงข้อมูล Case Study ตาม Slug
 */
export async function getCaseBySlug(
  slug: string
): Promise<CaseStudy | undefined> {
  try {
    if (!slug) return undefined
    return caseStudies.find((item) => item.slug === slug)
  } catch (error) {
    console.error(`[CASE_LIB_ERROR] Fetching case by slug ${slug}:`, error)
    return undefined
  }
}

/**
 * [GET] ดึงข้อมูล Case Studies ที่เกี่ยวข้อง (ยกเว้น Slug ปัจจุบัน)
 */
export async function getRelatedCases(
  currentSlug: string,
  limit: number = 3
): Promise<CaseStudy[]> {
  try {
    return caseStudies
      .filter((item) => item.slug !== currentSlug)
      .sort(() => Math.random() - 0.5)
      .slice(0, limit)
  } catch (error) {
    console.error("[CASE_LIB_ERROR] Fetching related cases:", error)
    return []
  }
}
