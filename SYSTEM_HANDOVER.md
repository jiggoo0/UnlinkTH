# 👑 UNLINK-GLOBAL: SYSTEM HANDOVER (v3.0)

> **STATUS:** OPERATIONAL & SECURED 🚀
> **LAST UPDATE:** MARCH 2026

## 1. 🔑 ADMIN LOGIN DATA

- **URL:** /admin/login
- **Username:** Admin
- **Password:** Aem25217.
- **Protocol:** SHA-256 Hashing + Secure Cookies

## 2. 📡 DATABASE (TURSO/LIBSQL)

- **URL:** libsql://unlink-th-vercel-icfg-16qctahwfcaqt5kww1ypybcg.aws-us-east-1.turso.io
- **Status:** Initialized (Tables: admins, cases, payments, tickets, assets_map, users)

## 3. 🧪 TEST CASES (VERIFICATION SYSTEM)

- **PNR:** UNL-FIN-889 | Name: Wisarut Techapoj | Status: CONFIRMED
- **PNR:** UNL-REP-772 | Name: Private VIP Client | Status: IN PROGRESS
- **PNR:** UNL-VIS-101 | Name: Araya Suksamran | Status: CONFIRMED

## 🛠️ ARCHITECTURE NOTES

- **Auth System:** Syncs credentials from `.env` to Turso automatically.
- **Verification Page:** Real-time DB lookup using `lib/db.ts`.
- **UI:** High-fidelity templates for Transport Co. and TG Airways.
