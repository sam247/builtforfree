import { LeadApiError, LeadApiSuccess, LeadSubmissionPayload } from "@/lib/types";

export async function submitLead(payload: LeadSubmissionPayload): Promise<LeadApiSuccess> {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = (await response.json()) as LeadApiSuccess | LeadApiError;

  if (!response.ok || !result.ok) {
    throw new Error(result.message || "Unable to submit your request right now.");
  }

  return result;
}
