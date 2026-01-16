import { createBrowserClient } from "@supabase/ssr"

/**
 * Supabase Client สำหรับใช้งานบน Browser (Client-side)
 * ใช้สำหรับงานที่ต้องการ Interactive หรือการดึงข้อมูลหลังจากหน้าโหลดแล้ว
 */
export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
