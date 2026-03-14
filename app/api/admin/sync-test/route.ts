/** @format */

import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import crypto from "crypto";

/**
 * 🔐 SECURE CASE SYNC (AI-DRIVEN INTERNAL USE ONLY)
 * ---------------------------------------------------------
 * ใช้สำหรับซ่อมแซมและซิงค์ข้อมูลเคสจำลองให้สามารถทดสอบดาวน์โหลดได้จริง
 */

export async function GET() {
  const caseId = "UK-" + crypto.randomBytes(3).toString("hex").toUpperCase();
  const email = "jiggoo217@gmail.com";
  const customerName = "AEMDEVWEB (AI-Sync Verified)";

  try {
    await db.execute({
      sql: "INSERT INTO cases (id, customer_name, email, service, amount, status, file_url) VALUES (?, ?, ?, ?, ?, ?, ?)",
      args: [
        caseId,
        customerName,
        email,
        "Premium Liaison Strategy Record",
        15900,
        "approved",
        "https://6rxl7m3un9ly8v1n.public.blob.vercel-storage.com/liaison/sample-document.pdf",
      ],
    });

    return NextResponse.json({
      status: "success",
      message: `Case ${caseId} has been synced and verified in Turso.`,
      url: `https://www.unlink-th.com/download-vault?caseId=${caseId}`,
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json(
      { status: "error", error: errorMessage },
      { status: 500 },
    );
  }
}
