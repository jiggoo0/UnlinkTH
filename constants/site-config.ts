/**
 * Site Configuration: ศูนย์รวมข้อมูลพื้นฐานของเว็บไซต์
 * แก้ไขที่นี่ที่เดียวเพื่อเปลี่ยนข้อมูลทั่วทั้งแอป
 */

export const siteConfig = {
  // ข้อมูลแบรนด์พื้นฐาน
  name: "Unlink Thailand",
  fullName: "Unlink Thailand - Digital Reputation Management",
  description:
    "บริการรับแก้ไขชื่อและประวัติออนไลน์ที่ผิดพลาด คืนความสะอาดให้ชื่อเสียงของคุณด้วยเทคนิคเจรจาเชิงลึกและกฎหมาย PDPA",
  url: "https://www.unlink-th.com",

  // ✅ อัปเดต Path รูปภาพให้ตรงกับที่ระบุในไฟล์ robots/og-main
  ogImage: "/images/og-main.jpg",

  // ข้อมูลการติดต่อ (Contact Info)
  contact: {
    lineUrl: "https://lin.ee/bWcwyir",
    lineId: "@204uuzew",
    phone: "0XX-XXX-XXXX", // @TODO: อย่าลืมใส่เบอร์จริงเพื่อเพิ่มความน่าเชื่อถือ
    email: "contact@unlink-th.com",
    address: "Bangkok, Thailand",
  },

  // ข้อความหลักบนหน้า Landing Page (Marketing Copy)
  branding: {
    heroTitle: "อดีตลบไม่ได้... แต่จัดการให้ดีขึ้นได้",
    heroSubTitle:
      "จัดการชื่อเสียออนไลน์ ลบแบล็กลิสต์ แก้ไขประวัติ ประเมินเคสฟรี คุยง่ายเป็นกันเองเหมือนพี่ชายแสนดี",
    ctaText: "ปรึกษาทีมงาน (ฟรี)",
    secondaryCtaText: "ดูวิธีการทำงานของเรา",
  },

  // ข้อมูลสำหรับการทำ SEO
  keywords: [
    "ลบชื่อแบล็คลิสต์",
    "แก้ไขประวัติออนไลน์",
    "ลบข้อมูลส่วนตัว",
    "ทำ SEO ดันชื่อ",
    "Right to be Forgotten",
    "จัดการชื่อเสียงออนไลน์",
    "ลบข่าวประจาน",
    "PDPA ลบข้อมูล",
    "Unlink Thailand",
  ],

  // Social Links
  links: {
    facebook: "https://www.facebook.com/share/1DDfxWEdt5/",
    twitter: "https://twitter.com/unlinkth",
    line: "https://lin.ee/bWcwyir",
  },
} as const

// สำหรับใช้ใน Metadata ของ Next.js Layout
export const metadataConfig = {
  title: {
    default: siteConfig.fullName,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "Unlink Thailand" }],
  creator: "Unlink Thailand",
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteConfig.url,
    title: siteConfig.fullName,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.fullName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.fullName,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export type SiteConfig = typeof siteConfig
