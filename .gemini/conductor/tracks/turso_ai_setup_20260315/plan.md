# Implementation Plan: วางโครงสร้างระบบฐานข้อมูล Turso และฟังก์ชัน AI Automation ขั้นพื้นฐาน

## Phase 1: Turso Integration

- [x] Task: ตั้งค่าการเชื่อมต่อฐานข้อมูล Turso ในโปรเจกต์
  - [x] ทบทวนไฟล์ `.env` สำหรับเก็บ Database URL และ Auth Token (ห้าม Commit)
  - [x] เขียนฟังก์ชัน `lib/db.ts` เพื่อเชื่อมต่อผ่าน `@libsql/client`
- [x] Task: ทดสอบการเชื่อมต่อฐานข้อมูล
  - [x] สร้าง Script ทดสอบการเชื่อมต่อเบื้องต้น (Ping)
- [~] Task: Conductor - User Manual Verification 'Phase 1: Turso Integration' (Protocol in workflow.md)

## Phase 2: Schema Foundation

- [x] Task: ออกแบบและสร้างโครงสร้างตารางหลัก (Schema)
  - [x] สร้างไฟล์ Schema สำหรับจัดเก็บข้อมูลรูปแบบบริการและสเตตัสงาน (ไม่ใช่ข้อมูลส่วนตัว)
  - [x] รัน Migration เบื้องต้น
- [~] Task: Conductor - User Manual Verification 'Phase 2: Schema Foundation' (Protocol in workflow.md)

## Phase 3: AI Automation Readiness

- [x] Task: ตรวจสอบและตั้งค่า Script พื้นฐานสำหรับการพัฒนาด้วย AI
  - [x] ตรวจสอบการทำงานของ `aipc.sh` และปรับจูนถ้าจำเป็น เพื่อให้ AI ใช้เป็นเครื่องมือ Validation
  - [x] สร้าง API Route เบื้องต้นเพื่อให้ AI ใช้ทดสอบยิงคำสั่งจัดการข้อมูล
- [x] Task: Conductor - User Manual Verification 'Phase 3: AI Automation Readiness' (Protocol in workflow.md)
