/** @format */

import { NavItem, FooterNav } from "@/types"
import { siteConfig } from "./site-config"

export const mainNav: NavItem[] = [
  {
    title: "ทางออกเพื่อการเริ่มต้นใหม่",
    href: "/services",
    description: "คืนสิทธิความเป็นส่วนตัวและพื้นที่ชีวิตที่สะอาดตาให้คุณ",
  },
  {
    title: "บันทึกความสำเร็จ",
    href: "/case-studies",
    description: "เรื่องราวการกู้คืนชื่อเสียงและรอยยิ้มที่กลับมาอีกครั้ง",
  },
  {
    title: "บทความวิเคราะห์",
    href: "/blog",
    description: "ความรู้เจาะลึกด้านการจัดการชื่อเสียงและภัยคุกคามออนไลน์",
  },
  {
    title: "คำถามและข้อสงสัย",
    href: "/faq",
    description: "ทุกคำตอบเรื่องเทคนิคและกฎหมายที่คุณสบายใจได้",
  },
  {
    title: "ทำความรู้จักเรา",
    href: "/about",
    description: "ทีมผู้เชี่ยวชาญที่พร้อมเคียงข้างคุณในทุกวิกฤต",
  },
]

export const footerNav: FooterNav = {
  solutions: [
    {
      title: "ล้างอดีตวัยเกรียน (Jobbers Detox)",
      href: "/services/digital-detox-jobbers",
    },
    {
      title: "ยุติดราม่าทัวร์ลง (Crisis Cleanup)",
      href: "/services/crisis-cleanup",
    },
    {
      title: "กู้ชื่อหนี้นอกระบบ (Blacklist Remover)",
      href: "/services/blacklist-remover",
    },
    {
      title: "มูฟออนความทรงจำ (Ex-Partner Eraser)",
      href: "/services/ex-partner-eraser",
    },
    {
      title: "กู้ดาวร้านค้า SME (Reputation Rescue)",
      href: "/services/sme-reputation-rescue",
    },
  ],
  support: [
    {
      title: "นโยบายความเป็นส่วนตัว (Confidentiality)",
      href: "/privacy",
    },
    {
      title: "ศูนย์ช่วยเหลือ (FAQ)",
      href: "/faq",
    },
    {
      title: "จริยธรรมข้อมูล (Ethics)",
      href: "/editorial-policy",
    },
    {
      title: "ประสานงานส่วนบุคคล",
      href: "/contact",
    },
  ],
  connect: [
    {
      title: "LINE Official (ปรึกษาลับเฉพาะ)",
      href: siteConfig.contact.lineUrl,
      external: true,
    },
    {
      title: "Facebook Community",
      href: siteConfig.links.facebook,
      external: true,
    },
    {
      title: "Secure Email",
      href: `mailto:${siteConfig.contact.email}`,
      external: true,
    },
  ],
}

export const navigationConfig = {
  header: {
    sticky: true,
    blur: true,
    ctaText: "เริ่มต้นการประเมิน (ฟรี)",
    ctaLink: siteConfig.contact.lineUrl,
  },
  footer: {
    disclaimer: "UNLINK-TH: เพราะทุกคนสมควรได้รับโอกาสเริ่มต้นใหม่เสมอ",
    copy: `© ${new Date().getFullYear()} UNLINK-TH | Managed by AEMDEVWEB Security Unit`,
  },
  securityNote:
    "Privacy First: ข้อมูลการสนทนาจะถูกลบอัตโนมัติเพื่อความปลอดภัยสูงสุด",
}
