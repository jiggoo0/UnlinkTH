import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { isAuthenticated } from "@/lib/auth";
import { LiaisonCase } from "@/lib/actions";

/**
 * 📊 ADMIN LIAISON DATA API (v1.0)
 * ---------------------------------------------------------
 * API สำหรับดึงข้อมูลเคสทั้งหมดสำหรับหน้า Admin Dashboard
 * เลี่ยงปัญหา Edge Runtime Streaming ใน Server Components
 */

export async function GET() {
  try {
    // 1. Security Check
    const auth = await isAuthenticated();
    if (!auth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. Admin Username
    const adminUsername = process.env.ADMIN_USERNAME || "Administrator";

    // 3. Fetch Cases from Turso
    const result = await db.execute(
      "SELECT * FROM cases ORDER BY created_at DESC"
    );
    const cases = result.rows as unknown as LiaisonCase[];

    // 4. Calculate Analytics
    const totalRevenue = cases.reduce((acc, curr) => acc + (curr.amount || 0), 0);
    const approvedCount = cases.filter((c) => c.status === "approved" || c.status === "CONFIRMED" || c.status === "SUCCESS").length;

    return NextResponse.json({
      success: true,
      adminUsername,
      cases,
      analytics: {
        totalRevenue,
        approvedCount,
        efficiency: cases.length > 0 ? Math.round((approvedCount / cases.length) * 100) : 0
      }
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("🚨 [API_ADMIN_DATA_ERROR]:", message);
    
    return NextResponse.json(
      { error: `Database connection failure: ${message.substring(0, 50)}` },
      { status: 500 }
    );
  }
}
