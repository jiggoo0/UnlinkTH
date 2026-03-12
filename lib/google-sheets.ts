import { google } from "googleapis";

/**
 * 👑 CASE STATUS INTERFACE
 * กำหนดโครงสร้างข้อมูลให้ชัดเจนเพื่อความปลอดภัย (Type Safety)
 */
export interface CaseStatus {
  caseId: string;
  customerName: string;
  mainStatus: string;
  currentPhase: string;
  progress: number;
  step1: string;
  step2: string;
  step3: string;
}

export interface CaseStatusError {
  error: string;
}

/**
 * 🛰️ GOOGLE SHEETS CONNECTOR (SERVICE ACCOUNT)
 * ดึงข้อมูลโดยตรงจากฐานข้อมูล AppSheet/Sheets แบบ Real-time
 */
export async function getCaseStatus(
  caseId: string,
): Promise<CaseStatus | CaseStatusError> {
  try {
    const SERVICE_ACCOUNT_KEY_PATH =
      ".gemini/configs/tokens/gen-lang-client-0584860487-d8314f2c89df.json";
    const SPREADSHEET_ID = "1S4QuqkPxzuUK9NUkSBaR_12iKw-rShNEsTqpAsVuL4I";

    const auth = new google.auth.GoogleAuth({
      keyFile: SERVICE_ACCOUNT_KEY_PATH,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // 📍 ใช้งานชื่อแท็บภาษาไทย: ชีต1 (คอลัมน์ A ถึง H)
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "ชีต1!A:H",
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) return { error: "No data found" };

    const dataRows = rows.slice(1);
    const targetRow = dataRows.find(
      (row) =>
        row[0]?.toString().toUpperCase().trim() === caseId.toUpperCase().trim(),
    );

    if (!targetRow) return { error: "Case ID not found" };

    return {
      caseId: targetRow[0],
      customerName: targetRow[1],
      mainStatus: targetRow[2] || "Active",
      currentPhase: targetRow[3] || "Analyzing",
      progress: parseInt(targetRow[4]) || 0,
      step1: targetRow[5] || "Waiting",
      step2: targetRow[6] || "Waiting",
      step3: targetRow[7] || "Waiting",
    };
  } catch (error) {
    console.error("Google Sheets Error:", error);
    return { error: "System Connection Failure" };
  }
}
