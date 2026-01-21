import { notFound } from "next/navigation"
import Link from "next/link"
import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/constants/site-config"
import { caseStudies } from "@/lib/case-studies"
import {
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  ShieldAlert,
  Fingerprint,
  Clock,
  Activity,
} from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

/**
 * Metadata Generation:
 * ดึงข้อมูลจาก lib/case-studies เพื่อสร้าง SEO Tags เฉพาะรายเคส (Dynamic SEO)
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = caseStudies.find((c) => c.slug === slug)

  if (!item) return { title: "Case Report Not Found" }

  return {
    title: `${item.title} | บันทึกปฏิบัติการจริง`,
    description: item.incident,
    openGraph: {
      title: `${item.title} | UNLINK-TH Tactical Report`,
      description: item.incident,
      type: "article",
      url: `${siteConfig.url}/case-studies/${slug}`,
      images: [
        {
          url: item.image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: item.title,
        },
      ],
    },
  }
}

/**
 * Case Study Detail Page:
 * ออกแบบในสไตล์ "Operational Report" (บันทึกปฏิบัติการเชิงเทคนิค)
 */
export default async function CaseStudyPage({ params }: Props) {
  // 1. Unwrapping params
  const { slug } = await params

  // 2. Data Retrieval
  const item = caseStudies.find((c) => c.slug === slug)
  if (!item) notFound()

  return (
    <article className="relative min-h-screen overflow-hidden bg-background py-20 lg:py-32">
      {/* 01: Tactical Background Decor (HUD Grid) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        aria-hidden="true"
      >
        <div className="h-full w-full bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* 02: Tactical Navigation (Operational Log Style) */}
        <Link
          href="/case-studies"
          className="group mb-12 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
          Back to Operational Logs
        </Link>

        <div className="grid gap-16 lg:grid-cols-12">
          {/* 03: Main Content Side: The Report Analysis */}
          <div className="lg:col-span-8">
            <header className="mb-10">
              <div className="mb-8 flex flex-wrap items-center gap-4">
                <Badge
                  variant="outline"
                  className="border-primary/30 bg-primary/5 px-4 py-1 font-mono text-[10px] tracking-widest uppercase text-primary"
                >
                  {item.category} Strategy
                </Badge>
                <div className="flex items-center gap-2 opacity-40">
                  <Fingerprint className="h-4 w-4 text-primary" />
                  <span className="font-mono text-[9px] font-bold uppercase tracking-tighter italic">
                    Identity Anonymized
                  </span>
                </div>
              </div>

              <h1 className="mb-10 text-4xl font-extrabold leading-tight tracking-tighter text-foreground md:text-6xl lg:text-7xl">
                {item.title}
              </h1>
            </header>

            {/* Strategic Summary Matrix: Incident vs Protocol */}
            <div className="mb-16 grid gap-6 sm:grid-cols-2">
              <section className="rounded-2xl border border-border/50 bg-muted/5 p-8 transition-all hover:border-primary/20 hover:bg-muted/10">
                <div className="mb-4 flex items-center gap-2 text-primary">
                  <ShieldAlert className="h-4 w-4" />
                  <h2 className="font-mono text-[10px] font-bold uppercase tracking-widest">
                    Initial Incident
                  </h2>
                </div>
                <p className="text-sm font-medium leading-relaxed text-muted-foreground/90">
                  {item.incident}
                </p>
              </section>

              <section className="rounded-2xl border border-border/50 bg-muted/5 p-8 transition-all hover:border-primary/20 hover:bg-muted/10">
                <div className="mb-4 flex items-center gap-2 text-primary">
                  <Clock className="h-4 w-4" />
                  <h2 className="font-mono text-[10px] font-bold uppercase tracking-widest">
                    Operational Protocol
                  </h2>
                </div>
                <p className="text-sm font-medium leading-relaxed text-muted-foreground/90">
                  {item.protocol}
                </p>
              </section>
            </div>

            {/* Operational Narrative Section (Technical Narrative) */}
            <div className="prose prose-invert max-w-none border-t border-border/40 pt-12 text-muted-foreground/80">
              <div className="mb-8 flex items-center gap-3 font-bold text-foreground">
                <Activity className="h-5 w-5 text-primary" />
                <h3 className="m-0 text-xl font-bold tracking-tight">
                  Technical Analysis & Execution
                </h3>
              </div>

              <div className="space-y-6 text-base font-medium leading-loose">
                <p>
                  ในการดำเนินการเคสนี้ ทีมผู้เชี่ยวชาญของ UNLINK-TH
                  ได้ทำการวิเคราะห์ความสัมพันธ์ของข้อมูล (Relevance Audit)
                  และดำเนินการระงับเหตุผ่านขั้นตอนปฏิบัติการเชิงเทคนิค
                  ที่ผสมผสานระหว่างเทคโนโลยีการถอดถอนดัชนี (De-indexing)
                  และมาตรการตามสิทธิของเจ้าของข้อมูลส่วนบุคคล (Right to be
                  Forgotten) เพื่อให้ได้ผลลัพธ์ที่ถาวรภายใต้ความลับสูงสุด
                </p>
                <p>
                  เราดำเนินการระบุพิกัดเซิร์ฟเวอร์ต้นทางและประสานงานกับทีม Trust
                  & Safety ของแพลตฟอร์ม
                  เพื่อตัดวงจรการเข้าถึงข้อมูลที่ไม่พึงประสงค์อย่างแม่นยำ
                  ป้องกันการกลับมาของข้อมูลในระบบสืบค้นในอนาคต
                </p>
              </div>

              {/* Outcome Verification Box (Final Result) */}
              <div className="mt-16 overflow-hidden rounded-[2.5rem] border border-primary/20 bg-primary/5 p-10 backdrop-blur-sm">
                <div className="mb-6 flex items-center gap-3 text-emerald-500">
                  <CheckCircle2 className="h-6 w-6" />
                  <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em]">
                    Mission Status: Verified
                  </span>
                </div>
                <p className="text-2xl font-black leading-tight text-foreground md:text-4xl">
                  {item.result}
                </p>
                <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-primary/10 pt-8 sm:flex-row sm:items-center">
                  <p className="text-sm font-bold italic text-primary/80">
                    <span className="mr-2 not-italic text-muted-foreground">
                      — Impact Analysis:
                    </span>
                    {item.impact}
                  </p>
                  <Badge className="border-none bg-emerald-500/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-emerald-500">
                    Operation Successful
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* 04: Sidebar CTA: Secure Liaison (Encrypted Channel) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 overflow-hidden rounded-[3rem] border border-primary/20 bg-muted/10 p-10 backdrop-blur-md">
              <div
                className="absolute -right-8 -top-8 opacity-[0.03]"
                aria-hidden="true"
              >
                <ShieldAlert className="h-40 w-40 text-primary" />
              </div>

              <div className="relative z-10 mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <Activity className="h-6 w-6 text-primary" />
              </div>

              <h3 className="relative z-10 mb-4 text-2xl font-bold tracking-tight">
                ประเมินเคสส่วนบุคคล
              </h3>
              <p className="relative z-10 mb-10 text-sm leading-relaxed text-muted-foreground/90">
                ระบุ URL หรือร่องรอยดิจิทัลที่คุณกังวลเพื่อให้ Specialist
                ดำเนินการ Audit
                ความเป็นไปได้เชิงเทคนิคทันทีภายใต้นโยบายรักษาความลับสูงสุด
                (Strict NDA)
              </p>

              <Button
                asChild
                size="lg"
                className="relative z-10 h-16 w-full rounded-full bg-[#00B900] text-sm font-black text-white shadow-xl shadow-green-500/20 transition-all hover:scale-[1.02] hover:bg-[#00A000]"
              >
                <Link
                  href={siteConfig.contact.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-3 h-6 w-6 fill-current" />
                  ESTABLISH PROTOCOL
                </Link>
              </Button>

              <div className="mt-10 flex flex-col items-center gap-4 opacity-40">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-foreground">
                    Secure Liaison Active
                  </span>
                </div>
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <p className="text-[8px] font-bold uppercase tracking-widest">
                  End-to-End Encryption Enabled
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  )
}
