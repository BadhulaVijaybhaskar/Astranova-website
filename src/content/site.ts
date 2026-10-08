/**
 * ============================================================================
 *  ASTRANOVA — EDITABLE SITE CONTENT
 * ============================================================================
 *  Single source of truth for copy, links, ventures, services, principles,
 *  project placeholders and stats. Edit here; components stay unchanged.
 *
 *  Values marked PLACEHOLDER must be replaced with verified data before launch.
 *  Do not invent stats, clients, testimonials or logos.
 * ============================================================================
 */

export type NavItem = { label: string; href: string };

export type Venture = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  emblem: string;
  accent: string;
  href: string;
};

export type Service = {
  id: string;
  title: string;
  icon: string;
  tags: string[];
};

export type Principle = { title: string; description: string };

export type Project = {
  id: string;
  /** PLACEHOLDER — replace with real project title */
  title: string;
  /** PLACEHOLDER — e.g. industry vertical */
  industry: string;
  /** PLACEHOLDER — e.g. service line */
  service: string;
  /** Optional cover image in /public */
  image?: string;
  href?: string;
  placeholder?: boolean;
};

export type Stat = {
  value: string;
  label: string;
  caption?: string;
  placeholder?: boolean;
  /** When true (or value is non-numeric), skip count-up and just reveal. */
  nonNumeric?: boolean;
};

export const company = {
  name: "Astranova",
  legalName: "Astranova Digital Services Pvt. Ltd.",
  tagline: "One company. Multiple possibilities.",
  brandLine: "People · Brands · Technology · Impact",
  description:
    "Astranova brings together brands, technology, creativity, media and experiences to turn ambitious ideas into meaningful impact.",
  /** Optional brand film URL. When null, the hero play button scrolls to Why Astranova. */
  brandFilmUrl: null as string | null,
};

export const navigation: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#ventures" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  titleLine1: "One Company.",
  titleLine2: "Multiple Possibilities.",
  copy: company.description,
  primaryCta: { label: "Explore our ventures", href: "#ventures" },
  secondaryCta: { label: "About Astranova", href: "#about" },
};

export const venturesSection = {
  eyebrow: "Our business ecosystem",
  titleLine1: "A family of ventures",
  titleLine2: "for a bolder tomorrow.",
  copy:
    "Distinct brands. A shared vision. Astranova brings together technology, creativity, media, growth and experiences to build businesses with greater possibilities.",
  cta: { label: "Explore all ventures", href: "#ventures" },
};

export const ventures: Venture[] = [
  {
    id: "astraconnect",
    name: "AstraConnect",
    category: "AI Products & Automation",
    description: "Intelligent products and automation for a smarter, more connected world.",
    image: "/astraconnect-card-visual.png",
    emblem: "/icon-ai-products.png",
    accent: "#19C6E6",
    href: "#contact",
  },
  {
    id: "beyond-frames",
    name: "Beyond Frames",
    category: "Creative & Filmmaking",
    description: "Compelling stories, powerful visuals and ideas that move audiences.",
    image: "/beyond-frames-card-visual.png",
    emblem: "/icon-creative-film.png",
    accent: "#F5A524",
    href: "#contact",
  },
  {
    id: "astra-media",
    name: "Astra Media",
    category: "Media & Content Networks",
    description: "Content, distribution and communities designed to inform, engage and grow.",
    image: "/astra-media-card-visual.png",
    emblem: "/icon-media-networks.png",
    accent: "#FF6F7D",
    href: "#contact",
  },
  {
    id: "astra-events",
    name: "Astra Events",
    category: "Events & Experiences",
    description: "Memorable live and digital experiences connecting people, brands and ideas.",
    image: "/astra-events-card-visual.png",
    emblem: "/icon-events-experiences.png",
    accent: "#8B5CF6",
    href: "#contact",
  },
];

export const servicesSection = {
  eyebrow: "What we do",
  titleLine1: "Ideas to Impact.",
  titleLine2: "End to End.",
  copy:
    "From strategy to execution, we bring together creativity, technology and operational excellence to build what's next.",
};

export const services: Service[] = [
  {
    id: "digital-growth",
    title: "Digital Growth",
    icon: "/icon-digital-growth.png",
    tags: ["Brands", "Audiences", "Revenue"],
  },
  {
    id: "ai-products",
    title: "AI Products",
    icon: "/icon-ai-products.png",
    tags: ["Automation", "Platforms", "Scale"],
  },
  {
    id: "creative-film",
    title: "Creative & Film",
    icon: "/icon-creative-film.png",
    tags: ["Stories", "Production", "Content"],
  },
  {
    id: "media-networks",
    title: "Media Networks",
    icon: "/icon-media-networks.png",
    tags: ["Distribution", "Communities", "Insights"],
  },
  {
    id: "events-experiences",
    title: "Events & Experiences",
    icon: "/icon-events-experiences.png",
    tags: ["Live", "Virtual", "Immersive"],
  },
];

export const whySection = {
  /** id="about" lives on this section so Header "About" lands here */
  eyebrow: "Why Astranova",
  titleLine1: "Different disciplines.",
  titleLine2: "One connected ecosystem.",
  /** Short brand statement for the left column — no claims or stats */
  brandStatement:
    "One parent company connecting digital growth, AI, creativity, media and experiences — so ideas move from strategy to scale as a single ecosystem.",
};

export const principles: Principle[] = [
  {
    title: "Strategy",
    description: "We connect business goals with executable growth.",
  },
  {
    title: "Technology",
    description: "We build scalable products, automation and AI capabilities.",
  },
  {
    title: "Creativity",
    description: "We turn ideas into experiences people remember.",
  },
  {
    title: "Execution",
    description: "We take ownership from concept through delivery.",
  },
];

export const workSection = {
  eyebrow: "Featured work",
  title: "Where ideas become impact.",
};

/** PLACEHOLDER project cards. Replace with real case studies before launch. */
export const projects: Project[] = [
  {
    id: "project-01",
    title: "Project / Case study",
    industry: "Industry",
    service: "Service",
    placeholder: true,
  },
  {
    id: "project-02",
    title: "Project / Case study",
    industry: "Industry",
    service: "Service",
    placeholder: true,
  },
  {
    id: "project-03",
    title: "Project / Case study",
    industry: "Industry",
    service: "Service",
    placeholder: true,
  },
  {
    id: "project-04",
    title: "Project / Case study",
    industry: "Industry",
    service: "Service",
    placeholder: true,
  },
];

export const impactSection = {
  eyebrow: "Our impact",
  titleLine1: "Growing a more",
  titleLine2: "connected tomorrow.",
};

/** PLACEHOLDER stats. Only "4 ventures" is factual. */
export const stats: Stat[] = [
  { value: "4", label: "Ventures" },
  { value: "5", label: "Capabilities" },
  { value: "1", label: "Connected Ecosystem" },
  { value: "END-TO-END", label: "Execution", nonNumeric: true },
];

export const cta = {
  title: "Build what's next.",
  copy:
    "Whether you're growing a brand, building a product, creating content or designing an experience, Astranova brings the capabilities together.",
  primary: { label: "Start a conversation", href: "mailto:hello@astranova.example" },
  secondary: { label: "Explore our ventures", href: "#ventures" },
  /** PLACEHOLDER email — used by the contact form mailto + primary CTA */
  email: "hello@astranova.example",
  formSuccess: "Thanks — your message is ready in your email app.",
};

export const footer = {
  statementLine1: "One family.",
  statementLine2: "Multiple possibilities.",
  newsletter: {
    title: "Stay in the loop",
    copy: "Occasional updates on our ventures, work and ideas.",
  },
  /** PLACEHOLDER social links */
  social: [
    { label: "LinkedIn", href: "#", icon: "linkedin" as const },
    { label: "YouTube", href: "#", icon: "youtube" as const },
    { label: "Instagram", href: "#", icon: "instagram" as const },
    { label: "X", href: "#", icon: "x" as const },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
  companyLinks: [
    { label: "About", href: "#about" },
    { label: "Ventures", href: "#ventures" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
};
