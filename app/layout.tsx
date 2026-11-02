import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashok-yadav-web.vercel.app"),
  title: {
    default: "Ashok Yadav Study Hall, Xerox & Distance Education | Kadapa",
    template: "%s | Ashok Yadav Kadapa",
  },
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
    "sri ashok yadav kadapa",
  ],
  authors: [{ name: "Dr. Ashok Yadav, MBA" }],
  creator: "Momo IT Technologies",
  publisher: "Ashok Yadav Study Hall & Xerox",
  openGraph: {
    title: "Ashok Yadav Study Hall, Xerox & Distance Education | Kadapa",
    description:
      "Study Hall (5 AM–11 PM), 24-Hour Xerox, Distance Education Admissions (Andhra University & ANU), and Digital Recording Studio (₹499/hr) in Kadapa.",
    locale: "en_IN",
    type: "website",
    url: "https://ashok-yadav-web.vercel.app",
    siteName: "Ashok Yadav Education Hub Kadapa",
  },
  alternates: {
    canonical: "https://ashok-yadav-web.vercel.app",
  },
};

export const viewport: Viewport = {
  themeColor: "#1E3A8A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "name": "Ashok Yadav Study Hall, Xerox & Distance Education",
  "alternateName": "శ్రీ అశోక్ యాదవ్ స్టడీ హాల్ & జిరాక్స్",
  "url": "https://ashok-yadav-web.vercel.app",
  "logo": "https://ashok-yadav-web.vercel.app/images/sri-ashok-yadav-telugu.png",
  "image": "https://ashok-yadav-web.vercel.app/images/dr-ashok-yadav-admissions.png",
  "description":
    "Kadapa's premier educational center headed by Dr. Ashok Yadav, MBA. Offering 5 AM–11 PM AC study halls, 24-hour Xerox & large-scale printing, Andhra University & Acharya Nagarjuna University Distance Education admissions, and smart digital studio rental.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "D.No. 43, Industrial Estate, 281-1-8, RIMS Road, Railway Colony",
    "addressLocality": "Kadapa",
    "addressRegion": "Andhra Pradesh",
    "postalCode": "516004",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 14.4673,
    "longitude": 78.8217,
  },
  "telephone": "+919963095103",
  "founder": {
    "@type": "Person",
    "name": "Dr. Ashok Yadav, MBA",
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "05:00",
      "closes": "23:00",
    },
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.95",
    "bestRating": "5",
    "reviewCount": "1476",
  },
  "priceRange": "₹",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-white text-slate-900 flex flex-col">
        <Navbar />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
