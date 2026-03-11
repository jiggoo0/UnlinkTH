/** @format */

import { siteConfig } from "@/constants/site-config";
import { BlogPost, CaseStudy, Service } from "@/types";
import {
  WithContext,
  Organization,
  WebSite,
  Person,
  BreadcrumbList,
  BlogPosting,
  Service as ServiceSchema,
  Article,
  FAQPage,
} from "schema-dts";

// ------------------------------------------------------------------
// 👑 MASTER AUTHORITY: Alongkorn Yomkerd (9mzm)
// ------------------------------------------------------------------
export const getPersonSchema = (): WithContext<Person> => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.founder.name,
  alternateName: [
    siteConfig.founder.nickname ?? "",
    siteConfig.founder.alias ?? "",
    siteConfig.founder.nameTh,
  ],
  jobTitle: siteConfig.founder.role,
  url: siteConfig.founder.url,
  image: `${siteConfig.url}/branding/icon.webp`,
  sameAs: siteConfig.founder.sameAs,
  worksFor: {
    "@type": "Organization",
    name: "AemDevWeb",
  },
});

// ------------------------------------------------------------------
// 🏛️ ORGANIZATION SCHEMA (LINKED TO FOUNDER)
// ------------------------------------------------------------------
export const getOrganizationSchema = (): WithContext<Organization> => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/branding/icon.webp`,
  founder: getPersonSchema() as Person,
  foundingDate: "2026-03-09",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.contact.phone,
    contactType: "Strategic Liaison",
    availableLanguage: ["Thai", "English"],
  },
  sameAs: [
    siteConfig.links.facebook,
    siteConfig.links.twitter,
    "https://www.aemdevweb.com",
  ],
});

// ------------------------------------------------------------------
// 🌐 WEBSITE SCHEMA
// ------------------------------------------------------------------
export const getWebSiteSchema = (): WithContext<WebSite> => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  publisher: getOrganizationSchema() as Organization,
  author: getPersonSchema() as Person,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
});

// ------------------------------------------------------------------
// 🧭 BREADCRUMB SCHEMA
// ------------------------------------------------------------------
export const getBreadcrumbSchema = (
  items: { name: string; item: string }[],
): WithContext<BreadcrumbList> => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.item.startsWith("http")
      ? item.item
      : `${siteConfig.url}${item.item}`,
  })),
});

// ------------------------------------------------------------------
// ✍️ BLOG POSTING SCHEMA (LINKED TO AUTHOR 9mzm)
// ------------------------------------------------------------------
export const getBlogPostingSchema = (
  post: BlogPost,
): WithContext<BlogPosting> => {
  const imageUrl = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `${siteConfig.url}${post.image}`
    : `${siteConfig.url}/og/og-main.webp`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: imageUrl,
    datePublished: post.date,
    author: getPersonSchema() as Person,
    publisher: getOrganizationSchema() as Organization,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };
};

// ------------------------------------------------------------------
// 🛠️ SERVICE SCHEMA
// ------------------------------------------------------------------
export const getServiceSchema = (
  service: Service,
): WithContext<ServiceSchema> => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.description,
  provider: getOrganizationSchema() as Organization,
  serviceType: service.category,
  areaServed: {
    "@type": "Country",
    name: "Thailand",
  },
});

// ------------------------------------------------------------------
// 📄 CASE STUDY (ARTICLE) SCHEMA
// ------------------------------------------------------------------
export const getCaseStudySchema = (
  caseStudy: CaseStudy,
): WithContext<Article> => {
  const imageUrl = caseStudy.image
    ? caseStudy.image.startsWith("http")
      ? caseStudy.image
      : `${siteConfig.url}${caseStudy.image}`
    : `${siteConfig.url}/og/og-main.webp`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    description: caseStudy.description,
    image: imageUrl,
    author: getPersonSchema() as Person,
    publisher: getOrganizationSchema() as Organization,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/case-studies/${caseStudy.slug}`,
    },
  };
};

// ------------------------------------------------------------------
// ❓ FAQ SCHEMA
// ------------------------------------------------------------------
export const getFaqSchema = (
  faqs: { question: string; answer: string }[],
): WithContext<FAQPage> => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
