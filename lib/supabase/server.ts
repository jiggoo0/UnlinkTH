import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

/**
 * Supabase Client สำหรับใช้งานบน Server-side
 * จัดการเรื่อง Cookies อัตโนมัติเพื่อให้รองรับระบบ Auth และการดึงข้อมูลที่ปลอดภัย
 */
export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // การจัดการ Error เมื่อมีการเรียกใช้ใน Server Components
            // ซึ่งบางกรณีอาจจะตั้งค่า Cookie ไม่ได้ (ต้องทำใน Actions/Routes)
          }
        },
      },
    }
  )
}
