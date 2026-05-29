import { Phone, MessageCircle } from "lucide-react";

export const PHONE = "+91 90197 30512";
export const PHONE_TEL = "tel:+919019730512";
export const WHATSAPP = "https://wa.me/919019730512?text=Hi%20Cura%2C%20I%27d%20like%20info%20on%20BSc%20Nursing%20admission.";

export function LandingStickyCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 divide-x divide-border">
        <a href={PHONE_TEL} className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-primary">
          <Phone className="h-4 w-4" /> Call
        </a>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-secondary">
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
        <a href="/apply" className="flex items-center justify-center bg-gold py-3 text-sm font-semibold text-gold-foreground">
          Apply Now
        </a>
      </div>
    </div>
  );
}

export function LandingCTAButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a href="/apply" className="inline-flex items-center justify-center rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow hover:bg-gold/90">
        Apply Now
      </a>
      <a href="#callback" className="inline-flex items-center justify-center rounded-md bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground shadow hover:bg-secondary/90">
        Request a Callback
      </a>
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20">
        <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
      </a>
      <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20">
        <Phone className="h-4 w-4" /> {PHONE}
      </a>
    </div>
  );
}
