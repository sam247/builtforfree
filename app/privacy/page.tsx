import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read how BuiltForFree collects, uses, and protects your personal data.",
  alternates: { canonical: "https://builtforfree.co.uk/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="px-4 py-16 sm:px-6 md:py-20">
        <article className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8">
          <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-foreground">Home</Link></li>
              <li>/</li>
              <li className="text-foreground">Privacy Policy</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Privacy Policy</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: 17 February 2026</p>

          <div className="prose-bff mt-6">
            <p>
              BuiltForFree collects the details you submit through our forms (such as name, email, phone,
              and business details) so we can respond to your enquiry and deliver our services.
            </p>
            <h2>What we collect</h2>
            <ul>
              <li>Contact details you provide in lead forms</li>
              <li>Project requirements and business information</li>
              <li>Basic technical data for spam prevention and site security</li>
            </ul>
            <h2>How we use your data</h2>
            <ul>
              <li>To contact you about your website project</li>
              <li>To manage service delivery and support</li>
              <li>To improve website performance and user experience</li>
            </ul>
            <h2>Data retention</h2>
            <p>
              We keep enquiry data only for as long as needed to manage your request and comply with legal obligations.
            </p>
            <h2>Contact</h2>
            <p>
              For privacy requests, email <a href="mailto:hello@builtforfree.co.uk">hello@builtforfree.co.uk</a>.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
