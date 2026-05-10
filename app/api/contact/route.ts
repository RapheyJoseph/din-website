import { inspect } from "node:util";
import { NextResponse } from "next/server";
import { Resend } from "resend";

/** Runs on the server only (App Router Route Handler). */
export const runtime = "nodejs";

const isDev = process.env.NODE_ENV === "development";

/** Leadership inboxes — used in production and in dev when `RESEND_DEV_TO` is unset or invalid. */
const CONTACT_RECIPIENTS = [
  "shaheryarmalik82@gmail.com",
  "rapheyjosephsohtra@gmail.com",
] as const;

type ResolveRecipientsResult = {
  recipients: string[];
  /** True when mail was intentionally limited to `RESEND_DEV_TO` (onboarding / local testing). */
  usedResendDevTo: boolean;
};

/**
 * Onboarding / testing mode (development only)
 *
 * Resend’s `onboarding@resend.dev` sender is restricted: you typically cannot deliver to arbitrary
 * addresses until you verify a domain and use `RESEND_FROM_EMAIL`.
 *
 * For local testing, set `RESEND_DEV_TO` in `.env.local` to a single inbox Resend allows for your
 * account (e.g. your signup email). All contact form mail is then sent **only** to that address,
 * so you can exercise the flow without hitting sandbox blocks on the real leadership inboxes.
 *
 * Production: `NODE_ENV === "production"` → `RESEND_DEV_TO` is **ignored**; mail always goes to
 * `CONTACT_RECIPIENTS`. Use a verified domain + `RESEND_FROM_EMAIL` when you go live.
 */
function resolveRecipients(): ResolveRecipientsResult {
  if (!isDev) {
    return { recipients: [...CONTACT_RECIPIENTS], usedResendDevTo: false };
  }

  const raw = process.env.RESEND_DEV_TO;
  if (raw == null) {
    return { recipients: [...CONTACT_RECIPIENTS], usedResendDevTo: false };
  }

  const trimmed = raw.trim();
  if (trimmed === "") {
    console.warn(
      "[api/contact] RESEND_DEV_TO is set but empty after trim; falling back to default recipients.",
    );
    return { recipients: [...CONTACT_RECIPIENTS], usedResendDevTo: false };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    console.warn(
      "[api/contact] RESEND_DEV_TO is not a valid-looking email; falling back to default recipients.",
    );
    return { recipients: [...CONTACT_RECIPIENTS], usedResendDevTo: false };
  }

  console.info(
    "[api/contact] Onboarding/testing: sending only to RESEND_DEV_TO (leadership inboxes not used for this send).",
  );
  return { recipients: [trimmed], usedResendDevTo: true };
}

/** Reasonable caps to limit abusive payloads */
const LIMITS = { name: 200, email: 320, company: 240, message: 8_000 } as const;

/**
 * Until a domain is verified in Resend, use their onboarding sender.
 * After verification, set `RESEND_FROM_EMAIL` (e.g. `Daily IT Needs <hello@yourdomain.com>`).
 */
/** RFC5322 display name + Resend onboarding mailbox (matches Resend docs for unverified domains). */
const ONBOARDING_SENDER = "Daily IT Needs <onboarding@resend.dev>";

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

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

function getFromAddress(): string {
  const custom = process.env.RESEND_FROM_EMAIL?.trim();
  if (custom) return custom;
  return ONBOARDING_SENDER;
}

const RESEND_SDK_FETCH_FAILURE =
  "Unable to fetch data. The request could not be resolved.";

/**
 * When the Resend SDK returns a generic fetch failure, the inner `fetch` error is swallowed.
 * A direct probe surfaces `error.cause` (e.g. TLS: `UNABLE_TO_GET_ISSUER_CERT_LOCALLY`) in the terminal only.
 */
async function logFetchFailureProbe(): Promise<void> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12_000);
    const res = await fetch("https://api.resend.com/", {
      method: "GET",
      signal: controller.signal,
    });
    clearTimeout(timeout);
    console.info(
      "[api/contact] Connectivity probe: GET https://api.resend.com/ → HTTP",
      res.status,
      "(Node fetch + TLS reached Resend; failure may be request-specific or transient).",
    );
  } catch (e) {
    console.error(
      "[api/contact] Connectivity probe FAILED — underlying reason Node’s fetch reports (this is often the real issue behind Resend’s generic message):",
    );
    console.error(inspect(e, { depth: 6, colors: true }));
    if (e instanceof Error && e.cause !== undefined) {
      console.error("[api/contact] probe .cause:", inspect(e.cause, { depth: 6, colors: true }));
    }
  }
}

function maskApiKey(key: string): string {
  if (key.length < 12) return "(too short to mask)";
  return `${key.slice(0, 7)}…${key.slice(-4)}`;
}

/** User-safe copy for non-validation failures (no provider or implementation detail strings). */
const GENERIC_EMAIL_FAILURE =
  "Unable to send email right now. Please try again or email us directly.";

export async function POST(request: Request) {
  // Temporary visibility: env wiring (remove once delivery is stable).
  console.log(process.env.RESEND_API_KEY ? "[api/contact] API KEY FOUND" : "[api/contact] NO API KEY");
  console.log("[api/contact] RESEND_DEV_TO =", process.env.RESEND_DEV_TO ?? "(unset)");

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

  const apiKeyRaw = process.env.RESEND_API_KEY;
  const apiKey = apiKeyRaw?.trim();
  if (!apiKey) {
    console.error("[api/contact] Missing API key env var (configure for Resend and restart the server).");
    return NextResponse.json(
      { ok: false, error: GENERIC_EMAIL_FAILURE },
      { status: 503 },
    );
  }

  if (isDev) {
    console.info("[api/contact] API key present (masked):", maskApiKey(apiKey));
  }

  const from = getFromAddress();
  if (from !== ONBOARDING_SENDER && isDev) {
    console.info("[api/contact] Using RESEND_FROM_EMAIL override:", from);
  }
  const { name, email, company, message } = validated.data;
  const { recipients, usedResendDevTo } = resolveRecipients();

  const devRouteNote = usedResendDevTo
    ? `<p style="margin-top:1rem;padding:0.75rem;border-radius:8px;background:#1e293b;color:#e2e8f0;font-size:13px;"><strong>Dev routing:</strong> This message was sent to <code>RESEND_DEV_TO</code> only (onboarding test mode).</p>`
    : "";

  const html = `
        <h2>New contact request</h2>
        ${devRouteNote}
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company)}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;font-family:inherit;margin:0;">${escapeHtml(message)}</pre>
      `;

  const text = [
    usedResendDevTo ? `[Dev routing: sent to RESEND_DEV_TO only]\n` : ``,
    `New contact request`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const subject = `Website contact — ${company} (${name})`;

  /** Explicit key avoids relying on constructor reading env in non-standard runtimes. */
  const resend = new Resend(apiKey);

  try {
    const emailPayload = {
      from,
      to: recipients[0],
      ...(recipients.length > 1 ? { cc: recipients.slice(1) } : {}),
      replyTo: email,
      subject,
      html,
      text,
    };

    console.info("[api/contact] Sending via Resend:", {
      from,
      to: emailPayload.to,
      cc: "cc" in emailPayload ? emailPayload.cc : undefined,
      replyTo: emailPayload.replyTo,
      onboardingTestMode: usedResendDevTo,
    });

    const { data: sendData, error: sendErr } = await resend.emails.send(emailPayload);

    if (sendErr) {
      console.error("\n========== FULL RESEND ERROR (terminal only) ==========");
      console.error(inspect(sendErr, { depth: 10, colors: true }));
      console.error("[api/contact] Resend error JSON:", JSON.stringify(sendErr, null, 2));
      console.error("=======================================================\n");

      const msg =
        sendErr !== null &&
        typeof sendErr === "object" &&
        "message" in sendErr &&
        typeof (sendErr as { message?: unknown }).message === "string"
          ? (sendErr as { message: string }).message
          : "";
      if (isDev && msg === RESEND_SDK_FETCH_FAILURE) {
        console.error(
          "[api/contact] Resend SDK reported a transport failure (no HTTP body from API). Running connectivity probe…",
        );
        await logFetchFailureProbe();
      }

      return NextResponse.json({ ok: false, error: GENERIC_EMAIL_FAILURE }, { status: 502 });
    }

    if (isDev) {
      console.info("[api/contact] Send succeeded, provider id:", sendData?.id ?? "(none)");
    }

    return NextResponse.json({ ok: true, message: "Message sent." }, { status: 200 });
  } catch (err) {
    console.error("\n========== Next.js route THROW (terminal only) ==========");
    console.error(inspect(err, { depth: 8, colors: true }));
    if (err instanceof Error && err.cause !== undefined) {
      console.error("[api/contact] thrown .cause:", inspect(err.cause, { depth: 6, colors: true }));
    }
    console.error("==========================================================\n");
    return NextResponse.json({ ok: false, error: GENERIC_EMAIL_FAILURE }, { status: 500 });
  }
}
