/** @format */

import { siteConfig } from "@/constants/site-config";
import { BlogPost, Service, CaseStudy } from "@/types";

/**
 * UNLINK-GLOBAL | Supreme SEO Schema Architecture
 * -------------------------------------------------------------------------
 * รวบรวมฟังก์ชันสำหรับสร้าง JSON-LD Structured Data ระดับสากล
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
      "@id": `${siteConfig.url}/#logo`,
      url: `${siteConfig.url}/icon.png`,
      width: "512",
      height: "512",
    },
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      "@id": `${siteConfig.founder.url}/#person`,
      name: `${siteConfig.founder.nameTh}`,
      alternateName: siteConfig.founder.name,
      jobTitle: siteConfig.founder.role,
      description: siteConfig.founder.description,
      url: siteConfig.founder.url,
      sameAs: siteConfig.founder.sameAs,
      knowsAbout: [
        "Advanced Reputation Management",
        "Digital Identity Rehabilitation",
        "Strategic Data Intervention",
        "Cyber Security Infrastructure",
        "International Financial Architecture",
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      areaServed: "TH",
      availableLanguage: ["Thai", "English"],
    },
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
    creator: { "@id": `${siteConfig.founder.url}/#person` },
    copyrightHolder: { "@id": `${siteConfig.url}/#organization` },
  };

  return [organization, webSite];
};

export const getBlogSchema = (post: BlogPost) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteConfig.url}/blog/${post.slug}/#article`,
    headline: post.title,
    description: post.description,
    image: `${siteConfig.url}${post.image || siteConfig.ogImage}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      "@id": `${siteConfig.founder.url}/#person`,
      name: siteConfig.founder.nameTh,
      url: siteConfig.founder.url,
    },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };
};

export const getServiceSchema = (service: Service) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/services/${service.slug}/#service`,
    name: service.title,
    serviceType: service.category,
    provider: { "@id": `${siteConfig.url}/#organization` },
    description: service.shortDescription || service.description,
    areaServed: { "@type": "Country", name: "Thailand" },
    offers: {
      "@type": "Offer",
      priceCurrency: "THB",
      price: service.priceInfo?.startingAt?.replace(/[^0-9]/g, "") || "0",
      availability: "https://schema.org/InStock",
    },
  };
};

export const getCaseStudySchema = (study: CaseStudy) => {
  const title = study.title || study.frontmatter?.title;
  const description =
    study.description ||
    study.excerpt ||
    study.frontmatter?.description ||
    study.frontmatter?.excerpt;
  const image =
    study.image ||
    study.thumbnail ||
    study.frontmatter?.image ||
    study.frontmatter?.thumbnail;
  const date = study.date || study.frontmatter?.date;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteConfig.url}/case-studies/${study.slug}/#article`,
    headline: title,
    description: description,
    image: `${siteConfig.url}${image || siteConfig.ogImage}`,
    datePublished: date,
    author: {
      "@type": "Person",
      "@id": `${siteConfig.founder.url}/#person`,
      name: siteConfig.founder.nameTh,
    },
    publisher: { "@id": `${siteConfig.url}/#organization` },
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
