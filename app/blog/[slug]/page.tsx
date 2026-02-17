import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getCollectionEntries, getEntryBySlug, getContentSlugs } from "@/lib/content";

export async function generateStaticParams() {
  const slugs = await getContentSlugs("blog");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getEntryBySlug("blog", params.slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  const canonical = post.canonical || `https://builtforfree.co.uk/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical },
    openGraph: {
      title: `${post.title} | BuiltForFree`,
      description: post.description,
      url: canonical,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getEntryBySlug("blog", params.slug);
  if (!post) notFound();

  const related = (await getCollectionEntries("articles"))
    .filter((item) => item.category === post.category)
    .slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://builtforfree.co.uk" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://builtforfree.co.uk/blog" },
          { "@type": "ListItem", position: 3, name: post.title, item: `https://builtforfree.co.uk/blog/${post.slug}` },
        ],
      },
      {
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        author: { "@type": "Person", name: post.author },
      },
      post.faq && post.faq.length
        ? {
            "@type": "FAQPage",
            mainEntity: post.faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }
        : null,
    ].filter(Boolean),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="px-4 py-16 sm:px-6 md:py-20">
          <article className="mx-auto max-w-3xl">
            <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-foreground">Home</Link></li>
                <li>/</li>
                <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
              </ol>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {post.category} - {new Date(post.date).toLocaleDateString("en-GB")}
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-foreground">{post.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>

            <div className="prose-bff mt-8" dangerouslySetInnerHTML={{ __html: post.html }} />

            <section className="mt-10 rounded-2xl border border-border bg-muted/50 p-6">
              <h2 className="text-xl font-bold text-foreground">Ready to launch your website?</h2>
              <p className="mt-2 text-sm text-muted-foreground">Claim your free build and get a tailored website proposal within one business day.</p>
              <Link href="/#form" className="mt-4 inline-block font-medium text-primary hover:text-primary/80">
                Claim my free website
              </Link>
            </section>

            {related.length > 0 && (
              <section className="mt-10">
                <h2 className="text-xl font-bold text-foreground">Related resources</h2>
                <ul className="mt-4 space-y-2">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link href={`/articles/${item.slug}`} className="text-primary hover:text-primary/80">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
}
