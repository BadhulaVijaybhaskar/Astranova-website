import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { company } from "@/content/site";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap", weight: ["300", "400", "500", "600", "700"] });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to the live domain for correct social previews.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  applicationName: company.name,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/astranova-favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/astranova-favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/astranova-favicon-64.png", sizes: "64x64", type: "image/png" },
    ],
  },
  openGraph: {
    title: `${company.name} | ${company.tagline}`,
    description: company.description,
    siteName: company.legalName,
    images: [{ url: "/astranova-hero-desktop.png", width: 1672, height: 941, alt: "Astranova aurora skyline" }],
    type: "website",
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
      </body>
    </html>
  );
}
