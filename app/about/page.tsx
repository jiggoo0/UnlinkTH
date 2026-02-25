/** @format */

import { Metadata } from "next"
import { siteConfig } from "@/constants/site-config"
import AboutContent from "@/components/sections/AboutContent"
import JsonLd from "@/components/seo/JsonLd"
import { getBreadcrumbSchema } from "@/lib/seo-schemas"

/**
 * UNLINK-TH | Identity & Architectural Vision
 * -------------------------------------------------------------------------
 * หน้าที่แสดงวิสัยทัศน์และทีมงานเบื้องหลัง (Server Component for SEO)
 */

export const metadata: Metadata = {
  title: "รู้จักเรา - ทีมวิศวกรและที่ปรึกษากู้ชื่อเสียงดิจิทัล | UNLINK-TH",
  description:
    "ทำความรู้จักเบื้องหลัง UNLINK-TH กับพันธกิจ 'กอบกู้ตัวตน' เพื่อให้ทุกคนมีสิทธิเริ่มต้นใหม่ ทีมงานมืออาชีพด้านวิศวกรรมข้อมูลและกฎหมายดิจิทัล",
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  const founderName =
    (siteConfig.founder as { nameTh: string })?.nameTh || "Founder"

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "About", item: "/about" },
  ]

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <AboutContent founderName={founderName} />
    </>
  )
}
