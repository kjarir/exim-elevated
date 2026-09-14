export const company = {
  name: "Horizon Exim",
  tagline: "Agri-commodity exporters since 2018",
  phone: "+91 98987 89831",
  phoneHref: "tel:+919898789831",
  email: "horizonexim2018@gmail.com",
  address:
    "Dev Prime, 814, Corporate Rd, opposite Palladium building, Makarba, Ahmedabad, Gujarat 380051",
  mapUrl: "https://maps.app.goo.gl/5a8USQ1HJek8Yfxz7",
  founder: "Mr. Sagar Agravat",
  social: {
    facebook: "https://www.facebook.com/merchantexporterhorizonexim?mibextid=LQQJ4d",
    instagram: "https://www.instagram.com/horizon_exim/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr",
    linkedin: "https://www.linkedin.com/company/horizon-exim/",
    youtube: "https://www.youtube.com/@hiiem-ExportImportBusiness",
  },
} as const;

export type ProductItem = { name: string; image: string; note?: string };

export type Category = {
  slug: string;
  route: string;
  title: string;
  short: string;
  blurb: string;
  cover: string;
  intro: { heading: string; body: string; highlights: string[]; opportunities: string };
  items: ProductItem[];
};

export const categories: Category[] = [
  {
    slug: "onion",
    route: "/onion",
    title: "Onion",
    short: "Onion",
    blurb: "Premium quality onions delivered to global markets with purity and consistency.",
    cover: "/images/home4.webp",
    intro: {
      heading: "India's premier position in global onion export",
      body: "India holds a central position in the global onion trade, contributing significantly to its agricultural sector and national economy. As one of the world's largest producers, Indian onions are in high demand across the Middle East, Southeast Asia and Africa — and Horizon Exim ships them graded, cured and packed to buyer specification.",
      highlights: [
        "Exports to over 40 countries worldwide",
        "Sourced from Maharashtra, Karnataka and Andhra Pradesh",
        "Renowned for quality, taste and competitive pricing",
        "Mesh bags, jute bags and cartons as per buyer requirement",
      ],
      opportunities:
        "With emerging demand in Africa and Latin America, plus fast growth in organic and dehydrated onion, the category continues to expand every season.",
    },
    items: [
      { name: "Red Onion", image: "/images/home4.webp", note: "45–55 mm / 55–65 mm grades" },
      { name: "White Onion", image: "/images/home4.webp", note: "Low pungency, dehydration grade" },
      { name: "Pink Onion", image: "/images/home4.webp", note: "Nashik origin, long shelf life" },
    ],
  },
  {
    slug: "fruits",
    route: "/fruits",
    title: "Fruits",
    short: "Fruits",
    blurb: "Farm-fresh Indian fruits shipped to global markets with purity, quality and care.",
    cover: "/images/home1.webp",
    intro: {
      heading: "Fresh Indian fruit, harvested and shipped at peak ripeness",
      body: "From Alphonso and Kesar mangoes to pomegranates and bananas, our fruit programme runs on cold-chain discipline. Fruit is pre-cooled within hours of harvest, graded by size and brix, and moved in temperature-controlled reefers so it lands in perfect condition.",
      highlights: [
        "Pre-cooling and reefer logistics on every consignment",
        "Grading by size, colour and brix value",
        "Phytosanitary and residue testing on request",
        "Retail-ready and bulk packing options",
      ],
      opportunities:
        "Seasonal calendars are shared in advance so buyers can plan mango, pomegranate and banana programmes months ahead.",
    },
    items: [
      { name: "Alphonso Mango", image: "/images/fruits/mango.webp" },
      { name: "Kesar Mango", image: "/images/fruits/kesar.webp" },
      { name: "Badami Mango", image: "/images/fruits/badamimango.webp" },
      { name: "Banana", image: "/images/fruits/banana.webp" },
      { name: "Pomegranate", image: "/images/fruits/pomegrante.webp" },
    ],
  },
  {
    slug: "vegetables",
    route: "/vegetables",
    title: "Vegetables",
    short: "Vegetables",
    blurb: "Indian vegetables delivered to global markets with unmatched quality and care.",
    cover: "/images/home2.webp",
    intro: {
      heading: "Fresh vegetables, sorted and packed for long-haul freight",
      body: "We work directly with farmer clusters across Gujarat, Maharashtra and Karnataka to source vegetables that hold up over long distances. Every lot is sorted, washed where required, and packed in ventilated cartons or crates.",
      highlights: [
        "Direct farm sourcing with traceable lots",
        "Air and reefer sea freight options",
        "Ventilated cartons, crates and mesh packing",
        "Residue-tested consignments on request",
      ],
      opportunities:
        "Green chilli, okra and drumstick move on weekly air-freight programmes to the Gulf, UK and Europe.",
    },
    items: [
      { name: "Green Chilli", image: "/images/vegetables/chilli.webp" },
      { name: "Okra", image: "/images/vegetables/okra.webp" },
      { name: "Drumstick", image: "/images/vegetables/drumstick.webp" },
      { name: "Ginger", image: "/images/vegetables/ginger.webp" },
      { name: "Tomato", image: "/images/vegetables/tomato.webp" },
      { name: "Lemon", image: "/images/vegetables/lemon.webp" },
      { name: "Suran", image: "/images/vegetables/suran.webp" },
    ],
  },
  {
    slug: "spices",
    route: "/spices",
    title: "Spices",
    short: "Spices",
    blurb: "Whole and ground Indian spices with authentic aroma, colour and purity.",
    cover: "/images/species/tumeric.webp",
    intro: {
      heading: "Authentic Indian spices, whole and ground",
      body: "Our spice programme covers whole spices and precision-milled powders. Material is cleaned, de-stoned, steam-sterilised where required, and packed in food-grade liners to protect volatile oils and colour value.",
      highlights: [
        "ASTA colour and curcumin values on request",
        "Steam sterilisation and metal detection",
        "Private-label and retail packing available",
        "Lab reports with every shipment",
      ],
      opportunities:
        "Turmeric, chilli and cumin remain our highest-volume lines, with growing demand for blended masalas in retail packs.",
    },
    items: [
      { name: "Turmeric", image: "/images/species/tumeric.webp" },
      { name: "Turmeric Powder", image: "/images/species/tumeric-powder.webp" },
      { name: "Red Chilli", image: "/images/species/red-chilli.webp" },
      { name: "Chilli Powder", image: "/images/species/chilli-powder.webp" },
      { name: "Chilli Flakes", image: "/images/species/flakes-1.webp" },
      { name: "Coriander Powder", image: "/images/species/coriander-powder.webp" },
      { name: "Cumin Powder", image: "/images/species/cumin-powder.webp" },
      { name: "Black Pepper", image: "/images/species/black-paper.webp" },
      { name: "Black Pepper Powder", image: "/images/species/black-paper-powder-1.webp" },
      { name: "Green Cardamom", image: "/images/species/green-cardamom.webp" },
      { name: "Cloves", image: "/images/species/cloves.webp" },
      { name: "Dry Ginger", image: "/images/species/dry-ginger.webp" },
      { name: "Garam Masala", image: "/images/species/garam-masala.webp" },
    ],
  },
  {
    slug: "frozen",
    route: "/frozen",
    title: "Frozen Items",
    short: "Frozen Items",
    blurb: "IQF fruits and vegetables frozen at peak freshness for year-round supply.",
    cover: "/images/frozan/frozen-strawberry.webp",
    intro: {
      heading: "IQF frozen fruit and vegetables, all year round",
      body: "Individually quick frozen produce lets buyers hold consistent quality outside the harvest window. Our frozen range is blanched where required, frozen within hours of processing, and held in an unbroken -18°C chain to the destination port.",
      highlights: [
        "IQF processing with unbroken cold chain",
        "-18°C reefer containers with data loggers",
        "Bulk 10 kg cartons and retail pouches",
        "HACCP-compliant processing partners",
      ],
      opportunities:
        "Frozen vegetables and tropical fruit pulp are the fastest-growing lines in our Middle East and European programmes.",
    },
    items: [
      { name: "Frozen Strawberry", image: "/images/frozan/frozen-strawberry.webp" },
      { name: "Frozen Papaya", image: "/images/frozan/frozen-papaya.webp" },
      { name: "Frozen Taros", image: "/images/frozan/frozen-taros.webp" },
      { name: "Frozen Vegetables", image: "/images/frozan/frozen-vegetables.webp" },
    ],
  },
  {
    slug: "confectionery",
    route: "/confectionery",
    title: "Confectionery",
    short: "Confectionery",
    blurb: "Delivering the taste of India to the world with premium confectionery exports.",
    cover: "/images/home3.webp",
    intro: {
      heading: "Sweets, candies and chocolate built for export shelves",
      body: "We supply hard-boiled candy, lollipops, toffees and chocolate in bulk and retail formats. Heat-stable formulations and export-grade secondary packing keep product intact through warm-climate transit.",
      highlights: [
        "Heat-stable chocolate formulations",
        "Private labelling and custom flavours",
        "FSSAI-certified manufacturing partners",
        "Jar, pouch and display-carton packing",
      ],
      opportunities:
        "Private-label confectionery for supermarket chains is our fastest-moving format across Africa and the Gulf.",
    },
    items: [
      { name: "Candy", image: "/images/Confectionery/candy.webp" },
      { name: "Chocolate", image: "/images/Confectionery/chocolates.webp" },
      { name: "Lollipop", image: "/images/Confectionery/lollipops.webp" },
    ],
  },
  {
    slug: "rice",
    route: "/rice",
    title: "Rice",
    short: "Rice",
    blurb: "Basmati and non-basmati rice milled, sorted and polished to export grade.",
    cover: "/images/rice/basmati.webp",
    intro: {
      heading: "Basmati and non-basmati rice for every market",
      body: "From long-grain aged Basmati to IR64 and broken rice for industrial buyers, our rice is milled, colour-sorted and moisture-controlled before packing. Grain length, broken percentage and moisture are agreed before every contract.",
      highlights: [
        "Colour-sorted, double-polished grain",
        "Moisture and broken percentage to spec",
        "5 kg to 50 kg PP, jute and BOPP packing",
        "Aged Basmati available on request",
      ],
      opportunities:
        "Non-basmati parboiled and IR64 volumes continue to grow across West Africa and Southeast Asia.",
    },
    items: [
      { name: "Basmati Rice", image: "/images/rice/basmati.webp" },
      { name: "Non-Basmati Rice", image: "/images/rice/non-basmarti.webp" },
      { name: "IR64 Rice", image: "/images/rice/ir64.webp" },
      { name: "Broken Rice", image: "/images/rice/broken-rice.webp" },
    ],
  },
  {
    slug: "flour",
    route: "/flour",
    title: "Flour",
    short: "Flour",
    blurb: "Wheat flour, maida, maize, millet and cattle feed milled to consistent specs.",
    cover: "/images/flour/wheat.webp",
    intro: {
      heading: "Milled grains and feed with consistent specification",
      body: "Our milling partners deliver uniform granulation, protein and moisture batch after batch. Flour is packed in multi-layer bags that resist humidity through long ocean transit.",
      highlights: [
        "Consistent protein, ash and moisture values",
        "Multi-layer moisture-resistant packing",
        "Bulk and retail bag sizes",
        "Feed-grade lines for livestock buyers",
      ],
      opportunities:
        "Millet flour demand has risen sharply with the global shift toward gluten-free and ancient grains.",
    },
    items: [
      { name: "Wheat Flour", image: "/images/flour/wheat.webp" },
      { name: "Maida", image: "/images/flour/maida.webp" },
      { name: "Maize", image: "/images/flour/maize.webp" },
      { name: "Millet", image: "/images/flour/milllet.webp" },
      { name: "Cattle Feed", image: "/images/flour/catlle.webp" },
    ],
  },
  {
    slug: "salt",
    route: "/salt",
    title: "Salt",
    short: "Salt",
    blurb: "Iodised, industrial and Himalayan pink salt from Gujarat's coastal belt.",
    cover: "/images/salt/himalayan.webp",
    intro: {
      heading: "Salt from India's largest producing belt",
      body: "Gujarat produces the majority of India's salt, and Horizon Exim ships edible, industrial and speciality grades from the same coastline. Purity, moisture and grain size are matched to the buyer's application.",
      highlights: [
        "NaCl purity up to 99.5% on dry basis",
        "Edible, industrial and pharma grades",
        "Crystal, powder and granular sizes",
        "Bulk and consumer packing",
      ],
      opportunities:
        "Himalayan pink salt in retail grinders continues to grow across speciality food retail.",
    },
    items: [
      { name: "Iodised Salt", image: "/images/salt/iodised.webp" },
      { name: "Himalayan Pink Salt", image: "/images/salt/himalayan.webp" },
      { name: "Industrial Salt", image: "/images/salt/salt.webp" },
    ],
  },
  {
    slug: "makhana",
    route: "/makhana",
    title: "Makhana / Fox Nuts",
    short: "Makhana / Fox Nuts",
    blurb: "Hand-graded Bihar fox nuts — plain and roasted — for the global snack trade.",
    cover: "/images/makhana/makhana.jpg",
    intro: {
      heading: "Bihar fox nuts, hand-graded for the world's snack shelves",
      body: "Makhana is one of India's fastest-growing superfood exports. We source from Bihar's Mithilanchal belt, grade by suta size, and pack in nitrogen-flushed pouches so crunch and colour survive the journey.",
      highlights: [
        "Graded 4 suta to 6+ suta by hand",
        "Nitrogen-flushed, moisture-controlled packing",
        "Plain, roasted and flavoured variants",
        "Private-label retail pouches available",
      ],
      opportunities:
        "Flavoured roasted makhana is winning shelf space in health-snack aisles across the US, UK and Gulf.",
    },
    items: [
      { name: "Plain Makhana", image: "/images/makhana/makhana.jpg", note: "4–6 suta grades" },
      {
        name: "Roasted Makhana",
        image: "/images/makhana/roasted-makhana.jpg",
        note: "Peri-peri, cheese, masala",
      },
    ],
  },
];

export const values = [
  {
    title: "Honesty and Integrity",
    body: "Honesty and integrity matter to us and help us build trust among our customers at every stage.",
  },
  {
    title: "Innovation and Change",
    body: "We believe growth lies in new technology, and we actively monitor for innovation and change.",
  },
  {
    title: "Teamwork",
    body: "We encourage our people to value and respect their co-workers on every shipment.",
  },
  {
    title: "Open Communication",
    body: "Our strength lies in transparency and forthrightness — you always know where your cargo is.",
  },
  {
    title: "Variety of Products",
    body: "A diverse range of high-quality agri-commodities under one export house.",
  },
  {
    title: "Satisfaction Guarantee",
    body: "Responsive assistance and a firm commitment to buyer satisfaction, order after order.",
  },
];

export const features = [
  {
    title: "Trusted Suppliers",
    body: "We ensure the highest quality by sourcing directly from farmers and certified suppliers.",
  },
  {
    title: "Global Shipping",
    body: "Our logistics network guarantees timely, secure delivery to any part of the world.",
  },
  {
    title: "Quality Assurance",
    body: "Strict quality control and international standards mean only the best leaves our door.",
  },
];

export const stats = [
  { value: 8, suffix: "+", label: "Years of experience" },
  { value: 5000, suffix: "+", label: "Tons exported annually" },
  { value: 20, suffix: "+", label: "Countries served" },
  { value: 98, suffix: "%", label: "Customer satisfaction" },
];

export const testimonials = [
  {
    quote:
      "Horizon Exim has been our trusted supplier for premium Indian spices. Their quality, aroma and consistency help us meet global standards every time.",
    name: "Rahul Deshpande",
    role: "Spice Importer – UAE",
  },
  {
    quote:
      "We source fresh fruits and vegetables from Horizon Exim regularly. Their packaging, timely delivery and freshness are unmatched.",
    name: "Anita Joseph",
    role: "Retail Chain Buyer – Singapore",
  },
  {
    quote:
      "Horizon Exim delivers top-quality grains and pulses with complete transparency. Their documentation and export compliance make the process effortless.",
    name: "Paresh Mistry",
    role: "Food Distributor – Canada",
  },
  {
    quote:
      "From spices to dehydrated products, Horizon Exim has always provided exceptional export-quality goods. Their consistency keeps us coming back.",
    name: "Sana Khan",
    role: "Import Manager – Saudi Arabia",
  },
  {
    quote:
      "We appreciate the professional approach and quick response. Their fresh fruit quality exceeds the expectations of our European clientele.",
    name: "Vikram Balan",
    role: "Wholesale Supplier – Germany",
  },
  {
    quote:
      "Horizon Exim made importing Indian agro-products seamless for us. Their quality assurance and export handling are absolutely top-notch.",
    name: "Neelam Sethi",
    role: "Organic Store Owner – Australia",
  },
  {
    quote:
      "Their spice range is exceptional — pure, authentic and perfectly processed. Horizon Exim has become our primary Indian export partner.",
    name: "Rohan Chakraborty",
    role: "Food Brand Owner – UK",
  },
  {
    quote:
      "Horizon Exim ensures timely export with great care. The freshness of the vegetables and fruits remained intact even after long-distance shipping.",
    name: "Harpreet Singh",
    role: "Import Partner – Qatar",
  },
];

export const faqs = [
  {
    q: "What products does Horizon Exim export?",
    a: "We export a wide range of agricultural products including spices, fresh fruits, vegetables, grains, pulses, oilseeds, dehydrated food items and processed agro-products.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bank transfers (TT), Letters of Credit (LC), advance payments and other internationally recognised payment modes based on buyer preference.",
  },
  {
    q: "How is product quality ensured before export?",
    a: "All products undergo strict quality checks, sorting, grading and proper packaging. We follow export-grade hygiene standards and can provide certificates such as FSSAI, Phytosanitary and quality lab reports.",
  },
  {
    q: "Do you handle customs clearance and documentation?",
    a: "Yes. We manage the entire export documentation process including customs clearance, packing lists, invoices, health certificates and country-specific requirements.",
  },
  {
    q: "What countries do you export to?",
    a: "We export to 20+ countries across Asia, the Middle East, Europe, Africa and North America, and we expand our network every year.",
  },
  {
    q: "What is the typical delivery timeline?",
    a: "Depending on the destination, delivery takes 7–30 days. Fresh items ship via fast, temperature-controlled logistics to maintain quality.",
  },
  {
    q: "Can I request custom packaging or private labelling?",
    a: "Yes. We offer customised packaging, branding and private labelling solutions as per client requirements.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Enquiry & Quotation",
    body: "Share your product, grade and destination port. We respond with a detailed FOB or CIF quotation within 24 hours.",
  },
  {
    step: "02",
    title: "Sampling & Approval",
    body: "Pre-shipment samples and lab reports are sent for approval so the specification is locked before production.",
  },
  {
    step: "03",
    title: "Sourcing & Quality Check",
    body: "Material is sourced from vetted farms and processors, then graded, sorted and inspected against the agreed spec.",
  },
  {
    step: "04",
    title: "Packing & Documentation",
    body: "Export-grade packing, marking, and full documentation — invoice, packing list, phytosanitary and certificate of origin.",
  },
  {
    step: "05",
    title: "Shipping & Tracking",
    body: "Container booking, customs clearance and live tracking updates until the cargo reaches your port.",
  },
];
