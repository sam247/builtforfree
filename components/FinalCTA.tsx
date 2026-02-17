"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import HeroForm from "@/components/HeroForm";
import { trackEvent } from "@/lib/analytics";

const FinalCTA = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="section-shell bg-muted/20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Ready For A Website That Brings In Customers?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No upfront build fee. No long-term contract. Just a professional website built for growth.
          </p>
          <Button
            onClick={() => {
              setOpen(true);
              trackEvent("cta_click", { location: "final_cta", label: "claim_free_website" });
            }}
            size="lg"
            className="mt-8 bg-primary px-8 text-base text-primary-foreground hover:bg-[#1A1A1A]"
          >
            Get My Free Website
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">Average first response within one business day.</p>
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle className="text-xl font-bold">Claim Your Free Website</DialogTitle>
          <HeroForm variant="modal" />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FinalCTA;
