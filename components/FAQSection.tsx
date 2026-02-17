import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    q: "Is the website build really free?",
    a: "Yes. We do not charge for design or development. You only pay for hosting from GBP 15.99/month and your domain name.",
  },
  {
    q: "What does the monthly cost cover?",
    a: "Hosting keeps your website online, secure, and fast. Your domain cost is billed separately by your domain provider.",
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
    a: "No long design contract for the build. We keep the process simple so you can decide if the service is right for your business.",
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
