import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getCollectionEntries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Website Growth Articles for UK Small Businesses",
  description:
    "Browse practical website growth articles for UK small businesses, including copy, conversion, and local lead generation guidance.",
  alternates: { canonical: "https://builtforfree.co.uk/articles" },
};

export default async function ArticlesIndexPage() {
  const articles = await getCollectionEntries("articles");

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://builtforfree.co.uk" },
      { "@type": "ListItem", position: 2, name: "Articles", item: "https://builtforfree.co.uk/articles" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground">BuiltForFree Articles</h1>
            <p className="mt-3 text-muted-foreground">
              Practical resources to help UK small businesses increase enquiries from their websites.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {articles.map((article) => (
                <article key={article.slug} className="rounded-2xl border border-border bg-card p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {article.category} - {new Date(article.date).toLocaleDateString("en-GB")}
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-foreground">{article.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{article.description}</p>
                  <Link href={`/articles/${article.slug}`} className="mt-4 inline-block font-medium text-primary hover:text-primary/80">
                    Read article
                  </Link>
                </article>
              ))}
            </div>

            <section className="mt-12 rounded-2xl border border-border bg-muted/50 p-6">
              <h2 className="text-2xl font-bold text-foreground">Need help implementing this?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We build conversion-focused websites for UK businesses without an upfront build fee.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <Link href="/free-website-uk" className="font-medium text-primary hover:text-primary/80">
                  Free website UK overview
                </Link>
                <Link href="/#form" className="font-medium text-primary hover:text-primary/80">
                  Claim my free website
                </Link>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
