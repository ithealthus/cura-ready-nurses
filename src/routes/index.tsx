import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Hospital, Users, Award, Stethoscope, Building2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROGRAMS } from "@/lib/programs";
import { SectionTitle } from "@/components/site/SectionTitle";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import heroCampus from "@/assets/hero-campus.jpg";
import campusLife from "@/assets/campus-life.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cura Institutions — RGUHS College of Nursing & Allied Health, Bangalore" },
      { name: "description", content: "Join Bangalore's most placement-focused healthcare college. 8 RGUHS-affiliated programs with guaranteed internships and priority placement at Cura Hospitals." },
      { property: "og:title", content: "Cura Institutions — Bangalore" },
      { property: "og:description", content: "RGUHS nursing & allied health programs with priority placement at Cura Hospitals." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const stats = [
  { value: "98%", label: "Placement rate" },
  { value: "50+", label: "Partner hospitals" },
  { value: "10,000+", label: "Aspiring students" },
  { value: "8", label: "RGUHS programs" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
        <div
          className="absolute inset-0 opacity-25"
          style={{ backgroundImage: `url(${heroCampus})`, backgroundSize: "cover", backgroundPosition: "center" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-transparent" aria-hidden />
        <div className="container relative mx-auto grid gap-10 px-4 py-20 md:px-8 md:py-28 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur">
              <Star className="h-3.5 w-3.5 text-gold" /> RGUHS Affiliated · Hebbal, Bangalore
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] md:text-6xl">
              Empowering India's Future
              <span className="block text-gold">Healthcare Heroes.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              Eight career-ready degree programs in Nursing & Allied Health Sciences — taught by senior clinicians, delivered inside live hospital wards, and backed by priority placement at the Cura Hospitals network.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link to="/admissions">Start Your Application <ArrowRight className="ml-1" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                <Link to="/programs">Explore Programs</Link>
              </Button>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/15 bg-white/5 p-3 text-center backdrop-blur">
                  <div className="text-2xl font-bold text-gold">{s.value}</div>
                  <div className="mt-0.5 text-xs uppercase tracking-wider text-white/75">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:pl-6"><EnquiryForm /></div>
        </div>
      </section>

      {/* WHY CURA */}
      <section className="container mx-auto px-4 py-20 md:px-8">
        <SectionTitle
          align="center"
          eyebrow="Why Cura"
          title="A healthcare college built inside a hospital network."
          description="Most colleges teach from textbooks. At Cura, every student trains on the same wards, OTs, cath-labs and imaging suites where they'll one day work."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Hospital, title: "Hospital-led teaching", body: "Live rotations from semester one inside Cura Hospitals & 50+ partner hospitals." },
            { icon: GraduationCap, title: "RGUHS affiliation", body: "All 8 programs are recognised by Rajiv Gandhi University of Health Sciences." },
            { icon: Award, title: "Priority placement", body: "First right of hire at Cura Hospitals plus dedicated placement cell year-round." },
            { icon: Users, title: "Industry faculty", body: "Senior consultants, anaesthetists and chief nurses teach across programs." },
          ].map((c) => (
            <div key={c.title} className="group rounded-2xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-gradient text-secondary-foreground">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <SectionTitle
              eyebrow="Programs"
              title="Eight programs. One promise: hire-ready graduates."
              description="Every program is a 4-year degree (3 years classroom + 1 year hospital internship) — except BPT, our 4½-year doctoral physiotherapy track."
            />
            <Button asChild variant="ghost" className="text-secondary hover:text-secondary/80">
              <Link to="/programs">View all <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMS.map((p) => (
              <Link
                key={p.slug}
                to="/programs/$slug"
                params={{ slug: p.slug }}
                className="group overflow-hidden rounded-2xl bg-card shadow-card transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-gold px-2.5 py-0.5 text-[11px] font-semibold text-gold-foreground">{p.short}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-primary leading-snug">{p.name}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{p.duration}</p>
                  <div className="mt-4 inline-flex items-center text-sm font-medium text-secondary group-hover:gap-1.5 gap-1 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MARKET OPPORTUNITY */}
      <section className="container mx-auto px-4 py-20 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Recession-proof careers"
              title="Healthcare doesn't shut down."
              description="India faces a shortfall of over 2 million nurses and 1.5 million allied-health professionals by 2030. Every Tier-2 and Tier-3 city is opening new hospitals — and they need trained talent yesterday."
            />
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "2.4M nursing shortfall projected in India by 2030 (WHO)",
                "₹3,000 Cr+ annual hospital infrastructure investment in Karnataka alone",
                "1 cath-lab tech needed per 50,000 population — India is short by 80%",
                "Healthcare jobs grew 22% YoY through every recession of the last decade",
              ].map((s) => (
                <li key={s} className="flex gap-3"><Stethoscope className="h-5 w-5 shrink-0 text-secondary" /><span className="text-foreground/80">{s}</span></li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img src={campusLife} alt="Cura Institutions students" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft" />
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-gold p-5 text-gold-foreground shadow-soft md:block">
              <div className="text-2xl font-bold">10,000+</div>
              <div className="text-xs font-medium uppercase tracking-wider">Students aspiring with Cura</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle align="center" eyebrow="Success stories" title="From classroom to ward — in their own words." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { name: "Ravi Kumar", role: "BSc Nursing, 2023", quote: "Cura was like a second home. The hospital rotations from semester one made me confident on day one of my staff-nurse job." },
              { name: "Jyoti Singh", role: "BSc CCT, 2024", quote: "I was in the cath-lab by my second year. I got placed at a leading cardiac hospital before convocation." },
              { name: "Arjun Patel", role: "BPT, 2023", quote: "Beyond textbooks — the hands-on rehab cases prepared me for my own clinic back home." },
            ].map((t) => (
              <figure key={t.name} className="rounded-2xl bg-card p-7 shadow-card">
                <div className="flex gap-1 text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <blockquote className="mt-4 text-sm text-foreground/80">"{t.quote}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-teal-gradient text-secondary-foreground font-semibold">
                    {t.name.split(" ").map((s) => s[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20 md:px-8">
        <div className="overflow-hidden rounded-3xl bg-hero-gradient p-10 text-center text-primary-foreground md:p-16">
          <Building2 className="mx-auto h-10 w-10 text-gold" />
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Ready to make a difference in healthcare?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">Applications for the upcoming RGUHS academic year are now open. Visit our Hebbal campus or speak with a counsellor today.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90">
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white">
              <Link to="/contact">Book a Campus Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
