import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ArrowLeft } from "lucide-react";
import DeviceFrame from "@/components/DeviceFrame";
import SiteScreenshot from "@/components/SiteScreenshot";
import { Button } from "@/components/ui/button";
import { sites } from "@/data/sites";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return sites.map((site) => ({
    slug: site.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const site = sites.find((s) => s.slug === params.slug);

  if (!site) {
    return {
      title: "Example Not Found",
    };
  }

  const imageUrl = `https://builtforfree.co.uk/sites/${site.slug}.webp`;
  const canonicalUrl = `https://builtforfree.co.uk/examples/${site.slug}`;

  return {
    title: `${site.name} | Example Website Built For Free`,
    description: site.shortDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${site.name} | Example Website Built For Free`,
      description: site.shortDescription,
      type: "website",
      url: canonicalUrl,
      images: [
        {
          url: imageUrl,
          width: 1440,
          height: 900,
          alt: `Screenshot of ${site.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} | Example Website Built For Free`,
      description: site.shortDescription,
      images: [imageUrl],
    },
  };
}

export default function ExamplePage({ params }: { params: { slug: string } }) {
  const site = sites.find((s) => s.slug === params.slug);

  if (!site) {
    notFound();
  }

  const imagePath = `/sites/${site.slug}.webp`;
  const baseUrl = "https://builtforfree.co.uk";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}#organization`,
        name: "BuiltForFree",
        url: baseUrl,
      },
      {
        "@type": "CreativeWork",
        "@id": `${baseUrl}/examples/${site.slug}#creativework`,
        name: site.name,
        url: site.url,
        description: site.shortDescription,
        about: {
          "@type": "Thing",
          name: site.industry,
        },
        image: `${baseUrl}${imagePath}`,
        creator: {
          "@id": `${baseUrl}#organization`,
        },
        inLanguage: "en-GB",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background">
        <div className="bg-background px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-4xl">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/#examples" className="hover:text-foreground transition-colors">
                    Examples
                  </Link>
                </li>
                <li>/</li>
                <li className="text-foreground">{site.name}</li>
              </ol>
            </nav>

            {/* Back button */}
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            {/* Screenshot */}
            <div className="mb-12">
              <DeviceFrame variant="macbook" url={site.url}>
                <SiteScreenshot
                  src={imagePath}
                  alt={`Screenshot of ${site.name}, a ${site.industry} website built for free.`}
                  siteName={site.name}
                  industry={site.industry}
                  priority
                />
              </DeviceFrame>
            </div>

            {/* Content */}
            <article className="space-y-8">
              {/* Project Overview */}
              <div>
                <h1 className="mb-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                  {site.name}
                </h1>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                    {site.industry}
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    Built in {site.builtInDays} {site.builtInDays === 1 ? "day" : "days"}
                  </span>
                  {site.type && (
                    <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                      {site.type}
                    </span>
                  )}
                </div>
                <p className="text-lg text-muted-foreground">{site.shortDescription}</p>
              </div>

              {/* The Goal */}
              {site.goal && (
                <div>
                  <h2 className="mb-3 text-xl font-bold text-foreground">The Goal</h2>
                  <p className="text-muted-foreground">{site.goal}</p>
                </div>
              )}

              {/* What We Delivered */}
              {site.deliverables && site.deliverables.length > 0 && (
                <div>
                  <h2 className="mb-3 text-xl font-bold text-foreground">What We Delivered</h2>
                  <ul className="space-y-2">
                    {site.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Outcome */}
              {site.outcome && (
                <div>
                  <h2 className="mb-3 text-xl font-bold text-foreground">Outcome</h2>
                  <p className="text-muted-foreground">{site.outcome}</p>
                </div>
              )}

              {/* Mid-page CTA */}
              <div className="rounded-2xl border border-border bg-muted/50 p-8 text-center">
                <h2 className="mb-2 text-2xl font-bold text-foreground">
                  Want something like this?
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Get your own professional website built for free.
                </p>
                <Link href="/#form">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Get Your Free Website
                  </Button>
                </Link>
              </div>

              {/* External link */}
              <div>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Visit Website
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Internal links */}
              <div className="pt-8 border-t border-border">
                <p className="mb-4 text-sm font-medium text-foreground">Learn more:</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <Link href="/" className="text-primary hover:text-primary/80 transition-colors">
                    Home
                  </Link>
                  <Link href="/how-it-works" className="text-primary hover:text-primary/80 transition-colors">
                    How It Works
                  </Link>
                  <Link href="/faq" className="text-primary hover:text-primary/80 transition-colors">
                    FAQ
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
