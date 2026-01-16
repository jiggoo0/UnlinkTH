import ServiceCard from "@/components/shared/ServiceCard"
import { servicesData } from "@/constants/services-data"
import Header from "@/components/shared/Header"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

/**
 * 🛠️ Define Service Interface
 * ปรับปรุง iconName ให้เป็น Literal Union Type เพื่อให้ตรงกับ ServiceCardProps
 * และผ่านการตรวจสอบจากทั้ง ESLint และ TypeScript Compiler
 */
interface ServiceItem {
  id: string | number
  slug: string
  title: string
  shortDescription: string
  suitableFor: string[]
  iconName: "remove" | "legal" | "seo" | "consult" | "audit" | "default"
  imageUrl?: string
}

/**
 * ServicesPage: หน้าหลักที่รวบรวมบริการและโครงสร้างราคา
 * ✅ ผ่านการตรวจสอบ Type-check: ไม่ใช้ string ทั่วไปใน iconName
 * ✅ ผ่านการตรวจสอบ Lint: ไม่ใช้ any
 */
export default function ServicesPage() {
  // Casting ข้อมูลจาก constants ให้เป็น Type ที่ระบุเจาะจง
  const typedServices = servicesData as ServiceItem[]

  return (
    <main className="min-h-screen bg-slate-50/50 pb-20">
      <Header
        title="บริการของเรา"
        description="ทางเลือกที่หลากหลายเพื่อกู้คืนชื่อเสียงออนไลน์ของคุณอย่างยั่งยืน โดยทีมงานมืออาชีพที่เข้าใจปัญหาของคุณ"
      />

      {/* 1. ส่วน Grid แสดงรายการบริการ */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {typedServices.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group block h-full"
            >
              <ServiceCard
                title={service.title}
                description={service.shortDescription}
                suitableFor={service.suitableFor}
                // ✅ ส่งค่าโดยตรง ไม่ต้องใช้ 'as any' เพราะ Type ตรงกันแล้ว
                iconName={service.iconName}
                imageUrl={service.imageUrl || ""}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* 2. ส่วนโครงสร้างราคา (Pricing Structure) */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            โครงสร้างค่าบริการ
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            ค่าใช้จ่ายถูกประเมินตามความซับซ้อนของข้อมูลและปริมาณงานจริง
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* แผนเริ่มต้น: วิเคราะห์ฟรี */}
          <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
            <h3 className="text-xl font-bold text-slate-900">
              ปรึกษาและวิเคราะห์
            </h3>
            <div className="my-6">
              <span className="text-4xl font-black text-blue-600">0.-</span>
              <span className="ml-2 text-sm font-bold tracking-wider text-slate-400 uppercase">
                Free
              </span>
            </div>
            <ul className="mb-8 flex-1 space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                <span>วิเคราะห์เคสและความเป็นไปได้ในการจัดการ</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                <span>ตรวจสอบจุดกระจายข้อมูล (Mapping) ทั่วระบบ</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                <span>ประเมินราคาตามขอบเขตงานจริง ไม่มีค่าซ่อนเร้น</span>
              </li>
            </ul>
          </div>

          {/* แผนมาตรฐาน: จัดการรายจุด (ยอดนิยม) */}
          <div className="relative z-10 flex scale-105 flex-col rounded-3xl border-2 border-blue-600 bg-white p-8 shadow-xl shadow-blue-500/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-6 py-1 text-xs font-black tracking-widest text-white uppercase">
              ยอดนิยม
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              จัดการข้อมูลเฉพาะจุด
            </h3>
            <div className="my-6">
              <span className="text-2xl font-black text-blue-600">
                ประเมินตามจริง
              </span>
            </div>
            <ul className="mb-8 flex-1 space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                <span>ลบโพสต์ / รูปภาพ / บัญชีปลอม ที่ละเมิดสิทธิ์</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                <span>การเจรจาระดับมืออาชีพเพื่อให้นำข้อมูลออกจากระบบ</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                <span className="font-bold text-slate-900">
                  Success Fee: ชำระเมื่อผลลัพธ์สำเร็จเท่านั้น
                </span>
              </li>
            </ul>
          </div>

          {/* แผนองค์กร: บริหารชื่อเสียง */}
          <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
            <h3 className="text-xl font-bold text-slate-900">
              บริหารชื่อเสียงระยะยาว
            </h3>
            <div className="my-6">
              <span className="text-2xl font-black text-blue-600">
                Custom Plan
              </span>
            </div>
            <ul className="mb-8 flex-1 space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                <span>SEO Push: วางโครงสร้างคอนเทนต์ดีเพื่อกลบข่าวลบ</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                <span>มอนิเตอร์ชื่อเสียงและแจ้งเตือนความเสี่ยง 24/7</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                <span>แผนรับมือวิกฤต (Crisis Management) เชิงลึก</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center text-xs font-medium text-slate-400">
          * หมายเหตุ:
          ค่าบริการจะถูกนำเสนอในรูปแบบใบเสนอราคาหลังจากประเมินความซับซ้อนของเคสแล้วเท่านั้น
        </p>
      </section>

      {/* 3. ส่วนท้ายหน้า CTA */}
      <section className="container mx-auto mt-12 px-4 text-center">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-8 text-white shadow-2xl md:p-16">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]"></div>
          <h2 className="relative z-10 mb-6 text-3xl font-black md:text-5xl">
            ไม่แน่ใจว่าควรเลือกบริการไหน?
          </h2>
          <p className="relative z-10 mx-auto mb-10 max-w-2xl text-lg text-slate-400">
            ปรึกษาผู้เชี่ยวชาญของเราเพื่อรับการประเมินเบื้องต้นและวางแผนการจัดการที่เหมาะสมกับงบประมาณของคุณ
          </p>
          <div className="relative z-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-blue-600 px-12 py-4 text-lg font-black text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-blue-600/40 active:scale-95"
            >
              ขอใบเสนอราคาฟรี
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
