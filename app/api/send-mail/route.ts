import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    // ✅ นำไปใช้งานเบื้องต้นเพื่อให้ผ่าน Lint
    console.log('📬 Inquiry from:', body.email || 'Anonymous')

    return NextResponse.json({ success: true, message: 'Success' })
  } catch (error) {
    return NextResponse.json({ error: 'Invalid Request' }, { status: 400 })
  }
}
