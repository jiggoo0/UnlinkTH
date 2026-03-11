/** @format */

import { Metadata } from "next";
import { getAllCaseStudies } from "@/lib/mdx";
import CaseStudyCard from "@/components/shared/CaseStudyCard";
import { ShieldCheck, FileSearch } from "lucide-react";

/**
 * UNLINK-TH | Evidence & Operational Portfolio (2026)
 * -------------------------------------------------------------------------
 * รวมบันทึกผลลัพธ์ปฏิบัติการจัดการชื่อเสียงและตัวตนดิจิทัล
 * พัฒนาภายใต้มาตรฐานความปลอดภัยข้อมูลและการรักษาความลับระดับสูงสุด
 */

export const metadata: Metadata = {
  title: "Evidence Portfolio | UNLINK-TH Reputation Management",
  description:
    "รวบรวมบันทึกปฏิบัติการจัดการชื่อเสียงออนไลน์ การถอดถอนข้อมูลเชิงลบ และการสร้างเกราะป้องกันภาพลักษณ์ที่ประสบความสำเร็จ",
};

export default async function CaseStudiesPage() {
  // ดึงบันทึกปฏิบัติการทั้งหมดจากระบบบริหารจัดการเนื้อหา (MDX Store)
  const allCases = await getAllCaseStudies();

  return (
    <div className="container py-24">
      {/* 1. Page Header Interface: สัญญาณความเชื่อมั่นเชิงประจักษ์ */}
      <div className="mb-20 max-w-4xl">
        <div className="bg-primary/5 border-primary/20 text-primary mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[10px] tracking-[0.3em] uppercase">
          <ShieldCheck className="h-4 w-4" />
          <span>Verified Operational Outcomes</span>
        </div>

        <h1 className="mb-8 text-5xl leading-[1.1] font-bold tracking-tighter md:text-8xl">
          Evidence <br />
          <span className="text-primary font-light italic">Portfolio</span>
        </h1>

        <p className="text-muted-foreground text-xl leading-relaxed font-light md:text-2xl">
          บันทึกผลลัพธ์จากการปฏิบัติการจริงในการจัดการข้อมูลเชิงลบและปกป้องอัตลักษณ์ดิจิทัล
          ทุกรายละเอียดถูกจัดทำขึ้นโดยยึดถือความเป็นส่วนตัวของคู่สัญญาเป็นลำดับแรก
        </p>
      </div>

      {/* 2. Intelligence Grid: แฟ้มบันทึกปฏิบัติการ */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {allCases.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>

      {/* 3. Confidential Briefing Notice: ช่องทางประสานงานเคสพิเศษ */}
      <div className="lab-card border-primary/20 bg-muted/5 mt-32 rounded-[3rem] border-dashed p-12 text-center md:p-20">
        <div className="bg-primary/5 border-primary/10 mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border">
          <FileSearch className="text-primary h-8 w-8" />
        </div>

        <h3 className="mb-4 text-3xl font-bold tracking-tight">
          Complex Case Investigation?
        </h3>

        <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-lg leading-relaxed font-light">
          เรามีบันทึกปฏิบัติการอีกจำนวนมากที่ถูกจำกัดสิทธิ์การเข้าถึงเพื่อความปลอดภัยของข้อมูล
          หากท่านต้องการแผนงานที่ออกแบบเฉพาะบุคคล
          สามารถนัดหมายประสานงานส่วนตัวได้ทันที
        </p>

        <button className="text-primary hover:text-primary/80 border-primary/20 border-b pb-1 font-mono text-[11px] font-bold tracking-[0.4em] uppercase transition-colors">
          Request Confidential Briefing
        </button>
      </div>
    </div>
  );
}
