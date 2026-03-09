import type { Metadata } from "next";
import "./styles/globals.css";


const SITE_URL = "https://www.worldandtech.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/wt1.jpg`; 

export const metadata: Metadata = {
  title: "THE WORLD AND ITS TECHNOLOGY",
  description: "Real-time African news on AgriTech • FinTech • HealthTech & MineTech — built in ZA",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "THE WORLD AND ITS TECHNOLOGY",
    description: "Real-time African news on AgriTech • FinTech • HealthTech & MineTech — built in ZA",
    url: SITE_URL,
    siteName: "WorldAndTech",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "THE WORLD AND ITS TECHNOLOGY - African Innovation News",
        type: "image/jpeg",          
      },
    ],
    locale: "en_ZA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "THE WORLD AND ITS TECHNOLOGY",
    description: "Real-time African news on AgriTech • FinTech • HealthTech & MineTech — built in ZA",
    images: [DEFAULT_OG_IMAGE],       // ← now uses your local wt1.jpg
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}