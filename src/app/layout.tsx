import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { company, office } from "@/content/site";
import { siteUrl } from "@/lib/site-url";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap", weight: ["300", "400", "500", "600", "700"] });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  // Canonical base: NEXT_PUBLIC_SITE_URL → Netlify URL → localhost (see src/lib/site-url.ts).
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  applicationName: company.name,
  keywords: [
    "Astranova",
    "Astranova Digital Services",
    "AstraConnect",
    "Beyond Frames",
    "Astra Media",
    "Astra Events",
    "digital growth",
    "AI products",
    "creative and film",
    "media networks",
    "events and experiences",
  ],
  authors: [{ name: company.legalName }],
  creator: company.legalName,
  publisher: company.legalName,
  alternates: { canonical: "/" },
  formatDetection: { telephone: false, email: false, address: false },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/astranova-favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/astranova-favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/astranova-favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/astranova-app-icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  // OG/Twitter images come from src/app/opengraph-image.jpg + twitter-image.jpg (1200×630).
  openGraph: {
    title: `${company.name} | ${company.tagline}`,
    description: company.description,
    url: "/",
    siteName: company.legalName,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | ${company.tagline}`,
    description: company.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#fbfaf7",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable}`}>
      <body className="min-h-screen overflow-x-clip">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-navy-900 focus:shadow-lg"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: company.legalName,
              alternateName: company.name,
              url: siteUrl,
              logo: `${siteUrl}/astranova-logo-primary.png`,
              address: {
                "@type": "PostalAddress",
                streetAddress: office.street,
                addressLocality: `${office.locality}, ${office.city}`,
                addressRegion: office.region,
                postalCode: office.postalCode,
                addressCountry: office.country,
              },
            }).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
