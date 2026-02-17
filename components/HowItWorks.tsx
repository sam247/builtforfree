import { ClipboardList, Paintbrush, Rocket } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Tell Us About Your Business",
    description:
      "Fill in our quick form with your details — it takes less than 2 minutes.",
  },
  {
    icon: Paintbrush,
    title: "We Build It For Free",
    description:
      "Our team designs and develops a professional website tailored to your needs.",
  },
  {
    icon: Rocket,
    title: "Go Live",
    description:
      "Your site goes live. You only cover hosting (~£5/mo) and domain (~£10/yr).",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-muted/50 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-3 text-muted-foreground">
            Three simple steps to your new website.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-2xl bg-background p-8 text-center shadow-sm border border-border"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background">
                <step.icon className="h-6 w-6" />
              </div>
              <span className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Step {i + 1}
              </span>
              <h3 className="mb-2 text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
