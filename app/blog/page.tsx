import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getCollectionEntries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Actionable website and local SEO guidance for UK small businesses looking to increase enquiries.",
  alternates: { canonical: "https://builtforfree.co.uk/blog" },
};

export default async function BlogIndexPage() {
  const [posts, areas] = await Promise.all([
    getCollectionEntries("blog"),
    getCollectionEntries("areas"),
  ]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://builtforfree.co.uk" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://builtforfree.co.uk/blog" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground">BuiltForFree Blog</h1>
            <p className="mt-3 text-muted-foreground">
              Conversion, local SEO, and website strategy resources for UK small businesses.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <article key={post.slug} className="rounded-2xl border border-border bg-card p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {post.category} - {new Date(post.date).toLocaleDateString("en-GB")}
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-foreground">{post.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{post.description}</p>
                  <Link href={`/blog/${post.slug}`} className="mt-4 inline-block font-medium text-primary hover:text-primary/80">
                    Read article
                  </Link>
                </article>
              ))}
            </div>

            <section className="mt-12 rounded-2xl border border-border bg-muted/50 p-6">
              <h2 className="text-2xl font-bold text-foreground">Explore by area</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Location-specific website guides for UK business owners.
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {areas.slice(0, 8).map((area) => (
                  <li key={area.slug}>
                    <Link href={`/areas/${area.slug}`} className="text-primary hover:text-primary/80">
                      {area.category} website guide
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
