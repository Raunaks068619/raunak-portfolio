import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import { profile, siteUrl } from "@/lib/content";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["italic"],
  weight: ["400", "500"],
  display: "swap",
});

const description =
  "Raunak Singh is a full-stack and AI engineer (SDE) at Fynd in Mumbai. He owns a clickstream interceptor that recovered 36k+ events, ships products like Bookmarx and Vordi, and reverse-engineers how AI coding agents store context.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Raunak Singh — Full-Stack & AI Engineer",
    template: "%s · Raunak Singh",
  },
  description,
  applicationName: "Raunak Singh",
  authors: [{ name: "Raunak Singh", url: siteUrl }],
  creator: "Raunak Singh",
  publisher: "Raunak Singh",
  keywords: [
    "Raunak Singh",
    "Raunak Singh developer",
    "Raunak Singh engineer",
    "Raunak Singh Fynd",
    "Raunak Singh full stack",
    "Raunak Singh AI",
    "full-stack engineer",
    "fullstack developer",
    "AI engineer",
    "software development engineer",
    "SDE",
    "Fynd",
    "Shopsense Retail Technologies",
    "Zenith Intelligence",
    "Next.js developer",
    "TypeScript engineer",
    "Mumbai software engineer",
    "Bookmarx",
    "Vordi",
    "AI agents",
    "Claude Code",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Raunak Singh",
    title: "Raunak Singh — Full-Stack & AI Engineer",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raunak Singh — Full-Stack & AI Engineer",
    description,
    creator: "@Raunak04535524",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f3fe" },
    { media: "(prefers-color-scheme: dark)", color: "#1a142b" },
  ],
  width: "device-width",
  initialScale: 1,
};

const personLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Raunak Singh",
      alternateName: "Raunak",
      url: siteUrl,
      image: `${siteUrl}/media/raunak.jpg`,
      jobTitle: "Software Development Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Fynd (Shopsense Retail Technologies)",
        url: "https://www.fynd.com",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressCountry: "IN",
      },
      email: profile.email,
      sameAs: [profile.links.github, profile.links.linkedin, profile.links.x],
      knowsAbout: [
        "Full-stack engineering",
        "AI engineering",
        "TypeScript",
        "Node.js",
        "Next.js",
        "Python",
        "Swift",
        "BigQuery",
        "Google Cloud Platform",
        "Multi-agent AI orchestration",
        "Retrieval-augmented generation",
        "Recommendation systems",
      ],
      description:
        "Full-stack and AI engineer at Fynd, building AI-native systems and shipping products like Bookmarx and Vordi.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Raunak Singh",
      description,
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${fraunces.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </body>
    </html>
  );
}
