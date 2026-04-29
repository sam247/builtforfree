import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pageUrl = "https://builtforfree.co.uk/free-website-for-small-business-uk";

const suitability = [
  "Local service businesses that rely on calls and enquiries",
  "Businesses replacing an old site that is not generating leads",
  "Owners who want a clear launch process without upfront build fees",
];

const notIdeal = [
  "Complex custom web applications",
  "Large multi-catalog e-commerce requirements",
  "Projects requiring enterprise integrations from day one",
];

const faqItems = [
  {
    q: "Can I get a free website for my small business in the UK?",
    a: "Yes. BuiltForFree creates websites for UK small businesses with no upfront build fee. Hosting starts when your site launches.",
  },
  {
    q: "How does this help with enquiries?",
    a: "We structure pages around clear service messaging, trust signals, and calls to action so visitors know what to do next.",
  },
  {
    q: "Do you support local targeting?",
    a: "Yes. We build pages to support local intent and location-focused visibility for UK service businesses.",
  },
];

export const metadata: Metadata = {
  title: "Free Website for Small Business UK",
  description:
    "Get a free website for your UK small business and start generating more enquiries. No upfront build fee. Clear process and launch support.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Free Website for Small Business UK | BuiltForFree",
    description:
      "BuiltForFree helps UK small businesses launch conversion-focused websites with no upfront build fee.",
    type: "website",
    url: pageUrl,
  },
};

export default function FreeWebsiteForSmallBusinessUkPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://builtforfree.co.uk" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Free Website for Small Business UK",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <section className="section-shell bg-muted/20">
            <div className="mx-auto max-w-6xl">
              <nav className="mb-8 text-sm text-muted-foreground" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2">
                  <li>
                    <Link href="/" className="hover:text-foreground">
                      Home
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="text-foreground">Free Website for Small Business UK</li>
                </ol>
              </nav>
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  Free Website for Small Business UK
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Built for UK small business owners who need more leads. No upfront build fee. Hosting starts after launch.
                </p>
                <Link
                  href="/#form"
                  className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-[#1A1A1A]"
                >
                  Start My Free Website
                </Link>
              </div>
            </div>
          </section>

          <section className="section-shell bg-background">
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
              <article className="rounded-2xl border border-border bg-card p-7">
                <h2 className="text-2xl font-bold text-foreground">Best fit businesses</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {suitability.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="rounded-2xl border border-border bg-card p-7">
                <h2 className="text-2xl font-bold text-foreground">What this offer is not</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {notIdeal.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          <section className="section-shell bg-muted/20">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Common Questions
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                {faqItems.map((item) => (
                  <article key={item.q} className="rounded-2xl border border-border bg-background p-6">
                    <h3 className="text-base font-bold text-foreground">{item.q}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>
                  </article>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link href="/free-website-uk" className="font-medium text-primary hover:text-primary/80">
                  Explore our free website UK overview
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
