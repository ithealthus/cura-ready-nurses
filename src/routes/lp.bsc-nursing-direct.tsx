import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, GraduationCap, Hospital, Globe2, Award, ShieldCheck, Users, Stethoscope } from "lucide-react";
import nursingImg from "@/assets/course-nursing.jpg";
import { LandingCTAButtons, LandingStickyCTABar } from "@/components/landing/LandingCTABar";
import { LandingLeadForm } from "@/components/landing/LandingLeadForm";

export const Route = createFileRoute("/lp/bsc-nursing-direct")({
  head: () => ({
    meta: [
      { title: "BSc Nursing Admission 2026 — RGUHS · Cura Institutions, Bangalore" },
      { name: "description", content: "RGUHS-affiliated 4-year BSc Nursing at Cura Institutions, Bangalore. Hospital-integrated training inside Cura Hospitals. Limited seats — request callback today." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "BSc Nursing Admission 2026 — Cura Institutions, Bangalore" },
      { property: "og:description", content: "RGUHS BSc Nursing with hospital-integrated training. Apply for 2026 intake." },
    ],
  }),
  component: DirectLP,
});

function DirectLP() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto grid gap-10 px-4 py-10 md:px-8 md:py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground">RGUHS-Affiliated · Admissions Open 2026</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Become a <span className="text-gold">BSc Nurse</span> in 4 years.<br/>Train inside a working hospital from day one.
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/85 md:text-lg">
              Cura Institutions, Bangalore — a brand-new RGUHS-affiliated nursing college built inside the Cura Hospitals network. Classroom + ICU + OT + OBG exposure from semester one.
            </p>
            <ul className="mt-5 grid gap-2 text-sm">
              {[
                "RGUHS-affiliated 4-year degree (3 yrs + 1 yr internship)",
                "Hospital-integrated clinical training at Cura Hospitals",
                "Skill labs with SimMan, OSCE & spoken-English coaching",
                "Guidance & pathway for IELTS / OET / NCLEX",
              ].map((t) => (
                <li key={t} className="flex gap-2"><CheckCircle2 className="h-5 w-5 shrink-0 text-gold" /> {t}</li>
              ))}
            </ul>
            <div className="mt-7"><LandingCTAButtons /></div>
            <p className="mt-3 text-xs text-white/70">Eligibility: 10+2 with PCB · 45% (40% for SC/ST/OBC)</p>
          </div>
          <div className="lg:pl-4">
            <LandingLeadForm variant="direct" />
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="bg-surface py-14">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">Why students choose Cura</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">Four reasons families trust Cura for their daughter's or son's nursing career.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: GraduationCap, t: "RGUHS Curriculum", d: "Same syllabus & degree recognised by hospitals across India and abroad." },
              { Icon: Hospital, t: "Hospital-Integrated", d: "Live ICU, OT, OBG & paediatric postings inside Cura Hospitals from semester 1." },
              { Icon: Stethoscope, t: "Modern Skill Labs", d: "SimMan, OSCE stations & evidence-based nursing practice rooms." },
              { Icon: Globe2, t: "Global Pathway", d: "Guidance for IELTS, OET & NCLEX — UK, Germany & Gulf placements." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-teal-gradient text-secondary-foreground"><Icon className="h-5 w-5" /></div>
                <h3 className="mt-4 text-lg font-bold text-primary">{t}</h3>
                <p className="mt-1 text-sm text-foreground/75">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career outlook */}
      <section className="py-14">
        <div className="container mx-auto grid gap-10 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
          <img src={nursingImg} alt="Nursing students at Cura Institutions, Bangalore" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft" />
          <div>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">A career that's always in demand.</h2>
            <p className="mt-3 text-muted-foreground">Healthcare never stops. Every new hospital bed in India needs 3 trained nurses — and the world is hiring Indian nurses faster than we can train them.</p>
            <dl className="mt-6 grid grid-cols-2 gap-4">
              <Stat k="₹2.4 – 3.6 LPA" v="Starting salary (India)" />
              <Stat k="₹6 – 12 LPA" v="5+ yrs ICU / Speciality" />
              <Stat k="₹25 – 60 LPA" v="UK / Germany / Gulf" />
              <Stat k="2.4 M" v="Nurse shortfall in India by 2030 (WHO)" />
            </dl>
            <div className="mt-7"><LandingCTAButtons /></div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-primary py-10 text-primary-foreground">
        <div className="container mx-auto grid gap-6 px-4 text-center md:grid-cols-3 md:px-8">
          {[
            { Icon: Award, t: "RGUHS Affiliated", d: "Recognised University Degree" },
            { Icon: ShieldCheck, t: "Cura Hospitals Network", d: "Live clinical training partner" },
            { Icon: Users, t: "Cura's Vision", d: "Train 1,00,000 Allied Healthcare Professionals by 2030" },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="flex flex-col items-center">
              <Icon className="h-7 w-7 text-gold" />
              <div className="mt-2 text-base font-semibold">{t}</div>
              <div className="text-sm text-white/75">{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-surface py-14">
        <div className="container mx-auto max-w-2xl px-4 text-center md:px-8">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Limited seats for 2026 intake.</h2>
          <p className="mt-3 text-muted-foreground">Speak to an admissions counsellor today — fees, scholarships and hostel details on call.</p>
          <div className="mt-6 flex justify-center"><LandingCTAButtons /></div>
        </div>
      </section>

      <LandingStickyCTABar />
      <div className="h-16 md:hidden" />
    </>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="text-lg font-bold text-primary">{k}</div>
      <div className="mt-0.5 text-xs text-muted-foreground">{v}</div>
    </div>
  );
}
