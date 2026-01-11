/** @format */

import { createClient } from '@supabase/supabase-js'
import { createBrowserClient } from '@supabase/ssr'
import { Database } from '@/types/database.types'

/**
 * [STRATEGY: SUPABASE INSTANCE MANAGEMENT]
 * - แยกการใช้งานระหว่าง Browser และ Server Environment
 * - ใช้ Type-safety จาก database.types.ts เพื่อป้องกัน Runtime Error
 */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// 1. 🌐 Singleton Client สำหรับ Client-side Components (Standard)
// เหมาะสำหรับกรณีทั่วไปที่ไม่ได้ใช้ SSR แบบซับซ้อน
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

// 2. 🛡️ Browser Client สำหรับ Next.js Auth & SSR (@supabase/ssr)
// แนะนำให้ใช้ตัวนี้ใน "use client" components เพื่อให้รองรับ Cookie-based Auth
export const createClientComponentClient = () =>
  createBrowserClient<Database>(supabaseUrl, supabaseAnonKey)

/**
 * หมายเหตุ:
 * สำหรับ Server Components (app/(main)/services/page.tsx ฯลฯ)
 * ควรสร้างไฟล์แยกไว้ใน lib/supabase/server.ts
 * เนื่องจากต้องมีการจัดการ Cookies ที่ฝั่ง Server
 */
