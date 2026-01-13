/** @format */

import { MainLayout } from '@/components/layout/MainLayout'
import { Suspense } from 'react'

/**
 * [STRATEGY: LAYOUT ENCAPSULATION v5.2]
 * - UX: ใช้ Premium Skeleton Loading แทน Spinner ทั่วไปเพื่อความรู้สึกที่มั่นคง (Stability)
 * - Architecture: รองรับ Streaming SSR ของ Next.js 14+ อย่างสมบูรณ์ผ่าน Suspense
 * - Performance: Fallback UI ถูกออกแบบให้มีขนาดเล็กที่สุด (Critical Path Optimization)
 */

export default function GenericMainLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <Suspense fallback={<PremiumLoadingScreen />}>
      {/* 🏛️ ทำหน้าที่หุ้มหน้าเว็บกลุ่ม (main) ด้วย Header/Footer และ Layout พื้นฐาน */}
      <MainLayout>{children}</MainLayout>
    </Suspense>
  )
}

/** 🛡️ Internal Loading Component: ยกระดับความน่าเชื่อถือตั้งแต่วินาทีแรก */
function PremiumLoadingScreen() {
  return (
    <div className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white dark:bg-slate-950">
      {/* 🧩 Technical Indicator Bar */}
      <div className="relative h-1 w-32 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-900">
        <div className="absolute h-full w-full origin-left animate-[loading-bar_1.5s_infinite_ease-in-out] bg-gradient-to-r from-blue-600 to-indigo-600" />
      </div>

      <div className="mt-8 flex flex-col items-center gap-2">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          <p className="font-mono text-[10px] font-black tracking-[0.4em] text-slate-900 uppercase dark:text-white">
            Unlink Thailand
          </p>
        </div>
        <p className="font-thai text-[13px] font-bold text-slate-400">
          กำลังเตรียมระบบการจัดการข้อมูลที่ปลอดภัย...
        </p>
      </div>

      {/* 🏛️ Authentication Badge Footer */}
      <div className="absolute bottom-12 flex items-center gap-3 opacity-20 transition-opacity hover:opacity-100">
        <span className="font-mono text-[9px] font-black tracking-[0.3em] text-slate-400 uppercase">
          Secure Environment Established
        </span>
      </div>
    </div>
  )
}
