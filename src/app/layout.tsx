import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Javanslem — Senior Software Developer",
  description:
    "Expert Software Developer and Designer specializing in Next.js, React, and TypeScript. Over 5 years of experience building scalable, Awwwards-worthy web applications.",
  keywords: [
    "Software Developer",
    "Web Designer",
    "Next.js Developer",
    "TypeScript Expert",
    "Full-Stack Engineer",
    "Anslem Nnakwe",
    "Javanslem",
    "Portfolio",
  ],
  authors: [{ name: "Anslem Nnakwe", url: "https://javanslem.dev" }],
  creator: "Anslem Nnakwe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://javanslem.dev",
    title: "Javanslem — Senior Software Developer",
    description: "Expert Software Developer and Designer building scalable, high-performance web applications.",
    siteName: "Javanslem Portfolio",
    images: [
      {
        url: "/javanslem_logo.png",
        width: 1200,
        height: 630,
        alt: "Javanslem - Senior Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Javanslem — Senior Software Developer",
    description: "Expert Software Developer building scalable, high-performance web applications.",
    images: ["/javanslem_logo.png"],
    creator: "@ansman58",
  },
  icons: {
    icon: "/favicon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f5f5f5] text-black`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
