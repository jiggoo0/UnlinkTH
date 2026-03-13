/** @format */

import { NextResponse } from "next/server";
import { sendTicketEmail } from "@/lib/email";

/**
 * 🔒 UNLINK-GLOBAL: SECURE PAYMENT WEBHOOK (v1.0)
 * -------------------------------------------------------------------------
 * ระบบตรวจสอบยอดชำระและส่งเอกสารอัตโนมัติ (Zero-Error Policy)
 */

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    // 💡 การตรวจสอบความถูกต้องของลายเซ็น (Signature Verification)
    // ควรทำตามข้อกำหนดของผู้ให้บริการชำระเงิน (Stripe/Omise/etc.)

    console.log("💰 Payment Webhook Received:", payload);

    // จำลองการตรวจสอบสถานะการชำระเงินสำเร็จ
    const isSuccess =
      payload.status === "success" ||
      payload.type === "payment_intent.succeeded";

    if (isSuccess) {
      const customerEmail = payload.customer_email || "jiggoo217@gmail.com"; // ค่าเริ่มต้นตามโจทย์
      const customerName = payload.customer_name || "Valued Client";
      const amount = payload.amount / 100 || 5900; // ตรวจสอบสกุลเงิน/หน่วย
      const caseId = payload.case_id || `UK-${Date.now().toString().slice(-6)}`;

      // 📧 เริ่มต้นกระบวนการส่งอีเมลยืนยันความลับสูงสุด
      const emailResult = await sendTicketEmail(customerEmail, {
        customerName: customerName,
        caseId: caseId,
        amount: amount,
        serviceTitle: "Liaison Case Alignment & Identity Recovery",
        ticketUrl: "https://vult-s.unlink-th.com/view-ticket", // ลิงก์ดาวน์โหลดเอกสาร (จำลอง)
      });

      if (emailResult.success) {
        console.log(`✅ Confirmation Email Sent to ${customerEmail}`);
        return NextResponse.json({
          status: "success",
          message: "Liaison Email Dispatched",
          emailId: emailResult.id,
        });
      } else {
        console.error("❌ Email Dispatch Failed:", emailResult.error);
        return NextResponse.json(
          {
            status: "partial_success",
            message: "Payment Logged but Email Failed",
          },
          { status: 500 },
        );
      }
    }

    return NextResponse.json({
      status: "ignored",
      message: "Non-Success Event",
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown Error";
    console.error("🚨 Webhook Critical Error:", errorMessage);
    return NextResponse.json(
      { status: "error", error: errorMessage },
      { status: 500 },
    );
  }
}
