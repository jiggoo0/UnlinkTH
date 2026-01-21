import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site-config";
import { caseStudies } from "@/lib/case-studies";
import {
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  ShieldAlert,
  Fingerprint,
  Clock,
  Activity,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

/**
 * 
 * Metadata Generation:
 * รองรับ Async Params ตามมาตรฐาน Next.js 16 เพื่อประสิทธิภาพ SEO สูงสุด
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = caseStudies.find((c) => c.slug === slug);

  if (!item) return { title: "Case Report Not Found" };

  return {
    title: `${item.title} | บันทึกปฏิบัติการจริง`,
    description: item.incident,
    openGraph: {
      title: item.title,
      description: item.incident,
      type: "article",
      images: [
        {
          url: item.image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: item.title,
        },
      ],
    },
  };
}

/**
 * Case Study Detail Page:
 * ออกแบบในสไตล์ "Operational Report" (บันทึกปฏิบัติการเชิงเทคนิค)
 */
export default async function CaseStudyPage({ params }: Props) {
  // 1. Unwrapping params (Next.js 16 Requirement)
  const { slug } = await params;

  // 2. Data Retrieval & Validation
  const item = caseStudies.find((c) => c.slug === slug);
  if (!item) notFound();

  const lineLink = `https://line.me/ti/p/${siteConfig.contact.lineId.replace(
    "@",
    ""
  )}`;

  return (
    <article className="bg-background relative min-h-screen overflow-hidden py-20 lg:py-32">
      {/* 01: Tactical Background Layer */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        aria-hidden="true"
      >
        <div className="h-full w-full bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* 02: Navigation Breadcrumb */}
        <Link
          href="/case-studies"
          className="group text-muted-foreground hover:text-primary mb-12 inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-[0.2em] uppercase transition-colors"
        >
          <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
          Back to Operational Logs
        </Link>

        <div className="grid gap-16 lg:grid-cols-12">
          {/* 03: Main Content Side: The Report Analysis */}
          <div className="lg:col-span-8">
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <Badge
                variant="outline"
                className="border-primary/30 bg-primary/5 text-primary px-4 py-1 font-mono text-[10px] tracking-widest uppercase"
              >
                {item.category}
              </Badge>
              <div className="flex items-center gap-2 opacity-40">
                <Fingerprint className="text-primary h-4 w-4" />
                <span className="font-mono text-[10px] tracking-tighter uppercase italic">
                  Identity Anonymized
                </span>
              </div>
            </div>

            <h1 className="text-foreground mb-10 text-4xl font-extrabold tracking-tighter md:text-6xl lg:text-7xl">
              {item.title}
            </h1>

            {/* Analysis Summary Matrix */}
            <div className="mb-16 grid gap-6 sm:grid-cols-2">
              <div className="border-border/50 bg-muted/5 hover:bg-muted/10 rounded-2xl border p-8 transition-colors">
                <div className="text-primary mb-4 flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4" />
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase">
                    Initial Incident
                  </span>
                </div>
                <p className="text-muted-foreground/90 text-sm leading-relaxed">
                  {item.incident}
                </p>
              </div>

              <div className="border-border/50 bg-muted/5 hover:bg-muted/10 rounded-2xl border p-8 transition-colors">
                <div className="text-primary mb-4 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase">
                    Strategic Protocol
                  </span>
                </div>
                <p className="text-muted-foreground/90 text-sm leading-relaxed">
                  {item.protocol}
                </p>
              </div>
            </div>

            {/* Operational Narrative Section */}
            <div className="prose prose-invert border-border/40 text-muted-foreground/80 max-w-none border-t pt-12">
              <h3 className="text-foreground mb-6 flex items-center gap-3 font-bold">
                <Activity className="text-primary h-5 w-5" />
                Technical Analysis & Execution
              </h3>
              <p className="mb-8 leading-loose">
                ในการดำเนินการเคสนี้
                ทีมผู้เชี่ยวชาญได้ทำการวิเคราะห์ความสัมพันธ์ของข้อมูล (Relevance
                Audit) และพบช่องโหว่ในระดับ Metadata ของลิงก์เป้าหมาย
                เราจึงดำเนินการระงับเหตุผ่านขั้นตอนปฏิบัติการ
                ที่ผสมผสานระหว่างเทคนิคการถอดถอนดัชนี (De-indexing)
                และมาตรการทางกฎหมายเพื่อให้ได้ผลลัพธ์ที่ถาวรและรวดเร็วที่สุด
              </p>

              {/* Outcome Verification Box */}
              <div className="border-primary/20 bg-primary/5 mt-12 overflow-hidden rounded-[2.5rem] border p-10 backdrop-blur-sm">
                <div className="mb-6 flex items-center gap-3 text-emerald-500">
                  <CheckCircle2 className="h-6 w-6" />
                  <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase">
                    Post-Operation Verification
                  </span>
                </div>
                <p className="text-foreground text-2xl leading-tight font-bold md:text-3xl">
                  {item.result}
                </p>
                <div className="border-primary/10 mt-8 flex items-center justify-between border-t pt-6">
                  <p className="text-muted-foreground text-sm font-medium italic">
                    — Impact: {item.impact}
                  </p>
                  <Badge className="border-none bg-emerald-500/10 text-[9px] font-black tracking-widest text-emerald-500 uppercase">
                    Operation Successful
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* 04: Sidebar CTA: Secure Engagement */}
          <aside className="lg:col-span-4">
            <div className="border-primary/20 bg-muted/10 sticky top-24 overflow-hidden rounded-[2.5rem] border p-10 backdrop-blur-md">
              <div
                className="absolute -top-6 -right-6 opacity-5"
                aria-hidden="true"
              >
                <ShieldAlert className="text-primary h-32 w-32" />
              </div>

              <h3 className="relative z-10 mb-4 text-xl font-bold tracking-tight">
                ปรึกษาเคสของคุณ
              </h3>
              <p className="text-muted-foreground relative z-10 mb-10 text-sm leading-relaxed">
                ส่งร่องรอยดิจิทัลที่คุณกังวลเพื่อให้ Specialist
                ประเมินความเสี่ยงและความเป็นไปได้เชิงเทคนิคทันทีภายใต้ความลับสูงสุด
              </p>

              <Button
                asChild
                size="lg"
                className="relative z-10 h-14 w-full rounded-full bg-[#00B900] font-black text-white shadow-xl shadow-green-500/20 transition-all hover:scale-[1.02] hover:bg-[#00A000]"
              >
                <Link href={lineLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-6 w-6 fill-current" />
                  START CONSULTATION
                </Link>
              </Button>

              <div className="mt-10 flex flex-col items-center gap-3 opacity-40">
                <span className="text-muted-foreground font-mono text-[9px] font-bold tracking-[0.4em] uppercase">
                  Zero-Knowledge Channel
                </span>
                <div className="via-primary h-[1px] w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
