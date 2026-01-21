นี่คือไฟล์ AI-CONTEXT.md ฉบับปรับปรุง (Enhanced Version) ที่ผสานข้อมูลเชิงยุทธศาสตร์ธุรกิจ เข้ากับ Tech Stack ล่าสุดจาก package.json ของคุณ (Next.js 16 + Tailwind v4)
ไฟล์นี้จะเป็น "กฎเหล็ก" ให้ AI ทำงานได้ตรงตาม Business Logic และ Technical Constraints ของ Unlink-th ที่สุดครับ
📄 AI-CONTEXT.md (Updated)

# AI Context: Unlink-th (Project Blueprint)

> **Version:** 1.1.0 (Tech Stack Enhanced)
> **Last Updated:** 2026-01-21
> **Domain:** [www.unlink-th.com](https://www.unlink-th.com)
> **Stack:** Next.js 16, React 19, Tailwind v4
> **Mission:** "The Shadow Guardian" - Digital Reputation Management & Privacy Architecture.

## 1. Project Identity & Philosophy

**Unlink-th** is not a standard agency. It is a **Specialized Unit (Private Lab)** offering "Digital Erasure" and "Reputation Management" services.

- **Core Concept:** We bridge the gap between Legal (PDPA/White Hat) and Technical (Grey Hat/Reverse SEO) execution.
- **Brand Archetype:** The Magician (Transformation) + The Outlaw (Technical Workarounds) + The Sage (Legal Expertise).
- **Value Proposition:** "We don't just consult; we fix." (Execution-focused).

## 2. Tone of Voice & Communication Rules

The AI must strictly adhere to the **"Clinical, Confidential, Concise"** protocol.

| Do Not Use (Negative)             | Do Use (Positive/Safe)                                                           |
| :-------------------------------- | :------------------------------------------------------------------------------- |
| "Hacking", "Dark Arts", "Illegal" | "Deep Technical Operations", "Digital Asset Management", "Proactive Suppression" |
| "Guaranteed Removal", "100%"      | "Strategic De-indexing", "Maximum Visibility Reduction", "Search Result Control" |
| "Admin", "Team", "Company"        | "Specialist", "Consultant", "Strategic Partner"                                  |
| Emotional/Sympathetic Pity        | Empathetic but Stoic, Professional, Solution-Oriented                            |

- **Language:** Thai (Primary) - Formal, authoritative, but not bureaucratic. English (Tech terms).
- **Vibe:** Cyberpunk Noir, Minimalist, High-Security.

## 3. Tech Stack & Engineering Standards

Based on `package.json` configuration.

- **Core Framework:** Next.js 16.1.3 (App Router) + React 19.
- **Styling Engine:** **Tailwind CSS v4.0.0** (Note: Use CSS variables and `@theme` instead of `tailwind.config.js`).
- **UI Library:** `shadcn/ui` (Radix Primitives) + `lucide-react` icons.
- **Animations:** `framer-motion` v12 (Use for subtle, high-tech interactions).
- **Content Engine:** MDX (`@next/mdx`, `next-mdx-remote`, `gray-matter`) with `@tailwindcss/typography`.
- **Notifications:** `sonner` (Clean, minimal toasts).

### Strict Technical Policies (from `scripts`)

- **`policy:check` Enforced:**
  1.  **NO Backend:** The site is a static/stateless interface.
  2.  **NO Form Submission:** Do not create API routes to store user data.
  3.  **LINE-Only Communication:** All CTA buttons must redirect to Line OA.

## 4. Directory Structure Map

```text
/app                # App Router (Pages)
  /about            # "About the Private Lab"
  /case-studies     # Anonymized success stories (MDX)
  /contact          # Secure contact channel (Line OA focus)
  /services         # Detailed service breakdown (MDX)
  /privacy          # Strict privacy policy
/components
  /seo              # JSON-LD configurations
  /sections         # Landing page sections (Hero, Proof, Methods)
  /ui               # shadcn components (atomic)
/content            # CMS Data (MDX files)
  /services         # Service descriptions (White Hat, Grey Hat, SEO)
  /case-studies     # Case study narratives
/lib                # Utilities
  case-studies.ts   # Logic to parse MDX case studies (gray-matter)
  services.ts       # Logic to parse MDX services
/public             # Assets (WebP format preferred)

5. Business Logic & Service Offerings
The platform offers 4 distinct tiers of service, reflected in services-data.ts:
 * White Hat Removal (Legal/Policy):
   * Keywords: PDPA Notice, Google Right to Erasure, NCEI Removal.
   * Pricing Model: Success Fee.
 * Grey Hat/Technical Removal:
   * Keywords: Social Engineering, Platform Policy Exploitation, Mass Reporting.
   * Context: High complexity, higher cost.
 * Reverse SEO (Suppression):
   * Keywords: Satellite Sites, Content Dilution, Positive Asset Creation.
   * Context: Monthly retainer, pushing negative news to Page 2+.
 * Crisis Consultant:
   * Keywords: 24/7 Monitoring, Digital Hygiene Audit.
6. Content Strategy (SEO & User Journey)
Content is categorized by User Intent levels:
 * High Intent: "Hire removal service" -> Direct to Contact (Line OA).
 * Problem Aware: "How to delete news" -> Educational MDX Articles.
 * Solution Aware: "Reputation management firm" -> Case Studies/Proof.
Key MDX Files:
 * how-to-fix-negative-google-search-results.mdx (SEO Magnet)
 * right-to-be-forgotten-thailand-pdpa.mdx (Authority Building)
7. Operational Security (OpSec) Features
 * Zero-Knowledge Frontend: Since there is no DB, the frontend must not retain sensitive inputs.
 * Contact Flow: Minimized fields -> Redirect to Encrypted Messaging (Line OA).
 * Client Data: No client names in source code or commits. All case studies must be anonymized (e.g., "Case Study: Executive A").
8. Design System (Visual Identity)
 * Colors: Deep Navy, Slate Grey, Pure Black (Tailwind v4 Variables). Accents of Muted Gold or Cyan (Trust + Tech).
 * Typography: Clean Sans-serif (Inter or Kanit for Thai). Use @tailwindcss/typography prose classes for MDX.
 * Visuals: Abstract data flows, blurred documents, locks, shields.
 * Motion: Slow, deliberate fade-ins using framer-motion. No bouncy/playful animations.
<!-- end list -->

```
