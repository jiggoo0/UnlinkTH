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
  "@id": "https://me.aemdevweb.com/#person",
  name: "9mzm",
  alternateName: [
    "นาย อลงกรณ์ ยมเกิด",
    "Alongkorn Yomkerd",
    "Mza-Marks",
    "นายเอ็มซ่ามากส์",
    "Alongkorn (9mzm)",
  ],
  jobTitle: "Founder & Lead Infrastructure Architect",
  url: "https://me.aemdevweb.com",
  image: "https://me.aemdevweb.com/profile.webp",
  sameAs: [
    "https://www.facebook.com/share/16jjyWbPyG/",
    "https://www.linkedin.com/in/alongkorl-aemdevweb",
    "https://www.aemdevweb.com",
    "https://me.aemdevweb.com",
    "https://mcp.aemdevweb.com",
    "https://github.com/jiggoo0",
  ],
  worksFor: {
    "@type": "Organization",
    name: "AemDevWeb Studio",
    url: "https://www.aemdevweb.com",
  },
  description:
    "Expert in Data Architecture, Security, and Digital Reputation Management.",
});

// ------------------------------------------------------------------
// 🏛️ ORGANIZATION SCHEMA (LINKED TO FOUNDER)
// ------------------------------------------------------------------
export const getOrganizationSchema = (): WithContext<Organization> => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/branding/icon.webp`,
  founder: { "@id": "https://me.aemdevweb.com/#person" },
  parentOrganization: {
    "@type": "Organization",
    name: "AemDevWeb",
    url: "https://www.aemdevweb.com",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.contact.phone,
    contactType: "customer service",
    availableLanguage: ["Thai", "English"],
  },
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
