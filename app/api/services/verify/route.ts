import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

/**
 * 🛡️ VAULT VERIFICATION API (v1.0)
 * ---------------------------------------------------------
 * API สำหรับตรวจสอบสิทธิ์การเข้าถึงหน้าดาวน์โหลดเอกสาร
 * ออกแบบมาเพื่อเลี่ยงปัญหา Edge Runtime Streaming ใน Server Components
 */

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const caseId = searchParams.get("caseId");

    if (!caseId) {
      return NextResponse.json(
        { error: "Case ID is required" },
        { status: 400 }
      );
    }

    // ดึงข้อมูลจากฐานข้อมูล
    const result = await db.execute({
      sql: "SELECT id, customer_name, email, service, status, file_url FROM cases WHERE id = ? LIMIT 1",
      args: [caseId.toUpperCase()],
    });

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: `ไม่พบรหัสเคส "${caseId}" ในระบบฐานข้อมูล` },
        { status: 404 }
      );
    }

    const caseData = result.rows[0];

    return NextResponse.json({
      success: true,
      caseData: {
        id: caseData.id,
        customer_name: caseData.customer_name,
        email: caseData.email,
        service: caseData.service,
        status: caseData.status,
        file_url: caseData.file_url,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("🚨 [API_VERIFY_ERROR]:", message);
    
    return NextResponse.json(
      { error: "ระบบฐานข้อมูลขัดข้องชั่วคราว โปรดลองใหม่ในภายหลัง" },
      { status: 500 }
    );
  }
}
