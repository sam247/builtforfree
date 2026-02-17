"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import DeviceFrame from "@/components/DeviceFrame";
import SiteScreenshot from "@/components/SiteScreenshot";
import { sites } from "@/data/sites";
import { trackEvent } from "@/lib/analytics";

const ExampleSites = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set(prev).add(index));
              observer.unobserve(ref);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "50px",
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  if (sites.length === 0) {
    return null;
  }

  return (
    <section id="examples" className="bg-background px-4 py-16 sm:px-6 md:py-24">
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
          {sites.map((site, index) => {
            const imagePath = `/sites/${site.slug}.webp`;
            const isVisible = visibleItems.has(index);
            
            return (
              <article
                key={site.slug}
                ref={(el) => {
                  itemRefs.current[index] = el as HTMLElement | null;
                }}
                className={`
                  group flex flex-col overflow-hidden rounded-2xl border border-border bg-card
                  transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:shadow-xl
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                `}
                style={{
                  transitionDelay: isVisible ? `${index * 50}ms` : "0ms",
                }}
              >
                <Link href={`/examples/${site.slug}`} className="flex-1">
                  <div className="relative overflow-hidden bg-muted p-4">
                    <DeviceFrame variant="macbook" url={site.url}>
                      <SiteScreenshot
                        src={imagePath}
                        alt={`Screenshot of ${site.name}, a ${site.industry} website built for free.`}
                        siteName={site.name}
                        industry={site.industry}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </DeviceFrame>
                  </div>

                  <div className="p-5">
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {site.name}
                      </h3>
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
                      {site.shortDescription}
                    </p>
                  </div>
                </Link>

                <div className="px-5 pb-5">
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("outbound_click", {
                        location: "examples_grid",
                        destination: site.url,
                      })
                    }
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`Visit ${site.name} (opens in new tab)`}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Visit site
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExampleSites;
