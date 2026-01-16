import { servicesData } from "@/constants/services-data"
import { getAllCases } from "@/lib/mdx"
import CategoryArchiveTemplate from "@/components/templates/CategoryArchiveTemplate"
import { notFound } from "next/navigation"

/**
 * 🛠️ 1. Defining Service & Category Types
 * เพื่อกำจัดข้อผิดพลาด 'Property does not exist' และ 'Unexpected any'
 */
type CategoryType =
  | "Negotiation"
  | "SEO Push"
  | "Legal"
  | "Content Removal"
  | "Online Reputation"

interface ServiceItem {
  id: string | number
  slug: string
  title: string
  fullDescription?: string
  description?: string
  summary?: string
  shortDescription?: string
  suitableFor: string[]
  iconName: string
  imageUrl?: string
}

interface PageProps {
  params: Promise<{ slug: string }>
}

/**
 * ServiceDetailPage: Component สำหรับแสดงรายละเอียดหมวดหมู่บริการ
 * ✅ แก้ไขปัญหา Type Error และกำจัด Unexpected any
 * ✅ ปรับปรุงลำดับ Fallback ของคำอธิบายบริการ
 */
export default async function ServiceDetailPage({ params }: PageProps) {
  // 1. รับค่า slug แบบ Async (Next.js 15 API)
  const { slug } = await params

  // 2. ดึงข้อมูลบริการและระบุ Type ให้ชัดเจน
  const service = (servicesData as ServiceItem[]).find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  // 3. ดึงข้อมูล Case Studies ทั้งหมด
  const allCases = await getAllCases()

  // 4. กรองเคสที่เกี่ยวข้องตามหมวดหมู่
  const relatedCases = allCases
    .filter((c) => {
      const category = c.frontmatter?.category
      if (typeof category !== "string") return false

      const categorySlug = category.toLowerCase().replace(/\s+/g, "-")
      const pagePrefix = slug.split("-")[0]
      return categorySlug.includes(pagePrefix)
    })
    .map((c) => ({
      slug: c.slug,
      title: c.frontmatter.title || "Untitled Case",
      // ใช้ข้อมูลจาก MDX Frontmatter (แก้ไขตาม lib/mdx.ts)
      description: c.frontmatter.description || c.frontmatter.summary || "",
      date: c.frontmatter.date || "",
      category: (c.frontmatter.category || "Negotiation") as CategoryType,
      image:
        c.frontmatter.featuredImage ||
        c.frontmatter.image ||
        "/images/og-main.jpg",
    }))

  return (
    <CategoryArchiveTemplate
      categoryName={service.title}
      /**
       * ✅ แก้ไข: ใช้ Type-safe property access
       * ลำดับความสำคัญ: Full > Description > Summary > Short
       */
      description={
        service.fullDescription ||
        service.description ||
        service.summary ||
        service.shortDescription ||
        ""
      }
      cases={relatedCases}
    />
  )
}

/**
 * ✅ generateStaticParams: สร้าง Static HTML สำหรับทุกหน้าบริการ
 */
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}
