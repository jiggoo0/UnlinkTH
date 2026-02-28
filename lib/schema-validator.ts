/**
 * UNLINK-TH | SEO Schema Validator
 * -------------------------------------------------------------------------
 * ตรวจสอบความถูกต้องและความสมบูรณ์ของ JSON-LD Graph
 */

interface ValidationReport {
  isValid: boolean
  errors: string[]
  warnings: string[]
}

export function validateSchemaIntegrity(
  graph: Record<string, unknown>
): ValidationReport {
  const errors: string[] = []
  const warnings: string[] = []

  if (!graph) {
    errors.push("Graph is null or undefined")
  } else {
    if (graph["@context"] !== "https://schema.org") {
      errors.push("Missing or invalid @context: 'https://schema.org' required")
    }

    if (!graph["@graph"] || !Array.isArray(graph["@graph"])) {
      errors.push("Missing or invalid @graph array")
    } else {
      if (graph["@graph"].length === 0) {
        warnings.push("Graph is empty")
      }
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  }
}
