const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

/**
 * 🛰️ FULL DATABASE SCANNER (UNLINK-TH)
 * ดึงข้อมูล Case ID ทั้งหมดจาก Google Sheets มาแสดงผล (JS Version)
 */
async function listAllCases() {
  try {
    const SERVICE_ACCOUNT_KEY_PATH = path.join(
      process.cwd(),
      ".gemini/configs/tokens/gen-lang-client-0584860487-d8314f2c89df.json",
    );
    const SPREADSHEET_ID = "1S4QuqkPxzuUK9NUkSBaR_12iKw-rShNEsTqpAsVuL4I";

    if (!fs.existsSync(SERVICE_ACCOUNT_KEY_PATH)) {
      console.error(
        "❌ [ERROR] Missing Service Account Key at:",
        SERVICE_ACCOUNT_KEY_PATH,
      );
      return;
    }

    const auth = new google.auth.GoogleAuth({
      keyFile: SERVICE_ACCOUNT_KEY_PATH,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // 1. หาชื่อชีตทั้งหมดก่อน
    const meta = await sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID,
    });
    const sheetName = meta.data.sheets[0].properties.title || "ชีต1";

    console.log(`📡 [CONNECT] Scanning Sheet: "${sheetName}"...`);

    // 2. ดึงข้อมูล Case IDs ทั้งหมด (Column A)
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!A2:B`,
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      console.log("ℹ️ [INFO] No case records found in this sheet.");
      return;
    }

    console.log("\n🎯 [READY] LIST OF USABLE CASE IDs:");
    console.log("------------------------------------------");
    rows.forEach((row, index) => {
      console.log(
        `${index + 1}. [ID: ${row[0]}] - Name: ${row[1] || "Classified"}`,
      );
    });
    console.log("------------------------------------------");
    console.log(`✅ Total: ${rows.length} cases found.`);
  } catch (error) {
    console.error("❌ [ERROR] Could not fetch data:", error.message);
  }
}

listAllCases();
