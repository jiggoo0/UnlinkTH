import { google } from "googleapis";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SPREADSHEET_ID = "1S4QuqkPxzuUK9NUkSBaR_12iKw-rShNEsTqpAsVuL4I";
const SERVICE_ACCOUNT_KEY_PATH =
  ".gemini/configs/tokens/gen-lang-client-0584860487-d8314f2c89df.json";
const CASE_STUDIES_DIR = "content/case-studies";

async function syncCasesToSheet() {
  console.log(
    "🚀 [SYNC] Starting Case Studies synchronization to Google Sheets (Target: ชีต1)...",
  );

  try {
    const casesData: any[] = [];
    const categories = fs.readdirSync(CASE_STUDIES_DIR);

    for (const category of categories) {
      const categoryPath = path.join(CASE_STUDIES_DIR, category);
      if (fs.statSync(categoryPath).isDirectory()) {
        const files = fs
          .readdirSync(categoryPath)
          .filter((f) => f.endsWith(".mdx"));
        for (const file of files) {
          const filePath = path.join(categoryPath, file);
          const content = fs.readFileSync(filePath, "utf-8");
          const { data } = matter(content);

          casesData.push([
            data.id || file.replace(".mdx", ""),
            data.title || "Untitled",
            category.charAt(0).toUpperCase() + category.slice(1),
            data.shortDescription || "No description",
            "Active",
            new Date().toLocaleDateString(),
          ]);
        }
      }
    }

    console.log(
      `📋 [DATA] Collected ${casesData.length} cases from MDX files.`,
    );

    const auth = new google.auth.GoogleAuth({
      keyFile: SERVICE_ACCOUNT_KEY_PATH,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // ระบุชื่อแท็บ "ชีต1" ให้ชัดเจน
    const TARGET_SHEET = "ชีต1";

    const updateResponse = await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${TARGET_SHEET}!A2:F`,
      valueInputOption: "RAW",
      requestBody: { values: casesData },
    });

    console.log(
      `✅ [SUCCESS] Updated ${updateResponse.data.updatedRows} rows to '${TARGET_SHEET}' sheet.`,
    );
    console.log(
      `🔗 [LINK] View your Sheet at: https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}`,
    );
  } catch (error: any) {
    console.error("❌ [ERROR] Synchronization failed:", error.message);
  }
}

syncCasesToSheet();
