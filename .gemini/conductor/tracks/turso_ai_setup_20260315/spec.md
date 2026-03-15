# Specification: วางโครงสร้างระบบฐานข้อมูล Turso และฟังก์ชัน AI Automation ขั้นพื้นฐาน

## Overview

การตั้งค่าโครงสร้างฐานข้อมูลเบื้องต้นด้วย Turso (LibSQL/D1) และเตรียมความพร้อมสำหรับให้ AI สามารถทำงานและโต้ตอบกับฐานข้อมูลรวมถึงสร้างฟังก์ชันต่างๆ ได้อย่างอัตโนมัติตามเป้าหมาย AI-Driven Development (95%) ของ UNLINK-GLOBAL

## Objectives

- เชื่อมต่อโปรเจกต์ Next.js เข้ากับฐานข้อมูล Turso SQL
- กำหนด Schema พื้นฐานสำหรับจัดการบริการ (Core Services) เช่น เอกสาร, ตั๋วจำลอง, และสถานะการลบลิงก์
- สร้าง AI Automation Layer เพื่อให้ AI สามารถรันคำสั่งตรวจสอบ (Validation) ผ่าน `aipc.sh` ได้อย่างสมบูรณ์

## Technical Constraints

- ไม่เก็บข้อมูลส่วนบุคคล (PII) ลงฐานข้อมูล
- ใช้ TypeScript อย่างเคร่งครัด
- เชื่อมต่อผ่าน @libsql/client
