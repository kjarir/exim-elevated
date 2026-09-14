import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { categories, testimonials, faqs } from "@/data/site";

export const Route = createFileRoute("/")({
  component: IndexPage,
  head: () => ({
    meta: [
      { title: "Horizon Exim | India's Top Agri-Commodity Exporter" },
      {
        name: "description",
        content:
          "Horizon Exim exports premium Indian agricultural commodities: onions, fresh fruits, vegetables, authentic spices, rice, grains, and confectionery worldwide.",
      },
    ],
  }),
});

const heroSlides = [
  {
    title: "INDIA'S TOP ONION\nEXPORTER",
    image: "/images/home4.webp",
  },
  {
    title: "FARM-FRESH INDIAN\nFRUITS & PRODUCE",
    image: "/images/home1.webp",
  },
  {
    title: "AUTHENTIC WHOLE &\nGROUND SPICES",
    image: "/images/species/tumeric.webp",
  },
  {
    title: "PREMIUM BASMATI &\nNON-BASMATI RICE",
    image: "/images/rice/basmati.webp",
  },
];

function IndexPage() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Auto-advance hero slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const currentTestimonial = testimonials[activeTestimonial] ??
    testimonials[0] ?? {
      quote:
        "Horizon Exim has been our trusted supplier for premium Indian spices. Their quality, aroma and consistency help us meet global standards every time.",
      name: "Rahul Deshpande",
      role: "Spice Importer – UAE",
    };

  return (
    <div className="bg-white text-[#111827]">
      {/* 1. HERO CAROUSEL SECTION (Matching Screenshot 1) */}
      <section className="relative min-h-[580px] sm:min-h-[640px] md:min-h-[720px] w-full bg-[#18080c] overflow-hidden flex items-center">
        {/* Slide Background Image */}
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentHeroSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover object-center brightness-90"
            />
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/20" />
          </div>
        ))}

        {/* Hero Headline Content */}
        <div className="relative z-20 mx-auto max-w-7xl px-8 w-full pt-16 md:pt-20">
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-2xl leading-[1.08] uppercase drop-shadow-md whitespace-pre-line">
            {heroSlides[currentHeroSlide]?.title ?? "INDIA'S TOP ONION\nEXPORTER"}
          </h1>
        </div>

        {/* Left Arrow Navigation Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 grid size-10 place-items-center text-white/75 hover:text-white transition-colors text-3xl font-light"
        >
          <ChevronLeft className="size-8" />
        </button>

        {/* Right Arrow Navigation Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 grid size-10 place-items-center text-white/75 hover:text-white transition-colors text-3xl font-light"
        >
          <ChevronRight className="size-8" />
        </button>
      </section>

      {/* 2. ABOUT US SECTION (Matching Screenshot 2) */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <span className="text-[#1b4b9b] text-sm font-bold tracking-wide">About Us</span>
              <h2 className="mt-4 font-sans text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] text-[#111827]">
                At Horizon Exim, we don't just export goods — we export{" "}
                <span className="text-[#9ca3af] font-normal">trust,</span>
              </h2>
              <p className="mt-8 text-sm md:text-base leading-relaxed text-[#4b5563]">
                At Horizon Exim, we provide seamless global shipping, customs clearance, and freight
                forwarding services. With a trusted network of international logistics partners, we
                make cross-border trade simple, secure, and cost-efficient. Whether you are
                importing goods or exporting to global markets — we ensure timely and hassle-free
                delivery every time.
              </p>
            </div>

            {/* Right Image with 8 Years Badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative overflow-hidden rounded-[28px] shadow-lg">
                <img
                  src="/images/about-1.jpeg"
                  alt="Horizon Exim Shipping & Logistics"
                  className="h-[380px] sm:h-[440px] md:h-[480px] w-full object-cover"
                />
                {/* Overlaid 8 Years Badge */}
                <div className="absolute bottom-6 right-6 rounded-2xl bg-[#1b4b9b] px-6 py-5 text-center text-white shadow-2xl min-w-[130px]">
                  <span className="block font-sans text-5xl sm:text-6xl font-extrabold leading-none">
                    8
                  </span>
                  <span className="mt-1.5 block text-xs font-semibold text-white/90">
                    Years of Excellence
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR PRODUCTS MOSAIC SECTION (Matching Screenshot 3) */}
      <section className="bg-white pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827]">
                Our Products
              </h2>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#4b5563]">
                From farm to foreign markets, every step of our supply chain is managed with
                precision and care. Whether it's spices, grains, fresh produce, or other
                agri-commodities, we ensure our exports meet international standards and customer
                expectations.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full bg-[#1b4b9b] hover:bg-[#163e80] px-7 py-3 text-xs font-bold text-white shadow-md transition-colors shrink-0"
            >
              View All Products
            </Link>
          </div>

          {/* Mosaic 2x2 Grid with Alternating Photo and Royal Blue Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden shadow-sm">
            {/* Top-Left: Fruits (Image Left, Blue Box Right) */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="h-64 sm:h-72 overflow-hidden bg-gray-100">
                <img
                  src="/images/home1.webp"
                  alt="Fruits"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="bg-[#1b4b9b] text-white p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold">Fruits</h3>
                <p className="mt-3 text-xs sm:text-sm text-white/85 leading-relaxed">
                  Farm-fresh Indian fruits to global markets with purity, quality, and care.
                </p>
              </div>
            </div>

            {/* Top-Right: Vegetables (Image Left, Blue Box Right) */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="h-64 sm:h-72 overflow-hidden bg-gray-100">
                <img
                  src="/images/home2.webp"
                  alt="Vegetables"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="bg-[#1b4b9b] text-white p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold">Vegetables</h3>
                <p className="mt-3 text-xs sm:text-sm text-white/85 leading-relaxed">
                  Indian vegetables to global markets with unmatched quality and care.
                </p>
              </div>
            </div>

            {/* Bottom-Left: Confectionery (Blue Box Left, Image Right) */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="bg-[#1b4b9b] text-white p-8 flex flex-col justify-center order-2 sm:order-1">
                <h3 className="text-2xl font-bold">Confectionery</h3>
                <p className="mt-3 text-xs sm:text-sm text-white/85 leading-relaxed">
                  Delivering the taste of India to the world with premium quality confectionery
                  exports.
                </p>
              </div>
              <div className="h-64 sm:h-72 overflow-hidden bg-gray-100 order-1 sm:order-2">
                <img
                  src="/images/home3.webp"
                  alt="Confectionery"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Bottom-Right: Onions (Blue Box Left, Image Right) */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="bg-[#1b4b9b] text-white p-8 flex flex-col justify-center order-2 sm:order-1">
                <h3 className="text-2xl font-bold">Onions</h3>
                <p className="mt-3 text-xs sm:text-sm text-white/85 leading-relaxed">
                  Delivering premium quality onions to global markets with purity, consistency, and
                  trust.
                </p>
              </div>
              <div className="h-64 sm:h-72 overflow-hidden bg-gray-100 order-1 sm:order-2">
                <img
                  src="/images/home4.webp"
                  alt="Onions"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR FEATURES BAR (Matching Screenshot 3) */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left Column: Our Features (Royal Blue) */}
          <div className="bg-[#1b4b9b] p-8 md:p-12 md:col-span-3 flex items-center">
            <h3 className="font-sans text-2xl md:text-3xl font-bold text-white">Our Features</h3>
          </div>

          {/* Right 3 Columns (Dark Charcoal/Black) */}
          <div className="bg-[#18181b] p-8 md:p-12 md:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">Trusted Suppliers</h4>
              <p className="mt-2 text-xs text-white/70 leading-relaxed">
                We ensure highest quality by sourcing directly from farmers and certified suppliers.
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">Global Shipping</h4>
              <p className="mt-2 text-xs text-white/70 leading-relaxed">
                Our expert logistics network guarantees timely and secure delivery to any part of
                the world.
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">Quality Assurance</h4>
              <p className="mt-2 text-xs text-white/70 leading-relaxed">
                We follow strict quality control and international standards to deliver only the
                best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION (Matching Screenshot 4) */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="relative overflow-hidden rounded-[32px] bg-[#0c101c] text-white shadow-2xl grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
            {/* Left Port Container Image */}
            <div className="lg:col-span-6 relative overflow-hidden h-[300px] lg:h-auto">
              <img
                src="/images/h2.webp"
                alt="Container Port at Sunset"
                className="w-full h-full object-cover"
              />
              <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#0c101c] to-transparent pointer-events-none" />
            </div>

            {/* Right Testimonial Quote Area */}
            <div className="lg:col-span-6 p-8 sm:p-12 md:p-16 flex flex-col justify-center">
              <blockquote className="font-sans text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed text-white">
                "{currentTestimonial.quote}"
              </blockquote>
              <p className="mt-8 text-xs sm:text-sm text-white/70 font-medium">
                {currentTestimonial.name}, {currentTestimonial.role}
              </p>

              {/* Pagination Dots */}
              <div className="mt-8 flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Testimonial slide ${i + 1}`}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeTestimonial === i
                        ? "w-6 bg-[#2563eb]"
                        : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ ACCORDION SECTION (Matching Screenshot 4) */}
      <section className="bg-white pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left FAQ Title */}
            <div className="lg:col-span-5">
              <span className="text-[#1b4b9b] font-bold text-xs uppercase tracking-wider">FAQ</span>
              <h2 className="mt-3 font-sans text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] text-[#111827]">
                Everything You Should
                <br />
                Know About Horizon
                <br />
                <span className="text-[#9ca3af] font-light">Exim</span>
              </h2>
            </div>

            {/* Right Clean Accordion List */}
            <div className="lg:col-span-7 divide-y divide-gray-200">
              {faqs.map((faq, idx) => (
                <div key={idx} className="py-5">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full items-center justify-between text-left text-sm sm:text-base font-semibold text-[#1f2937] hover:text-[#1b4b9b] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`size-4 text-gray-500 transition-transform duration-200 shrink-0 ml-4 ${
                        openFaq === idx ? "rotate-180 text-[#1b4b9b]" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="mt-3 pr-6 text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
