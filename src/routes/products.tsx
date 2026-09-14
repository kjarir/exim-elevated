import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, ArrowRight, Sparkles, Filter, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { categories, type Category } from "@/data/site";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Export Products Portfolio | Horizon Exim India" },
      {
        name: "description",
        content:
          "Explore Horizon Exim's full agri-export portfolio: Onions, fresh fruits, vegetables, Indian spices, IQF frozen items, confectionery, rice, flour, salt, and makhana.",
      },
    ],
  }),
});

function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCategories = categories.filter((cat) => {
    if (selectedCategory !== "all" && cat.slug !== selectedCategory) {
      return false;
    }
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    const matchesTitle = cat.title.toLowerCase().includes(query);
    const matchesBlurb = cat.blurb.toLowerCase().includes(query);
    const matchesItems = cat.items.some((item) => item.name.toLowerCase().includes(query));

    return matchesTitle || matchesBlurb || matchesItems;
  });

  const totalVarieties = categories.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <div>
      <PageHero
        eyebrow="Export Portfolio"
        title="Complete Agri-Commodity Product Range"
        description="Premium agricultural products harvested, sorted, and packed to international export standards. Explore our 10 major categories and 40+ specific varieties."
        crumb="Products"
      />

      {/* Filter and Search Bar */}
      <section className="border-b border-border/80 bg-background/90 py-6 sticky top-[73px] z-30 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search varieties, spices, grains..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-card"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              All Categories ({categories.length})
            </button>
            {categories.map((c) => (
              <button
                key={c.slug}
                type="button"
                onClick={() => setSelectedCategory(c.slug)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === c.slug
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {c.short}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Categories & Products Grid */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {filteredCategories.length === 0 ? (
          <div className="py-20 text-center">
            <Filter className="mx-auto size-12 text-muted-foreground/50" />
            <h3 className="mt-4 font-display text-xl font-semibold">No products found</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Try adjusting your search terms or select another category.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 inline-flex text-xs font-semibold text-primary underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="space-y-16">
            {filteredCategories.map((category) => (
              <div
                key={category.slug}
                className="rounded-2xl border border-border/80 bg-card p-6 md:p-8 shadow-sm"
              >
                <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-4">
                    <div className="relative aspect-16/10 overflow-hidden rounded-xl border border-border bg-muted">
                      <img
                        src={category.cover}
                        alt={category.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="eyebrow">Category {category.slug.toUpperCase()}</span>
                        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                          {category.items.length} varieties
                        </span>
                      </div>
                      <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-foreground">
                        {category.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {category.blurb}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {category.intro.highlights.slice(0, 2).map((h, i) => (
                          <div
                            key={i}
                            className="inline-flex items-center gap-1.5 rounded-md bg-secondary/80 px-2.5 py-1 text-xs text-foreground/80"
                          >
                            <CheckCircle2 className="size-3 text-leaf" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-4 pt-4 border-t border-border/60">
                      <Link
                        to={category.route}
                        className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                      >
                        Explore {category.short} Range <ArrowRight className="size-3.5" />
                      </Link>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/80 hover:text-primary transition-colors"
                      >
                        Request Quote for this Category →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Sub-items preview grid */}
                <div className="mt-6 pt-6 border-t border-border/60">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    Featured Varieties in {category.title}
                  </h4>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {category.items.map((item) => (
                      <Link
                        key={item.name}
                        to={category.route}
                        className="group flex flex-col overflow-hidden rounded-lg border border-border/60 bg-secondary/30 p-2 text-center transition-all hover:border-primary/50 hover:bg-secondary/60"
                      >
                        <div className="aspect-square overflow-hidden rounded-md bg-muted">
                          <img
                            src={item.image}
                            alt={item.name}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        <span className="mt-2 line-clamp-1 text-xs font-semibold text-foreground group-hover:text-primary">
                          {item.name}
                        </span>
                        {item.note && (
                          <span className="mt-0.5 line-clamp-1 text-[0.65rem] text-muted-foreground">
                            {item.note}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Global RFQ Banner */}
      <section className="surface-deep py-16 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
            Custom Inquiries & Sourcing
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-cream md:text-4xl">
            Looking for a Specific Agri-Commodity Specification?
          </h2>
          <p className="mt-4 text-sm text-cream/75 leading-relaxed">
            If you need a specialized grade, specific mesh size, moisture parameter, or private
            labelling solution not listed here, our Ahmedabad export desk will source it directly.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Submit Custom Export RFQ <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
