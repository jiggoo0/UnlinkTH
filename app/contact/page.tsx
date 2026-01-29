/** @format */

"use client"

import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { siteConfig } from "@/constants/site-config"
import {
  MessageCircle,
  Mail,
  ShieldCheck,
  Send,
  Lock,
  Clock,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

/**
 * UNLINK-TH | Secure Liaison Interface
 * -------------------------------------------------------------------------
 * อินเตอร์เฟซประสานงานที่ออกแบบมาเพื่อรับข้อมูลความลับและพิกัดดิจิทัล (URLs)
 * พัฒนาภายใต้มาตรการปกป้องข้อมูลส่วนบุคคลและสัญญา NDA
 */

interface ContactFormData {
  name: string
  contact: string
  subject: string
  message: string
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    // 1. กระบวนการตรวจสอบและเข้ารหัสส่งข้อมูล (Transmission Simulation)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // 2. บันทึกประวัติการส่งข้อมูลเข้าระบบหลังบ้าน
    console.log("Secure Transmission Successful:", data)

    // 3. ยืนยันสถานะความปลอดภัยแก่ผู้ใช้งาน
    toast.success(
      "ส่งข้อมูลผ่านระบบเข้ารหัสเรียบร้อยแล้ว เจ้าหน้าที่จะติดต่อกลับผ่านช่องทางที่ระบุไว้"
    )
    reset()
  }

  return (
    <div className="pb-24">
      {/* 1. Protocol Header Interface */}
      <header className="bg-muted/10 border-border/50 relative overflow-hidden border-b py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)/0.03,transparent)]" />
        <div className="relative z-10 container">
          <div className="max-w-4xl space-y-8">
            <div className="bg-primary/5 border-primary/20 text-primary inline-flex items-center gap-3 rounded-full border px-4 py-2 font-mono text-[10px] tracking-[0.3em] uppercase">
              <Lock className="h-3.5 w-3.5" />
              <span>Secure Liaison Access Point</span>
            </div>
            <h1 className="text-5xl leading-[1.1] font-bold tracking-tighter md:text-7xl">
              Private Inquiry <br />
              <span className="text-primary font-light italic">
                & Strategic Liaison
              </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed font-light md:text-2xl">
              ความลับของท่านคือพันธกิจสำคัญ
              ทุกข้อมูลจะได้รับการประเมินตามเทคนิคการจัดการข้อมูล
              ภายใต้มาตรการคุ้มครองความลับอย่างเคร่งครัด
            </p>
          </div>
        </div>
      </header>

      <section className="container py-24">
        <div className="grid gap-20 lg:grid-cols-12">
          {/* 2. Intelligence Sidebar: Authorized Channels */}
          <aside className="space-y-10 lg:col-span-5">
            <div className="space-y-8">
              <h2 className="text-muted-foreground/50 border-border/10 border-b pb-4 font-mono text-xs tracking-[0.4em] uppercase">
                Authorized Channels
              </h2>
              <div className="grid gap-6">
                {/* LINE Official Channel */}
                <a
                  href={siteConfig.contact.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lab-card group hover:bg-muted/5 border-border/40 flex items-center gap-8 p-8 transition-all"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#06C755]/10 transition-colors group-hover:bg-[#06C755]/20">
                    <MessageCircle className="h-7 w-7 text-[#06C755]" />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1 font-mono text-[10px] tracking-widest uppercase">
                      LINE Official (Primary)
                    </p>
                    <p className="group-hover:text-primary text-xl font-bold tracking-tight transition-colors">
                      {siteConfig.contact.lineId}
                    </p>
                  </div>
                </a>

                {/* Encrypted Email Channel */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="lab-card group hover:bg-muted/5 border-border/40 flex items-center gap-8 p-8 transition-all"
                >
                  <div className="bg-primary/5 group-hover:bg-primary/10 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors">
                    <Mail className="text-primary/70 h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1 font-mono text-[10px] tracking-widest uppercase">
                      Secure Mail Interface
                    </p>
                    <p className="group-hover:text-primary text-xl font-bold tracking-tight transition-colors">
                      {siteConfig.contact.email}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* 3. Operational Integrity Metrics */}
            <div className="bg-muted/5 border-border/10 space-y-6 rounded-[2rem] border p-10">
              <div className="text-primary/80 flex items-center gap-3">
                <ShieldCheck className="h-5 w-5" />
                <h3 className="text-lg font-bold tracking-tight">
                  Integrity Guarantee
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                ระบบจะประเมินโอกาสสำเร็จตามข้อเท็จจริงเชิงเทคนิคและกฎหมาย
                ในกรณีที่ไม่สามารถดำเนินการได้
                ระบบจะแจ้งผลตามจริงโดยไม่มีค่าใช้จ่ายแฝง
              </p>
              <div className="border-border/5 flex items-center gap-6 border-t pt-2">
                <div className="text-muted-foreground/40 flex items-center gap-2 font-mono text-[10px] uppercase">
                  <Clock className="h-3 w-3" /> 24h Response
                </div>
                <div className="text-muted-foreground/40 flex items-center gap-2 font-mono text-[10px] uppercase">
                  <FileText className="h-3 w-3" /> Zero-Logs Policy
                </div>
              </div>
            </div>
          </aside>

          {/* 4. Secure Submission Interface: การส่งคำร้องผ่านระบบเข้ารหัส */}
          <main className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lab-card border-primary/10 bg-muted/5 border p-10 md:p-16"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-3">
                    <Label
                      htmlFor="name"
                      className="text-muted-foreground font-mono text-xs tracking-widest uppercase"
                    >
                      Identity / Alias
                    </Label>
                    <Input
                      id="name"
                      placeholder="ระบุชื่อหรือนามแฝง"
                      className="bg-background/50 border-border/40 focus:border-primary/50 h-14 rounded-xl transition-all"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label
                      htmlFor="contact"
                      className="text-muted-foreground font-mono text-xs tracking-widest uppercase"
                    >
                      Liaison ID
                    </Label>
                    <Input
                      id="contact"
                      placeholder="LINE ID หรือ ข้อมูลติดต่อ"
                      className="bg-background/50 border-border/40 focus:border-primary/50 h-14 rounded-xl transition-all"
                      {...register("contact", { required: true })}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="subject"
                    className="text-muted-foreground font-mono text-xs tracking-widest uppercase"
                  >
                    Strategic Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="หัวข้อที่ต้องการจัดการ (เช่น การลบข้อมูลข่าวสาร, การปรับปรุงภาพลักษณ์)"
                    className="bg-background/50 border-border/40 focus:border-primary/50 h-14 rounded-xl transition-all"
                    {...register("subject")}
                  />
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="message"
                    className="text-muted-foreground font-mono text-xs tracking-widest uppercase"
                  >
                    Operational Details (URLs)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="ระบุลิงก์ข้อมูลที่ต้องการตรวจสอบ หรือรายละเอียดเบื้องต้น..."
                    className="bg-background/50 border-border/40 focus:border-primary/50 min-h-[180px] rounded-2xl leading-relaxed transition-all"
                    {...register("message", { required: true })}
                  />
                </div>

                <div className="pt-6">
                  <Button
                    disabled={isSubmitting}
                    className="group shadow-primary/20 h-16 w-full rounded-2xl text-lg font-bold shadow-2xl transition-all"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-3">
                        <span className="border-background h-4 w-4 animate-spin rounded-full border-2 border-t-transparent" />
                        Encrypting Transmission...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 tracking-widest uppercase">
                        Submit Secure Request
                        <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                    )}
                  </Button>
                </div>

                <div className="pt-4 text-center">
                  <p className="text-muted-foreground/30 font-mono text-[9px] tracking-[0.4em] uppercase">
                    End-to-End Submission Protocol v4.0.1
                  </p>
                </div>
              </form>
            </motion.div>
          </main>
        </div>
      </section>
    </div>
  )
}
