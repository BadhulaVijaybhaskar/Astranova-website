import { office, officeAddress, officeMapsUrl } from "@/content/site";
import { MapPin } from "./Icons";

/** Small location line with pin icon; opens Google Maps in a new tab. */
export default function AddressLink({ className = "" }: { className?: string }) {
  return (
    <address className={`not-italic ${className}`}>
      <a
        href={officeMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${office.label}: ${officeAddress} (opens Google Maps in a new tab)`}
        className="group inline-flex items-start gap-2.5 text-[0.9rem] leading-relaxed text-slate-ink transition-colors duration-200 hover:text-electric"
      >
        <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy-900/10 bg-white/80 text-electric transition-transform duration-200 group-hover:-translate-y-0.5">
          <MapPin className="h-3.5 w-3.5" />
        </span>
        <span className="max-w-[22rem] text-pretty">{officeAddress}</span>
      </a>
    </address>
  );
}
