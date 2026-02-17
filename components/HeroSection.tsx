import LeadForm from "@/components/LeadForm";
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-background px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              A Professional Website.
              <br />
              Built For You.
              <br />
              <span className="text-muted-foreground">Completely Free.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              We design and build your website at zero cost. You only pay for
              hosting (~£5/mo) and your domain name (~£10/yr). That&apos;s it.
            </p>
            <div className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-[#00B67A] text-[#00B67A]"
                />
              ))}
              <span className="ml-1 font-medium">Rated 4.9/5 from 200+ reviews</span>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8">
            <h2 className="mb-1 text-lg font-bold text-foreground">
              Claim Your Free Website
            </h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Fill in a few details and we&apos;ll get started.
            </p>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
