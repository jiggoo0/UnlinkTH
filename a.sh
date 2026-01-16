#!/bin/bash

# 1. ย้าย Hero ไปอยู่ใน landing เพื่อให้จัดการหน้าแรกได้ที่เดียว
if [ -f "components/shared/HeroSection.tsx" ]; then
    mv components/shared/HeroSection.tsx components/landing/Hero.tsx
fi

# 2. เปลี่ยนชื่อ BlogSection เป็น CaseStudySection ให้ล้อไปกับระบบใหม่
if [ -f "components/shared/BlogSection.tsx" ]; then
    mv components/shared/BlogSection.tsx components/shared/CaseStudySection.tsx
fi

# 3. ลบโฟลเดอร์รูปภาพ blog ที่ไม่ได้ใช้แล้ว (ย้ายไปกรณีมีไฟล์)
if [ -d "public/images/blog" ]; then
    cp -r public/images/blog/* public/images/cases/ 2>/dev/null
    rm -rf public/images/blog
fi

# 4. สร้าง/อัปเดตไฟล์ constants ให้พร้อมใช้งานจริง
cat <<EOF > constants/site-config.ts
export const siteConfig = {
  name: "Unlink-TH",
  description: "บริการจัดการชื่อเสียออนไลน์ และให้คำปรึกษาการเริ่มต้นใหม่บนโลกดิจิทัล",
  url: "https://www.unlink-th.com",
  ogImage: "https://www.unlink-th.com/og.jpg",
  links: {
    line: "https://line.me/ti/p/~YOUR_LINE_ID", // เปลี่ยนเป็น ID ของคุณ
    messenger: "#",
  },
  contact: {
    email: "contact@unlink-th.com",
    phone: "0XX-XXX-XXXX",
    lineId: "@unlinkth",
  },
  mainNav: [
    { title: "หน้าแรก", href: "/" },
    { title: "บริการของเรา", href: "/services" },
    { title: "เคสตัวอย่าง", href: "/case-studies" },
    { title: "ถาม-ตอบ", href: "/faq" },
  ],
};
EOF

# 5. ลบไฟล์ Provider หรือ Config ที่ซับซ้อนเกินความจำเป็น (ถ้าไม่ได้ใช้จริงๆ)
# rm -rf providers/AppProvider.tsx  # ปลดคอมเมนต์หากคุณต้องการให้เว็บเป็น Pure Static มากขึ้น

echo "-----------------------------------------------"
echo "✅ Final Structure Refined!"
echo "-----------------------------------------------"
echo "โครงสร้างปัจจุบันของคุณตอนนี้:"
echo "1. หน้าหลักจัดการผ่าน: components/landing/ (Hero, Methods, Proof)"
echo "2. ระบบเคสตัวอย่าง: app/case-studies/ + content/cases/"
echo "3. การติดต่อ: รวมศูนย์ที่ constants/site-config.ts"
