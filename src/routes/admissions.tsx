import { createFileRoute } from "@tanstack/react-router";
import { FileText, ClipboardCheck, IndianRupee, Calendar, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/routes/about";
import { SectionTitle } from "@/components/site/SectionTitle";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { PROGRAMS } from "@/lib/programs";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Cura Institutions, Bangalore" },
      { name: "description", content: "RGUHS admissions for BSc Nursing, MIT, AOTT, Cardiac Care, Radiotherapy, ETCT, MLT and BPT. Eligibility, fees, and process." },
      { property: "og:title", content: "Admissions — Cura Institutions" },
      { property: "og:description", content: "Eligibility, process and fees for Cura Institutions' RGUHS programs." },
      { property: "og:url", content: "/admissions" },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
  }),
  component: Admissions,
});

function Admissions() {
  const steps = [
    { icon: FileText, title: "1. Enquire", body: "Submit the enquiry form or call our admissions desk." },
    { icon: ClipboardCheck, title: "2. Counselling", body: "Free one-on-one counselling with a senior advisor." },
    { icon: Calendar, title: "3. Campus Visit", body: "Tour the campus, hospital wards and skill labs." },
    { icon: CheckCircle2, title: "4. Apply & Enrol", body: "Submit documents, confirm seat and complete fees." },
  ];

  return (
    <>
      <PageHero
        title="Admissions 2025–26"
        subtitle="A simple four-step process to begin your RGUHS healthcare degree at Cura Institutions, Bangalore."
      />

      <section className="container mx-auto px-4 py-16 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionTitle eyebrow="How to apply" title="Your path to a Cura admission." />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {steps.map((s) => (
                <div key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-teal-gradient text-secondary-foreground">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-primary">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <SectionTitle eyebrow="Eligibility" title="Program-wise eligibility & duration." />
              <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <table className="w-full text-left text-sm">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="px-4 py-3">Program</th>
                      <th className="px-4 py-3">Duration</th>
                      <th className="px-4 py-3">Eligibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PROGRAMS.map((p, i) => (
                      <tr key={p.slug} className={i % 2 ? "bg-surface/60" : ""}>
                        <td className="px-4 py-3 font-medium text-primary">{p.name}</td>
                        <td className="px-4 py-3 text-foreground/80">{p.duration}</td>
                        <td className="px-4 py-3 text-foreground/80">{p.eligibility}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-12">
              <SectionTitle eyebrow="Documents required" title="Keep these handy." />
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {[
                  "10th & 12th marks card (original + copy)",
                  "Transfer & conduct certificate",
                  "Migration certificate (if applicable)",
                  "Aadhaar / Passport / ID proof",
                  "Caste certificate (if applicable)",
                  "Passport-size photographs (6 nos.)",
                ].map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 mt-1 shrink-0 text-secondary" /> {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 rounded-2xl bg-surface p-7">
              <div className="flex items-center gap-3">
                <IndianRupee className="h-6 w-6 text-secondary" />
                <h3 className="text-lg font-semibold text-primary">Fees & Scholarships</h3>
              </div>
              <p className="mt-2 text-sm text-foreground/80">
                Transparent fee structure with EMI options through partner banks. Merit & need-based scholarships available — speak with our counsellor for program-wise details.
              </p>
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
