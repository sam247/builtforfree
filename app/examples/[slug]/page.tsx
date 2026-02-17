import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowLeft } from "lucide-react";
import DeviceFrame from "@/components/DeviceFrame";
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

  return {
    title: `${site.name} | Built For Free Example`,
    description: site.description,
    openGraph: {
      title: `${site.name} | Built For Free Example`,
      description: site.description,
      type: "website",
      url: `https://builtforfree.co.uk/examples/${site.slug}`,
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
      title: `${site.name} | Built For Free Example`,
      description: site.description,
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
        logo: `${baseUrl}/logo.png`,
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/examples/${site.slug}#website`,
        name: site.name,
        url: site.url,
        description: site.description,
        about: {
          "@type": "Thing",
          name: site.industry,
        },
        image: `${baseUrl}${imagePath}`,
        creator: {
          "@id": `${baseUrl}#organization`,
        },
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
            <div className="mb-8">
              <DeviceFrame variant="macbook" url={site.url}>
                <Image
                  src={imagePath}
                  alt={`Screenshot of ${site.name}, a ${site.industry} website built for free.`}
                  width={1440}
                  height={900}
                  className="h-full w-full object-cover"
                  priority
                />
              </DeviceFrame>
            </div>

            {/* Content */}
            <article className="space-y-6">
              <div>
                <h1 className="mb-2 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                  {site.name}
                </h1>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                    {site.industry}
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    Built in {site.builtInDays} {site.builtInDays === 1 ? "day" : "days"}
                  </span>
                </div>
              </div>

              <div className="prose prose-sm max-w-none">
                <p className="text-lg text-muted-foreground">{site.description}</p>
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
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
