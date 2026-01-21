"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  FileSearch,
  ShieldAlert,
  CheckCircle,
  ArrowRight,
  Lock,
  Activity,
  Fingerprint,
} from "lucide-react";

/**
 * 
 * Protocol Logic: กระบวนการจัดการข้อมูลเชิงเทคนิค
 * ออกแบบเพื่อสะท้อนถึงมาตรการ "The Fixer" ที่แม่นยำและเป็นระบบตามมาตรฐานของ UNLINK
 */
const protocols = [
  {
    title: "Initial Diagnosis",
    description:
      "วิเคราะห์ URL และ Metadata ในเชิงลึก เพื่อประเมินความเป็นไปได้ในการถอดถอนดัชนี (De-indexing) และการเข้าถึงข้อมูล",
    icon: <Search className="h-6 w-6" />,
    status: "Step 01",
  },
  {
    title: "Strategic Selection",
    description:
      "ประเมินยุทธศาสตร์ระหว่าง Technical Removal, Legal PDPA Notice หรือ SEO Suppression ตามอัลกอริทึมของแหล่งข้อมูล",
    icon: <FileSearch className="h-6 w-6" />,
    status: "Step 02",
  },
  {
    title: "Execution Phase",
    description:
      "ดำเนินการระงับเหตุและประสานงานร่วมกับ Data Controller โดยผู้เชี่ยวชาญ เพื่อกำจัดข้อมูลในระดับโครงสร้างดิจิทัล",
    icon: <ShieldAlert className="h-6 w-6" />,
    status: "Step 03",
  },
  {
    title: "Verification & Purge",
    description:
      "ตรวจสอบผลการค้นหาผ่านระบบ Monitoring และกำจัด Cache ที่ตกค้าง รวมถึงทำลายข้อมูลในภารกิจตามนโยบาย No-Log",
    icon: <CheckCircle className="h-6 w-6" />,
    status: "Step 04",
  },
];

export default function ProtocolStepper() {
  return (
    <section
      id="protocol"
      className="relative overflow-hidden bg-background py-24 lg:py-40"
    >
      {/* 01: Operational Background Layer - Tactical Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        aria-hidden="true"
      >
        <div className="h-full w-full bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* 02: Strategic Header Layer */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <Badge
                variant="outline"
                className="border-primary/30 bg-primary/5 px-5 py-2 font-mono text-[10px] tracking-[0.25em] text-primary uppercase"
              >
                Operational Protocol
              </Badge>
              <div className="flex items-center gap-1.5 opacity-40">
                <Activity className="h-3 w-3 animate-pulse text-primary" />
                <span className="font-mono text-[8px] italic tracking-tighter uppercase">
                  Process Monitoring
                </span>
              </div>
            </div>

            <h2 className="mb-8 text-4xl font-extrabold tracking-tighter text-foreground md:text-6xl lg:text-7xl leading-tight">
              มาตรฐานปฏิบัติการ <br />
              <span className="text-3xl font-light italic text-muted-foreground md:text-5xl lg:text-6xl">
                ระดับ Technical Specialist
              </span>
            </h2>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground/80 md:text-xl">
              กระบวนการทำงานที่เป็นระบบและตรวจสอบได้จริง ภายใต้มาตรการ{" "}
              <span className="font-bold text-foreground">
                Confidentiality Protocol
              </span>{" "}
              ระดับสูงสุดในทุกขั้นตอนปฏิบัติงาน
            </p>
          </motion.div>
        </div>

        {/* 03: The Stepper Matrix */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {protocols.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              {/* Connector Line Logic (Desktop Only) */}
              {index !== protocols.length - 1 && (
                <div
                  className="absolute left-full top-14 -z-10 hidden h-px w-full border-t border-dashed border-primary/20 lg:block"
                  aria-hidden="true"
                />
              )}

              <div className="flex h-full flex-col rounded-[2rem] border border-border/40 bg-muted/5 p-8 transition-all duration-500 hover:border-primary/40 hover:bg-muted/10 hover:shadow-2xl hover:shadow-primary/5">
                {/* Step Identification */}
                <div className="mb-10 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/40 bg-background text-primary transition-all duration-500 group-hover:rotate-12 group-hover:border-primary/50 group-hover:bg-primary/5 group-hover:shadow-[0_0_20px_rgba(var(--color-primary),0.15)]">
                    {step.icon}
                  </div>
                  <Badge
                    variant="outline"
                    className="h-5 border-none font-mono text-[10px] font-black tracking-widest text-muted-foreground/40 uppercase"
                  >
                    {step.status}
                  </Badge>
                </div>

                <h3 className="mb-5 text-xl font-extrabold tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {step.title}
                </h3>

                <p className="flex-1 text-sm font-medium italic leading-relaxed text-muted-foreground/80">
                  {step.description}
                </p>

                {/* Tactical Status Tag */}
                <div className="mt-10 flex items-center gap-3 border-t border-border/20 pt-8 transition-colors group-hover:border-primary/10">
                  <div className="flex items-center gap-2 text-[9px] font-black tracking-[0.2em] text-primary/60 transition-colors uppercase group-hover:text-primary">
                    Security Verified
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1.5" />
                  </div>
                  <Fingerprint className="h-3.5 w-3.5 text-primary/20 transition-opacity group-hover:opacity-100" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 04: Integrity Assurance Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-28 flex flex-col items-center justify-center gap-6 text-center"
        >
          <div className="group flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-8 py-3 text-[10px] font-black tracking-[0.3em] text-primary transition-all hover:border-primary/40 hover:bg-primary/10 uppercase">
            <Lock className="h-4 w-4 transition-transform group-hover:scale-110" />
            Zero-Knowledge Operation Protocol
          </div>

          <p className="max-w-2xl text-xs font-medium italic leading-loose text-muted-foreground/50 md:text-sm">
            * ข้อมูลดิจิทัลเชิงลึกที่ใช้ในกระบวนการระงับเหตุ รวมถึง URL
            และภาพหลักฐานประกอบภารกิจ จะถูกทำลายทิ้งทันที{" "}
            <span className="font-bold text-foreground">(Secure Purge)</span>{" "}
            ภายหลังการตรวจสอบผลสำเร็จใน Step 04
            เพื่อให้มั่นใจได้ว่าความลับของลูกความจะคงอยู่ตลอดไป
          </p>
          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
