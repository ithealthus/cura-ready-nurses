import { useMemo, useState } from "react";
import { CheckCircle2, Loader2, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { PHONE, PHONE_TEL, WHATSAPP } from "./LandingCTABar";

type Props = {
  variant: string;
  /** Default value for the "Program of interest" select. */
  program?: string;
  /** Optional override heading/subheading per landing page. */
  heading?: string;
  subheading?: string;
};

type FormState = {
  name: string;
  phone: string;
  email: string;
  city: string;
  program: string;
  status: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof FormState, string>>;

const PROGRAMS = [
  "BSc Nursing",
  "BPT (Physiotherapy)",
  "Medical Imaging Technology",
  "Operation Theatre & Anaesthesia Tech",
  "Critical Care Technology",
  "Medical Lab Technology",
  "Emergency & Trauma Care",
  "Radiotherapy Technology",
];

const STATUS_OPTIONS = [
  "Currently in Class 12",
  "Completed Class 12 (PCB)",
  "Appeared / Preparing for NEET",
  "Drop year / Looking for alternatives",
  "Parent / Guardian enquiring",
  "Other",
];

export function LandingLeadForm({
  variant,
  program = "BSc Nursing",
  heading = "Talk to an Admissions Counsellor",
  subheading = "Free call-back within 24 hours. Get fees, eligibility & seat availability.",
}: Props) {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    city: "",
    program,
    status: "",
    consent: true,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const waLink = useMemo(() => {
    const msg = `Hi Cura, I'm ${form.name || "interested"} and would like info on ${form.program}. (Source: ${variant})`;
    return `https://wa.me/919019730512?text=${encodeURIComponent(msg)}`;
  }, [form.name, form.program, variant]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Please enter your full name";
    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length !== 10) e.phone = "Enter a valid 10-digit mobile number";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";
    if (form.city.trim().length < 2) e.city = "Please enter your city";
    if (!form.status) e.status = "Select your current status";
    if (!form.consent) e.consent = "Please accept to be contacted";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      // Persist locally so the counsellor team can be wired up later via
      // Lovable Cloud / CRM webhook without changing the form UX.
      const payload = { ...form, variant, submittedAt: new Date().toISOString() };
      try {
        const key = "cura_leads";
        const existing = JSON.parse(localStorage.getItem(key) || "[]");
        existing.push(payload);
        localStorage.setItem(key, JSON.stringify(existing));
      } catch {
        /* ignore storage errors */
      }
      // Small UX delay
      await new Promise((r) => setTimeout(r, 600));
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div id="callback" className="rounded-2xl bg-card p-6 text-center shadow-card md:p-8">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-secondary/15">
          <CheckCircle2 className="h-7 w-7 text-secondary" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-primary">Thank you, {form.name.split(" ")[0]}!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Our admissions counsellor will call you on <span className="font-semibold text-foreground">+91 {form.phone.replace(/\D/g, "").slice(-10)}</span> within 24 hours.
        </p>
        <div className="mt-5 grid gap-2">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-4 py-2.5 text-sm font-semibold text-secondary-foreground hover:bg-secondary/90"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp now
          </a>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold text-primary hover:bg-muted"
          >
            <Phone className="h-4 w-4" /> Call {PHONE}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      id="callback"
      onSubmit={handleSubmit}
      className="overflow-hidden rounded-2xl bg-card shadow-card ring-1 ring-border"
      noValidate
    >
      <div className="bg-gold px-6 py-3 text-center text-xs font-semibold uppercase tracking-wide text-gold-foreground">
        Admissions Open · 2026 Intake · Limited Seats
      </div>
      <div className="p-6 md:p-7">
        <h3 className="text-xl font-bold text-primary md:text-2xl">{heading}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{subheading}</p>

        <input type="hidden" name="variant" value={variant} />

        <div className="mt-5 grid gap-3.5">
          <Field label="Full Name" error={errors.name} required>
            <input
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Student's full name"
              maxLength={80}
              className={inputCls(!!errors.name)}
            />
          </Field>

          <Field label="Mobile Number" error={errors.phone} required>
            <div className="flex">
              <span className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">
                +91
              </span>
              <input
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
                placeholder="10-digit mobile"
                className={`${inputCls(!!errors.phone)} rounded-l-none`}
              />
            </div>
          </Field>

          <div className="grid gap-3.5 sm:grid-cols-2">
            <Field label="Email" error={errors.email}>
              <input
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@email.com"
                maxLength={120}
                className={inputCls(!!errors.email)}
              />
            </Field>
            <Field label="City" error={errors.city} required>
              <input
                type="text"
                autoComplete="address-level2"
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
                placeholder="e.g. Bangalore"
                maxLength={60}
                className={inputCls(!!errors.city)}
              />
            </Field>
          </div>

          <Field label="Program of Interest" required>
            <select
              value={form.program}
              onChange={(e) => update("program", e.target.value)}
              className={inputCls(false)}
            >
              {PROGRAMS.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </Field>

          <Field label="Current Status" error={errors.status} required>
            <select
              value={form.status}
              onChange={(e) => update("status", e.target.value)}
              className={inputCls(!!errors.status)}
            >
              <option value="">Select your status</option>
              {STATUS_OPTIONS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </Field>

          <label className="mt-1 flex items-start gap-2 text-xs text-muted-foreground">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => update("consent", e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-input accent-secondary"
            />
            <span>
              I agree to receive calls, SMS and WhatsApp messages from Cura Institutions
              regarding admissions. {errors.consent && (
                <span className="block font-medium text-destructive">{errors.consent}</span>
              )}
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-4 py-3 text-sm font-semibold text-gold-foreground shadow transition hover:bg-gold/90 disabled:opacity-70"
        >
          {submitting ? (
            <><Loader2 className="h-4 w-4 animate-spin" /> Submitting…</>
          ) : (
            <>Request Free Callback</>
          )}
        </button>

        <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
          Your details are 100% safe. We never share your information.
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border pt-4">
          <a
            href={PHONE_TEL}
            className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold text-primary hover:bg-muted"
          >
            <Phone className="h-3.5 w-3.5" /> Call now
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-md bg-secondary px-3 py-2 text-xs font-semibold text-secondary-foreground hover:bg-secondary/90"
          >
            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
          </a>
        </div>
      </div>
    </form>
  );
}

function inputCls(hasError: boolean) {
  return [
    "w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none transition",
    "focus:ring-2 focus:ring-secondary",
    hasError ? "border-destructive" : "border-input",
  ].join(" ");
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold text-foreground/80">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs font-medium text-destructive">{error}</p>}
    </div>
  );
}
