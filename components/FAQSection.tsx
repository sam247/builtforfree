import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
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

interface FAQSectionProps {
  showTitle?: boolean;
}

const FAQSection = ({ showTitle = true }: FAQSectionProps) => {
  return (
    <section className="bg-background px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        {showTitle && (
          <h2 className="mb-8 text-center text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
        )}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
