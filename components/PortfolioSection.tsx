import { Star } from "lucide-react";

const examples = [
  {
    name: "The Golden Fork",
    type: "Restaurant",
    review: "Bookings doubled in the first month.",
    reviewer: "Maria T.",
    rating: 5,
    color: "bg-amber-100",
  },
  {
    name: "Luxe Cuts Studio",
    type: "Salon",
    review: "Our clients love the online booking feature.",
    reviewer: "James P.",
    rating: 5,
    color: "bg-pink-100",
  },
  {
    name: "Henderson Plumbing",
    type: "Tradesperson",
    review: "Started getting enquiries the same week.",
    reviewer: "Dave H.",
    rating: 5,
    color: "bg-sky-100",
  },
  {
    name: "Anya Lee Portfolio",
    type: "Portfolio",
    review: "Looks stunning — landed me 3 new clients.",
    reviewer: "Anya L.",
    rating: 5,
    color: "bg-violet-100",
  },
  {
    name: "PetPals Shop",
    type: "E-commerce",
    review: "We went from zero online sales to consistent orders.",
    reviewer: "Chris W.",
    rating: 5,
    color: "bg-emerald-100",
  },
  {
    name: "Sunrise Yoga",
    type: "Local Business",
    review: "Members can finally book classes online.",
    reviewer: "Priya S.",
    rating: 5,
    color: "bg-orange-100",
  },
];

const PortfolioSection = () => {
  return (
    <section id="examples" className="bg-background px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            Websites We've Built
          </h2>
          <p className="mt-3 text-muted-foreground">
            Real businesses. Real results. All built for free.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map((ex, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
            >
              {/* Placeholder preview */}
              <div
                className={`flex h-48 items-center justify-center ${ex.color}`}
              >
                <span className="text-2xl font-black text-foreground/20">
                  {ex.name}
                </span>
              </div>

              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-bold text-foreground">{ex.name}</h3>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    {ex.type}
                  </span>
                </div>

                {/* Micro review */}
                <div className="flex items-center gap-1 mb-1.5">
                  {[...Array(ex.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-3.5 w-3.5 fill-[#00B67A] text-[#00B67A]"
                    />
                  ))}
                </div>
                <p className="text-sm italic text-muted-foreground">
                  "{ex.review}"
                </p>
                <p className="mt-1 text-xs font-medium text-foreground/60">
                  — {ex.reviewer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
