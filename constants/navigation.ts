/** @format */

import { NavItem, FooterNav } from "@/types"
import { siteConfig } from "./site-config"

export const mainNav: NavItem[] = [
  {
    title: "บริการทั้งหมด",
    href: "/services",
    description: "บริการลบประวัติเสียและสร้างภาพลักษณ์ใหม่ครบวงจร",
  },
  {
    title: "รีวิวและผลลัพธ์",
    href: "/reviews",
    description: "เสียงจากลูกค้าจริงและการกู้คืนชื่อเสียงที่สำเร็จ",
  },
  {
    title: "ราคาและขั้นตอน",
    href: "/pricing",
    description: "ความคุ้มค่าและกระบวนการทำงานที่โปร่งใส",
  },
  {
    title: "เกี่ยวกับเรา",
    href: "/about",
    description: "มาตรฐานความปลอดภัยและทีมงานผู้เชี่ยวชาญ",
  },
]

export const footerNav: FooterNav = {
  solutions: [
    {
      title: "Digital Detox (ลบอดีตวัยเกรียน)",
      href: "/services/digital-detox-jobbers",
    },
    {
      title: "Crisis Clean-Up (จบดราม่า)",
      href: "/services/crisis-cleanup",
    },
    {
      title: "Blacklist Remover (กู้ชื่อ)",
      href: "/services/blacklist-remover",
    },
    {
      title: "Ex-Partner Eraser (มูฟออน)",
      href: "/services/ex-partner-eraser",
    },
    {
      title: "SME Rescue (กู้ดาวร้านค้า)",
      href: "/services/sme-reputation-rescue",
    },
  ],
  support: [
    {
      title: "นโยบายความเป็นส่วนตัว",
      href: "/privacy",
    },
    {
      title: "คำถามที่พบบ่อย (FAQ)",
      href: "/faq",
    },
    {
      title: "แจ้งลบข้อมูล (PDPA)",
      href: "/request-removal",
    },
    {
      title: "ติดต่อทีมงาน",
      href: "/contact",
    },
  ],
  connect: [
    {
      title: "LINE Official (ตอบไวสุด)",
      href: siteConfig.contact.lineUrl,
      external: true,
    },
    {
      title: "Facebook Page",
      href: siteConfig.links.facebook,
      external: true,
    },
    {
      title: "Email Support",
      href: `mailto:${siteConfig.contact.email}`,
      external: true,
    },
  ],
}

export const navigationConfig = {
  header: {
    sticky: true,
    blur: true,
    ctaText: "ปรึกษาผู้เชี่ยวชาญ (ความลับ)",
    ctaLink: siteConfig.contact.lineUrl,
  },
  footer: {
    disclaimer: "UNLINK-TH: Your Past is History, Your Future is Designed.",
    copy: `© ${new Date().getFullYear()} UNLINK-TH | Managed by AEMDEVWEB`,
  },
  securityNote: "Data Auto-Purge: ข้อมูลการสนทนาจะถูกลบอัตโนมัติหลังจบเคส",
}
