---
domain: www.unlink-th.com
canonical: https://www.unlink-th.com
generated: 2026-01-23
type: Technical Core Context
identity: Reputation Management Platform
---

# Ai-context.core.md: System Architecture and Engineering Standards

## 1. Core System Identity

- **Framework:** Next.js 16.1.3 (App Router)
- **Core Library:** React 19.2.3 (RC/Canary compatible)
- **Styling Engine:** Tailwind CSS v4.0 (PostCSS) + Framer Motion v12
- **Paradigm:** Static-First | Privacy-Centric Architecture
- **Objective:** Secure, anonymous, and high-performance digital reputation management.
- **Conversion Logic:** **No Forms**. All conversion traffic is strictly routed to LINE OA (@204uuzew) via deep links.

## 2. Directory Architecture (The Blueprint)

### A. App Router Strategy (Secure Routing)

- **app/ (Root):** Contains global layouts, strict CSP headers, and metadata.
- **app/(static):** `about`, `privacy`, `editorial-policy`, `faq`. These are static pages focused on building trust and legal compliance.
- **app/(dynamic):**
  - `services/[slug]`: Renders content from `content/services`.
  - `case-studies/[slug]`: Renders content from `content/case-studies` (Anonymized data).
- **app/contact:** Serves as a "gateway" page redirecting users to LINE OA, not a form submission page.

### B. Content Layer (Local Source of Truth)

- **Engine:** `next-mdx-remote` with `gray-matter`.
- **Repository:**
  - `content/services`: Technical descriptions of removal processes (PDPA, Google De-indexing).
  - `content/case-studies`: Success stories with strictly blinded data (no real names).

### C. Component Hierarchy

- **components/ui:** Shadcn/Radix-based atomic components (Accordion, Sheet, Dialog).
- **components/sections:** Business logic blocks (ProtocolStepper, Proof, Methods).
- **components/shared:** Reusable cards (`CaseStudyCard`, `ServiceCard`) and the critical `LineButton` (Conversion trigger).
- **components/seo:** `JsonLd.tsx` for handling Organization and Service Schema.

## 3. Engineering Standards (Dev-to-Dev)

### Technical Constraints

- **Build Engine:** Explicitly configured to use Webpack (`next build --webpack`) in `package.json` to ensure stability in the current environment.
- **Strict No Emojis:** Prohibited in source code and logs. Use lucide-react icons for UI.
- **Zero-Backend Policy:** There is no database connection and no API routes for data storage. This is a security feature to guarantee client anonymity.
- **Tailwind v4:** Uses the modern `@tailwindcss/postcss` setup. CSS variables are defined in `globals.css` (tokens).

### Performance Targets

- **LCP (Largest Contentful Paint):** < 1.2s (Crucial for distressed users seeking quick help).
- **CLS (Cumulative Layout Shift):** < 0.1 (Stable reading experience).
- **Security Headers:** Strict Content-Security-Policy (CSP) must be enforced.

## 4. Entity SEO and Schema Strategy

- **Entity Type:** `ProfessionalService` / `LegalService` (Reputation Management).
- **Organization:** UnlinkTH.
- **Graph Logic:**
  - Linking to "SameAs" properties: Facebook Page, Medium Blog.
  - **No Person Schema:** Unlike the other domains, this site emphasizes the _Organization_ and _Methodology_ over the individual to maintain a "Corporate Security" facade.

## 5. Deployment and Runtime Protocols

### Pre-deployment Inspection

All code must pass the `scripts/pre-deploy-check.sh` protocol:

1.  **Policy Check:** `npm run policy:check` to verify no unauthorized backend connections.
2.  **Type Safety:** `tsc --noEmit`.
3.  **Linting:** `eslint .` (Next.js 16 strict config).
4.  **Production Build:** Verify static asset generation.

### Runtime Configuration

- **next.config.mjs:** configured for `mdxRs: false` (if using Termux) and strict image domains.
- **robots.ts:** Must allow indexing for Service pages but carefully manage crawling for sensitive areas if added later.

## 6. Maintenance Logic

- **Content Updates:** Performed via Git commits to `content/*.mdx`.
- **Dependency Management:**
  - Keep `framer-motion` at v12.x.
  - Keep `tailwindcss` at v4.x.
  - Do not downgrade `react` below 19.x as Next.js 16 depends on it.
