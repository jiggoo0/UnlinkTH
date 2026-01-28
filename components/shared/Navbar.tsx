/** @format */

"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Shield, Menu, X, Lock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/constants/site-config"

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "FAQ", href: "/faq" },
  { name: "About", href: "/about" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  // ปิดเมนูเมื่อมีการเปลี่ยนหน้า
  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="bg-background/60 sticky top-0 z-50 w-full border-b border-white/5 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        {/* --- Brand Identity --- */}
        <Link
          href="/"
          className="group flex items-center gap-2 transition-opacity hover:opacity-90"
        >
          <div className="relative">
            <Shield className="text-primary glow-emerald h-7 w-7 transition-transform group-hover:scale-110" />
            <div className="bg-primary/20 absolute inset-0 rounded-full opacity-0 blur-lg transition-opacity group-hover:opacity-100" />
          </div>
          <span className="font-mono text-xl font-bold tracking-tighter uppercase">
            Unlink<span className="text-primary align-top text-sm">TH</span>
          </span>
        </Link>

        {/* --- Desktop Intelligence Navigation --- */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "hover:text-primary relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="bg-primary/5 border-primary/10 absolute inset-0 -z-10 rounded-full border"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  />
                )}
              </Link>
            )
          })}

          <div className="mx-4 h-4 w-px bg-white/10" />

          <Button
            variant="outline"
            size="sm"
            className="border-primary/20 bg-primary/5 hover:bg-primary/10 group shadow-primary/5 rounded-full px-6 shadow-lg"
            asChild
          >
            <Link href={siteConfig.contact.lineUrl}>
              <Lock className="text-primary mr-2 h-3 w-3" />
              Contact VIP
            </Link>
          </Button>
        </nav>

        {/* --- Mobile Interaction Toggle --- */}
        <button
          className="text-muted-foreground hover:text-primary p-2 transition-colors md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* --- Mobile Liaison Overlay --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="bg-background/80 fixed inset-0 top-16 backdrop-blur-sm md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="bg-background absolute top-16 left-0 w-full border-b border-white/5 p-8 shadow-2xl md:hidden"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "group flex items-center justify-between text-2xl font-bold tracking-tight transition-colors",
                      pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.name}
                    <ArrowRight className="h-5 w-5 -translate-x-4 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                ))}

                <hr className="border-white/5" />

                <Button
                  className="h-14 w-full rounded-2xl text-lg font-bold"
                  asChild
                >
                  <Link href={siteConfig.contact.lineUrl}>
                    Initiate Secure Connection
                  </Link>
                </Button>
                <p className="text-muted-foreground/50 text-center font-mono text-[10px] tracking-widest uppercase">
                  Encryption Mode Enabled
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
