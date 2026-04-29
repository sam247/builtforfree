import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getCollectionEntries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Areas We Cover Across the UK",
  description:
    "Explore BuiltForFree area pages and local website guidance for UK small businesses looking to generate more enquiries.",
  alternates: { canonical: "https://builtforfree.co.uk/areas" },
};

export default async function AreasIndexPage() {
  const areas = await getCollectionEntries("areas");

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://builtforfree.co.uk" },
      { "@type": "ListItem", position: 2, name: "Areas", item: "https://builtforfree.co.uk/areas" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground">UK Areas We Cover</h1>
            <p className="mt-3 text-muted-foreground">
              Location-specific website guidance and lead generation pages for UK small businesses.
            </p>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {areas.map((area) => (
                <li key={area.slug} className="rounded-2xl border border-border bg-card p-5">
                  <h2 className="text-lg font-bold text-foreground">{area.category}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{area.description}</p>
                  <Link href={`/areas/${area.slug}`} className="mt-3 inline-block font-medium text-primary hover:text-primary/80">
                    View area page
                  </Link>
                </li>
              ))}
            </ul>

            <section className="mt-12 rounded-2xl border border-border bg-muted/50 p-6">
              <h2 className="text-2xl font-bold text-foreground">Looking for a free website in your area?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                See how our UK-wide offer works and start your brief today.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <Link href="/free-website-uk" className="font-medium text-primary hover:text-primary/80">
                  Free website UK
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
