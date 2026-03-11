/** @format */

import { NavItem } from "@/types";
import { siteConfig } from "./site-config";

export const mainNav: NavItem[] = [
  {
    title: "บริการของเรา",
    href: "/services",
    description: "แก้เครดิตบูโร กู้บ้านไม่ผ่าน และจัดการชื่อเสียงออนไลน์ให้คุณ",
  },
  {
    title: "ตัวอย่างความสำเร็จ",
    href: "/case-studies",
    description: "รวมเคสที่ช่วยลูกค้าแก้ปัญหาได้สำเร็จจริง มั่นใจในผลลัพธ์",
  },
  {
    title: "บทความน่ารู้",
    href: "/blog",
    description:
      "เคล็ดลับการขอวีซ่า วิธีเริ่มต้นใหม่ทางการเงิน และการป้องกันข้อมูลบนเน็ต",
  },
  {
    title: "คำถามที่พบบ่อย",
    href: "/faq",
    description: "ทุกคำตอบที่คุณสงสัยเรื่องการบริการและความปลอดภัย",
  },
  {
    title: "เกี่ยวกับเรา",
    href: "/about",
    description: "ทำความรู้จักทีมงาน UNLINK-GLOBAL ที่พร้อมช่วยเหลือคุณ",
  },
];

/*
const footerNav: FooterNav = {
  solutions: [
    {
      title: "แก้เครดิตบูโร/กู้บ้าน (Credit Support)",
      href: "/services/credit-engineering",
    },
    {
      title: "ลบชื่อประจานออนไลน์ (Reputation Clean)",
      href: "/services/blacklist-remover",
    },
    {
      title: "บริการจองตั๋ว/โรงแรม (Travel Docs)",
      href: "/services/flight-hotel-confirmed-status",
    },
    {
      title: "กู้ชื่อเสียงร้านค้า SME (SME Rescue)",
      href: "/services/sme-reputation-rescue",
    },
    {
      title: "บริการดูแลเคสพิเศษ (Premium Support)",
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
      title: "มาตรฐานการบริการ",
      href: "/editorial-policy",
    },
    {
      title: "ติดต่อเรา",
      href: "/contact",
    },
  ],
  connect: [
    {
      title: "LINE Official (ปรึกษาฟรี)",
      href: siteConfig.contact.lineUrl,
      external: true,
    },
    {
      title: "Facebook Community",
      href: siteConfig.links.facebook,
      external: true,
    },
    {
      title: "Email ติดต่อ",
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
    ctaText: "ปรึกษาเคสฟรี (ทาง LINE)",
    ctaLink: siteConfig.contact.lineUrl,
  },
  footer: {
    disclaimer: "UNLINK-GLOBAL: เพราะทุกคนสมควรได้รับโอกาสเริ่มต้นใหม่เสมอ",
    copy: "UNLINK-GLOBAL | ผู้เชี่ยวชาญด้านการจัดการข้อมูลและชื่อเสียงออนไลน์",
  },
  securityNote:
    "Confidentiality: ข้อมูลของคุณจะถูกเก็บเป็นความลับสูงสุดเพื่อความปลอดภัย",
};
