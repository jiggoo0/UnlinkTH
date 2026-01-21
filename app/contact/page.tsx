"use client"

import Link from "next/link"
import { siteConfig } from "@/constants/site-config"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  MessageCircle,
  ShieldCheck,
  Lock,
  Clock,
  AlertCircle,
  ArrowRight,
  Fingerprint,
  Activity,
} from "lucide-react"
import { motion } from "framer-motion"

/**
 * [attachment_0](attachment)
 * Contact Page: Operational Liaison Center
 * ยุทธศาสตร์: Establishing Trust -> Secure Channel -> Immediate Action
 */

export default function ContactPage() {
  const lineLink = `https://line.me/ti/p/${siteConfig.contact.lineId.replace(
    "@",
    ""
  )}`

  return (
    <div className="bg-background flex min-h-screen w-full flex-col">
      {/* 01: Hero Section - The Secure Vision */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-56 lg:pb-32">
        {/* Tactical Background Decor */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
          aria-hidden="true"
        >
          <div className="h-full w-full bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <Badge
                variant="outline"
                className="border-primary/30 bg-primary/5 text-primary px-4 py-1.5 font-mono text-[10px] tracking-[0.2em] uppercase"
              >
                Secure Liaison Channel
              </Badge>
              <div className="flex items-center gap-1.5 opacity-30">
                <Activity className="text-primary h-3 w-3 animate-pulse" />
                <span className="font-mono text-[8px] tracking-tighter uppercase">
                  Secure Link Active
                </span>
              </div>
            </div>

            <h1 className="text-foreground mb-10 text-5xl leading-tight font-extrabold tracking-tighter md:text-7xl lg:text-8xl">
              เริ่มบทสนทนา <br />
              <span className="text-muted-foreground text-4xl font-light italic md:text-6xl lg:text-7xl">
                ในพื้นที่ปลอดภัยสูงสุด
              </span>
            </h1>

            <p className="text-muted-foreground/80 max-w-2xl text-xl leading-relaxed md:text-2xl">
              เราเข้าใจถึงความไว้วางใจในข้อมูลส่วนบุคคล
              ทุกการปรึกษาจะถูกดำเนินการผ่านช่องทางที่เข้ารหัส และยึดถือมาตรฐาน{" "}
              <span className="text-foreground decoration-primary/30 font-bold italic underline underline-offset-8">
                No-Log Policy
              </span>{" "}
              อย่างเคร่งครัด
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02: Main Engagement Area */}
      <section className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          {/* Left Side: Primary Operational Channel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10 lg:col-span-7"
          >
            <div className="border-primary/20 bg-muted/5 relative overflow-hidden rounded-[2.5rem] border p-8 backdrop-blur-md md:p-14">
              {/* Subtle Scanline Decor */}
              <div
                className="animate-scan pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_bottom,transparent_0%,var(--color-primary)_50%,transparent_100%)] bg-[size:100%_4px] opacity-[0.02]"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <h2 className="mb-8 flex items-center gap-4 text-3xl font-extrabold tracking-tight">
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-xl">
                    <MessageCircle className="text-primary h-6 w-6" />
                  </div>
                  ช่องทางสื่อสารหลัก
                </h2>

                <p className="text-muted-foreground/90 mb-12 text-lg leading-relaxed">
                  เพื่อให้การประเมินทางเทคนิค (Technical Diagnosis)
                  ทำได้แม่นยำที่สุด เราแนะนำให้ส่ง URL หรือหลักฐานผ่าน LINE
                  Official ซึ่งมีผู้เชี่ยวชาญสแตนด์บายให้บริการแบบ{" "}
                  <span className="text-foreground font-bold italic">
                    1-on-1 Encrypted Session
                  </span>
                </p>

                <div className="flex flex-col gap-6 sm:flex-row">
                  <Button
                    size="lg"
                    className="h-16 flex-1 rounded-2xl bg-[#00B900] px-10 text-lg font-black tracking-tight text-white shadow-2xl shadow-green-500/20 transition-all hover:scale-[1.02] hover:bg-[#00A000] active:scale-95"
                    asChild
                  >
                    <Link
                      href={lineLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-3 h-6 w-6 fill-current" />
                      ปรึกษาผ่าน LINE ทันที
                    </Link>
                  </Button>

                  <div className="border-border/40 bg-background/50 flex flex-col items-center justify-center rounded-2xl border px-8 py-4 backdrop-blur-sm">
                    <span className="text-muted-foreground/60 font-mono text-[9px] font-bold tracking-[0.2em] uppercase">
                      ID LINE
                    </span>
                    <span className="text-primary text-xl font-black tracking-tighter">
                      {siteConfig.contact.lineId}
                    </span>
                  </div>
                </div>

                <div className="border-border/40 mt-14 grid grid-cols-1 gap-6 border-t pt-10 sm:grid-cols-2">
                  <div className="text-muted-foreground/80 hover:text-primary flex items-center gap-3 transition-colors">
                    <Clock className="text-primary h-4 w-4" />
                    <span className="text-foreground/70 font-mono text-[10px] font-bold tracking-widest uppercase">
                      Response within 15m
                    </span>
                  </div>
                  <div className="text-muted-foreground/80 hover:text-primary flex items-center gap-3 transition-colors">
                    <Lock className="text-primary h-4 w-4" />
                    <span className="text-foreground/70 font-mono text-[10px] font-bold tracking-widest uppercase">
                      Secure Handshake Protocol
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tactical Advice Box */}
            <div className="flex gap-5 rounded-3xl border border-amber-500/20 bg-amber-500/5 p-8 transition-colors hover:bg-amber-500/10">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10">
                <AlertCircle className="h-5 w-5 text-amber-500" />
              </div>
              <div className="text-sm leading-loose text-amber-200/70">
                <strong className="mb-2 block font-mono text-[10px] font-black tracking-widest text-amber-500 uppercase">
                  Operational Note:
                </strong>
                โปรดเตรียมลิงก์ URL หรือชื่อหัวข้อข่าวที่คุณต้องการระงับเหตุ
                เพื่อให้เจ้าหน้าที่สามารถทำการประเมินความเป็นไปได้เชิงเทคนิค
                (Technical Feasibility Audit) ได้ทันทีโดยไม่มีค่าใช้จ่าย
              </div>
            </div>
          </motion.div>

          {/* Right Side: Commitment Grid */}
          <div className="space-y-10 lg:col-span-5">
            <h3 className="text-muted-foreground/40 flex items-center gap-3 font-mono text-[11px] font-black tracking-[0.4em] uppercase">
              <Fingerprint className="h-4 w-4" />
              Our Commitment
            </h3>

            <div className="grid gap-6">
              {[
                {
                  icon: <ShieldCheck className="h-5 w-5" />,
                  title: "Technical Diagnosis",
                  desc: "เราประเมินเคสตามความเป็นจริงทางเทคนิค หากไม่สามารถดำเนินการได้ เราจะแจ้งให้ทราบทันที",
                },
                {
                  icon: <Lock className="h-5 w-5" />,
                  title: "No Log Policy",
                  desc: "ข้อมูลและลิงก์ที่ใช้ประเมินจะถูกทำลายทิ้ง (Secure Purge) ทันทีหลังจบการสนทนา",
                },
                {
                  icon: <ArrowRight className="h-5 w-5" />,
                  title: "Direct Specialist",
                  desc: "คุณจะได้สื่อสารกับผู้เชี่ยวชาญด้านวิศวกรรมข้อมูลโดยตรง ไม่ใช่เจ้าหน้าที่ฝ่ายขาย",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group border-border/40 bg-muted/5 hover:border-primary/40 hover:bg-muted/10 flex items-start gap-5 rounded-3xl border p-7 transition-all duration-500"
                >
                  <div className="bg-background border-border/40 text-primary group-hover:border-primary/50 group-hover:bg-primary/5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border shadow-sm transition-all duration-500 group-hover:rotate-12">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-foreground mb-2 text-lg font-extrabold tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground/80 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Disclaimer Footer */}
      <div className="container mx-auto px-6 pb-20">
        <div className="flex flex-col items-center gap-4 text-center opacity-30">
          <p className="max-w-2xl font-mono text-[9px] leading-relaxed font-bold tracking-[0.3em] uppercase">
            Identity Protection Active: All communication channels are
            periodically purged to ensure maximum confidentiality.
          </p>
          <div className="via-primary via-primary/50 h-px w-32 bg-gradient-to-r from-transparent to-transparent" />
        </div>
      </div>
    </div>
  )
}
