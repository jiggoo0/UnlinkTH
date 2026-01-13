# 📁 รายงานโครงสร้างโปรเจกต์

_สร้างเมื่อ: Wed Jan 14 00:01:29 +07 2026_

## 🌳 Folder Structure

📂 app
📄 favicon.ico
📄 layout.tsx
📄 globals.css
📂 (main)
📂 services
📄 page.tsx
📂 [slug]
📄 page.tsx
📂 cases
📄 page.tsx
📂 [slug]
📄 page.tsx
📂 contact
📄 page.tsx
📄 layout.tsx
📄 page.tsx
📂 terms
📄 page.tsx
📂 about
📄 page.tsx
📂 faq
📄 page.tsx
📂 privacy
📄 page.tsx
📂 api
📂 send-mail
📄 route.ts
📂 line-notify
📄 route.ts
📂 contact
📄 route.ts
📄 sitemap.ts
📄 error.tsx
📄 robots.ts
📄 not-found.tsx
📂 (wiki-hub)
📄 layout.tsx
📂 wiki
📂 [slug]
📄 page.tsx
📂 category
📂 [slug]
📄 page.tsx
📄 page.tsx
📄 layout.tsx
📂 components
📂 ui
📄 button.tsx
📄 badge.tsx
📄 dialog.tsx
📄 card.tsx
📄 input.tsx
📄 sonner.tsx
📄 skeleton.tsx
📄 table.tsx
📄 select.tsx
📄 sheet.tsx
📄 accordion.tsx
📄 label.tsx
📄 textarea.tsx
📄 separator.tsx
📄 tooltip.tsx
📄 switch.tsx
📄 form.tsx
📂 layout
📄 MainLayout.tsx
📂 wiki
📄 WikiLayout.tsx
📄 WikiHero.tsx
📄 WikiCard.tsx
📄 WikiSidebar.tsx
📄 WikiContent.tsx
📄 WikiTableOfContents.tsx
📄 WikiRelatedPosts.tsx
📄 WikiBreadcrumbs.tsx
📂 shared
📄 trust-badge.tsx
📄 StatsCounter.tsx
📄 line-float.tsx
📄 before-after-slider.tsx
📄 theme-provider.tsx
📄 grid-pattern.tsx
📄 logo.tsx
📄 whatsapp-float.tsx
📄 confidentiality-seal.tsx
📄 elements.tsx
📄 section-heading.tsx
📄 Footer.tsx
📄 Navbar.tsx
📄 legal-badge.tsx
📄 confidentiality-banner.tsx
📂 cases
📄 ProjectCard.tsx
📄 ProjectFilter.tsx
📄 ServiceStatus.tsx
📂 contact
📄 ContactForm.tsx
📂 home
📄 HeroSection.tsx
📄 FaqSection.tsx
📂 seo
📄 Seo.tsx
📂 service
📄 PricingSection.tsx
📄 ServiceCard.tsx
📄 ServiceGrid.tsx
📄 ServiceListRow.tsx
📄 PricingTier.tsx
📂 lib
📄 supabase.ts
📄 utils.ts
📂 seo
📄 seo-helper.ts
📄 schema-helper.ts
📂 constants
📄 links.ts
📄 wiki.ts
📂 hooks
📄 use-toast.tsx
📂 types
📄 service.ts
📄 database.types.ts
📄 project.ts
📄 wiki.ts
📂 scripts
📄 clean-project.sh
📂 dev
📄 backup-project.sh
📄 project-summary.sh
📄 tree-projects.sh
📄 pre-deploy-check.sh
📂 public
📂 images
📄 grid-pattern.svg
📄 og-main.jpg
📂 projects
📄 case-financial.jpg
📄 case-privacy-recovery.jpg
📄 case-second-chance.webp
📄 case-rebalancing.jpg
📂 data
📂 case
📄 case-1.ts
📄 case-2.ts
📄 case-3.ts
📄 all-cases.ts
📄 case-4.ts
📄 faq.ts
📂 services
📄 all-services.ts
📄 service-map.ts
📄 services-1.ts
📄 services-2.ts
📂 wiki
📄 articles.ts
📄 faq-data.ts
📄 glossary.ts
📄 legal-framework.ts

## 📦 ตรวจหา package.json

```json
พบ package.json ที่ root ของโปรเจกต์

{
  "name": "unlinkth",
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
    "@hookform/resolvers": "^4.0.0",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-dialog": "^1.1.5",
    "@radix-ui/react-label": "^2.1.1",
    "@radix-ui/react-select": "^2.1.4",
    "@radix-ui/react-separator": "^1.1.1",
    "@radix-ui/react-slot": "^1.1.1",
    "@radix-ui/react-switch": "^1.1.2",
    "@radix-ui/react-tooltip": "^1.1.6",
    "@supabase/ssr": "^0.5.2",
    "@supabase/supabase-js": "^2.47.10",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^4.1.0",
    "framer-motion": "^12.24.11",
    "lucide-react": "^0.562.0",
    "next": "15.5.7",
    "next-themes": "^0.4.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.54.2",
    "sonner": "^1.7.1",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.24.1",
    "zustand": "^5.0.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.0",
    "@types/node": "^22.10.5",
    "@types/react": "^19.0.4",
    "@types/react-dom": "^19.0.2",
    "eslint": "^9.17.0",
    "eslint-config-next": "16.1.1",
    "prettier": "^3.4.2",
    "prettier-plugin-tailwindcss": "^0.6.9",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.7.2"
  }
}
```

## 📝 ผลการวิเคราะห์และปัญหาที่พบ

---

⚠️ ไม่พบไฟล์ pre-deploy-report.md กรุณารัน pre-deploy-check.sh ก่อน

---

Status: Scanning process completed successfully.
