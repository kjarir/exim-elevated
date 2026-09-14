import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { company, categories } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us & Request a Quote | Horizon Exim India" },
      {
        name: "description",
        content:
          "Get in touch with Horizon Exim's export desk in Ahmedabad, Gujarat. Request FOB/CIF pricing, samples, or container booking quotes.",
      },
    ],
  }),
});

function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    productCategory: "Spices",
    quantity: "",
    incoterm: "FOB Mundra Port",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.country) {
      toast.error("Please fill in your name, email, and destination country.");
      return;
    }

    setFormSubmitted(true);
    toast.success("Request for Quotation Submitted!", {
      description: `Thank you, ${formData.name}. Our export director will review your requirements for ${formData.productCategory} and reply within 24 hours.`,
    });
  };

  return (
    <div>
      <PageHero
        eyebrow="Export Desk & Enquiries"
        title="Get In Touch With Our Global Trade Desk"
        description="Whether you need current spot market rates, FOB/CIF container quotations, pre-shipment laboratory samples, or customized retail packing specs, our Ahmedabad trade team is at your service."
        crumb="Contact Us"
      />

      {/* Main Contact Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Info & Location */}
          <div className="space-y-8 lg:col-span-5">
            <div>
              <span className="eyebrow">Direct Contact Details</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Let's Discuss Your Commodity Requirements
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We work directly with international wholesalers, supermarket chains, food processing
                companies, and bulk distributors.
              </p>
            </div>

            <div className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="size-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Call / WhatsApp Us
                  </h4>
                  <a
                    href={company.phoneHref}
                    className="mt-1 block font-display text-lg font-bold text-foreground hover:text-primary transition-colors"
                  >
                    {company.phone}
                  </a>
                  <p className="text-xs text-muted-foreground">Mon–Sat: 9:00 AM – 7:30 PM (IST)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="size-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email Export Inquiries
                  </h4>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-1 block font-display text-base font-bold text-foreground hover:text-primary transition-colors"
                  >
                    {company.email}
                  </a>
                  <p className="text-xs text-muted-foreground">
                    Quotations dispatched in &lt;24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Headquarters & Corporate Office
                  </h4>
                  <p className="mt-1 text-sm font-medium text-foreground leading-relaxed">
                    {company.address}
                  </p>
                  <a
                    href={company.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Guarantees Card */}
            <div className="rounded-xl border border-border/80 bg-secondary/50 p-6">
              <h4 className="font-display font-semibold text-foreground text-sm flex items-center gap-2">
                <ShieldCheck className="size-4 text-leaf" /> Our Export Service Commitments
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-leaf shrink-0" />
                  <span>Transparent FOB / CIF rate breakdown with no hidden charges</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-leaf shrink-0" />
                  <span>SGS / Geo-Chem independent quality inspection on request</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-leaf shrink-0" />
                  <span>Full trade documentation: BL, Invoice, COO, Phyto, FSSAI</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Request for Quotation Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-10 shadow-lg">
              <div className="mb-6">
                <span className="eyebrow">Online Quotation Request</span>
                <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-foreground">
                  Request an Official Export Quote
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Fill out your trade requirements below for instant forwarding to our senior export
                  desk.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto grid size-16 place-items-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h4 className="mt-4 font-display text-2xl font-bold">
                    Inquiry Successfully Dispatched
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                    Thank you,{" "}
                    <span className="font-semibold text-foreground">{formData.name}</span>. We have
                    logged your request for{" "}
                    <span className="font-semibold text-foreground">
                      {formData.productCategory}
                    </span>{" "}
                    to <span className="font-semibold text-foreground">{formData.country}</span>. An
                    export manager will contact you at{" "}
                    <span className="font-semibold text-foreground">{formData.email}</span>.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-6"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Submit Another Quote Request
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
                      <label className="text-xs font-semibold text-foreground">Company Name</label>
                      <Input
                        placeholder="e.g. Global Foods Trading Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
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
                        placeholder="importer@company.com"
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
                        placeholder="+971 50 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold text-foreground">
                        Destination Country & Port *
                      </label>
                      <Input
                        required
                        placeholder="e.g. Dubai (Jebel Ali), UAE"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-foreground">
                        Product Category
                      </label>
                      <select
                        value={formData.productCategory}
                        onChange={(e) =>
                          setFormData({ ...formData, productCategory: e.target.value })
                        }
                        className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {categories.map((c) => (
                          <option key={c.slug} value={c.title}>
                            {c.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold text-foreground">
                        Estimated Quantity
                      </label>
                      <Input
                        placeholder="e.g. 1 x 20ft / 2 x 40ft Reefer / 50 MT"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-foreground">
                        Incoterm Preference
                      </label>
                      <select
                        value={formData.incoterm}
                        onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                        className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="FOB Mundra Port">FOB - Port Mundra / Nhava Sheva</option>
                        <option value="CIF Destination Port">CIF - Destination Port</option>
                        <option value="CFR Destination Port">CFR - Destination Port</option>
                        <option value="EXW Ahmedabad">EXW - Ahmedabad Factory/Warehouse</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-foreground">
                      Specific Variety, Grade, Packing & Target Delivery Date
                    </label>
                    <Textarea
                      rows={4}
                      placeholder="Specify your required variety (e.g., Red Onion 50mm+, Turmeric fingers 3.5% curcumin), packaging style (e.g., 25kg PP bags), target ship date..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2 py-6 text-base font-semibold">
                    <Send className="size-4" /> Send Request for Quotation
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <span className="eyebrow">Visit Our Corporate Office</span>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Ahmedabad, Gujarat, India
              </h3>
            </div>
            <a
              href={company.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary/80"
            >
              <MapPin className="size-4 text-primary" /> View on Google Maps
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-border shadow-inner">
            <iframe
              title="Horizon Exim Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8466632490216!2d72.5028876!3d22.9926442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b38062f2cc3%3A0x8677c77cbb650e69!2sDev%20Prime!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
