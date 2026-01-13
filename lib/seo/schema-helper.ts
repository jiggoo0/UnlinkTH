// lib/seo/schema-helper.ts
import { ServiceArticle } from '@/types/service'

export const generateServiceSchema = (service: ServiceArticle) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService', // ใช้ LegalService เพื่อยกระดับความน่าเชื่อถือ
    name: `Unlink TH - ${service.title}`,
    description: service.description,
    url: `https://unlink.th/services/${service.slug}`,
    serviceType: 'Reputation Management',
    provider: {
      '@type': 'Organization',
      name: 'Unlink TH',
      logo: 'https://unlink.th/logo.png',
    },
    areaServed: 'TH',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Privacy Rights',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Right to be Forgotten (การขอใช้สิทธิถูกลืม)',
          },
        },
      ],
    },
  }
}

export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Unlink TH',
  url: 'https://unlink.th',
  logo: 'https://unlink.th/logo.png',
  sameAs: ['https://facebook.com/unlinkth', 'https://line.me/ti/p/@unlinkth'],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+66-xxxx-xxxx',
    contactType: 'customer service',
    areaServed: 'TH',
    availableLanguage: 'Thai',
  },
})
