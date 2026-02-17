"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

interface HeroFormProps {
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

const HeroForm = ({ variant = "inline" }: HeroFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    businessType: "",
    websiteNeeded: "",
  });

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!form.businessType) {
      newErrors.businessType = "Please select a business type";
    }

    if (!form.websiteNeeded.trim() || form.websiteNeeded.trim().length < 10) {
      newErrors.websiteNeeded = "Please describe what you need (at least 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    // TODO: Replace with Resend webhook integration
    console.log("Form submitted:", form);
    
    // Simulate API call
    try {
      // await fetch("[Your webhook endpoint]", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors({ submit: "Something went wrong. Please try again." });
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <CheckCircle className="h-12 w-12 text-primary" />
        <h3 className="text-xl font-bold text-foreground">Thank You!</h3>
        <p className="text-muted-foreground">
          We&apos;ll be in touch within 24 hours to discuss your free website.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
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
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-destructive">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className={errors.email ? "border-destructive" : ""}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-destructive">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="businessType" className="mb-1.5 block text-sm font-medium text-foreground">
          Business Type
        </label>
        <Select
          value={form.businessType}
          onValueChange={(v) => update("businessType", v)}
        >
          <SelectTrigger
            id="businessType"
            className={errors.businessType ? "border-destructive" : ""}
            aria-invalid={!!errors.businessType}
            aria-describedby={errors.businessType ? "businessType-error" : undefined}
          >
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
        {errors.businessType && (
          <p id="businessType-error" className="mt-1 text-xs text-destructive">
            {errors.businessType}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="websiteNeeded" className="mb-1.5 block text-sm font-medium text-foreground">
          Website Needed
        </label>
        <Textarea
          id="websiteNeeded"
          placeholder="Briefly describe what you need..."
          value={form.websiteNeeded}
          onChange={(e) => update("websiteNeeded", e.target.value)}
          className={`min-h-[100px] ${errors.websiteNeeded ? "border-destructive" : ""}`}
          aria-invalid={!!errors.websiteNeeded}
          aria-describedby={errors.websiteNeeded ? "websiteNeeded-error" : undefined}
        />
        {errors.websiteNeeded && (
          <p id="websiteNeeded-error" className="mt-1 text-xs text-destructive">
            {errors.websiteNeeded}
          </p>
        )}
      </div>

      {errors.submit && (
        <p className="text-sm text-destructive">{errors.submit}</p>
      )}

      <Button
        type="submit"
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        size="lg"
      >
        Get My Free Website
      </Button>
    </form>
  );
};

export default HeroForm;
