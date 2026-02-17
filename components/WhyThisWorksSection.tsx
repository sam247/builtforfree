const reasons = [
  {
    title: "We take the risk first",
    body: "We design and build first, so you can evaluate a real deliverable before long-term commitment.",
  },
  {
    title: "Built to generate enquiries",
    body: "The structure is conversion-led, helping visitors understand your offer and take action quickly.",
  },
  {
    title: "Real support, not templates",
    body: "You get guided revisions and practical help from people, not a DIY software workflow.",
  },
  {
    title: "Simple operating model",
    body: "No setup fees, no complicated package ladder, and clear ongoing running costs once live.",
  },
];

const WhyThisWorksSection = () => {
  return (
    <section className="section-shell bg-muted/20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Why This Works</h2>
          <p className="mx-auto mt-3 max-w-3xl text-muted-foreground">
            Most small businesses delay improving their website because the risk feels too high. BuiltForFree keeps it
            simple, transparent, and focused on real outcomes.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((reason) => (
            <article key={reason.title} className="rounded-2xl border border-border bg-background p-6">
              <h3 className="text-lg font-bold text-foreground">{reason.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{reason.body}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-secondary-foreground">
          The result is a professional website process that feels low-friction, dependable, and easy to say yes to.
        </p>
      </div>
    </section>
  );
};

export default WhyThisWorksSection;
