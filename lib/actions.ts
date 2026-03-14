/** @format */

"use server";

import { db } from "./db";
import { sendTicketEmail } from "./email";
import { revalidatePath } from "next/cache";

import { put } from "@vercel/blob";

/**
 * ⚡ UNLINK-GLOBAL: LIAISON SERVER ACTIONS
 * -------------------------------------------------------------------------
 */

export interface LiaisonCase {
  id: string;
  customer_name: string;
  email: string;
  service: string;
  amount: number;
  status: string;
  email_sent: number;
  file_url?: string;
  slip_url?: string;
  created_at?: string;
}

/**
 * 📂 UPLOAD FILE & ATTACH TO CASE
 */
export async function uploadFileAction(caseId: string, formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file) {
      throw new Error("No file selected");
    }

    if (file.type !== "application/pdf") {
      throw new Error("Only PDF documents are permitted for security");
    }

    // Upload to Vercel Blob
    const blob = await put(`liaison/${caseId}-${file.name}`, file, {
      access: "public",
      addRandomSuffix: true,
    });

    // Update Database with File URL
    await db.execute({
      sql: "UPDATE cases SET file_url = ? WHERE id = ?",
      args: [blob.url, caseId],
    });

    revalidatePath("/admin/liaison");
    return { success: true, url: blob.url };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "File upload failed";
    console.error("🚨 [UPLOAD ERROR]:", message);
    return { success: false, error: message };
  }
}

/**
 * 🧾 SUBMIT PAYMENT SLIP (CUSTOMER SIDE)
 */
export async function submitSlipAction(caseId: string, formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file) {
      throw new Error("กรุณาเลือกไฟล์สลิปเพื่อยืนยันการโอนเงินครับ");
    }

    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (!allowedTypes.includes(file.type)) {
      throw new Error("ระบบรองรับเฉพาะไฟล์รูปภาพ (JPG, PNG) หรือ PDF เท่านั้นครับ");
    }

    // Upload to Vercel Blob (slips folder)
    const blob = await put(`slips/${caseId}-${Date.now()}-${file.name}`, file, {
      access: "public",
      addRandomSuffix: true,
    });

    // Update Database with Slip URL
    await db.execute({
      sql: "UPDATE cases SET slip_url = ?, status = 'pending_verification' WHERE id = ?",
      args: [blob.url, caseId],
    });

    revalidatePath("/admin/liaison");
    revalidatePath("/payment-verify");
    return { success: true, url: blob.url };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "การอัปโหลดสลิปล้มเหลว";
    console.error("🚨 [SLIP UPLOAD ERROR]:", message);
    return { success: false, error: message };
  }
}

/**
 * 💎 APPROVE CASE & SEND EMAIL
 */
export async function approveCaseAction(caseId: string) {
  try {
    const result = await db.execute({
      sql: "SELECT * FROM cases WHERE id = ?",
      args: [caseId],
    });

    if (result.rows.length === 0) {
      return { success: false, error: "Case not found" };
    }

    const caseData = result.rows[0] as unknown as LiaisonCase;

    const emailResult = await sendTicketEmail(caseData.email, {
      customerName: caseData.customer_name,
      caseId: caseData.id,
      amount: caseData.amount,
      serviceTitle: caseData.service,
      ticketUrl: `https://www.unlink-th.com/download-vault?caseId=${caseData.id}&name=${encodeURIComponent(caseData.customer_name)}`,
    });

    if (!emailResult.success) {
      throw new Error(`Email dispatch failed: ${emailResult.error}`);
    }

    await db.execute({
      sql: "UPDATE cases SET status = 'approved', email_sent = 1 WHERE id = ?",
      args: [caseId],
    });

    revalidatePath("/admin/liaison");
    return { success: true, message: "Liaison dispatched successfully" };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("🚨 [ACTION ERROR]:", message);
    return { success: false, error: message };
  }
}
/**
 * 🛠️ CREATE CASE ACTION (SPARE PART)
 * สำหรับการสร้างเคสใหม่ผ่าน API หรือ Admin UI ในอนาคต
 */
/*
export async function createCaseAction(data: LiaisonCase) {
  try {
    await db.execute({
      sql: "INSERT INTO cases (id, customer_name, email, service, amount) VALUES (?, ?, ?, ?, ?)",
      args: [
        data.id,
        data.customer_name,
        data.email,
        data.service,
        data.amount,
      ],
    });
    revalidatePath("/admin/liaison");
    return { success: true };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    return { success: false, error: message };
  }
}
*/
