import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Briefcase, BookOpen, Award } from "lucide-react";
import { getProgram, PROGRAMS } from "@/lib/programs";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/site/SectionTitle";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const program = getProgram(params.slug);
    if (!program) throw notFound();
    return { program };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.program;
    return {
      meta: [
        { title: p ? `${p.name} — Cura Institutions` : "Program — Cura Institutions" },
        { name: "description", content: p ? `${p.tagline} ${p.about}` : "RGUHS-affiliated healthcare degree program." },
        { property: "og:title", content: p ? `${p.name} — Cura Institutions` : "Program" },
        { property: "og:description", content: p?.tagline ?? "" },
        { property: "og:url", content: p ? `/programs/${p.slug}` : "/programs" },
      ],
      links: p ? [{ rel: "canonical", href: `/programs/${p.slug}` }] : [],
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
  const { program: p } = Route.useLoaderData();

  return (
    <>
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
              <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                <div className="text-xs uppercase tracking-wider text-white/70">Duration</div>
                <div className="mt-1 text-sm font-semibold">{p.duration}</div>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                <div className="text-xs uppercase tracking-wider text-white/70">Eligibility</div>
                <div className="mt-1 text-sm font-semibold">{p.eligibility}</div>
              </div>
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
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <Block icon={Award} title="Cura Advantage">
              <ul className="grid gap-3 sm:grid-cols-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-foreground/80"><CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" /> {h}</li>
                ))}
              </ul>
            </Block>
            <Block icon={BookOpen} title="What You'll Study">
              <ul className="space-y-2.5">
                {p.curriculum.map((c) => (
                  <li key={c} className="flex gap-2 text-sm text-foreground/80"><CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" /> {c}</li>
                ))}
              </ul>
            </Block>
            <Block icon={Briefcase} title="Career Paths">
              <div className="grid gap-3 sm:grid-cols-2">
                {p.careers.map((c) => (
                  <div key={c} className="rounded-xl border border-border bg-card p-4 text-sm">
                    {c}
                  </div>
                ))}
              </div>
            </Block>
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <EnquiryForm compact />
          </aside>
        </div>
      </section>

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
