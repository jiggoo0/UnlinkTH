/** @format */

import { Metadata } from "next";
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import { SecureChannel } from "@/components/sections/SecureChannel";
import {
  Calendar,
  ShieldCheck,
  Lock,
  ArrowRight,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/shared/JsonLd";
import { getCaseStudySchema, getBreadcrumbSchema } from "@/lib/seo-schemas";
import { getImageUrl } from "@/lib/utils";
import { siteConfig } from "@/constants/site-config";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface CasePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) return { title: "Operational Record Not Found" };

  return {
    title:
      study.metadata?.defaultTitle ||
      `${study.title} | Operational Record UNLINK-TH`,
    description: study.metadata?.defaultDescription || study.excerpt,
    keywords: study.metadata?.keywords,
    alternates: {
      canonical: `/case-studies/${slug}/`,
    },
  };
}

export async function generateStaticParams() {
  const cases = await getAllCaseStudies();
  return cases.map((c) => ({ slug: c.slug }));
}

export default async function SingleCasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  const mdxComponents = useMDXComponents({});

  if (!study) notFound();

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Case Studies", item: "/case-studies" },
    { name: study.title || "Classified", item: `/case-studies/${slug}` },
  ];

  return (
    <article className="pb-24">
      <JsonLd data={getCaseStudySchema(study)} />
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      {/* 0. Breadcrumb Navigation */}
      <div className="container pt-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/case-studies">Case Studies</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{study.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* 1. Operational Intelligence Header */}
      <header className="border-border/50 bg-muted/10 relative mb-20 overflow-hidden border-b py-24 min-h-[400px] flex items-center">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          {study.image && (
            <Image
              src={getImageUrl(study.image)}
              alt={study.title}
              fill
              priority
              className="object-cover opacity-40 saturate-[0.3]"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent)]" />
        </div>

        <div className="relative z-10 container">
          <div className="flex max-w-5xl flex-col gap-8">
            <div className="flex flex-wrap items-center gap-4">
              <Badge
                variant="outline"
                className="border-primary/30 text-primary px-4 py-1 font-mono text-[10px] tracking-[0.2em] uppercase"
              >
                {study.category} Record
              </Badge>
              <span className="text-muted-foreground/60 font-mono text-[10px] tracking-widest uppercase flex items-center gap-2">
                <Calendar className="h-3 w-3" /> REL-DATE: {study.date}
              </span>
              <div className="text-primary/60 bg-primary/5 border-primary/10 flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
                <Lock className="h-3 w-3" /> Classified Intelligence
              </div>
            </div>

            <h1 className="text-4xl leading-[1.2] font-bold tracking-tight text-white md:text-6xl">
              {study.title}
            </h1>

            <div className="border-border/10 grid gap-6 border-t pt-8 md:grid-cols-4">
              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground/50 font-sans text-[10px] font-bold tracking-wider uppercase">
                  Service Category
                </span>
                <span className="text-primary font-medium text-sm">
                  {study.category}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground/50 font-sans text-[10px] font-bold tracking-wider uppercase">
                  Execution Date
                </span>
                <span className="text-white/90 font-medium text-sm">
                  {study.date}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground/50 font-sans text-[10px] font-bold tracking-wider uppercase">
                  Primary Platform
                </span>
                <span className="text-white/90 font-medium text-sm">
                  {study.metadata?.keywords?.[0] || "Verified Systems"}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground/50 font-sans text-[10px] font-bold tracking-wider uppercase">
                  Verification
                </span>
                <div className="flex items-center gap-1.5 text-primary">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="text-[11px] font-bold uppercase tracking-widest">
                    Confirmed Result
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Professional Evidence Area */}
      <div className="container grid gap-16 lg:grid-cols-12">
        <main className="lg:col-span-8">
          {/* Tangible Proof Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-muted/5 border border-primary/10 p-8 rounded-xl flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <ShieldCheck className="text-primary h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Operational Audit Log
                </h4>
              </div>
              <div className="space-y-4">
                {study.auditLog && study.auditLog.length > 0 ? (
                  study.auditLog.map((log, i) => (
                    <div
                      key={i}
                      className="flex gap-4 items-start border-l-2 border-primary/20 pl-4 py-1"
                    >
                      <span className="text-[10px] font-mono text-primary/60 whitespace-nowrap">
                        {log.date}
                      </span>
                      <span className="text-[11px] text-muted-foreground leading-tight">
                        {log.action}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground text-xs italic">
                    Confidential operational record.
                  </p>
                )}
              </div>
            </div>

            <div className="bg-muted/5 border border-white/5 p-8 rounded-xl flex flex-col gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/5 rounded-full p-2">
                    <Lock className="text-white/40 h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    Verification Guide
                  </h4>
                </div>
                <ul className="space-y-3">
                  {study.verificationSteps &&
                  study.verificationSteps.length > 0 ? (
                    study.verificationSteps.map((step, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-xs text-muted-foreground leading-relaxed"
                      >
                        <span className="bg-primary/10 text-primary w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-xs text-muted-foreground italic">
                      Consult private channel for verification.
                    </li>
                  )}
                </ul>
              </div>

              {study.legalReference && (
                <div className="pt-6 border-t border-white/5">
                  <span className="text-[10px] text-muted-foreground/40 font-bold uppercase tracking-widest block mb-2">
                    Legal/Regulatory Reference
                  </span>
                  <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                    <span className="text-[11px] text-primary/80 font-medium italic">
                      {study.legalReference}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="prose prose-invert prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-muted-foreground/90 prose-strong:text-primary prose-blockquote:border-primary/50 max-w-none">
            <MDXRemote source={study.content} components={mdxComponents} />
          </div>
        </main>

        {/* 3. Secure Side Interface */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-8">
            <div className="lab-card border-primary/10 bg-muted/5 shadow-primary/5 border p-10 shadow-2xl">
              <div className="space-y-4">
                <div className="text-primary/60 flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase">
                  <Terminal className="h-3 w-3" />
                  <span>Audit Metadata</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight">
                  Mission Briefing
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  {study.excerpt || study.shortDescription || study.description}
                </p>
              </div>

              {/* Client & Outcome info if available */}
              {(study.client || study.outcome) && (
                <div className="space-y-4 pt-6 border-t border-border/10">
                  {study.client && (
                    <div className="flex flex-col gap-1">
                      <span className="text-muted-foreground/40 font-mono text-[9px] tracking-widest uppercase">
                        Client
                      </span>
                      <span className="text-foreground text-sm font-medium">
                        {study.client}
                      </span>
                    </div>
                  )}
                  {study.outcome && (
                    <div className="flex flex-col gap-1">
                      <span className="text-muted-foreground/40 font-mono text-[9px] tracking-widest uppercase">
                        Final Outcome
                      </span>
                      <span className="text-primary text-sm font-bold tracking-tight">
                        {study.outcome}
                      </span>
                    </div>
                  )}
                </div>
              )}

              <div className="space-y-4 pt-6">
                <p className="text-primary/60 font-mono text-[10px] tracking-widest uppercase">
                  Execution Highlights
                </p>
                <ul className="space-y-4">
                  {(study.features?.length ?? 0) > 0 ? (
                    study.features?.map((feature: string, i: number) => (
                      <li
                        key={i}
                        className="group text-muted-foreground flex items-start gap-3 text-xs leading-relaxed"
                      >
                        <ShieldCheck className="text-primary/40 group-hover:text-primary mt-0.5 h-4 w-4 shrink-0 transition-colors" />
                        <span>{feature}</span>
                      </li>
                    ))
                  ) : (
                    <li className="group text-muted-foreground flex items-start gap-3 text-xs leading-relaxed">
                      <ShieldCheck className="text-primary/40 group-hover:text-primary mt-0.5 h-4 w-4 shrink-0 transition-colors" />
                      <span>Confidential Operational Protocol</span>
                    </li>
                  )}
                </ul>
              </div>

              <div className="pt-10">
                <Button
                  asChild
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-black font-bold text-sm tracking-widest uppercase group"
                >
                  <Link href={siteConfig.contact.lineUrl} target="_blank">
                    Contact Specialist
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <p className="text-[10px] text-muted-foreground text-center mt-4 font-mono uppercase tracking-widest">
                  Secure Private Channel
                </p>
              </div>

              <div className="border-border/10 space-y-6 border-t pt-8 text-center">
                <div className="text-muted-foreground/60 text-[10px] leading-relaxed font-mono uppercase tracking-[0.2em]">
                  Operational Status:{" "}
                  <span className="text-primary">SUCCESS</span> <br />
                  Data Privacy Tier: LEVEL 4 NDA
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-40">
        <SecureChannel />
      </div>
    </article>
  );
}
