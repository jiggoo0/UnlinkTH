/** @format */

import { NavItem } from "@/types";
import { siteConfig } from "./site-config";

export const mainNav: NavItem[] = [
  {
    title: "บริการทางยุทธศาสตร์",
    href: "/services",
    description: "คืนสิทธิความเป็นส่วนตัวและปลดล็อกโอกาสทางการเงินให้คุณ",
  },
  {
    title: "บันทึกปฏิบัติการ",
    href: "/case-studies",
    description: "เรื่องราวการกู้คืนอัตลักษณ์และผลความสำเร็จจริง",
  },
  {
    title: "บทความวิเคราะห์",
    href: "/blog",
    description:
      "ความรู้เจาะลึกด้าน Reputation Intelligence และ Global Mobility",
  },
  {
    title: "คำถามที่พบบ่อย",
    href: "/faq",
    description: "ทุกคำตอบเรื่องเทคนิคและความปลอดภัยที่คุณสบายใจได้",
  },
  {
    title: "เกี่ยวกับเรา",
    href: "/about",
    description: "ทีมผู้เชี่ยวชาญ UNLINK-GLOBAL ที่พร้อมเคียงข้างคุณ",
  },
];

/*
const footerNav: FooterNav = {
  solutions: [
    {
      title: "กู้บ้านอาชีพอิสระ (Credit Engineering)",
      href: "/services/credit-engineering",
    },
    {
      title: "ลบชื่อประจานออนไลน์ (Blacklist Remover)",
      href: "/services/blacklist-remover",
    },
    {
      title: "สำรองที่นั่งจริง (GDS Live Reservation)",
      href: "/services/flight-hotel-confirmed-status",
    },
    {
      title: "กู้ชื่อร้านค้า SME (Reputation Rescue)",
      href: "/services/sme-reputation-rescue",
    },
    {
      title: "Protocol ขั้นสูงสุด (The Last Resort)",
      href: "/services/extreme-intervention",
    },
  ],
  support: [
    {
      title: "นโยบายความเป็นส่วนตัว",
      href: "/privacy",
    },
    {
      title: "ศูนย์ช่วยเหลือ (FAQ)",
      href: "/faq",
    },
    {
      title: "จริยธรรมและการทำงาน",
      href: "/editorial-policy",
    },
    {
      title: "ประสานงานส่วนบุคคล",
      href: "/contact",
    },
  ],
  connect: [
    {
      title: "LINE Official (ปรึกษาลับ)",
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
};
*/

export const navigationConfig = {
  header: {
    sticky: true,
    blur: true,
    ctaText: "เริ่มต้นการประเมิน (ฟรี)",
    ctaLink: siteConfig.contact.lineUrl,
  },
  footer: {
    disclaimer: "UNLINK-GLOBAL: เพราะทุกคนสมควรได้รับโอกาสเริ่มต้นใหม่เสมอ",
    copy: "UNLINK-GLOBAL | International Data & Identity Architecture",
  },
  securityNote:
    "Confidentiality: ข้อมูลทั้งหมดจะถูกจัดการในระบบปิดเพื่อความปลอดภัยสูงสุด",
};
