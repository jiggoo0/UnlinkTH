/** @format */

'use client'

import * as React from 'react'
import { SectionHeading } from '@/components/shared/section-heading'
import { Seo } from '@/components/seo/Seo'
import { ShieldCheck, Lock, Zap, Target, ArrowRight } from 'lucide-react'

/**
 * [STRATEGY: THE INTELLIGENCE MANIFESTO]
 * - Authority: ใช้ Brutalist layout เพื่อเน้นความน่าเชื่อถือ
 * - Precision: แยกส่วน Operational Standards ออกเป็น Pillar ที่ชัดเจน
 * - Engagement: เพิ่ม CTA แฝงในเนื้อหาเพื่อนำไปสู่หน้า Contact
 * - Fix: Escaped double quotes และลบ unused import 'cn'
 */

export default function AboutPage() {
  return (
    <>
      <Seo
        title="Intelligence & Reputation Management | About UnlinkTH"
        description="เจาะลึกพันธกิจของ UnlinkTH ทีมผู้เชี่ยวชาญด้านการปกป้องความเป็นส่วนตัวและจัดการชื่อเสียงดิจิทัลระดับสูง"
      />

      <main className="min-h-screen bg-white pt-32 pb-24 selection:bg-blue-100 dark:bg-slate-950">
        <section className="container mx-auto max-w-6xl px-6">
          {/* 🏛️ Header Unit */}
          <SectionHeading
            badge="Digital Sovereignty"
            title="The Unlink Intelligence"
            subtitle="เรามอบสิทธิในการเริ่มต้นใหม่ผ่านการควบคุมตัวตนดิจิทัลอย่างเบ็ดเสร็จ"
            align="left"
            className="mb-24"
          />

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* 🏛️ Main Content: Manifesto */}
            <div className="lg:col-span-7">
              <article className="font-thai space-y-10 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                <div className="space-y-4">
                  <h2 className="text-3xl font-black tracking-tighter text-slate-950 uppercase dark:text-white">
                    Our Mission: <br />
                    <span className="text-blue-600">
                      The Strategic Guardian
                    </span>
                  </h2>
                  <div className="h-1 w-20 bg-blue-600" />
                </div>

                <p className="text-xl font-bold text-slate-900 dark:text-slate-200">
                  {/* ✅ FIX: เปลี่ยน " เป็น &quot; */}
                  ในโลกที่ &quot;ข้อมูลคืออาวุธ&quot;
                  เราทำหน้าที่เป็นโล่กำบังให้กับบุคคลสำคัญและองค์กรธุรกิจ
                </p>

                <p>
                  <strong className="text-slate-950 dark:text-white">
                    UnlinkTH
                  </strong>{' '}
                  ไม่ได้เป็นเพียงบริษัทลบข้อมูล
                  แต่เราคือหน่วยปฏิบัติการยุทธศาสตร์ดิจิทัลที่เชี่ยวชาญด้าน
                  <span className="mx-1 font-bold text-blue-600 underline underline-offset-4">
                    Digital Footprint Audit
                  </span>
                  และการเจรจาตามกรอบกฎหมายระดับสากล
                </p>

                <p>
                  เราเชื่อว่าทุกคนมีสิทธิที่จะผิดพลาด
                  และความผิดพลาดเหล่านั้นไม่ควรคงอยู่ถาวรเพื่อทำลายอนาคตของคุณ
                  การปฏิบัติงานของเราจึงเน้นความเงียบเชียบ (Silent Operation)
                  และผลลัพธ์ที่เด็ดขาด
                </p>

                <div className="pt-6">
                  <button className="group flex items-center gap-3 text-sm font-black tracking-widest text-slate-950 uppercase dark:text-white">
                    Consult our lead strategist
                    <ArrowRight
                      size={16}
                      className="text-blue-600 transition-transform group-hover:translate-x-2"
                    />
                  </button>
                </div>
              </article>
            </div>

            {/* 🏛️ Operational Sidebar */}
            <aside className="lg:col-span-5">
              <div className="relative border-2 border-slate-950 bg-slate-950 p-10 text-white shadow-[15px_15px_0px_0px_rgba(37,99,235,1)] dark:border-slate-800">
                <div className="mb-10 flex items-center gap-3">
                  <Target className="text-blue-400" size={20} />
                  <h3 className="text-[10px] font-black tracking-[0.4em] uppercase">
                    Protocol Standards
                  </h3>
                </div>

                <ul className="space-y-10">
                  <OperationalPillar
                    icon={<Lock size={18} />}
                    title="Strict NDA Policy"
                    desc="การรักษาความลับคือสัญญาทางจริยธรรมที่สูงสุดของเรา ข้อมูลจะถูกเข้ารหัสระดับเดียวกับสถาบันการเงิน"
                  />
                  <OperationalPillar
                    icon={<Zap size={18} />}
                    title="Active Response"
                    desc="ระบบตรวจสอบและรายงานผลลัพธ์แบบ Real-time เพื่อให้คุณมั่นใจในทุกย่างก้าวของการทำงาน"
                  />
                  <OperationalPillar
                    icon={<ShieldCheck size={18} />}
                    title="Persistent Results"
                    desc="ไม่ใช่แค่การซ่อน แต่เป็นการกำจัดปัญหาที่ต้นตอเพื่อผลลัพธ์ที่ยั่งยืนถาวร"
                  />
                </ul>
              </div>
            </aside>
          </div>

          {/* 🏛️ Values Grid Unit */}
          <div className="mt-32 border-t border-slate-100 pt-20 dark:border-slate-900">
            <h3 className="mb-12 text-center text-[10px] font-black tracking-[0.5em] text-slate-300 uppercase">
              Core Intelligence Values
            </h3>
            <div className="grid grid-cols-1 gap-px border border-slate-100 bg-slate-100 sm:grid-cols-2 lg:grid-cols-4 dark:border-slate-800 dark:bg-slate-800">
              <ValueCard
                number="01"
                title="Privacy First"
                content="ความลับของลูกค้าสำคัญกว่าผลงานของเรา"
              />
              <ValueCard
                number="02"
                title="Integrity"
                content="ตรงไปตรงมาต่อความเป็นไปได้ของผลลัพธ์"
              />
              <ValueCard
                number="03"
                title="Innovation"
                content="ใช้เทคนิคขั้นสูงในการจัดการ Algorithm"
              />
              <ValueCard
                number="04"
                title="Commitment"
                content="ยืนหยัดเคียงข้างจนกว่าเป้าหมายจะสำเร็จ"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

/* 🏛️ Private Components */

function OperationalPillar({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <li className="group flex gap-5">
      <div className="mt-1 flex-shrink-0 text-blue-400 transition-transform group-hover:scale-110">
        {icon}
      </div>
      <div>
        <h4 className="mb-2 text-[11px] font-black tracking-[0.2em] text-white uppercase">
          {title}
        </h4>
        <p className="font-thai text-[13px] leading-relaxed font-medium text-slate-400">
          {desc}
        </p>
      </div>
    </li>
  )
}

function ValueCard({
  number,
  title,
  content,
}: {
  number: string
  title: string
  content: string
}) {
  return (
    <div className="bg-white p-10 transition-all hover:bg-slate-50 dark:bg-slate-950 dark:hover:bg-slate-900">
      <span className="mb-6 block text-[10px] font-black tracking-widest text-blue-600">
        /{number}
      </span>
      <h4 className="mb-4 text-sm font-black tracking-tight text-slate-950 uppercase dark:text-white">
        {title}
      </h4>
      <p className="font-thai text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
        {content}
      </p>
    </div>
  )
}
