import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, Paintbrush, Rocket, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See exactly how BuiltForFree takes your business from brief to launch, with hosting from £15.99/month inc VAT starting when your site goes live.",
  alternates: { canonical: "https://builtforfree.co.uk/how-it-works" },
  openGraph: {
    title: "How It Works | BuiltForFree",
    description: "No trial, no upfront build fee. Your hosting starts when your website launches.",
    type: "website",
    url: "https://builtforfree.co.uk/how-it-works",
  },
};

const steps = [
  {
    icon: ClipboardList,
    title: "Submit your brief",
    description: "Tell us about your business, services, and what you want your website to achieve.",
  },
  {
    icon: Paintbrush,
    title: "Review your draft",
    description: "We design and build your website, then refine it based on your feedback.",
  },
  {
    icon: Rocket,
    title: "Launch and host",
    description: "Your site goes live and hosting starts from £15.99/month inc VAT.",
  },
];

const timeline = [
  {
    window: "Day 0",
    detail: "You submit your brief and we confirm requirements.",
  },
  {
    window: "Days 1-3",
    detail: "We create your first draft and share it with you.",
  },
  {
    window: "Days 3-6",
    detail: "You request revisions and approve final content/layout.",
  },
  {
    window: "Day 5-7",
    detail: "Your website goes live and hosting billing begins.",
  },
];

const weHandle = [
  "Design and development",
  "Mobile optimization",
  "Core technical setup",
  "SSL and hosting environment setup",
  "Revision rounds before launch",
];

const youHandle = [
  "Providing accurate business information",
  "Reviewing drafts and giving feedback",
  "Approving launch",
  "Purchasing and renewing your domain",
  "Paying monthly hosting once live",
];

const miniFaq = [
  {
    q: "Is there a free trial?",
    a: "No. We do not run a trial period. Hosting starts only when your website is launched.",
  },
  {
    q: "When does billing begin?",
    a: "Billing begins on the launch date when your website is made live.",
  },
  {
    q: "What is the monthly hosting fee?",
    a: "Hosting is £15.99 per month inc VAT.",
  },
  {
    q: "Can I cancel later?",
    a: "Yes. You can cancel at any time. Once cancelled, the site is taken offline and no refunds apply after billing.",
  },
];

export default function HowItWorksPage() {
  const baseUrl = "https://builtforfree.co.uk";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
          { "@type": "ListItem", position: 2, name: "How It Works", item: `${baseUrl}/how-it-works` },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/how-it-works#webpage`,
        name: "How It Works",
        url: `${baseUrl}/how-it-works`,
        description:
          "How BuiltForFree designs, builds, and launches websites for UK small businesses with hosting from £15.99/month inc VAT.",
      },
      {
        "@type": "Service",
        "@id": `${baseUrl}#service`,
        name: "Free website build service",
        provider: {
          "@type": "Organization",
          name: "BuiltForFree",
          url: baseUrl,
        },
        areaServed: "United Kingdom",
        offers: {
          "@type": "Offer",
          description: "No upfront build fee. Hosting starts on launch from £15.99/month inc VAT.",
          priceCurrency: "GBP",
          price: "15.99",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: miniFaq.map((item) => ({
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
                    <Link href="/" className="transition-colors hover:text-foreground">
                      Home
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="text-foreground">How It Works</li>
                </ol>
              </nav>

              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  How BuiltForFree Works
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  No upfront build fee. We design and build your website, then hosting starts when your site launches.
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
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">The Process</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {steps.map((step, i) => (
                  <article key={i} className="rounded-2xl border border-border bg-card p-7 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-foreground">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Step {i + 1}</p>
                    <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section-shell bg-muted/20">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Typical Timeline</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {timeline.map((item) => (
                  <article key={item.window} className="rounded-2xl border border-border bg-background p-6">
                    <p className="text-sm font-semibold text-foreground">{item.window}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section-shell bg-background">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Who Handles What</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <article className="rounded-2xl border border-border bg-card p-7">
                  <h3 className="text-xl font-bold text-foreground">What BuiltForFree handles</h3>
                  <ul className="mt-4 space-y-2">
                    {weHandle.map((item) => (
                      <li key={item} className="inline-flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
                <article className="rounded-2xl border border-border bg-card p-7">
                  <h3 className="text-xl font-bold text-foreground">What you handle</h3>
                  <ul className="mt-4 space-y-2">
                    {youHandle.map((item) => (
                      <li key={item} className="inline-flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/#form"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-[#1A1A1A]"
                >
                  Get My Free Website
                </Link>
              </div>
            </div>
          </section>

          <section className="section-shell bg-muted/20">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Pricing and Billing</h2>
              <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-background p-8 text-center">
                <p className="text-lg text-muted-foreground">No trial. No upfront build fee.</p>
                <p className="mt-2 text-3xl font-extrabold text-foreground">£15.99/month inc VAT</p>
                <p className="mt-2 text-sm text-muted-foreground">Hosting starts when your site launches. Domain is purchased separately by you.</p>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {miniFaq.map((item) => (
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
                  Get My Free Website
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
