/** @format */

import { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/blog";
import Link from "next/link";
import { BookOpen, Calendar, ChevronRight } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo-schemas";

export const metadata: Metadata = {
  title: "คู่มือรับมือดราม่า และความรู้ด้าน Digital Reputation | UNLINK-TH",
  description:
    "รวบรวมบทความวิเคราะห์เจาะลึกด้านการจัดการชื่อเสียงออนไลน์ วิธีจัดการข่าวเสีย และเทคนิคการรักษาความเป็นส่วนตัวในยุคดิจิทัล",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
  ];

  return (
    <div className="pb-24">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <header className="bg-muted/10 border-border/50 border-b py-24">
        <div className="container">
          <div className="max-w-4xl space-y-6">
            <div className="bg-primary/5 border-primary/20 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[10px] tracking-[0.3em] uppercase">
              <BookOpen className="h-4 w-4" />
              <span>Reputation Intelligence Insights</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tighter md:text-7xl">
              Knowledge <br />
              <span className="text-primary font-light italic">
                & Authority
              </span>
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed font-light md:text-2xl">
              ทำความเข้าใจกลไกของโลกดิจิทัล
              เพื่อป้องกันและแก้ไขปัญหาชื่อเสียงอย่างยั่งยืน
            </p>
          </div>
        </div>
      </header>

      <section className="container py-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="lab-card group border-border/40 bg-muted/5 flex flex-col overflow-hidden transition-all"
            >
              <div className="bg-muted/20 relative aspect-video overflow-hidden">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                  />
                )}
                <div className="bg-primary/10 absolute inset-0 flex items-center justify-center font-mono text-[10px] tracking-widest uppercase opacity-20 transition-opacity group-hover:opacity-0">
                  Data Stream Active
                </div>
              </div>
              <div className="flex flex-1 flex-col space-y-4 p-8">
                <div className="flex items-center gap-4 font-mono text-[10px] tracking-widest uppercase">
                  <span className="text-primary">{post.category}</span>
                  <span className="text-muted-foreground/40 flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" /> {post.date}
                  </span>
                </div>
                <h3 className="group-hover:text-primary text-xl leading-tight font-bold transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed font-light">
                  {post.description}
                </p>
                <div className="border-border/5 mt-auto border-t pt-4">
                  <span className="text-primary/60 flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase">
                    Read Intelligence Report{" "}
                    <ChevronRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
