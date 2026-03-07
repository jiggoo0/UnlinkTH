#!/bin/bash
# 🔍 UNLINK-GLOBAL | Advanced Unused File Auditor (Failsafe for Knip)
# -------------------------------------------------------------------------
# สคริปต์นี้จะทำหน้าที่สแกนหาไฟล์ที่อาจจะไม่ได้ใช้งานจริง โดยการตรวจสอบ
# การอ้างอิงชื่อไฟล์ (Reference Check) ทั่วทั้งโปรเจกต์

echo "🚀 Starting Deep File Usage Audit..."
echo "-------------------------------------"

# รายชื่อโฟลเดอร์ที่ต้องการตรวจสอบไฟล์ต้นทาง
SCAN_DIRS=("components" "lib" "hooks" "types" "constants")
# รายชื่อโฟลเดอร์ที่จะใช้ค้นหาการอ้างอิง (Search Space)
SEARCH_DIRS=("app" "components" "lib" "content")

UNUSED_COUNT=0
TOTAL_CHECKED=0

for DIR in "${SCAN_DIRS[@]}"; do
  if [ ! -d "$DIR" ]; then continue; fi
  echo "📂 Auditing directory: $DIR..."

  # ค้นหาไฟล์ .tsx, .ts, .js, .jsx
  while read -r FILE; do
    ((TOTAL_CHECKED++))
    
    # ดึงชื่อไฟล์ออกมาโดยไม่มีนามสกุล (เช่น Button.tsx -> Button)
    BASENAME=$(basename "$FILE")
    FILENAME="${BASENAME%.*}"

    # ข้ามไฟล์ index เนื่องจากส่วนใหญ่เป็น Barrel files
    if [ "$FILENAME" == "index" ]; then continue; fi

    # ค้นหาการอ้างอิงชื่อไฟล์ใน SEARCH_DIRS โดยข้ามไฟล์ตัวเอง
    # ใช้ grep ค้นหาทั้งในรูปแบบ import path และการใช้งานชื่อ Component
    COUNT=$(grep -r "$FILENAME" "${SEARCH_DIRS[@]}" --exclude="$FILE" --exclude-dir=".next" --exclude-dir="node_modules" | wc -l)

    if [ "$COUNT" -eq 0 ]; then
      echo "⚠️  [SUSPECTED UNUSED]: $FILE"
      ((UNUSED_COUNT++))
    fi
  done < <(find "$DIR" -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" \))
done

echo "-------------------------------------"
echo "✅ Audit Complete."
echo "📊 Total Files Checked: $TOTAL_CHECKED"
echo "🚨 Suspected Unused Files: $UNUSED_COUNT"
if [ "$UNUSED_COUNT" -gt 0 ]; then
  echo "💡 Recommendation: โปรดตรวจสอบไฟล์ข้างต้นก่อนทำการลบ (บางไฟล์อาจถูกเรียกใช้แบบ Dynamic หรือใช้ใน MDX)"
fi
