/**
 * Interface สำหรับรายการลิงก์นำทาง
 */
export interface NavItem {
  title: string
  href: string
  description?: string // สำหรับใช้ใน Navigation Menu แบบมีรายละเอียด
  external?: boolean
}

/**
 * เมนูหลักสำหรับ Navbar และ Mobile Menu
 */
export const navigationLinks: NavItem[] = [
  { title: "หน้าแรก", href: "/" },
  { title: "บริการของเรา", href: "/services" },
  { title: "ผลงาน/เคสตัวอย่าง", href: "/case-studies" },
  { title: "ขั้นตอนทำงาน", href: "/#proof" }, // Anchor link ไปยังส่วน Proof ในหน้าแรก
  { title: "คำถามที่พบบ่อย", href: "/faq" },
  { title: "ติดต่อเรา", href: "/contact" },
]

/**
 * เมนูเสริมสำหรับ Footer (แบ่งตามหมวดหมู่)
 */
export const footerNavigation = {
  services: [
    { title: "ลบข้อมูลแบล็กลิสต์", href: "/services/blacklist-removal" },
    { title: "จัดการข่าวเสีย (SEO Push)", href: "/services/seo-reputation" },
    { title: "กฎหมายคุ้มครองข้อมูล", href: "/services/legal-privacy" },
  ],
  company: [
    { title: "เกี่ยวกับเรา", href: "/about" },
    { title: "นโยบายความเป็นส่วนตัว", href: "/privacy" },
    { title: "ติดต่อเรา", href: "/contact" },
  ],
  support: [
    { title: "คำถามที่พบบ่อย (FAQ)", href: "/faq" },
    { title: "ตรวจสอบสถานะเคส", href: "/contact" },
    {
      title: "ปรึกษาผ่าน LINE",
      href: "https://line.me/ti/p/@204uuzew",
      external: true,
    },
  ],
}
