import { MetadataRoute } from "next";
import { sites } from "@/data/sites";
import { getContentSlugs } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://builtforfree.co.uk";

  const [blogSlugs, articleSlugs, areaSlugs] = await Promise.all([
    getContentSlugs("blog"),
    getContentSlugs("articles"),
    getContentSlugs("areas"),
  ]);

  const examplePages = sites.map((site) => ({
    url: `${baseUrl}/examples/${site.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const articlePages = articleSlugs.map((slug) => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  const areaPages = areaSlugs.map((slug) => ({
    url: `${baseUrl}/areas/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.78,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/how-it-works`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.82 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/cookies`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    ...examplePages,
    ...blogPages,
    ...articlePages,
    ...areaPages,
  ];
}
