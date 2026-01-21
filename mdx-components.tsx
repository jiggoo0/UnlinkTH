import type { MDXComponents } from "mdx/types"
import { Badge } from "@/components/ui/badge"
import { Typography } from "@/components/ui/typography"
import { cn } from "@/lib/utils"
import React from "react"

/**
 * Custom MDX Components for UNLINK-TH
 * -------------------------------------------------------------------------
 * กำหนดสไตล์มาตรฐานให้กับ Markdown Elements เพื่อความน่าเชื่อถือระดับผู้เชี่ยวชาญ
 * ยุทธศาสตร์: High Contrast -> Clinical Readability -> Professional Branding
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // หัวข้อหลัก: สำหรับ Title หรือบทนำสำคัญ
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1
        className={cn(
          "text-foreground mt-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
          className
        )}
        {...props}
      />
    ),

    // หัวข้อรอง: ใช้แบ่ง Protocol หรือขั้นตอนการทำงานหลัก
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2
        className={cn(
          "text-foreground border-border mt-12 scroll-m-20 border-b pb-3 text-3xl font-bold tracking-tight first:mt-0",
          className
        )}
        {...props}
      />
    ),

    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3
        className={cn(
          "text-foreground mt-10 scroll-m-20 text-2xl font-bold tracking-tight",
          className
        )}
        {...props}
      />
    ),

    // เนื้อหา Paragraph: เน้นความสูงบรรทัด (Leading) เพื่อให้อ่านภาษาไทยได้สบายตา
    p: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p
        className={cn(
          "text-muted-foreground leading-relaxed [&:not(:first-child)]:mt-6",
          className
        )}
        {...props}
      />
    ),

    // รายการแบบ Bullet Points: สำหรับรายการฟีเจอร์หรือเช็คลิสต์ทางเทคนิค
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
      <ul
        className={cn(
          "text-muted-foreground my-6 ml-6 list-disc space-y-2",
          className
        )}
        {...props}
      />
    ),

    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
      <ol
        className={cn(
          "text-muted-foreground my-6 ml-6 list-decimal space-y-3",
          className
        )}
        {...props}
      />
    ),

    li: ({ className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
      <li className={cn("leading-7", className)} {...props} />
    ),

    // Blockquote: ออกแบบสไตล์ "Tactical Note" เพื่อเน้นย้ำจุดสำคัญหรือคำโปรย
    blockquote: ({
      className,
      ...props
    }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
      <blockquote
        className={cn(
          "border-primary bg-primary/5 text-foreground mt-8 rounded-r-lg border-l-4 py-6 pr-4 pl-6 italic shadow-sm",
          className
        )}
        {...props}
      />
    ),

    // ส่วนเน้นข้อความ
    strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
      <strong
        className={cn("text-foreground font-bold italic", className)}
        {...props}
      />
    ),

    // ลิงก์ภายในบทความ
    a: ({
      className,
      ...props
    }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a
        className={cn(
          "text-primary decoration-primary/30 hover:decoration-primary underline underline-offset-4 transition-colors",
          className
        )}
        {...props}
      />
    ),

    // Custom Components
    Badge: ({ className, ...props }: React.ComponentProps<typeof Badge>) => (
      <Badge
        variant="outline"
        className={cn(
          "bg-primary/5 px-2 py-0.5 font-mono text-[10px] tracking-wider uppercase",
          className
        )}
        {...props}
      />
    ),

    Typography,

    ...components,
  }
}
