import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    q: "Is it really free?",
    a: "Yes. We don't charge for the build. You simply cover hosting and your domain.",
  },
  {
    q: "Is there a free trial?",
    a: "No. Hosting starts when your website launches.",
  },
  {
    q: "When does monthly billing start?",
    a: "Billing starts on launch at £15.99/month inc VAT.",
  },
  {
    q: "What does the monthly cost cover?",
    a: "Hosting includes SSL, security, maintenance support, and keeping your site live. Your domain is separate.",
  },
  {
    q: "Do you offer refunds after billing?",
    a: "No. Payments taken after billing are non-refundable.",
  },
  {
    q: "How quickly can we launch?",
    a: "Most projects launch in 5 to 7 business days once we have your brief and required business details.",
  },
  {
    q: "Will the site be optimized for mobile and SEO?",
    a: "Yes. Every site is mobile-first and includes local SEO essentials like clear structure, metadata, and conversion-focused page content.",
  },
  {
    q: "Can I request edits before launch?",
    a: "Absolutely. We include revision rounds so the site reflects your brand and goals before it goes live.",
  },
  {
    q: "Is there a long contract?",
    a: "No long-term contract for the build. You can cancel hosting later if needed.",
  },
];

interface FAQSectionProps {
  showTitle?: boolean;
}

const FAQSection = ({ showTitle = true }: FAQSectionProps) => {
  return (
    <section className="bg-background px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-3xl">
        {showTitle && (
          <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
        )}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
