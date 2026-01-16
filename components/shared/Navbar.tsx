"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/constants/site-config"
import { navigationLinks } from "@/constants/navigation"
import { Button } from "@/components/ui/button"
// ✅ แก้ไข: ลบไอคอน X ที่ไม่ได้ใช้งานออก
import { MessageCircle, Menu, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md transition-all">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center space-x-2 transition-opacity hover:opacity-90"
        >
          <ShieldCheck className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-extrabold tracking-tighter text-slate-900">
            UNLINK<span className="text-blue-600">-TH</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-blue-600",
                  isActive ? "text-blue-600" : "text-slate-600"
                )}
              >
                {link.title}
              </Link>
            )
          })}

          <Button
            size="sm"
            className="bg-blue-600 font-bold shadow-md shadow-blue-100 hover:bg-blue-700"
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
        </nav>

        {/* Mobile Navigation Trigger (ใช้ Sheet จาก shadcn/ui) */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-600">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="border-b pb-4 text-left">
                <SheetTitle className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-blue-600" />
                  <span className="font-bold tracking-tight text-slate-900">
                    เมนูหลัก
                  </span>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-6">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-bold transition-colors hover:text-blue-600",
                      pathname === link.href
                        ? "text-blue-600"
                        : "text-slate-900"
                    )}
                  >
                    {link.title}
                  </Link>
                ))}

                <div className="flex flex-col gap-4 border-t border-slate-100 pt-4">
                  <p className="text-sm font-medium text-slate-500">
                    ช่องทางการติดต่อ
                  </p>
                  <Button className="h-12 w-full bg-blue-600 font-bold" asChild>
                    <a
                      href={siteConfig.contact.lineUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5 fill-current" />
                      แอดไลน์ @204uuzew
                    </a>
                  </Button>
                  <p className="text-center text-xs text-slate-400 italic">
                    * ปรึกษาเบื้องต้นฟรี ตลอด 24 ชั่วโมง
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
