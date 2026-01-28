/** @format */

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/case-studies";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, FileText, Lock, ShieldCheck } from "lucide-react";
import Link from "next/link";
import ContactCTA from "@/components/sections/ContactCTA";

interface CasePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study || !study.frontmatter) return { title: "Not Found" };

  return {
    title: `${study.frontmatter.title} | Case Study UnlinkTH`,
    description: study.frontmatter.excerpt || study.frontmatter.description,
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

  if (!study || !study.frontmatter) notFound();

  const { frontmatter, content } = study;

  return (
    <article className="pb-20">
      <div className="container py-12">
        <Link href="/case-studies" className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-sm transition-all">
          <ArrowLeft className="h-4 w-4" /> Back to Operational Portfolio
        </Link>
      </div>

      <header className="container mb-20">
        <div className="flex max-w-5xl flex-col gap-8">
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="outline" className="border-primary/30 text-primary font-mono text-[10px] uppercase tracking-widest px-4 py-1">
              {frontmatter.category} Protocol
            </Badge>
            <div className="text-muted-foreground flex items-center gap-2 font-mono text-[10px] uppercase">
              <Calendar className="h-3.5 w-3.5" /> Rel-Date: {frontmatter.date}
            </div>
            <div className="text-primary/60 flex items-center gap-2 font-mono text-[10px] uppercase bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
              <Lock className="h-3 w-3" /> Classified Intelligence
            </div>
          </div>
          <h1 className="text-5xl font-bold tracking-tighter md:text-7xl lg:text-8xl leading-[1.1]">
            {frontmatter.title}
          </h1>
          <p className="text-muted-foreground border-l-2 border-primary/30 py-3 pl-8 text-xl font-light max-w-4xl">
            {frontmatter.excerpt}
          </p>
        </div>
      </header>

      <div className="container grid gap-20 lg:grid-cols-12">
        <main className="lg:col-span-8">
          <div className="prose prose-invert max-w-none">
            <MDXRemote source={content} components={mdxComponents} />
          </div>
        </main>
        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-8">
            <div className="lab-card border-primary/10 p-10 bg-muted/5">
              <div className="text-primary mb-8 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase">
                <FileText className="h-4 w-4" /> Audit Metadata
              </div>
              <ul className="space-y-5 text-sm">
                <li className="border-border/5 flex justify-between border-b pb-3 items-center">
                  <span className="text-muted-foreground font-mono text-[10px] uppercase">Operational Status</span>
                  <span className="text-primary font-bold flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> SUCCESS</span>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
      <div className="mt-40"><ContactCTA /></div>
    </article>
  );
}
