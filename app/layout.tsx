import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "THE WORLD AND ITS TECHNOLOGY",
  description: "Mobile-first innovations shaping our connected world — built remotely from ZA",
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
