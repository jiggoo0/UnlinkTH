import { getCaseStatus } from "../lib/google-sheets";

/**
 * 🧪 LIVE CONNECTION TEST: GOOGLE SHEETS
 * ตรวจสอบว่าระบบเว็บไซต์สามารถคุยกับ Sheets ได้จริงหรือไม่
 */
async function testConnection() {
  console.log("📡 [SYSTEM] Starting connection test to Google Sheets...");
  console.log(
    "🔑 [AUTH] Using Service Account: unlink-th-601@gen-lang-client-0584860487.iam.gserviceaccount.com",
  );
  console.log(
    "📊 [TARGET] Spreadsheet ID: 1S4QuqkPxzuUK9NUkSBaR_12iKw-rShNEsTqpAsVuL4I",
  );

  // ทดสอบดึงข้อมูลแถวแรกๆ เพื่อดูว่าเชื่อมต่อสำเร็จไหม (ไม่ต้องระบุ CaseID เฉพาะเจาะจง)
  const result = await getCaseStatus("UL-0001"); // ลองสุ่ม CaseID

  if ("error" in result) {
    if (result.error === "Case ID not found") {
      console.log(
        "✅ [SUCCESS] Connection established! The system can read your spreadsheet.",
      );
      console.log(
        "ℹ️ [INFO] Note: 'UL-0001' not found, which is expected if it's not in your data.",
      );
      console.log(
        "🚀 [READY] You can now search for real CaseIDs from the website.",
      );
    } else {
      console.error("❌ [FAILURE] Connection failed:", result.error);
    }
  } else {
    console.log("🎯 [SUCCESS] Real Data Found!");
    console.log("📦 Data Sample:", JSON.stringify(result, null, 2));
  }
}

testConnection();
