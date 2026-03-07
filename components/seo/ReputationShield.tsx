/** @format */

import { siteConfig } from "@/constants/site-config";
import JsonLd from "./JsonLd";

export default function ReputationShield() {
  const { founder, developer, url, name, fullName, description, ogImage } =
    siteConfig;

  // ป้องกัน undefined สำหรับ developer
  const devUrl = developer?.url || "https://aemdevweb.com";
  const devName = developer?.name || "AemDevWeb";

  const reputationSchema = [
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
      sameAs: [...(founder.sameAs || []), devUrl, url],
      worksFor: {
        "@id": `${url}/#organization`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${url}/#organization`,
      name: name,
      alternateName: fullName,
      url: url,
      logo: {
        "@type": "ImageObject",
        url: `${url}${ogImage}`,
      },
      description: description,
      founder: { "@id": `${founder.url}/#person` },
      knowsAbout: [
        "Digital Reputation Management",
        "Cyber Security",
        "Data Privacy",
        "SEO Engineering",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phone,
        contactType: "customer service",
        areaServed: "TH",
        availableLanguage: ["Thai", "English"],
      },
    },
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
        "@id": `${devUrl}/#organization`,
        name: devName,
        url: devUrl,
      },
    },
  ];

  return <JsonLd data={reputationSchema} />;
}
