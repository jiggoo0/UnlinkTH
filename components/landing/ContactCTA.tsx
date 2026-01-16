import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { siteConfig } from "@/constants/site-config"
import { MessageCircle, ShieldCheck, ArrowRight } from "lucide-react"

/**
 * ContactCTA: ส่วนปิดการขายท้ายหน้า
 * ออกแบบมาเพื่อกระตุ้นการตัดสินใจด้วยความรู้สึกปลอดภัยและเป็นมืออาชีพ
 */
export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background with Gradient and Pattern */}
      <div className="absolute inset-0 bg-blue-600">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="mx-auto max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-blue-50 ring-1 ring-white/20 ring-inset">
            <ShieldCheck className="mr-2 h-4 w-4 text-blue-200" />
            ประเมินเคสเบื้องต้นฟรี โดยทีมงานมืออาชีพ
          </div>

          <Typography
            variant="h2"
            className="mb-6 border-none pb-0 text-3xl font-bold text-white md:text-4xl"
          >
            พร้อมให้เราดูแล <br className="hidden sm:block" />
            ความปลอดภัยของชื่อเสียงคุณหรือยัง?
          </Typography>

          <Typography
            variant="p"
            className="mb-10 text-lg text-blue-100 opacity-90"
          >
            เพียงส่งรายละเอียดหรือลิงก์ที่มีปัญหามาให้เราทาง Line
            ทีมงานผู้เชี่ยวชาญจะวิเคราะห์
            และแนะนำแนวทางการจัดการที่เหมาะสมที่สุดให้ทันที
          </Typography>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="group h-16 px-10 text-xl font-bold text-blue-700 shadow-2xl transition-all hover:scale-105 hover:bg-white"
              asChild
            >
              <a
                href={siteConfig.contact.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <MessageCircle className="mr-2 h-6 w-6 fill-current" />
                ปรึกษาทาง LINE (ฟรี)
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-2 text-blue-100/80">
            <p className="text-sm italic">
              *
              ข้อมูลและการสนทนาทั้งหมดจะถูกเก็บเป็นความลับสูงสุดภายใต้ข้อตกลงการรักษาความปลอดภัย
            </p>
            <div className="flex gap-4 text-xs font-medium tracking-widest uppercase">
              <span>Confidential</span>
              <span className="opacity-30">|</span>
              <span>Fast Response</span>
              <span className="opacity-30">|</span>
              <span>Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
