import { Service } from "@/types"
import { servicesData } from "@/constants/services-data"

/**
 * ดึงข้อมูลบริการทั้งหมด (Get All Services)
 * ใช้สำหรับหน้า Catalog รวมบริการ (/services)
 */
export async function getAllServices(): Promise<Service[]> {
  try {
    // ในอนาคตหากต้องการเชื่อมต่อฐานข้อมูลหรือ CMS สามารถปรับเปลี่ยน Logic ตรงนี้ได้
    return [...servicesData]
  } catch (error) {
    console.error("Error fetching all services:", error)
    return []
  }
}

/**
 * ดึงข้อมูลบริการรายบุคคลผ่าน Slug (Get Service By Slug)
 * ใช้สำหรับหน้า Single Service (/services/[slug])
 */
export async function getServiceBySlug(
  slug: string
): Promise<Service | undefined> {
  try {
    const service = servicesData.find((item) => item.slug === slug)

    if (!service) {
      console.warn(`Service with slug "${slug}" not found.`)
      return undefined
    }

    return service
  } catch (error) {
    console.error(`Error fetching service with slug ${slug}:`, error)
    return undefined
  }
}

/**
 * ดึงข้อมูลบริการตามหมวดหมู่ (Get Services By Category)
 * ใช้สำหรับระบบ Filter หรือส่วนบริการที่เกี่ยวข้อง (Related Services)
 */
export async function getServicesByCategory(
  category: string
): Promise<Service[]> {
  try {
    return servicesData.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    )
  } catch (error) {
    console.error(`Error fetching services in category ${category}:`, error)
    return []
  }
}

/**
 * ดึงข้อมูลบริการอื่นๆ ที่ไม่ใช่ Slug ปัจจุบัน (Get Related Services)
 */
export async function getRelatedServices(
  currentSlug: string,
  limit: number = 2
): Promise<Service[]> {
  try {
    return servicesData
      .filter((item) => item.slug !== currentSlug)
      .slice(0, limit)
  } catch (error) {
    console.error("Error fetching related services:", error)
    return []
  }
}
