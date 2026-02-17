import Link from "next/link";
import { ClipboardList, Paintbrush, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Tell Us About Your Business",
    description: "Submit the short brief with your services, target area, and desired outcomes.",
  },
  {
    icon: Paintbrush,
    title: "We Design and Build",
    description: "We create your conversion-focused website, then share it for feedback and revisions.",
  },
  {
    icon: Rocket,
    title: "Launch and Grow",
    description: "Go live in 5 to 7 business days with hosting from GBP 15.99/mo and your own domain.",
  },
];

const HowItWorksSummary = () => {
  return (
    <section className="bg-muted/40 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            How We Take You Live Fast
          </h2>
          <p className="mt-3 text-muted-foreground">
            A straightforward process built for busy local business owners.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center rounded-2xl border border-border bg-background p-8 text-center shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <step.icon className="h-6 w-6" />
              </div>
              <span className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">Step {i + 1}</span>
              <h3 className="mb-2 text-lg font-bold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/how-it-works" className="inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80">
            See the full launch process
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSummary;
