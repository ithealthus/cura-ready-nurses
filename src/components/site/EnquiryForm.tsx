import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PROGRAMS } from "@/lib/programs";
import { CheckCircle2, Loader2 } from "lucide-react";

export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [program, setProgram] = useState<string>("");

  if (submitted) {
    return (
      <div className="rounded-xl bg-card p-6 text-center shadow-card">
        <CheckCircle2 className="mx-auto h-10 w-10 text-secondary" />
        <h3 className="mt-3 text-lg font-semibold">Thank you!</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Our admissions counsellor will call you within 24 hours.
        </p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const programSlug = program;
    const programName = PROGRAMS.find((p) => p.slug === programSlug)?.name || programSlug;
    const payload = {
      name: `${fd.get("fn") || ""} ${fd.get("ln") || ""}`.trim(),
      phone: String(fd.get("ph") || ""),
      email: String(fd.get("em") || ""),
      city: "",
      program: programName,
      status: String(fd.get("msg") || ""),
      variant: "site-enquiry",
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
    };
    setSubmitting(true);
    try {
      await fetch("/api/public/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Lead submission failed", err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-xl bg-card p-6 shadow-card ${compact ? "" : "md:p-8"}`}
    >
      <h3 className="text-xl font-bold text-primary">Request a Callback</h3>
      <p className="mt-1 text-sm text-muted-foreground">Get personalised admission guidance.</p>

      <div className={`mt-5 grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div className="space-y-1.5">
          <Label htmlFor="fn">First Name</Label>
          <Input id="fn" name="fn" required placeholder="Your first name" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="ln">Last Name</Label>
          <Input id="ln" name="ln" required placeholder="Your last name" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="ph">Phone</Label>
          <Input id="ph" name="ph" required type="tel" placeholder="+91" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="em">Email</Label>
          <Input id="em" name="em" required type="email" placeholder="you@example.com" />
        </div>
        <div className={`space-y-1.5 ${compact ? "" : "sm:col-span-2"}`}>
          <Label>Course of Interest</Label>
          <Select value={program} onValueChange={setProgram}>
            <SelectTrigger><SelectValue placeholder="Select a program" /></SelectTrigger>
            <SelectContent>
              {PROGRAMS.map((p) => (
                <SelectItem key={p.slug} value={p.slug}>{p.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className={`space-y-1.5 ${compact ? "" : "sm:col-span-2"}`}>
          <Label htmlFor="msg">Message (optional)</Label>
          <Textarea id="msg" name="msg" placeholder="Anything we should know?" rows={3} />
        </div>
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="mt-5 w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
      >
        {submitting ? (
          <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting…</>
        ) : (
          "Request Callback"
        )}
      </Button>
    </form>
  );
}
