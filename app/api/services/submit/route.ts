import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

/**
 * 🛠️ SERVICE SUBMISSION API
 * -------------------------------------------------------------------------
 * รับข้อมูลจากฟอร์ม Interactive และบันทึกลง Turso DB
 */

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { service_type, metadata, website_url } = body;

    // 🛡️ [SPAM SHIELD]: Honeypot Logic
    // website_url เป็นช่องที่คนทั่วไปไม่เห็น ถ้ามีการกรอกเข้ามา แสดงว่าเป็น Bot
    if (website_url) {
      console.warn("🚫 [SPAM DETECTED]: Bot submission blocked.");
      return NextResponse.json({ error: "Access Denied" }, { status: 403 });
    }

    if (!service_type || !metadata) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const id = `UK-${crypto.randomUUID().substring(0, 8).toUpperCase()}`;
    const status = body.is_draft ? "draft_lead" : "pending";

    // 1. บันทึกลง Turso DB (service_requests)
    await db.execute({
      sql: "INSERT INTO service_requests (id, service_type, status, metadata) VALUES (?, ?, ?, ?)",
      args: [id, service_type, status, JSON.stringify(metadata)],
    });

    // 2. สร้าง Case ในตาราง 'cases' เพื่อรองรับ Lead Capture และ Verification
    const isDocumentService = [
      "hotel-booking",
      "flight-itinerary",
      "express-bus-ticket",
    ].includes(service_type);

    if (isDocumentService) {
      const { guestName, firstName, lastName, passengerName, email, provider } =
        metadata;
      const customerName =
        guestName ||
        (firstName ? `${firstName} ${lastName}` : null) ||
        passengerName ||
        "Lead Customer";
      const amount = metadata.amount || 590;

      await db.execute({
        sql: "INSERT INTO cases (id, customer_name, email, service, amount, status, provider, metadata) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        args: [
          id,
          customerName,
          email || "lead@unlink-th.com",
          service_type,
          amount,
          status,
          provider || "GENERAL",
          JSON.stringify(metadata),
        ],
      });
    }

    // 3. Mock LINE Notification
    console.log(`🔔 [MOCK LINE BOT] New Service Request!
ID: ${id}
Type: ${service_type}
Data: ${JSON.stringify(metadata, null, 2)}
-------------------------------------------`);

    return NextResponse.json({
      success: true,
      id,
      message: "Request received and logged.",
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
