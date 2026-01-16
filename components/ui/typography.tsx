import { cn } from "@/lib/utils"
import React from "react"

// 1. แยก Individual Components เพื่อใช้ภายในหรือ MDX
export function H1({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h1
      className={cn(
        "font-heading text-primary scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  )
}

export function H2({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={cn(
        "font-heading text-primary scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  )
}

export function H3({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h3
      className={cn(
        "font-heading text-primary scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  )
}

export function P({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        "font-body text-primary/90 leading-7 [&:not(:first-child)]:mt-6",
        className
      )}
    >
      {children}
    </p>
  )
}

export function Lead({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={cn("text-muted-foreground font-body text-xl", className)}>
      {children}
    </p>
  )
}

export function Muted({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span className={cn("text-muted-foreground font-body text-sm", className)}>
      {children}
    </span>
  )
}

export function Large({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "text-primary font-heading text-lg font-semibold",
        className
      )}
    >
      {children}
    </div>
  )
}

// 2. สร้าง Wrapper "Typography" (เพื่อแก้ปัญหา Error: got undefined)
interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "p" | "lead" | "muted" | "large"
  children: React.ReactNode
  className?: string
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
    default:
      return <P className={className}>{children}</P>
  }
}
