import { NextResponse } from "next/server";
import { Resend } from "resend";

/** Runs on the server only (App Router Route Handler). */
export const runtime = "nodejs";

/** Temporary: Resend onboarding sender only (no verified domain). */
const RESEND_FROM_ONBOARDING = "onboarding@resend.dev";

/** Reasonable caps — form UI unchanged; body still validated before send. */
const LIMITS = { name: 200, email: 320, company: 240, message: 8_000 } as const;

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
};

function parseAndValidate(payload: unknown):
  | { ok: true; data: ContactPayload }
  | { ok: false; message: string; fieldErrors?: Partial<Record<keyof ContactPayload, string>> } {
  if (payload === null || typeof payload !== "object") {
    return { ok: false, message: "Invalid JSON body." };
  }
  const raw = payload as Record<string, unknown>;
  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  const email = typeof raw.email === "string" ? raw.email.trim() : "";
  const company = typeof raw.company === "string" ? raw.company.trim() : "";
  const message = typeof raw.message === "string" ? raw.message.trim() : "";

  const fieldErrors: Partial<Record<keyof ContactPayload, string>> = {};
  if (!name) fieldErrors.name = "Full name is required.";
  else if (name.length > LIMITS.name) fieldErrors.name = `Max ${LIMITS.name} characters.`;

  if (!email) fieldErrors.email = "Email is required.";
  else if (email.length > LIMITS.email) fieldErrors.email = `Max ${LIMITS.email} characters.`;
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fieldErrors.email = "Enter a valid email address.";

  if (!company) fieldErrors.company = "Company is required.";
  else if (company.length > LIMITS.company) fieldErrors.company = `Max ${LIMITS.company} characters.`;

  if (!message) fieldErrors.message = "Message is required.";
  else if (message.length > LIMITS.message) fieldErrors.message = `Max ${LIMITS.message} characters.`;

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, message: "Please fix the highlighted fields.", fieldErrors };
  }

  return { ok: true, data: { name, email, company, message } };
}

const GENERIC_EMAIL_FAILURE =
  "Unable to send email right now. Please try again or email us directly.";

export async function POST(request: Request) {
  console.log("RESEND_DEV_TO =", process.env.RESEND_DEV_TO);

  let body: unknown;
  try {
    body = await request.json();
  } catch (parseErr) {
    console.error("[api/contact] JSON parse failed:", parseErr);
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const validated = parseAndValidate(body);
  if (!validated.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: validated.message,
        fieldErrors: validated.fieldErrors ?? {},
      },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error("[api/contact] Missing RESEND_API_KEY.");
    return NextResponse.json({ ok: false, error: GENERIC_EMAIL_FAILURE }, { status: 503 });
  }

  const devTo = process.env.RESEND_DEV_TO?.trim();
  if (!devTo) {
    console.error("[api/contact] Missing RESEND_DEV_TO (required for this temporary send path).");
    return NextResponse.json({ ok: false, error: GENERIC_EMAIL_FAILURE }, { status: 503 });
  }

  const resend = new Resend(apiKey);

  try {
    const { data: sendData, error: sendErr } = await resend.emails.send({
      from: RESEND_FROM_ONBOARDING,
      to: [devTo],
      subject: "Test Email",
      html: "<p>Test</p>",
    });

    if (sendErr) {
      console.error("[api/contact] Resend error body (exact):", JSON.stringify(sendErr, null, 2));
      return NextResponse.json({ ok: false, error: GENERIC_EMAIL_FAILURE }, { status: 502 });
    }

    console.log("[api/contact] Resend send ok, id:", sendData?.id);
    return NextResponse.json({ ok: true, message: "Message sent." }, { status: 200 });
  } catch (err) {
    console.error("[api/contact] Unexpected error:", err);
    return NextResponse.json({ ok: false, error: GENERIC_EMAIL_FAILURE }, { status: 500 });
  }
}
