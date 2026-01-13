/** @format */

'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/shared/section-heading'
import { Seo } from '@/components/seo/Seo'
import {
  // ShieldCheck, <-- FIX: Removed unused import
  Lock,
  Zap,
  Target,
  ArrowRight,
  Fingerprint,
  Award,
  Database,
  EyeOff,
  Scale,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

/**
 * [STRATEGY: THE EMPATHETIC AUTHORITY v4.1]
 * - Fix: Removed unused imports and fixed JSX comment issues
 * - Architecture: Next.js 15 Client Component with Motion Optimization
 */

export default function AboutPage() {
  return (
    <>
      <Seo
        title="Intelligence & Reputation Management | เกี่ยวกับ UnlinkTH"
        description="เจาะลึกพันธกิจของ UnlinkTH ทีมผู้เชี่ยวชาญด้านการปกป้องความเป็นส่วนตัวและจัดการชื่อเสียงดิจิทัลระดับพรีเมียม"
      />

      <main className="bg-background selection:bg-primary/10 min-h-screen pt-32 pb-24">
        <section className="container mx-auto max-w-7xl px-6">
          {/* 🏛️ 1. HERO MANIFESTO UNIT */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <SectionHeading
              badge="Digital Sovereignty"
              title="The Unlink Intelligence"
              subtitle="เรามอบสิทธิในการเริ่มต้นใหม่ผ่านการควบคุมตัวตนดิจิทัลอย่างเบ็ดเสร็จและยั่งยืน"
              align="left"
              className="mb-0"
            />
          </motion.header>

          <div className="grid grid-cols-1 gap-24 lg:grid-cols-12">
            {/* 🏛️ 2. LEFT: THE GUARDIAN NARRATIVE */}
            <div className="space-y-16 lg:col-span-7">
              <article className="space-y-10">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-2xl shadow-inner">
                    <Fingerprint size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-primary font-mono text-[10px] font-bold tracking-[0.4em] uppercase">
                      Identity Guardian
                    </span>
                    <span className="text-muted-foreground font-mono text-[9px] font-bold uppercase">
                      Verified Operational Unit
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <h2 className="text-foreground font-sans text-5xl leading-tight font-semibold tracking-tighter md:text-7xl">
                    Our Mission: <br />
                    <span className="text-primary italic">
                      The Strategic Architect.
                    </span>
                  </h2>

                  <div className="text-muted-foreground space-y-8 font-sans text-xl leading-relaxed">
                    <p className="text-foreground text-2xl leading-snug font-medium">
                      ในยุคที่ &quot;ผลการค้นหา&quot; คือคำพิพากษาแรกของผู้คน{' '}
                      <br />
                      <span className="text-primary decoration-primary/20 underline decoration-4 underline-offset-8">
                        เราทำหน้าที่เป็นสถาปนิก
                      </span>{' '}
                      เพื่อออกแบบฉากหลังใหม่ให้ชีวิตคุณ
                    </p>

                    <p>
                      <strong className="text-foreground">UnlinkTH</strong>{' '}
                      ไม่ได้เป็นเพียงผู้ให้บริการลบข้อมูล
                      แต่เราคือที่ปรึกษาเชิงยุทธศาสตร์ที่ผสานเทคโนโลยี{' '}
                      <span className="text-foreground font-bold">
                        Data Removal
                      </span>{' '}
                      เข้ากับหลัก{' '}
                      <span className="text-foreground font-bold">
                        Legal Privacy (PDPA/GDPR)
                      </span>{' '}
                      เพื่อสร้างบรรทัดฐานใหม่ในการจัดการข้อมูลดิจิทัล
                    </p>

                    <p className="text-lg">
                      เราเชื่อว่าความผิดพลาดในอดีตไม่ควรเป็นกรงขังในอนาคต
                      การปฏิบัติงานของเราจึงยึดถือหลักความเงียบเชียบ (Silent
                      Protocol) และความปลอดภัยระดับสถาบันการเงิน
                      เพื่อผลลัพธ์ที่สง่างามและถาวร
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary shadow-primary/20 h-16 rounded-2xl px-10 text-sm font-bold shadow-xl transition-all hover:scale-105 active:scale-95"
                  >
                    <Link href="/contact" className="flex items-center gap-4">
                      Consult our lead strategist <ArrowRight size={18} />
                    </Link>
                  </Button>
                </div>
              </article>
            </div>

            {/* 🏛️ 3. RIGHT: OPERATIONAL SIDEBAR */}
            <aside className="lg:sticky lg:top-32 lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="border-border bg-card shadow-primary/10 relative overflow-hidden rounded-[3rem] border p-12 shadow-2xl"
              >
                <div className="from-primary/5 absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-50" />
                <div className="relative z-10 space-y-12">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary h-2 w-2 animate-pulse rounded-full" />
                    <h3 className="text-muted-foreground font-mono text-[10px] font-bold tracking-[0.4em] uppercase">
                      Operational Protocol v4.0
                    </h3>
                  </div>

                  <ul className="space-y-12">
                    <OperationalPillar
                      icon={<Lock size={22} />}
                      title="Strict NDA Policy"
                      desc="ความลับคือหัวใจสูงสุด ข้อมูลทุกชุดจะถูกเข้ารหัส AES-256 และทำลายทิ้งถาวร (Secure Wipe) หลังจบภารกิจ"
                    />
                    <OperationalPillar
                      icon={<Database size={22} />}
                      title="Advanced Index Control"
                      desc="จัดการข้อมูลต้นทางและประสานงานกับผู้ให้บริการ Search Engine ระดับสากลเพื่อการถอดถอนอย่างเป็นระบบ"
                    />
                    <OperationalPillar
                      icon={<Scale size={22} />}
                      title="Right to be Forgotten"
                      desc="ใช้สิทธิตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล เพื่อการันตีผลลัพธ์ที่ชอบด้วยกฎหมายและยั่งยืน"
                    />
                  </ul>
                </div>
              </motion.div>
            </aside>
          </div>

          {/* 🏛️ 4. CORE INTELLIGENCE VALUES */}
          <section className="mt-48">
            <div className="mb-20 flex flex-col items-center space-y-4 text-center">
              <Award className="text-primary/40 mb-2" size={40} />
              <h3 className="text-primary font-mono text-[11px] font-bold tracking-[0.5em] uppercase">
                Our Founding Principles
              </h3>
              <h2 className="text-3xl font-semibold tracking-tighter md:text-5xl">
                The Pillars of UnlinkTH
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <ValueCard
                number="01"
                icon={<EyeOff size={24} />}
                title="Privacy First"
                content="เราให้ความสำคัญกับความเป็นส่วนตัวของท่าน มากกว่าการอวดอ้างผลงานสู่สาธารณะ (Discretion is our Pride)"
              />
              <ValueCard
                number="02"
                icon={<Scale size={24} />}
                title="Radical Integrity"
                content="เราประเมินเคสตามความจริง ตรงไปตรงมา และไม่รับภารกิจที่ไม่มีโอกาสสำเร็จเพื่อความโปร่งใสสูงสุด"
              />
              <ValueCard
                number="03"
                icon={<Zap size={24} />}
                title="Technical Edge"
                content="ใช้เครื่องมือระดับ Deep Tech เพื่อเข้าถึงและจัดการ Algorithm ของ Search Engine ได้อย่างมีประสิทธิภาพ"
              />
              <ValueCard
                number="04"
                icon={<Target size={24} />}
                title="Total Commitment"
                content="ยืนหยัดเคียงข้างจนกว่าเป้าหมายจะสำเร็จและชื่อเสียงดิจิทัลของคุณจะถูกกู้คืนอย่างสมบูรณ์แบบ"
              />
            </div>
          </section>
        </section>
      </main>
    </>
  )
}

/* 🏛️ Internal Components */

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
    <li className="group flex gap-6">
      <div className="text-primary mt-1 flex-shrink-0 transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]">
        {icon}
      </div>
      <div className="space-y-2">
        <h4 className="text-foreground text-xs font-bold tracking-[0.2em] uppercase">
          {title}
        </h4>
        <p className="text-muted-foreground group-hover:text-foreground font-sans text-[15px] leading-relaxed transition-colors">
          {desc}
        </p>
      </div>
    </li>
  )
}

function ValueCard({
  number,
  icon,
  title,
  content,
}: {
  number: string
  icon: React.ReactNode
  title: string
  content: string
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group border-border bg-card hover:border-primary/30 hover:shadow-primary/5 relative rounded-[2.5rem] border p-10 transition-all hover:shadow-2xl"
    >
      <div className="text-primary/20 group-hover:text-primary/50 absolute top-8 right-8 font-mono text-xs font-bold transition-colors">
        {/* FIX: Moved comment outside or wrapped properly to avoid JSX error */}
        {`// ${number}`}
      </div>
      <div className="bg-muted text-primary group-hover:bg-primary mb-8 flex h-14 w-14 items-center justify-center rounded-2xl transition-all group-hover:text-white">
        {icon}
      </div>
      <h4 className="text-foreground mb-4 text-base font-bold tracking-tight uppercase">
        {title}
      </h4>
      <p className="text-muted-foreground group-hover:text-foreground/80 font-sans text-[14px] leading-relaxed transition-colors">
        {content}
      </p>
    </motion.div>
  )
}
