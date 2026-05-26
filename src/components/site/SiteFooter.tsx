import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/cura-logo.png";
import { PROGRAMS } from "@/lib/programs";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div>
          <img src={logo} alt="Cura Institutions" className="mb-4 h-14 w-auto bg-white/95 rounded-md p-2" />
          <p className="text-sm text-primary-foreground/80">
            RGUHS-affiliated college of nursing & allied health sciences. Powered by the Cura Hospitals network.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-2 hover:bg-secondary"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2 hover:bg-secondary"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="rounded-full bg-white/10 p-2 hover:bg-secondary"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/about", label: "About" },
              { to: "/programs", label: "Programs" },
              { to: "/admissions", label: "Admissions" },
              { to: "/campus-life", label: "Campus Life" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}><Link to={l.to} className="text-primary-foreground/80 hover:text-secondary">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">Programs</h4>
          <ul className="space-y-2 text-sm">
            {PROGRAMS.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <Link to="/programs/$slug" params={{ slug: p.slug }} className="text-primary-foreground/80 hover:text-secondary">
                  {p.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" /> 16/1A, 12th Cross Rd, Kanaka Nagar, Hebbal, Bengaluru 560032</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-secondary" /> <a href="tel:+919019730512" className="hover:text-secondary">+91 90197 30512</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-secondary" /> <a href="mailto:info@curainstitutions.com" className="hover:text-secondary">info@curainstitutions.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 text-center text-xs text-primary-foreground/60 md:px-8">
          © {new Date().getFullYear()} Cura Institutions, Bangalore. Affiliated to Rajiv Gandhi University of Health Sciences (RGUHS).
        </div>
      </div>
    </footer>
  );
}
