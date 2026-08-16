import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Gelasio, Geist } from "next/font/google";
import { Sarina } from "next/font/google";
import Navbar from "./components/Navbar";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const gelasio = Gelasio({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const sarina = Sarina({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sarina",
});

export const metadata: Metadata = {
  title: "Pollen of Love",
  description: "Florist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${gelasio.className} ${sarina.variable} text-gray-900 min-h-screen`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
