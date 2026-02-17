import Link from "next/link";

const TransparentPricingSection = () => {
  return (
    <section className="section-shell bg-muted/20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Transparent Pricing</h2>
          <p className="mt-3 text-muted-foreground">No hidden fees. No complex packages. Just clear pricing.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-border bg-background p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Build Cost</p>
            <p className="mt-2 text-3xl font-extrabold text-foreground">£0</p>
            <p className="mt-2 text-sm text-muted-foreground">No upfront design or development fee.</p>
          </article>
          <article className="rounded-2xl border border-border bg-background p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Hosting</p>
            <p className="mt-2 text-3xl font-extrabold text-foreground">£15.99</p>
            <p className="mt-2 text-sm text-muted-foreground">Per month inc VAT. Billing starts when your site launches.</p>
          </article>
          <article className="rounded-2xl border border-border bg-background p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Domain</p>
            <p className="mt-2 text-3xl font-extrabold text-foreground">Separate</p>
            <p className="mt-2 text-sm text-muted-foreground">You purchase and renew your own domain name.</p>
          </article>
        </div>

        <p className="mt-5 text-center text-sm text-muted-foreground">
          Full terms apply. See our <Link href="/terms" className="font-medium text-foreground hover:text-secondary-foreground">Terms of Service</Link>.
        </p>
      </div>
    </section>
  );
};

export default TransparentPricingSection;
