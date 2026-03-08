import React from "react";
import type { Metadata } from "next";
import { Ubuntu_Sans, Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TargetCursor from "@/components/ui/TargetCursor";
import ParticlesBackground from "@/components/ui/ParticlesBackground";

const ubuntuSans = Ubuntu_Sans({
  subsets: ["latin"],
  variable: "--font-ubuntu-sans",
  weight: ["400", "500", "700"],
});
const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  variable: "--font-ubuntu-mono",
  weight: ["400", "700"],
});

const variableFont = {
  variable: "--font-variable",
  className: "font-variable",
};

export const metadata: Metadata = {
  title: "Tanvish Reddy",
  metadataBase: new URL("https://tanvish.co.in/"),
  description: "Personal Portfolio of Tanvish Reddy",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  twitter: {
    card: "player",
    title: "Tanvish Reddy",
    description: "Personal Portfolio of Tanvish Reddy",
    creator: "@tanvish00",
    images: ["/logo.webp"],
  },
  openGraph: {
    title: "Tanvish Reddy",
    description: "Personal Portfolio of Tanvish Reddy",
    url: "https://tanvish.co.in/",
    siteName: "Tanvish Reddy"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:thumbnail" content="/logo.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${ubuntuSans.variable} ${ubuntuMono.variable} ${variableFont.variable} antialiased flex flex-col min-h-[100dvh] overflow-x-hidden relative`}
      >
        <ParticlesBackground />
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor
          parallaxOn
          hoverDuration={0.2}
        />
        <Header />
        <main className="flex-1 w-full flex flex-col relative overflow-x-hidden overflow-y-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
