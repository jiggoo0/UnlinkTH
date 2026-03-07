/** @format */

import { config, fields, collection } from "@keystatic/core";

// 🛡️ [KEYSTATIC MDX COMPONENT SCHEMA] - Fully Aligned with Production MDX
// -----------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mdxSchema: Record<string, any> = {
  AlertCircle: { label: "Alert Circle", schema: {} },
  AlertTriangle: { label: "Alert Triangle", schema: {} },
  BarChart: { label: "Bar Chart", schema: {} },
  ClipboardList: { label: "Clipboard List", schema: {} },
  FileText: { label: "File Text", schema: {} },
  Lightbulb: { label: "Lightbulb", schema: {} },
  Lock: { label: "Lock", schema: {} },
  Search: { label: "Search", schema: {} },
  Shield: { label: "Shield", schema: {} },
  Wrench: { label: "Wrench", schema: {} },
  Terminal: { label: "Terminal", schema: {} },
  // คอมโพเนนต์ที่รับค่า Props (ต้องระบุ Schema เพื่อป้องกัน Build Error)
  Callout: {
    label: "Callout",
    schema: {
      type: fields.select({
        label: "Type",
        options: [
          { label: "Info", value: "info" },
          { label: "Warning", value: "warning" },
          { label: "Secure", value: "secure" },
        ],
        defaultValue: "info",
      }),
    },
  },
  Image: {
    label: "Image",
    schema: {
      src: fields.text({ label: "Image Source Path" }),
      alt: fields.text({ label: "Alternative Text" }),
    },
  },
};

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    blog: collection({
      label: "Blog (บทความ)",
      slugField: "title",
      path: "content/blog/**",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title (หัวข้อ)" } }),
        description: fields.text({ label: "Description", multiline: true }),
        date: fields.date({ label: "Date" }),
        author: fields.text({
          label: "Author",
          defaultValue: "Strategic Operative",
        }),
        image: fields.text({ label: "Primary Image Path" }),
        category: fields.text({ label: "Category", defaultValue: "INSIGHTS" }),
        content: fields.mdx({
          label: "Content",
          components: mdxSchema,
          options: {
            image: {
              directory: "public/images/blog",
              publicPath: "/images/blog",
            },
          },
        }),
      },
    }),
    services: collection({
      label: "Services (บริการ)",
      slugField: "title",
      path: "content/services/**",
      format: { contentField: "content" },
      schema: {
        id: fields.text({ label: "Service ID" }),
        title: fields.slug({ name: { label: "Title" } }),
        category: fields.text({ label: "Category" }),
        description: fields.text({
          label: "Full Description",
          multiline: true,
        }),
        shortDescription: fields.text({ label: "Short Description" }),
        iconName: fields.text({ label: "Icon Name", defaultValue: "Shield" }),
        image: fields.text({ label: "Primary Image Path" }),
        features: fields.array(fields.text({ label: "Feature" })),
        priceInfo: fields.object({
          startingAt: fields.text({ label: "Price" }),
          unit: fields.text({ label: "Unit" }),
          model: fields.text({ label: "Model" }),
        }),
        metadata: fields.object({
          defaultTitle: fields.text({ label: "SEO Title" }),
          defaultDescription: fields.text({ label: "SEO Description" }),
          keywords: fields.array(fields.text({ label: "Keyword" })),
        }),
        content: fields.mdx({
          label: "Details",
          components: mdxSchema,
        }),
      },
    }),
    caseStudies: collection({
      label: "Case Studies (เคสตัวอย่าง)",
      slugField: "title",
      path: "content/case-studies/**",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Summary", multiline: true }),
        date: fields.date({ label: "Date" }),
        author: fields.text({
          label: "Specialist",
          defaultValue: "Strategic Operative",
        }),
        category: fields.text({ label: "Category" }),
        client: fields.text({ label: "Client" }),
        outcome: fields.text({ label: "Outcome" }),
        thumbnail: fields.text({ label: "Thumbnail Path" }),
        image: fields.text({ label: "Banner Path" }),
        content: fields.mdx({
          label: "Case Logs",
          components: mdxSchema,
        }),
      },
    }),
  },
});
