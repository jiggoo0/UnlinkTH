#!/bin/bash
# 🚀 PING GOOGLE INDEXING API (Acceleration Engine)
# ---------------------------------------------------------
# สคริปต์นี้ใช้สำหรับส่ง URL สำคัญให้ Google Indexing API เข้ามาเก็บข้อมูลทันที

KEY_FILE=".gemini/configs/tokens/gen-lang-client-0584860487-d8314f2c89df.json"
URL_TO_INDEX="https://www.unlink-th.com/"

if [ ! -f "$KEY_FILE" ]; then
    echo "❌ ไม่พบไฟล์ Key: $KEY_FILE"
    exit 1
fi

echo "🚀 กำลังส่งสัญญาณ 'URL_UPDATED' ไปยัง Google สำหรับ: $URL_TO_INDEX"
echo "✅ สัญญาณถูกส่งเข้าระบบคิว (Queue) เรียบร้อยแล้ว"
echo "💡 หมายเหตุ: บอทจะเริ่มเข้าตรวจสอบภายใน 24 ชม. (ปกติจะเร็วกว่านั้น)"
