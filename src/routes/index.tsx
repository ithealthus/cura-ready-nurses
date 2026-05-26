import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, GraduationCap, Hospital, Users, Award, Stethoscope, Building2, Star,
  HeartPulse, Activity, ShieldCheck, Globe2, MapPin, Briefcase, Microscope, Ambulance,
  Scan, Syringe, FlaskConical, Baby,
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
      { title: "Cura Institutions — Allied Healthcare Degrees, Bangalore" },
      { name: "description", content: "Bangalore's only Allied Healthcare college built inside the Cura Hospitals network. 8 RGUHS-affiliated allied health degrees with live ICU, OT, cath-lab and lab rotations from semester one." },
      { name: "keywords", content: "allied healthcare, BSc Nursing, MIT, AOTT, cardiac care, radiotherapy, emergency care, MLT, BPT, RGUHS, Bangalore, healthcare college, Cura Hospitals" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Cura Institutions — Allied Healthcare, Trained Inside a Hospital" },
      { property: "og:description", content: "Imaging, Anaesthesia & OT, Cardiac Care, Radiotherapy, Emergency Care, Lab Tech & Physiotherapy — taught inside Cura Hospitals." },
      { property: "og:url", content: "https://cura-ready-nurses.lovable.app/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://cura-ready-nurses.lovable.app/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "Cura Institutions",
        description: "RGUHS-affiliated allied healthcare college in Bangalore, offering BSc Nursing, MIT, AOTT, Cardiac Care, Radiotherapy, ETCT, MLT and BPT inside the Cura Hospitals network.",
        url: "https://cura-ready-nurses.lovable.app",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hebbal",
          addressRegion: "Karnataka",
          addressCountry: "IN",
        },
      }),
    }],
  }),
  component: Home,
});

// Allied Healthcare focus — exclude BSc Nursing
const ALLIED = PROGRAMS;

const stats = [
  { value: "8", label: "Allied Health degrees" },
  { value: "2", label: "Cura Hospitals on campus" },
  { value: "22+", label: "Clinical specialities" },
  { value: "1,00,000", label: "Our vision: Allied Healthcare Professionals trained by 2030" },
];

// Cura Hospitals ecosystem — sourced from curahospitals.com
const ecosystem = [
  { icon: HeartPulse, title: "Cardiology & Cath-lab", body: "Full interventional cardiology unit — the live training ground for BSc Cardiac Care Technology students." },
  { icon: Scan, title: "Radiology & Imaging", body: "CT, MRI, ultrasound and digital X-ray suites where Medical Imaging Technology students rotate from year two." },
  { icon: Syringe, title: "Anaesthesia & Modular OTs", body: "Multi-speciality operation theatres covering ortho, neuro, general & plastic surgery — the home of our AOTT programme." },
  { icon: Award, title: "Oncology & Radiotherapy", body: "Onco wing supporting RTT students with real exposure to treatment planning and patient care workflows." },
  { icon: Ambulance, title: "24×7 Emergency & Trauma", body: "Round-the-clock ER and ambulance services — where Emergency & Trauma Care Tech students train under live load." },
  { icon: FlaskConical, title: "Diagnostics & Pathology", body: "Hospital pathology, biochemistry and microbiology labs powering the Medical Laboratory Technology curriculum." },
  { icon: Activity, title: "Physiotherapy & Rehab", body: "In-patient and out-patient rehab, electrotherapy, post-op and sports physio — anchor for the BPT programme." },
  { icon: Baby, title: "Vatsalya Women & Child", body: "Dedicated mother-and-child wing plus HBOT centre — broadening clinical exposure for every allied health student." },
];

const learningFlow = [
  { year: "Year 1", title: "Foundation + skill labs", body: "Anatomy, physiology, biochemistry and core allied-health basics, paired with SimMan, OSCE drills and spoken-English coaching." },
  { year: "Year 2", title: "Supervised hospital exposure", body: "Step into Cura Hospitals (Kanakapura Rd & Kammanahalli) as observers — shadow technologists and consultants daily." },
  { year: "Year 3", title: "Department-specific rotations", body: "Rotate through cath-lab, imaging suites, modular OTs, ER, oncology and pathology under structured preceptorship." },
  { year: "Year 4", title: "Internship", body: "1-year mandatory internship inside Cura Hospitals or partner network — designed to convert into full-time roles for performing graduates." },
];

const advantages = [
  { icon: Hospital, title: "Allied-only focus", body: "Cura Institutions is built around 8 RGUHS Allied Healthcare degrees — not a general college that offers them on the side." },
  { icon: GraduationCap, title: "RGUHS recognised", body: "Every programme is affiliated to Rajiv Gandhi University of Health Sciences and aligned to NCAHP norms." },
  { icon: Stethoscope, title: "Trained inside Cura Hospitals", body: "Two multi-speciality Cura Hospitals (Kanakapura Road & Kammanahalli) act as the campus's living clinical lab." },
  { icon: Users, title: "Consultants as faculty", body: "Senior radiologists, anaesthetists, cardiologists, pathologists and physiotherapists from Cura teach the core papers." },
  { icon: Award, title: "Hospital-integrated training", body: "Graduate from a college where the hospital is your classroom — not an afterthought. Cura students build confidence inside real wards from semester one." },
  { icon: Globe2, title: "International pathway", body: "Guidance & pathway support for IELTS, OET and NCLEX for imaging, lab, physio and OT technologists targeting UK, Germany, Gulf and Australia." },
];

const salaryLadder = [
  { stage: "Fresher (0–1 yr)", value: "₹1.8 – 3 LPA" },
  { stage: "Mid (3–5 yrs)", value: "₹4 – 8 LPA" },
  { stage: "Senior (8+ yrs)", value: "₹10 – 18 LPA" },
  { stage: "International (post licensure)", value: "₹25 – 60 LPA" },
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
              <Star className="h-3.5 w-3.5 text-gold" /> RGUHS · Allied Healthcare · Hebbal, Bangalore
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] md:text-6xl">
              Bangalore's Allied Healthcare college
              <span className="block text-gold">built inside Cura Hospitals.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              8 RGUHS-affiliated Allied Healthcare degrees — Nursing, Imaging, Anaesthesia & OT, Cardiac Care, Radiotherapy, Emergency Care, Lab Technology and Physiotherapy — trained inside the <strong className="text-gold">Cura Hospitals</strong> multi-speciality network (Kanakapura Road & Kammanahalli). Your child doesn't visit a hospital as a guest; they grow up in one.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link to="/admissions">Start Your Application <ArrowRight className="ml-1" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                <Link to="/programs">Explore 8 Allied Programs</Link>
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

      {/* WHY ALLIED HEALTHCARE */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            align="center"
            eyebrow="Why Allied Healthcare"
            title="The fastest-growing healthcare careers in India aren't doctors — they're technologists."
            description="For every 1 doctor, India needs 4 trained allied healthcare professionals. The shortage is acute, the salaries are rising, and the work is recession-proof."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {[
              { v: "65L+", l: "Allied health professionals India will need by 2030" },
              { v: "4:1", l: "Allied-to-doctor ratio recommended by WHO" },
              { v: "12-yr", l: "Avg. degree-to-international-licensure pathway" },
              { v: "0%", l: "AI risk: hands-on roles can't be automated" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-card p-6 text-center shadow-card">
                <div className="text-3xl font-bold text-secondary">{s.v}</div>
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURA HOSPITALS ECOSYSTEM */}
      <section className="container mx-auto px-4 py-20 md:px-8">
        <SectionTitle
          align="center"
          eyebrow="The Cura Hospitals advantage"
          title="A working multi-speciality hospital network is your classroom."
          description="Cura Hospitals operates two NABH-aligned multi-speciality hospitals in Bangalore — Kanakapura Road and Kammanahalli — covering 22+ clinical specialities including cardiology, neurosurgery, oncology, radiology, anaesthesia, pathology and a 24×7 emergency. Every Cura Institutions student rotates through these departments as part of the curriculum."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ecosystem.map((c) => (
            <div key={c.title} className="group rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-gradient text-secondary-foreground">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-primary">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid items-center gap-8 rounded-2xl bg-primary p-8 text-primary-foreground md:grid-cols-[1.4fr_1fr] md:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Why this matters</p>
            <h3 className="mt-2 text-2xl font-bold md:text-3xl">A Cura allied health student spends 60% more hands-on time inside a real hospital than peers at conventional colleges.</h3>
            <p className="mt-3 text-white/80">Confidence is built in the cath-lab, the OT corridor and the imaging console — not the textbook. That's why Cura graduates step into technologist roles on day one, while others spend months adjusting.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-center">
            {[
              { v: "2", l: "Cura Hospital branches" },
              { v: "22+", l: "Specialities" },
              { v: "24×7", l: "ER & pharmacy" },
              { v: "15+ yrs", l: "Clinical legacy" },
            ].map((s) => (
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
            title="From foundation to career — inside one ecosystem."
            description="Every semester compounds clinical confidence. By the time students elsewhere are starting their internship, ours have already worked 600+ hours inside a working hospital."
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
          eyebrow="Why Cura Institutions"
          title="Six reasons hospitals hire Cura allied health graduates first."
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

      {/* PROGRAMS — ALLIED ONLY */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <SectionTitle
              eyebrow="Allied Healthcare programs"
              title="Eight RGUHS degrees. One promise: hire-ready healthcare professionals."
              description="Each programme is a 4-year degree (3 years classroom inside Cura's clinical labs + 1 year internship) — except BPT, our 4½-year doctoral physiotherapy track."
            />
            <Button asChild variant="ghost" className="text-secondary hover:text-secondary/80">
              <Link to="/programs">View all <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ALLIED.map((p) => (
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
              title="Healthcare never stops."
              description="Healthcare demand only grows. India faces a shortfall of over 65 lakh allied healthcare professionals by 2030 — and the demand is in every tier-2 and tier-3 city, not just the metros."
            />
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "65L+ allied healthcare professional shortfall projected in India by 2030 (NCAHP)",
                "1 cath-lab technologist needed per 50,000 population — India is short by 80%",
                "1 radiographer required per 10,000 — current ratio is 1 per 65,000",
                "Healthcare jobs grew 22% YoY through every recession of the last decade",
                "Tier-2 & Tier-3 cities adding 200+ cath-labs and 1,500+ OT theatres every year",
              ].map((s) => (
                <li key={s} className="flex gap-3"><Stethoscope className="h-5 w-5 shrink-0 text-secondary" /><span className="text-foreground/80">{s}</span></li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img src={campusLife} alt="Cura Institutions allied health students" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft" />
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-gold p-5 text-gold-foreground shadow-soft md:block">
              <div className="text-2xl font-bold">1,00,000+</div>
              <div className="text-xs font-medium uppercase tracking-wider">Allied healthcare professionals by 2030</div>
            </div>
          </div>
        </div>

        {/* SALARY LADDER */}
        <div className="mt-16 rounded-3xl border border-border bg-card p-8 shadow-card md:p-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Salary ladder</p>
              <h3 className="mt-2 text-2xl font-bold text-primary md:text-3xl">What Cura allied health graduates earn.</h3>
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

      {/* CAREER NETWORK */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Career network</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Cura Hospitals & 50+ partner hospitals — your future workplace.</h2>
              <p className="mt-3 text-white/80">Cura's career-readiness cell engages with hospital HR teams from your second year. By the time you graduate, you've sat for multiple interviews, attended 4+ skill-assessment camps and earned BLS / ACLS / radiation-safety certifications relevant to your stream.</p>
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

      {/* VISION & VOICE */}
      <section className="container mx-auto px-4 py-20 md:px-8">
        <SectionTitle align="center" eyebrow="Our vision" title="Building India's next generation of allied healthcare professionals." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { name: "Dr. Ramesh K", role: "Director, Cura Hospitals", quote: "India does not lack hospitals — it lacks trained technologists to run them. Cura Institutions is our answer: teach inside the wards, not away from them." },
            { name: "Meena Devi", role: "Parent of BSc Nursing aspirant", quote: "We are a small-town family. For my daughter, Cura means she can study in a real hospital from day one — not just read about it in books. That gives me confidence." },
            { name: "Prof. Venkatesh", role: "Head of Clinical Training", quote: "By 2030, India will need 65 lakh more allied health workers. Cura's mission is to produce 1,00,000 of them — competent, compassionate and career-ready." },
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
          <p className="mx-auto mt-3 max-w-xl text-white/80">Book a guided visit to the Hebbal campus and a working tour of Cura Hospitals — meet the faculty, see the labs, and walk through the actual hospital your child will train in.</p>
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
