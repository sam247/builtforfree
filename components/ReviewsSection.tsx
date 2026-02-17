import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "I couldn't believe it was genuinely free. The website looks like I paid thousands.",
    name: "Sarah M.",
    business: "Café Owner",
  },
  {
    quote:
      "From start to finish, the team was brilliant. My site was live within days.",
    name: "Tom R.",
    business: "Personal Trainer",
  },
  {
    quote:
      "I've recommended BuiltForFree to every small business owner I know.",
    name: "Lisa K.",
    business: "Florist",
  },
  {
    quote:
      "Professional, fast, and actually free. What more could you ask for?",
    name: "Mark D.",
    business: "Electrician",
  },
  {
    quote:
      "My old website cost me £2,000. This one's better — and it was free.",
    name: "Jen W.",
    business: "Salon Owner",
  },
  {
    quote:
      "The whole process was seamless. I just filled in a form and got a stunning site.",
    name: "Ravi P.",
    business: "E-commerce Seller",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="bg-muted/50 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            What Our Clients Say
          </h2>

          {/* Overall badge */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-background border border-border px-5 py-2 shadow-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-[#00B67A] text-[#00B67A]"
                />
              ))}
            </div>
            <span className="text-sm font-bold text-foreground">
              4.9 out of 5
            </span>
            <span className="text-sm text-muted-foreground">— 200+ reviews</span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <div className="mb-3 flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-[#00B67A] text-[#00B67A]"
                  />
                ))}
              </div>
              <p className="mb-4 text-sm text-foreground">"{review.quote}"</p>
              <div>
                <p className="text-sm font-bold text-foreground">
                  {review.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {review.business}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
