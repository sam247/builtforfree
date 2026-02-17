import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://builtforfree.co.uk"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  title: {
    default: "Free Website Design for UK Small Businesses | BuiltForFree",
    template: "%s | BuiltForFree",
  },
  description:
    "Get a professional small business website built for free. BuiltForFree helps UK businesses launch in days and generate more enquiries.",
  alternates: {
    canonical: "https://builtforfree.co.uk",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://builtforfree.co.uk",
    siteName: "BuiltForFree",
    title: "Free Website Design for UK Small Businesses | BuiltForFree",
    description:
      "Professional websites built for free for UK businesses. You only pay for hosting and domain.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Website Design for UK Small Businesses | BuiltForFree",
    description:
      "Professional websites built for free for UK businesses. You only pay for hosting and domain.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${plusJakarta.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
