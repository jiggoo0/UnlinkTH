/** @format */

import { Metadata } from 'next'

/**
 * [STRATEGY: SEO GLOBAL HELPER v4.8]
 * - Context: ระบบจัดการ Metadata กลางสำหรับ Next.js App Router
 * - Authority: รองรับการทำ Dynamic OG Images และ Twitter Cards
 * - Security: มีระบบ NoIndex สำหรับหน้าที่มีความละเอียดอ่อน (เช่น Private Audit)
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.unlinkth.com'

export function constructMetadata({
  title,
  description,
  image = '/images/og-main.jpg',
  noIndex = false,
  canonicalPath = '',
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
  canonicalPath?: string
} = {}): Metadata {
  const fullTitle = title
    ? `${title} | UnlinkTH Strategy`
    : 'UnlinkTH - Digital Reputation Management & Privacy'

  const fullDesc =
    description ||
    'บริการจัดการชื่อเสียงออนไลน์ แก้ไขข้อมูลเท็จ และลบลิงก์ไม่พึงประสงค์บน Google ด้วยมาตรฐานความลับสูงสุดสำหรับบุคคลระดับสูงและองค์กร'

  return {
    title: fullTitle,
    description: fullDesc,
    alternates: {
      canonical: `${SITE_URL}${canonicalPath}`,
    },
    openGraph: {
      title: fullTitle,
      description: fullDesc,
      url: `${SITE_URL}${canonicalPath}`,
      siteName: 'UnlinkTH',
      images: [
        {
          url: image.startsWith('http') ? image : `${SITE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: 'UnlinkTH Operational Preview',
        },
      ],
      locale: 'th_TH',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDesc,
      images: [image.startsWith('http') ? image : `${SITE_URL}${image}`],
      creator: '@unlinkth',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    metadataBase: new URL(SITE_URL),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
          index: false,
          follow: false,
        },
      },
    }),
  }
}

/**
 * [STRATEGY: LOCAL BUSINESS IDENTITY]
 * ระบุตัวตนทางภูมิศาสตร์และหมวดหมู่ธุรกิจ (Professional Service)
 */
export const getJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: 'UnlinkTH Strategy',
    image: `${SITE_URL}/images/logo-og.png`,
    description:
      'ที่ปรึกษาด้านการปกป้องความเป็นส่วนตัวและจัดการชื่อเสียงออนไลน์ระดับพรีเมียม',
    url: SITE_URL,
    telephone: '+66XXXXXXXXX',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangkok',
      addressCountry: 'TH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '13.7563',
      longitude: '100.5018',
    },
    priceRange: '฿฿฿',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  }
}
