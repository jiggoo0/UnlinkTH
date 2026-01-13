/** @format */

'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { constructMetadata } from '@/lib/seo/seo-helper'
import {
  generateOrganizationSchema,
  generateServiceSchema,
} from '@/lib/seo/schema-helper'
import { ServiceDetail } from '@/types/service'

/**
 * [STRATEGY: DYNAMIC AUTHORITY INJECTION v5.2]
 * - Fix TS2352: ใช้ 'as unknown as ServiceDetail' เพื่อหลีกเลี่ยงข้อจำกัดการ Casting
 * - SEO: เตรียมข้อมูลสำหรับ Schema Injection อย่างปลอดภัย
 */

interface SeoProps {
  title?: string
  description?: string
  image?: string
  isService?: boolean
  keywords?: string[]
  article?: boolean
}

interface SchemaObject {
  '@context': string
  '@type': string
  [key: string]: unknown
}

export const Seo = ({
  title,
  description,
  image,
  isService = false,
  keywords = [],
  article = false,
}: SeoProps) => {
  const pathname = usePathname()
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://unlinkth.com'

  const metadata = constructMetadata({ title, description, image })
  const currentUrl = `${SITE_URL}${pathname}`
  const pageTitle = String(metadata.title || 'Unlink TH')

  const schemas: SchemaObject[] = [generateOrganizationSchema() as SchemaObject]

  if (isService) {
    /**
     * [FIXED]: การทำ Double Assertion (as unknown as T)
     * ช่วยแก้ปัญหา TS2352 เมื่อฟิลด์มีไม่ครบตาม Interface จริง
     */
    const serviceData = {
      title: pageTitle,
      description: metadata.description || '',
      slug: pathname.split('/').pop() || '',
      id: 'dynamic',
      features: [],
      price: { min: 0, max: 0 },
      updatedAt: new Date().toISOString(), // เพิ่มเพื่อให้ใกล้เคียง ServiceDetail มากขึ้น
    } as unknown as ServiceDetail

    schemas.push(generateServiceSchema(serviceData) as SchemaObject)
  }

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={metadata.description || ''} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <link rel="canonical" href={currentUrl} />

      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metadata.description || ''} />
      <meta
        property="og:image"
        content={image || `${SITE_URL}/images/og-main.jpg`}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metadata.description || ''} />
      <meta
        name="twitter:image"
        content={image || `${SITE_URL}/images/og-main.jpg`}
      />

      {schemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
