/** @format */

'use client'

import React, { useEffect } from 'react'
import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'

/**
 * [STRATEGY: ANALYTICS INTELLIGENCE v2]
 * - Type Safety: แก้ไข 'any' ใน global window object
 * - Tracking precision: บันทึกการเปลี่ยนหน้าแบบ Dynamic (SPA Navigation)
 * - Load optimization: ใช้ Next.js Script component เพื่อจัดการลำดับการโหลด
 */

export function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID

  // ส่งข้อมูล page_view ทุกครั้งที่มีการเปลี่ยน URL
  useEffect(() => {
    if (GA_MEASUREMENT_ID && typeof window.gtag === 'function') {
      const url = pathname + searchParams.toString()
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      })
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID])

  if (!GA_MEASUREMENT_ID) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('⚠️ Google Analytics ID is missing in .env')
    }
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            anonymize_ip: true,
          });
        `}
      </Script>
    </>
  )
}

// ✅ FIXED: เพิ่ม Global Type Definition และระบุ Type แทนการใช้ any
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'consent',
      targetId: string,
      config?: Record<string, unknown>,
    ) => void
    dataLayer: IArguments[] | unknown[]
  }
}
