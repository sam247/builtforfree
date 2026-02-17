import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background px-4 py-12 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex items-center" aria-label="BuiltForFree home">
            <Image src="/logo.svg" alt="BuiltForFree" width={170} height={36} className="h-9 w-auto" />
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            Professional websites for UK small businesses, built for free to help you generate more enquiries.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link href="/how-it-works" className="hover:text-foreground">How It Works</Link></li>
            <li><a href="/#examples" className="hover:text-foreground">Examples</a></li>
            <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
            <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Legal</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
            <li><Link href="/cookies" className="hover:text-foreground">Cookie Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Support</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="mailto:hello@builtforfree.co.uk" className="hover:text-foreground">hello@builtforfree.co.uk</a></li>
            <li>Response time: within one business day</li>
            <li><a href="/#form" className="font-medium text-foreground hover:text-primary">Claim your free website</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-border pt-5 text-xs text-muted-foreground">
        <p>Copyright {new Date().getFullYear()} BuiltForFree. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
