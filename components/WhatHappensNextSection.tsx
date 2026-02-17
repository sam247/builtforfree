import Link from "next/link";

const steps = [
  {
    title: "1. You submit your details",
    body: "Tell us about your business and what you need your website to achieve.",
  },
  {
    title: "2. We respond within 24 hours",
    body: "You receive confirmation, next steps, and a clear delivery timeline.",
  },
  {
    title: "3. We design and build your site",
    body: "You review the draft and request revisions before launch.",
  },
  {
    title: "4. Site goes live",
    body: "Hosting starts on launch at £15.99/month inc VAT. No long-term contract.",
  },
];

const WhatHappensNextSection = () => {
  return (
    <section className="section-shell bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">What Happens After You Submit</h2>
          <p className="mt-3 text-muted-foreground">A clear process from first message to live website.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {steps.map((step) => (
            <article key={step.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-base font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/#form" className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-[#1A1A1A]">
            Get My Free Website
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatHappensNextSection;
