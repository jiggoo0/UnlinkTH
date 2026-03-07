/** @format */

import { siteConfig } from "@/constants/site-config";
import { BlogPost, Service } from "@/types";

/**
 * UNLINK-GLOBAL | SEO Schema Library
 * -------------------------------------------------------------------------
 * รวบรวมฟังก์ชันสำหรับสร้าง JSON-LD Structured Data
 */

export const getBrandIdentitySchema = () => {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.fullName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${siteConfig.ogImage}`,
      width: "1200",
      height: "630",
    },
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: `${siteConfig.founder.nameTh}`,
      alternateName: siteConfig.founder.name,
      jobTitle: siteConfig.founder.role,
      url: siteConfig.founder.url,
      sameAs: siteConfig.founder.sameAs,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      areaServed: "TH",
      availableLanguage: ["Thai", "English"],
    },
    knowsAbout: [
      "Digital Reputation Management",
      "Financial Credit Engineering",
      "Global Mobility Strategy",
      "PDPA Compliance",
      "Online Privacy Protection",
    ],
    sameAs: [
      siteConfig.links.facebook,
      siteConfig.links.twitter,
      siteConfig.links.line,
    ],
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    creator: {
      "@type": "Person",
      "@id": `${siteConfig.founder.url}/#person`,
      name: "นาย อลงกรณ์ ยมเกิด",
      alternateName: "Alongkorl Yomkerd (Mza-Marks)",
      url: siteConfig.founder.url,
      jobTitle: siteConfig.founder.role,
      sameAs: siteConfig.founder.sameAs,
    },
    maintainer: {
      "@type": "Organization",
      "@id": "https://www.aemdevweb.com/#organization",
      name: "AemDevWeb Studio โดย นาย อลงกรณ์ ยมเกิด",
      url: "https://www.aemdevweb.com",
    },
    copyrightHolder: { "@id": `${siteConfig.url}/#organization` },
  };

  return [organization, webSite];
};

export const getBreadcrumbSchema = (
  items: { name: string; item: string }[],
) => {
  return {
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
  };
};

export const getBlogSchema = (post: BlogPost) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${siteConfig.url}${post.thumbnail || siteConfig.image || siteConfig.ogImage}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: siteConfig.founder.nameTh,
      url: siteConfig.founder.url,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };
};

export const getCaseStudySchema = (study: {
  slug: string;
  frontmatter: {
    title: string;
    thumbnail?: string;
    image?: string;
    excerpt?: string;
    description?: string;
    date: string;
  };
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.frontmatter.title,
    description: study.frontmatter.excerpt || study.frontmatter.description,
    image: `${siteConfig.url}${study.frontmatter.thumbnail || study.frontmatter.image || siteConfig.ogImage}`,
    datePublished: study.frontmatter.date,
    author: {
      "@type": "Person",
      name: siteConfig.founder.nameTh,
      url: siteConfig.founder.url,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
};

export const getServiceSchema = (service: Service) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    description: service.shortDescription || service.description,
    areaServed: {
      "@type": "Country",
      name: "Thailand",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "THB",
      price: service.priceInfo?.startingAt?.replace(/[^0-9]/g, "") || "0",
      availability: "https://schema.org/InStock",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "International Identity & Data Architecture Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
          },
        },
      ],
    },
  };
};

export const getFaqSchema = (faqs: { q: string; a: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
};
