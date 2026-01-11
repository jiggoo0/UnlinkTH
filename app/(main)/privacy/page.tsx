/** @format */

'use client'

import * as React from 'react'
import {
  ShieldAlert,
  EyeOff,
  Trash2,
  ShieldCheck,
  Fingerprint,
  FileLock2,
} from 'lucide-react'
// ✅ FIXED: ลบ unused import 'cn' และ 'Lock' ออกเรียบร้อยแล้ว
import { Seo } from '@/components/seo/Seo'
import { motion } from 'framer-motion'

/**
 * [STRATEGY: PRIVACY PROTOCOL V2]
 * - Fix react/no-unescaped-entities: เปลี่ยน " เป็น &quot; ในบรรทัดที่ 84
 * - Optimize Imports: ลบตัวแปรที่ไม่ได้ใช้ออกเพื่อความสะอาดของ Codebase
 * - Motion Integration: ใช้ Framer Motion เพื่อสร้างบรรยากาศ High-Security
 */

export default function PrivacyPolicy() {
  const protocols = [
    {
      icon: <EyeOff size={22} />,
      tag: 'Protocol 01',
      title: 'Anonymity Standard',
      subtitle: 'Encryption & Anonymization',
      content:
        "เราใช้ระบบ 'Zero-Knowledge Access' ข้อมูลทุกอย่างของคุณจะถูกเข้ารหัสก่อนถูกบันทึก เจ้าหน้าที่ปฏิบัติการจะไม่สามารถเห็นตัวตนที่แท้จริงของคุณได้หากไม่ได้รับอนุญาตจากเจ้าหน้าที่ระดับสูง (L3) เท่านั้น",
    },
    {
      icon: <Trash2 size={22} />,
      tag: 'Protocol 02',
      title: 'Data Destruction',
      subtitle: 'Post-Operation Purge',
      content:
        'เมื่อภารกิจปิดตัวลง เรามีนโยบาย Purge ข้อมูลถาวรภายใน 30 วัน ข้อมูลจะถูกเขียนทับ (Wipe) 7 ครั้งตามมาตรฐาน DoD 5220.22-M เพื่อให้มั่นใจว่าจะไม่มีร่องรอยใดๆ หลงเหลืออยู่ในระบบ',
    },
    {
      icon: <ShieldAlert size={22} />,
      tag: 'Protocol 03',
      title: 'Legal Compliance',
      subtitle: 'PDPA & International Standards',
      content:
        'เราปฏิบัติงานสอดคล้องกับ PDPA (ประเทศไทย) และ GDPR (สากล) คุณมีสิทธิ์เข้าถึง แก้ไข และสั่งทำลายข้อมูล (Right to Erasure) ของตนเองได้ตลอดเวลาผ่านช่องทาง Secure Mail ของเรา',
    },
  ]

  return (
    <>
      <Seo
        title="Privacy & Security Protocol | UnlinkTH"
        description="นโยบายความปลอดภัยและโปรโตคอลการปกป้องข้อมูลส่วนบุคคลระดับสูงสุดของ UnlinkTH"
      />

      <main className="min-h-screen bg-white py-32 selection:bg-blue-100 dark:bg-slate-950">
        <div className="container mx-auto max-w-6xl px-6">
          {/* 🏛️ Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24 space-y-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-blue-600 text-white shadow-lg shadow-blue-500/20">
                <FileLock2 size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase">
                  Classified Documentation
                </span>
                <span className="text-[9px] font-bold text-blue-600 uppercase">
                  ID: UNL-SEC-2026
                </span>
              </div>
            </div>

            <h1 className="text-6xl leading-[0.85] font-black tracking-tighter text-slate-950 uppercase md:text-8xl dark:text-white">
              Privacy <br />
              <span className="font-light text-slate-200 italic dark:text-slate-800">
                Protocol
              </span>
            </h1>

            <div className="font-thai max-w-2xl text-xl leading-relaxed font-medium text-slate-500 dark:text-slate-400">
              {/* ✅ FIXED: เปลี่ยนเครื่องหมายคำพูดเป็น HTML Entities (&quot;) */}
              เพราะ &quot;ความลับ&quot; คือสินค้าที่เราดูแล <br />
              <span className="font-bold text-slate-950 underline decoration-blue-600 decoration-4 underline-offset-8 dark:text-white">
                เราจึงออกแบบระบบที่ไม่มีใครสามารถเจาะเข้าถึงได้
                แม้แต่ผู้พัฒนาระบบเอง
              </span>
            </div>
          </motion.div>

          {/* 🏛️ Protocols Grid */}
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-slate-200 bg-slate-200 shadow-2xl dark:border-slate-800 dark:bg-slate-800">
            {protocols.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-12 transition-all hover:bg-slate-50 dark:bg-slate-950 dark:hover:bg-slate-900/50"
              >
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                  <div className="space-y-6 lg:col-span-4">
                    <span className="inline-block text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase">
                      /{item.tag}
                    </span>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-slate-950 dark:text-white">
                        <div className="text-blue-600 transition-transform duration-500 group-hover:scale-110">
                          {item.icon}
                        </div>
                        <h2 className="text-2xl font-black tracking-tight uppercase">
                          {item.title}
                        </h2>
                      </div>
                      <p className="font-thai text-[10px] font-black tracking-widest text-slate-400 uppercase">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-8 lg:border-l lg:border-slate-100 lg:pl-12 dark:lg:border-slate-900">
                    <p className="font-thai text-lg leading-relaxed text-slate-500 dark:text-slate-400">
                      {item.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 🏛️ DPO Contact Unit */}
          <div className="mt-24 bg-slate-950 p-1 shadow-[20px_20px_0px_0px_rgba(241,245,249,1)] dark:bg-blue-600 dark:shadow-[20px_20px_0px_0px_rgba(15,23,42,1)]">
            <div className="border border-white/10 p-10 text-white md:p-16">
              <div className="flex flex-col items-start justify-between gap-12 lg:flex-row">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-blue-400">
                    <Fingerprint size={24} />
                    <span className="text-[10px] font-black tracking-[0.3em] uppercase">
                      Security Operations Center
                    </span>
                  </div>
                  <h3 className="text-4xl leading-tight font-black tracking-tighter uppercase">
                    Submit Data <br /> Inquiry Report
                  </h3>
                  <p className="font-thai max-w-md text-sm leading-relaxed text-slate-400">
                    สำหรับการขอใช้สิทธิตามกฎหมาย PDPA
                    หรือการขอเข้าถึงข้อมูลส่วนบุคคล
                    กรุณาส่งรหัสเคสของท่านมายังช่องทางเข้ารหัสลับของทีมคุ้มครองข้อมูล
                  </p>
                </div>

                <div className="flex flex-col gap-2 self-end lg:items-end lg:self-center">
                  <span className="text-[10px] font-black tracking-widest text-blue-400 uppercase">
                    Secure DPO Channel
                  </span>
                  <a
                    href="mailto:dpo@unlinkth.com"
                    className="text-3xl font-black tracking-tight text-white transition-all hover:text-blue-400 md:text-5xl"
                  >
                    dpo@unlinkth.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Institutional Footer Clearance */}
          <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-slate-100 pt-10 md:flex-row dark:border-slate-900">
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              <p className="text-[10px] font-black tracking-[0.4em] text-slate-300 uppercase">
                Compliance Protocol Verified
              </p>
            </div>
            <ShieldCheck size={20} className="text-slate-200" />
          </div>
        </div>
      </main>
    </>
  )
}
