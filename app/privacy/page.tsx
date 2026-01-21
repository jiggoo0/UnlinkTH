"use client";

import { siteConfig } from "@/constants/site-config";
import { Badge } from "@/components/ui/badge";
import {
  ShieldAlert,
  Trash2,
  Lock,
  EyeOff,
  ShieldCheck,
  Activity,
  Fingerprint,
} from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";
import { motion } from "framer-motion";

/**
 * 
 * Privacy Page: นโยบายการรักษาความลับสูงสุด (Privacy Protocol)
 * ยุทธศาสตร์: Establishing Trust -> Zero-Knowledge Proof -> Data Destruction Protocol
 */

const privacyCommitments = [
  {
    icon: <Trash2 className="h-6 w-6 text-red-500" />,
    title: "Data Destruction Policy",
    desc: "ข้อมูล ลิงก์ และภาพหลักฐานทั้งหมดที่ส่งมาเพื่อการประเมิน จะถูกทำลายทิ้ง (Secure Purge) ทันทีหลังปิดภารกิจหรือเมื่อท่านยุติการปรึกษา",
  },
  {
    icon: <EyeOff className="h-6 w-6 text-primary" />,
    title: "No-Log Infrastructure",
    desc: "โครงสร้างพื้นฐานของเราไม่มีการเก็บ Log การสนทนาลงในฐานข้อมูลส่วนกลาง ทุกความเคลื่อนไหวถูกจัดการแบบ Session-to-Session",
  },
  {
    icon: <Lock className="h-6 w-6 text-primary" />,
    title: "Confidentiality Agreement",
    desc: "Specialist ทุกท่านต้องปฏิบัติตามมาตรฐานการรักษาความลับระดับสูง (NDA) เป็นพื้นฐานสำคัญในการปฏิบัติหน้าที่",
  },
];

export default function PrivacyPage() {
  return (
    <main className="flex w-full flex-col bg-background">
      {/* 01: Hero Section - The Commitment to Confidentiality */}
      <section className="relative overflow-hidden pb-16 pt-32 lg:pb-32 lg:pt-56">
        {/* Tactical Background Decor - Grid Layer */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
          aria-hidden="true"
        >
          <div className="h-full w-full bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <Badge
                variant="outline"
                className="border-primary/30 bg-primary/5 px-4 py-1.5 font-mono text-[10px] tracking-[0.2em] text-primary uppercase"
              >
                Trust & Confidentiality
              </Badge>
              <div className="flex items-center gap-1.5 opacity-30">
                <Activity className="h-3 w-3 animate-pulse text-primary" />
                <span className="font-mono text-[8px] tracking-tighter uppercase italic">
                  Secure Protocol Active
                </span>
              </div>
            </div>

            <h1 className="mb-10 text-5xl font-extrabold leading-tight tracking-tighter text-foreground md:text-7xl lg:text-8xl">
              ความลับของท่าน <br />
              <span className="text-4xl font-light italic text-muted-foreground md:text-6xl lg:text-7xl">
                คือพันธกิจสูงสุดของเรา
              </span>
            </h1>

            <div className="max-w-2xl border-l-4 border-primary/40 pl-8">
              <p className="text-xl font-medium italic leading-relaxed text-muted-foreground/90 md:text-2xl">
                &quot;ที่ UNLINK เราไม่ได้แค่ระงับการเข้าถึงข้อมูลให้ท่าน
                แต่เราลบข้อมูลของท่านออกจากระบบของเราด้วยเช่นกัน&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02: Core Privacy Content & Infrastructure */}
      <section className="container relative z-10 mx-auto px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left Column: Semantic Content (The Protocols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-16 lg:col-span-7"
          >
            <div className="group">
              <h2 className="mb-8 flex items-center gap-3 text-3xl font-extrabold tracking-tight">
                <ShieldCheck className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                บทนำและหลักการทั่วไป
              </h2>
              <div className="text-lg leading-loose text-muted-foreground/80 space-y-6">
                <p>
                  เนื่องจากลักษณะของบริการ{" "}
                  <span className="font-bold italic text-foreground uppercase tracking-tight">
                    {siteConfig.name}
                  </span>{" "}
                  เกี่ยวข้องกับข้อมูลที่มีความละเอียดอ่อนสูง
                  เราจึงยึดถือมาตรฐานความเป็นส่วนตัวที่เข้มงวดกว่ามาตรฐานอุตสาหกรรมทั่วไป
                  นโยบายนี้มีวัตถุประสงค์เพื่อแจ้งให้ท่านทราบถึงโปรโตคอลการจัดการข้อมูล
                  เพื่อให้ท่านมั่นใจในความปลอดภัยระดับ{" "}
                  <span className="font-bold text-primary">
                    100% Confidentiality Audit
                  </span>
                </p>
              </div>
            </div>

            <div className="group">
              <h2 className="mb-8 flex items-center gap-3 text-3xl font-extrabold tracking-tight">
                <Fingerprint className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                ข้อมูลที่เรา (ไม่) จัดเก็บ
              </h2>
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-muted/5 p-8 transition-all hover:border-primary/30">
                  <h3 className="mb-3 font-mono text-xs font-black tracking-widest text-primary/70 uppercase">
                    Zero-Knowledge Approach
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    เราไม่มีการติดตั้งคุกกี้เพื่อติดตามพฤติกรรม (Tracking
                    Cookies) และไม่มีการจัดเก็บชื่อ-นามสกุล
                    หรือข้อมูลส่วนบุคคลลงในฐานข้อมูลถาวรของเว็บไซต์
                    ทุกการประเมินทางเทคนิคถูกจัดการแบบ{" "}
                    <span className="font-bold italic text-foreground">
                      Session-to-Session
                    </span>{" "}
                    เท่านั้น ข้อมูลจะสลายตัวทันทีเมื่อภารกิจสิ้นสุด
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <h2 className="mb-8 text-3xl font-extrabold tracking-tight">
                การติดต่อสื่อสารและการทำลายข้อมูล
              </h2>
              <p className="text-lg leading-loose text-muted-foreground/80">
                ในการสื่อสารผ่าน LINE Official หรือช่องทางเข้ารหัสอื่นๆ
                เราใช้มาตรการความปลอดภัยสูงสุดร่วมกับนโยบาย{" "}
                <strong className="italic text-foreground">&quot;Secure Purge&quot;</strong> โดย Specialist
                จะทำการล้างประวัติการสนทนา (Clear Chat Logs)
                และทำลายเอกสารแนบทันทีเมื่อสิ้นสุดการให้คำปรึกษาในแต่ละเซสชัน
              </p>
            </div>
          </motion.div>

          {/* Right Column: Commitment Matrix (Visual Trust) */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-[3rem] border border-primary/20 bg-muted/5 p-10 backdrop-blur-xl"
              >
                {/* Visual Accent - Shield Watermark */}
                <div
                  className="absolute -right-12 -top-12 opacity-[0.03]"
                  aria-hidden="true"
                >
                  <ShieldAlert className="h-48 w-48 text-primary" />
                </div>

                <h3 className="relative z-10 mb-10 flex items-center gap-3 text-xl font-extrabold tracking-tight">
                  <ShieldAlert className="h-6 w-6 text-primary" />
                  คำมั่นสัญญาของ UNLINK
                </h3>

                <div className="relative z-10 space-y-10">
                  {privacyCommitments.map((item, i) => (
                    <div key={i} className="group flex gap-5">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/40 bg-background transition-all group-hover:border-primary/30 group-hover:bg-primary/5">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="mb-2 font-mono text-[11px] font-black tracking-widest text-foreground uppercase">
                          {item.title}
                        </h4>
                        <p className="text-sm leading-relaxed text-muted-foreground/80">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="mt-10 flex items-center justify-center rounded-2xl border border-dashed border-border/60 p-6 text-center">
                <p className="font-thai text-xs italic leading-relaxed tracking-tighter text-muted-foreground/60 uppercase">
                  หากท่านต้องการรายละเอียดเกี่ยวกับโปรโตคอลการทำลายข้อมูล <br />
                  สามารถขอรับ <span className="font-bold text-primary/60">Technical Purge Report</span>
                  จากเจ้าหน้าที่ได้หลังจบภารกิจ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03: The Closing Commitment - Operational Integrity */}
      <div className="border-t border-border/40 bg-muted/5">
        <ContactCTA />
      </div>
    </main>
  );
}
