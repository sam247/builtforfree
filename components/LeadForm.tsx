"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LeadFormProps {
  variant?: "inline" | "modal";
}

const businessTypes = [
  "Restaurant / Café",
  "Salon / Barbershop",
  "Tradesperson",
  "Portfolio / Creative",
  "E-commerce / Shop",
  "Other",
];

const LeadForm = ({ variant = "inline" }: LeadFormProps) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    description: "",
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const submit = () => {
    console.log("Lead submitted:", form);
    setSubmitted(true);
  };

  const canNext =
    (step === 1 && form.name && form.email) ||
    (step === 2 && form.phone && form.businessType);

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 py-8 text-center"
      >
        <CheckCircle className="h-12 w-12 text-[#00B67A]" />
        <h3 className="text-xl font-bold text-foreground">You&apos;re In!</h3>
        <p className="text-muted-foreground">
          We&apos;ll be in touch within 24 hours to discuss your free website.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="w-full">
      {/* Progress */}
      <div className="mb-6 flex items-center gap-2">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex flex-1 items-center gap-2">
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                s <= step
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {s}
            </div>
            {s < 3 && (
              <div
                className={`h-0.5 w-full rounded transition-colors ${
                  s < step ? "bg-foreground" : "bg-muted"
                }`}
              />
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
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Your Name
              </label>
              <Input
                placeholder="John Smith"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="border-foreground/20 bg-background"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="border-foreground/20 bg-background"
              />
            </div>
            <Button
              onClick={next}
              disabled={!canNext}
              className="w-full bg-foreground text-background hover:bg-foreground/90"
              size="lg"
            >
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
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Phone Number
              </label>
              <Input
                type="tel"
                placeholder="07700 900000"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="border-foreground/20 bg-background"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Business Type
              </label>
              <Select
                value={form.businessType}
                onValueChange={(v) => update("businessType", v)}
              >
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
              <Button
                onClick={back}
                variant="outline"
                className="flex-1 border-foreground/20"
                size="lg"
              >
                Back
              </Button>
              <Button
                onClick={next}
                disabled={!canNext}
                className="flex-1 bg-foreground text-background hover:bg-foreground/90"
                size="lg"
              >
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
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Tell us what you need
              </label>
              <Textarea
                placeholder="Briefly describe your business and what you'd like your website to do..."
                value={form.description}
                onChange={(e) => update("description", e.target.value)}
                className="min-h-[100px] border-foreground/20 bg-background"
              />
            </div>
            <div className="flex gap-3">
              <Button
                onClick={back}
                variant="outline"
                className="flex-1 border-foreground/20"
                size="lg"
              >
                Back
              </Button>
              <Button
                onClick={submit}
                className="flex-1 bg-foreground text-background hover:bg-foreground/90"
                size="lg"
              >
                Get My Free Website
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LeadForm;
