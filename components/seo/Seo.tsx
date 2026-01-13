/** @format */

'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { constructMetadata } from '@/lib/seo/seo-helper'
import {
  generateOrganizationSchema,
  generateServiceSchema,
} from '@/lib/seo/schema-helper'

/**
 * [STRATEGY: DYNAMIC AUTHORITY INJECTION v5.0]
 * - Fix: Resolved 'Unexpected any' by defining proper Schema interfaces.
 * - Performance: การจัดการ Dynamic Canonical URL เพื่อป้องกันปัญหา Duplicate Content
 * - Authority: รองรับโครงสร้าง JSON-LD หลายชุดในหน้าเดียว (Organization + Service/Article)
 */

interface SeoProps {
  title?: string
  description?: string
  image?: string
  isService?: boolean
  keywords?: string[]
  article?: boolean
}

// 🏛️ Schema Type Definition (เพื่อลดการใช้ any)
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

  // สร้าง Metadata พื้นฐานผ่าน helper
  const metadata = constructMetadata({ title, description, image })
  const currentUrl = `${SITE_URL}${pathname}`
  const pageTitle = String(metadata.title || 'Unlink TH')

  // 🏛️ 1. SCHEMA AGGREGATION (Refactored from any[])
  const schemas: SchemaObject[] = [generateOrganizationSchema() as SchemaObject]

  if (isService) {
    schemas.push(
      generateServiceSchema({
        title: pageTitle,
        description: metadata.description || '',
        slug: pathname.split('/').pop() || '',
      }) as SchemaObject,
    )
  }

  return (
    <>
      {/* 🧩 Standard Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={metadata.description || ''} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <link rel="canonical" href={currentUrl} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5"
      />

      {/* 🧩 Open Graph / Facebook */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metadata.description || ''} />
      <meta
        property="og:image"
        content={image || `${SITE_URL}/images/og-main.jpg`}
      />

      {/* 🧩 Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metadata.description || ''} />
      <meta
        name="twitter:image"
        content={image || `${SITE_URL}/images/og-main.jpg`}
      />

      {/* 🛠️ JSON-LD Schema Injection */}
      {schemas.map((schema, index) => (
        <script
          key={`schema-injection-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
