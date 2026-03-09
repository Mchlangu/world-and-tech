import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "THE WORLD AND ITS TECHNOLOGY",
  description: "Real-time African news on AgriTech • FinTech • HealthTech & MineTech — built in ZA",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "THE WORLD AND ITS TECHNOLOGY",
    description: "Real-time African news on AgriTech • FinTech • HealthTech & MineTech — built in ZA",
    url: "https://www.worldandtech.com",
    siteName: "WorldAndTech",
    images: [
      {
        url: '/images/wt1.jpg',
        width: 1200,
        height: 630,
        alt: "THE WORLD AND ITS TECHNOLOGY - African Innovation News",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "THE WORLD AND ITS TECHNOLOGY",
    description: "Real-time African news on AgriTech • FinTech • HealthTech & MineTech — built in ZA",
    images: ["https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=630&fit=crop"],
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


