import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X, Globe } from "lucide-react";
import { categories, company } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header({ isTransparent = false }: { isTransparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0c101c]/95 backdrop-blur-md shadow-lg py-3"
          : isTransparent
            ? "bg-transparent py-4"
            : "bg-[#0c101c] py-4",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Horizon Exim Logo matching the screenshot */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center">
            {/* Logo Globe Icon with yellow orbit ring */}
            <svg
              className="size-10 md:size-11"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Cyan/Blue Globe */}
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
              {/* Yellow Sweeping Orbital Ring */}
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
              {/* Arrow Heads on orbit ring */}
              <polygon points="12,30 20,24 16,35" fill="#f5b800" />
              <polygon points="88,70 80,76 84,65" fill="#f5b800" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-serif tracking-[0.22em] text-lg md:text-xl font-bold text-white uppercase leading-none">
              Horizon
            </span>
            <span className="font-sans tracking-[0.45em] text-[0.65rem] md:text-[0.7rem] font-bold text-[#f5b800] uppercase mt-1 leading-none">
              Exim
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-7 lg:flex">
          <Link
            to="/about"
            className="text-xs font-bold uppercase tracking-wider text-white/90 transition-colors hover:text-[#f5b800]"
          >
            About
          </Link>

          {/* Products Dropdown */}
          <div className="relative group">
            <Link
              to="/products"
              className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white/90 transition-colors hover:text-[#f5b800]"
            >
              Products{" "}
              <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
            </Link>

            {/* Dropdown Menu */}
            <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="rounded-xl border border-white/10 bg-[#0e131f] p-2 shadow-2xl backdrop-blur-xl">
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    to={c.route}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-semibold text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <img src={c.cover} alt="" className="size-6 rounded-full object-cover" />
                    <span>{c.short}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/about"
            className="text-xs font-bold uppercase tracking-wider text-white/90 transition-colors hover:text-[#f5b800]"
          >
            Certificate
          </Link>

          <Link
            to="/products"
            className="text-xs font-bold uppercase tracking-wider text-white/90 transition-colors hover:text-[#f5b800]"
          >
            Gallery
          </Link>

          <Link
            to="/about"
            className="text-xs font-bold uppercase tracking-wider text-white/90 transition-colors hover:text-[#f5b800]"
          >
            Blog
          </Link>

          <Link
            to="/contact"
            className="text-xs font-bold uppercase tracking-wider text-white/90 transition-colors hover:text-[#f5b800]"
          >
            Contact
          </Link>
        </nav>

        {/* Right Tools (Select Language, Brochure, Menu) */}
        <div className="flex items-center gap-3">
          {/* Google Translate Styled Widget */}
          <div className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-white/30 bg-white/10 px-2.5 py-1.5 text-[0.72rem] font-medium text-white backdrop-blur-sm">
            <span className="font-bold text-[#4285F4]">G</span>
            <span>Select Language</span>
            <span className="text-white/60 text-[0.65rem]">▼</span>
          </div>

          {/* Brochure Button */}
          <a
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-full border border-white/40 bg-transparent px-5 py-1.5 text-xs font-semibold text-white transition-all hover:bg-white/15"
          >
            Brochure
          </a>

          {/* Hamburger Mobile Menu Toggle */}
          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col justify-center items-center gap-1.5 size-9 rounded-md border border-white/30 p-1 text-white lg:hidden hover:bg-white/10"
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <>
                <span className="w-5 h-0.5 bg-white rounded-full"></span>
                <span className="w-5 h-0.5 bg-white rounded-full"></span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[60px] bottom-0 z-40 overflow-y-auto bg-[#0c101c] px-6 py-6 lg:hidden border-t border-white/10">
          <nav className="flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 text-sm font-bold uppercase tracking-wider text-white border-b border-white/10"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 text-sm font-bold uppercase tracking-wider text-white border-b border-white/10"
            >
              About
            </Link>
            <div>
              <button
                type="button"
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex w-full items-center justify-between py-3 text-sm font-bold uppercase tracking-wider text-white border-b border-white/10"
              >
                <span>Products</span>
                <ChevronDown
                  className={cn("size-4 transition-transform", productsOpen && "rotate-180")}
                />
              </button>
              {productsOpen && (
                <div className="pl-4 py-2 flex flex-col gap-2 bg-white/5 rounded-lg my-2">
                  <Link
                    to="/products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1 text-xs font-semibold text-white/90"
                  >
                    All Products
                  </Link>
                  {categories.map((c) => (
                    <Link
                      key={c.slug}
                      to={c.route}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-1 text-xs text-white/70 hover:text-white"
                    >
                      {c.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 text-sm font-bold uppercase tracking-wider text-white border-b border-white/10"
            >
              Certificate
            </Link>
            <Link
              to="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 text-sm font-bold uppercase tracking-wider text-white border-b border-white/10"
            >
              Gallery
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 text-sm font-bold uppercase tracking-wider text-white border-b border-white/10"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 text-sm font-bold uppercase tracking-wider text-white border-b border-white/10"
            >
              Contact
            </Link>

            <a
              href={company.phoneHref}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#1b4b9b] px-6 py-3 text-sm font-semibold text-white"
            >
              Call {company.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
