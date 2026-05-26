import { createFileRoute } from "@tanstack/react-router";
import { Home, Utensils, Wifi, Dumbbell, Microscope, Heart } from "lucide-react";
import { PageHero } from "@/routes/about";
import { SectionTitle } from "@/components/site/SectionTitle";
import campusLife from "@/assets/campus-life.jpg";
import heroCampus from "@/assets/hero-campus.jpg";
import courseAott from "@/assets/course-aott.jpg";
import courseCardiac from "@/assets/course-cardiac.jpg";

export const Route = createFileRoute("/campus-life")({
  head: () => ({
    meta: [
      { title: "Campus Life — Cura Institutions, Bangalore" },
      { name: "description", content: "Modern campus, skill labs, hostels, dining and a vibrant student community at Cura Institutions, Hebbal, Bangalore." },
      { property: "og:title", content: "Campus Life — Cura Institutions" },
      { property: "og:description", content: "A vibrant student community on a hospital-integrated campus." },
      { property: "og:url", content: "/campus-life" },
    ],
    links: [{ rel: "canonical", href: "/campus-life" }],
  }),
  component: CampusLife,
});

function CampusLife() {
  const amenities = [
    { icon: Home, title: "Hostels", body: "Safe, supervised hostels for boys & girls within walking distance of campus." },
    { icon: Utensils, title: "Dining", body: "Hygienic, nutritious meals in a student-run mess and cafeteria." },
    { icon: Wifi, title: "Connected", body: "Campus-wide Wi-Fi, digital library and e-learning portals." },
    { icon: Dumbbell, title: "Sports & Wellness", body: "Indoor and outdoor sports, yoga and wellness programs." },
    { icon: Microscope, title: "Skill Labs", body: "Anatomy museum, simulation lab, OT mock-ups, cath-lab & imaging suites." },
    { icon: Heart, title: "Student Care", body: "Mentoring, counselling and 24×7 on-call medical support." },
  ];

  return (
    <>
      <PageHero
        title="Campus Life"
        subtitle="Modern infrastructure, a vibrant community, and a campus that lives and breathes healthcare."
      />

      <section className="container mx-auto grid items-center gap-12 px-4 py-16 md:px-8 lg:grid-cols-2">
        <img src={campusLife} alt="Cura students collaborating" loading="lazy" className="aspect-[5/4] w-full rounded-2xl object-cover shadow-soft" />
        <div>
          <SectionTitle eyebrow="Live the profession" title="A campus that mirrors a real hospital." />
          <p className="mt-4 text-foreground/80">
            From simulated wards to skill labs equipped with real anaesthesia machines, ECG units, LINAC trainers and imaging modalities — students train on the very equipment they'll use in their first job.
          </p>
          <p className="mt-4 text-foreground/80">
            Outside the labs, our students lead clubs in research, community health, cultural events and sports — building the soft skills every great clinician needs.
          </p>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle align="center" eyebrow="Amenities" title="Everything you need to focus on learning." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a) => (
              <div key={a.title} className="rounded-2xl bg-card p-6 shadow-card">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-teal-gradient text-secondary-foreground">
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-primary">{a.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:px-8">
        <SectionTitle align="center" eyebrow="Gallery" title="A glimpse of life at Cura." />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[heroCampus, courseAott, courseCardiac, campusLife, courseCardiac, heroCampus].map((src, i) => (
            <img key={i} src={src} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover shadow-card" />
          ))}
        </div>
      </section>
    </>
  );
}
