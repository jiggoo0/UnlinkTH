/** @format */

import { Metadata } from "next";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import { SecureChannel } from "@/components/sections/SecureChannel";
import {
  Calendar,
  Clock,
  ShieldCheck,
  Lock,
  ArrowRight,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/shared/JsonLd";
import { getBlogPostingSchema, getBreadcrumbSchema } from "@/lib/seo-schemas";
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

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metadata?.defaultTitle || `${post.title} | UNLINK-TH Insights`,
    description: post.metadata?.defaultDescription || post.description,
    keywords: post.metadata?.keywords,
    alternates: {
      canonical: `/blog/${slug}/`,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  const mdxComponents = useMDXComponents({});

  if (!post) notFound();

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
    { name: post.title, item: `/blog/${post.slug}` },
  ];

  return (
    <article className="pb-24">
      <JsonLd data={getBlogPostingSchema(post)} />
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
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{post.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* 1. Protocol Intelligence Header */}
      <header className="border-border/50 bg-muted/10 relative mb-20 overflow-hidden border-b py-24 min-h-[400px] flex items-center">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          {post.image && (
            <Image
              src={getImageUrl(post.image)}
              alt={post.title}
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
                {post.category} Intelligence
              </Badge>
              <span className="text-muted-foreground/60 font-mono text-[10px] tracking-widest uppercase flex items-center gap-2">
                <Calendar className="h-3 w-3" /> {post.date}
              </span>
              <span className="text-muted-foreground/60 font-mono text-[10px] tracking-widest uppercase flex items-center gap-2">
                <Clock className="h-3 w-3" /> 5 Min Read
              </span>
            </div>

            <h1 className="text-5xl leading-[1.1] font-bold tracking-tighter text-balance md:text-7xl text-white">
              {post.title}
            </h1>

            <div className="border-border/10 grid gap-8 border-t pt-8 md:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="bg-primary/5 rounded-lg p-2">
                  <ShieldCheck className="text-primary/70 h-5 w-5" />
                </div>
                <span className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
                  Verified Intelligence
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/5 rounded-lg p-2">
                  <Lock className="text-primary/70 h-5 w-5" />
                </div>
                <span className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
                  {post.priceInfo?.model || "Educational Protocol"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Technical Execution Area */}
      <div className="container grid gap-20 lg:grid-cols-12">
        <main className="lg:col-span-8">
          <div className="prose prose-invert prose-headings:tracking-tighter prose-p:leading-relaxed prose-p:text-muted-foreground/90 prose-strong:text-primary max-w-none">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </main>

        {/* 3. Secure Side Interface */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-8">
            <div className="lab-card border-primary/10 bg-muted/5 shadow-primary/5 border p-10 shadow-2xl">
              <div className="space-y-4">
                <div className="text-primary/60 flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase">
                  <Terminal className="h-3 w-3" />
                  <span>Intelligence Summary</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight">
                  Key Insights
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  {post.shortDescription || post.description}
                </p>
              </div>

              <div className="space-y-4 pt-6">
                <p className="text-primary/60 font-mono text-[10px] tracking-widest uppercase">
                  Takeaways & Actions
                </p>
                <ul className="space-y-4">
                  {(post.features?.length ?? 0) > 0 ? (
                    post.features?.map((feature: string, i: number) => (
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
                      <span>Contact us for personalized consultation</span>
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
                  End-to-End Encryption <br />
                  Data Privacy Verified
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
