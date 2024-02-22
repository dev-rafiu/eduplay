import { MetadataRoute } from "next";

export const WEBSITE_HOST_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://adeuplay.netlify.app";

type changeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export default function sitemap(): MetadataRoute.Sitemap {
  const changeFrequency = "daily" as changeFrequency;

  const routes = [""].map((route) => ({
    url: `${WEBSITE_HOST_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
  }));

  return [...routes];
}
