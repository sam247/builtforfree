import Link from "next/link";
import { ClipboardList, Paintbrush, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Tell Us About Your Business",
    description: "Share your business details and what you want your website to do.",
  },
  {
    icon: Paintbrush,
    title: "We Build It",
    description: "We design and build your website, then refine it with your feedback.",
  },
  {
    icon: Rocket,
    title: "You Host It",
    description: "Go live in 5 to 7 business days. Hosting starts on launch from £15.99/month inc VAT, plus your domain.",
  },
];

const HowItWorksSummary = () => {
  return (
    <section className="section-shell bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            A Simple, Honest Process
          </h2>
          <p className="mt-3 text-muted-foreground">
            We build it. You host it. No upfront build fee.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center rounded-2xl border border-border bg-background p-7 text-center shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-foreground">
                <step.icon className="h-6 w-6" />
              </div>
              <span className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">Step {i + 1}</span>
              <h3 className="mb-2 text-lg font-bold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/how-it-works" className="inline-flex items-center gap-2 font-medium text-foreground transition-colors hover:text-secondary-foreground">
            See the full launch process
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSummary;
