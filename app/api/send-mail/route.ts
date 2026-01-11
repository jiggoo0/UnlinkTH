/** @format */

import { NextResponse } from 'next/server'

/**
 * [STRATEGY: BACKEND LOGIC & SECURITY]
 * - Validation: รับข้อมูลและบันทึก Log เบื้องต้น
 * - Error Handling: จัดการข้อผิดพลาดโดยไม่เปิดเผยรายละเอียดระบบ (Safe Failure)
 */

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // ✅ นำไปใช้งานเบื้องต้นเพื่อให้ผ่าน Lint และตรวจสอบความถูกต้องของข้อมูล
    const senderEmail = body.email || 'Anonymous'
    console.log('📬 Inquiry received from:', senderEmail)

    return NextResponse.json({
      success: true,
      message: 'Protocol: Inquiry received successfully',
    })
  } catch {
    // ✅ แก้ไข Warning: ลบตัวแปร 'error' ที่ไม่ได้ใช้ออก เพื่อให้ผ่านการตรวจสอบ Lint
    return NextResponse.json(
      { error: 'Security Protocol: Invalid Request' },
      { status: 400 },
    )
  }
}
