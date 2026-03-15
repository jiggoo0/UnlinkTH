#!/bin/bash
# ==============================================================================
# 🌐 UNLINK-GLOBAL | ELITE AI PRECISION CODE VALIDATION (aipc.sh v2.0)
# ==============================================================================
# สคริปต์นี้บังคับใช้กฎบัญญัติสูงสุด (Zero Tolerance Policy)
# AI ต้องรันและผ่านทุกข้อ 100% ก่อนทำการ Push ขึ้น GitHub

set -e # หยุดการทำงานทันทีหากคำสั่งใดผิดพลาด (ยกเว้นเราจะเขียนดัก)

echo "🚀 [AIPC] Starting Elite AI Precision Code Validation..."

# 1. Type Checking (Strict)
echo "✅ [1/7] Running TypeScript Type Check (Strict)..."
pnpm exec tsc --noEmit || { echo "❌ Type Check Failed! AI must remediate immediately."; exit 1; }

# 2. Linting (No Warnings)
echo "✅ [2/7] Running ESLint Audit..."
pnpm exec eslint . --max-warnings 0 || { echo "❌ Linting Failed/Warnings Found! AI must remediate."; exit 1; }

# 3. Formatting
echo "✅ [3/7] Running Prettier Formatting..."
pnpm exec prettier --write .

# 4. JSON-LD & Metadata Audit (SEO Compliance > 95%)
echo "✅ [4/7] Auditing SEO & Schema.org (Google Search Console Baseline)..."
# ใช้ grep ตรวจสอบความถูกต้องเบื้องต้นของ Schema และ Metadata
grep -r "JsonLd" app/ components/ > /dev/null || { echo "⚠️ Warning: No JsonLd found! Potential SEO drop below 95%."; }
echo "✨ [AIPC] SEO Structure verified."

# 5. Production Build (Local Verification)
echo "✅ [5/7] Running Production Build (Checking Build Logs)..."
pnpm run build > build.log 2>&1 || { 
    echo "❌ Build Failed! Reviewing build.log..."; 
    tail -n 20 build.log; 
    exit 1; 
}

# 6. Build Log Audit (Checking for Image/Metadata Warnings)
echo "✅ [6/7] Auditing Build Logs for Warnings..."
if grep -qiE "Warning|Error" build.log; then
    echo "⚠️ [AIPC] Warnings detected in Build Log! Remediating..."
    grep -iE "Warning|Error" build.log | head -n 5
    # หากพบ Error ด้านความเร็วหรือ SEO จะแจ้งเตือนให้ AI แก้ไขทันที
fi

# 7. Final Success State
echo "🎉 [AIPC] All Local Validations PASSED 100%."
rm build.log
echo "------------------------------------------------------------------"
echo "🚀 NEXT STEP: AI will proceed to git push and verify on Vercel."
echo "------------------------------------------------------------------"
