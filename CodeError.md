                    /14.3s❯ pnpm type-check && pnpm lint

Alias: p type-check && pnpm lint

> unlinkth@0.1.0 type-check /data/data/com.termux/files/home/UnlinkTH
> tsc --noEmit

.next/types/validator.ts:170:39 - error TS2306: File '/data/data/com.termux/files/home/UnlinkTH/app/api/upload/route.ts' is not a module.

170 const handler = {} as typeof import("../../app/api/upload/route.js")

```
app/(main)/cases/page.tsx:50:14 - error TS2741: Property 'badge' is missing in type '{ title: string; subtitle: string; description: string; align: "left"; className: string; }' but required in type 'SectionHeadingProps'.
50 <SectionHeading
~~~~~~~~~~~~~~
components/shared/section-heading.tsx:11:3 11 badge: string ~~~~~
'badge' is declared here. app/(main)/services/page.tsx:136:18 - error TS2304: Cannot find name 'ArrowRight'. 136 <ArrowRight ~~~~~~~~~~ app/sitemap.ts:37:27 - error TS2339: Property 'updatedAt' does not exist on type 'Project'.
37 lastModified: project.updatedAt ? new Date(project.updatedAt) : now, ~~~~~~~~~

app/sitemap.ts:37:56 - error TS2339: Property 'updatedAt' does not exist on type 'Project'.
37 lastModified: project.updatedAt ? new Date(project.updatedAt) : now,
~~~~~~~~~

components/seo/Seo.tsx:31:45 - error TS2554: Expected 0-1 arguments, but got 3.

31 const metadata = constructMetadata(title, description, image)
~~~~~~~~~~~~~~~~~~
components/seo/Seo.tsx:32:34 - error TS2339: Property 'siteUrl' does not exist on type 'Metadata'.

32 const currentUrl = `${metadata.siteUrl}${pathname}`
~~~~~~~

components/seo/Seo.tsx:41:7 - error TS2345: Argument of type '{ '@context': string; '@type': string; '@id': string; name: string; description: string; provider: { '@id': string; }; serviceType: string; areaServed: { '@type': string; name: string; }; hasOfferCatalog: { '@type': string; name: string; itemListElement: { ...; }[]; }; }' is not assignable to parameter of type '{ '@context': string; '@type': string; '@id': string; name: string; url: string; logo: { '@type': string; url: string; width: string; height: string; }; sameAs: string[]; contactPoint: { '@type': string; telephone: string; contactType: string; areaServed: string; availableLanguage: string[]; }; }'.
Type '{ '@context': string; '@type': string; '@id': string; name: string; description: string; provider: { '@id': string; }; serviceType: string; areaServed: { '@type': string; name: string; }; hasOfferCatalog: { '@type': string; name: string; itemListElement: { ...; }[]; }; }' is missing the following properties from type '{ '@context': string; '@type': string; '@id': string; name: string; url: string; logo: { '@type': string; url: string; width: string; height: string; }; sameAs: string[]; contactPoint: { '@type': string; telephone: string; contactType: string; areaServed: string; availableLanguage: string[]; }; }': url, logo, sameAs, contactPoint

41 generateServiceSchema({
~~~~~~~~~~~~~~~~~~~~~~~
42 title: metadata.title,
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
...
44 url: currentUrl,
~~~~~~~~~~~~~~~~~~~~~~~~
45 }), ~~~~~~~~

components/seo/Seo.tsx:42:9 - error TS2322: Type 'string | TemplateString | null | undefined' is not assignable to type 'string'. Type 'undefined' is not assignable to type 'string'.

42 title: metadata.title,
~~~~~

lib/seo/schema-helper.ts:42:3
42 title: string ~~~~~
The expected type comes from property 'title' which is declared here on type '{ title: string; description: string; slug: string; }'

components/seo/Seo.tsx:43:9 - error TS2322: Type 'string | null | undefined' is not assignable to type 'string'.
Type 'undefined' is not assignable to type 'string'.
43 description: metadata.description,
~~~~~~~~~~~
 lib/seo/schema-helper.ts:43:3
43 description: string ~~~~~~~~~~~
The expected type comes from property 'description' which is declared here on type '{ title: string; description: string; slug: string; }'
components/seo/Seo.tsx:55:14 - error TS2322: Type 'string | TemplateString | null | undefined' is not assignable to type 'ReactNode'. Type 'DefaultTemplateString' is not assignable to type 'ReactNode'.
55 <title>{metadata.title}</title>
~~~~~~~~~~~~~~~~
 node_modules/.pnpm/@types+react@19.2.7/node_modules/@types/react/index.d.ts:2230:9 2230 children?: ReactNode | undefined;
~~~~~~~~
The expected type comes from property 'children' which is declared here on type 'DetailedHTMLProps<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>'

components/seo/Seo.tsx:56:32 - error TS2322: Type 'string | null | undefined' is not assignable to type 'string | undefined'.
Type 'null' is not assignable to type 'string | undefined'.
56 <meta name="description" content={metadata.description} />
~~~~~~~
 node_modules/.pnpm/@types+react@19.2.7/node_modules/@types/react/index.d.ts:3349:9 3349 content?: string | undefined;
~~~~~~~ The expected type comes from property 'content' which is declared here on type 'DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>'
components/seo/Seo.tsx:64:33 - error TS2322: Type 'string | TemplateString | null | undefined' is not assignable to type 'string | undefined'.
Type 'null' is not assignable to type 'string | undefined'.
64 <meta property="og:title" content={metadata.title} /> ~~~~~~~
node_modules/.pnpm/@types+react@19.2.7/node_modules/@types/react/index.d.ts:3349:9
3349 content?: string | undefined;
~~~~~~~
The expected type comes from property 'content' which is declared here on type 'DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>'
components/seo/Seo.tsx:65:39 - error TS2322: Type 'string | null | undefined' is not assignable to type 'string | undefined'. Type 'null' is not assignable to type 'string | undefined'. 65 <meta property="og:description" content={metadata.description} /> ~~~~~~~
 node_modules/.pnpm/@types+react@19.2.7/node_modules/@types/react/index.d.ts:3349:9
3349 content?: string | undefined; ~~~~~~~ The expected type comes from property 'content' which is declared here on type 'DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>' components/seo/Seo.tsx:66:51 - error TS2339: Property 'ogImage' does not exist on type 'Metadata'. 66 <meta property="og:image" content={metadata.ogImage} />
~~~~~~~
components/seo/Seo.tsx:71:34 - error TS2322: Type 'string | TemplateString | null | undefined' is not assignable to type 'string | undefined'. Type 'null' is not assignable to type 'string | undefined'. 71 <meta name="twitter:title" content={metadata.title} /> ~~~~~~~ node_modules/.pnpm/@types+react@19.2.7/node_modules/@types/react/index.d.ts:3349:9
3349 content?: string | undefined;
~~~~~~~ The expected type comes from property 'content' which is declared here on type 'DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>' components/seo/Seo.tsx:72:40 - error TS2322: Type 'string | null | undefined' is not assignable to type 'string | undefined'. Type 'null' is not assignable to type 'string | undefined'. 72 <meta name="twitter:description" content={metadata.description} />
~~~~~~~ node_modules/.pnpm/@types+react@19.2.7/node_modules/@types/react/index.d.ts:3349:9 3349 content?: string | undefined; ~~~~~~~ The expected type comes from property 'content' which is declared here on type 'DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>' components/seo/Seo.tsx:73:52 - error TS2339: Property 'ogImage' does not exist on type 'Metadata'.

73 <meta name="twitter:image" content={metadata.ogImage} /> ~~~~~~~

components/shared/Footer.tsx:66:21 - error TS2322: Type '{ fontSize: string; iconSize: number; }' is not assignable to type 'IntrinsicAttributes & LogoProps'.
Property 'fontSize' does not exist on type 'IntrinsicAttributes & LogoProps'.

66 <Logo fontSize="text-2xl" iconSize={22} /> ~~~~~~~~ components/shared/Navbar.tsx:83:19 - error TS2322: Type '{ fontSize: string; iconSize: number; }' is not assignable to type 'IntrinsicAttributes & LogoProps'. Property 'fontSize' does not exist on type 'IntrinsicAttributes & LogoProps'. 83 <Logo fontSize="text-[14px] md:text-base" iconSize={16} />
~~~~~~~~

Found 20 errors in 7 files.

Errors Files
1 .next/types/validator.ts:170
1 app/(main)/cases/page.tsx:50
1 app/(main)/services/page.tsx:136 2 app/sitemap.ts:37
13 components/seo/Seo.tsx:31 1 components/shared/Footer.tsx:66
1 components/shared/Navbar.tsx:83
 ELIFECYCLE  Command failed with exit code 2. /18.9s❯ pl

> unlinkth@0.1.0 lint /data/data/com.termux/files/home/UnlinkTH > eslint .

/data/data/com.termux/files/home/UnlinkTH/app/(main)/about/page.tsx
9:10 warning 'cn' is defined but never used @typescript-eslint/no-unused-vars
52:28 error `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;` react/no-unescaped-entities 52:43 error `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;` react/no-unescaped-entities
/data/data/com.termux/files/home/UnlinkTH/app/(main)/cases/[slug]/page.tsx
96:56 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
142:19 error `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;` react/no-unescaped-entities
142:41 error `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;` react/no-unescaped-entities

/data/data/com.termux/files/home/UnlinkTH/app/(main)/contact/page.tsx 9:10 warning 'cn' is defined but never used @typescript-eslint/no-unused-vars

/data/data/com.termux/files/home/UnlinkTH/app/(main)/faq/page.tsx 16:10 warning 'motion' is defined but never used @typescript-eslint/no-unused-vars
17:10 warning 'cn' is defined but never used @typescript-eslint/no-unused-vars
/data/data/com.termux/files/home/UnlinkTH/app/(main)/privacy/page.tsx
10:3 warning 'Lock' is defined but never used @typescript-eslint/no-unused-vars
15:10 warning 'cn' is defined but never used @typescript-eslint/no-unused-vars
84:21 error `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;` react/no-unescaped-entities
84:29 error `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;` react/no-unescaped-entities
/data/data/com.termux/files/home/UnlinkTH/app/(main)/services/page.tsx
136:18 error 'ArrowRight' is not defined react/jsx-no-undef
/data/data/com.termux/files/home/UnlinkTH/app/(main)/terms/page.tsx 15:10 warning 'cn' is defined but never used @typescript-eslint/no-unused-vars
/data/data/com.termux/files/home/UnlinkTH/app/api/send-mail/route.ts
4:9 warning 'body' is assigned a value but never used @typescript-eslint/no-unused-vars

/data/data/com.termux/files/home/UnlinkTH/components/contact/ContactForm.tsx
7:3 warning 'Send' is defined but never used @typescript-eslint/no-unused-vars 11:3 warning 'CheckCircle2' is defined but never used @typescript-eslint/no-unused-vars 15:10 warning 'cn' is defined but never used @typescript-eslint/no-unused-vars 41:14 warning 'error' is defined but never used @typescript-eslint/no-unused-vars

/data/data/com.termux/files/home/UnlinkTH/components/home/FaqSection.tsx 67:33 warning 'index' is defined but never used @typescript-eslint/no-unused-vars /data/data/com.termux/files/home/UnlinkTH/components/home/HeroSection.tsx 10:10 warning 'cn' is defined but never used @typescript-eslint/no-unused-vars /data/data/com.termux/files/home/UnlinkTH/components/service/PricingSection.tsx 16:10 warning 'ShieldCheck' is defined but never used @typescript-eslint/no-unused-vars
16:37 warning 'HelpCircle' is defined but never used @typescript-eslint/no-unused-vars 16:49 warning 'ArrowRight' is defined but never used @typescript-eslint/no-unused-vars /data/data/com.termux/files/home/UnlinkTH/components/service/ServiceListRow.tsx 8:10 warning 'cn' is defined but never used @typescript-eslint/no-unused-vars 23:49 warning 'index' is defined but never used @typescript-eslint/no-unused-vars /data/data/com.termux/files/home/UnlinkTH/components/shared/Footer.tsx
8:3 warning 'Mail' is defined but never used @typescript-eslint/no-unused-vars
9:3 warning 'Globe' is defined but never used @typescript-eslint/no-unused-vars 13:3 warning 'Lock' is defined but never used @typescript-eslint/no-unused-vars 15:3 warning 'Zap' is defined but never used @typescript-eslint/no-unused-vars 18:10 warning 'cn' is defined but never used @typescript-eslint/no-unused-vars /data/data/com.termux/files/home/UnlinkTH/components/shared/google-analytics.tsx 63:16 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
/data/data/com.termux/files/home/UnlinkTH/components/shared/trust-badge.tsx 6:42 warning 'ShieldAlert' is defined but never used @typescript-eslin
```
