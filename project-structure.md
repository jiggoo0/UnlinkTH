# 📁 Project Structure Report: www.unlink-th.com

<!--
  Domain: www.unlink-th.com
  Canonical: https://www.unlink-th.com
  Generated: 2026-01-21 10:36:51
  Type: Architecture / Health Report
-->

> **Project:** www.unlink-th.com
> **URL:** https://www.unlink-th.com
> **Generated on:** 2026-01-21 10:36:51

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
  📂 **services/**
    📂 **[slug]/**
      📄 page.tsx
    📄 page.tsx
  📄 sitemap.ts
  📂 **editorial-policy/**
    📄 page.tsx
  📄 robots.ts

### 📂 components
  📂 **seo/**
    📄 JsonLd.tsx
  📂 **shared/**
    📄 LineButton.tsx
    📄 ServiceCard.tsx
    📄 CaseStudyCard.tsx
  📂 **layout/**
    📄 Header.tsx
    📄 Footer.tsx
    📄 Navbar.tsx
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
  📂 **sections/**
    📄 ContactCTA.tsx
    📄 Hero.tsx
    📄 HomeClientSections.tsx
    📄 Methods.tsx
    📄 Proof.tsx
    📄 FaqSection.tsx
    📄 ProtocolStepper.tsx

### 📂 lib
  📄 case-studies.ts
  📄 utils.ts
  📄 services.ts

### 📂 types
  📄 index.ts

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
      📄 privacy-legal.webp
      📄 seo-push.webp
      📄 unlink-th.webp
      📄 negotiation-drama.webp
    📄 unlink-th.webp
    📂 **_store/**
      📄 background-check-guide.webp
      📄 pdpa-cover.webp
      📄 seo-push-strategy.webp
    📂 **service/**
      📄 service.webp
      📄 service1.webp
      📄 unlink-th.webp
    📄 opengraph-image.png
    📄 og-main.png

### 📂 constants
  📄 navigation.ts
  📄 services-data.ts
  📄 site-config.ts

### 📂 content
  📂 **services/**
    📄 how-to-fix-negative-google-search-results.mdx
    📄 online-background-check-for-job-application.mdx
    📄 right-to-be-forgotten-thailand-pdpa.mdx
    📄 remove-social-media-content-pantip-twitter.mdx
  📂 **case-studies/**
    📄 clear-blacklist-misunderstand.mdx
    📄 online-drama-negotiation.mdx
    📄 remove-defamation-post.mdx
    📄 seo-push-negative-news.mdx
    📄 remove-defamation-gambling-network.mdx
    📄 remove-leaked-content-silent-angel.mdx

### 📂 styles
  📄 tokens.css

## 📦 Project Dependencies
Current configuration in `package.json`:
```json
{
  "name": "unlink-th.com",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev --webpack",
    "build": "next build --webpack",
    "start": "next start",
    "lint": "eslint .",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit",
    "policy:check": "echo \"POLICY: No backend • No form submission • LINE-only communication\""
  },
  "dependencies": {
    "@next/mdx": "16.1.3",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toast": "^1.2.15",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@swc/helpers": "^0.5.18",
    "@types/mdx": "^2.0.13",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.27.5",
    "gray-matter": "^4.0.3",
    "lucide-react": "^0.562.0",
    "next": "16.1.3",
    "next-mdx-remote": "^5.0.0",
    "next-themes": "^0.4.6",
    "nextjs-toploader": "^3.9.17",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "react-hook-form": "^7.71.1",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.0.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.3.3",
    "@eslint/js": "^9.39.2",
    "@next/bundle-analyzer": "^16.1.3",
    "@tailwindcss/postcss": "^4.0.0",
    "@tailwindcss/typography": "^0.5.19",
    "@types/node": "^24.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "eslint": "^9.18.0",
    "eslint-config-next": "16.1.3",
    "postcss": "^8.5.1",
    "prettier": "^3.4.2",
    "prettier-plugin-tailwindcss": "^0.6.10",
    "tailwindcss": "^4.0.0",
    "tw-animate-css": "^1.4.0",
    "typescript": "^5.7.3",
    "typescript-eslint": "^8.53.1"
  }
}
```

## 📝 Deployment Status & Issues
---
> ℹ️ Pre-deploy report (`pre-deploy-report.md`) is missing. Please run `npm run check` first.

---
_Report generated by www.unlink-th.com Internal Automation._
