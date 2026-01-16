# 📁 Project Structure Report: www.unlink-th.com

<!--
  Domain: www.unlink-th.com
  Canonical: https://www.unlink-th.com
  Generated: 2026-01-16 14:18:14
  Type: Architecture / Health Report
-->

> **Project:** www.unlink-th.com
> **URL:** https://www.unlink-th.com
> **Generated on:** 2026-01-16 14:18:14

## 🌳 Directory Tree
The following structure represents the core business logic and UI layers.

### 📂 app
  📂 **about/**
    📄 page.tsx
  📂 **case-studies/**
    📂 **[slug]/**
      📄 page.tsx
    📄 page.tsx
  📂 **contact/**
    📄 page.tsx
  📂 **faq/**
    📄 page.tsx
  📄 favicon.ico
  📄 globals.css
  📄 layout.tsx
  📄 page.tsx
  📂 **privacy/**
    📄 page.tsx
  📄 robots.txt
  📂 **services/**
    📂 **[slug]/**
      📄 page.tsx
    📄 page.tsx
  📄 sitemap.ts

### 📂 components
  📂 **landing/**
    📄 ContactCTA.tsx
    📄 Hero.tsx
    📄 Methods.tsx
    📄 Proof.tsx
  📂 **seo/**
    📄 JsonLd.tsx
  📂 **shared/**
    📄 CaseStudySection.tsx
    📄 FaqSection.tsx
    📄 Footer.tsx
    📄 Header.tsx
    📄 Icons.tsx
    📄 LineButton.tsx
    📄 Navbar.tsx
    📄 ProtocolStepper.tsx
    📄 ServiceCard.tsx
  📂 **templates/**
    📄 CategoryArchiveTemplate.tsx
  📂 **ui/**
    📄 accordion.tsx
    📄 badge.tsx
    📄 button.tsx
    📄 card.tsx
    📄 checkbox.tsx
    📄 form.tsx
    📄 input.tsx
    📄 label.tsx
    📄 navigation-menu.tsx
    📄 select.tsx
    📄 sheet.tsx
    📄 skeleton.tsx
    📄 sonner.tsx
    📄 tabs.tsx
    📄 textarea.tsx
    📄 tooltip.tsx
    📄 typography.tsx

### 📂 lib
  📄 mdx.ts
  📂 **supabase/**
    📄 client.ts
    📄 server.ts
  📄 utils.ts

### 📂 scripts
  📄 clean-project.sh
  📂 **dev/**
    📄 backup-project.sh
    📄 project-summary.sh
    📄 tree-projects.sh
  📄 pre-deploy-check.sh
  📄 tree.sh

### 📂 public
  📂 **images/**
    📄 Logo.jpg
    📂 **cases/**
      📄 blacklist-clear.webp
      📄 defamation-removal.webp
      📄 negotiation-drama.webp
      📄 privacy-legal.webp
      📄 seo-push.webp
    📄 og-main.jpg
    📂 **_store/**
      📄 background-check-guide.webp
      📄 pdpa-cover.webp
      📄 seo-push-strategy.webp
    📂 **service/**
      📄 service.webp

### 📂 constants
  📄 cases.ts
  📄 navigation.ts
  📄 services-data.ts
  📄 site-config.ts

### 📂 providers
  📄 AppProvider.tsx

### 📂 content
  📂 **cases/**
    📄 clear-blacklist-misunderstand.mdx
    📄 online-drama-negotiation.mdx
    📄 pdpa-privacy-removal.mdx
    📄 remove-defamation-post.mdx
    📄 seo-push-negative-news.mdx
  📄 faq-data.ts
  📂 **_store/**
    📄 how-to-fix-negative-google-search-results.mdx
    📄 online-background-check-for-job-application.mdx
    📄 right-to-be-forgotten-thailand-pdpa.mdx

## 📦 Project Dependencies
Current configuration in `package.json`:
```json
{
  "name": "Unlink-th.com",
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.2",
    "@img/sharp-wasm32": "^0.34.5",
    "@next/mdx": "^16.1.1",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@supabase/ssr": "^0.8.0",
    "@supabase/supabase-js": "^2.90.1",
    "@types/mdx": "^2.0.13",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.25.0",
    "gray-matter": "^4.0.3",
    "lucide-react": "^0.562.0",
    "next": "15.5.7",
    "next-mdx-remote": "^5.0.0",
    "next-themes": "^0.4.6",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "react-hook-form": "^7.71.1",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.4.0",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^4.3.5"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.3.3",
    "@eslint/js": "^9.39.2",
    "@tailwindcss/postcss": "^4",
    "@tailwindcss/typography": "^0.5.19",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "autoprefixer": "^10.4.23",
    "eslint": "^9",
    "eslint-config-next": "15.5.7",
    "eslint-plugin-import": "^2.32.0",
    "eslint-plugin-jsx-a11y": "^6.10.2",
    "eslint-plugin-react": "^7.37.5",
    "eslint-plugin-react-hooks": "^7.0.1",
    "postcss": "^8.5.6",
    "prettier": "^3.7.4",
    "prettier-plugin-tailwindcss": "^0.7.2",
    "tailwindcss": "^4",
    "tw-animate-css": "^1.4.0",
    "typescript": "^5"
  }
}
```

## 📝 Deployment Status & Issues
---
### ✅ Final Status: **READY FOR DEPLOY**

#### 📍 Production Route Map
```text
```text
Route (app)                                      Size  First Load JS
┌ ○ /                                         15.3 kB         177 kB
├ ○ /_not-found                                 990 B         103 kB
├ ○ /about                                    2.56 kB         150 kB
├ ○ /case-studies                             3.05 kB         127 kB
├ ● /case-studies/[slug]                        171 B         111 kB
├   ├ /case-studies/online-drama-negotiation
├   ├ /case-studies/pdpa-privacy-removal
├   ├ /case-studies/remove-defamation-post
├   └ [+2 more paths]
├ ○ /contact                                  46.1 kB         206 kB
├ ○ /faq                                      3.46 kB         118 kB
├ ○ /privacy                                    124 B         102 kB
├ ○ /robots.txt                                   0 B            0 B
├ ○ /services                                 5.19 kB         161 kB
├ ● /services/[slug]                          6.45 kB         125 kB
├   ├ /services/online-identity-audit
├   ├ /services/sos-consultation
├   ├ /services/content-negotiation
├   └ [+2 more paths]
└ ○ /sitemap.xml                                124 B         102 kB
+ First Load JS shared by all                  102 kB
  ├ chunks/291-90e2272a9717bdbd.js            45.7 kB
  ├ chunks/455135d8-30ce3918f044b0b7.js       54.2 kB
  └ other shared chunks (total)               1.92 kB
○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML (uses generateStaticParams)
```
```
#### ⚠️ Critical Issues Highlight
Everything looks clean. No significant issues found in the latest report.

---
_Report generated by www.unlink-th.com Internal Automation._
