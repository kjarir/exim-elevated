import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { categories, company } from "@/data/site";

export function Footer() {
  return (
    <footer className="surface-deep mt-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-md bg-accent font-display text-lg font-semibold text-accent-foreground">
              HE
            </span>
            <span className="font-display text-xl font-semibold">Horizon Exim</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-cream/75">
            We provide seamless global shipping, customs clearance and freight forwarding. With a
            trusted network of international logistics partners, we make cross-border trade simple,
            secure and cost-efficient.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { href: company.social.facebook, Icon: Facebook, label: "Facebook" },
              { href: company.social.instagram, Icon: Instagram, label: "Instagram" },
              { href: company.social.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: company.social.youtube, Icon: Youtube, label: "YouTube" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center rounded-md border border-cream/20 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Products</h4>
          <ul className="mt-5 grid gap-2.5 text-sm text-cream/75">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to={c.route} className="transition-colors hover:text-accent">
                  {c.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Company</h4>
          <ul className="mt-5 grid gap-2.5 text-sm text-cream/75">
            <li>
              <Link to="/" className="transition-colors hover:text-accent">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition-colors hover:text-accent">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" className="transition-colors hover:text-accent">
                All Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-accent">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Contact Us
          </h4>
          <ul className="mt-5 grid gap-4 text-sm text-cream/75">
            <li>
              <a
                href={company.phoneHref}
                className="inline-flex items-start gap-3 transition-colors hover:text-accent"
              >
                <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-start gap-3 transition-colors hover:text-accent"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
                {company.email}
              </a>
            </li>
            <li>
              <a
                href={company.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-start gap-3 leading-relaxed transition-colors hover:text-accent"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                {company.address}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-cream/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Horizon Exim. All rights reserved.</p>
          <p>Founded by {company.founder} · Exporting since 2018</p>
        </div>
      </div>
    </footer>
  );
}
