import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Typography } from "@/components/ui/typography"
import { servicesData } from "@/constants/services-data"
import { Search, Scale, MessageSquare, ShieldCheck } from "lucide-react"

/**
 * Icons mapping สำหรับบริการหลัก
 * แก้ไขปัญหา TS2339 โดยการจับคู่ iconName กับ Lucide Icons
 */
const icons = {
  negotiation: MessageSquare, // การเจรจา
  legal: Scale, // กฎหมาย/PDPA
  seo: Search, // SEO Push
  default: ShieldCheck,
}

export default function Methods() {
  return (
    <section
      id="methods"
      className="border-y border-slate-100 bg-slate-50/50 py-24"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="animate-in fade-in slide-in-from-bottom-4 mb-16 text-center duration-700">
          <Typography
            variant="h2"
            className="mb-4 border-none pb-0 text-3xl font-extrabold text-slate-900 md:text-4xl"
          >
            แนวทางการจัดการข้อมูลออนไลน์
          </Typography>
          <Typography
            variant="p"
            className="mx-auto max-w-2xl text-lg text-slate-600"
          >
            เราวิเคราะห์เคสต่อเคส เพื่อเลือกทางออกที่ปลอดภัย ถูกหลักกฎหมาย
            และเห็นผลลัพธ์ที่ยั่งยืนที่สุดสำหรับคุณ
          </Typography>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {servicesData.map((service) => {
            // ✅ แก้ไข: เปลี่ยนจาก service.icon เป็น service.iconName
            // ให้สอดคล้องกับโครงสร้างใหม่ใน constants/services-data.ts
            const IconComponent =
              icons[service.iconName as keyof typeof icons] || icons.default

            return (
              <Card
                key={service.id}
                className="group flex flex-col border-none bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardHeader className="pb-2 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-600 group-hover:text-white">
                    <IconComponent size={32} strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-xl font-bold tracking-tight text-slate-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col text-center">
                  {/* ✅ แก้ไข: เปลี่ยนจาก service.description เป็น service.shortDescription */}
                  <Typography
                    variant="p"
                    className="mt-0 mb-8 flex-1 leading-relaxed text-slate-600"
                  >
                    {service.shortDescription}
                  </Typography>

                  {/* Badge-like Suitable For info */}
                  <div className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-200 transition-colors ring-inset group-hover:bg-blue-50 group-hover:ring-blue-100">
                    <span className="mb-1 block text-xs font-bold tracking-wider text-blue-600 uppercase">
                      เหมาะสำหรับ
                    </span>
                    {service.suitableFor}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
