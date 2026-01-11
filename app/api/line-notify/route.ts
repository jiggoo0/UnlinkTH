import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, phone, service, details } = body

    // 1. สร้าง Message สำหรับส่งเข้า Line
    const message = `
🌟 มีเคสใหม่จาก UnlinkTH!
----------------------
👤 ลูกค้า: ${name}
📞 เบอร์ติดต่อ: ${phone}
🛠 บริการ: ${service}
📝 รายละเอียด: ${details}
----------------------
ตรวจสอบข้อมูลเพิ่มเติมในระบบ Supabase
    `.trim()

    // 2. ส่งข้อมูลไปที่ Line Notify API
    const response = await fetch('https://notify-api.line.me/api/notify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${process.env.LINE_NOTIFY_TOKEN}`,
      },
      body: new URLSearchParams({ message }),
    })

    if (!response.ok) throw new Error('Line Notify Failed')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Line Error:', error)
    return NextResponse.json(
      { error: 'Failed to send notification' },
      { status: 500 },
    )
  }
}
