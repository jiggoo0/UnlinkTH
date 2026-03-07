/** @format */

import { Metadata } from "next";
import AboutContent from "@/components/sections/AboutContent";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo-schemas";

/**
 * UNLINK-TH | Identity & Architectural Vision
 * -------------------------------------------------------------------------
 * หน้าที่แสดงวิสัยทัศน์และทีมงานเบื้องหลัง (Server Component for SEO)
 */

export const metadata: Metadata = {
  title:
    "Vision & Architecture - ทีมวิศวกรที่ปรึกษากู้ชื่อเสียงดิจิทัล | UNLINK-GLOBAL",
  description:
    "ทำความรู้จักเบื้องหลัง UNLINK-GLOBAL พันธกิจ 'กอบกู้ตัวตน' เพื่อให้ทุกคนมีสิทธิเริ่มต้นใหม่ โดยการขับเคลื่อนของทีมวิศวกรผู้เชี่ยวชาญด้านข้อมูลและกฎหมายดิจิทัลจาก AemDevWeb Studio",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const founderName = "Chief Technology & Data Architect";

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "About", item: "/about" },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <AboutContent founderName={founderName} />
    </>
  );
}
