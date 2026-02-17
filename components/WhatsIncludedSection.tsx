import { CheckCircle2 } from "lucide-react";

const items = [
  {
    title: "Professional Design",
    description: "A bespoke layout built around your business goals, services, and customers.",
  },
  {
    title: "Full Build & Launch",
    description: "We handle development and go-live setup so your site is ready without technical hassle.",
  },
  {
    title: "Secure Hosting Setup",
    description: "SSL, security basics, and dependable hosting configuration are included from day one.",
  },
  {
    title: "Mobile & SEO Foundations",
    description: "Your website is optimized for mobile users and structured for strong local visibility.",
  },
  {
    title: "Enquiry Capture Setup",
    description: "Contact and lead forms are configured to help turn traffic into real business enquiries.",
  },
  {
    title: "Revisions Before Launch",
    description: "You can request reasonable changes during build so the final site is right before go-live.",
  },
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
            <div key={item.title} className="rounded-2xl border border-border bg-card p-5">
              <div className="inline-flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              </div>
              <p className="mt-2 text-sm text-secondary-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncludedSection;
