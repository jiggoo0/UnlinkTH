import Link from "next/link"
import { siteConfig } from "@/constants/site-config"
import { Typography } from "@/components/ui/typography"
import {
  MessageCircle,
  Mail,
  Phone,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react"

/**
 * Footer Component: ส่วนท้ายของเว็บไซต์
 * ✅ จัดกลุ่มลิงก์สำคัญและข้อมูลการติดต่อให้ชัดเจน
 * ✅ ออกแบบให้รองรับ SEO และความน่าเชื่อถือ (Trust Signals)
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-slate-50/80">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* 🏢 Brand Column - เน้นตัวตนของ Unlink-TH */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-black tracking-tighter text-slate-900"
            >
              <ShieldCheck className="h-8 w-8 text-blue-600" />
              UNLINK<span className="text-blue-600">-TH</span>
            </Link>
            <Typography
              variant="p"
              className="mt-6 max-w-sm text-base leading-relaxed text-slate-600"
            >
              ผู้เชี่ยวชาญด้านการจัดการชื่อเสียงออนไลน์ (Online Reputation
              Management)
              เรามุ่งมั่นปกป้องข้อมูลส่วนบุคคลและกู้คืนพื้นที่ดิจิทัลของคุณ
              ด้วยวิธีการที่โปร่งใส ถูกต้องตามกฎหมาย และรักษาความลับสูงสุด
            </Typography>
            {/* Trust Badges */}
            <div className="mt-8 flex items-center gap-4 opacity-60 grayscale">
              <div className="rounded border border-slate-300 px-2 py-1 text-[10px] font-bold tracking-tighter uppercase">
                PDPA Compliant
              </div>
              <div className="rounded border border-slate-300 px-2 py-1 text-[10px] font-bold tracking-tighter uppercase">
                Legal Expert
              </div>
            </div>
          </div>

          {/* 📞 Contact Column - ข้อมูลติดต่อที่คลิกใช้งานได้ทันที */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-sm font-black tracking-widest text-slate-900 uppercase">
              ช่องทางการติดต่อ
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={siteConfig.contact.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-slate-600 transition-colors hover:text-blue-600"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <span className="font-medium">
                    Line: {siteConfig.contact.lineId}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-3 text-slate-600 transition-colors hover:text-blue-600"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="font-medium">
                    {siteConfig.contact.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="group flex items-center gap-3 text-slate-600 transition-colors hover:text-blue-600"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="truncate font-medium">
                    {siteConfig.contact.email}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* 🔗 Quick Links - ลิงก์สำคัญในการเข้าถึงข้อมูล */}
          <div className="lg:col-span-4">
            <h3 className="mb-6 text-sm font-black tracking-widest text-slate-900 uppercase">
              ข้อมูลและนโยบาย
            </h3>
            <nav className="grid grid-cols-1 gap-y-3 sm:grid-cols-2">
              <Link
                href="/privacy"
                className="group inline-flex items-center text-sm font-bold text-slate-600 transition-colors hover:text-blue-600"
              >
                นโยบายความเป็นส่วนตัว{" "}
                <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
              </Link>
              <Link
                href="/faq"
                className="group inline-flex items-center text-sm font-bold text-slate-600 transition-colors hover:text-blue-600"
              >
                คำถามที่พบบ่อย{" "}
                <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center text-sm font-bold text-slate-600 transition-colors hover:text-blue-600"
              >
                เกี่ยวกับเรา{" "}
                <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center text-sm font-bold text-slate-600 transition-colors hover:text-blue-600"
              >
                ติดต่อเรา{" "}
                <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
              </Link>
            </nav>
          </div>
        </div>

        {/* 📜 Bottom Bar - Copyright และการรับประกัน */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-200 pt-8 md:flex-row">
          <Typography
            variant="muted"
            className="text-sm font-medium text-slate-500"
          >
            © {currentYear} {siteConfig.name}. สงวนลิขสิทธิ์ตามกฎหมาย
          </Typography>
          <div className="flex items-center gap-6 text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3 w-3" /> Secure
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3 w-3" /> Confidential
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3 w-3" /> Professional
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
