import { NextResponse } from 'next/server'

/**
 * [STRATEGY: SECURE NOTIFICATION GATEWAY]
 * - Protocol: รับข้อมูลจาก ContactForm และทำการ Forward เข้า LINE Notify
 * - Reliability: มีระบบ Error Handling เพื่อตอบกลับ Client อย่างแม่นยำ
 * - Security: ใช้ Environment Variables เพื่อรักษาความลับของ Token
 */

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, contact, category, message } = body

    // 1. Validation เบื้องต้น
    if (!name || !contact || !message) {
      return NextResponse.json(
        { error: 'Incomplete information. Request denied.' },
        { status: 400 },
      )
    }

    // 2. จัดรูปแบบข้อความสำหรับส่งเข้า LINE
    const lineMessage = `
🏛️ NEW INQUIRY AUTHORIZED
--------------------------
ID/Org: ${name}
Contact: ${contact}
Category: ${category}
Brief: ${message}
--------------------------
Status: SECURE ENCRYPTED
    `.trim()

    // 3. ส่งข้อมูลไปยัง LINE Notify API
    const lineResponse = await fetch('https://notify-api.line.me/api/notify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${process.env.LINE_NOTIFY_TOKEN}`,
      },
      body: new URLSearchParams({
        message: lineMessage,
      }),
    })

    if (!lineResponse.ok) {
      throw new Error('LINE Notify API failure')
    }

    return NextResponse.json(
      { success: true, message: 'Data transmitted successfully' },
      { status: 200 },
    )
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error. Please try again later.' },
      { status: 500 },
    )
  }
}
