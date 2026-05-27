import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Briefcase, BookOpen, Award, TrendingUp, MapPin, MessageCircleQuestion, Wallet, Building2, Sparkles } from "lucide-react";
import { getProgram, PROGRAMS, type Program } from "@/lib/programs";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/site/SectionTitle";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const program = getProgram(params.slug);
    if (!program) throw notFound();
    return { program };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.program;
    const SITE = "https://cura-ready-nurses.lovable.app";
    const url = p ? `${SITE}/programs/${p.slug}` : `${SITE}/programs`;
    const title = p ? `${p.name} — RGUHS Degree | Cura Institutions` : "Program — Cura Institutions";
    const desc = p ? `${p.tagline} ${p.about}`.slice(0, 155) : "RGUHS-affiliated healthcare degree at Cura Institutions, Bangalore.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "keywords", content: p ? `${p.name}, ${p.short}, RGUHS, Cura Institutions, allied health Bangalore, ${p.short} course Bangalore` : "RGUHS programs, Cura Institutions" },
        { property: "og:title", content: title },
        { property: "og:description", content: p?.tagline ?? desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "og:image", content: p?.image ?? "" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: p?.tagline ?? desc },
        { name: "twitter:image", content: p?.image ?? "" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ProgramDetail,
  notFoundComponent: () => (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-bold text-primary">Program not found</h1>
      <Link to="/programs" className="mt-4 inline-flex text-secondary">← View all programs</Link>
    </div>
  ),
});

function ProgramDetail() {
  const { program: p } = Route.useLoaderData() as { program: Program };

  return (
    <>
      {/* HERO */}
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto grid gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <Link to="/programs" className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white">
              <ArrowLeft className="h-4 w-4" /> All programs
            </Link>
            <span className="mt-4 inline-flex rounded-full bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground">{p.short}</span>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">{p.name}</h1>
            <p className="mt-3 text-lg text-gold">{p.tagline}</p>
            <p className="mt-5 max-w-2xl text-white/85">{p.about}</p>
            <div className="mt-7 grid max-w-xl gap-3 sm:grid-cols-2">
              <Stat label="Duration" value={p.duration} />
              <Stat label="Eligibility" value={p.eligibility} />
              <Stat label="Starting Salary" value={p.startingSalary} />
              <Stat label="Experienced" value={p.experiencedSalary} />
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90">
                <Link to="/admissions">Apply for {p.short}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                <Link to="/contact">Book Campus Visit</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img src={p.image} alt={p.name} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft" />
            {p.internationalSalary && (
              <div className="absolute -bottom-5 -left-5 hidden rounded-xl bg-gold p-4 text-gold-foreground shadow-soft md:block">
                <div className="text-[11px] font-semibold uppercase tracking-wider">International scope</div>
                <div className="mt-0.5 text-sm font-bold">{p.internationalSalary}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* MAIN BODY */}
      <section className="container mx-auto px-4 py-16 md:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-14">
            <Block icon={Sparkles} title="The Cura Advantage">
              <ul className="grid gap-3 sm:grid-cols-2">
                {p.whyCura.map((h) => (
                  <li key={h} className="flex gap-2 rounded-xl border border-border bg-card p-4 text-sm text-foreground/80">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" /> {h}
                  </li>
                ))}
              </ul>
            </Block>

            <Block icon={BookOpen} title="Curriculum & Structure">
              <ul className="space-y-2.5">
                {p.curriculum.map((c) => (
                  <li key={c} className="flex gap-2 text-sm text-foreground/80"><CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" /> {c}</li>
                ))}
              </ul>
            </Block>

            <Block icon={Award} title="What you'll be known for">
              <ul className="grid gap-3 sm:grid-cols-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-foreground/80"><CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" /> {h}</li>
                ))}
              </ul>
            </Block>

            <Block icon={Briefcase} title="Job Roles & Career Paths">
              <div className="grid gap-3 sm:grid-cols-2">
                {p.jobRoles.map((c) => (
                  <div key={c} className="rounded-xl border border-border bg-card p-4 text-sm">{c}</div>
                ))}
              </div>
            </Block>

            <Block icon={TrendingUp} title="Market Opportunity">
              <p className="mb-4 rounded-xl bg-secondary/10 p-4 text-sm text-foreground/80">
                <strong className="text-primary">Healthcare is recession-proof.</strong> Hospitals do not shut down — they expand. Every Tier-2 and Tier-3 city in India is adding new beds, and trained {p.short} professionals are in short supply everywhere.
              </p>
              <ul className="space-y-2.5">
                {p.marketStats.map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-foreground/80"><TrendingUp className="h-5 w-5 shrink-0 text-secondary" /> {s}</li>
                ))}
              </ul>
            </Block>

            <Block icon={MapPin} title="Real career scenarios">
              <div className="grid gap-4 md:grid-cols-3">
                {p.scenarios.map((s) => (
                  <div key={s.title} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <div className="text-xs font-semibold uppercase tracking-wider text-secondary">{s.title}</div>
                    <p className="mt-2 text-sm text-foreground/80">{s.story}</p>
                  </div>
                ))}
              </div>
            </Block>

            <Block icon={Building2} title="Top recruiters">
              <div className="grid gap-3 sm:grid-cols-2">
                {p.topRecruiters.map((r) => (
                  <div key={r} className="rounded-xl border border-border bg-surface p-4 text-sm text-foreground/80">{r}</div>
                ))}
              </div>
            </Block>

            <Block icon={Wallet} title="Fees & Scholarships">
              <div className="overflow-hidden rounded-xl border border-border">
                <table className="w-full text-sm">
                  <tbody>
                    {p.fees.map((f, i) => (
                      <tr key={f.label} className={i % 2 ? "bg-surface" : "bg-card"}>
                        <td className="px-4 py-3 font-medium text-primary">{f.label}</td>
                        <td className="px-4 py-3 text-foreground/80">{f.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">Indicative ranges. Final fee structure confirmed at the time of admission.</p>
            </Block>

            <Block icon={MessageCircleQuestion} title="Common questions parents ask">
              <Accordion type="single" collapsible className="rounded-xl border border-border bg-card px-4">
                {p.objections.map((qa, i) => (
                  <AccordionItem key={i} value={`q-${i}`}>
                    <AccordionTrigger className="text-left text-sm font-semibold text-primary">{qa.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-foreground/80">{qa.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Block>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start space-y-6">
            <EnquiryForm compact />
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="text-xs font-semibold uppercase tracking-wider text-secondary">Career outlook</div>
              <h3 className="mt-2 text-lg font-bold text-primary">{p.short} at a glance</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <Row k="Duration" v={p.duration} />
                <Row k="Eligibility" v={p.eligibility} />
                <Row k="Starting" v={p.startingSalary} />
                <Row k="Experienced" v={p.experiencedSalary} />
                {p.internationalSalary && <Row k="International" v={p.internationalSalary} />}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* OTHER PROGRAMS */}
      <section className="bg-surface py-16">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle eyebrow="Other programs" title="Explore similar healthcare careers." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMS.filter((x) => x.slug !== p.slug).slice(0, 4).map((o) => (
              <Link key={o.slug} to="/programs/$slug" params={{ slug: o.slug }} className="group overflow-hidden rounded-2xl bg-card shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                <img src={o.image} alt={o.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="p-4">
                  <div className="text-xs font-semibold text-secondary">{o.short}</div>
                  <div className="mt-1 text-sm font-semibold text-primary">{o.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/15 bg-white/5 p-4">
      <div className="text-xs uppercase tracking-wider text-white/70">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-muted-foreground">{k}</dt>
      <dd className="mt-0.5 text-sm font-medium text-foreground">{v}</dd>
    </div>
  );
}

function Block({ icon: Icon, title, children }: { icon: typeof Award; title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-teal-gradient text-secondary-foreground">
          <Icon className="h-5 w-5" />
        </div>
        <h2 className="text-2xl font-bold text-primary">{title}</h2>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}
