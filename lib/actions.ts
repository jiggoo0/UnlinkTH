/** @format */

"use server";

import { db } from "./db";
import { sendTicketEmail, sendAdminAlertEmail } from "./email";
import { sendAdminLineNotification } from "./line";
import { revalidatePath } from "next/cache";
import { updateCaseStatus } from "./google-sheets";

import { put } from "@vercel/blob";
import { verifySlip } from "./payment";

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

    // [AUTOMATED-SYNC]: Update Google Sheets Status (Step 2)
    try {
      await updateCaseStatus(caseId, {
        step2: "Document Prepared",
        currentPhase: "Finalizing Document",
        progress: 85,
      });
    } catch (sheetError) {
      console.warn("⚠️ [SHEETS-SYNC-ERROR]:", sheetError);
    }

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
      throw new Error(
        "ระบบรองรับเฉพาะไฟล์รูปภาพ (JPG, PNG) หรือ PDF เท่านั้นครับ",
      );
    }

    // 1. Fetch current case data for notification context
    const caseResult = await db.execute({
      sql: "SELECT * FROM cases WHERE id = ?",
      args: [caseId],
    });

    if (caseResult.rows.length === 0) {
      throw new Error("ไม่พบข้อมูลเคสที่ระบุครับ");
    }
    const caseData = caseResult.rows[0] as unknown as LiaisonCase;

    // 2. Upload to Vercel Blob (slips folder)
    const blob = await put(`slips/${caseId}-${Date.now()}-${file.name}`, file, {
      access: "public",
      addRandomSuffix: true,
    });

    // 3. Update Database with Slip URL
    await db.execute({
      sql: "UPDATE cases SET slip_url = ?, status = 'pending_verification' WHERE id = ?",
      args: [blob.url, caseId],
    });

    // [AUTOMATED-PAYMENT]: Verify Slip via SlipOK API
    try {
      await verifySlip({ data: blob.url });
    } catch (payErr) {
      console.warn("⚠️ [PAYMENT-VERIFY-ERROR]:", payErr);
    }

    // 4. [ADMIN-NOTIFICATION]: Notify admin about new slip
    try {
      // Send Email Notification
      await sendAdminAlertEmail({
        customerName: caseData.customer_name,
        caseId: caseData.id,
        amount: caseData.amount,
        serviceTitle: caseData.service,
        slipUrl: blob.url,
      });

      // Send LINE Notification (Flex Message)
      await sendAdminLineNotification({
        customerName: caseData.customer_name,
        caseId: caseData.id,
        amount: caseData.amount,
        serviceTitle: caseData.service,
        slipUrl: blob.url,
      });
    } catch (notifError) {
      console.warn("⚠️ [ADMIN-NOTIF-ERROR]:", notifError);
    }

    // 5. [AUTOMATED-SYNC]: Update Google Sheets Status (Step 1 + Slip URL)
    try {
      await updateCaseStatus(caseId, {
        step1: "Verifying Payment",
        mainStatus: "Pending Verification",
        progress: 40,
        slipUrl: blob.url,
      });
    } catch (sheetError) {
      console.warn("⚠️ [SHEETS-SYNC-ERROR]:", sheetError);
    }

    revalidatePath("/admin/liaison");
    revalidatePath("/payment-verify");
    return { success: true, url: blob.url };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "การอัปโหลดสลิปล้มเหลว";
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

    // [AUTOMATED-SYNC]: Update Google Sheets Status
    try {
      await updateCaseStatus(caseId, {
        step1: "Payment Confirmed",
        mainStatus: "Dispatched / Complete",
        progress: 100,
      });
    } catch (sheetError) {
      console.warn("⚠️ [SHEETS-SYNC-ERROR]:", sheetError);
      // We don't throw here to avoid failing the whole action if sheets fail
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
