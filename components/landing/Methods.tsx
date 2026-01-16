"use client"

import React from "react"
import Link from "next/link"
import { Typography } from "@/components/ui/typography"
import { servicesData } from "@/constants/services-data"
import ServiceCard from "@/components/shared/ServiceCard"

/**
 * 🛠️ Define Service Item Interface
 * กำหนด Union Type สำหรับ iconName ให้ตรงกับที่ ServiceCard กำหนดไว้
 * เพื่อให้ TypeScript มั่นใจว่าข้อมูลที่จะส่งไปนั้นถูกต้อง 100%
 */
interface ServiceItem {
  id: string | number
  title: string
  slug: string
  shortDescription: string
  suitableFor: string[]
  iconName: "remove" | "legal" | "seo" | "consult" | "audit" | "default"
  imageUrl?: string
}

/**
 * Methods Section (หน้าแรก):
 * ✅ แก้ไข: กำจัด Error TS2322 โดยระบุ Literal Types ให้ iconName
 * ✅ แก้ไข: กำจัด Error any โดยใช้ Typed Interface แทน
 */
export default function Methods() {
  // เลือกแสดงเฉพาะบริการหลัก 3 รายการแรก และทำการ Cast Type อย่างปลอดภัย
  const displayServices = (servicesData as ServiceItem[]).slice(0, 3)

  return (
    <section
      id="methods"
      className="border-y border-slate-100 bg-slate-50/50 py-24 sm:py-32"
    >
      <div className="container mx-auto px-4">
        {/* --- Section Header --- */}
        <div className="mb-16 flex flex-col items-center text-center">
          <Typography
            variant="h2"
            className="mb-4 border-none pb-0 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl"
          >
            แนวทางการจัดการข้อมูลออนไลน์
          </Typography>
          <Typography
            variant="p"
            className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600"
          >
            เราวิเคราะห์เคสต่อเคส เพื่อเลือกทางออกที่ปลอดภัย ถูกหลักกฎหมาย
            และเห็นผลลัพธ์ที่ยั่งยืนที่สุดสำหรับการเริ่มต้นชีวิตใหม่ของคุณ
          </Typography>
        </div>

        {/* --- Services Grid --- */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayServices.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group block h-full outline-none"
            >
              <ServiceCard
                title={service.title}
                description={service.shortDescription}
                // แสดงเฉพาะ 2 หมวดหมู่แรกเพื่อความสวยงาม
                suitableFor={service.suitableFor.slice(0, 2)}
                /**
                 * ✅ ตอนนี้ไม่ต้องใช้ 'as any' แล้ว 
                 * เพราะ Type ของ ServiceItem.iconName ตรงกับ ServiceCardProps.iconName
                 */
                iconName={service.iconName}
                imageUrl={service.imageUrl}
              />
            </Link>
          ))}
        </div>

        {/* --- View All Services Button --- */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-black text-slate-900 shadow-sm transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 active:scale-95"
          >
            ดูบริการทั้งหมดของเรา
            <svg
              width="18"
              height="18"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
