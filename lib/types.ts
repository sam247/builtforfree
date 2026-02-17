export interface LeadSubmissionPayload {
  name: string;
  email: string;
  phone?: string;
  businessType: string;
  websiteNeeded?: string;
  description?: string;
  source: string;
  page: string;
  honeypot?: string;
}

export interface LeadApiSuccess {
  ok: true;
  message: string;
}

export interface LeadApiError {
  ok: false;
  errorCode:
    | "VALIDATION_ERROR"
    | "RATE_LIMITED"
    | "CONFIG_ERROR"
    | "UPSTREAM_ERROR"
    | "UNKNOWN_ERROR";
  message: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface ContentFrontmatter {
  title: string;
  description: string;
  slug: string;
  date: string;
  category: string;
  intent: string;
  author: string;
  canonical?: string;
  faq?: FAQItem[];
}

export interface ContentEntry extends ContentFrontmatter {
  content: string;
  html: string;
  collection: "blog" | "articles" | "areas";
}
