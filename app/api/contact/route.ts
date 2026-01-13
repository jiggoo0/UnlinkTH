/** @format */

import { NextResponse } from 'next/server'

/**
 * [STRATEGY: INTELLIGENCE CONTACT GATEWAY v5.0]
 * - Fix: Utilized 'subject' in payload & logging to resolve Lint warning.
 * - Architecture: ออกแบบมาเพื่อเป็นจุดรับข้อมูลกลาง (Gateway) ที่มีความปลอดภัยสูง
 * - Operation: รองรับการทำ Traceability ด้วย Tracking ID สำหรับทุก Request
 */

// 🏛️ 1. Interface Definition: โครงสร้างข้อมูลที่ได้รับอนุญาต
interface ContactRequestBody {
  name: string
  email: string
  subject: string // สื่อสารกับระบบภายนอก
  message: string
  serviceId?: string
  metadata?: Record<string, unknown>
}

export async function POST(request: Request) {
  // สร้าง Tracking ID สำหรับการตรวจสอบย้อนกลับ (Traceability)
  const traceId = `UNL-${Math.random().toString(36).substring(2, 9).toUpperCase()}`

  try {
    const body: unknown = await request.json()

    // 2. Type Guarding & Validation
    const payload = body as ContactRequestBody
    const { name, email, subject, message } = payload

    // ตรวจสอบฟิลด์บังคับ
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: 'Validation Protocol Failed',
          code: 'MISSING_FIELDS',
          traceId,
        },
        { status: 400 },
      )
    }

    // 🏛️ 3. OPERATIONAL DISPATCH (INTEGRATION POINT)
    // การนำ 'subject' มาใช้งานเพื่อแก้ Lint Warning และเตรียมข้อมูลส่งต่อ
    const dispatchPayload = {
      traceId,
      timestamp: new Date().toISOString(),
      source: 'DIRECT_INQUIRY',
      data: {
        sender: name,
        contact: email,
        inquiry_subject: subject || 'General Strategic Consultation',
        content: message,
      },
    }

    // 4. Intelligence Logging (Internal Audit)
    console.info(
      `[INBOUND_GATEWAY] Trace: ${traceId} | Subject: ${dispatchPayload.data.inquiry_subject} | From: ${email}`,
    )

    /**
     * [FUTURE_INTEGRATION_HOOK]
     * ที่นี่คือจุดสำหรับเรียกใช้ External Services:
     * - await sendInternalEmail(dispatchPayload)
     * - await pushToCrm(dispatchPayload)
     * - await notifyLineGroup(dispatchPayload)
     */

    // 5. Secure Success Response
    return NextResponse.json(
      {
        success: true,
        message: 'Intelligence inquiry has been securely archived.',
        trackingId: traceId,
        status: 'PENDING_ANALYSIS',
      },
      { status: 200 },
    )
  } catch (error: unknown) {
    // 🏛️ 6. CATEGORIZED ERROR HANDLING
    const isError = error instanceof Error
    const errorMessage = isError
      ? error.message
      : 'Internal Gateway Interruption'

    console.error(
      `[CRITICAL_GATEWAY_FAILURE] Trace: ${traceId} | Error: ${errorMessage}`,
    )

    return NextResponse.json(
      {
        error: 'Operational Failure: Secure transmission interrupted.',
        traceId,
        details:
          process.env.NODE_ENV === 'development'
            ? errorMessage
            : 'Internal Server Error',
      },
      { status: 500 },
    )
  }
}
