import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import { ContentEntry, ContentFrontmatter } from "@/lib/types";

const CONTENT_ROOT = path.join(process.cwd(), "content");

type Collection = "blog" | "articles" | "areas";

function isFrontmatterValid(data: Partial<ContentFrontmatter>): data is ContentFrontmatter {
  return Boolean(
    data.title &&
      data.description &&
      data.slug &&
      data.date &&
      data.category &&
      data.intent &&
      data.author
  );
}

async function toHtml(markdown: string): Promise<string> {
  const result = await remark().use(remarkGfm).use(remarkHtml).process(markdown);
  return result.toString();
}

function readCollectionFiles(collection: Collection): string[] {
  const collectionDir = path.join(CONTENT_ROOT, collection);
  if (!fs.existsSync(collectionDir)) {
    return [];
  }

  return fs
    .readdirSync(collectionDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => path.join(collectionDir, file));
}

export async function getCollectionEntries(collection: Collection): Promise<ContentEntry[]> {
  const files = readCollectionFiles(collection);

  const entries = await Promise.all(
    files.map(async (filePath) => {
      const raw = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(raw);

      if (!isFrontmatterValid(data as Partial<ContentFrontmatter>)) {
        throw new Error(`Invalid frontmatter in ${filePath}`);
      }

      const html = await toHtml(content);

      return {
        ...(data as ContentFrontmatter),
        content,
        html,
        collection,
      } satisfies ContentEntry;
    })
  );

  return entries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getEntryBySlug(
  collection: Collection,
  slug: string
): Promise<ContentEntry | null> {
  const entries = await getCollectionEntries(collection);
  return entries.find((entry) => entry.slug === slug) ?? null;
}

export async function getContentSlugs(collection: Collection): Promise<string[]> {
  const entries = await getCollectionEntries(collection);
  return entries.map((entry) => entry.slug);
}
