/** @format */

import { Metadata } from 'next'

/**
 * [STRATEGY: SEO GLOBAL HELPER]
 * - constructMetadata: สร้าง Object สำหรับ Metadata API ของ Next.js
 * - getJsonLd: จัดการ Local Business Schema สำหรับ Google
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.unlinkth.com'

export function constructMetadata({
  title,
  description,
  image = '/images/og-main.jpg',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
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
    openGraph: {
      title: fullTitle,
      description: fullDesc,
      url: SITE_URL,
      siteName: 'UnlinkTH',
      images: [
        {
          url: image,
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
      images: [image],
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
      },
    }),
  }
}

export const getJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: 'UnlinkTH Strategy',
    image: `${SITE_URL}/images/logo.png`,
    description:
      'บริการระดับมืออาชีพด้านการจัดการชื่อเสียงออนไลน์และปกป้องความเป็นส่วนตัว',
    url: SITE_URL,
    telephone: '+66XXXXXXXXX',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bangkok, Thailand',
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
