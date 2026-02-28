/**
 * [TEST]: SCHEMA_INTEGRITY_VERIFICATION
 * [STRATEGY]: Validate generated JSON-LD graphs for SEO compliance.
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { generateSchemaGraph } from "../lib/schema"
import { validateSchemaIntegrity } from "../lib/schema-validator"

function runSchemaTest() {
  console.log("--- [01]: GENERATING GLOBAL SCHEMA GRAPH ---")
  const graph = generateSchemaGraph([])

  console.log("--- [02]: VALIDATING SCHEMA INTEGRITY ---")
  const report = validateSchemaIntegrity(graph)

  if (!report.isValid) {
    console.error("[CRITICAL_FAILURE]: Schema validation failed!")
    report.errors.forEach((err: string) => console.error(`  - ERROR: ${err}`))
    process.exit(1)
  }

  console.log("[SUCCESS]: Schema Integrity Verified (100% Stability).")
  if (report.warnings.length > 0) {
    report.warnings.forEach((warn: string) =>
      console.warn(`  - WARNING: ${warn}`)
    )
  }
}

runSchemaTest()
