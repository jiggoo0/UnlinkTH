import ServiceCard from "@/components/shared/ServiceCard" // ตรวจสอบว่าเป็น Default Import
import { servicesData } from "@/constants/services-data"
import Header from "@/components/shared/Header"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header
        title="บริการของเรา"
        description="ทางเลือกที่หลากหลายเพื่อกู้คืนชื่อเสียงออนไลน์ของคุณอย่างยั่งยืน"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              // เปลี่ยนจาก description เป็น shortDescription หรือ fullDescription ตาม data ใหม่
              description={service.shortDescription}
              suitableFor={service.suitableFor}
              iconName={service.iconName}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
