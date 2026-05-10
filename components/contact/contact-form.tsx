"use client";

import { motion } from "framer-motion";
import { type FormEvent, useCallback, useState } from "react";
import { btnPrimary, glassPanel } from "@/lib/ui-classes";

const fieldClassBase =
  "w-full min-h-11 rounded-lg border bg-slate-950/40 px-4 py-3 text-[15px] text-white shadow-inner shadow-black/20 outline-none transition placeholder:text-slate-600 focus-visible:ring-2 focus-visible:ring-white/[0.06]";

/** Default field chrome (border focus states applied per-field for error contrast) */
function fieldClass(e?: string) {
  const err = e ? "border-rose-400/35 focus-visible:border-rose-400/50" : "";
  const ok = !e ? "border-white/[0.08] focus-visible:border-white/[0.15] focus-visible:bg-slate-950/70" : "";
  return `${fieldClassBase} ${err || ok}`;
}

type ContactField = "name" | "email" | "company" | "message";

type ApiErrorBody = {
  ok?: boolean;
  error?: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
};

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  /** Field-level errors from client + server (422) validation */
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<ContactField, string>>>(
    {},
  );

  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const clearFieldError = useCallback((field: ContactField) => {
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  /** Lightweight client guard so we never POST empty whitespace-only fields */
  function validateClient(): boolean {
    const next: Partial<Record<ContactField, string>> = {};
    if (!name.trim()) next.name = "Full name is required.";
    if (!email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = "Enter a valid email address.";
    if (!company.trim()) next.company = "Company is required.";
    if (!message.trim()) next.message = "Message is required.";
    setFieldErrors(next);
    setSubmitError(Object.keys(next).length ? "Please fix the highlighted fields." : null);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSuccess(false);
    setSubmitError(null);
    if (!validateClient()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          message: message.trim(),
        }),
      });

      const payload = (await res.json().catch(() => ({}))) as ApiErrorBody;

      if (!res.ok) {
        if (res.status === 422 && payload.fieldErrors) {
          setFieldErrors(payload.fieldErrors);
          setSubmitError(payload.error ?? "Please review the form.");
        } else {
          setSubmitError(payload.error ?? "Something went wrong. Please try again shortly.");
        }
        return;
      }

      setSuccess(true);
      setSubmitError(null);
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
      setFieldErrors({});
    } catch {
      setSubmitError("Network error. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className={`${glassPanel} p-6 sm:p-7`} noValidate>
      <h3 className="text-xl font-semibold tracking-tight text-white">Request a consultation</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        Share context on your product and quality goals—we&apos;ll follow up with next steps.
      </p>

      {/* Top-level server / network message (not duplicated as field errors) */}
      {submitError ? (
        <div
          role="alert"
          className="mt-5 rounded-xl border border-rose-400/25 bg-rose-500/10 px-4 py-3 text-sm leading-relaxed text-rose-100/95"
        >
          {submitError}
        </div>
      ) : null}

      {success ? (
        <div
          role="status"
          aria-live="polite"
          className="mt-5 rounded-xl border border-emerald-400/25 bg-emerald-500/10 px-4 py-3 text-sm leading-relaxed text-emerald-100/95"
        >
          Thank you. Your message was sent—we&apos;ll respond within one business day.
        </div>
      ) : null}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="sr-only">
            Full name
          </label>
          <input
            id="contact-name"
            name="name"
            value={name}
            onChange={(ev) => {
              setName(ev.target.value);
              clearFieldError("name");
              if (success) setSuccess(false);
            }}
            placeholder="Full name"
            autoComplete="name"
            disabled={loading}
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
            className={fieldClass(fieldErrors.name)}
          />
          {fieldErrors.name ? (
            <p id="contact-name-error" className="mt-1.5 text-xs text-rose-300/90">
              {fieldErrors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="contact-email" className="sr-only">
            Work email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={email}
            onChange={(ev) => {
              setEmail(ev.target.value);
              clearFieldError("email");
              if (success) setSuccess(false);
            }}
            autoComplete="email"
            placeholder="Work email"
            disabled={loading}
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
            className={fieldClass(fieldErrors.email)}
          />
          {fieldErrors.email ? (
            <p id="contact-email-error" className="mt-1.5 text-xs text-rose-300/90">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="contact-company" className="sr-only">
          Organization
        </label>
        <input
          id="contact-company"
          name="company"
          value={company}
          onChange={(ev) => {
            setCompany(ev.target.value);
            clearFieldError("company");
            if (success) setSuccess(false);
          }}
          placeholder="Organization"
          autoComplete="organization"
          disabled={loading}
          aria-invalid={!!fieldErrors.company}
          aria-describedby={fieldErrors.company ? "contact-company-error" : undefined}
          className={fieldClass(fieldErrors.company)}
        />
        {fieldErrors.company ? (
          <p id="contact-company-error" className="mt-1.5 text-xs text-rose-300/90">
            {fieldErrors.company}
          </p>
        ) : null}
      </div>

      <div className="mt-4">
        <label htmlFor="contact-message" className="sr-only">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={message}
          onChange={(ev) => {
            setMessage(ev.target.value);
            clearFieldError("message");
            if (success) setSuccess(false);
          }}
          rows={5}
          placeholder="Release timeline, stack, and QA challenges"
          disabled={loading}
          aria-invalid={!!fieldErrors.message}
          aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
          className={`${fieldClass(fieldErrors.message)} min-h-[8.5rem] resize-y`}
        />
        {fieldErrors.message ? (
          <p id="contact-message-error" className="mt-1.5 text-xs text-rose-300/90">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      <motion.button
        type="submit"
        whileTap={{ scale: loading ? 1 : 0.98 }}
        disabled={loading}
        aria-busy={loading}
        className={`${btnPrimary} mt-6 w-full disabled:pointer-events-none disabled:opacity-60`}
      >
        {loading ? "Sending…" : "Submit request"}
      </motion.button>
    </form>
  );
}
