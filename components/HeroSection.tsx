import HeroForm from "@/components/HeroForm";

const StarIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-[#22C55E] text-[#22C55E]">
    <path d="M12 2.75l2.85 5.77 6.37.93-4.61 4.49 1.09 6.35L12 17.3l-5.7 2.99 1.09-6.35-4.61-4.49 6.37-.93L12 2.75z" />
  </svg>
);

const HeroSection = () => {
  return (
    <section className="bg-background px-4 pb-12 pt-14 sm:px-6 md:pb-16 md:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
          <div className="max-w-[38rem]">
            <h1 className="text-4xl font-extrabold leading-[1.04] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Launch A Professional Website. Built For Free.
            </h1>
            <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-muted-foreground">
              No upfront build fee. Just hosting from £15.99/month and your domain.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">No trial period. Billing starts only when your site goes live.</p>
          </div>

          <div
            id="form"
            className="w-full rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6 lg:ml-auto lg:max-w-[520px]"
          >
            <h2 className="mb-1 text-lg font-bold text-foreground">Get My Free Website</h2>
            <p className="mb-4 text-sm text-muted-foreground">Takes under 2 minutes. We reply within one business day.</p>
            <HeroForm />
          </div>
        </div>
      </div>

      <div className="mt-10 border-y border-border bg-muted/20 px-4 py-5 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center sm:gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="text-sm font-medium text-foreground">4.9 out of 5 from 200+ UK business owners</p>
          </div>

          <div className="mx-auto mt-4 grid max-w-3xl gap-2 text-center sm:grid-cols-3 sm:gap-6">
            <p className="text-sm text-secondary-foreground">
              <span className="font-semibold text-foreground">24h</span> - Average first response
            </p>
            <p className="text-sm text-secondary-foreground">
              <span className="font-semibold text-foreground">200+</span> - Websites launched
            </p>
            <p className="text-sm text-secondary-foreground">
              <span className="font-semibold text-foreground">No contract</span> - For the build
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
