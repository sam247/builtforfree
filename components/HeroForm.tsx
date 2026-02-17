"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import { submitLead } from "@/lib/lead-client";
import { trackEvent } from "@/lib/analytics";

interface HeroFormProps {
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

const HeroForm = ({ variant = "inline" }: HeroFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    businessType: "",
    websiteNeeded: "",
    honeypot: "",
  });

  const source = useMemo(() => `hero-${variant}`, [variant]);

  useEffect(() => {
    return () => {
      if (started && !submitted) {
        trackEvent("lead_form_abandon", { source, step });
      }
    };
  }, [source, started, step, submitted]);

  const update = (field: string, value: string) => {
    if (!started) {
      setStarted(true);
      trackEvent("lead_form_started", { source });
    }

    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const validateStepOne = () => {
    const nextErrors: Record<string, string> = {};

    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = "Name must be at least 2 characters.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.businessType) {
      nextErrors.businessType = "Please select your business type.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const validateStepTwo = () => {
    const nextErrors: Record<string, string> = {};

    if (!form.websiteNeeded.trim() || form.websiteNeeded.trim().length < 10) {
      nextErrors.websiteNeeded = "Please share a little more detail (10+ characters).";
    }

    setErrors((prev) => ({ ...prev, ...nextErrors }));
    return Object.keys(nextErrors).length === 0;
  };

  const handleContinue = () => {
    if (!validateStepOne()) {
      trackEvent("lead_submit_failed", { source, reason: "validation_step_1" });
      return;
    }

    setStep(2);
    trackEvent("lead_form_step_completed", { source, step: 1 });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (step === 1) {
      handleContinue();
      return;
    }

    if (!validateStepTwo()) {
      trackEvent("lead_submit_failed", { source, reason: "validation_step_2" });
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const page = typeof window !== "undefined" ? window.location.pathname : "/";

      await submitLead({
        name: form.name.trim(),
        email: form.email.trim(),
        businessType: form.businessType,
        websiteNeeded: form.websiteNeeded.trim(),
        source,
        page,
        honeypot: form.honeypot,
      });

      setSubmitted(true);
      trackEvent("lead_submit_success", { source, page });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to submit. Please try again.";
      setErrors({ submit: message });
      trackEvent("lead_submit_failed", { source, reason: "api" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <CheckCircle className="h-12 w-12 text-primary" />
        <h3 className="text-xl font-bold text-foreground">Application Received</h3>
        <p className="text-muted-foreground">
          Thanks. We will contact you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3.5">
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <Input
          id="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.honeypot}
          onChange={(e) => update("honeypot", e.target.value)}
        />
      </div>

      <div>
        <div className="mb-1 flex items-center justify-between text-xs font-medium text-muted-foreground">
          <span>Step {step} of 2</span>
          <span>{step === 1 ? "Contact details" : "Project details"}</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className={`h-1.5 rounded-full ${step >= 1 ? "bg-foreground" : "bg-muted"}`} />
          <div className={`h-1.5 rounded-full ${step >= 2 ? "bg-foreground" : "bg-muted"}`} />
        </div>
      </div>

      {step === 1 && (
        <>
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
              Name
            </label>
            <Input
              id="name"
              placeholder="John Smith"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={errors.name ? "border-destructive" : ""}
              aria-invalid={!!errors.name}
            />
            {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
              Work Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className={errors.email ? "border-destructive" : ""}
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="businessType" className="mb-1.5 block text-sm font-medium text-foreground">
              Business Type
            </label>
            <Select value={form.businessType} onValueChange={(v) => update("businessType", v)}>
              <SelectTrigger id="businessType" className={errors.businessType ? "border-destructive" : ""}>
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
            {errors.businessType && <p className="mt-1 text-xs text-destructive">{errors.businessType}</p>}
          </div>

          <Button
            type="button"
            onClick={handleContinue}
            className="w-full bg-primary text-primary-foreground hover:bg-[#1A1A1A]"
            size="lg"
          >
            Continue
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            Next: tell us what you need your website to do.
          </p>
        </>
      )}

      {step === 2 && (
        <>
          <div>
            <label htmlFor="websiteNeeded" className="mb-1.5 block text-sm font-medium text-foreground">
              What do you need your website to do?
            </label>
            <Textarea
              id="websiteNeeded"
              placeholder="Tell us your services, target area, and what enquiries you want to receive."
              value={form.websiteNeeded}
              onChange={(e) => update("websiteNeeded", e.target.value)}
              className={`min-h-[96px] ${errors.websiteNeeded ? "border-destructive" : ""}`}
              aria-invalid={!!errors.websiteNeeded}
            />
            {errors.websiteNeeded && <p className="mt-1 text-xs text-destructive">{errors.websiteNeeded}</p>}
          </div>

          {errors.submit && <p className="text-sm text-destructive">{errors.submit}</p>}

          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => {
                setStep(1);
                trackEvent("lead_form_step_back", { source, step: 2 });
              }}
            >
              Back
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary text-primary-foreground hover:bg-[#1A1A1A]"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Get My Free Website"}
            </Button>
          </div>
        </>
      )}

      <p className="pt-1 text-center text-xs text-muted-foreground">
        No payment details required. Free build, fixed hosting from £15.99/month.
      </p>
    </form>
  );
};

export default HeroForm;
