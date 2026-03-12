"use server";

import { getCaseStatus } from "./google-sheets";

/**
 * 🕵️ ACTION: SEARCH CASE STATUS
 * รับ CaseID จากหน้าบ้าน และดึงผลลัพธ์จาก Google Sheets
 */
export async function searchCaseAction(formData: FormData) {
  const caseId = formData.get("caseId") as string;
  if (!caseId) return { error: "กรุณาระบุหมายเลขเคส" };

  const data = await getCaseStatus(caseId);
  return data;
}
