/** @format */

'use client'

import { usePathname } from 'next/navigation'
import { constructMetadata } from '@/lib/seo/seo-helper'
import {
  generateOrganizationSchema,
  generateServiceSchema,
} from '@/lib/seo/schema-helper'

interface SeoProps {
  title?: string
  description?: string
  image?: string
  isService?: boolean
  keywords?: string[]
  article?: boolean
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

  // ✅ แก้ไข: จัดการ Schema Objects ด้วย Type ที่ถูกต้อง
  const schemas: Record<string, unknown>[] = [
    generateOrganizationSchema() as Record<string, unknown>,
  ]

  if (isService) {
    schemas.push(
      generateServiceSchema({
        title: String(metadata.title || ''),
        description: metadata.description || '',
        slug: pathname.split('/').pop() || '',
      }) as Record<string, unknown>,
    )
  }

  return (
    <>
      <title>{String(metadata.title)}</title>
      <meta name="description" content={metadata.description || ''} />

      {/* ✅ แก้ไข Warning: นำ keywords มาใช้งานใน Meta Tag */}
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}

      <link rel="canonical" href={currentUrl} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={String(metadata.title)} />
      <meta property="og:description" content={metadata.description || ''} />
      <meta property="og:image" content={image || '/images/og-main.jpg'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={String(metadata.title)} />
      <meta name="twitter:description" content={metadata.description || ''} />
      <meta name="twitter:image" content={image || '/images/og-main.jpg'} />

      {/* 🛠️ Schema Injection */}
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
