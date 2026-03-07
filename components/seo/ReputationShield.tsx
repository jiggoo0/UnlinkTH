/** @format */

import { siteConfig } from "@/constants/site-config";
import JsonLd from "./JsonLd";

/**
 * REPUTATION SHIELD | Advanced Identity Infrastructure
 * -------------------------------------------------------------------------
 * หน้าที่: สร้างความน่าเชื่อถือระดับสูงสุด (E-E-A-T) ให้กับผู้ก่อตั้งและองค์กร
 * เพื่อป้องกันการกลั่นแกล้งทางข้อมูล (Blacklist) และยืนยันตัวตนกับ Google
 */

export default function ReputationShield() {
  const { founder, developer, url, name, fullName, description, ogImage } = siteConfig;

  const reputationSchema = [
    // [1] FOUNDER IDENTITY (ยืนยันตัวตนจริงของผู้ก่อตั้ง)
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${founder.url}/#person`,
      name: founder.nameTh,
      alternateName: [founder.name, founder.nickname],
      jobTitle: founder.role,
      url: founder.url,
      image: `${url}${ogImage}`,
      description: `Founder of UNLINK-GLOBAL and AemDevWeb. Expert in Data Architecture and Digital Reputation.`,
      sameAs: [
        ...founder.sameAs,
        developer.url,
        url
      ],
      worksFor: {
        "@id": `${url}/#organization`
      }
    },
    // [2] ORGANIZATION AUTHORITY (ยืนยันความน่าเชื่อถือของบริษัท)
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${url}/#organization`,
      name: name,
      alternateName: fullName,
      url: url,
      logo: {
        "@type": "ImageObject",
        url: `${url}${ogImage}`
      },
      description: description,
      founder: { "@id": `${founder.url}/#person` },
      knowsAbout: [
        "Digital Reputation Management",
        "Cyber Security",
        "Data Privacy",
        "SEO Engineering"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phone,
        contactType: "customer service",
        areaServed: "TH",
        availableLanguage: ["Thai", "English"]
      }
    },
    // [3] TECHNICAL PARTNERSHIP (ยืนยันความสัมพันธ์กับ AemDevWeb)
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${url}/#website`,
      url: url,
      name: name,
      publisher: { "@id": `${url}/#organization` },
      creator: { "@id": `${founder.url}/#person` },
      maintainer: {
        "@type": "Organization",
        "@id": `${developer.url}/#organization`,
        name: developer.name,
        url: developer.url
      }
    }
  ];

  return <JsonLd data={reputationSchema} />;
}
