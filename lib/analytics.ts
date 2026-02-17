"use client";

type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

export function trackEvent(event: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const data = { event, ...payload };

  const maybeDataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer;
  if (Array.isArray(maybeDataLayer)) {
    maybeDataLayer.push(data);
  }

  if (process.env.NODE_ENV !== "production") {
    // Helpful during setup when analytics tags are not connected yet.
    console.info("[analytics]", data);
  }
}
