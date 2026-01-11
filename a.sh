#!/bin/bash

echo "📦 Installing Essential Plugins & Libraries..."

# 1. ติดตั้ง Framer Motion สำหรับ Animation และ UI อื่นๆ ที่จำเป็น
pnpm install framer-motion clsx tailwind-merge

# 2. สร้างไฟล์ lib/utils.ts เพื่อให้ใช้ฟังก์ชัน cn() จัดการ Tailwind Classes
echo "🛠️ Setting up Utility functions..."
mkdir -p lib
cat <<EOF > lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * ฟังก์ชัน cn ช่วยรวม Tailwind classes และจัดการคลาสที่ซ้ำซ้อน
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
EOF

# 3. สร้างชุด Schema SEO สำหรับธุรกิจ ORM (JSON-LD)
echo "🔍 Setting up SEO Helpers..."
mkdir -p lib/seo
cat <<EOF > lib/seo/schema-helper.ts
export const getBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "UnlinkTH",
    "image": "https://www.unlinkth.com/logo.png",
    "description": "บริการจัดการชื่อเสียงออนไลน์ แก้ไขแบล็กลิสต์ และลบข้อมูลเท็จจากระบบ Google",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TH"
    },
    "serviceType": "Online Reputation Management",
    "priceRange": "฿฿฿"
  }
}
EOF

# 4. อัปเดตไฟล์ .prettierrc เพื่อให้จัดระเบียบ Tailwind classes อัตโนมัติ
cat <<EOF > .prettierrc
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "plugins": ["prettier-plugin-tailwindcss"]
}
EOF

echo "✅ Plugins installed and configuration updated!"
