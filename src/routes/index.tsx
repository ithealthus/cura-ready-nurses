import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, GraduationCap, Hospital, Users, Award, Stethoscope, Building2, Star,
  HeartPulse, Activity, ShieldCheck, Globe2, MapPin, Briefcase, Microscope, Ambulance,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROGRAMS } from "@/lib/programs";
import { SectionTitle } from "@/components/site/SectionTitle";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import heroCampus from "@/assets/hero-campus.jpg";
import campusLife from "@/assets/campus-life.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cura Institutions — Nursing & Allied Health College, Bangalore" },
      { name: "description", content: "Train inside the Cura Hospitals ecosystem. 8 RGUHS-affiliated degrees with live ward rotations, skill labs and priority placement at Cura Hospitals & 50+ partners." },
      { property: "og:title", content: "Cura Institutions — Trained Inside a Hospital Network" },
      { property: "og:description", content: "Where every student trains inside live ICUs, OTs, cath-labs and imaging suites — not just classrooms." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const stats = [
  { value: "98%", label: "Placement rate" },
  { value: "50+", label: "Partner hospitals" },
  { value: "1,500+", label: "Beds across ecosystem" },
  { value: "8", label: "RGUHS programs" },
];

const ecosystem = [
  { icon: HeartPulse, title: "Cura Multi-speciality", body: "500+ bed flagship hospital — students rotate through ICU, OT, cath-lab, ER and inpatient wards." },
  { icon: Activity, title: "Cura Cardiac Centre", body: "Dedicated cath-lab, cardiac ICU and Echo / TMT labs powering CCT, Nursing & MIT rotations." },
  { icon: Microscope, title: "Cura Diagnostics", body: "NABL-accredited pathology, biochem, microbiology, blood-bank and molecular labs for MLT students." },
  { icon: Ambulance, title: "Cura Emergency Network", body: "Trauma bay, ambulance fleet and 24×7 ER — the live training ground for ETCT graduates." },
  { icon: Award, title: "Cura Oncology Wing", body: "LINAC, CT-simulator and brachytherapy units giving RTT students rare hands-on exposure." },
  { icon: ShieldCheck, title: "Cura Rehab & Sports", body: "Electrotherapy, gait, neuro-rehab and sports-injury OPDs anchoring the BPT programme." },
];

const learningFlow = [
  { year: "Year 1", title: "Foundation + skill labs", body: "Anatomy, physiology, biochemistry — paired with SimMan, OSCE & spoken-English coaching on campus." },
  { year: "Year 2", title: "Supervised ward exposure", body: "Step into Cura Hospitals as observers — shadow senior nurses, technologists & consultants daily." },
  { year: "Year 3", title: "Full clinical rotation", body: "Rotate through ICU, OT, cath-lab, imaging, lab and ER under structured preceptorship." },
  { year: "Year 4", title: "Paid internship + placement", body: "1-year mandatory internship inside Cura Hospitals or partner network — most students get hired before convocation." },
];

const advantages = [
  { icon: Hospital, title: "Hospital-led teaching", body: "Live rotations from semester one inside Cura Hospitals & 50+ partner hospitals — not just textbooks." },
  { icon: GraduationCap, title: "RGUHS affiliation", body: "All 8 programs are recognised by Rajiv Gandhi University of Health Sciences." },
  { icon: Award, title: "Priority placement", body: "First right of hire at Cura Hospitals plus a dedicated placement cell year-round." },
  { icon: Users, title: "Industry faculty", body: "Senior consultants, anaesthetists, cardiologists and chief nurses teach across programs." },
  { icon: Globe2, title: "International pathway", body: "Built-in IELTS / OET / NCLEX coaching for nurses & physios targeting UK, Germany, Gulf, Australia." },
  { icon: Briefcase, title: "Career-cell support", body: "Resume, interview, soft-skills, English & exam coaching from year 2 onwards." },
];

const salaryLadder = [
  { stage: "Fresher (0–1 yr)", value: "₹3 – 5 LPA" },
  { stage: "Mid (3–5 yrs)", value: "₹6 – 12 LPA" },
  { stage: "Senior (8+ yrs)", value: "₹14 – 25 LPA" },
  { stage: "International (post licensure)", value: "₹35 – 90 LPA" },
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
              <Star className="h-3.5 w-3.5 text-gold" /> RGUHS · Hospital-integrated · Hebbal, Bangalore
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] md:text-6xl">
              The only healthcare college built
              <span className="block text-gold">inside a hospital network.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              Cura Institutions is powered by the <strong className="text-gold">Cura Hospitals ecosystem</strong> — 1,500+ beds, 8 modular OTs, a cath-lab, oncology wing, NABL labs and a 24×7 trauma centre. Your child doesn't visit a hospital as a guest; they grow up in one.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link to="/admissions">Start Your Application <ArrowRight className="ml-1" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                <Link to="/programs">Explore 8 Programs</Link>
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

      {/* CURA HOSPITALS ECOSYSTEM */}
      <section className="container mx-auto px-4 py-20 md:px-8">
        <SectionTitle
          align="center"
          eyebrow="The Cura Hospitals ecosystem"
          title="Six clinical environments. One campus."
          description="Most colleges teach from textbooks and arrange external internships. At Cura, the wards, OTs, cath-labs and labs are part of the campus itself — students grow up inside them."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ecosystem.map((c) => (
            <div key={c.title} className="group rounded-2xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-gradient text-secondary-foreground">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid items-center gap-8 rounded-2xl bg-primary p-8 text-primary-foreground md:grid-cols-[1.4fr_1fr] md:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Why this matters</p>
            <h3 className="mt-2 text-2xl font-bold md:text-3xl">A Cura student spends 60% more time inside a real hospital than peers at conventional colleges.</h3>
            <p className="mt-3 text-white/80">Confidence is built in the corridors — not the classroom. That's why our graduates step into staff roles on day one, while others spend months adjusting.</p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[{v:"500+",l:"Daily OPD footfalls"},{v:"50+",l:"Surgeries weekly"},{v:"100+",l:"ICU beds"}].map((s)=> (
              <div key={s.l} className="rounded-xl border border-white/15 bg-white/5 p-4">
                <div className="text-2xl font-bold text-gold">{s.v}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-white/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW LEARNING WORKS */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            align="center"
            eyebrow="The 4-year journey"
            title="From foundation to placement — inside one ecosystem."
            description="Every semester compounds clinical confidence. By the time most students elsewhere are starting their internship, ours have already worked 600+ ward hours."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {learningFlow.map((s, i) => (
              <div key={s.year} className="relative rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="absolute -top-3 left-6 inline-flex rounded-full bg-gold px-3 py-1 text-xs font-bold text-gold-foreground">{s.year}</div>
                <div className="mt-3 text-sm font-semibold uppercase tracking-wider text-secondary">Step {i + 1}</div>
                <h3 className="mt-1 text-lg font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CURA — DIFFERENTIATORS */}
      <section className="container mx-auto px-4 py-20 md:px-8">
        <SectionTitle
          align="center"
          eyebrow="Why Cura"
          title="Six differentiators that hospitals hire for."
          description="Recruiters tell us the same thing: 'Cura graduates already know the ward.' This is how."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((c) => (
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
                  <p className="mt-2 text-xs text-muted-foreground">{p.startingSalary}</p>
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
              description="You will rarely see a hospital close. India faces a shortfall of over 2 million nurses and 1.5 million allied-health professionals by 2030 — and the demand is in every city, not just the metros."
            />
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "2.4M nursing shortfall projected in India by 2030 (WHO)",
                "₹3,000 Cr+ annual hospital infrastructure investment in Karnataka alone",
                "1 cath-lab tech needed per 50,000 population — India is short by 80%",
                "Healthcare jobs grew 22% YoY through every recession of the last decade",
                "Tier-2 & Tier-3 cities adding 200+ cath-labs and 1,500+ OT theatres each year",
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

        {/* SALARY LADDER */}
        <div className="mt-16 rounded-3xl border border-border bg-card p-8 shadow-card md:p-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Salary ladder</p>
              <h3 className="mt-2 text-2xl font-bold text-primary md:text-3xl">What our graduates earn — across 8 programs.</h3>
            </div>
            <Link to="/programs" className="inline-flex items-center gap-1 text-sm font-medium text-secondary hover:text-secondary/80">See program-wise <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {salaryLadder.map((s) => (
              <div key={s.stage} className="rounded-xl border border-border bg-surface p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.stage}</div>
                <div className="mt-2 text-xl font-bold text-primary">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLACEMENT NETWORK */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Placement network</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">First right of hire at Cura — plus 50+ partner hospitals.</h2>
              <p className="mt-3 text-white/80">Cura's placement cell engages with hospital HR teams from your second year. By the time you graduate, you've sat for 6–8 interviews, attended 4+ skill-assessment camps and earned BLS/ACLS certifications.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90"><Link to="/admissions">Apply Now</Link></Button>
                <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"><Link to="/campus-life">Tour Campus Life</Link></Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {["Cura Hospitals","Apollo","Manipal","Narayana","Fortis","Aster","Sakra","Jayadeva","HCG","BGS Gleneagles","NHM Karnataka","108 GVK-EMRI"].map((n)=> (
                <div key={n} className="grid h-20 place-items-center rounded-xl border border-white/15 bg-white/5 text-sm font-semibold text-white/90">
                  {n}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container mx-auto px-4 py-20 md:px-8">
        <SectionTitle align="center" eyebrow="Success stories" title="From classroom to ward — in their own words." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { name: "Ravi Kumar", role: "BSc Nursing, 2023", quote: "Cura was like a second home. The hospital rotations from semester one made me confident on day one of my staff-nurse job." },
            { name: "Jyoti Singh", role: "BSc CCT, 2024", quote: "I was inside the cath-lab by my second year. I got placed at a leading cardiac hospital before convocation." },
            { name: "Arjun Patel", role: "BPT, 2023", quote: "Beyond textbooks — the hands-on rehab cases prepared me for my own clinic back home in Belagavi." },
          ].map((t) => (
            <figure key={t.name} className="rounded-2xl bg-card p-7 shadow-card border border-border">
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
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-20 md:px-8">
        <div className="overflow-hidden rounded-3xl bg-hero-gradient p-10 text-center text-primary-foreground md:p-16">
          <Building2 className="mx-auto h-10 w-10 text-gold" />
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Visit the campus. Walk the wards.</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">Book a guided campus visit at our Hebbal campus — meet the faculty, see the labs, and walk through the actual hospital your child will train in.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90">
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white">
              <Link to="/contact"><MapPin className="mr-1 h-4 w-4" /> Book a Campus Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
