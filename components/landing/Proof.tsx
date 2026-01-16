import ProtocolStepper from "@/components/shared/ProtocolStepper"
import { Typography } from "@/components/ui/typography"

/**
 * Proof Section: แสดงขั้นตอนการทำงาน (Workflow Protocol)
 * ใช้เพื่อสร้าง Trust และ Social Proof ให้กับแบรนด์ Unlink-TH
 */
export default function Proof() {
  return (
    <section id="process-steps" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        {/* --- Section Header --- */}
        <div className="mb-16 flex flex-col items-center text-center">
          <Typography
            variant="h2"
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            ขั้นตอนการรับงาน
          </Typography>
          <Typography
            variant="p"
            className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600"
          >
            โปร่งใส ตรวจสอบได้ และรักษาความลับเป็นอันดับหนึ่ง
            เพื่อให้คุณมั่นใจในทุกกระบวนการแก้ไขปัญหาออนไลน์กับเรา
          </Typography>
        </div>

        {/* --- Workflow Content Area --- */}
        <div className="mx-auto max-w-4xl">
          {/* Component แสดงขั้นตอน 1-2-3-4 */}
          <div className="rounded-3xl border border-slate-50 bg-slate-50/50 p-8 sm:p-12">
            <ProtocolStepper />
          </div>

          {/* --- Brand Philosophy & CTA --- */}
          <div className="relative mt-16 overflow-hidden rounded-3xl bg-slate-900 p-10 text-center shadow-2xl ring-1 ring-slate-800 sm:p-16">
            {/* Background Decor */}
            <div className="absolute inset-0 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-10">
              <svg aria-hidden="true" className="h-full w-full">
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M0 40V.5H40"
                      fill="none"
                      stroke="currentColor"
                    ></path>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)"></rect>
              </svg>
            </div>

            <div className="relative z-10">
              <Typography
                variant="h3"
                className="mb-4 border-none pb-0 text-2xl font-bold text-white italic sm:text-3xl"
              >
                "เราเชื่อว่าทุกคนมีโอกาสเริ่มต้นใหม่"
              </Typography>
              <Typography
                variant="p"
                className="mx-auto max-w-xl text-lg text-slate-400"
              >
                ชื่อเสียงของคุณคือสมบัติที่สำคัญที่สุด ให้ Unlink-TH
                ช่วยดูแลและปกป้องความเป็นส่วนตัวของคุณอย่างมืออาชีพ
              </Typography>

              {/* ตัวอย่างปุ่มติดต่อที่สามารถเปิดใช้งานได้ในอนาคต */}
              <div className="mt-8 flex justify-center">
                <div className="h-1 w-12 rounded-full bg-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
