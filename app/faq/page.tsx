import type { Metadata } from "next";
import Link from "next/link";
import FAQSection, { faqs } from "@/components/FAQSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about BuiltForFree pricing, timelines, hosting, and what is included.",
  alternates: { canonical: "https://builtforfree.co.uk/faq" },
  openGraph: {
    title: "FAQ | BuiltForFree",
    description: "Get quick answers about our free website build service for UK small businesses.",
    type: "website",
    url: "https://builtforfree.co.uk/faq",
  },
};

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://builtforfree.co.uk" },
          { "@type": "ListItem", position: 2, name: "FAQ", item: "https://builtforfree.co.uk/faq" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="bg-background px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-3xl">
            <nav className="mb-8 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="transition-colors hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-foreground">FAQ</li>
              </ol>
            </nav>

            <h1 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h1>
            <FAQSection showTitle={false} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
