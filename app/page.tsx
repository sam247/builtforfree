import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSummary from "@/components/HowItWorksSummary";
import ExampleSites from "@/components/ExampleSites";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSummary from "@/components/FAQSummary";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { faqs } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Free Website Design for UK Small Businesses",
  description:
    "Need a new business website? BuiltForFree creates professional websites for UK small businesses at no upfront build cost.",
  alternates: {
    canonical: "https://builtforfree.co.uk",
  },
  openGraph: {
    title: "Free Website Design for UK Small Businesses | BuiltForFree",
    description:
      "We design and build your website for free. Launch in 5 to 7 business days and start generating enquiries.",
    type: "website",
    url: "https://builtforfree.co.uk",
    siteName: "BuiltForFree",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Website Design for UK Small Businesses | BuiltForFree",
    description:
      "Professional websites built for free for UK businesses. Launch quickly and convert more enquiries.",
  },
};

export default function Home() {
  const baseUrl = "https://builtforfree.co.uk";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}#organization`,
        name: "BuiltForFree",
        url: baseUrl,
        email: "hello@builtforfree.co.uk",
        areaServed: "United Kingdom",
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}#website`,
        url: baseUrl,
        name: "BuiltForFree",
        publisher: {
          "@id": `${baseUrl}#organization`,
        },
      },
      {
        "@type": "Service",
        "@id": `${baseUrl}#service`,
        name: "Free small business website build",
        provider: {
          "@id": `${baseUrl}#organization`,
        },
        areaServed: "United Kingdom",
        serviceType: "Website design and development",
        description:
          "BuiltForFree designs and develops websites for UK small businesses at no upfront build fee.",
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}#faq`,
        mainEntity: faqs.slice(0, 4).map((faq) => ({
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <HowItWorksSummary />
          <ExampleSites />
          <ReviewsSection />
          <FAQSummary />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
