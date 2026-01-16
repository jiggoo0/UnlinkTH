import { servicesData } from "@/constants/services-data"
import { getAllCases } from "@/lib/mdx"
import CategoryArchiveTemplate from "@/components/templates/CategoryArchiveTemplate"
import { notFound } from "next/navigation"

/**
 * 1. กำหนด Union Type สำหรับ Category ให้สอดคล้องกับระบบ
 */
type CategoryType =
  | "Negotiation"
  | "SEO Push"
  | "Legal"
  | "Content Removal"
  | "Online Reputation"

interface PageProps {
  params: Promise<{ slug: string }>
}

/**
 * ServiceDetailPage: แสดงผลหน้าหมวดหมู่บริการและรายการเคสศึกษาที่เกี่ยวข้อง
 * ปรับปรุง: รองรับการแสดงผลรูปภาพ และเพิ่มความปลอดภัยในการเข้าถึง Property
 */
export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params

  // 1. ค้นหาข้อมูลบริการพื้นฐานจาก constants
  const service = servicesData.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  // 2. ดึงข้อมูล Case Studies ทั้งหมดจากโฟลเดอร์ content/cases
  const allCases = await getAllCases()

  // 3. กรองและจัดเตรียมข้อมูล (Mapping) เพื่อส่งให้ Template
  const relatedCases = allCases
    .filter((c) => {
      // ตรวจสอบความถูกต้องของหมวดหมู่ก่อนเปรียบเทียบกับ slug
      const category = c.frontmatter?.category
      if (typeof category !== "string") return false

      // แปลงค่า Category เป็น URL-friendly slug เพื่อใช้กรองข้อมูล
      return category.toLowerCase().replace(/\s+/g, "-") === slug
    })
    .map((c) => ({
      slug: c.slug,
      title: c.frontmatter.title || "Untitled Case",
      description: c.frontmatter.summary || "",
      date: c.frontmatter.date || "",
      // ✅ แก้ไข: Mapping ค่า Category ให้เป็น Type ที่ถูกต้อง
      category: (c.frontmatter.category || "Negotiation") as CategoryType,
      // ✅ แก้ไขสำคัญ: ส่งค่า featuredImage ไปยังตัวแปร image เพื่อให้รูปขึ้นใน Template
      image: c.frontmatter.featuredImage || "/images/og-main.jpg",
    }))

  return (
    <CategoryArchiveTemplate
      categoryName={service.title}
      description={service.fullDescription}
      cases={relatedCases}
    />
  )
}

/**
 * generateStaticParams: สร้างเส้นทางล่วงหน้าสำหรับทุกบริการ (Static Site Generation)
 * ช่วยให้ประสิทธิภาพการโหลดหน้าเว็บรวดเร็วที่สุด
 */
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}
