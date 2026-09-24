import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashok Yadav Study Hall & Xerox | Kadapa, Andhra Pradesh",
  description:
    "Kadapa's premier study hall & xerox centre at Industrial Estate, RIMS Road. Dedicated study desks, AC reading rooms, high-speed Wi-Fi, photocopying, colour printing, spiral binding & stationery. Open 5 AM–11 PM daily. Call +91 99630 95103.",
  keywords: [
    "study hall kadapa",
    "reading room kadapa",
    "xerox kadapa",
    "ashok yadav study hall",
    "ashok yadav xerox",
    "best study hall in kadapa",
    "xerox near rims road kadapa",
    "spiral binding kadapa",
    "colour printing kadapa",
    "APPSC study material kadapa",
  ],
  openGraph: {
    title: "Ashok Yadav Study Hall & Xerox | Kadapa",
    description:
      "5★ rated study hall & xerox centre in Kadapa. Quiet AC desks, fast printing, binding & stationery.",
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1E3A8A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full bg-white text-slate-900">{children}</body>
    </html>
  );
}
