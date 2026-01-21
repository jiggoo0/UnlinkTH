"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/constants/site-config";
import { mainNav } from "@/constants/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, ShieldCheck, Fingerprint } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * 
 * Header Component: The Operational Control Center
 * จัดการการนำทางและสถานะการแสดงผล (Scroll State) อย่างแม่นยำ
 */
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // ตรวจสอบการ Scroll เพื่อปรับเปลี่ยนสไตล์ Header (Glassmorphism Effect)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ปิด Mobile Menu อัตโนมัติเมื่อมีการเปลี่ยนหน้า
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const lineLink = `https://line.me/ti/p/${siteConfig.contact.lineId.replace(
    "@",
    ""
  )}`;

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 ease-in-out",
        isScrolled
          ? "border-b border-border/40 bg-background/60 py-3 backdrop-blur-xl"
          : "border-transparent bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between mx-auto px-6">
        {/* 01: Brand Segment - Identity Verified */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 transition-all duration-500 group-hover:rotate-[10deg] group-hover:border-primary/50 group-hover:bg-primary/10">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <Fingerprint className="absolute -right-1 -top-1 h-3 w-3 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black italic uppercase tracking-tighter transition-colors group-hover:text-primary">
              {siteConfig.name}
            </span>
            <span className="font-mono text-[8px] font-bold uppercase tracking-[0.3em] text-primary/50">
              Digital Fixer
            </span>
          </div>
        </Link>

        {/* 02: Tactical Navigation - Desktop Hub */}
        <nav className="hidden items-center gap-1 rounded-full border border-border/40 bg-muted/5 p-1 backdrop-blur-sm md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300",
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
            className="font-mono text-[10px] font-bold tracking-widest text-muted-foreground transition-colors hover:text-primary"
          >
            [ LOGS:FAQ ]
          </Link>

          <Button
            size="sm"
            className="h-10 rounded-full bg-primary px-6 font-black tracking-tight text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.05] active:scale-[0.98]"
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
          className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/10 text-muted-foreground transition-colors hover:text-primary md:hidden"
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
          "absolute left-0 top-full w-full overflow-hidden border-b border-border/40 bg-background/95 backdrop-blur-2xl transition-all duration-500 ease-in-out md:hidden",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto flex flex-col gap-4 px-8 py-12">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center justify-between py-3 text-2xl font-black uppercase tracking-tighter transition-all",
                pathname === item.href
                  ? "translate-x-2 text-primary"
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
          <div className="mt-8 border-t border-border/40 pt-8">
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
  );
};
