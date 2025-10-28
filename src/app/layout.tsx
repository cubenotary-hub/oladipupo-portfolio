import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oladipupo - Software Developer Portfolio",
  description: "Professional portfolio showcasing software development projects, skills, and experience. Download resume and explore my work.",
  keywords: "software developer, web developer, portfolio, React, Next.js, JavaScript, TypeScript",
  authors: [{ name: "Oladipupo" }],
  openGraph: {
    title: "Oladipupo - Software Developer Portfolio",
    description: "Professional portfolio showcasing software development projects and skills",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
