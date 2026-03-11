import { createClient } from "@libsql/client/web";

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

if (!url) {
  throw new Error("TURSO_DATABASE_URL is not defined");
}

export const db = createClient({
  url,
  authToken,
});

/**
 * Initialize Database Schema
 * รันฟังก์ชันนี้เพื่อสร้างตารางที่จำเป็นหากยังไม่มี
 */
export async function initDb() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS tickets (
      id TEXT PRIMARY KEY,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      ticket_number TEXT UNIQUE NOT NULL,
      passenger_name TEXT NOT NULL,
      id_card_last_4 TEXT NOT NULL,
      origin TEXT NOT NULL,
      destination TEXT NOT NULL,
      departure_time TEXT NOT NULL,
      seat_number TEXT NOT NULL,
      status TEXT DEFAULT 'confirmed'
    )
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS payments (
      id TEXT PRIMARY KEY,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      ticket_id TEXT,
      amount REAL,
      ref_number TEXT UNIQUE,
      status TEXT,
      FOREIGN KEY (ticket_id) REFERENCES tickets (id)
    )
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS system_logs (
      id TEXT PRIMARY KEY,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      level TEXT NOT NULL,
      module TEXT NOT NULL,
      message TEXT NOT NULL,
      details TEXT
    )
  `);
}
