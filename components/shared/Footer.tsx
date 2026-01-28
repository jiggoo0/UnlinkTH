/** @format */

import Link from "next/link"
import { siteConfig } from "@/constants/site-config"
import { footerNav } from "@/constants/navigation"
import { Shield, Mail, MessageCircle, ExternalLink, Lock } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-8">
      <div className="container">
        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* --- Brand Architecture --- */}
          <div className="space-y-8 lg:col-span-2">
            <Link
              href="/"
              className="group flex items-center gap-2 text-2xl font-bold tracking-tighter"
            >
              <Shield className="text-primary glow-emerald h-8 w-8 transition-transform group-hover:scale-110" />
              <span className="font-mono">
                UNLINK<span className="text-primary">-TH</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              สถาปนิกผู้ดูแลภาพลักษณ์ดิจิทัล (Reputation Architect)
              เราผสมผสานวิศวกรรมข้อมูลและการสื่อสารเชิงยุทธศาสตร์
              เพื่อปกป้องและสร้างสรรค์ตัวตนออนไลน์ที่ทรงพลังที่สุด
            </p>
            <div className="text-primary/60 flex items-center gap-4 font-mono text-xs">
              <div className="flex items-center gap-1.5">
                <Lock className="h-3 w-3" />
                SECURE DATA HANDLING
              </div>
              <span className="opacity-20">|</span>
              <div className="flex items-center gap-1.5">
                <Shield className="h-3 w-3" />
                PDPA COMPLIANT
              </div>
            </div>
          </div>

          {/* --- Protocols Navigation (SEO Optimized) --- */}
          <div className="space-y-6">
            <h4 className="text-primary/80 font-mono text-[10px] tracking-[0.2em] uppercase">
              Active Protocols
            </h4>
            <ul className="space-y-3">
              {footerNav.protocols.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary group flex items-center text-sm transition-colors duration-300"
                  >
                    <span className="bg-primary mr-0 h-px w-0 transition-all group-hover:mr-2 group-hover:w-2" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Liaison & Security --- */}
          <div className="space-y-6">
            <h4 className="text-primary/80 font-mono text-[10px] tracking-[0.2em] uppercase">
              Secure Liaison
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href={siteConfig.contact.lineUrl}
                className="lab-card hover:border-primary/40 flex items-center gap-3 p-4 transition-all"
              >
                <MessageCircle className="text-primary h-5 w-5" />
                <div className="flex flex-col">
                  <span className="text-muted-foreground font-mono text-[10px] uppercase">
                    Line Official
                  </span>
                  <span className="text-sm font-bold">
                    {siteConfig.contact.lineId}
                  </span>
                </div>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-muted-foreground hover:text-primary flex items-center gap-3 pl-4 text-sm transition-colors"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* --- Root Attribution & SEO Entity Linkage --- */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-8 lg:flex-row">
          <div className="text-muted-foreground/40 text-center font-mono text-[10px] tracking-[0.15em] uppercase lg:text-left">
            © {currentYear} UNLINK-TH REPUTATION ARCHITECT.{" "}
            <br className="md:hidden" />
            OPERATED UNDER THE AEMDEVWEB SECURITY FRAMEWORK.
          </div>

          <div className="text-muted-foreground/60 flex items-center gap-6 font-mono text-[10px] tracking-widest uppercase">
            <Link
              href="https://www.aemdevweb.com"
              target="_blank"
              className="hover:text-primary group flex items-center gap-1.5 transition-colors"
            >
              Built by AEMDEVWEB
              <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <span className="h-3 w-px bg-white/10" />
            <Link href="/privacy" className="hover:text-primary">
              Privacy
            </Link>
            <Link href="/editorial-policy" className="hover:text-primary">
              Ethics
            </Link>
          </div>
        </div>

        {/* --- Final Disclaimer (The Small Print) --- */}
        <div className="mx-auto mt-12 max-w-4xl">
          <p className="text-muted-foreground/20 text-center text-[9px] leading-relaxed tracking-tighter uppercase">
            {siteConfig.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  )
}
