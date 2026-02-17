import { CheckCircle2 } from "lucide-react";

const items = [
  "Professional website design tailored to your business",
  "Complete build and launch setup",
  "Hosting setup with SSL, security, and core maintenance",
  "Mobile-first layout and local SEO foundations",
  "Contact and enquiry form setup",
  "Revision rounds before launch",
];

const WhatsIncludedSection = () => {
  return (
    <section className="section-shell bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">What&apos;s Included</h2>
          <p className="mt-3 text-muted-foreground">Everything you need to launch with confidence.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item} className="rounded-2xl border border-border bg-card p-5">
              <p className="inline-flex items-start gap-2 text-sm text-secondary-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                <span>{item}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncludedSection;
