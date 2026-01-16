/**
 * Site Configuration: ศูนย์รวมข้อมูลพื้นฐานของเว็บไซต์
 * แก้ไขที่นี่ที่เดียวเพื่อเปลี่ยนข้อมูลทั่วทั้งแอป
 */

export const siteConfig = {
  // ข้อมูลแบรนด์พื้นฐาน
  name: "Unlink-TH",
  fullName: "Unlink-TH Digital Reputation Management",
  description:
    "บริการรับแก้ไขชื่อและประวัติออนไลน์ที่ผิดพลาด คืนความสะอาดให้ชื่อเสียงของคุณด้วยเทคนิคเจรจาเชิงลึกและกฎหมาย PDPA",
  url: "https://www.unlink-th.com",
  ogImage: "https://www.unlink-th.com/og.jpg",

  // ข้อมูลการติดต่อ (Contact Info)
  contact: {
    lineUrl: "https://lin.ee/bWcwyir",
    lineId: "@204uuzew",
    phone: "0XX-XXX-XXXX", // @TODO: อัปเดตเบอร์โทรศัพท์จริง
    email: "contact@unlink-th.com",
    address: "กรุงเทพมหานคร, ประเทศไทย",
  },

  // ข้อความหลักบนหน้า Landing Page (Marketing Copy)
  branding: {
    heroTitle: "อดีตลบไม่ได้... แต่จัดการให้ดีขึ้นได้",
    heroSubTitle:
      "จัดการชื่อเสียออนไลน์ ลบแบล็กลิสต์ แก้ไขประวัติ ประเมินเคสฟรี คุยง่ายเป็นกันเองเหมือนพี่น้อง",
    ctaText: "ทักไลน์ปรึกษาทีมงาน (ฟรี)",
    secondaryCtaText: "ดูวิธีการทำงาน",
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
  ],

  // Social Links อื่นๆ (ถ้ามีในอนาคต)
  links: {
    facebook: "https://facebook.com/unlink-th",
    twitter: "https://twitter.com/unlink-th",
  },
} as const

// ส่งออก Type เพื่อใช้ในส่วนอื่นๆ ของแอป (เช่น Metadata)
export type SiteConfig = typeof siteConfig
