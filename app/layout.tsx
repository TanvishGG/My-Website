import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Pet from "@/components/Pet";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 backdrop-blur-sm">
          <Header />
          <div className="flex flex-col items-center bg-transparent justify-start w-screen h-screen">
            {children}
          </div>
        </div>
        <Pet />
      </body>
    </html>
  );
}
