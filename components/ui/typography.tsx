import { cn } from "@/lib/utils"
import React from "react"

/**
 * Typography Components System
 * ออกแบบมาให้รองรับทั้งการใช้งานทั่วไปใน UI และการ Render ผ่าน MDX
 */

interface TypographyBaseProps {
  children: React.ReactNode
  className?: string
}

export function H1({ children, className }: TypographyBaseProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-black tracking-tight text-slate-900 lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  )
}

export function H2({ children, className }: TypographyBaseProps) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b border-slate-200 pb-2 text-3xl font-extrabold tracking-tight text-slate-900 first:mt-0 lg:text-4xl",
        className
      )}
    >
      {children}
    </h2>
  )
}

export function H3({ children, className }: TypographyBaseProps) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-bold tracking-tight text-slate-900 lg:text-3xl",
        className
      )}
    >
      {children}
    </h3>
  )
}

export function P({ children, className }: TypographyBaseProps) {
  return (
    <p
      className={cn(
        "leading-7 text-slate-600 [&:not(:first-child)]:mt-6",
        className
      )}
    >
      {children}
    </p>
  )
}

export function Lead({ children, className }: TypographyBaseProps) {
  return (
    <p
      className={cn(
        "text-xl leading-relaxed font-medium text-slate-500",
        className
      )}
    >
      {children}
    </p>
  )
}

export function Muted({ children, className }: TypographyBaseProps) {
  return (
    <span className={cn("text-sm font-medium text-slate-400", className)}>
      {children}
    </span>
  )
}

export function Large({ children, className }: TypographyBaseProps) {
  return (
    <div className={cn("text-lg font-bold text-slate-900", className)}>
      {children}
    </div>
  )
}

export function InlineCode({ children, className }: TypographyBaseProps) {
  return (
    <code
      className={cn(
        "relative rounded bg-slate-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-slate-900",
        className
      )}
    >
      {children}
    </code>
  )
}

/**
 * Typography Wrapper:
 * ใช้สำหรับกรณีต้องการความยืดหยุ่นในการสลับ Tag ผ่าน prop 'variant'
 */
interface TypographyProps extends TypographyBaseProps {
  variant?: "h1" | "h2" | "h3" | "p" | "lead" | "muted" | "large" | "inlineCode"
}

export function Typography({
  variant = "p",
  children,
  className,
}: TypographyProps) {
  switch (variant) {
    case "h1":
      return <H1 className={className}>{children}</H1>
    case "h2":
      return <H2 className={className}>{children}</H2>
    case "h3":
      return <H3 className={className}>{children}</H3>
    case "lead":
      return <Lead className={className}>{children}</Lead>
    case "muted":
      return <Muted className={className}>{children}</Muted>
    case "large":
      return <Large className={className}>{children}</Large>
    case "inlineCode":
      return <InlineCode className={className}>{children}</InlineCode>
    default:
      return <P className={className}>{children}</P>
  }
}
