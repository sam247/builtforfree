const profiles = [
  {
    title: "Local service teams",
    body: "Trades, clinics, consultants, and other service businesses that want more consistent enquiries.",
  },
  {
    title: "Outdated website owners",
    body: "Businesses with old or underperforming sites that no longer reflect the quality of their work.",
  },
  {
    title: "Growth-focused operators",
    body: "Owners who need a site that supports calls, form enquiries, and clear next-step actions.",
  },
  {
    title: "Busy decision-makers",
    body: "Teams who want a professionally managed build process without technical overwhelm or delays.",
  },
];

const WhoItsForSection = () => {
  return (
    <section className="section-shell bg-background">
      <div className="mx-auto max-w-6xl rounded-2xl border border-border bg-card p-7 sm:p-9">
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Who Is This For</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          BuiltForFree is for UK small businesses that want a better website without upfront build costs or drawn-out
          projects. If you want to look credible online and convert more visitors into real leads, this service is
          built for you.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {profiles.map((item) => (
            <article key={item.title} className="rounded-xl border border-border bg-background px-5 py-4">
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-secondary-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
