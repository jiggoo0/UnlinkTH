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
  slipUrl?: string;
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
    const SPREADSHEET_ID = "1S4QuqkPxzuUK9NUkSBaR_12iKw-rShNEsTqpAsVuL4I";
    const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

    if (!serviceAccountJson) {
      console.error("Missing GOOGLE_SERVICE_ACCOUNT_JSON environment variable");
      return { error: "System Configuration Error" };
    }

    const credentials = JSON.parse(serviceAccountJson);

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // 📍 ใช้งานชื่อแท็บจาก Environment Variable (Default: ชีต1)
    const sheetName = process.env.GOOGLE_SHEET_NAME || "ชีต1";
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!A:H`,
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

/**
 * 🛰️ GOOGLE SHEETS UPDATER
 * อัปเดตข้อมูลสถานะเคสใน Sheets อัตโนมัติ (เช่น เมื่อชำระเงินสำเร็จ)
 */
export async function updateCaseStatus(
  caseId: string,
  updates: Partial<CaseStatus>,
): Promise<{ success: boolean; message: string }> {
  try {
    const SPREADSHEET_ID = "1S4QuqkPxzuUK9NUkSBaR_12iKw-rShNEsTqpAsVuL4I";
    const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

    if (!serviceAccountJson) {
      return { success: false, message: "System Configuration Error" };
    }

    const credentials = JSON.parse(serviceAccountJson);
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const sheetName = process.env.GOOGLE_SHEET_NAME || "ชีต1";

    // 1. Find the row index
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!A:A`,
    });

    const rows = response.data.values;
    if (!rows) return { success: false, message: "No data found" };

    const rowIndex = rows.findIndex(
      (row) =>
        row[0]?.toString().toUpperCase().trim() === caseId.toUpperCase().trim(),
    );

    if (rowIndex === -1)
      return { success: false, message: "Case ID not found" };

    const sheetRowIndex = rowIndex + 1; // 1-based index

    // 2. Prepare updates (Mapping: A=0, B=1, C=2, D=3, E=4, F=5, G=6, H=7, I=8)
    // We only update columns that are provided in 'updates'
    const updatePromises = [];

    if (updates.mainStatus) {
      updatePromises.push(
        sheets.spreadsheets.values.update({
          spreadsheetId: SPREADSHEET_ID,
          range: `${sheetName}!C${sheetRowIndex}`,
          valueInputOption: "RAW",
          requestBody: { values: [[updates.mainStatus]] },
        }),
      );
    }

    if (updates.currentPhase) {
      updatePromises.push(
        sheets.spreadsheets.values.update({
          spreadsheetId: SPREADSHEET_ID,
          range: `${sheetName}!D${sheetRowIndex}`,
          valueInputOption: "RAW",
          requestBody: { values: [[updates.currentPhase]] },
        }),
      );
    }

    if (updates.progress !== undefined) {
      updatePromises.push(
        sheets.spreadsheets.values.update({
          spreadsheetId: SPREADSHEET_ID,
          range: `${sheetName}!E${sheetRowIndex}`,
          valueInputOption: "RAW",
          requestBody: { values: [[updates.progress]] },
        }),
      );
    }

    if (updates.step1) {
      updatePromises.push(
        sheets.spreadsheets.values.update({
          spreadsheetId: SPREADSHEET_ID,
          range: `${sheetName}!F${sheetRowIndex}`,
          valueInputOption: "RAW",
          requestBody: { values: [[updates.step1]] },
        }),
      );
    }

    if (updates.slipUrl) {
      updatePromises.push(
        sheets.spreadsheets.values.update({
          spreadsheetId: SPREADSHEET_ID,
          range: `${sheetName}!I${sheetRowIndex}`,
          valueInputOption: "RAW",
          requestBody: { values: [[updates.slipUrl]] },
        }),
      );
    }

    await Promise.all(updatePromises);

    return { success: true, message: "Case status updated successfully" };
  } catch (error) {
    console.error("Update Sheets Error:", error);
    return { success: false, message: "Failed to update Google Sheets" };
  }
}
