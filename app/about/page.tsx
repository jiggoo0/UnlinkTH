import { Typography } from "@/components/ui/typography"
import ProtocolStepper from "@/components/shared/ProtocolStepper"
import { ShieldCheck, Target, Users } from "lucide-react"

export const metadata = {
  title: "เกี่ยวกับเรา | Unlink-TH ผู้เชี่ยวชาญด้านการจัดการข้อมูลออนไลน์",
  description:
    "ทำความรู้จักกับ Unlink-TH ทีมงานที่พร้อมปกป้องชื่อเสียงดิจิทัลของคุณด้วยกฎหมายและเทคโนโลยี",
}

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-20">
      {/* Hero Section */}
      <section className="mx-auto mb-20 max-w-4xl text-center">
        <Typography
          variant="h1"
          className="mb-6 text-4xl font-extrabold md:text-5xl"
        >
          กู้คืนชื่อเสียง ปกป้องข้อมูล <br />
          <span className="text-blue-600">ด้วยมาตรฐานระดับมืออาชีพ</span>
        </Typography>
        <Typography
          variant="p"
          className="text-xl leading-relaxed text-slate-600"
        >
          Unlink-TH
          เกิดขึ้นจากความตั้งใจที่จะช่วยเหลือผู้ที่ได้รับผลกระทบจากข้อมูลที่ไม่ถูกต้อง
          ข่าวปลอม หรือข้อมูลส่วนตัวที่ถูกเปิดเผยโดยไม่ยินยอมบนโลกออนไลน์
        </Typography>
      </section>

      {/* Core Values */}
      <section className="mb-24 grid gap-8 md:grid-cols-3">
        {[
          {
            icon: <ShieldCheck size={40} />,
            title: "ความปลอดภัยสูง",
            desc: "ข้อมูลของลูกค้าถูกเก็บเป็นความลับสูงสุดตามมาตรฐานสากล",
          },
          {
            icon: <Target size={40} />,
            title: "แก้ปัญหาตรงจุด",
            desc: "วิเคราะห์เคสรายบุคคลเพื่อเลือกวิธีที่เห็นผลรวดเร็วที่สุด",
          },
          {
            icon: <Users size={40} />,
            title: "ทีมงานมืออาชีพ",
            desc: "ประกอบด้วยผู้เชี่ยวชาญด้าน SEO กฎหมาย PDPA และการเจรจา",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-2xl border bg-white p-8 text-center shadow-sm transition-all hover:shadow-md"
          >
            <div className="mb-4 flex justify-center text-blue-600">
              {item.icon}
            </div>
            <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
            <p className="text-slate-600">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Protocol Section */}
      <section className="mb-24 rounded-3xl bg-slate-50 p-10 md:p-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            ขั้นตอนการดำเนินงานที่โปร่งใส
          </h2>
          <p className="text-slate-500">
            เรายึดมั่นในกระบวนการที่ตรวจสอบได้และปลอดภัยต่อลูกค้า
          </p>
        </div>
        <ProtocolStepper />
      </section>
    </main>
  )
}
