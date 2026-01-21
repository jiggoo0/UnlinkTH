import type { Metadata } from "next"
import { caseStudies } from "@/lib/case-studies"
import { CaseStudyCard } from "@/components/shared/CaseStudyCard"
import { Badge } from "@/components/ui/badge"
import { FolderKanban, ShieldCheck, Fingerprint, Activity } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Metadata Optimization:
 * ออกแบบมาเพื่อการทำ SEO สำหรับบริการ Digital Reputation Management
 */
export const metadata: Metadata = {
  title: "Case Studies | บันทึกปฏิบัติการและผลลัพธ์การจัดการข้อมูล",
  description:
    "รวบรวมกรณีศึกษาการแก้ไขปัญหาชื่อเสียงดิจิทัลและการถอดถอนข้อมูลเชิงเทคนิค ภายใต้มาตรฐานการรักษาความลับสูงสุดและจริยธรรมวิชาชีพ",
  openGraph: {
    title: "Case Studies | UNLINK Digital Fixer",
    description: "บันทึกผลลัพธ์ปฏิบัติการ De-indexing และการจัดการข้อมูลเชิงลบ",
    type: "website",
  },
}

export default function CaseStudiesPage() {
  /**
   * Data Layer Validation:
   * ป้องกัน Runtime Error กรณีที่ lib/case-studies.ts ส่งค่าที่เป็น undefined หรือ null
   */
  const allCases = caseStudies ?? []

  return (
    <div className="bg-background relative min-h-screen overflow-hidden pt-32 pb-24 lg:pt-40">
      {/* 01: Tactical Background Decor */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        aria-hidden="true"
      >
        <div className="h-full w-full bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* 02: Section Header Layer */}
        <header className="mb-16 max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <Badge
              variant="outline"
              className="border-primary/30 bg-primary/5 text-primary px-4 py-1.5 font-mono text-[10px] tracking-[0.2em] uppercase"
            >
              Operational Archive
            </Badge>
            <div className="flex items-center gap-1.5 opacity-30">
              <Activity className="text-primary h-3 w-3 animate-pulse" />
              <span className="font-mono text-[8px] tracking-tighter uppercase">
                System Active
              </span>
            </div>
          </div>

          <h1 className="text-foreground mb-6 text-4xl font-extrabold tracking-tighter md:text-6xl lg:text-8xl">
            กรณีศึกษา <br />
            <span className="text-muted-foreground font-light italic">
              และการจัดการวิกฤต
            </span>
          </h1>

          <p className="text-muted-foreground/80 max-w-2xl text-lg leading-relaxed md:text-xl">
            บันทึกปฏิบัติการแก้ไขปัญหาชื่อเสียงดิจิทัลในสถานการณ์จริง
            โดยข้อมูลทั้งหมดถูกจัดทำในรูปแบบนิรนาม{" "}
            <span className="text-foreground font-bold">(Anonymized)</span>
            เพื่อคงไว้ซึ่งมาตรการความปลอดภัยและจริยธรรมขั้นสูงสุด
          </p>
        </header>

        {/* 03: Tactical Status Bar (Verification Layer) */}

        <div className="border-border/40 text-muted-foreground/50 mb-12 flex flex-wrap items-center gap-6 border-b pb-8 text-[10px] font-bold tracking-[0.3em] uppercase">
          <div className="hover:text-primary flex items-center gap-2 transition-colors">
            <ShieldCheck className="text-primary h-4 w-4" />
            <span>Identity Protected</span>
          </div>
          <div className="bg-border/40 hidden h-4 w-px md:block" />
          <div className="hover:text-primary flex items-center gap-2 transition-colors">
            <Fingerprint className="text-primary h-4 w-4" />
            <span>Technical Verified</span>
          </div>
          <div className="bg-border/40 hidden h-4 w-px md:block" />
          <div className="hover:text-primary flex items-center gap-2 transition-colors">
            <FolderKanban className="text-primary h-4 w-4" />
            <span>Total Operational Logs: {allCases.length}</span>
          </div>
        </div>

        {/* 04: Display Matrix: Case Study Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allCases.length > 0 ? (
            allCases.map((item, index) => (
              <div
                key={item.slug}
                className={cn(
                  "animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out",
                  "fill-mode-both"
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CaseStudyCard caseStudy={item} />
              </div>
            ))
          ) : (
            <div className="border-border/50 bg-muted/5 col-span-full flex h-64 flex-col items-center justify-center rounded-[2rem] border border-dashed">
              <FolderKanban className="text-muted-foreground/20 mb-4 h-12 w-12" />
              <p className="text-muted-foreground/40 font-mono text-xs tracking-widest uppercase">
                No operational logs found in current directory.
              </p>
            </div>
          )}
        </div>

        {/* 05: Integrity & Legal Disclaimer Footer */}
        <footer className="border-border/40 mt-24 border-t pt-16">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <p className="text-muted-foreground/30 max-w-xl text-center text-[10px] leading-relaxed font-medium tracking-wider uppercase md:text-left">
              *
              ข้อมูลที่ปรากฏเป็นเพียงส่วนหนึ่งของกระบวนการถอดถอนและจัดการข้อมูลเชิงเทคนิค
              ผลลัพธ์ในแต่ละกรณีอาจแตกต่างกันไปตามโครงสร้างของแพลตฟอร์ม
              และการวิเคราะห์ความเป็นไปได้เชิงเทคนิค (Technical Feasibility
              Audit) เป็นรายกรณี
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-primary/30 h-1 w-1 rounded-full" />
              <span className="text-primary/20 font-mono text-[8px] font-black tracking-[0.4em] uppercase">
                Unlink Confidential Protocol
              </span>
              <div className="bg-primary/30 h-1 w-1 rounded-full" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
