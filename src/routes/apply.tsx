import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { PROGRAMS } from "@/lib/programs";
import { CheckCircle2, Loader2, Upload } from "lucide-react";

const SITE = "https://cura-ready-nurses.lovable.app";

const SearchSchema = z.object({ course: z.string().optional() });

export const Route = createFileRoute("/apply")({
  validateSearch: (s) => SearchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Apply Now — Cura Institutions Admissions" },
      { name: "description", content: "Apply online for RGUHS-affiliated allied healthcare degrees at Cura Institutions, Bangalore. Fill the application form, upload documents, and our admissions team will be in touch." },
      { name: "keywords", content: "Cura Institutions application, BSc Nursing application, allied health admissions Bangalore, apply online, RGUHS admission form" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Apply Now — Cura Institutions" },
      { property: "og:description", content: "Online application for Cura Institutions' allied healthcare degrees." },
      { property: "og:url", content: `${SITE}/apply` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/apply` }],
  }),
  component: ApplyPage,
});

const SectionHeader = ({ n, title, desc }: { n: number; title: string; desc?: string }) => (
  <div className="border-b border-border pb-3">
    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary">Section {n}</p>
    <h2 className="mt-1 text-xl font-bold text-primary md:text-2xl">{title}</h2>
    {desc && <p className="mt-1 text-sm text-muted-foreground">{desc}</p>}
  </div>
);

const Field = ({
  label, name, required, type = "text", placeholder, value, onChange,
}: {
  label: string; name: string; required?: boolean; type?: string;
  placeholder?: string; value?: string; onChange?: (v: string) => void;
}) => (
  <div className="space-y-1.5">
    <Label htmlFor={name}>
      {label} {required && <span className="text-destructive">*</span>}
    </Label>
    <Input
      id={name}
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={onChange ? (e) => onChange(e.target.value) : undefined}
    />
  </div>
);

const FileField = ({ label, name, required }: { label: string; name: string; required?: boolean }) => (
  <div className="space-y-1.5">
    <Label htmlFor={name}>
      {label} {required && <span className="text-destructive">*</span>}
    </Label>
    <div className="relative">
      <Input
        id={name}
        name={name}
        type="file"
        required={required}
        accept="image/*,application/pdf"
        className="file:mr-3 file:rounded file:border-0 file:bg-secondary file:px-3 file:py-1 file:text-xs file:font-semibold file:text-secondary-foreground"
      />
    </div>
    <p className="text-[11px] text-muted-foreground">JPG, PNG or PDF • max 8 MB</p>
  </div>
);

function SelectField({
  label, name, required, options, value, onValueChange, placeholder,
}: {
  label: string; name: string; required?: boolean;
  options: { value: string; label: string }[];
  value?: string; onValueChange?: (v: string) => void; placeholder?: string;
}) {
  const [internal, setInternal] = useState("");
  const val = value ?? internal;
  const handle = (v: string) => { onValueChange ? onValueChange(v) : setInternal(v); };
  return (
    <div className="space-y-1.5">
      <Label>
        {label} {required && <span className="text-destructive">*</span>}
      </Label>
      <Select value={val} onValueChange={handle}>
        <SelectTrigger><SelectValue placeholder={placeholder ?? "Select…"} /></SelectTrigger>
        <SelectContent>
          {options.map((o) => (
            <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <input type="hidden" name={name} value={val} required={required} />
    </div>
  );
}

function ApplyPage() {
  const search = useSearch({ from: "/apply" });
  const initialCourse = PROGRAMS.find((p) => p.slug === search.course)?.name || "";
  const [course, setCourse] = useState(initialCourse);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [consent, setConsent] = useState(false);
  const [declared, setDeclared] = useState(false);
  const [subjects, setSubjects] = useState("");
  const [subjectsOther, setSubjectsOther] = useState("");


  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!consent) { setError("Please consent to be contacted."); return; }
    if (!declared) { setError("Please confirm the student & parent declaration."); return; }
    if (!course) { setError("Please select a course."); return; }

    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.set("course", course);
    fd.set("page_url", typeof window !== "undefined" ? window.location.href : "");

    setSubmitting(true);
    try {
      const res = await fetch("/api/public/applications", { method: "POST", body: fd });
      const j = await res.json().catch(() => ({}));
      if (!res.ok || !j.ok) {
        setError(j.error || "Submission failed. Please try again.");
        setSubmitting(false);
        return;
      }
      setDone(true);
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again.");
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <section className="container mx-auto max-w-3xl px-4 py-24 md:px-8">
        <div className="rounded-2xl bg-card p-10 text-center shadow-card">
          <CheckCircle2 className="mx-auto h-14 w-14 text-secondary" />
          <h1 className="mt-4 text-3xl font-bold text-primary">Application received</h1>
          <p className="mt-3 text-muted-foreground">
            Thank you for applying to Cura Institutions. Our admissions team will review your
            application and reach out within 2 working days.
          </p>
          <Button asChild className="mt-6"><Link to="/">Back to home</Link></Button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-hero-gradient py-14 text-primary-foreground">
        <div className="container mx-auto max-w-4xl px-4 md:px-8">
          <h1 className="text-3xl font-bold md:text-4xl">Apply to Cura Institutions</h1>
          <p className="mt-2 text-white/85">
            One form for all RGUHS-affiliated allied healthcare degrees. Fill the details below and
            upload your documents — we will get back to you within 2 working days.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-4 py-12 md:px-8">
        <form onSubmit={handleSubmit} className="space-y-10 rounded-2xl bg-card p-6 shadow-card md:p-10">

          {/* SECTION 1 */}
          <div className="space-y-6">
            <SectionHeader n={1} title="Course Selection" />
            <div className="grid gap-4 sm:grid-cols-2">
              <SelectField
                label="Course applied for" name="course" required
                value={course} onValueChange={setCourse}
                options={PROGRAMS.map((p) => ({ value: p.name, label: p.name }))}
              />
              <div className="space-y-1.5">
                <Label>Preferred campus / location</Label>
                <Input value="Hebbal - Bengaluru" readOnly className="bg-muted/40" />
                <input type="hidden" name="preferred_campus" value="Hebbal - Bengaluru" />
              </div>
              <div className="space-y-1.5">
                <Label>Admission session / academic year</Label>
                <Input value="2026-27" readOnly className="bg-muted/40" />
                <input type="hidden" name="academic_year" value="2026-27" />
              </div>

              <SelectField
                label="Mode of admission" name="mode_of_admission"
                options={[
                  { value: "Direct", label: "Direct" },
                  { value: "Counselling", label: "Counselling" },
                  { value: "Partner", label: "Partner" },
                  { value: "Referral", label: "Referral" },
                ]}
              />
              <Field label="Partner name (if applicable)" name="partner_name" />
              <SelectField
                label="Source of enquiry" name="source_of_enquiry"
                options={[
                  { value: "Website", label: "Website" },
                  { value: "Google", label: "Google" },
                  { value: "Meta", label: "Meta (Facebook/Instagram)" },
                  { value: "Partner", label: "Partner" },
                  { value: "Walk-in", label: "Walk-in" },
                  { value: "Reference", label: "Reference" },
                ]}
              />
            </div>
          </div>

          {/* SECTION 2 */}
          <div className="space-y-6">
            <SectionHeader n={2} title="Student Personal Details" />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name as per 10th marksheet" name="full_name" required />
              <Field label="Date of birth" name="dob" type="date" required />
              <SelectField
                label="Gender" name="gender"
                options={[
                  { value: "Male", label: "Male" },
                  { value: "Female", label: "Female" },
                  { value: "Other", label: "Other" },
                ]}
              />
              <Field label="Nationality" name="nationality" placeholder="Indian" />
              <SelectField
                label="Category" name="category"
                options={["General","OBC","SC","ST","EWS","Others"].map((v) => ({ value: v, label: v }))}
              />
              <Field label="Aadhaar number" name="aadhaar" placeholder="12-digit Aadhaar" />
              <Field label="Student mobile number" name="student_mobile" type="tel" required placeholder="+91" />
              <Field label="Student email ID" name="student_email" type="email" required placeholder="you@example.com" />
              <div className="sm:col-span-2">
                <FileField label="Passport-size photo" name="photo" />
              </div>
            </div>
          </div>

          {/* SECTION 3 */}
          <div className="space-y-6">
            <SectionHeader n={3} title="Parent / Guardian Details" />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Father's name" name="father_name" />
              <Field label="Mother's name" name="mother_name" />
              <Field label="Parent / guardian mobile" name="parent_mobile" type="tel" />
              <Field label="Parent / guardian occupation" name="parent_occupation" />
              <Field label="Annual family income (₹)" name="annual_income" placeholder="e.g. 5,00,000" />
            </div>
          </div>

          {/* SECTION 4 */}
          <div className="space-y-6">
            <SectionHeader n={4} title="Address Details" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label htmlFor="current_address">Current address</Label>
                <Textarea id="current_address" name="current_address" rows={2} className="mt-1.5" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="permanent_address">Permanent address</Label>
                <Textarea id="permanent_address" name="permanent_address" rows={2} className="mt-1.5" />
              </div>
              <Field label="City" name="city" required placeholder="e.g. Bangalore" />
              <Field label="State" name="state" />
              <Field label="District" name="district" />
              <Field label="Pincode" name="pincode" />
            </div>
          </div>

          {/* SECTION 5 */}
          <div className="space-y-6">
            <SectionHeader n={5} title="Academic Details" />
            <div className="rounded-xl border border-border bg-surface p-5">
              <h3 className="text-sm font-semibold text-primary">10th Standard</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Board" name="tenth_board" placeholder="CBSE / ICSE / State" required />
                <Field label="School name" name="tenth_school" required />
                <Field label="Year of passing" name="tenth_year" required />
                <Field label="Percentage / CGPA" name="tenth_percentage" required />
                <div className="sm:col-span-2"><FileField label="10th marksheet" name="tenth_marksheet" required /></div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-surface p-5">
              <h3 className="text-sm font-semibold text-primary">12th Standard</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Board" name="twelfth_board" required />
                <Field label="School / college name" name="twelfth_school" required />
                <SelectField
                  label="Stream" name="twelfth_stream" required
                  options={["Science","Commerce","Arts","Vocational"].map((v) => ({ value: v, label: v }))}
                />
                <Field label="Subjects studied" name="twelfth_subjects" placeholder="e.g. PCB + English" required />
                <Field label="Physics marks" name="physics_marks" required />
                <Field label="Chemistry marks" name="chemistry_marks" required />
                <Field label="Biology marks" name="biology_marks" required />
                <Field label="English marks" name="english_marks" required />
                <Field label="Total percentage" name="twelfth_total_percentage" required />
                <Field label="Year of passing / appearing" name="twelfth_year" required />
                <div className="sm:col-span-2"><FileField label="12th marksheet" name="twelfth_marksheet" required /></div>
              </div>
            </div>
          </div>

          {/* SECTION 6 */}
          <div className="space-y-6">
            <SectionHeader n={6} title="Important Documents" desc="Upload scanned copies (PDF or JPG/PNG)." />
            <div className="grid gap-4 sm:grid-cols-2">
              <FileField label="Aadhaar card" name="aadhaar_card" />
              <FileField label="Transfer certificate" name="transfer_certificate" />
              <FileField label="Migration certificate" name="migration_certificate" />
              <FileField label="Caste / income certificate" name="caste_income_certificate" />
            </div>
            <p className="text-xs text-muted-foreground"><Upload className="-mt-0.5 mr-1 inline h-3.5 w-3.5" />10th and 12th marksheets are uploaded in Section 5.</p>
          </div>

          {/* SECTION 7 */}
          <div className="space-y-6">
            <SectionHeader n={7} title="Admission, Fee & Declaration" />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Counsellor / admission partner name" name="counsellor_name" />
              <SelectField
                label="Hostel required?" name="hostel_required"
                options={[{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }]}
              />
              <SelectField
                label="Education loan required?" name="education_loan"
                options={[{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }]}
              />
              <SelectField
                label="Registration fee paid?" name="registration_fee_paid"
                options={[{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }]}
              />
              <Field label="Amount paid (₹)" name="amount_paid" />
              <Field label="Transaction ID / reference" name="transaction_id" />
            </div>

            <div className="space-y-3 rounded-xl border border-border bg-surface p-5">
              <label className="flex items-start gap-3 text-sm">
                <Checkbox checked={consent} onCheckedChange={(v) => setConsent(!!v)} className="mt-0.5" />
                <span>
                  I consent to be contacted by Cura Institutions via phone, WhatsApp, SMS and email
                  regarding this application.
                </span>
              </label>
              <input type="hidden" name="consent_to_contact" value={consent ? "Yes" : "No"} />

              <label className="flex items-start gap-3 text-sm">
                <Checkbox checked={declared} onCheckedChange={(v) => setDeclared(!!v)} className="mt-0.5" />
                <span>
                  I (student) and my parent/guardian declare that the information provided is true
                  to the best of our knowledge.
                </span>
              </label>
              <input type="hidden" name="declaration" value={declared ? "Yes" : "No"} />
            </div>
          </div>

          {error && (
            <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm font-medium text-destructive">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              By submitting, you agree to share these details with Cura Institutions' admissions team.
            </p>
            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              {submitting
                ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting application…</>)
                : "Submit Application"}
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}
