import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Heart, Target, ShieldCheck } from "lucide-react";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Button } from "@/components/ui/button";
import campusLife from "@/assets/campus-life.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Cura Institutions — RGUHS Allied Health College in Bangalore" },
      { name: "description", content: "Cura Institutions is an RGUHS-affiliated nursing & allied health sciences college in Hebbal, Bangalore, backed by the Cura Hospitals network. Our vision: train 1,00,000 Allied Healthcare Professionals by 2030." },
      { name: "keywords", content: "about Cura Institutions, RGUHS college Bangalore, allied health college Hebbal, Cura Hospitals, nursing college Bangalore" },
      { property: "og:title", content: "About Cura Institutions — Built Inside a Hospital" },
      { property: "og:description", content: "RGUHS college in Hebbal, Bangalore, backed by the Cura Hospitals network. Training 1,00,000 allied healthcare professionals by 2030." },
      { property: "og:url", content: "https://cura-ready-nurses.lovable.app/about" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/197ee45f-b26a-406a-936e-908128003262/id-preview-2f589f4c--b05b5b72-9dae-418d-99ba-3b409e0806e5.lovable.app-1779775364484.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Cura Institutions" },
      { name: "twitter:description", content: "RGUHS allied health college in Hebbal, Bangalore, backed by Cura Hospitals." },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/197ee45f-b26a-406a-936e-908128003262/id-preview-2f589f4c--b05b5b72-9dae-418d-99ba-3b409e0806e5.lovable.app-1779775364484.png" },
    ],
    links: [{ rel: "canonical", href: "https://cura-ready-nurses.lovable.app/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        title="About Cura Institutions"
        subtitle="A healthcare college built from inside a hospital — not a college that added a hospital later."
      />

      <section className="container mx-auto grid items-center gap-12 px-4 py-16 md:px-8 lg:grid-cols-2">
        <div>
          <SectionTitle eyebrow="Our story" title="Born from a hospital. Built for healthcare." />
          <div className="mt-5 space-y-4 text-foreground/80">
            <p>Cura Institutions was founded with a single conviction — India's hospitals are short on trained allied-health professionals, and the only way to fix that is to teach inside the wards, OTs and cath-labs where they will eventually work.</p>
            <p>Powered by the Cura Hospitals network and affiliated to <strong>Rajiv Gandhi University of Health Sciences (RGUHS)</strong>, our Hebbal, Bangalore campus runs eight degree programs that combine classroom rigour with real clinical exposure from semester one.</p>
            <p>It is <strong>Cura's vision to train 1,00,000 Allied Healthcare Professionals by 2030</strong> — transforming India's healthcare workforce from the ground up.</p>
          </div>
        </div>
        <img src={campusLife} alt="Cura Institutions students" loading="lazy" className="aspect-[5/4] w-full rounded-2xl object-cover shadow-soft" />
      </section>

      <section className="bg-surface py-16">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-3 md:px-8">
          {[
            { icon: Target, title: "Mission", body: "Train clinically-confident, compassionate healthcare professionals India can depend on." },
            { icon: Heart, title: "Vision", body: "Cura's vision is to train 1,00,000 Allied Healthcare Professionals by 2030 — transforming India's healthcare workforce from the ground up." },
            { icon: ShieldCheck, title: "Values", body: "Patient-first ethics, academic integrity, lifelong learning, and dignity in care." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl bg-card p-7 shadow-card">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-gradient text-secondary-foreground">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 md:px-8">
        <SectionTitle align="center" eyebrow="What sets us apart" title="The Cura difference." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "RGUHS-affiliated", b: "Recognised degrees that travel across India and abroad." },
            { t: "Hospital-integrated", b: "Clinical training inside Cura Hospitals from year one." },
            { t: "Career-readiness support", b: "Structured internships, interview prep & 50+ partner hospital network." },
            { t: "Industry faculty", b: "Senior consultants, anaesthetists and chief nurses." },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <GraduationCap className="h-7 w-7 text-secondary" />
              <h3 className="mt-3 font-semibold text-primary">{x.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{x.b}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link to="/programs">See our programs</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4 py-16 md:px-8 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Cura Institutions</p>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-white/85">{subtitle}</p>}
      </div>
    </section>
  );
}
