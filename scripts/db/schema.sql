-- ==============================================================================
-- 🌐 UNLINK-GLOBAL | CORE SCHEMA (TURSO SQL / LIBSQL)
-- ==============================================================================
-- AI Automation Note: ห้ามเก็บ PII (Personally Identifiable Information) ลงในฐานข้อมูลนี้
-- ใช้สำหรับเก็บเฉพาะ State ของงาน, สถานะบริการ และโครงสร้าง Metadata เท่านั้น

CREATE TABLE IF NOT EXISTS service_requests (
    id TEXT PRIMARY KEY, -- UUID หรือ CUID
    service_type TEXT NOT NULL, -- เช่น 'reputation_shield', 'financial_engineering'
    status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'processing', 'completed', 'failed'
    metadata TEXT, -- JSON String สำหรับเก็บรายละเอียดงานที่ไม่ระบุตัวตน
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS mock_tickets (
    id TEXT PRIMARY KEY,
    ticket_type TEXT NOT NULL, -- 'flight', 'bus', 'hotel'
    reference_code TEXT NOT NULL UNIQUE, -- โค้ดอ้างอิงที่สร้างขึ้นมา
    status TEXT NOT NULL DEFAULT 'active',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- AI Note: หากมีการแก้ไข Schema ในอนาคต ให้เพิ่ม ALTER TABLE หรือสร้าง Migration File แยกต่างหาก
