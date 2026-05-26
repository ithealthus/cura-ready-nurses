import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, AlertCircle, Clock, Wallet, TrendingUp, Hospital, Globe2 } from "lucide-react";
import nursingImg from "@/assets/course-nursing.jpg";
import { LandingCTAButtons, LandingStickyCTABar } from "@/components/landing/LandingCTABar";
import { LandingLeadForm } from "@/components/landing/LandingLeadForm";

export const Route = createFileRoute("/lp/bsc-nursing-neet-alternative")({
  head: () => ({
    meta: [
      { title: "NEET Backup Plan — BSc Nursing at Cura Institutions, Bangalore" },
      { name: "description", content: "Preparing for NEET? Keep BSc Nursing as your white-coat backup. RGUHS-affiliated, no entrance, 4 years, hospital-integrated training. Talk to a counsellor." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "NEET Backup — BSc Nursing at Cura Institutions" },
      { property: "og:description", content: "A white-coat career without NEET. RGUHS BSc Nursing with hospital training from day one." },
    ],
  }),
  component: NeetLP,
});

function NeetLP() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto grid gap-10 px-4 py-10 md:px-8 md:py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground">
              <AlertCircle className="h-3.5 w-3.5" /> A smart backup to NEET
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              NEET didn't go as planned?<br/>
              <span className="text-gold">Don't drop a year.</span> Wear the white coat in 4.
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/85 md:text-lg">
              BSc Nursing is the smartest alternate career for PCB students — no entrance exam, RGUHS degree, hospital-based career, and you can still pursue MSc or move abroad later.
            </p>
            <ul className="mt-5 grid gap-2 text-sm">
              {[
                "No NEET. Direct admission with 10+2 PCB (45%).",
                "4-year RGUHS degree — start earning at age 22.",
                "Hospital-integrated training inside Cura Hospitals.",
                "Open doors to MSc Nursing, MHA, MPH or NCLEX abroad.",
              ].map((t) => (
                <li key={t} className="flex gap-2"><CheckCircle2 className="h-5 w-5 shrink-0 text-gold" /> {t}</li>
              ))}
            </ul>
            <div className="mt-7"><LandingCTAButtons /></div>
          </div>
          <div className="lg:pl-4">
            <LandingLeadForm variant="neet-alternative" />
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-surface py-14">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">MBBS vs BSc Nursing — what really makes sense?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">Both are clinical careers. But the time, cost and entry barrier are very different.</p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <table className="w-full text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-4 py-3 text-left">&nbsp;</th>
                  <th className="px-4 py-3 text-left">MBBS</th>
                  <th className="px-4 py-3 text-left text-gold">BSc Nursing at Cura</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Entrance Exam", "NEET (highly competitive)", "None — direct admission"],
                  ["Duration", "5.5 yrs + PG (8+ yrs)", "4 yrs (3 + 1 internship)"],
                  ["Approx Cost", "₹50L – ₹1.5 Cr (private)", "₹10,00,000 total tuition"],
                  ["First Salary", "After 7–8 yrs", "Age 22, within months"],
                  ["Abroad Pathway", "USMLE / PLAB (long)", "NCLEX / OET / IELTS"],
                  ["Job Demand", "High", "Severe shortfall — 2.4 M by 2030"],
                ].map(([k, a, b]) => (
                  <tr key={k} className="border-t border-border">
                    <td className="px-4 py-3 font-medium text-primary">{k}</td>
                    <td className="px-4 py-3 text-foreground/70">{a}</td>
                    <td className="bg-secondary/5 px-4 py-3 font-medium text-foreground">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why nursing */}
      <section className="py-14">
        <div className="container mx-auto grid gap-10 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
          <img src={nursingImg} alt="BSc Nursing students at Cura Institutions" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft" />
          <div>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">A white-coat career, without losing a year.</h2>
            <p className="mt-3 text-muted-foreground">If you spent 2 years preparing for NEET, you already have the science foundation nursing demands. Channel it into a degree that hospitals are hiring for — today.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { Icon: Clock, t: "Don't drop a year", d: "Start your degree this academic intake itself." },
                { Icon: Wallet, t: "10x lower cost", d: "₹10L total vs ₹50L+ for private MBBS." },
                { Icon: TrendingUp, t: "Faster ROI", d: "Earning by 22; MSc / Nurse-Practitioner later." },
                { Icon: Globe2, t: "Global mobility", d: "UK, Germany, Gulf actively hiring." },
              ].map(({ Icon, t, d }) => (
                <div key={t} className="rounded-xl border border-border bg-card p-4">
                  <Icon className="h-5 w-5 text-secondary" />
                  <div className="mt-2 text-sm font-semibold text-primary">{t}</div>
                  <p className="mt-1 text-xs text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-7"><LandingCTAButtons /></div>
          </div>
        </div>
      </section>

      {/* FAQ-lite */}
      <section className="bg-surface py-14">
        <div className="container mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">Common questions from NEET students</h2>
          <div className="mt-8 space-y-4">
            {[
              { q: "Can I still do PG / MD-equivalent in nursing?", a: "Yes — MSc Nursing, Nurse Practitioner programs and clinical fellowships are available after BSc." },
              { q: "What if I clear NEET next year?", a: "BSc Nursing credits transfer to allied programs. Many students choose to continue nursing once they see the global demand and salaries." },
              { q: "Is BSc Nursing valid abroad?", a: "Yes — recognised by UK NMC, German Anerkennung, Saudi SCFHS and UAE DoH after the licensing exam." },
              { q: "Will I be just a 'helper' to doctors?", a: "No. Modern nurses run ICU monitors, manage ventilators, administer medication and lead patient care — they are clinicians, not assistants." },
            ].map((f) => (
              <div key={f.q} className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-sm font-semibold text-primary">{f.q}</h3>
                <p className="mt-1 text-sm text-foreground/75">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center"><LandingCTAButtons /></div>
        </div>
      </section>

      {/* Final */}
      <section className="bg-primary py-14 text-primary-foreground">
        <div className="container mx-auto max-w-2xl px-4 text-center md:px-8">
          <Hospital className="mx-auto h-9 w-9 text-gold" />
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Don't drop a year. Pick up a degree.</h2>
          <p className="mt-3 text-white/80">Limited seats for the 2026 intake at Cura Institutions, Bangalore.</p>
          <div className="mt-6 flex justify-center"><LandingCTAButtons /></div>
        </div>
      </section>

      <LandingStickyCTABar />
      <div className="h-16 md:hidden" />
    </>
  );
}
