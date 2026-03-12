/** @format */

"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mainNav, navigationConfig } from "@/constants/navigation";
import Image from "next/image";
import { siteConfig } from "@/constants/site-config";

/**
 * UNLINK-GLOBAL | Desktop & Mobile Navigation Intelligence
 * Optimized for React 19 & Next.js 16
 */
export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  // ปิดเมนูเมื่อตรวจพบการเปลี่ยนหน้า (Safe Update Pattern)
  React.useEffect(() => {
    setIsOpen((prev) => (prev ? false : prev));
  }, [pathname]);

  const toggleMenu = React.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header className="bg-background/60 sticky top-0 z-50 w-full border-b border-white/5 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        {/* --- Brand Identity Protocol --- */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
          onClick={closeMenu}
        >
          <div className="relative h-9 w-9">
            <Image
              src="/branding/logo.svg"
              alt="Unlink-Global Logo"
              fill
              className="glow-gold transition-transform group-hover:scale-110"
              priority
            />
          </div>
          <span className="font-mono text-xl font-bold tracking-tighter uppercase">
            {siteConfig.name.split("-")[0]}
            <span className="text-primary align-top text-sm">
              {siteConfig.name.split("-")[1]
                ? `-${siteConfig.name.split("-")[1]}`
                : ""}
            </span>
          </span>
        </Link>

        {/* --- Desktop Navigation Interface --- */}
        <nav className="hidden items-center gap-1 md:flex">
          {mainNav.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "hover:text-primary relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground",
                )}
              >
                {link.title}
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="bg-primary/5 border-primary/10 absolute inset-0 -z-10 rounded-full border"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}

          <div className="mx-4 h-4 w-px bg-white/10" />

          <Button
            variant="outline"
            size="sm"
            className="border-primary/20 bg-primary/5 hover:bg-primary/10 group shadow-primary/5 rounded-full px-6 shadow-lg"
            asChild
          >
            <Link href={navigationConfig.header.ctaLink}>
              <Lock className="text-primary mr-2 h-3 w-3" />
              {navigationConfig.header.ctaText}
            </Link>
          </Button>
        </nav>

        {/* --- Mobile Liaison Toggle --- */}
        <button
          className="text-muted-foreground hover:text-primary p-2 transition-colors md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* --- Mobile Liaison Overlay --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="bg-background/80 fixed inset-0 top-16 backdrop-blur-sm md:hidden"
            />

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="bg-background absolute top-16 left-0 w-full border-b border-white/5 p-8 shadow-2xl md:hidden"
            >
              <div className="flex flex-col gap-6">
                {mainNav.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      "group flex items-center justify-between text-2xl font-bold tracking-tight transition-colors",
                      pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground",
                    )}
                  >
                    {link.title}
                    <ArrowRight className="h-5 w-5 -translate-x-4 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                ))}

                <hr className="border-white/5" />

                <Button
                  className="h-14 w-full rounded-2xl text-lg font-bold"
                  asChild
                  onClick={closeMenu}
                >
                  <Link href={navigationConfig.header.ctaLink}>
                    {navigationConfig.header.ctaText}
                  </Link>
                </Button>
                <p className="text-muted-foreground/50 text-center font-mono text-[10px] tracking-widest uppercase">
                  {navigationConfig.securityNote}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
