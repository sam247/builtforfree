const reasons = [
  {
    title: "Clear process",
    body: "You know what happens at every stage, from first brief to launch.",
  },
  {
    title: "Focused on enquiries",
    body: "Pages are structured to help visitors take action, not just browse.",
  },
  {
    title: "Transparent pricing",
    body: "No upfront build fee. Hosting is £15.99/month inc VAT once your site is live.",
  },
];

const WhyThisWorksSection = () => {
  return (
    <section className="section-shell bg-muted/20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Why This Works</h2>
          <p className="mt-3 text-muted-foreground">A straightforward service built around speed, trust, and outcomes.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {reasons.map((reason) => (
            <article key={reason.title} className="rounded-2xl border border-border bg-background p-6">
              <h3 className="text-lg font-bold text-foreground">{reason.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{reason.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyThisWorksSection;
