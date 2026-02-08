import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer, StickyCall } from "@/components";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sayfix",
  description: "From Homes to Commercial Properties — Sayfix Handles It All",
  keywords: "cleaning services, deep cleaning, water tank cleaning, pest control, waterproofing, painting, home services, commercial cleaning, India",
  authors: [{ name: "Sayfix" }],
  openGraph: {
    title: "From Homes to Commercial Properties — Sayfix Handles It All",
    description: "Reliable, trained professionals delivering spotless spaces every time. 20,000+ homes serviced.",
    url: "https://sayfix.com",
    siteName: "Sayfix",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayfix - Professional Cleaning & Home Services",
    description: "Reliable, trained professionals delivering spotless spaces every time.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        <StickyCall />
      </body>
    </html>
  );
}
