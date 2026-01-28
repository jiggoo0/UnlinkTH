/** @format */

import { Metadata } from "next"
import { getAllCaseStudies } from "@/lib/case-studies"
import CaseStudyCard from "@/components/shared/CaseStudyCard"
import { ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Evidence Portfolio | UnlinkTH Reputation Architect",
  description:
    "รวมเคสตัวอย่างการจัดการชื่อเสียงออนไลน์ การลบข่าวเสีย และการสร้างเกราะป้องกันข้อมูลเชิงลบที่ประสบความสำเร็จ",
}

export default async function CaseStudiesPage() {
  const allCases = await getAllCaseStudies()

  return (
    <div className="container py-20">
      {/* Page Header */}
      <div className="mb-16 max-w-3xl">
        <div className="bg-primary/10 border-primary/20 text-primary mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs">
          <ShieldCheck className="h-4 w-4" />
          <span>Verified Outcomes</span>
        </div>
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Evidence <span className="text-primary">Portfolio</span>
        </h1>
        <p className="text-muted-foreground text-xl leading-relaxed">
          ผลลัพธ์จากการปฏิบัติการจริงในการจัดการข้อมูลเชิงลบและปกป้องอัตลักษณ์ดิจิทัล
          ทุกเคสถูกจัดทำขึ้นโดยการรักษาความเป็นส่วนตัวของลูกค้าเป็นลำดับแรก
        </p>
      </div>

      {/* Grid Display */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {allCases.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>

      {/* Private Consultation Notice */}
      <div className="lab-card mt-24 border-dashed p-12 text-center">
        <h3 className="mb-4 text-2xl font-bold">
          เคสของคุณมีความซับซ้อนเฉพาะตัว?
        </h3>
        <p className="text-muted-foreground mx-auto mb-8 max-w-xl">
          เรามีผลงานอีกมากมายที่ไม่ได้ถูกนำมาเปิดเผยต่อสาธารณะเพื่อเหตุผลด้านความปลอดภัย
          หากคุณต้องการโซลูชันที่ออกแบบเฉพาะบุคคล สามารถนัดหมายปรึกษาแบบลับ
          (Private) ได้ทันที
        </p>
        <button className="text-primary font-mono text-sm tracking-widest uppercase hover:underline">
          Request Confidential Briefing →
        </button>
      </div>
    </div>
  )
}
