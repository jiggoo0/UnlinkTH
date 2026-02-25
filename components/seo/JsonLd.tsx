/** @format */

/**
 * UNLINK-TH | SEO Architecture: Structured Data Injection
 * -------------------------------------------------------------------------
 * หน้าที่: แทรก JSON-LD เพื่อช่วยให้ Search Engine (Google) เข้าใจบริบทเชิงลึก
 * รองรับการแสดงผล Rich Snippets เช่น Organization, Case Study, และ FAQ
 */

import { getBrandIdentitySchema } from "@/lib/seo-schemas"

interface JsonLdProps {
  /**
   * ข้อมูล Schema ในรูปแบบ Object หรือ Array
   */
  data?: Record<string, unknown> | Record<string, unknown>[]
}

export default function JsonLd({ data }: JsonLdProps) {
  // [1] Integrity Check: หากไม่มีการส่ง data มา ให้ใช้ BrandIdentitySchema เป็นค่าเริ่มต้น
  const schemaData = data || getBrandIdentitySchema()

  if (
    !schemaData ||
    (Array.isArray(schemaData)
      ? schemaData.length === 0
      : Object.keys(schemaData).length === 0)
  ) {
    return null
  }

  /**
   * [2] Sanitization Strategy:
   * จัดการกับอักขระพิเศษเพื่อความปลอดภัยสูงสุด (Prevent XSS)
   * และเพื่อให้โครงสร้าง JSON ถูกต้องตามมาตรฐาน Schema.org
   */
  const sanitizeJsonLd = (obj: unknown) => {
    try {
      return JSON.stringify(obj)
        .replace(/</g, "\\u003c")
        .replace(/>/g, "\\u003e")
        .replace(/&/g, "\\u0026")
    } catch (error) {
      console.error("[JSON_LD_ERROR] Serialization failed:", error)
      return ""
    }
  }

  const jsonLdContent = sanitizeJsonLd(schemaData)

  if (!jsonLdContent) return null

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: jsonLdContent }}
    />
  )
}
