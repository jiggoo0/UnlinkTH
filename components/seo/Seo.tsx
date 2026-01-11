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

  // ✅ แก้ไข: ระบุ Type ให้ชัดเจนแทน any
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
      <link rel="canonical" href={currentUrl} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:image" content={image || '/images/og-main.jpg'} />
      {/* ส่วน Render อื่นๆ... */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
