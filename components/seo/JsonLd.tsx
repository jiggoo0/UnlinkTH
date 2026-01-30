/**
 * UNLINK-TH | SEO Architecture: Structured Data Injection
 * -------------------------------------------------------------------------
 * หน้าที่: แทรก JSON-LD เพื่อช่วยให้ Search Engine (Google) เข้าใจบริบทเชิงลึก
 * รองรับการแสดงผล Rich Snippets เช่น Organization, Case Study, และ FAQ
 */

"use client"

import { siteConfig } from "@/constants/site-config"

interface JsonLdProps {
  /**
   * ข้อมูล Schema ในรูปแบบ Object หรือ Array
   */
  data?: Record<string, unknown> | Record<string, unknown>[]
}

/**
 * [Utility] BrandIdentitySchema
 * สร้างโครงสร้าง Organization Schema พื้นฐานของ UNLINK-TH
 * เชื่อมโยงตัวตน Founder ทั้งภาษาไทยและอังกฤษ (Entity Linking)
 */
export const getBrandIdentitySchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    "name": siteConfig.name,
    "alternateName": siteConfig.fullName,
    "url": siteConfig.url,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteConfig.url}${siteConfig.ogImage}`,
      "width": "1200",
      "height": "630"
    },
    "description": siteConfig.description,
    "founder": {
      "@type": "Person",
      "name": siteConfig.founder.name, // Alongkorl Yomkerd
      "alternateName": siteConfig.founder.nameTh, // อลงกรณ์ ยมเกิด
      "jobTitle": siteConfig.founder.role,
      "url": siteConfig.founder.url,
      "sameAs": siteConfig.founder.sameAs
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.contact.phone,
      "contactType": "customer service",
      "areaServed": "TH",
      "availableLanguage": ["Thai", "English"]
    },
    "sameAs": [
      siteConfig.links.facebook,
      siteConfig.links.twitter,
      siteConfig.links.line
    ]
  }
}

export default function JsonLd({ data }: JsonLdProps) {
  // [1] Integrity Check: หากไม่มีการส่ง data มา ให้ใช้ BrandIdentitySchema เป็นค่าเริ่มต้น
  const schemaData = data || getBrandIdentitySchema()

  if (
    !schemaData ||
    (Array.isArray(schemaData) ? schemaData.length === 0 : Object.keys(schemaData).length === 0)
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
      /**
       * suppressHydrationWarning: ป้องกันปัญหา Hydration Mismatch ระหว่าง SSR/Client
       */
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: jsonLdContent }}
    />
  )
}
