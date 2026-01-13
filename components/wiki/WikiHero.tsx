/** @format */

'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  ChevronRight,
  BookOpen,
  ShieldCheck,
  Scale,
  History,
} from 'lucide-react'
import { WikiService } from '@/lib/wiki'
import { WikiArticle } from '@/data/wiki/articles'
import Link from 'next/link'

/**
 * [STRATEGY: THE CITIZEN HUB v5.1]
 * - แก้ไข TS2322: เพิ่ม Interface รองรับ Props จากหน้า Category
 * - Multi-mode: แสดงช่อง Search เฉพาะเมื่อไม่มีการส่ง title/description เจาะจงเข้ามา
 */

interface WikiHeroProps {
  title?: string
  description?: string
  showSearch?: boolean
}

export function WikiHero({
  title = 'ห้องสมุดความรู้ Unlink Wiki',
  description = 'รวมทุกคำตอบเรื่องสิทธิส่วนบุคคล กฎหมาย PDPA และวิธีการจัดการข้อมูลของคุณบนโลกออนไลน์ให้ถูกต้องตามกฎหมาย',
  showSearch = true,
}: WikiHeroProps) {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [results, setResults] = React.useState<WikiArticle[]>([])

  React.useEffect(() => {
    if (searchQuery.length > 1) {
      const filtered = WikiService.getAllArticles()
        .filter((article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        .slice(0, 5)
      setResults(filtered)
    } else {
      setResults([])
    }
  }, [searchQuery])

  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-white pt-24 pb-20 md:pt-32 md:pb-28">
      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[5%] h-[60%] w-[40%] rounded-full bg-blue-50/50 blur-[100px]" />
        <div className="absolute bottom-[0%] -left-[5%] h-[50%] w-[30%] rounded-full bg-slate-50 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* 🏷️ Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 shadow-sm"
          >
            <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            <span className="font-thai text-[13px] font-bold text-blue-700">
              ศูนย์ข้อมูลที่พร้อมช่วยเหลือคุณตลอด 24 ชั่วโมง
            </span>
          </motion.div>

          {/* 🏛️ Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-thai mb-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl"
          >
            {title.includes('Unlink Wiki') ? (
              <>
                ห้องสมุดความรู้{' '}
                <span className="text-blue-600">Unlink Wiki</span>
              </>
            ) : (
              title
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-thai mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-500 md:text-xl"
          >
            {description}
          </motion.p>

          {/* 🏛️ Search Box (แสดงผลแบบเงื่อนไข) */}
          {showSearch && (
            <div className="relative mx-auto max-w-2xl">
              <div className="group relative">
                <div className="absolute top-1/2 left-6 -translate-y-1/2 text-slate-400">
                  <Search size={24} />
                </div>
                <input
                  type="text"
                  placeholder="พิมพ์สิ่งที่ต้องการทราบ (เช่น ลบข้อมูล, PDPA)..."
                  className="font-thai h-16 w-full rounded-3xl border-2 border-slate-100 bg-white pr-6 pl-16 text-lg text-slate-900 shadow-xl shadow-slate-200/50 transition-all placeholder:text-slate-400 focus:border-blue-600 focus:outline-none md:h-20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Live Results */}
              <AnimatePresence>
                {results.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute top-full right-0 left-0 z-50 mt-4 overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-2 shadow-2xl"
                  >
                    {results.map((item) => (
                      <Link
                        key={item.id}
                        href={`/wiki/${item.slug}`}
                        className="group flex items-center justify-between rounded-2xl px-6 py-5 transition-colors hover:bg-blue-50"
                      >
                        <div className="text-left">
                          <div className="font-thai text-md font-bold text-slate-900 group-hover:text-blue-600">
                            {item.title}
                          </div>
                          <div className="font-thai mt-1 text-xs tracking-wider text-slate-400 uppercase">
                            {item.category}
                          </div>
                        </div>
                        <ChevronRight
                          size={18}
                          className="text-slate-300 group-hover:text-blue-600"
                        />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* 🏛️ Quick Services */}
        <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          <QuickFact
            icon={<Scale className="text-blue-600" />}
            label="กฎหมายคุ้มครอง"
            value="อ่านง่าย เข้าใจเร็ว"
          />
          <QuickFact
            icon={<ShieldCheck className="text-emerald-500" />}
            label="วิธีการลบข้อมูล"
            value="ปลอดภัย 100%"
          />
          <QuickFact
            icon={<History className="text-orange-500" />}
            label="เคสตัวอย่าง"
            value="ศึกษาจากเรื่องจริง"
          />
          <QuickFact
            icon={<BookOpen className="text-purple-500" />}
            label="คู่มือใช้งาน"
            value="ดาวน์โหลดฟรี"
          />
        </div>
      </div>
    </section>
  )
}

function QuickFact({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex flex-col items-center rounded-3xl border border-slate-100 bg-slate-50/50 p-6 text-center transition-all hover:bg-white hover:shadow-lg">
      <div className="mb-4 rounded-2xl bg-white p-3 shadow-sm">{icon}</div>
      <div className="font-thai text-sm font-bold text-slate-900">{label}</div>
      <div className="font-thai mt-1 text-xs text-slate-500">{value}</div>
    </div>
  )
}
