import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, Paintbrush, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works | BuiltForFree",
  description: "Learn how we build your professional website for free in three simple steps. Get started today.",
  openGraph: {
    title: "How It Works | BuiltForFree",
    description: "Learn how we build your professional website for free in three simple steps.",
    type: "website",
    url: "https://builtforfree.co.uk/how-it-works",
  },
  twitter: {
    card: "summary",
    title: "How It Works | BuiltForFree",
    description: "Learn how we build your professional website for free in three simple steps.",
  },
};

const steps = [
  {
    icon: ClipboardList,
    title: "Tell Us About Your Business",
    description:
      "Fill in our quick form with your details — it takes less than 2 minutes.",
  },
  {
    icon: Paintbrush,
    title: "We Build It For Free",
    description:
      "Our team designs and develops a professional website tailored to your needs.",
  },
  {
    icon: Rocket,
    title: "Go Live",
    description:
      "Your site goes live. You only cover hosting (~£5/mo) and domain (~£10/yr).",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted/50 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground">How It Works</li>
            </ol>
          </nav>

          <div className="mb-12 text-center">
            <h1 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl">
              How It Works
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Three simple steps to your new website.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center rounded-2xl bg-background p-8 text-center shadow-sm border border-border"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="h-6 w-6" />
                </div>
                <span className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Step {i + 1}
                </span>
                <h2 className="mb-2 text-lg font-bold text-foreground">
                  {step.title}
                </h2>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
