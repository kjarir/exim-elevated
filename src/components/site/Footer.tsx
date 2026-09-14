import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { categories, company } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#0c101c] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3">
            <svg
              className="size-9"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="32" fill="#0088cc" />
              <path
                d="M50 18C40 18 30 32 30 50C30 68 40 82 50 82C60 82 70 68 70 50C70 32 60 18 50 18Z"
                fill="#00aaee"
                opacity="0.8"
              />
              <path
                d="M20 42C28 42 72 42 80 42"
                stroke="#66ddff"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M20 58C28 58 72 58 80 58"
                stroke="#66ddff"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <ellipse
                cx="50"
                cy="50"
                rx="44"
                ry="18"
                transform="rotate(-28 50 50)"
                stroke="#f5b800"
                strokeWidth="4"
                fill="none"
              />
            </svg>
            <div>
              <span className="font-serif tracking-[0.2em] text-lg font-bold text-white uppercase block leading-none">
                Horizon
              </span>
              <span className="font-sans tracking-[0.4em] text-[0.65rem] font-bold text-[#f5b800] uppercase block mt-1 leading-none">
                Exim
              </span>
            </div>
          </div>

          <p className="mt-5 text-xs sm:text-sm leading-relaxed text-white/70">
            We provide seamless global shipping, customs clearance, and freight forwarding services.
            With a trusted network of international logistics partners, we make cross-border trade
            simple, secure, and cost-efficient.
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
                className="grid size-9 place-items-center rounded-md border border-white/20 text-white/80 transition-colors hover:border-[#f5b800] hover:text-[#f5b800]"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5b800]">
            Export Products
          </h4>
          <ul className="mt-5 grid gap-2.5 text-xs sm:text-sm text-white/70">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to={c.route} className="transition-colors hover:text-white">
                  {c.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5b800]">
            Quick Links
          </h4>
          <ul className="mt-5 grid gap-2.5 text-xs sm:text-sm text-white/70">
            <li>
              <Link to="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition-colors hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" className="transition-colors hover:text-white">
                All Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5b800]">
            Contact Us
          </h4>
          <ul className="mt-5 grid gap-4 text-xs sm:text-sm text-white/70">
            <li>
              <a
                href={company.phoneHref}
                className="inline-flex items-start gap-3 transition-colors hover:text-white"
              >
                <Phone className="mt-0.5 size-4 shrink-0 text-[#f5b800]" />
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-start gap-3 transition-colors hover:text-white"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-[#f5b800]" />
                {company.email}
              </a>
            </li>
            <li>
              <a
                href={company.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-start gap-3 leading-relaxed transition-colors hover:text-white"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#f5b800]" />
                {company.address}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Horizon Exim. All rights reserved.</p>
          <p>Founded by {company.founder} · Exporting since 2018</p>
        </div>
      </div>
    </footer>
  );
}
