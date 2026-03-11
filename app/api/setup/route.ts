export const dynamic = "force-dynamic";

import { initDb } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // ในโปรดักชันควรมีการเช็ค Auth หรือ Token ก่อนรัน
    await initDb();
    return NextResponse.json({
      success: true,
      message: "Database tables initialized successfully",
    });
  } catch (err: unknown) {
    const error =
      err instanceof Error ? err.message : "เกิดข้อผิดพลาดในการสร้างฐานข้อมูล";
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
