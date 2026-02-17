import { MetadataRoute } from "next";
import { sites } from "@/data/sites";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://builtforfree.co.uk";

  const examplePages = sites.map((site) => ({
    url: `${baseUrl}/examples/${site.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...examplePages,
  ];
}
