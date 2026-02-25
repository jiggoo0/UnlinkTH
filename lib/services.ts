/** @format */

import { servicesData } from "@/constants/services-data"
import { Service, ServiceMetadata } from "@/types"
import { readMDXFile } from "./mdx"

/**
 * ดึงข้อมูล Protocol ทั้งหมด
 */
export async function getAllServices(): Promise<Service[]> {
  return servicesData
}

/**
 * ดึงข้อมูลบริการเชิงลึก
 */
export async function getServiceBySlug(slug: string) {
  const baseInfo = servicesData.find((s) => s.slug === slug)
  if (!baseInfo) return null

  const item = readMDXFile<{ metadata?: ServiceMetadata }>("services", slug)

  if (!item) {
    return {
      ...baseInfo,
      content: "",
    }
  }

  const { frontmatter, content } = item

  return {
    ...baseInfo,
    ...frontmatter,
    description: content,
    metadata: {
      ...baseInfo.metadata,
      ...(frontmatter.metadata || {}),
    },
  }
}
