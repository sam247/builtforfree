import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getCollectionEntries, getEntryBySlug, getContentSlugs } from "@/lib/content";

export async function generateStaticParams() {
  const areas = await getContentSlugs("areas");
  return areas.map((area) => ({ area }));
}

export async function generateMetadata({ params }: { params: { area: string } }): Promise<Metadata> {
  const areaPage = await getEntryBySlug("areas", params.area);
  if (!areaPage) return { title: "Area Not Found" };

  const canonical = areaPage.canonical || `https://builtforfree.co.uk/areas/${areaPage.slug}`;
  return {
    title: areaPage.title,
    description: areaPage.description,
    alternates: { canonical },
    openGraph: {
      title: `${areaPage.title} | BuiltForFree`,
      description: areaPage.description,
      type: "article",
      url: canonical,
    },
  };
}

export default async function AreaPage({ params }: { params: { area: string } }) {
  const areaPage = await getEntryBySlug("areas", params.area);
  if (!areaPage) notFound();
  const relatedPosts = (await getCollectionEntries("blog")).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://builtforfree.co.uk" },
          { "@type": "ListItem", position: 2, name: "Areas", item: "https://builtforfree.co.uk/blog" },
          { "@type": "ListItem", position: 3, name: areaPage.title, item: `https://builtforfree.co.uk/areas/${areaPage.slug}` },
        ],
      },
      {
        "@type": "Service",
        name: areaPage.title,
        description: areaPage.description,
        areaServed: areaPage.category,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="px-4 py-16 sm:px-6 md:py-20">
          <article className="mx-auto max-w-3xl">
            <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-foreground">Home</Link></li>
                <li>/</li>
                <li className="text-foreground">{areaPage.category}</li>
              </ol>
            </nav>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground">{areaPage.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{areaPage.description}</p>

            <div className="prose-bff mt-8" dangerouslySetInnerHTML={{ __html: areaPage.html }} />

            <section className="mt-10 rounded-2xl border border-border bg-muted/50 p-6">
              <h2 className="text-xl font-bold text-foreground">Get a free website for your business in {areaPage.category}</h2>
              <p className="mt-2 text-sm text-muted-foreground">Tell us about your business and we will map out a conversion-focused build plan.</p>
              <Link href="/#form" className="mt-4 inline-block font-medium text-primary hover:text-primary/80">
                Claim my free website
              </Link>
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-bold text-foreground">Related reading</h2>
              <ul className="mt-4 space-y-2">
                {relatedPosts.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="text-primary hover:text-primary/80">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
}
