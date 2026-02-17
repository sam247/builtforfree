import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Review the terms that govern use of BuiltForFree and our website services.",
  alternates: { canonical: "https://builtforfree.co.uk/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="px-4 py-16 sm:px-6 md:py-20">
        <article className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8">
          <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-foreground">Home</Link></li>
              <li>/</li>
              <li className="text-foreground">Terms of Service</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Terms of Service</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: 17 February 2026</p>

          <div className="prose-bff mt-6">
            <p>
              These terms govern use of BuiltForFree websites and services. By submitting an enquiry,
              you agree to these terms.
            </p>
            <h2>Service scope</h2>
            <ul>
              <li>We provide website design and development based on agreed project requirements.</li>
              <li>You provide accurate business details, branding assets, and required approvals.</li>
            </ul>
            <h2>Pricing</h2>
            <ul>
              <li>Website build is provided at no upfront design/development fee.</li>
              <li>Hosting and domain costs are payable separately as agreed.</li>
            </ul>
            <h2>Revisions and launch</h2>
            <ul>
              <li>Reasonable revisions are included during the build process.</li>
              <li>Project timelines depend on response times and supplied content.</li>
            </ul>
            <h2>Liability</h2>
            <p>
              BuiltForFree is not liable for indirect losses, third-party service outages, or user-entered content.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
