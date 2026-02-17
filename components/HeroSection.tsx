import HeroForm from "@/components/HeroForm";

const StarIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-[#22C55E] text-[#22C55E]">
    <path d="M12 2.75l2.85 5.77 6.37.93-4.61 4.49 1.09 6.35L12 17.3l-5.7 2.99 1.09-6.35-4.61-4.49 6.37-.93L12 2.75z" />
  </svg>
);

const HeroSection = () => {
  return (
    <section className="bg-background px-4 pb-14 pt-14 sm:px-6 md:pb-16 md:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Stop Losing Customers To An Outdated Website.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              We build you a professional website for free.
              <br />
              You only cover hosting (from £15.99/month) and your domain.
            </p>
          </div>

          <div id="form" className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-xl font-bold text-foreground">Get My Free Website</h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Takes under 2 minutes. We reply within one business day.
            </p>
            <HeroForm />
            <p className="mt-4 text-center text-xs text-muted-foreground">
              No upfront fee. No long contract. Just a professional build.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-muted/30 p-5">
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-sm text-secondary-foreground">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
            <span className="ml-1 font-semibold text-foreground">4.9 out of 5 from 200+ UK business owners</span>
          </div>

          <div className="mt-4 grid gap-3 text-center sm:grid-cols-3 sm:text-left">
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
