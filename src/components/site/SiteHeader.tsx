import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/cura-logo.png";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/admissions", label: "Admissions" },
  { to: "/campus-life", label: "Campus Life" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Cura Institutions Bangalore" className="h-12 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-secondary" }}
              className="px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-secondary"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+919019730512" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-secondary">
            <Phone className="h-4 w-4" /> +91 90197 30512
          </a>
          <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link to="/admissions">Apply Now</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-secondary" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent"
              >
                {n.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link to="/admissions" onClick={() => setOpen(false)}>Apply Now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
