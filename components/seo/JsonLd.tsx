"use client";

interface JsonLdProps {
  /** * ข้อมูล Schema ในรูปแบบ Object ที่จะถูกแปลงเป็น JSON-LD
   * แนะนำให้ใช้ตามมาตรฐาน Schema.org เช่น ProfessionalService หรือ Article
   */
  data: Record<string, any>;
}

/**
 * JsonLd Component: Structured Data Injection
 * หน้าที่: แทรก Structured Data เพื่อช่วยให้ Search Engine (Google)
 * เข้าใจบริบทของหน้าเว็บ เช่น บริการแก้ปัญหาดิจิทัล (Digital Fixer),
 * กรณีศึกษา หรือข้อมูลองค์กร เพื่อเพิ่มโอกาสในการปรากฏเป็น Rich Snippets
 */
export default function JsonLd({ data }: JsonLdProps) {
  // 1. ตรวจสอบความถูกต้องของข้อมูลเบื้องต้น
  if (!data || Object.keys(data).length === 0) {
    return null;
  }

  /**
   * 2. Sanitization Strategy:
   * จัดการกับอักขระพิเศษเพื่อป้องกันปัญหา XSS และเพื่อความถูกต้องของ JSON format
   * จัดรูปแบบโดยการใช้ JSON.stringify และ escape อักขระที่อาจเป็นอันตราย
   */
  const sanitizeJsonLd = (obj: Record<string, any>) => {
    return JSON.stringify(obj)
      .replace(/</g, "\\u003c")
      .replace(/>/g, "\\u003e")
      .replace(/&/g, "\\u0026");
  };

  return (
    <script
      type="application/ld+json"
      // ป้องกัน Hydration Mismatch จากการแทรกข้อมูลใน Head หรือ Body ระหว่าง SSR และ CSR
      suppressHydrationWarning 
      dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(data) }}
    />
  );
}
