/** @format */

import { NextResponse } from "next/server";
import { checkDbConnection } from "@/lib/db";

// ✅ AI Automation Endpoint
// Route นี้ออกแบบมาเพื่อให้ AI Agent หรือ AIPC Script ทำการยิงเพื่อตรวจสอบสุขภาพของ Database
// ห้ามนำไปผูกกับ UI โดยตรงที่หน้าบ้าน
export async function GET() {
  const result = await checkDbConnection();

  if (result.success) {
    return NextResponse.json(
      {
        status: "success",
        message: "Turso Edge Database is connected successfully.",
        data: result.data,
      },
      { status: 200 },
    );
  } else {
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to connect to Turso Edge Database.",
        error: result.error,
      },
      { status: 500 },
    );
  }
}
