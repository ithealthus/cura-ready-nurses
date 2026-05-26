import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function LandingLeadForm({ variant }: { variant: string }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div id="callback" className="rounded-2xl bg-card p-6 text-center shadow-card">
        <CheckCircle2 className="mx-auto h-10 w-10 text-secondary" />
        <h3 className="mt-3 text-lg font-semibold text-primary">Thank you!</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Our admissions counsellor will call you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      id="callback"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-2xl bg-card p-6 shadow-card md:p-7"
    >
      <h3 className="text-xl font-bold text-primary">Get BSc Nursing Admission Info</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Fees, eligibility & seat availability — within 24 hours.
      </p>
      <input type="hidden" name="variant" value={variant} />
      <div className="mt-5 grid gap-3">
        <input required placeholder="Student's Full Name" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-secondary" />
        <input required type="tel" placeholder="Mobile Number (+91)" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-secondary" />
        <input type="email" placeholder="Email (optional)" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-secondary" />
        <select className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-secondary">
          <option value="">Class / Status</option>
          <option>Currently in 12th</option>
          <option>Completed 12th (PCB)</option>
          <option>Appeared / Preparing for NEET</option>
          <option>Other</option>
        </select>
      </div>
      <button type="submit" className="mt-4 w-full rounded-md bg-gold px-4 py-3 text-sm font-semibold text-gold-foreground shadow hover:bg-gold/90">
        Request Callback
      </button>
      <p className="mt-2 text-center text-[11px] text-muted-foreground">
        By submitting you agree to be contacted by Cura Institutions.
      </p>
    </form>
  );
}
