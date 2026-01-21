"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/constants/site-config"
import { mainNav } from "@/constants/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle, ShieldCheck, Fingerprint } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 *
 * Header Component: The Operational Control Center
 * จัดการการนำทางและสถานะการแสดงผล (Scroll State) อย่างแม่นยำ
 */
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // ตรวจสอบการ Scroll เพื่อปรับเปลี่ยนสไตล์ Header (Glassmorphism Effect)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ปิด Mobile Menu อัตโนมัติเมื่อมีการเปลี่ยนหน้า
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const lineLink = `https://line.me/ti/p/${siteConfig.contact.lineId.replace(
    "@",
    ""
  )}`

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 ease-in-out",
        isScrolled
          ? "border-border/40 bg-background/60 border-b py-3 backdrop-blur-xl"
          : "border-transparent bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* 01: Brand Segment - Identity Verified */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="border-primary/20 bg-primary/5 group-hover:border-primary/50 group-hover:bg-primary/10 relative flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-500 group-hover:rotate-[10deg]">
            <ShieldCheck className="text-primary h-5 w-5" />
            <Fingerprint className="text-primary absolute -top-1 -right-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="group-hover:text-primary text-xl font-black tracking-tighter uppercase italic transition-colors">
              {siteConfig.name}
            </span>
            <span className="text-primary/50 font-mono text-[8px] font-bold tracking-[0.3em] uppercase">
              Digital Fixer
            </span>
          </div>
        </Link>

        {/* 02: Tactical Navigation - Desktop Hub */}
        <nav className="border-border/40 bg-muted/5 hidden items-center gap-1 rounded-full border p-1 backdrop-blur-sm md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-5 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300",
                pathname === item.href
                  ? "bg-primary/10 text-primary shadow-[0_0_15px_rgba(var(--color-primary),0.1)]"
                  : "text-muted-foreground hover:bg-muted/10 hover:text-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* 03: Global Action Segment */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/faq"
            className="text-muted-foreground hover:text-primary font-mono text-[10px] font-bold tracking-widest transition-colors"
          >
            [ LOGS:FAQ ]
          </Link>

          <Button
            size="sm"
            className="bg-primary text-primary-foreground shadow-primary/20 h-10 rounded-full px-6 font-black tracking-tight shadow-lg transition-all hover:scale-[1.05] active:scale-[0.98]"
            asChild
          >
            <Link href={lineLink} target="_blank">
              <MessageCircle className="mr-2 h-4 w-4 fill-current" />
              ประเมินเคสฟรี
            </Link>
          </Button>
        </div>

        {/* 04: Mobile Menu Controller */}
        <button
          className="bg-muted/10 text-muted-foreground hover:text-primary flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* 05: Strategic Mobile Overlay */}
      <div
        className={cn(
          "border-border/40 bg-background/95 absolute top-full left-0 w-full overflow-hidden border-b backdrop-blur-2xl transition-all duration-500 ease-in-out md:hidden",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto flex flex-col gap-4 px-8 py-12">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center justify-between py-3 text-2xl font-black tracking-tighter uppercase transition-all",
                pathname === item.href
                  ? "text-primary translate-x-2"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.title}
              <ShieldCheck
                className={cn(
                  "h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100",
                  pathname === item.href && "opacity-100"
                )}
              />
            </Link>
          ))}
          <div className="border-border/40 mt-8 border-t pt-8">
            <Button
              size="lg"
              className="h-16 w-full rounded-2xl bg-[#00B900] text-lg font-black text-white shadow-xl shadow-green-500/20 transition-transform active:scale-95"
              asChild
            >
              <Link href={lineLink} target="_blank">
                <MessageCircle className="mr-3 h-6 w-6 fill-current" />
                เริ่มปรึกษาเจ้าหน้าที่
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
