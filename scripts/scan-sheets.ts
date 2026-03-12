import { google } from "googleapis";

/**
 * 🔍 SCANNER: FIND ALL SHEET NAMES
 * สแกนหาชื่อแท็บทั้งหมดในไฟล์ เพื่อหาแท็บที่ถูกต้อง
 */
async function scanSheetNames() {
  try {
    const SERVICE_ACCOUNT_KEY_PATH =
      ".gemini/configs/tokens/gen-lang-client-0584860487-d8314f2c89df.json";
    const SPREADSHEET_ID = "1S4QuqkPxzuUK9NUkSBaR_12iKw-rShNEsTqpAsVuL4I";

    const auth = new google.auth.GoogleAuth({
      keyFile: SERVICE_ACCOUNT_KEY_PATH,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const response = await sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID,
    });

    const sheetNames =
      response.data.sheets?.map((s) => s.properties?.title) || [];
    console.log("📋 [FOUND] Sheet names in your file:", sheetNames);

    if (sheetNames.length > 0) {
      console.log(
        `💡 [TIP] Please use one of these names in your code. The first one is: "${sheetNames[0]}"`,
      );
    }
  } catch (error) {
    console.error("❌ [ERROR] Could not scan sheet names:", error);
  }
}

scanSheetNames();
