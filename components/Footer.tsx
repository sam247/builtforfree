const Footer = () => {
  return (
    <footer className="border-t border-border bg-background px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="text-sm font-black tracking-tight text-foreground">
          BuiltForFree
        </span>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="mailto:hello@builtforfree.co.uk" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} BuiltForFree. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
