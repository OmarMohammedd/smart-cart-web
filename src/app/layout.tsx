import localFont from "next/font/local";
import "./globals.css";

import Navbar from "./components/Nav";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

import type { Metadata, Viewport } from "next";

const APP_NAME = "smart cart";
const APP_DEFAULT_TITLE = "smart cart";
const APP_TITLE_TEMPLATE = "smart cart";
const APP_DESCRIPTION = "smart cart";

export const metadata: Metadata = {
  manifest:"/manifest.json",
  title: "smart cart",
  description: "smart cart",
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
