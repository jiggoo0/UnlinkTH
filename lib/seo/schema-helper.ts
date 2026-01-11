/** @format */

/**
 * [STRATEGY: SCHEMA MARKUP HELPER]
 * ช่วยสร้างโครงสร้างข้อมูลเพื่อให้ Google เข้าใจบริบทธุรกิจ
 * และเพิ่มโอกาสในการแสดง Rich Snippets (Star Ratings, Service Details)
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://unlinkth.com'

// 1. 🏢 Organization Schema: ยืนยันความน่าเชื่อถือขององค์กร
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'UnlinkTH',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/logo.png`,
      width: '180',
      height: '60',
    },
    sameAs: [
      'https://facebook.com/unlinkth',
      'https://x.com/unlinkth',
      'https://linkedin.com/company/unlinkth',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+66-xx-xxx-xxxx',
      contactType: 'customer service',
      areaServed: 'TH',
      availableLanguage: ['Thai', 'English'],
    },
  }
}

// 2. 🛠️ Service Schema: ระบุรายละเอียด Protocol รายบริการ
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
    description: service.description,
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    serviceType: 'Digital Reputation Management',
    areaServed: {
      '@type': 'Country',
      name: 'Thailand',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Unlink Operational Protocols',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.title,
            description: service.description,
          },
        },
      ],
    },
  }
}

// 3. ❓ FAQ Schema: เพิ่มพื้นที่บนหน้า Google Search
export const generateFaqSchema = (
  faqs: { question: string; answer: string }[],
) => {
  return {
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
  }
}
