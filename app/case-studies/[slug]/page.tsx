/** @format */

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, FileText, Lock, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { SecureChannel } from "@/components/sections/SecureChannel";
import JsonLd from "@/components/shared/JsonLd";
import { getCaseStudySchema, getBreadcrumbSchema } from "@/lib/seo-schemas";

interface CasePageProps {
  params: Promise<{ slug: string }>;
}

/**
 * UNLINK-TH | Dynamic Case Metadata Protocol
 * จัดการข้อมูลสำหรับการเข้าถึงและรักษามาตรฐานความปลอดภัยข้อมูล
 */
export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study || !study.frontmatter)
    return { title: "Operational Record Not Found" };

  return {
    title: `${study.frontmatter.title} | Operational Record UNLINK-TH`,
    description: study.frontmatter.excerpt || study.frontmatter.description,
    alternates: {
      canonical: `/case-studies/${slug}/`,
    },
  };
}

/**
 * Static Generation Interface
 */
export async function generateStaticParams() {
  const cases = await getAllCaseStudies();
  return cases.map((c) => ({ slug: c.slug }));
}

import Image from "next/image";
import { getImageUrl } from "@/lib/utils";

export default async function SingleCasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  const mdxComponents = useMDXComponents({});

  if (!study || !study.frontmatter) notFound();

  const frontmatter = study.frontmatter as unknown as Record<string, string>;
  const { content } = study;

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Case Studies", item: "/case-studies" },
    { name: frontmatter.title || "Classified", item: `/case-studies/${slug}` },
  ];

  return (
    <article className="pb-24">
      <JsonLd
        data={getCaseStudySchema({
          slug,
          title: frontmatter.title,
          category: frontmatter.category,
          date: frontmatter.date,
          image: frontmatter.image,
          description: frontmatter.description || frontmatter.excerpt,
          frontmatter,
        })}
      />
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      {/* Navigation Interface */}
      <div className="container py-12">
        <Link
          href="/case-studies"
          className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-all"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Operational Portfolio
        </Link>
      </div>

      {/* 1. Operational Intelligence Header */}
      <header className="container mb-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col gap-8 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-4">
              <Badge
                variant="outline"
                className="border-primary/30 text-primary px-4 py-1 font-mono text-[10px] tracking-[0.2em] uppercase"
              >
                {frontmatter.category} Protocol
              </Badge>
              <div className="text-muted-foreground flex items-center gap-2 font-mono text-[10px] tracking-wider uppercase">
                <Calendar className="h-3.5 w-3.5" /> REL-DATE:{" "}
                {frontmatter.date}
              </div>
              <div className="text-primary/60 bg-primary/5 border-primary/10 flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
                <Lock className="h-3 w-3" /> Classified Intelligence
              </div>
            </div>

            <h1 className="text-5xl leading-[1.05] font-bold tracking-tighter text-balance md:text-7xl lg:text-8xl">
              {frontmatter.title}
            </h1>

            <p className="text-muted-foreground border-primary/30 max-w-4xl border-l-2 py-3 pl-8 text-xl leading-relaxed font-light italic">
              &quot;{frontmatter.excerpt}&quot;
            </p>
          </div>

          {/* Featured Case Image */}
          <div className="lg:col-span-5">
            <div className="lab-card border-primary/10 bg-muted/5 relative aspect-square overflow-hidden rounded-3xl border shadow-2xl">
              {frontmatter.image && (
                <Image
                  src={getImageUrl(frontmatter.image)}
                  alt={frontmatter.title}
                  fill
                  priority
                  className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </header>

      {/* 2. Technical Briefing Content */}
      <div className="container grid gap-20 lg:grid-cols-12">
        <main className="lg:col-span-8">
          <div className="prose prose-invert prose-headings:tracking-tighter prose-p:text-muted-foreground/90 prose-strong:text-primary max-w-none">
            <MDXRemote source={content} components={mdxComponents} />
          </div>
        </main>

        {/* 3. Secure Side Interface (Audit Metadata) */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-8">
            <div className="lab-card border-primary/10 bg-muted/5 shadow-primary/5 border p-10 shadow-2xl">
              <div className="text-primary mb-8 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase">
                <FileText className="h-4 w-4" /> Audit Metadata
              </div>

              <ul className="space-y-6 text-sm">
                <li className="border-border/10 flex items-center justify-between border-b pb-4">
                  <span className="text-muted-foreground font-mono text-[9px] tracking-widest uppercase">
                    Operational Status
                  </span>
                  <span className="text-primary flex items-center gap-2 text-xs font-bold tracking-widest">
                    <ShieldCheck className="h-4 w-4" /> SUCCESS
                  </span>
                </li>
                <li className="border-border/10 flex items-center justify-between border-b pb-4">
                  <span className="text-muted-foreground font-mono text-[9px] tracking-widest uppercase">
                    Privacy Tier
                  </span>
                  <span className="text-foreground text-xs font-bold tracking-widest">
                    LEVEL 4 NDA
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground font-mono text-[9px] tracking-widest uppercase">
                    Execution ID
                  </span>
                  <span className="text-muted-foreground font-mono text-[9px]">
                    {slug.toUpperCase()}-2026
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>

      {/* Visual Outcome Proof */}

      <div className="mt-40">
        <SecureChannel />
      </div>
    </article>
  );
}
