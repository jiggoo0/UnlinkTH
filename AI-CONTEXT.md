> **Version:** 2.0.0 (Production Ready)
> **Last Updated:** 2026-01-21
> **Domain:** [www.unlink-th.com](https://www.unlink-th.com)
> **Stack:** Next.js 16, React 19, Tailwind CSS v4
> **Mission:** "The Certified Digital Fixer" — กู้คืนชื่อเสียงและสิทธิความเป็นส่วนตัวด้วยเทคนิควิศวกรรมข้อมูลและกฎหมาย

## 1. Project Identity & Philosophy

**Unlink-th** is positioned as a **Specialist Technical Unit (Private Lab)**, not a general marketing agency. We solve specific "Digital Crises" through precise technical and legal execution.

- **Core Philosophy:** **"Hybrid Model"** — ผสานความน่าเชื่อถือทางกฎหมาย (Legal Trust) เข้ากับความเชี่ยวชาญเชิงเทคนิค (Technical Authority) และความเข้าใจในความเดือดร้อนของลูกค้า (Empathy).
- **Brand Archetype:** The Guardian (Protection) + The Magician (Transformation) + The Sage (Expertise).
- **Value Proposition:** "We don't just 'hide' content; we 'remove' it using De-indexing & Secure Purge protocols."

## 2. Tone of Voice & Communication Rules

The AI must strictly adhere to the **"Specialist, Secure, Result-Oriented"** protocol.

| ❌ Do Not Use (Risky/Amateur)     | ✅ Do Use (Professional/Safe)                                                           |
| :-------------------------------- | :-------------------------------------------------------------------------------------- |
| "Hacking", "Dark Arts", "Illegal" | "Technical De-indexing", "Metadata Engineering", "Digital Asset Management"             |
| "ลบประวัติอาชญากรรม" (For Ads)    | "จัดการข้อมูลส่วนบุคคลที่ละเมิดสิทธิ", "บริหารจัดการ Digital Footprint"                 |
| "Guaranteed 100%" (Blindly)       | "Technical Feasibility Audit", "ประเมินผลลัพธ์เชิงเทคนิค", "High Success Rate Protocol" |
| "Admin", "Staff"                  | "Specialist", "Legal Consultant", "Case Manager"                                        |

- **Language:**
  - **Thai (Primary):** Action-oriented, direct, reassuring but not over-promising. (e.g., "รับลบ...", "กู้คืน...", "ปรึกษา...")
  - **English (Technical):** Used for specific terms to build authority (e.g., "De-indexing", "Secure Purge", "Zero-Knowledge").
- **Vibe:** Clinical, High-Security, Premium Service.

## 3. Tech Stack & Engineering Standards

Based on `package.json` and recent architectural decisions.

- **Core Framework:** Next.js 16.1.3 (App Router) + React 19.
- **Styling Engine:** **Tailwind CSS v4.0.0** (Using CSS variables & `@theme` directive).
- **UI Library:** `shadcn/ui` (Radix Primitives) + `lucide-react` icons.
- **Animations:** `framer-motion` v12 (Subtle, slow fade-ins/slide-ups. No bouncy effects).
- **Content Engine:** MDX (`@next/mdx`) with `@tailwindcss/typography` for Service & Case Study pages.
- **SEO Engine:** Next.js Metadata API + JSON-LD Schema.

### ⚠️ Strict Technical Policies

1.  **Zero-Backend:** The site is a static/stateless interface for security.
2.  **No User Data Storage:** Do **NOT** create API routes to store forms.
3.  **Direct-to-LINE:** All Call-to-Actions (CTA) must redirect to the LINE Official Account (`siteConfig.contact.lineUrl`).
4.  **Type Safety:** All code must pass `tsc --noEmit` with strict types defined in `types/index.ts`.

## 4. Directory Structure Map

```text
/app
  /about              # Company vision & "Digital Fixer" story
  /case-studies       # Anonymized success stories (Dynamic MDX)
  /contact            # Secure liaison channel (LINE focus)
  /editorial-policy   # Ethics, Public Interest Shield (E-E-A-T crucial)
  /faq                # Operational & Technical FAQs
  /privacy            # "Zero-Log" & "Secure Purge" protocols
  /services           # Service landing pages (Dynamic MDX)
  layout.tsx          # Global layout (Header, Footer, Metadata)
  sitemap.ts          # Dynamic XML Sitemap generation
/components
  /layout             # Header, Footer, Navbar
  /sections           # Hero, Methods, Proof, ContactCTA
  /shared             # LineButton, ServiceCard, CaseStudyCard
  /ui                 # Atomic shadcn components
/constants
  navigation.ts       # Menu structure (Synced with Policy pages)
  services-data.ts    # Service definitions (Synced with Strategy)
  site-config.ts      # Global config (SEO, Contact, Socials)
/content              # MDX Content Source
  /case-studies       # Narrative of past success
  /services           # Detailed service explanation
/lib
  case-studies.ts     # Data fetching logic
  utils.ts            # CN & Formatters
/types                # TypeScript Definitions (Strict)

5. Service Offerings (Business Logic)
Reflecting services-data.ts and site-config.ts strategy.
 * Technical De-indexing (Google):
   * Keywords: รับลบลิงก์ Google, ลบข่าวเสีย, De-indexing.
   * Action: Removing URLs from Search Index permanent.
 * Platform Removal (Social):
   * Keywords: ลบกระทู้ Pantip, ลบรีวิว Google Maps, แจ้งลบ Twitter.
   * Action: Takedown via Community Standards & Legal Notice.
 * Digital Cleaning (Background Check):
   * Keywords: ลบประวัติออนไลน์, เช็คประวัติอาชญากรรม (Cleaned), Digital Footprint.
   * Action: Cleaning public records for job application/business.
 * Legal Takedown (PDPA):
   * Keywords: ทนาย PDPA, สิทธิในการถูกลืม (Right to be Forgotten).
   * Action: Legal Notices & DPO Liaison.
6. Content Strategy (SEO & E-E-A-T)
 * Search Intent Focus: Content must answer "How to delete..." or "Hire someone to delete..." queries directly.
 * Technical Storytelling: Explain how we do it (Metadata, Caching, Protocols) to differentiate from scammers.
 * Trust Signals:
   * Editorial Policy: Explicitly state we do not remove public interest data (Corruption, Serious Crimes) to satisfy Google E-E-A-T.
   * Privacy Policy: Emphasize "Secure Purge" and "No-Log" to satisfy high-net-worth clients.
7. Operational Security (OpSec)
 * Public Interest Shield: We verify every case. We reject cases involving active court orders or public corruption.
 * Secure Purge: All client data submitted for review is deleted after the session/job.
 * Anonymity: Case studies must utilize pseudonyms and generic industry terms (e.g., "Executive A in Energy Sector").
8. Design System (Visual Identity)
 * Theme: "Cyberpunk Noir" / "Clean Tech".
 * Colors: Deep Navy, Slate Grey, Pure Black, Accents of Neon Green (Success/LINE) & Signal Blue (Trust).
 * Typography: Clean Sans-serif (Inter/Kanit).
 * Imagery: Abstract data flows, locks, shields, blurred documents. Avoid stock photos of "happy people shaking hands".

```
