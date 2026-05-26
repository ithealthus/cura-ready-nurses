import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHero } from "@/routes/about";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Cura Institutions, Bangalore" },
      { name: "description", content: "Visit our Hebbal, Bangalore campus or speak with an admissions counsellor at Cura Institutions." },
      { property: "og:title", content: "Contact Cura Institutions" },
      { property: "og:description", content: "Visit our Hebbal campus or speak with an admissions counsellor." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const items = [
    { icon: MapPin, label: "Address", value: "16/1A, 12th Cross Rd, Kanaka Nagar, Hebbal, Bengaluru, Karnataka 560032" },
    { icon: Phone, label: "Phone", value: "+91 90197 30512", href: "tel:+919019730512" },
    { icon: Mail, label: "Email", value: "info@curainstitutions.com", href: "mailto:info@curainstitutions.com" },
    { icon: Clock, label: "Office Hours", value: "Mon–Sat · 9:00 AM – 6:00 PM" },
  ];

  return (
    <>
      <PageHero title="Get in Touch" subtitle="We'd love to meet you on campus. Book a visit, or request a callback from our admissions team." />

      <section className="container mx-auto grid gap-12 px-4 py-16 md:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-primary">Visit us in Hebbal, Bangalore</h2>
          <ul className="mt-6 space-y-5">
            {items.map((i) => (
              <li key={i.label} className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-teal-gradient text-secondary-foreground">
                  <i.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-secondary">{i.label}</div>
                  {i.href ? (
                    <a href={i.href} className="text-foreground hover:text-secondary">{i.value}</a>
                  ) : (
                    <div className="text-foreground/85">{i.value}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              title="Cura Institutions Bangalore map"
              src="https://www.google.com/maps?q=Cura+Institutions+Hebbal+Bangalore&output=embed"
              className="h-72 w-full"
              loading="lazy"
            />
          </div>
        </div>
        <EnquiryForm />
      </section>
    </>
  );
}
