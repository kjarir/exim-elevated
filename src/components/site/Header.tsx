import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { categories, company } from "@/data/site";
import { cn } from "@/lib/utils";

const mainLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-primary text-primary-foreground/85 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-xs">
          <p className="tracking-wide">{company.tagline} · Ahmedabad, India</p>
          <div className="flex items-center gap-6">
            <a className="inline-flex items-center gap-2 hover:text-accent" href={company.phoneHref}>
              <Phone className="size-3.5" /> {company.phone}
            </a>
            <a
              className="inline-flex items-center gap-2 hover:text-accent"
              href={`mailto:${company.email}`}
            >
              <Mail className="size-3.5" /> {company.email}
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "border-b border-border/70 transition-all duration-300",
          scrolled ? "bg-background/90 backdrop-blur-xl shadow-sm" : "bg-background",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5">
          <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid size-11 place-items-center rounded-md bg-primary font-display text-lg font-semibold text-primary-foreground">
              HE
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold text-foreground">
                Horizon Exim
              </span>
              <span className="block text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground">
                Global Agri Exports
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {mainLinks.map((l) =>
              l.label === "Products" ? (
                <div key={l.to} className="group relative">
                  <Link
                    to={l.to}
                    className="inline-flex items-center gap-1 rounded-md px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
                    activeProps={{ className: "text-primary" }}
                  >
                    Products <ChevronDown className="size-4" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-popover p-3 shadow-xl">
                      {categories.map((c) => (
                        <Link
                          key={c.slug}
                          to={c.route}
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-secondary"
                        >
                          <img
                            src={c.cover}
                            alt=""
                            loading="lazy"
                            className="size-9 rounded-md object-cover"
                          />
                          <span className="font-medium">{c.short}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  className="rounded-md px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Get a Quote
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-md border border-border lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[73px] z-40 overflow-y-auto bg-background px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-1">
            {mainLinks
              .filter((l) => l.label !== "Products")
              .map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-semibold"
                  activeProps={{ className: "bg-secondary text-primary" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
            <button
              type="button"
              onClick={() => setProductsOpen((v) => !v)}
              className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-semibold"
            >
              Products
              <ChevronDown
                className={cn("size-5 transition-transform", productsOpen && "rotate-180")}
              />
            </button>
            {productsOpen && (
              <div className="ml-3 flex flex-col border-l border-border pl-3">
                <Link
                  to="/products"
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm font-medium text-muted-foreground"
                >
                  All Products
                </Link>
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    to={c.route}
                    onClick={() => setOpen(false)}
                    className="py-2.5 text-sm font-medium text-muted-foreground"
                  >
                    {c.short}
                  </Link>
                ))}
              </div>
            )}
            <a
              href={company.phoneHref}
              className="mt-4 rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Call {company.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
