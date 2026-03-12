/** @format */

import { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/mdx";
import { BookOpen } from "lucide-react";
import JsonLd from "@/components/shared/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo-schemas";
import SectionHeader from "@/components/shared/SectionHeader";
import BlogCard from "@/components/shared/BlogCard";
import { AnimatedSection } from "@/components/animated-section";

// Static Site Generation (SSG) Protocol
export const metadata: Metadata = {
  title: "คู่มือรับมือดราม่า และความรู้ด้าน Digital Reputation | UNLINK-TH",
  description:
    "รวบรวมบทความวิเคราะห์เจาะลึกโดย นาย อลงกรณ์ ยมเกิด ด้านการจัดการชื่อเสียงออนไลน์ วิธีจัดการข่าวเสีย และเทคนิคการรักษาความเป็นส่วนตัวในยุคดิจิทัล",
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
          <SectionHeader
            badge={
              <>
                <BookOpen className="h-4 w-4" />
                <span>Reputation Intelligence Insights</span>
              </>
            }
            title="Knowledge"
            titleHighlight="& Authority"
            description="ทำความเข้าใจกลไกของโลกดิจิทัล เพื่อป้องกันและแก้ไขปัญหาชื่อเสียงอย่างยั่งยืน"
            className="mb-0"
          />
        </div>
      </header>

      <section className="container py-24">
        <AnimatedSection>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
