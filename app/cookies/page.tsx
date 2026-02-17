import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn how BuiltForFree uses cookies and similar technologies on this website.",
  alternates: { canonical: "https://builtforfree.co.uk/cookies" },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="px-4 py-16 sm:px-6 md:py-20">
        <article className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8">
          <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-foreground">Home</Link></li>
              <li>/</li>
              <li className="text-foreground">Cookie Policy</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Cookie Policy</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: 17 February 2026</p>

          <div className="prose-bff mt-6">
            <p>
              We use cookies and similar technologies to improve website performance and understand visitor behavior.
            </p>
            <h2>Types of cookies</h2>
            <ul>
              <li>Essential cookies required for site functionality</li>
              <li>Performance cookies for analytics and user behavior insights</li>
              <li>Preference cookies to remember user settings when applicable</li>
            </ul>
            <h2>Managing cookies</h2>
            <p>
              You can manage cookie settings through your browser preferences.
              Disabling essential cookies may affect site functionality.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
