import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AmbientBackground from "@/components/hero/AmbientBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/CursorGlow";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import ScrollProgress from "@/components/ScrollProgress";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nodelith.org"), 
  title: {
    default: "Nodelith — Automated Lead Capture for Local Businesses",
    template: "%s | Nodelith",
  },
  description:
    "Nodelith helps dental clinics, med spas, and local service businesses stop losing leads with missed-call recovery, automated booking, and follow-up automation.",
  openGraph: {
    siteName: "Nodelith",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {" "}
        <SmoothScrollProvider>
          <ScrollProgress />
          <CursorGlow />
          <AmbientBackground />
          {/* <AmbientBackground /> */}
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
