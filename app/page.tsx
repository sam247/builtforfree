import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSummary from "@/components/HowItWorksSummary";
import PortfolioSection from "@/components/PortfolioSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSummary from "@/components/FAQSummary";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { faqs } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "BuiltForFree | A Professional Website Built For You. Completely Free.",
  description: "We design and build your website at zero cost. You only pay for hosting (£15.99/mo) and your domain name (~£10/yr). Get started today.",
  openGraph: {
    title: "BuiltForFree | A Professional Website Built For You. Completely Free.",
    description: "We design and build your website at zero cost. You only pay for hosting (£15.99/mo) and your domain name (~£10/yr).",
    type: "website",
    url: "https://builtforfree.co.uk",
    siteName: "BuiltForFree",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuiltForFree | A Professional Website Built For You. Completely Free.",
    description: "We design and build your website at zero cost. You only pay for hosting (£15.99/mo) and your domain name (~£10/yr).",
  },
};

export default function Home() {
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
        <Navbar />
        <main>
          <HeroSection />
          <HowItWorksSummary />
          <PortfolioSection />
          <ReviewsSection />
          <FAQSummary />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
