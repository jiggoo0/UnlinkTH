/** @format */

import { Metadata } from "next";
import ContactContent from "@/components/sections/ContactContent";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo-schemas";

/**
 * UNLINK-TH | Secure Liaison Access
 * -------------------------------------------------------------------------
 * ช่องทางการติดต่อประสานงานที่ปลอดภัย (Server Component for SEO)
 */

export const metadata: Metadata = {
  title: "ปรึกษาผู้เชี่ยวชาญแบบส่วนตัว (Confidential) | UNLINK-TH",
  description:
    "เริ่มต้นกู้คืนชื่อเสียงของคุณ ปรึกษาและประเมินเคสภายใต้มาตรการรักษาความลับสูงสุด ข้อมูลของคุณปลอดภัยและได้รับการดูแลโดยมืออาชีพ",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Contact", item: "/contact" },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <ContactContent />
    </>
  );
}
