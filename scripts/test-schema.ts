/** @format */

import { generateSchemaGraph } from "../lib/schema"
import { validateSchemaIntegrity } from "../lib/schema-validator"

/**
 * UNLINK-TH | SEO Schema Testing Routine
 * -------------------------------------------------------------------------
 * รันเพื่อตรวจสอบว่า Schema.org JSON-LD ที่สร้างขึ้นมานั้นถูกต้องและไม่มีข้อผิดพลาด
 * ก่อนทำการ Build
 */
async function runSchemaTest() {
  console.log("-----------------------------------------")
  console.log("🔍 Running SEO Schema Integrity Check...")
  console.log("-----------------------------------------")

  try {
    const schemaGraph = generateSchemaGraph()
    const report = validateSchemaIntegrity(schemaGraph)

    if (!report.isValid) {
      console.error("❌ Schema Validation Failed:")
      report.errors.forEach((err) => console.error(`  - ERROR: ${err}`))
      process.exit(1)
    }

    if (report.warnings.length > 0) {
      console.warn("⚠️ Schema Validation Warnings:")
      report.warnings.forEach((warn) => console.warn(`  - WARN: ${warn}`))
    }

    console.log("✅ Schema Integrity: PASSED")
    console.log("-----------------------------------------")
  } catch (error) {
    console.error("❌ Unexpected Error during Schema Testing:", error)
    process.exit(1)
  }
}

runSchemaTest()
