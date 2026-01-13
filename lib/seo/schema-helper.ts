/** @format */

/**
 * [STRATEGY: SCHEMA MARKUP ARCHITECTURE v4.7]
 * - Purpose: ช่วยให้ Google เข้าใจบริบทธุรกิจ "ลบข้อมูล" และ "จัดการชื่อเสียง"
 * - Rich Snippets: เพิ่มโอกาสการแสดง FAQ และ Service Card บนหน้าค้นหา
 * - Institutional Linkage: เชื่อมโยงตัวตนผ่าน Organization Schema (Entity Linking)
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://unlinkth.com'

/**
 * 1. 🏢 Organization Schema
 * ยืนยันตัวตนในฐานะสถาบันจัดการข้อมูลดิจิทัล
 */
export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'UnlinkTH',
  alternateName: 'Unlink Thailand',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/logo-og.png`,
    width: '1200',
    height: '630',
  },
  sameAs: [
    'https://facebook.com/unlinkth',
    'https://x.com/unlinkth',
    'https://linkedin.com/company/unlinkth',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    areaServed: 'TH',
    availableLanguage: ['Thai', 'English'],
  },
})

/**
 * 2. 🛠️ Service Schema
 * อธิบายยุทธวิธี (Operational Protocol) ให้ Search Engine ทราบขอบเขตบริการ
 */
export const generateServiceSchema = (service: {
  title: string
  description: string
  slug: string
}) => {
  const serviceUrl = `${SITE_URL}/services/${service.slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${serviceUrl}/#service`,
    name: service.title,
    serviceType: 'Digital Identity & Reputation Management',
    description: service.description,
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Thailand',
    },
  }
}

/**
 * 3. ❓ FAQ Schema
 * เพิ่ม CTR (Click-Through Rate) โดยการดึงคำถามมาแสดงบน Google โดยตรง
 */
export const generateFaqSchema = (
  faqs: { question: string; answer: string }[],
) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})
