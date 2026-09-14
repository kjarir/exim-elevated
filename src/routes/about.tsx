import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Truck,
  Users,
  Building2,
  Sparkles,
  ArrowRight,
  Target,
  Eye,
  Handshake,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, CountUp } from "@/components/site/Reveal";
import { company, values, stats } from "@/data/site";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | Horizon Exim - Global Agri-Commodity Exporter" },
      {
        name: "description",
        content:
          "Learn about Horizon Exim, founded in 2018 by Mr. Sagar Agravat. Direct farm sourcing, strict quality control, and dependable international logistics from Ahmedabad, India.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="Who We Are"
        title="Connecting Indian Agriculture to Global Markets"
        description="Horizon Exim is a trusted merchant export house founded in 2018 in Ahmedabad, Gujarat. We source, grade, and deliver premium agri-commodities across 20+ countries worldwide."
        crumb="About Us"
      />

      {/* Origin & Story Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow">
              <Sparkles className="size-3.5" /> Our Journey & Heritage
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Delivering the Best of India's Soil Since 2018
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Founded under the visionary leadership of{" "}
              <span className="font-semibold text-foreground">{company.founder}</span>, Horizon Exim
              was built on a single, uncompromising principle:{" "}
              <em className="text-foreground">reliability in every shipment</em>.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Headquartered in Ahmedabad, Gujarat — the epicentre of India's spice, cotton, onion,
              and salt trade — we operate a tightly managed farm-to-freight supply chain. By
              eliminating intermediaries and working directly with certified farm clusters and
              processing units, we ensure consistent grade specs, competitive pricing, and full
              batch traceability for our international buyers.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-3">
              <div>
                <span className="block font-display text-2xl font-bold text-leaf">2018</span>
                <span className="text-xs text-muted-foreground">Established in India</span>
              </div>
              <div>
                <span className="block font-display text-2xl font-bold text-leaf">Ahmedabad</span>
                <span className="text-xs text-muted-foreground">HQ & Operations Desk</span>
              </div>
              <div>
                <span className="block font-display text-2xl font-bold text-leaf">20+</span>
                <span className="text-xs text-muted-foreground">Destinations Active</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-xl">
              <img
                src="/images/about-1.jpeg"
                alt="Horizon Exim Facility & Team"
                className="h-[380px] w-full rounded-xl object-cover md:h-[460px]"
              />
              <div className="mt-4 rounded-lg bg-secondary/80 p-4">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground font-display font-bold">
                    SA
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">
                      {company.founder}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Founder & Managing Director, Horizon Exim
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-xs italic text-foreground/80 leading-relaxed">
                  "Our mission is to establish Indian agricultural products as the global benchmark
                  for purity, taste, and consistency while ensuring our buyers experience seamless
                  trade compliance from farm to destination."
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Target className="size-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                To bridge the gap between Indian agricultural producers and global importers by
                delivering rigorously graded, ethically sourced, and laboratory-verified commodities
                with transparent logistics, timely delivery, and dependable customer service.
              </p>
            </Reveal>

            <Reveal delay={100} className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Eye className="size-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-foreground">Our Vision</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                To be recognised worldwide as the most dependable and forward-thinking Indian
                merchant exporter, celebrated for our unwavering commitment to food safety,
                sustainable packaging, and long-term buyer partnerships across all five continents.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="text-center">
          <span className="eyebrow justify-center">The Foundation of Our Business</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Core Values & Guiding Principles
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
            Every container booked, contract negotiated, and consignment dispatched is governed by
            our core company values.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 60}
              className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="grid size-8 place-items-center rounded-lg bg-primary/10 font-mono text-xs font-bold text-primary">
                  0{i + 1}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{v.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Infrastructure & Sourcing Capabilities */}
      <section className="surface-deep py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
                Supply Chain & Infrastructure
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-cream md:text-4xl">
                Robust Farm-to-Port Infrastructure
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-cream/75">
                Our operations benefit from direct geographic proximity to western India's major
                deep-sea ports — Mundra, Nhava Sheva (JNPT), Pipavav, and Kandla.
              </p>

              <div className="mt-8 space-y-4 text-sm text-cream/90">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <strong className="block text-cream font-semibold">Direct Farm Network</strong>
                    <span className="text-cream/70 text-xs">
                      Vetted farmers and APMC mandi partners across Gujarat, Maharashtra, Karnataka
                      & Bihar.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <strong className="block text-cream font-semibold">Modern Cold Chain</strong>
                    <span className="text-cream/70 text-xs">
                      Pre-cooling chambers, temperature-logged reefers (-18°C / +4°C), and
                      humidity-controlled storage.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <strong className="block text-cream font-semibold">
                      Custom Packaging Stations
                    </strong>
                    <span className="text-cream/70 text-xs">
                      Grading, sorting, nitrogen flushing, vacuum sealing, and customized private
                      labelling units.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-cream/15 bg-cream/5 p-6 backdrop-blur-sm">
                  <Truck className="size-8 text-accent" />
                  <h4 className="mt-4 font-display text-lg font-semibold text-cream">
                    Port Proximity
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-cream/70">
                    Fast transit to Mundra & JNPT ports enables swift stuffing, customs sealing, and
                    minimal lead times before ocean departure.
                  </p>
                </div>

                <div className="rounded-xl border border-cream/15 bg-cream/5 p-6 backdrop-blur-sm">
                  <ShieldCheck className="size-8 text-accent" />
                  <h4 className="mt-4 font-display text-lg font-semibold text-cream">
                    Quality Standards
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-cream/70">
                    Pre-shipment sampling, ASTA spice color index, brix measurement, and
                    SGS/Eurofins inspection upon client request.
                  </p>
                </div>

                <div className="rounded-xl border border-cream/15 bg-cream/5 p-6 backdrop-blur-sm">
                  <Award className="size-8 text-accent" />
                  <h4 className="mt-4 font-display text-lg font-semibold text-cream">
                    Export Compliance
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-cream/70">
                    FSSAI registered, APEDA recognized, Spice Board accredited, and aligned with
                    global import sanitary guidelines.
                  </p>
                </div>

                <div className="rounded-xl border border-cream/15 bg-cream/5 p-6 backdrop-blur-sm">
                  <Handshake className="size-8 text-accent" />
                  <h4 className="mt-4 font-display text-lg font-semibold text-cream">
                    Long-Term Contracts
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-cream/70">
                    Annual supply agreements, locked seasonal pricing, and scheduled recurring
                    container dispatches for retail chains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, idx) => (
            <div key={idx} className="text-center">
              <div className="font-display text-4xl font-bold tracking-tight text-leaf md:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary/40 py-16 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Partner with Horizon Exim for Your Next Consignment
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Whether you need a single 20ft container of premium spices or recurring reefer shipments
            of fresh produce, we are ready to serve.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5"
            >
              Request a Quotation <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-md border border-input bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
