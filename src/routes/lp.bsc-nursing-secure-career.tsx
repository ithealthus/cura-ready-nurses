import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Home, HeartHandshake, Globe2, GraduationCap, Building2, CheckCircle2 } from "lucide-react";
import nursingImg from "@/assets/course-nursing.jpg";
import { LandingCTAButtons, LandingStickyCTABar } from "@/components/landing/LandingCTABar";
import { LandingLeadForm } from "@/components/landing/LandingLeadForm";

export const Route = createFileRoute("/lp/bsc-nursing-secure-career")({
  head: () => ({
    meta: [
      { title: "BSc Nursing for Your Daughter — Safe Hostel · RGUHS · Cura Bangalore" },
      { name: "description", content: "A recession-proof career for your daughter. RGUHS BSc Nursing at Cura Institutions, Bangalore — supervised hostel, hospital-integrated training, global pathway." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "BSc Nursing for Your Daughter — Cura Institutions, Bangalore" },
      { property: "og:description", content: "RGUHS degree, safe hostel, hospital-integrated training and a globally-mobile career." },
    ],
  }),
  component: SecureLP,
});

function SecureLP() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={nursingImg} alt="" aria-hidden className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative container mx-auto grid gap-10 px-4 py-10 text-primary-foreground md:px-8 md:py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground">For parents · For families</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              A <span className="text-gold">recession-proof career</span> for your daughter.<br/>Trained safely. Placed confidently.
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/90 md:text-lg">
              Healthcare never stops. Cura Institutions, Bangalore — an RGUHS-affiliated nursing college built inside the Cura Hospitals network, with supervised hostel and women-first campus policies.
            </p>
            <ul className="mt-5 grid gap-2 text-sm">
              {[
                "Supervised girls' hostel with 24×7 warden & CCTV",
                "Day-shift only clinical postings in 1st & 2nd year",
                "RGUHS-affiliated 4-year degree — total tuition ₹10,00,000",
                "Guidance & pathway for IELTS / OET / NCLEX",
              ].map((t) => (
                <li key={t} className="flex gap-2"><CheckCircle2 className="h-5 w-5 shrink-0 text-gold" /> {t}</li>
              ))}
            </ul>
            <div className="mt-7"><LandingCTAButtons /></div>
          </div>
          <div className="lg:pl-4">
            <LandingLeadForm variant="secure-career" />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-14">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">Built for peace of mind.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">Four things every parent worries about — and how Cura addresses each one.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: Home, t: "Safe Hostel", d: "Wardens 24×7, CCTV, biometric entry, separate girls' wing." },
              { Icon: ShieldCheck, t: "Supervised Shifts", d: "Day-only postings in 1st–2nd year. Night exposure later, in groups, with senior supervision." },
              { Icon: GraduationCap, t: "RGUHS Degree", d: "Same curriculum and degree as top nursing colleges in Karnataka." },
              { Icon: HeartHandshake, t: "Career Support", d: "Hospital-integrated training & placement guidance via Cura Hospitals network." },
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

      {/* Story strip */}
      <section className="bg-surface py-14">
        <div className="container mx-auto grid gap-8 px-4 md:px-8 lg:grid-cols-3">
          {[
            { Icon: Building2, t: "Hospital from day one", d: "Live ICU, OT and OBG exposure inside Cura Hospitals — not just textbooks." },
            { Icon: Globe2, t: "A passport-ready career", d: "UK, Germany, Saudi & UAE are issuing tens of thousands of nurse visas every year." },
            { Icon: ShieldCheck, t: "It's Cura's vision", d: "To train 1,00,000 Allied Healthcare Professionals by 2030 — your daughter is part of that mission." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="rounded-2xl bg-card p-6 shadow-card">
              <Icon className="h-7 w-7 text-secondary" />
              <h3 className="mt-3 text-lg font-bold text-primary">{t}</h3>
              <p className="mt-1 text-sm text-foreground/75">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-14 text-primary-foreground">
        <div className="container mx-auto max-w-2xl px-4 text-center md:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">Talk to our admissions team today.</h2>
          <p className="mt-3 text-white/80">Hostel tour, fee structure, scholarship and EMI options — all in one call.</p>
          <div className="mt-6 flex justify-center"><LandingCTAButtons /></div>
        </div>
      </section>

      <LandingStickyCTABar />
      <div className="h-16 md:hidden" />
    </>
  );
}
