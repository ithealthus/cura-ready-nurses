import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { PROGRAMS } from "@/lib/programs";
import { PageHero } from "@/routes/about";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "Programs — 8 RGUHS Allied Health Degrees | Cura Institutions" },
      { name: "description", content: "Eight RGUHS-affiliated degree programs in Nursing & Allied Health Sciences at Cura Institutions, Bangalore — BSc Nursing, MIT, AOTT, Cardiac Care, Radiotherapy, ETCT, MLT and BPT, with priority placement at Cura Hospitals." },
      { name: "keywords", content: "RGUHS programs, BSc Nursing, MIT, AOTT, Cardiac Care Technology, Radiotherapy, ETCT, MLT, BPT, allied health degrees Bangalore" },
      { property: "og:title", content: "Programs — Cura Institutions" },
      { property: "og:description", content: "Eight RGUHS degree programs with priority placement at Cura Hospitals." },
      { property: "og:url", content: "https://cura-ready-nurses.lovable.app/programs" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/197ee45f-b26a-406a-936e-908128003262/id-preview-2f589f4c--b05b5b72-9dae-418d-99ba-3b409e0806e5.lovable.app-1779775364484.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Programs — Cura Institutions" },
      { name: "twitter:description", content: "Eight RGUHS allied health degrees at Cura Institutions, Bangalore." },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/197ee45f-b26a-406a-936e-908128003262/id-preview-2f589f4c--b05b5b72-9dae-418d-99ba-3b409e0806e5.lovable.app-1779775364484.png" },
    ],
    links: [{ rel: "canonical", href: "https://cura-ready-nurses.lovable.app/programs" }],
  }),
  component: ProgramsIndex,
});

function ProgramsIndex() {
  return (
    <>
      <PageHero
        title="Our Programs"
        subtitle="Eight degree programs designed for India's healthcare workforce — every one built around real clinical exposure inside Cura Hospitals."
      />
      <section className="container mx-auto px-4 py-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p) => (
            <Link
              key={p.slug}
              to="/programs/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden rounded-2xl bg-card shadow-card transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-gold px-2.5 py-0.5 text-[11px] font-semibold text-gold-foreground">{p.short}</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary">{p.name}</h3>
                <p className="mt-1 text-sm text-secondary font-medium">{p.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.duration.split("(")[0].trim()}</span>
                  <span className="inline-flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" /> {p.eligibility.split("·")[0].trim()}</span>
                </div>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-secondary transition group-hover:gap-2">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
