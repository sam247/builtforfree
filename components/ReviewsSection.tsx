import { Star } from "lucide-react";

const reviews = [
  {
    quote: "I thought free would mean basic. The final website looked premium and started bringing in enquiries in week one.",
    name: "Sarah M.",
    business: "Cafe Owner",
  },
  {
    quote: "From brief to launch was quick. The messaging was clearer and we immediately got better quality leads.",
    name: "Tom R.",
    business: "Personal Trainer",
  },
  {
    quote: "The site finally explains what we do properly. It feels like a real business asset now.",
    name: "Lisa K.",
    business: "Florist",
  },
  {
    quote: "Simple process, fast revisions, and no pressure. Exactly what a small business needs.",
    name: "Mark D.",
    business: "Electrician",
  },
  {
    quote: "Our old site was dated and hard to use. The new one is clean, fast, and converts better.",
    name: "Jen W.",
    business: "Salon Owner",
  },
  {
    quote: "We went from almost no inbound web enquiries to consistent leads every week.",
    name: "Ravi P.",
    business: "E-commerce Seller",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-shell bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Trusted by UK Small Businesses</h2>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2 shadow-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#22C55E] text-[#22C55E]" />
              ))}
            </div>
            <span className="text-sm font-bold text-foreground">4.9 out of 5</span>
            <span className="text-sm text-muted-foreground">from 200+ reviews</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">No upfront build fee. Hosting billing begins on launch.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <div key={i} className="rounded-2xl border border-border bg-background p-6">
              <div className="mb-3 flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-[#22C55E] text-[#22C55E]" />
                ))}
              </div>
              <p className="mb-4 text-sm text-foreground">&quot;{review.quote}&quot;</p>
              <div>
                <p className="text-sm font-bold text-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
