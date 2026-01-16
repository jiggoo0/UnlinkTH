import Link from "next/link"
import { siteConfig } from "@/constants/site-config"
import { Typography } from "@/components/ui/typography"
import { MessageCircle, Mail, Phone, ShieldCheck } from "lucide-react"

/**
 * Footer Component: ส่วนท้ายของเว็บไซต์
 * จัดระเบียบข้อมูลบริษัท ลิงก์สำคัญ และการติดต่อให้สแกนอ่านง่าย
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-slate-50/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-slate-900"
            >
              <ShieldCheck className="h-6 w-6 text-blue-600" />
              UNLINK<span className="text-blue-600">-TH</span>
            </Link>
            <Typography
              variant="p"
              className="mt-6 max-w-sm leading-relaxed text-slate-600"
            >
              ทีมงานผู้เชี่ยวชาญด้านการจัดการชื่อเสียงออนไลน์ (Online Reputation
              Management) เราช่วยดูแลและปกป้องข้อมูลส่วนบุคคลของคุณบนโลกดิจิทัล
              ด้วยวิธีการที่ถูกต้องตามกฎหมายและรักษาความลับขั้นสูงสุด
            </Typography>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3">
            <Typography
              variant="h3"
              className="mb-6 border-none pb-0 text-lg font-bold text-slate-900"
            >
              การติดต่อ
            </Typography>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-600">
                <MessageCircle className="h-4 w-4 text-blue-600" />
                <a
                  href={siteConfig.contact.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-blue-600"
                >
                  Line: {siteConfig.contact.lineId}
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <Phone className="h-4 w-4 text-blue-600" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-blue-600"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <Mail className="h-4 w-4 text-blue-600" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-blue-600"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links Column */}
          <div className="md:col-span-4">
            <Typography
              variant="h3"
              className="mb-6 border-none pb-0 text-lg font-bold text-slate-900"
            >
              กฎหมายและนโยบาย
            </Typography>
            <nav className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Link
                href="/privacy"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
              >
                นโยบายความเป็นส่วนตัว
              </Link>
              <Link
                href="/faq"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
              >
                คำถามที่พบบ่อย
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
              >
                เกี่ยวกับเรา
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
              >
                ติดต่อเรา
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">
          <Typography variant="muted" className="text-slate-500">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </Typography>
          <div className="flex gap-6 text-xs font-semibold tracking-widest text-slate-400 uppercase">
            <span>Secure</span>
            <span>Confidential</span>
            <span>Certified</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
