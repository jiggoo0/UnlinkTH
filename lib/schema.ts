/**
 * UNLINK-TH | SEO Schema Graph Generator
 * -------------------------------------------------------------------------
 * รวบรวม Schema ทั้งหมดให้อยู่ในรูปแบบ Graph (JSON-LD)
 */

import { getBrandIdentitySchema } from "./seo-schemas"

export function generateSchemaGraph(
  additionalSchemas: Record<string, unknown>[] = []
) {
  const [organization, webSite] = getBrandIdentitySchema()

  return {
    "@context": "https://schema.org",
    "@graph": [organization, webSite, ...additionalSchemas],
  }
}
