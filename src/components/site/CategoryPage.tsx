import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  Package,
  Globe2,
  ArrowRight,
  Send,
  PhoneCall,
  Sparkles,
  ShieldCheck,
  Check,
} from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";
import { categories, company, type Category } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function CategoryPage({ category }: { category: Category }) {
  const [inquiryProduct, setInquiryProduct] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    destinationPort: "",
    estimatedQuantity: "",
    packagingPref: "Standard Export Packaging",
    message: "",
  });

  const otherCategories = categories.filter((c) => c.slug !== category.slug);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please fill in your name and email address.");
      return;
    }

    setFormSubmitted(true);
    toast.success("Quote Request Sent!", {
      description: `Thank you, ${formData.name}. Our export team will send FOB/CIF pricing for ${inquiryProduct || category.title} to ${formData.email} within 24 hours.`,
    });
  };

  return (
    <div>
      <PageHero
        eyebrow="Export Category"
        title={category.title}
        description={category.blurb}
        crumb={category.short}
      />

      {/* Category Intro Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow">
              <Sparkles className="size-3.5" /> Market Overview & Capability
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {category.intro.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {category.intro.body}
            </p>

            <div className="mt-8 rounded-xl border border-border/80 bg-secondary/50 p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Export Highlights & Quality Parameters
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {category.intro.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-leaf" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-lg border border-accent/30 bg-accent/10 p-4">
              <Globe2 className="mt-0.5 size-5 shrink-0 text-accent" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-accent-foreground">
                  Trade Opportunity & Global Demand
                </p>
                <p className="mt-1 text-sm text-foreground/80">{category.intro.opportunities}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-xl">
              <img
                src={category.cover}
                alt={category.title}
                className="h-80 w-full rounded-xl object-cover md:h-96"
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Origin Country
                    </span>
                    <p className="font-semibold text-foreground">India (Direct Farm Sourcing)</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Port of Dispatch
                    </span>
                    <p className="font-semibold text-foreground">Mundra / Nhava Sheva / Pipavav</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Products Catalog in this Category */}
      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">Available Varieties</span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {category.title} Range & Specifications
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                All products can be packaged and graded according to buyer specifications.
              </p>
            </div>
            <a
              href="#quote-section"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Request Custom Bulk Quotation <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {category.items.map((item, idx) => (
              <Reveal
                key={item.name}
                delay={idx * 80}
                className="group flex flex-col overflow-hidden rounded-xl border border-border/80 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary">
                      {item.name}
                    </h3>
                    {item.note && (
                      <p className="mt-1.5 inline-block rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-foreground/80">
                        {item.note}
                      </p>
                    )}
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Export Grade</span>
                    <button
                      type="button"
                      onClick={() => {
                        setInquiryProduct(item.name);
                        const el = document.getElementById("quote-section");
                        el?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                      Inquire <ArrowRight className="size-3.5" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging & Quality Assurance Standards */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <Package className="size-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
              Custom Packaging Options
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Corrugated boxes, jute bags, PP bags, mesh bags, vacuum packs, nitrogen flushed
              pouches or private label retail containers as per your country's retail regulations.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <ShieldCheck className="size-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
              Certificates & Lab Reports
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Complete documentation including Certificate of Origin, Phytosanitary, Fumigation,
              SGS/Geo-Chem inspection reports, FSSAI compliance, and health certificates.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <Globe2 className="size-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
              Fast Reefer / Dry Logistics
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Temperature-controlled reefer containers (-18°C or +4°C to +8°C with data loggers) and
              dry container slots booked with premier shipping lines worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Request for Quote Section */}
      <section id="quote-section" className="surface-deep relative py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
                Direct Inquiry
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-cream md:text-4xl">
                Get a Quote for {inquiryProduct || category.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-cream/80">
                Share your grade requirements, quantity, and destination port. Our export desk will
                respond with FOB / CIF pricing and container loading plans within 24 hours.
              </p>

              <div className="mt-8 space-y-4 text-sm text-cream/90">
                <div className="flex items-center gap-3">
                  <div className="grid size-8 place-items-center rounded-full bg-accent/20 text-accent">
                    <Check className="size-4" />
                  </div>
                  <span>FOB, CIF, CFR, and DAP delivery terms available</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="grid size-8 place-items-center rounded-full bg-accent/20 text-accent">
                    <Check className="size-4" />
                  </div>
                  <span>Direct phone / WhatsApp line with export managers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="grid size-8 place-items-center rounded-full bg-accent/20 text-accent">
                    <Check className="size-4" />
                  </div>
                  <span>Pre-shipment sample dispatch via DHL / FedEx</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-cream/15 flex flex-wrap items-center gap-4">
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-xs font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  <PhoneCall className="size-4" /> Call {company.phone}
                </a>
                <span className="text-xs text-cream/60">or submit the form</span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-cream/20 bg-card/95 p-6 text-card-foreground shadow-2xl backdrop-blur-md md:p-8">
                {formSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto grid size-16 place-items-center rounded-full bg-primary/10 text-primary">
                      <CheckCircle2 className="size-8" />
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-bold">Request Received!</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Thank you for inquiring about {inquiryProduct || category.title}. Our team
                      will get in touch with you shortly at{" "}
                      <span className="font-semibold text-foreground">{formData.email}</span>.
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      className="mt-6"
                      onClick={() => setFormSubmitted(false)}
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-xs font-semibold text-foreground">
                          Your Full Name *
                        </label>
                        <Input
                          required
                          placeholder="e.g. John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-foreground">
                          Company / Business Name
                        </label>
                        <Input
                          placeholder="e.g. Al-Madina Trading LLC"
                          value={formData.companyName}
                          onChange={(e) =>
                            setFormData({ ...formData, companyName: e.target.value })
                          }
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-xs font-semibold text-foreground">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-foreground">
                          Phone / WhatsApp Number
                        </label>
                        <Input
                          placeholder="+971 50 123 4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-xs font-semibold text-foreground">
                          Destination Port & Country
                        </label>
                        <Input
                          placeholder="e.g. Jebel Ali, UAE / Felixstowe, UK"
                          value={formData.destinationPort}
                          onChange={(e) =>
                            setFormData({ ...formData, destinationPort: e.target.value })
                          }
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-foreground">
                          Estimated Order Quantity
                        </label>
                        <Input
                          placeholder="e.g. 1 x 40ft Reefer Container / 25 MT"
                          value={formData.estimatedQuantity}
                          onChange={(e) =>
                            setFormData({ ...formData, estimatedQuantity: e.target.value })
                          }
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-foreground">
                        Specific Product / Variety
                      </label>
                      <Input
                        placeholder={`e.g. ${category.items[0]?.name || category.title}`}
                        value={inquiryProduct || category.title}
                        onChange={(e) => setInquiryProduct(e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-foreground">
                        Packaging or Quality Notes
                      </label>
                      <Textarea
                        rows={3}
                        placeholder="Mention size grading, moisture parameters, custom label requirements or target shipment date..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="mt-1"
                      />
                    </div>

                    <Button type="submit" className="w-full gap-2 font-semibold">
                      <Send className="size-4" /> Send Request for Quotation
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Categories */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <span className="eyebrow">Explore Full Portfolio</span>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Other Export Categories
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {otherCategories.map((c) => (
            <Link
              key={c.slug}
              to={c.route}
              className="group flex flex-col items-center rounded-xl border border-border bg-card p-4 text-center transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <img
                src={c.cover}
                alt={c.title}
                className="size-16 rounded-full object-cover transition-transform group-hover:scale-105"
              />
              <span className="mt-3 text-sm font-semibold text-foreground group-hover:text-primary">
                {c.short}
              </span>
              <span className="text-xs text-muted-foreground">{c.items.length} Varieties</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
