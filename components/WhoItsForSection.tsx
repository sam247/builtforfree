const profiles = [
  "Local service businesses that need more enquiries",
  "Owners with outdated or underperforming websites",
  "Teams that want a professional site without upfront build costs",
  "Businesses that value clear communication and quick launch timelines",
];

const WhoItsForSection = () => {
  return (
    <section className="section-shell bg-background">
      <div className="mx-auto max-w-6xl rounded-2xl border border-border bg-card p-7 sm:p-9">
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Who This Is For</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          BuiltForFree is designed for serious small businesses that want a better website without a long,
          expensive build process.
        </p>

        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {profiles.map((item) => (
            <li key={item} className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-secondary-foreground">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhoItsForSection;
