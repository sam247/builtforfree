# SEO Query Growth Tracker

This file maps priority search query clusters to destination URLs and defines a weekly measurement loop in Google Search Console.

## Cluster-to-URL Map

- Primary commercial cluster:
  - Queries: `free website uk`, `free websites uk`, `uk free website`, `free uk website`
  - Primary URL: `/free-website-uk`
- Small business commercial cluster:
  - Queries: `free website for small business uk`, `build free website uk`, `free website design uk`
  - Primary URL: `/free-website-for-small-business-uk`
- DIY mixed-intent cluster:
  - Queries: `make a website free uk`, `set up a website for free uk`, `how to create a website for free uk`, `create a website uk free`
  - Primary URL: `/free-website-vs-diy-uk`

## Baseline Snapshot (2026-04-29)

- Data source: `Queries.csv` export.
- Current state:
  - 0 clicks across the tracked terms
  - Positions mostly outside top 20
  - Opportunity is to improve rankings first, then raise CTR with title/meta and richer snippets

## Weekly Measurement Workflow

1. In GSC Performance, filter each target URL and export queries for the last 7 days.
2. Compare average position, impressions, and CTR to the prior week.
3. Record movement for top 10 impression queries per target URL.
4. If impressions rise but CTR does not, test title/meta refinements.
5. If impressions stay flat, add 3-5 new internal links from high-crawl pages.

## Success Criteria (First 8 Weeks)

- `/free-website-uk` enters top 30 for at least 3 primary-cluster terms.
- `/free-website-for-small-business-uk` earns impressions for `small business` variants.
- `/free-website-vs-diy-uk` captures at least 2 DIY-style query variants.
- Sitewide: increase non-brand query count and earn first clicks from the tracked clusters.
