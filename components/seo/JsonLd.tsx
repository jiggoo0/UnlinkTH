/**
 * UNLINK-TH | SEO Architecture: Structured Data Injection
 * -------------------------------------------------------------------------
 * หน้าที่: แทรก JSON-LD เพื่อช่วยให้ Search Engine (Google) เข้าใจบริบทเชิงลึก
 * รองรับการแสดงผล Rich Snippets เช่น ProfessionalService, Case Study, และ FAQ
 */

"use client"

interface JsonLdProps {
  /**
   * ข้อมูล Schema ในรูปแบบ Object หรือ Array ที่จะถูกแปลงเป็น JSON-LD
   * ใช้ unknown แทน any เพื่อความปลอดภัยของ Type
   */
  data: Record<string, unknown> | Record<string, unknown>[]
}

export default function JsonLd({ data }: JsonLdProps) {
  // [1] Integrity Check: ตรวจสอบความถูกต้องของข้อมูลก่อนการ Render
  if (
    !data ||
    (Array.isArray(data) ? data.length === 0 : Object.keys(data).length === 0)
  ) {
    return null
  }

  /**
   * [2] Sanitization Strategy:
   * จัดการกับอักขระพิเศษเพื่อความปลอดภัยสูงสุด (Prevent XSS)
   * และเพื่อให้โครงสร้าง JSON ถูกต้องตามมาตรฐานของ Google Search Console
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

  const jsonLdContent = sanitizeJsonLd(data)

  if (!jsonLdContent) return null

  return (
    <script
      type="application/ld+json"
      /**
       * suppressHydrationWarning: ป้องกันปัญหาผลต่างระหว่าง SSR และ Client
       * เนื่องจากข้อมูล Schema อาจมีการเปลี่ยนแปลงตามสถานะของ User
       */
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: jsonLdContent }}
    />
  )
}
