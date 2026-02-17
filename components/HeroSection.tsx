import HeroForm from "@/components/HeroForm";
import { CheckCircle2, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-background px-4 pb-16 pt-14 sm:px-6 md:pb-20 md:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              UK Small Business Websites
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Stop Losing Customers
              <br />
              To An Outdated Website.
              <br />
              <span className="text-primary">We Build You One For Free.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              BuiltForFree designs and launches a professional, mobile-first website in 5 to 7 business days.
              You only cover hosting from GBP 15.99/month and your domain.
            </p>

            <div className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#00B67A] text-[#00B67A]" />
              ))}
              <span className="ml-1 font-medium">4.9/5 from 200+ UK business owners</span>
            </div>

            <div className="mt-6 grid gap-2 text-sm text-foreground sm:grid-cols-2">
              <p className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Launch-ready in days
              </p>
              <p className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Designed for calls and enquiries
              </p>
              <p className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Built-in local SEO foundations
              </p>
              <p className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                No contract for the build
              </p>
            </div>
          </div>

          <div id="form" className="rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8">
            <h2 className="mb-1 text-xl font-bold text-foreground">Claim Your Free Website Build</h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Takes under 2 minutes. We reply within one business day with next steps.
            </p>
            <HeroForm />
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Risk-free: if it is not right for your business, you can walk away.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-3 rounded-2xl border border-border bg-muted/50 p-4 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <p className="text-lg font-bold text-foreground">24h</p>
            <p className="text-sm text-muted-foreground">Average first response time</p>
          </div>
          <div>
            <p className="text-lg font-bold text-foreground">200+</p>
            <p className="text-sm text-muted-foreground">Website launches completed</p>
          </div>
          <div>
            <p className="text-lg font-bold text-foreground">4.9/5</p>
            <p className="text-sm text-muted-foreground">Verified client satisfaction rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
