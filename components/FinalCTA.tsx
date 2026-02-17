"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import HeroForm from "@/components/HeroForm";

const FinalCTA = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="bg-foreground px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-background sm:text-4xl md:text-5xl">
            Ready For Your Free Website?
          </h2>
          <p className="mt-4 text-lg text-background/70">
            No credit card. No catch. Just a great website.
          </p>
          <Button
            onClick={() => setOpen(true)}
            size="lg"
            className="mt-8 bg-background text-foreground hover:bg-background/90 px-8 text-base"
          >
            Get Your Free Website
          </Button>
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle className="text-xl font-bold">Get Your Free Website</DialogTitle>
          <HeroForm variant="modal" />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FinalCTA;
