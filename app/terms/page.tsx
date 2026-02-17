import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the terms for using BuiltForFree, including launch billing, hosting fees, cancellation, and liabilities.",
  alternates: { canonical: "https://builtforfree.co.uk/terms" },
  openGraph: {
    title: "Terms and Conditions | BuiltForFree",
    description:
      "BuiltForFree service terms including hosting at £15.99/month inc VAT starting on launch.",
    type: "website",
    url: "https://builtforfree.co.uk/terms",
  },
};

export default function TermsPage() {
  const updatedDate = "17 February 2026";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="px-4 py-16 sm:px-6 md:py-20">
        <article className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8">
          <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-foreground">Home</Link>
              </li>
              <li>/</li>
              <li className="text-foreground">Terms and Conditions</li>
            </ol>
          </nav>

          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Terms and Conditions</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {updatedDate}</p>

          <div className="prose-bff mt-6">
            <h2>1. Introduction</h2>
            <p>
              Welcome to BuiltForFree. These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of
              our services. By applying for, accessing, or using our services, you agree to be bound by these
              Terms. If you do not agree, you must not use our services.
            </p>

            <h2>2. Services Provided</h2>
            <ul>
              <li>BuiltForFree provides website design and development services at no upfront build fee, subject to application approval.</li>
              <li>Website hosting is billed monthly at £15.99 inc VAT and includes hosting, SSL certificate, security, and maintenance support.</li>
              <li>Custom domain linking is included, but domain purchase and renewal remain your responsibility.</li>
            </ul>

            <h2>3. Application and Acceptance</h2>
            <p>
              All applications are subject to review and acceptance by BuiltForFree. Once accepted and onboarding
              is complete, you authorize us to begin building your website.
            </p>

            <h2>4. Launch and Billing Commencement</h2>
            <ul>
              <li>BuiltForFree does not operate a free trial period.</li>
              <li>Hosting billing begins when your website is launched and made live.</li>
              <li>By approving launch, you authorize monthly hosting charges from the launch date.</li>
            </ul>

            <h2>5. Subscription and Billing</h2>
            <ul>
              <li>Hosting is billed at £15.99 inc VAT per month.</li>
              <li>Payments are billed monthly in advance.</li>
              <li>There is no minimum contract term unless separately agreed in writing.</li>
            </ul>

            <h2>6. No Refund Policy</h2>
            <ul>
              <li>All payments taken after the billing date are non-refundable.</li>
              <li>No refunds are issued for dissatisfaction after launch, unused time, business changes, or failure to cancel before the next billing cycle.</li>
            </ul>

            <h2>7. Website Review and Approval</h2>
            <ul>
              <li>You are responsible for reviewing your website during the build process.</li>
              <li>Reasonable amendment requests may be made before launch.</li>
              <li>Launch approval constitutes acceptance of the website as delivered.</li>
            </ul>

            <h2>8. Domain Responsibilities</h2>
            <ul>
              <li>You are responsible for purchasing, renewing, and maintaining your domain name.</li>
              <li>BuiltForFree is not responsible for domain expiry, registrar issues, or loss of domain ownership.</li>
            </ul>

            <h2>9. Cancellation and Termination</h2>
            <ul>
              <li>You may cancel your hosting subscription at any time.</li>
              <li>Upon cancellation, your website may be taken offline.</li>
              <li>Website data may be permanently deleted after 30 days following cancellation.</li>
              <li>BuiltForFree may suspend or terminate service for non-payment, misuse, or breach of these Terms.</li>
            </ul>

            <h2>10. User Responsibilities</h2>
            <ul>
              <li>You must provide accurate and complete information.</li>
              <li>You are responsible for all content provided and confirm it does not infringe third-party rights.</li>
              <li>You agree not to use our services for unlawful, fraudulent, or unauthorized purposes.</li>
            </ul>

            <h2>11. Limitation of Liability</h2>
            <ul>
              <li>BuiltForFree is not liable for indirect, incidental, or consequential losses, including loss of data, revenue, profit, or opportunity.</li>
              <li>Total liability is limited to the amount paid by you to BuiltForFree in the 12 months preceding any claim.</li>
              <li>We are not responsible for failures caused by third-party services or events outside our control.</li>
            </ul>

            <h2>12. Data Protection and Privacy</h2>
            <p>
              BuiltForFree complies with UK GDPR and applicable data protection laws. You confirm that all data you
              provide complies with legal requirements.
            </p>

            <h2>13. Indemnity</h2>
            <p>
              You agree to indemnify and hold BuiltForFree harmless from claims, damages, losses, or expenses
              arising from your use of the services, your content, or your breach of these Terms.
            </p>

            <h2>14. E-commerce Payment Processing</h2>
            <ul>
              <li>Where e-commerce functionality is enabled, we use Stripe Connect to process transactions.</li>
              <li>Stripe fees are currently £0.20 plus 1.5% per transaction.</li>
              <li>BuiltForFree fees are currently £0.10 plus 0.5% per transaction.</li>
              <li>Applicable fees are deducted before funds are transferred.</li>
              <li>BuiltForFree is not responsible for delays or errors caused by Stripe or other third-party payment providers.</li>
            </ul>

            <h2>15. Force Majeure</h2>
            <p>
              BuiltForFree is not liable for delay or failure caused by events outside reasonable control,
              including outages, technical failures, natural events, or third-party disruption.
            </p>

            <h2>16. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. Changes take effect upon publication. Continued use of the
              services constitutes acceptance of the updated Terms.
            </p>

            <h2>17. Contact Us</h2>
            <p>
              For questions about these Terms, contact <a href="mailto:hello@builtforfree.co.uk">hello@builtforfree.co.uk</a>.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
