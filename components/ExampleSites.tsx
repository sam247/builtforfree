"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import DeviceFrame from "@/components/DeviceFrame";
import { sites } from "@/data/sites";

const ExampleSites = () => {
  if (sites.length === 0) {
    return null;
  }

  return (
    <section className="bg-background px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            Example Websites We&apos;ve Built
          </h2>
          <p className="mt-3 text-muted-foreground">
            Real client websites. Real results. All built for free.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sites.map((site) => {
            const imagePath = `/sites/${site.slug}.webp`;
            
            return (
              <article
                key={site.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                <Link href={`/examples/${site.slug}`} className="flex-1">
                  <div className="relative overflow-hidden bg-muted p-4">
                    <DeviceFrame variant="macbook" url={site.url}>
                      <Image
                        src={imagePath}
                        alt={`Screenshot of ${site.name}, a ${site.industry} website built for free.`}
                        width={1440}
                        height={900}
                        className="h-full w-full object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </DeviceFrame>
                  </div>

                  <div className="p-5">
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {site.name}
                      </h3>
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`Visit ${site.name} (opens in new tab)`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>

                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                        {site.industry}
                      </span>
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        Built in {site.builtInDays} {site.builtInDays === 1 ? "day" : "days"}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {site.description}
                    </p>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExampleSites;
