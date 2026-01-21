/**
 * UNLINK Case Studies Data
 * ข้อมูลเคสการทำงานที่เชื่อมโยงกับ /public/images/cases/ และ /content/case-studies/
 */

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  incident: string;
  protocol: string;
  result: string;
  impact: string;
  image: string;
  contentPath: string;
  date?: string; // รองรับสำหรับ Sitemap
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "clear-blacklist-misunderstand",
    title: "ลบประวัติ Blacklist ที่เกิดจากความเข้าใจผิด",
    category: "Corporate",
    incident:
      "ข้อมูลการติด Blacklist ปรากฏบนหน้าแรก Google ส่งผลต่อการทำธุรกรรมและภาพลักษณ์องค์กร",
    protocol:
      "ประสานงานถอดถอนดัชนี (De-indexing) และใช้สิทธิทางกฎหมายตามหลัก PDPA",
    result: "ลิงก์ต้นทางถูกระงับการเข้าถึงและหายจากหน้าการค้นหาสำเร็จ",
    impact: "กู้คืนความน่าเชื่อถือทางธุรกิจสำเร็จ 100%",
    image: "/images/cases/blacklist-clear.webp",
    contentPath: "clear-blacklist-misunderstand.mdx",
    date: "2026-01-11",
  },
  {
    slug: "remove-defamation-post",
    title: "จัดการโพสต์หมิ่นประมาทและข่าวปลอมออนไลน์",
    category: "Individual",
    incident:
      "บุคคลถูกโจมตีด้วยข้อมูลเท็จในเว็บบอร์ดสาธารณะ ซึ่งส่งผลกระทบต่อประวัติส่วนตัว",
    protocol:
      "Technical Removal Protocol & Source Negotiation (การเจรจาลบจากต้นทาง)",
    result: "เนื้อหาถูกถอดถอนถาวรและล้างประวัติการค้นหาใน Google Cache",
    impact: "ยุติการแพร่กระจายของข้อมูลที่เป็นเท็จและคืนความเป็นส่วนตัว",
    image: "/images/cases/defamation-removal.webp",
    contentPath: "remove-defamation-post.mdx",
    date: "2026-01-12",
  },
  {
    slug: "online-drama-negotiation",
    title: "ระงับการแพร่กระจายข้อมูลดราม่าบนโซเชียล",
    category: "Individual",
    incident: "ประเด็นดราม่าในอดีตถูกขุดขึ้นมาเผยแพร่ใหม่ในเชิงลบ",
    protocol: "Content Suppression & Right to be Forgotten Liaison",
    result:
      "ลดการมองเห็นข้อมูลที่ไม่พึงประสงค์และถอดลิงก์ที่ละเมิดความเป็นส่วนตัว",
    impact: "ป้องกันความเสียหายต่อชื่อเสียงในระยะยาว",
    image: "/images/cases/negotiation-drama.webp",
    contentPath: "online-drama-negotiation.mdx",
    date: "2026-01-15",
  },
  {
    slug: "seo-push-negative-news",
    title: "แก้ปัญหาข่าวเสียสะสมด้วยเทคนิค Suppression",
    category: "E-commerce",
    incident: "ข่าวเชิงลบจากอดีตยังคงครองอันดับสูงในหน้าแรกของผลการค้นหา",
    protocol: "Reverse SEO Strategy & Positive Content Authority Building",
    result:
      "ผลักดันข่าวเสียให้พ้นจากหน้าแรก (Top 10) และทดแทนด้วยข้อมูลที่เป็นกลาง",
    impact: "ยอดขายและระดับความไว้วางใจของลูกค้ากลับมาเป็นปกติ",
    image: "/images/cases/seo-push.webp",
    contentPath: "seo-push-negative-news.mdx",
    date: "2026-01-18",
  },
  {
    slug: "privacy-legal-protection",
    title: "คุ้มครองความเป็นส่วนตัวตามกฎหมาย PDPA",
    category: "Legal",
    incident: "การนำข้อมูลส่วนบุคคลไปใช้โดยไม่ได้รับอนุญาตในลักษณะที่เสียหาย",
    protocol: "Legal Enforcement & Data Controller Compliance Notice",
    result: "ผู้ควบคุมข้อมูลดำเนินการลบและทำลายข้อมูลตามคำร้องขอ",
    impact: "ปกป้องสิทธิขั้นพื้นฐานและความปลอดภัยของข้อมูลส่วนบุคคล",
    image: "/images/cases/privacy-legal.webp",
    contentPath: "right-to-be-forgotten-thailand-pdpa.mdx",
    date: "2026-01-20",
  },
];

/**
 * ดึงข้อมูล Case Studies ทั้งหมด (Async เพื่อรองรับการขยายเป็น Database ในอนาคต)
 * ฟังก์ชันนี้จำเป็นสำหรับ app/sitemap.ts
 */
export async function getAllCases(): Promise<CaseStudy[]> {
  return caseStudies;
}

/**
 * ดึงข้อมูล Case Study ตาม Slug
 */
export async function getCaseBySlug(slug: string): Promise<CaseStudy | undefined> {
  return caseStudies.find((item) => item.slug === slug);
}
