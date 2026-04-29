import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pageUrl = "https://builtforfree.co.uk/free-website-uk";

const faqItems = [
  {
    q: "Is this really a free website build?",
    a: "Yes. We do not charge an upfront build fee. Monthly hosting starts only when your website launches.",
  },
  {
    q: "Who is this for?",
    a: "This is designed for UK small businesses that want more enquiries from their website without paying a large setup cost.",
  },
  {
    q: "What is included?",
    a: "We design and build your website, optimize it for mobile, set up core technical essentials, and refine it with your feedback before launch.",
  },
  {
    q: "How quickly can we launch?",
    a: "Most sites launch in around 5 to 7 business days after we receive your brief and feedback.",
  },
];

const trustPoints = [
  "No upfront build fee",
  "UK-focused small business websites",
  "Conversion-focused page structure",
  "Mobile-first design and technical setup",
];

export const metadata: Metadata = {
  title: "Free Website UK for Small Businesses",
  description:
    "Get a free website build in the UK for your small business. BuiltForFree designs and launches conversion-focused sites with hosting from £15.99/month after launch.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Free Website UK for Small Businesses | BuiltForFree",
    description:
      "Claim your free UK website build with no upfront build fee and a clear launch process.",
    type: "website",
    url: pageUrl,
  },
};

export default function FreeWebsiteUkPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://builtforfree.co.uk" },
          { "@type": "ListItem", position: 2, name: "Free Website UK", item: pageUrl },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        name: "Free Website UK for Small Businesses",
        url: pageUrl,
        description:
          "Free website build service for UK small businesses with no upfront build fee.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
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
                  <li className="text-foreground">Free Website UK</li>
                </ol>
              </nav>
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  Free Website UK for Small Businesses
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Launch a professional website without an upfront build fee. We build your site, you start hosting when it goes live.
                </p>
                <Link
                  href="/#form"
                  className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-[#1A1A1A]"
                >
                  Get My Free Website
                </Link>
              </div>
            </div>
          </section>

          <section className="section-shell bg-background">
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
              <article className="rounded-2xl border border-border bg-card p-7">
                <h2 className="text-2xl font-bold text-foreground">What you get</h2>
                <ul className="mt-4 space-y-2">
                  {trustPoints.map((point) => (
                    <li key={point} className="inline-flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-2xl border border-border bg-card p-7">
                <h2 className="text-2xl font-bold text-foreground">Is this right for your business?</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Best for service-led UK businesses that need more qualified calls, bookings, and enquiry form submissions from their website.
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  If you need advanced custom systems or e-commerce at scale, we will advise whether this offer is the right fit.
                </p>
                <Link href="/how-it-works" className="mt-4 inline-block font-medium text-primary hover:text-primary/80">
                  See how the process works
                </Link>
              </article>
            </div>
          </section>

          <section className="section-shell bg-muted/20">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Free Website UK FAQs
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {faqItems.map((item) => (
                  <article key={item.q} className="rounded-2xl border border-border bg-background p-6">
                    <h3 className="text-base font-bold text-foreground">{item.q}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>
                  </article>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link
                  href="/#form"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-[#1A1A1A]"
                >
                  Claim My Free Website
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
