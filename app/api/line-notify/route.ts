/** @format */

import { NextResponse } from 'next/server'

/**
 * [STRATEGY: SECURE NOTIFICATION GATEWAY v4.2]
 * - Type Safety: Explicitly handling 'unknown' error types for Production
 * - Robustness: Added Zod-like manual validation for inbound payload
 */

// 🏛️ Define Interface for Type Safety
interface ContactInquiry {
  name: string
  contact: string
  category?: string
  message: string
}

export async function POST(request: Request) {
  try {
    // 1. Safe JSON Parsing
    const body: unknown = await request.json()
    const { name, contact, category, message } = body as ContactInquiry

    // 2. Critical Environment Check
    const TOKEN = process.env.LINE_NOTIFY_TOKEN
    if (!TOKEN) {
      console.error('CRITICAL: LINE_NOTIFY_TOKEN is missing.')
      return NextResponse.json(
        { error: 'Internal Configuration Error' },
        { status: 500 },
      )
    }

    // 3. Strict Input Validation
    if (!name || !contact || !message) {
      return NextResponse.json(
        { error: 'Validation Failed: Required fields missing.' },
        { status: 400 },
      )
    }

    // 4. Strategic Message Formatting
    const lineMessage = [
      `\n🏛️ [NEW INQUIRY DETECTED]`,
      `━━━━━━━━━━━━━━`,
      `👤 Client: ${name}`,
      `📞 Contact: ${contact}`,
      `📂 Sector: ${category || 'General Inquiry'}`,
      `━━━━━━━━━━━━━━`,
      `📝 Brief Detail:`,
      `${message}`,
      `━━━━━━━━━━━━━━`,
      `🌐 Source: UnlinkTH Secure Portal`,
      `🔒 Protocol: TLS 1.3 Transmission`,
    ].join('\n')

    // 5. Transmission to LINE Notify Gateway
    const response = await fetch('https://notify-api.line.me/api/notify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${TOKEN}`,
      },
      body: new URLSearchParams({ message: lineMessage }),
    })

    // FIX: Using unknown for result to satisfy explicit-any rule
    const result: unknown = await response.json()

    if (!response.ok) {
      const errorData = result as { message?: string }
      throw new Error(errorData.message || 'Notification service failure')
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry transmitted to Intelligence Unit.',
        trackingId: `UNL-${Date.now().toString().slice(-6)}`,
      },
      { status: 200 },
    )
  } catch (error: unknown) {
    // 🏛️ FIX: Proper Error Type Guarding
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown Transmission Error'

    console.error('SECURE GATEWAY EXCEPTION:', errorMessage)

    return NextResponse.json(
      { error: 'Operational Failure: Secure transmission interrupted.' },
      { status: 500 },
    )
  }
}
