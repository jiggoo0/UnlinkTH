import type { MDXComponents } from "mdx/types"
import { Badge } from "@/components/ui/badge"
import { Typography } from "@/components/ui/typography"
import { cn } from "@/lib/utils"
import React from "react"

/**
 * Custom MDX Components for Unlink-TH
 * กำหนดสไตล์มาตรฐานให้กับ Markdown Elements เพื่อให้เนื้อหาอ่านง่ายและดูเป็นมืออาชีพ
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // หัวข้อหลัก (Title ของบทความมักใช้ h1)
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1
        className={cn(
          "mt-2 scroll-m-20 text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl",
          className
        )}
        {...props}
      />
    ),

    // หัวข้อรอง (เช่น "ปัญหาที่พบ", "วิธีการจัดการ")
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2
        className={cn(
          "mt-12 scroll-m-20 border-b border-slate-100 pb-3 text-3xl font-bold tracking-tight text-slate-800 first:mt-0",
          className
        )}
        {...props}
      />
    ),

    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3
        className={cn(
          "mt-10 scroll-m-20 text-2xl font-bold tracking-tight text-slate-800",
          className
        )}
        {...props}
      />
    ),

    // เนื้อหา Paragraph
    p: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p
        className={cn(
          "leading-relaxed text-slate-600 [&:not(:first-child)]:mt-6",
          className
        )}
        {...props}
      />
    ),

    // รายการแบบ Bullet Points (ใช้บ่อยในขั้นตอนการทำงาน)
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
      <ul
        className={cn(
          "my-6 ml-6 list-disc space-y-2 text-slate-600",
          className
        )}
        {...props}
      />
    ),

    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
      <ol
        className={cn(
          "my-6 ml-6 list-decimal space-y-3 text-slate-600",
          className
        )}
        {...props}
      />
    ),

    li: ({ className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
      <li className={cn("leading-7", className)} {...props} />
    ),

    // Blockquote สำหรับข้อความสรุปหรือคำโปรย
    blockquote: ({
      className,
      ...props
    }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
      <blockquote
        className={cn(
          "mt-8 rounded-r-lg border-l-4 border-blue-600 bg-blue-50/50 py-4 pr-4 pl-6 text-slate-700 italic",
          className
        )}
        {...props}
      />
    ),

    // ส่วนเน้นข้อความ (Bold)
    strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
      <strong
        className={cn("font-bold text-slate-900", className)}
        {...props}
      />
    ),

    // ✅ แก้ไข: ใช้ ComponentProps เพื่อดึง Type ที่ถูกต้องของ Badge แทนการใช้ any
    Badge: ({ className, ...props }: React.ComponentProps<typeof Badge>) => (
      <Badge className={cn("px-2 py-0.5", className)} {...props} />
    ),

    // typography component เสริม
    Typography,

    ...components,
  }
}
