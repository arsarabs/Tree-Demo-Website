import type { Metadata } from "next";
import { Suspense } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { SocialProofToast } from "@/components/SocialProofToast";
import { PersonalizationProvider } from "@/lib/personalization";
import { DynamicHead } from "@/components/DynamicHead";
import { DynamicSchemas } from "@/components/DynamicSchemas";
import { BIZ } from "@/config/biz";
import "./globals.css";

const siteUrl = BIZ.url;

export const metadata: Metadata = {
  title: `${BIZ.name} | ${BIZ.city}, ${BIZ.state} — Free Estimates`,
  description: `${BIZ.city}'s top-rated crew. Same-day service, upfront pricing, and ${BIZ.jobsCompleted} jobs completed. Get a free quote in minutes.`,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: `${BIZ.name} | ${BIZ.city}, ${BIZ.state} — Free Estimates`,
    description: `${BIZ.city}'s top-rated crew. Same-day service, upfront pricing.`,
    url: siteUrl,
    siteName: BIZ.name,
    type: "website",
    images: [
      {
        url: `${siteUrl}/our-junk-removal-team.jpg`,
        width: 1600,
        height: 1067,
        alt: `${BIZ.name} crew — ${BIZ.city} ${BIZ.state}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BIZ.name} | ${BIZ.city}, ${BIZ.state} — Free Estimates`,
    description: `${BIZ.city}'s top-rated crew. Same-day service, upfront pricing.`,
    images: [`${siteUrl}/our-junk-removal-team.jpg`],
  },
  other: { "theme-color": "#0F2F24" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Self-hosted font preloads */}
        <link rel="preload" href="/fonts/DMSerifDisplay-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0F2F24" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased grain">
        <Suspense fallback={null}>
          <PersonalizationProvider>
            <DynamicHead />
            <DynamicSchemas />
            <Nav />
            {children}
            <Footer />
            <StickyMobileCTA />
            <SocialProofToast />
          </PersonalizationProvider>
        </Suspense>
      </body>
    </html>
  );
}
