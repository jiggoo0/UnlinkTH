/** @format */

import { Metadata } from "next";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import { SecureChannel } from "@/components/shared/SecureChannel";
import { Calendar, ChevronLeft, Clock } from "lucide-react";
import Link from "next/link";
import JsonLd from "@/components/shared/JsonLd";
import { getBlogPostingSchema, getBreadcrumbSchema } from "@/lib/seo-schemas";

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
    title: `${post.title} | UNLINK-TH Insights`,
    description: post.description,
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
    <div className="pb-24">
      <JsonLd data={getBlogPostingSchema(post)} />
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <header className="bg-muted/5 border-border/50 border-b py-24 md:py-32">
        <div className="container">
          <Link
            href="/blog"
            className="text-muted-foreground/40 hover:text-primary mb-12 inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase transition-colors"
          >
            <ChevronLeft className="h-3 w-3" /> Back to Intelligence
          </Link>
          <div className="max-w-4xl space-y-8">
            <div className="flex items-center gap-6 font-mono text-[10px] tracking-[0.3em] uppercase">
              <span className="bg-primary/10 text-primary rounded px-2 py-1">
                {post.category}
              </span>
              <span className="text-muted-foreground/40 flex items-center gap-2">
                <Calendar className="h-3 w-3" /> {post.date}
              </span>
              <span className="text-muted-foreground/40 flex items-center gap-2">
                <Clock className="h-3 w-3" /> 5 Min Read
              </span>
            </div>
            <h1 className="text-4xl leading-[1.1] font-bold tracking-tighter md:text-7xl">
              {post.title}
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed font-light md:text-2xl">
              {post.description}
            </p>
          </div>
        </div>
      </header>

      <article className="container py-24">
        <div className="prose prose-invert prose-h2:text-3xl prose-h2:tracking-tighter prose-h3:text-primary prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground mx-auto max-w-4xl">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>

      <SecureChannel />
    </div>
  );
}
