# BuiltForFree

Conversion-focused Next.js website for marketing free website builds to UK small businesses.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Resend (lead email delivery)
- MDX content files (blog, areas, articles)

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables in `.env.local`:

```bash
RESEND_API_KEY=your_resend_api_key
LEADS_TO_EMAIL=you@example.com
LEADS_FROM_EMAIL="BuiltForFree Leads <onboarding@resend.dev>"
```

3. Run dev server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000).

## Lead Pipeline

Lead forms post to `POST /api/leads` with payload:

```ts
{
  name: string;
  email: string;
  phone?: string;
  businessType: string;
  websiteNeeded?: string;
  description?: string;
  source: string;
  page: string;
}
```

### API behavior

- Validates required fields and formats
- Applies honeypot spam filtering
- Applies basic per-IP rate limiting
- Sends structured lead email via Resend

## Content System

MDX content sources:

- `content/blog/*.mdx`
- `content/articles/*.mdx`
- `content/areas/*.mdx`

Required frontmatter fields:

- `title`
- `description`
- `slug`
- `date`
- `category`
- `intent`
- `author`
- optional `canonical`
- optional `faq`

## SEO

- Route-level metadata via Next.js Metadata API
- Structured data: Organization, WebSite, Service, FAQPage, BreadcrumbList, Article
- Dynamic sitemap includes examples + content routes

## Scripts

### Generate screenshots

```bash
node scripts/generate-screenshots.js
```

Outputs to `public/sites/{slug}.webp`.

## Production

```bash
npm run build
npm start
```
