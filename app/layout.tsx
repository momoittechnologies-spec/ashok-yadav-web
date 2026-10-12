import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashok Yadav Study Hall, Xerox & Distance Education | Kadapa",
  description:
    "Kadapa's premier educational center headed by Dr. Ashok Yadav, MBA. Study hall (5 AM–11 PM), 24-Hour Xerox & printing, Andhra University & Acharya Nagarjuna University Distance Education (C.LI.SC, B.LI.SC, Degree, PG), and Smart Digital Studio rental (₹499/hr) at Industrial Estate, RIMS Road. Call +91 99630 95103.",
  keywords: [
    "ashok yadav study hall",
    "ashok yadav xerox",
    "ashok yadav distance education",
    "dr ashok yadav kadapa",
    "study hall kadapa",
    "reading room kadapa",
    "xerox kadapa rims road",
    "andhra university distance education kadapa",
    "clisc library course kadapa",
    "blisc distance education kadapa",
    "digital classroom studio kadapa",
    "recording studio kadapa",
    "best study hall in kadapa",
  ],
  openGraph: {
    title: "Ashok Yadav Study Hall, Xerox & Distance Education | Kadapa",
    description:
      "Study Hall (5 AM–11 PM), 24-Hour Xerox, Distance Education Admissions (Andhra University & ANU), and Digital Recording Studio (₹499/hr) in Kadapa.",
    locale: "en_IN",
    type: "website",
    url: "https://ashok-yadav-web.vercel.app",
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
