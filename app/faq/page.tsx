import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "FAQ | BuiltForFree",
  description: "Frequently asked questions about our free website building service. Get answers about pricing, timeline, and what's included.",
  openGraph: {
    title: "FAQ | BuiltForFree",
    description: "Frequently asked questions about our free website building service.",
    type: "website",
    url: "https://builtforfree.co.uk/faq",
  },
  twitter: {
    card: "summary",
    title: "FAQ | BuiltForFree",
    description: "Frequently asked questions about our free website building service.",
  },
};

const faqs = [
  {
    q: "Is it really free?",
    a: "Yes — we design and build your website completely free of charge. You only pay for hosting (£15.99/month) and your domain name (around £10/year).",
  },
  {
    q: "What do I pay for?",
    a: "You cover the hosting fee (£15.99/month) to keep your site live, and your domain name (around £10/year) so people can find you online. That's it.",
  },
  {
    q: "How long does it take?",
    a: "Most websites are designed, built, and ready to go live within 5–7 business days from the moment we have your details.",
  },
  {
    q: "Can I make changes later?",
    a: "Absolutely. We offer a certain number of revisions during the build. After launch, you can request changes or we can hand over access for you to update it yourself.",
  },
  {
    q: "What's included?",
    a: "A fully responsive, professionally designed website tailored to your business — including mobile optimisation, contact forms, SEO basics, and fast hosting.",
  },
];

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background">
        <div className="bg-background px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-3xl">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-foreground">FAQ</li>
              </ol>
            </nav>

            <h1 className="mb-8 text-center text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h1>
            <FAQSection showTitle={false} />
          </div>
        </div>
      </div>
    </>
  );
}
