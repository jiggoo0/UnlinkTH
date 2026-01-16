"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/constants/site-config"
import { navigationLinks } from "@/constants/navigation"
import { Button } from "@/components/ui/button"
import { MessageCircle, Menu, ShieldCheck, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

/**
 * Navbar Component: ส่วนนำทางหลักของเว็บไซต์
 * ✅ Sticky Header พร้อม Backdrop Blur (Glassmorphism)
 * ✅ ระบบ Active Link ตาม Path ปัจจุบัน
 * ✅ Mobile Menu ผ่าน Sheet Component (Shadcn/UI)
 */
export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  // ฟังก์ชันช่วยเช็กสถานะ Active เพื่อความแม่นยำ
  const isLinkActive = (href: string) => pathname === href

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/90 backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* --- Logo Section --- */}
        <Link
          href="/"
          className="group flex items-center space-x-2 transition-opacity"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white transition-transform group-hover:rotate-[10deg]">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <span className="text-xl font-black tracking-tighter text-slate-900">
            UNLINK<span className="text-blue-600">-TH</span>
          </span>
        </Link>

        {/* --- Desktop Navigation --- */}
        <nav className="hidden items-center gap-1 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm font-bold transition-all hover:text-blue-600",
                isLinkActive(link.href) ? "text-blue-600" : "text-slate-600"
              )}
            >
              {link.title}
              {/* Active Indicator Line */}
              {isLinkActive(link.href) && (
                <span className="absolute inset-x-4 -bottom-[21px] h-0.5 bg-blue-600" />
              )}
            </Link>
          ))}

          <div className="ml-4 border-l border-slate-200 pl-4">
            <Button
              size="sm"
              className="h-10 bg-blue-600 px-5 font-black shadow-lg shadow-blue-500/20 hover:bg-blue-700 active:scale-95"
              asChild
            >
              <a
                href={siteConfig.contact.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4 fill-current" />
                ปรึกษาเคสฟรี
              </a>
            </Button>
          </div>
        </nav>

        {/* --- Mobile Navigation Trigger --- */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-700 hover:bg-slate-100"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">เปิดเมนู</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-[300px] flex-col border-l-0 bg-white p-0 sm:w-[350px]"
            >
              <SheetHeader className="border-b p-6 text-left">
                <SheetTitle className="flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-blue-600" />
                  <span className="font-black tracking-tight text-slate-900">
                    เมนูหลัก
                  </span>
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Links List */}
              <div className="flex flex-1 flex-col gap-1 p-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-4 text-lg font-bold transition-colors",
                      isLinkActive(link.href)
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-900 hover:bg-slate-50"
                    )}
                  >
                    {link.title}
                    <ArrowRight
                      className={cn(
                        "h-4 w-4 transition-transform",
                        isLinkActive(link.href)
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-2 opacity-0"
                      )}
                    />
                  </Link>
                ))}
              </div>

              {/* Mobile CTA Footer */}
              <div className="mt-auto border-t border-slate-100 bg-slate-50/50 p-6">
                <p className="mb-4 text-xs font-bold tracking-widest text-slate-400 uppercase">
                  ช่องทางการติดต่อด่วน
                </p>
                <Button
                  className="h-14 w-full rounded-xl bg-blue-600 text-base font-black shadow-xl shadow-blue-500/20"
                  asChild
                >
                  <a
                    href={siteConfig.contact.lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5 fill-current" />
                    แอดไลน์ {siteConfig.contact.lineId}
                  </a>
                </Button>
                <p className="mt-4 text-center text-[10px] font-medium text-slate-400 italic">
                  * ทีมงานผู้เชี่ยวชาญพร้อมประเมินเคสเบื้องต้นฟรี
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
