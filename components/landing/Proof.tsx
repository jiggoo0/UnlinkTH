import ProtocolStepper from "@/components/shared/ProtocolStepper"
import { Typography } from "@/components/ui/typography"

/**
 * Proof Section: แสดงขั้นตอนการทำงาน (Protocol)
 * เพื่อสร้างความมั่นใจ (Social Proof) ให้กับลูกค้า
 */
export default function Proof() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        {/* Header ส่วนหัวข้อ ใช้ Typography system */}
        <div className="mb-16 text-center">
          <Typography
            variant="h2"
            className="text-3xl font-bold tracking-tight text-slate-900"
          >
            ขั้นตอนการรับงาน
          </Typography>
          <Typography
            variant="p"
            className="mx-auto mt-4 max-w-2xl text-slate-600"
          >
            โปร่งใส ตรวจสอบได้ และรักษาความลับเป็นอันดับหนึ่ง
            เพื่อให้คุณมั่นใจในทุกกระบวนการแก้ไขปัญหาออนไลน์
          </Typography>
        </div>

        {/* Content Area */}
        <div className="mx-auto max-w-4xl">
          {/* ✅ เรียกใช้ ProtocolStepper แบบ Default Import */}
          <ProtocolStepper />

          {/* Call to Action Box / Quote */}
          <div className="mt-16 rounded-3xl bg-slate-900 p-10 text-center text-white shadow-xl ring-1 ring-slate-800">
            <Typography
              variant="h3"
              className="mb-3 border-none pb-0 text-2xl font-semibold text-white italic"
            >
              "เราเชื่อว่าทุกคนมีโอกาสเริ่มต้นใหม่"
            </Typography>
            <Typography variant="p" className="mt-0 text-slate-400">
              ชื่อเสียงของคุณคือสมบัติที่สำคัญที่สุด ให้ Unlink-TH
              ช่วยดูแลและปกป้องความเป็นส่วนตัวของคุณ
            </Typography>

            {/* คุณสามารถเพิ่มปุ่มติดต่อด้านล่างนี้ได้ในอนาคต */}
          </div>
        </div>
      </div>
    </section>
  )
}
