"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { submitLead } from "@/lib/lead-client";
import { trackEvent } from "@/lib/analytics";

interface LeadFormProps {
  variant?: "inline" | "modal";
}

const businessTypes = [
  "Restaurant / Cafe",
  "Salon / Barbershop",
  "Tradesperson",
  "Portfolio / Creative",
  "E-commerce / Shop",
  "Other",
];

const LeadForm = ({ variant = "inline" }: LeadFormProps) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [started, setStarted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    description: "",
    honeypot: "",
  });

  const source = useMemo(() => `lead-${variant}`, [variant]);

  const update = (field: string, value: string) => {
    if (!started) {
      setStarted(true);
      trackEvent("lead_form_started", { source });
    }
    setError("");
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const canStepOne =
    form.name.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

  const canStepTwo = form.phone.trim().length >= 7 && !!form.businessType;

  const next = () => {
    const target = Math.min(step + 1, 3);
    trackEvent("lead_form_step_completed", { source, step });
    setStep(target);
  };

  const back = () => setStep((s) => Math.max(s - 1, 1));

  const submit = async () => {
    if (form.description.trim().length < 10) {
      setError("Please add a short project description (10+ characters).");
      trackEvent("lead_submit_failed", { source, reason: "validation" });
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const page = typeof window !== "undefined" ? window.location.pathname : "/";
      await submitLead({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        businessType: form.businessType,
        description: form.description.trim(),
        source,
        page,
        honeypot: form.honeypot,
      });

      setSubmitted(true);
      trackEvent("lead_submit_success", { source, page });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to submit. Please try again.";
      setError(message);
      trackEvent("lead_submit_failed", { source, reason: "api" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 py-8 text-center"
      >
        <CheckCircle className="h-12 w-12 text-primary" />
        <h3 className="text-xl font-bold text-foreground">You are in</h3>
        <p className="text-muted-foreground">
          Thanks. We will contact you within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="w-full">
      <div className="hidden" aria-hidden>
        <label htmlFor="companyWebsite">Company Website</label>
        <Input
          id="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
          value={form.honeypot}
          onChange={(e) => update("honeypot", e.target.value)}
        />
      </div>

      <div className="mb-6 flex items-center gap-2">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex flex-1 items-center gap-2">
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                s <= step ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
              }`}
            >
              {s}
            </div>
            {s < 3 && (
              <div className={`h-0.5 w-full rounded transition-colors ${s < step ? "bg-foreground" : "bg-muted"}`} />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Your Name</label>
              <Input
                placeholder="John Smith"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="border-foreground/20 bg-background"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Email Address</label>
              <Input
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="border-foreground/20 bg-background"
              />
            </div>
            <Button onClick={next} disabled={!canStepOne} className="w-full bg-foreground text-background hover:bg-[#1A1A1A]" size="lg">
              Continue
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Phone Number</label>
              <Input
                type="tel"
                placeholder="07700 900000"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="border-foreground/20 bg-background"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Business Type</label>
              <Select value={form.businessType} onValueChange={(v) => update("businessType", v)}>
                <SelectTrigger className="border-foreground/20 bg-background">
                  <SelectValue placeholder="Select your business type" />
                </SelectTrigger>
                <SelectContent>
                  {businessTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-3">
              <Button onClick={back} variant="outline" className="flex-1 border-foreground/20" size="lg">
                Back
              </Button>
              <Button onClick={next} disabled={!canStepTwo} className="flex-1 bg-foreground text-background hover:bg-[#1A1A1A]" size="lg">
                Continue
              </Button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Tell us what you need</label>
              <Textarea
                placeholder="Briefly describe your business and the enquiries you want from your new website."
                value={form.description}
                onChange={(e) => update("description", e.target.value)}
                className="min-h-[100px] border-foreground/20 bg-background"
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <div className="flex gap-3">
              <Button onClick={back} variant="outline" className="flex-1 border-foreground/20" size="lg">
                Back
              </Button>
              <Button onClick={submit} disabled={isSubmitting} className="flex-1 bg-foreground text-background hover:bg-[#1A1A1A]" size="lg">
                {isSubmitting ? "Submitting..." : "Get My Free Website"}
              </Button>
            </div>
            <p className="text-center text-xs text-muted-foreground">
              No card required. We reply within one business day.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LeadForm;
