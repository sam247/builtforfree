import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getEntryBySlug, getContentSlugs } from "@/lib/content";

export async function generateStaticParams() {
  const slugs = await getContentSlugs("articles");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await getEntryBySlug("articles", params.slug);
  if (!article) return { title: "Article Not Found" };

  const canonical = article.canonical || `https://builtforfree.co.uk/articles/${article.slug}`;

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical },
    openGraph: {
      title: `${article.title} | BuiltForFree`,
      description: article.description,
      url: canonical,
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getEntryBySlug("articles", params.slug);
  if (!article) notFound();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="px-4 py-16 sm:px-6 md:py-20">
        <article className="mx-auto max-w-3xl">
          <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-foreground">Home</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
              <li>/</li>
              <li className="text-foreground">Article</li>
            </ol>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{article.category}</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-foreground">{article.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{article.description}</p>

          <div className="prose-bff mt-8" dangerouslySetInnerHTML={{ __html: article.html }} />

          <section className="mt-10 rounded-2xl border border-border bg-muted/50 p-6">
            <h2 className="text-xl font-bold text-foreground">Need a stronger local presence?</h2>
            <p className="mt-2 text-sm text-muted-foreground">We build websites for UK businesses that need more leads, calls, and bookings.</p>
            <Link href="/#form" className="mt-4 inline-block font-medium text-primary hover:text-primary/80">
              Claim my free website
            </Link>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
