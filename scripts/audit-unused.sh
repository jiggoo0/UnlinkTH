#!/bin/bash

# 👑 UNLINK-GLOBAL | DEAD CODE AUDIT SYSTEM
echo "🔍 [AUDIT] Starting Dead Code & Unused Dependencies Scan..."

# 1. รัน Knip เพื่อหาไฟล์และ dependencies ที่ไม่ได้ใช้
echo "📦 Running Knip analysis..."
npx knip > unused_report.txt

# 2. ตรวจสอบผลลัพธ์
if [ -s unused_report.txt ]; then
    echo "⚠️  [WARNING] Unused code/dependencies detected!"
    cat unused_report.txt
    echo "--------------------------------------------------"
    echo "💡 Action: AI must review 'unused_report.txt' and remove identified dead code."
else
    echo "✅ [SUCCESS] No dead code detected. Your codebase is lean!"
fi

# 3. ตรวจสอบไฟล์ที่อาจหลงเหลือจาก Metadata/JSON-LD (ตาม Blueprint)
echo "🔍 Checking for missing Metadata implementations..."
grep -rL "generateMetadata" app/page.tsx app/**/page.tsx > missing_metadata.txt

if [ -s missing_metadata.txt ]; then
    echo "🚩 [SEO ALERT] These pages are missing Metadata:"
    cat missing_metadata.txt
fi

# ลบไฟล์ชั่วคราว
rm unused_report.txt missing_metadata.txt
echo "🏁 [AUDIT] Analysis Complete."
