/** @format */

import { MainLayout } from '@/components/layout/MainLayout'
import { Suspense } from 'react'

export default function GenericMainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense
      fallback={
        <div className="font-thai fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-4 bg-white">
          {/* ปรับขนาดและสีให้ดูเป็นมิตรและนิ่งนวล (Premium Loading) */}
          <div className="h-1.5 w-20 animate-pulse rounded-full bg-blue-600/20">
            <div className="h-full w-1/2 rounded-full bg-blue-600" />
          </div>
          <div className="text-center">
            <p className="text-sm font-bold text-slate-700">
              ยินดีต้อนรับสู่ Unlink Thailand
            </p>
            <p className="mt-1 text-xs text-slate-400">
              กำลังเตรียมข้อมูลที่ปลอดภัยสำหรับคุณ...
            </p>
          </div>
        </div>
      }
    >
      {/* ✅ ทำหน้าที่หุ้มเฉพาะหน้าเว็บในกลุ่ม (main) ด้วย Header/Footer หลัก */}
      <MainLayout>{children}</MainLayout>
    </Suspense>
  )
}
