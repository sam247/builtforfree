import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pageUrl = "https://builtforfree.co.uk/free-website-vs-diy-uk";

const comparisonRows = [
  {
    label: "Upfront cash cost",
    diy: "Low software cost, high time cost",
    builtForFree: "No upfront build fee",
  },
  {
    label: "Time to launch",
    diy: "Often delayed while learning tools",
    builtForFree: "Typical launch in 5 to 7 business days",
  },
  {
    label: "Conversion structure",
    diy: "Varies by template and experience",
    builtForFree: "Built around enquiries, calls, and bookings",
  },
  {
    label: "Support",
    diy: "Self-managed troubleshooting",
    builtForFree: "Guided launch support and revisions",
  },
];

const faqItems = [
  {
    q: "Should I make a website myself for free?",
    a: "DIY can work if you have time and confidence in copy, structure, and optimization. Most owners choose done-for-you support to launch faster.",
  },
  {
    q: "What is the main difference between DIY and BuiltForFree?",
    a: "DIY tools reduce software costs but usually require significant owner time. BuiltForFree removes the build workload and focuses on conversion-ready launch.",
  },
  {
    q: "Can I still control my website content?",
    a: "Yes. We build and launch with your business input, and you can provide feedback before going live.",
  },
];

export const metadata: Metadata = {
  title: "Free Website vs DIY Website Builder UK",
  description:
    "Compare a free website build service vs DIY website builders in the UK. See cost, speed, and conversion differences for small businesses.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Free Website vs DIY Website Builder UK | BuiltForFree",
    description:
      "A practical UK comparison for small businesses choosing between DIY and done-for-you website builds.",
    type: "website",
    url: pageUrl,
  },
};

export default function FreeWebsiteVsDiyUkPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://builtforfree.co.uk" },
          { "@type": "ListItem", position: 2, name: "Free Website vs DIY UK", item: pageUrl },
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
                  <li className="text-foreground">Free Website vs DIY UK</li>
                </ol>
              </nav>
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  Free Website vs DIY Website Builder UK
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Choosing between building it yourself and using a done-for-you service? Here is a practical comparison for UK small businesses.
                </p>
              </div>
            </div>
          </section>

          <section className="section-shell bg-background">
            <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border">
              <div className="grid grid-cols-3 bg-muted/50 p-4 text-sm font-semibold text-foreground">
                <div>Decision point</div>
                <div>DIY Builder</div>
                <div>BuiltForFree</div>
              </div>
              {comparisonRows.map((row) => (
                <div key={row.label} className="grid grid-cols-3 border-t border-border p-4 text-sm">
                  <div className="font-medium text-foreground">{row.label}</div>
                  <div className="text-muted-foreground">{row.diy}</div>
                  <div className="text-muted-foreground">{row.builtForFree}</div>
                </div>
              ))}
            </div>
            <div className="mx-auto mt-8 max-w-3xl text-center">
              <p className="text-muted-foreground">
                If your priority is launching quickly and generating enquiries, a done-for-you build is often the lower-risk option.
              </p>
              <Link
                href="/#form"
                className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-[#1A1A1A]"
              >
                Claim My Free Website
              </Link>
            </div>
          </section>

          <section className="section-shell bg-muted/20">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                DIY vs Free Website FAQs
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
                <Link href="/free-website-for-small-business-uk" className="font-medium text-primary hover:text-primary/80">
                  See small business website options
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
