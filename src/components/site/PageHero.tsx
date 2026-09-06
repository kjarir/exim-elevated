import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  crumb,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumb: string;
}) {
  return (
    <section className="surface-deep relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
        )}
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] md:text-6xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/75">{description}</p>
        )}
        <nav className="mt-8 flex items-center gap-2 text-sm text-cream/65">
          <Link to="/" className="hover:text-accent">
            Home
          </Link>
          <ChevronRight className="size-4" />
          <span className="text-accent">{crumb}</span>
        </nav>
      </div>
    </section>
  );
}
