import type { Metadata } from "next"
import { caseStudies } from "@/lib/case-studies"
import { CaseStudyCard } from "@/components/shared/CaseStudyCard"
import { Badge } from "@/components/ui/badge"
import { FolderKanban, ShieldCheck, Fingerprint, Activity } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Metadata Optimization:
 * ออกแบบมาเพื่อสร้าง Authority ในด้าน Digital Reputation Management
 * เสริมประสิทธิภาพ SEO ด้วย Keywords ที่ตรงกับ Search Intent ของกลุ่มเป้าหมาย
 */
export const metadata: Metadata = {
  title: "Case Studies | บันทึกปฏิบัติการและผลลัพธ์การจัดการข้อมูล",
  description:
    "รวบรวมกรณีศึกษาการแก้ไขปัญหาชื่อเสียงดิจิทัลและการถอดถอนข้อมูลเชิงเทคนิค ภายใต้มาตรฐานการรักษาความลับสูงสุดและจริยธรรมวิชาชีพของ UNLINK-TH",
  openGraph: {
    title: "Case Studies | UNLINK Digital Fixer Archive",
    description:
      "บันทึกผลลัพธ์ปฏิบัติการ De-indexing และการจัดการข้อมูลเชิงลบอย่างเป็นระบบ",
    type: "website",
    images: [
      {
        url: "/images/og-main.png",
        width: 1200,
        height: 630,
        alt: "UNLINK-TH Case Studies Archive",
      },
    ],
  },
}

export default function CaseStudiesPage() {
  /**
   * Data Layer Retrieval:
   * ดึงข้อมูล Case Studies ทั้งหมดที่ถูกลงทะเบียนไว้ในระบบ
   */
  const allCases = caseStudies ?? []

  return (
    <div className="bg-background relative min-h-screen overflow-hidden pt-32 pb-24 lg:pt-40">
      {/* 01: Tactical Background Decor (HUD Grid System) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        aria-hidden="true"
      >
        <div className="h-full w-full bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* 02: Section Header Layer (Typography & Context) */}
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

          <h1 className="text-foreground mb-6 text-5xl font-extrabold tracking-tighter md:text-7xl lg:text-8xl">
            กรณีศึกษา <br />
            <span className="text-muted-foreground font-light italic">
              และการจัดการวิกฤต
            </span>
          </h1>

          <p className="text-muted-foreground/80 max-w-2xl text-lg leading-relaxed font-medium md:text-xl">
            บันทึกปฏิบัติการแก้ไขปัญหาชื่อเสียงดิจิทัลในสถานการณ์จริง
            โดยข้อมูลทั้งหมดถูกจัดทำในรูปแบบนิรนาม{" "}
            <span className="text-foreground font-bold">(Anonymized)</span>
            เพื่อคงไว้ซึ่งมาตรฐานความปลอดภัยและสิทธิส่วนบุคคลขั้นสูงสุดของลูกค้า
          </p>
        </header>

        {/* 03: Tactical Status Bar (Verification & E-E-A-T Layer) */}
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
            <span>Active Logs: {allCases.length}</span>
          </div>
        </div>

        {/* 04: Display Matrix: Case Study Cards (Dynamic Grid) */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allCases.length > 0 ? (
            allCases.map((item, index) => (
              <div
                key={`${item.slug}-${index}`}
                className={cn(
                  "animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out",
                  "fill-mode-both"
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CaseStudyCard caseStudy={item} />
              </div>
            ))
          ) : (
            <div className="border-border/50 bg-muted/5 col-span-full flex h-80 flex-col items-center justify-center rounded-[3rem] border border-dashed">
              <FolderKanban className="text-muted-foreground/20 mb-4 h-12 w-12" />
              <p className="text-muted-foreground/40 font-mono text-xs font-bold tracking-widest uppercase">
                No operational logs indexed in current directory.
              </p>
            </div>
          )}
        </div>

        {/* 05: Integrity Disclaimer Footer */}
        <footer className="border-border/40 mt-32 border-t pt-16">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="max-w-2xl">
              <p className="text-muted-foreground/40 text-center text-[10px] leading-loose font-bold tracking-widest uppercase md:text-left">
                [TECHNICAL NOTICE]
                <br />
                ข้อมูลที่ปรากฏเป็นเพียงส่วนหนึ่งของปฏิบัติการถอดถอนข้อมูลเชิงเทคนิค
                ผลลัพธ์ในแต่ละกรณีอาจแตกต่างกันไปตามโครงสร้างของแพลตฟอร์มต้นทาง
                และความลึกของข้อมูลในดัชนีการค้นหา (Index Depth)
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-primary/20 h-1.5 w-1.5 rounded-full" />
              <span className="text-primary/30 font-mono text-[9px] font-black tracking-[0.5em] uppercase">
                Unlink Tactical Archives
              </span>
              <div className="bg-primary/20 h-1.5 w-1.5 rounded-full" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
