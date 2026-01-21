"use client";

import Link from "next/link";
import { siteConfig } from "@/constants/site-config";
import { footerNav } from "@/constants/navigation";
import { ShieldCheck, Lock, MessageCircle, Fingerprint, Activity } from "lucide-react";

/**
 * 
 * Footer Component: The Final Validation Point
 * ยุทธศาสตร์: สร้างความเชื่อมั่นขั้นสุดท้าย (Final Trust Building) และรองรับการทำ Internal Linking สำหรับ SEO
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // ใช้ lineUrl โดยตรงจาก siteConfig เพื่อความเสถียรสูงสุด
  const lineLink = siteConfig.contact.lineUrl;

  return (
    <footer className="relative border-t border-border/40 bg-background pb-12 pt-20">
      {/* 01: Structural Background Pattern - Tactical Grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.02]"
        aria-hidden="true"
      >
        <div className="h-full w-full bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          
          {/* 02: Brand & Integrity Segment (Identity Hub) */}
          <div className="lg:col-span-5">
            <Link href="/" className="group mb-6 flex items-center gap-2">
              <span className="text-2xl font-black italic tracking-tighter text-foreground transition-colors group-hover:text-primary uppercase">
                {siteConfig.name}
              </span>
              <Activity className="h-3 w-3 animate-pulse text-primary opacity-40" />
            </Link>
            <p className="mb-8 max-w-sm text-sm font-medium leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>

            {/* Trust Badges - Operational Standards */}
            <div className="flex flex-col gap-4">
              <div className="group flex items-center gap-3 text-muted-foreground/80">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Lock className="h-4 w-4 text-primary" />
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                  Encrypted Communication
                </span>
              </div>
              <div className="group flex items-center gap-3 text-muted-foreground/80">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                  Identity Protected
                </span>
              </div>
            </div>
          </div>

          {/* 03: Navigation Matrix (Resource Logs) */}
          <div className="grid grid-cols-2 gap-10 lg:col-span-7 lg:grid-cols-3">
            
            {/* Services Protocol */}
            <div>
              <h4 className="mb-6 font-mono text-[10px] font-black tracking-[0.3em] opacity-40 uppercase text-foreground">
                Protocols
              </h4>
              <ul className="space-y-4">
                {footerNav.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs font-bold tracking-wider text-muted-foreground transition-colors hover:text-primary uppercase"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Legal Resources */}
            <div>
              <h4 className="mb-6 font-mono text-[10px] font-black tracking-[0.3em] opacity-40 uppercase text-foreground">
                Resources
              </h4>
              <ul className="space-y-4">
                {footerNav.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs font-bold tracking-wider text-muted-foreground transition-colors hover:text-primary uppercase"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strategic Connect - Liaison Office */}
            <div>
              <h4 className="mb-6 font-mono text-[10px] font-black tracking-[0.3em] opacity-40 uppercase text-foreground">
                Liaison Office
              </h4>
              <div className="flex flex-col gap-5">
                <Link
                  href={lineLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#00B900] px-6 text-[10px] font-black tracking-widest text-white transition-all hover:scale-[1.05] active:scale-95 uppercase shadow-lg shadow-green-500/20"
                >
                  <MessageCircle className="h-4 w-4 fill-current" />
                  LINE Official
                </Link>
                <div className="flex items-center gap-2 px-1 opacity-40">
                  <Fingerprint className="h-3.5 w-3.5 text-primary" />
                  <span className="font-mono text-[8px] font-bold tracking-tighter uppercase">
                    Secure Link Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 04: Bottom Legal Layer - Global Disclaimer */}
        <div className="mt-20 border-t border-border/40 pt-10">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="order-2 md:order-1">
              <p className="font-mono text-[9px] font-bold tracking-[0.2em] text-muted-foreground/40 uppercase">
                © {currentYear} {siteConfig.name}. Operational Integrity Center.
              </p>
            </div>

            <div className="order-1 flex items-center gap-6 md:order-2">
              <p className="max-w-xl text-center text-[10px] font-medium leading-relaxed italic text-muted-foreground/40 md:text-right">
                {siteConfig.footer.disclaimer}
              </p>
            </div>
          </div>
          
          {/* Operational Trust Note */}
          <div className="mt-8 text-center">
             <p className="font-mono text-[8px] font-bold tracking-[0.4em] text-muted-foreground/20 uppercase">
                {siteConfig.footer.trustNote}
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
