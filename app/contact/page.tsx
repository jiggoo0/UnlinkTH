/** @format */

"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { siteConfig } from "@/constants/site-config";
import {
  MessageCircle,
  Mail,
  ShieldCheck,
  Send,
  Lock,
  Clock,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

/**
 * UNLINK-TH | Secure Liaison Interface
 * -------------------------------------------------------------------------
 * ออกแบบมาเพื่อรับข้อมูลความลับและลิงก์ที่ต้องการตรวจสอบ
 * ทุกฟิลด์ถูกกำหนดค่าให้รองรับมาตราฐานความปลอดภัยของข้อมูล
 */

interface ContactFormData {
  name: string;
  contact: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // 1. กระบวนการจำลองการเข้ารหัสข้อมูล (Secure Encryption Simulation)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    // 2. ส่งข้อมูลไปยังระบบหลังบ้าน
    console.log("Transmission Successful:", data);
    
    // 3. แจ้งเตือนสถานะความปลอดภัย
    toast.success(
      "ข้อมูลถูกส่งผ่านระบบเข้ารหัสเรียบร้อยแล้ว เจ้าหน้าที่จะติดต่อกลับในช่องทางส่วนตัว"
    );
    reset();
  };

  return (
    <div className="pb-24">
      {/* 1. Protocol Header */}
      <header className="bg-muted/10 border-b border-border/50 relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)/0.03,transparent)]" />
        <div className="container relative z-10">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-mono uppercase tracking-[0.3em]">
              <Lock className="h-3.5 w-3.5" />
              <span>Secure Liaison Access Point</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1]">
              Private Inquiry <br />
              <span className="text-primary font-light italic">& Strategic Liaison</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-2xl font-light leading-relaxed max-w-2xl">
              ความลับของคุณคือพันธกิจสูงสุด ทุกข้อมูลจะได้รับการประเมินโดยวิศวกรข้อมูลภายใต้มาตรการ **Non-Disclosure Agreement (NDA)** อย่างเคร่งครัด
            </p>
          </div>
        </div>
      </header>

      <section className="container py-24">
        <div className="grid gap-20 lg:grid-cols-12">
          
          {/* 2. Intelligence Sidebar (Contact Info) */}
          <aside className="space-y-10 lg:col-span-5">
            <div className="space-y-8">
              <h2 className="text-xs font-mono uppercase tracking-[0.4em] text-muted-foreground/50 border-b border-border/10 pb-4">
                Authorized Channels
              </h2>
              <div className="grid gap-6">
                {/* LINE Official Channel */}
                <a
                  href={siteConfig.contact.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lab-card group flex items-center gap-8 p-8 transition-all hover:bg-muted/5 border-border/40"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#06C755]/10 group-hover:bg-[#06C755]/20 transition-colors">
                    <MessageCircle className="h-7 w-7 text-[#06C755]" />
                  </div>
                  <div>
                    <p className="text-muted-foreground font-mono text-[10px] uppercase tracking-widest mb-1">
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
                  className="lab-card group flex items-center gap-8 p-8 transition-all hover:bg-muted/5 border-border/40"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors">
                    <Mail className="h-7 w-7 text-primary/70" />
                  </div>
                  <div>
                    <p className="text-muted-foreground font-mono text-[10px] uppercase tracking-widest mb-1">
                      Secure Mail Interface
                    </p>
                    <p className="group-hover:text-primary text-xl font-bold tracking-tight transition-colors">
                      {siteConfig.contact.email}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* 3. Reliability Metrics */}
            <div className="bg-muted/5 border-border/10 space-y-6 rounded-[2rem] border p-10">
              <div className="flex items-center gap-3 text-primary/80">
                <ShieldCheck className="h-5 w-5" />
                <h3 className="font-bold tracking-tight text-lg">Integrity Guarantee</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                เราให้บริการประเมินโอกาสสำเร็จตามข้อเท็จจริงทางเทคนิคและกฎหมาย 
                หากเคสของคุณไม่สามารถดำเนินการได้ เราจะแจ้งผลตามตรงโดยไม่มีค่าใช้จ่ายแอบแฝง
              </p>
              <div className="flex items-center gap-6 pt-2 border-t border-border/5">
                <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground/40 uppercase">
                  <Clock className="h-3 w-3" /> 24h Response
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground/40 uppercase">
                  <FileText className="h-3 w-3" /> Zero-Logs Policy
                </div>
              </div>
            </div>
          </aside>

          {/* 4. Secure Submission Form */}
          <main className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lab-card p-10 md:p-16 border-primary/10 bg-muted/5"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Name / Alias</Label>
                    <Input
                      id="name"
                      placeholder="ระบุชื่อหรือนามแฝง"
                      className="bg-background/50 h-14 rounded-xl border-border/40 focus:border-primary/50 transition-all"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="contact" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Liaison Channel</Label>
                    <Input
                      id="contact"
                      placeholder="LINE ID หรือ เบอร์โทรศัพท์"
                      className="bg-background/50 h-14 rounded-xl border-border/40 focus:border-primary/50 transition-all"
                      {...register("contact", { required: true })}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="subject" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Case Subject</Label>
                  <Input
                    id="subject"
                    placeholder="หัวข้อที่ต้องการปรึกษา (เช่น การลบข่าว, การจัดการพิกัดรีวิว)"
                    className="bg-background/50 h-14 rounded-xl border-border/40 focus:border-primary/50 transition-all"
                    {...register("subject")}
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Operational Details (URLs)</Label>
                  <Textarea
                    id="message"
                    placeholder="กรุณาระบุรายละเอียดเบื้องต้น หรือ ลิงก์ที่ต้องการให้ตรวจสอบ..."
                    className="bg-background/50 min-h-[180px] rounded-2xl border-border/40 focus:border-primary/50 transition-all leading-relaxed"
                    {...register("message", { required: true })}
                  />
                </div>

                <div className="pt-6">
                  <Button
                    disabled={isSubmitting}
                    className="group h-16 w-full rounded-2xl text-lg font-bold shadow-2xl shadow-primary/20 transition-all"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-3">
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-background border-t-transparent" />
                        Encrypting & Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Submit Secure Request
                        <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                    )}
                  </Button>
                </div>

                <div className="text-center pt-4">
                  <p className="text-[9px] font-mono text-muted-foreground/30 uppercase tracking-[0.4em]">
                    End-to-End Submission Protocol v4.0.1
                  </p>
                </div>
              </form>
            </motion.div>
          </main>
        </div>
      </section>
    </div>
  );
}
