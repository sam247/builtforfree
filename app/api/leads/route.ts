import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { LeadSubmissionPayload } from "@/lib/types";

type RateBucket = {
  count: number;
  resetAt: number;
};

const RATE_LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;
const buckets = new Map<string, RateBucket>();

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getClientIp(req: NextRequest) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) {
    return xff.split(",")[0]?.trim() ?? "unknown";
  }
  return "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = buckets.get(ip);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (bucket.count >= RATE_LIMIT) {
    return true;
  }

  bucket.count += 1;
  buckets.set(ip, bucket);
  return false;
}

function validateLead(payload: Partial<LeadSubmissionPayload>) {
  if (!payload.name || payload.name.trim().length < 2) {
    return "Name must be at least 2 characters.";
  }

  if (!payload.email || !EMAIL_REGEX.test(payload.email)) {
    return "Please enter a valid email address.";
  }

  if (!payload.businessType) {
    return "Business type is required.";
  }

  const details = payload.websiteNeeded ?? payload.description;
  if (!details || details.trim().length < 10) {
    return "Please provide at least 10 characters about your website needs.";
  }

  if (!payload.source || !payload.page) {
    return "Source and page are required.";
  }

  return null;
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);

    if (checkRateLimit(ip)) {
      return NextResponse.json(
        {
          ok: false,
          errorCode: "RATE_LIMITED",
          message: "Too many submissions. Please try again in a few minutes.",
        },
        { status: 429 }
      );
    }

    const body = (await req.json()) as Partial<LeadSubmissionPayload>;

    if (body.honeypot?.trim()) {
      return NextResponse.json({ ok: true, message: "Thanks. We will be in touch shortly." });
    }

    const validationError = validateLead(body);
    if (validationError) {
      return NextResponse.json(
        { ok: false, errorCode: "VALIDATION_ERROR", message: validationError },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.LEADS_TO_EMAIL;
    const fromEmail = process.env.LEADS_FROM_EMAIL || "BuiltForFree Leads <onboarding@resend.dev>";

    if (!resendApiKey || !toEmail) {
      return NextResponse.json(
        {
          ok: false,
          errorCode: "CONFIG_ERROR",
          message: "Lead capture is not configured yet.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const details = body.websiteNeeded ?? body.description ?? "";

    const subject = `New BuiltForFree lead: ${body.name}`;

    const html = `
      <h2>New BuiltForFree Lead</h2>
      <p><strong>Name:</strong> ${escapeHtml(body.name ?? "")}</p>
      <p><strong>Email:</strong> ${escapeHtml(body.email ?? "")}</p>
      <p><strong>Phone:</strong> ${escapeHtml(body.phone ?? "Not provided")}</p>
      <p><strong>Business Type:</strong> ${escapeHtml(body.businessType ?? "")}</p>
      <p><strong>Website Needs:</strong><br/>${escapeHtml(details).replace(/\n/g, "<br/>")}</p>
      <hr/>
      <p><strong>Source:</strong> ${escapeHtml(body.source ?? "")}</p>
      <p><strong>Page:</strong> ${escapeHtml(body.page ?? "")}</p>
      <p><strong>IP:</strong> ${escapeHtml(ip)}</p>
      <p><strong>Submitted:</strong> ${new Date().toISOString()}</p>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject,
      html,
      replyTo: body.email,
    });

    if (error) {
      return NextResponse.json(
        {
          ok: false,
          errorCode: "UPSTREAM_ERROR",
          message: "Unable to submit right now. Please try again shortly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Thanks. We will contact you within one business day.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        errorCode: "UNKNOWN_ERROR",
        message: "Unexpected error. Please try again.",
      },
      { status: 500 }
    );
  }
}
