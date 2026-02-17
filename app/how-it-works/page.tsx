import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, Paintbrush, Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how BuiltForFree takes UK businesses from brief to live website in 5 to 7 business days.",
  alternates: { canonical: "https://builtforfree.co.uk/how-it-works" },
  openGraph: {
    title: "How It Works | BuiltForFree",
    description: "From brief to launch in three clear steps for UK small businesses.",
    type: "website",
    url: "https://builtforfree.co.uk/how-it-works",
  },
};

const steps = [
  {
    icon: ClipboardList,
    title: "Submit Your Brief",
    description: "Share your business goals, services, and preferred style in a short form.",
  },
  {
    icon: Paintbrush,
    title: "Review Your Draft",
    description: "We build your pages, apply your branding, and refine based on your feedback.",
  },
  {
    icon: Rocket,
    title: "Go Live",
    description: "Launch your website and start collecting enquiries from local customers.",
  },
];

export default function HowItWorksPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://builtforfree.co.uk" },
      { "@type": "ListItem", position: 2, name: "How It Works", item: "https://builtforfree.co.uk/how-it-works" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="bg-muted/40 px-4 py-16 sm:px-6 md:py-24">
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

            <div className="mb-12 text-center">
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                How Your Website Gets Built
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">
                Three focused steps, clear communication, and fast launch turnaround.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center rounded-2xl border border-border bg-background p-8 text-center shadow-sm">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">Step {i + 1}</span>
                  <h2 className="mb-2 text-lg font-bold text-foreground">{step.title}</h2>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/#form"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Claim My Free Website
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
