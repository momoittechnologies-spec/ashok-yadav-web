import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import XeroxSection from "@/components/XeroxSection";
import { Printer, Clock, FileText, Phone, MessageCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "24-Hour Xerox, Colour Printing & Spiral Binding in Kadapa",
  description:
    "Open 24 hours daily. High-speed photocopying, colour prints, jumbo format, thesis binding, and competitive exam materials at lowest rates in Kadapa near RIMS Road. Call +91 99630 95103.",
  alternates: {
    canonical: "https://ashok-yadav-web.vercel.app/xerox-printing",
  },
  openGraph: {
    title: "24-Hour Xerox & Printing Services in Kadapa | Ashok Yadav",
    description:
      "Kadapa's favorite print shop rated 4.9★ with 1,384+ reviews. Open 24/7 at Industrial Estate, RIMS Road.",
    url: "https://ashok-yadav-web.vercel.app/xerox-printing",
  },
};

const XEROX_FAQS = [
  {
    q: "Are you really open 24 hours for Xerox and printing?",
    a: "Yes! Our Xerox and document printing counters operate round the clock, 24 hours a day, 7 days a week, so you can get urgent printouts, hall tickets, or emergency copies at any hour.",
  },
  {
    q: "Can I send my documents on WhatsApp and collect them later?",
    a: "Yes. Simply send your PDF or Word document on WhatsApp to +91 99630 95103. Our team will print and bind your pages so they are ready for instant counter pickup.",
  },
  {
    q: "Do you offer bulk printing discounts for coaching institutes and colleges?",
    a: "Yes, we specialize in large volume printing for test series, question banks, and college assignments at the most competitive rates in Kadapa.",
  },
  {
    q: "What types of book and project binding do you do?",
    a: "We provide spiral binding, thermal binding, soft-cover, and hard-cover thesis binding with gold-foil letter options for academic submissions.",
  },
];

export default function XeroxPrintingPage() {
  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200/80">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <Breadcrumb items={[{ label: "Xerox & Printing Services" }]} />
          <div className="mt-2 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Clock size={13} /> Open 24 Hours Daily
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Kadapa's Premier <span className="text-[#F59E0B]">24-Hour Xerox</span> & Print Centre
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Fast, high-density photocopying, vivid colour laser prints, and professional spiral binding. Trusted by over 1,384+ verified students and office customers.
            </p>
          </div>
        </div>
      </div>

      {/* Main Xerox Section */}
      <XeroxSection />

      {/* FAQs */}
      <section className="py-16 lg:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle size={15} /> Print Service FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About Xerox & Printing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {XEROX_FAQS.map((faq) => (
              <div key={faq.q} className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs">
                <h3 className="font-extrabold text-slate-900 text-base mb-2">
                  {faq.q}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Print Order Box */}
          <div className="mt-12 text-center bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-8 sm:p-10 text-white shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black mb-3">
              Need Prints Delivered or Ready for Pickup?
            </h3>
            <p className="text-amber-100 text-sm sm:text-base max-w-xl mx-auto mb-6">
              Simply message us your files on WhatsApp. We will print them with zero waiting time at the counter!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+919963095103"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 text-white font-extrabold text-sm hover:bg-slate-800 transition-colors shadow-md min-h-[48px]"
              >
                <Phone size={16} />
                <span>Call Counter: 9963095103</span>
              </a>
              <a
                href="https://wa.me/919963095103?text=Hi%2C%20I%20have%20documents%20to%20print.%20Please%20let%20me%20know%20how%20to%20send."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#25D366] text-white font-extrabold text-sm hover:bg-[#128C7E] transition-colors shadow-md min-h-[48px]"
              >
                <MessageCircle size={16} />
                <span>Send PDF on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
