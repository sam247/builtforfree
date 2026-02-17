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
      <section className="bg-foreground px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-background sm:text-4xl md:text-5xl">
            Ready To Turn Your Website Into A Lead Source?
          </h2>
          <p className="mt-4 text-lg text-background/75">
            No card details. No upfront build fee. Just a professional website built for growth.
          </p>
          <Button
            onClick={() => {
              setOpen(true);
              trackEvent("cta_click", { location: "final_cta", label: "claim_free_website" });
            }}
            size="lg"
            className="mt-8 bg-background px-8 text-base text-foreground hover:bg-background/90"
          >
            Claim My Free Website
          </Button>
          <p className="mt-3 text-xs text-background/65">Average first response within one business day.</p>
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
