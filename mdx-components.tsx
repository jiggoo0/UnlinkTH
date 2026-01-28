/** @format */

import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * UNLINK-TH | MDX Style Blueprint (2026)
 * -------------------------------------------------------------------------
 * ปรับแต่ง Tag มาตรฐานของ Markdown ให้เป็นสไตล์วิศวกรรมข้อมูล
 * ดำเนินการลบ Unused Imports เพื่อเพิ่มประสิทธิภาพการ Build
 */

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // --- Headings (สไตล์เรียบหรูและเน้นความอ่านง่าย) ---
    h1: ({ className, ...props }) => (
      <h1
        className={cn(
          "text-foreground mt-2 scroll-m-20 text-4xl font-bold tracking-tight md:text-5xl",
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          "group border-border/10 text-foreground mt-12 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn(
          "text-primary mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
          className
        )}
        {...props}
      />
    ),

    // --- Typography (เน้นความชัดเจนของข้อมูลหลัก) ---
    p: ({ className, ...props }) => (
      <p
        className={cn(
          "text-muted-foreground max-w-none leading-7 [&:not(:first-child)]:mt-6",
          className
        )}
        {...props}
      />
    ),
    a: ({ className, href, ...props }) => {
      const isInternal = href?.startsWith("/");
      const Component = isInternal ? Link : "a";
      return (
        <Component
          href={href as string}
          className={cn(
            "text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors",
            className
          )}
          {...(isInternal
            ? {}
            : { target: "_blank", rel: "noopener noreferrer" })}
          {...props}
        />
      );
    },

    // --- Blocks & Lists (โครงสร้างแบบ Technical Report) ---
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          "border-primary bg-primary/5 text-foreground/90 mt-6 rounded-r-lg border-l-2 px-6 py-4 italic",
          className
        )}
        {...props}
      />
    ),
    ul: ({ className, ...props }) => (
      <ul
        className={cn(
          "text-muted-foreground my-6 ml-6 list-disc [&>li]:mt-2",
          className
        )}
        {...props}
      />
    ),
    ol: ({ className, ...props }) => (
      <ol
        className={cn(
          "text-muted-foreground my-6 ml-6 list-decimal [&>li]:mt-2",
          className
        )}
        {...props}
      />
    ),

    // --- Code & Pre (สำหรับการแสดงผลเชิงเทคนิค) ---
    code: ({ className, ...props }) => (
      <code
        className={cn(
          "bg-muted/50 text-primary relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
          className
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }) => (
      <pre
        className={cn(
          "border-border/50 bg-muted/30 mt-6 mb-4 overflow-x-auto rounded-xl border p-4 font-mono",
          className
        )}
        {...props}
      />
    ),

    // --- Horizontal Rule (ตัวแบ่งส่วนปฏิบัติการ) ---
    hr: ({ ...props }) => <hr className="border-border/10 my-12" {...props} />,

    // รวมคอมโพเนนต์อื่นๆ ที่ส่งผ่านมา
    ...components,
  };
}
