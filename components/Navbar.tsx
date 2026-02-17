"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import LeadForm from "@/components/LeadForm";
import { Menu, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const links = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Examples", href: "#examples" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "/faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="inline-flex items-center" aria-label="BuiltForFree home">
            <Image src="/logo.svg" alt="BuiltForFree" width={119} height={25} priority className="h-[25px] w-auto" />
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((l) =>
              l.href.startsWith("#") ? (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              )
            )}
            <Button
              onClick={() => {
                setOpen(true);
                trackEvent("cta_click", { location: "navbar", label: "claim_free_website" });
              }}
              className="bg-primary text-primary-foreground hover:bg-[#1A1A1A]"
            >
              Get My Free Website
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Menu">
            {mobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenu && (
          <div className="border-t border-border/60 px-4 pb-4 pt-2 md:hidden">
            {links.map((l) =>
              l.href.startsWith("#") ? (
                <a
                  key={l.href}
                  href={l.href}
                  className="block py-2 text-sm font-medium text-muted-foreground"
                  onClick={() => setMobileMenu(false)}
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block py-2 text-sm font-medium text-muted-foreground"
                  onClick={() => setMobileMenu(false)}
                >
                  {l.label}
                </Link>
              )
            )}
            <Button
              onClick={() => {
                setOpen(true);
                setMobileMenu(false);
                trackEvent("cta_click", { location: "navbar_mobile", label: "claim_free_website" });
              }}
              className="mt-2 w-full bg-primary text-primary-foreground hover:bg-[#1A1A1A]"
            >
              Get My Free Website
            </Button>
          </div>
        )}
      </nav>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle className="text-xl font-bold">Claim Your Free Website</DialogTitle>
          <LeadForm variant="modal" />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
