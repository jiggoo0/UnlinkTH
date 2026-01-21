/**
 * UNLINK-TH | Data Repositories: Services
 * -------------------------------------------------------------------------
 * จัดการตรรกะการดึงข้อมูลบริการ (Data Access Layer) เพื่อสนับสนุน Next.js Server Components
 * รองรับการดึงข้อมูลจาก Static Data และเตรียมความพร้อมสำหรับ API/CMS ในอนาคต
 */

import { Service } from "@/types"
import { servicesData } from "@/constants/services-data"

/**
 * [GET] ดึงข้อมูลบริการทั้งหมด (Get All Protocols)
 * ใช้สำหรับหน้า Catalog รวมบริการหลัก (/services)
 */
export async function getAllServices(): Promise<Service[]> {
  try {
    // ตรวจสอบความถูกต้องของแหล่งข้อมูล (Validation)
    if (!servicesData || !Array.isArray(servicesData)) {
      throw new Error(
        "Invalid Services Data Source: servicesData is missing or not an array."
      )
    }

    // คืนค่าข้อมูลต้นฉบับ (สามารถเพิ่มตรรกะการ Sort ตามความนิยมหรือลำดับที่กำหนดได้ที่นี่)
    return [...servicesData]
  } catch (error) {
    console.error("[SERVICE_LIB_ERROR] Fetching all services:", error)
    return []
  }
}

/**
 * [GET] ดึงข้อมูลบริการรายบุคคลผ่าน Slug (Get Protocol By Identifier)
 * ใช้สำหรับหน้า Dynamic Route (/services/[slug])
 */
export async function getServiceBySlug(
  slug: string
): Promise<Service | undefined> {
  try {
    if (!slug) return undefined

    const service = servicesData.find((item) => item.slug === slug)

    if (!service) {
      console.warn(
        `[SERVICE_LIB_WARN] Service identifier with slug "${slug}" not found in system.`
      )
      return undefined
    }

    return service
  } catch (error) {
    console.error(
      `[SERVICE_LIB_ERROR] Fetching service identifier "${slug}":`,
      error
    )
    return undefined
  }
}

/**
 * [GET] ดึงข้อมูลบริการตามหมวดหมู่ (Filter Protocols By Category)
 * ใช้สำหรับระบบ Taxonomy หรือการจัดกลุ่มบริการเฉพาะด้าน (Technical, Social, Legal, Personal)
 */
export async function getServicesByCategory(
  category: string
): Promise<Service[]> {
  try {
    if (!category) return []

    return servicesData.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    )
  } catch (error) {
    console.error(`[SERVICE_LIB_ERROR] Category filter "${category}":`, error)
    return []
  }
}

/**
 * [GET] ดึงข้อมูลบริการที่เกี่ยวข้อง (Retrieve Collaborative Protocols)
 * ใช้สำหรับแนะนำบริการที่ใกล้เคียงเพื่อสนับสนุนภารกิจกู้คืนชื่อเสียงแบบครบวงจร
 */
export async function getRelatedServices(
  currentSlug: string,
  limit: number = 2
): Promise<Service[]> {
  try {
    // กรองบริการปัจจุบันออก และสุ่มเลือกบริการอื่นเพื่อความหลากหลายในหน้า UI
    return servicesData
      .filter((item) => item.slug !== currentSlug)
      .sort(() => Math.random() - 0.5)
      .slice(0, limit)
  } catch (error) {
    console.error("[SERVICE_LIB_ERROR] Fetching related protocols:", error)
    return []
  }
}

/**
 * [GET] ดึงข้อมูล ID บริการทั้งหมด (Generate Static Params)
 * ใช้สำหรับฟีเจอร์ generateStaticParams เพื่อทำ Static Site Generation (SSG) ใน Next.js
 */
export async function getAllServiceSlugs(): Promise<{ slug: string }[]> {
  try {
    return servicesData.map((service) => ({
      slug: service.slug,
    }))
  } catch (error) {
    console.error(
      "[SERVICE_LIB_ERROR] Extracting service slugs for SSG:",
      error
    )
    return []
  }
}
