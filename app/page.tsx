import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExampleSites from "@/components/ExampleSites";
import HowItWorksSummary from "@/components/HowItWorksSummary";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSummary from "@/components/FAQSummary";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { faqs } from "@/components/FAQSection";
import WhatsIncludedSection from "@/components/WhatsIncludedSection";
import WhyThisWorksSection from "@/components/WhyThisWorksSection";
import WhoItsForSection from "@/components/WhoItsForSection";
import WhatHappensNextSection from "@/components/WhatHappensNextSection";

export const metadata: Metadata = {
  title: "Free Website Build for UK Small Businesses",
  description:
    "BuiltForFree designs and builds professional websites for UK small businesses at no upfront build fee, with real support and a simple launch process.",
  alternates: {
    canonical: "https://builtforfree.co.uk",
  },
  openGraph: {
    title: "Free Website Build for UK Small Businesses | BuiltForFree",
    description:
      "We design and build your website first at no upfront build fee, with clear support and a simple launch process for UK small businesses.",
    type: "website",
    url: "https://builtforfree.co.uk",
    siteName: "BuiltForFree",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Website Build for UK Small Businesses | BuiltForFree",
    description:
      "BuiltForFree creates professional websites for UK small businesses with no upfront build fee and practical support from brief to launch.",
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
          <WhatsIncludedSection />
          <WhyThisWorksSection />
          <WhoItsForSection />
          <WhatHappensNextSection />
          <ExampleSites />
          <HowItWorksSummary />
          <ReviewsSection />
          <FAQSummary />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
