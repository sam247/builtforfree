import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { faqs } from "@/components/FAQSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSummary = () => {
  // Show first 3 FAQs as summary
  const summaryFaqs = faqs.slice(0, 3);

  return (
    <section className="bg-background px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-3xl font-black tracking-tight text-foreground sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {summaryFaqs.map((faq, i) => (
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
        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View all FAQs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSummary;
