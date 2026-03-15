import { NextRequest, NextResponse } from "next/server";
import { sendTicketEmail } from "@/lib/email";

/**
 * 🧪 SYSTEM DEBUG: EMAIL TESTER
 * -------------------------------------------------------------------------
 * ทดสอบการส่งอีเมล 3 บริการหลักเข้าอีเมลที่กำหนด
 */

export async function GET() {
  const testEmail = "jiggoo217@gmail.com";
  
  const tests = [
    {
      title: "Flight Itinerary Receipt Generator",
      id: "UK-TEST-FLIGHT-999",
      amount: 490
    },
    {
      title: "Luxury Hotel Booking Alignment",
      id: "UK-TEST-HOTEL-888",
      amount: 590
    },
    {
      title: "Express Bus E-Ticket Hub",
      id: "UK-TEST-BUS-777",
      amount: 450
    }
  ];

  try {
    const results = [];
    
    for (const test of tests) {
      const res = await sendTicketEmail(testEmail, {
        customerName: "คุณผู้ทดสอบระบบ (Test User)",
        caseId: test.id,
        amount: test.amount,
        serviceTitle: test.title
      });
      results.push({ service: test.title, success: res.success });
    }

    return NextResponse.json({
      message: "Test emails dispatched to " + testEmail,
      details: results
    });
  } catch (error) {
    console.error("Test Email Error:", error);
    return NextResponse.json({ error: "Failed to dispatch tests" }, { status: 500 });
  }
}
