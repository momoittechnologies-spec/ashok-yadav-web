import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import StudyHall from "@/components/StudyHall";
import Link from "next/link";
import { Clock, ShieldCheck, MapPin, Phone, MessageCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Best AC Study Hall & Reading Rooms in Kadapa (5 AM – 11 PM)",
  description:
    "Join Kadapa's premier air-conditioned study hall with high-speed Wi-Fi, 100% power backup, and personal lockers. Early 5 AM opening for APPSC, UPSC, DSC & Police SI aspirants. Reserve your desk today.",
  alternates: {
    canonical: "https://ashok-yadav-web.vercel.app/study-hall",
  },
  openGraph: {
    title: "Best AC Study Hall & Reading Rooms in Kadapa | Ashok Yadav",
    description:
      "Comfortable, distraction-free reading rooms in Kadapa. Open 5 AM–11 PM daily with power backup & Wi-Fi at Industrial Estate, RIMS Road.",
    url: "https://ashok-yadav-web.vercel.app/study-hall",
  },
};

const FAQS = [
  {
    q: "What are the operating hours of Ashok Yadav Study Hall?",
    a: "We are open every day of the week, including Sundays and public holidays, from 5:00 AM in the morning to 11:00 PM at night.",
  },
  {
    q: "Is there uninterrupted power backup during power cuts?",
    a: "Yes, our study hall is equipped with heavy-duty inverter and generator backup ensuring zero disruption to your AC, lights, and charging points.",
  },
  {
    q: "Can I bring my laptop and study online?",
    a: "Absolutely. We offer high-speed unlimited Wi-Fi and individual charging sockets at each desk for laptops, tablets, and phones.",
  },
  {
    q: "Where is the study hall located in Kadapa?",
    a: "We are located at D.No. 43, Industrial Estate, 281-1-8, RIMS Road, Railway Colony, Kadapa — roughly 1.5 km from Kadapa Railway Station.",
  },
];

export default function StudyHallPage() {
  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-white">
      {/* Page Header / Breadcrumb Container */}
      <div className="bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <Breadcrumb items={[{ label: "Study Hall & Reading Rooms" }]} />
          <div className="mt-2 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-[#1E3A8A] text-xs font-bold uppercase tracking-wider mb-3">
              <Clock size={13} /> 5:00 AM – 11:00 PM Daily
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Quiet, Air-Conditioned <span className="text-[#1E3A8A]">Study Space</span> in Kadapa
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Designed specifically for competitive exam aspirants, university scholars, and working professionals who need dedicated focus, high-speed internet, and zero distractions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Study Hall Component Content */}
      <StudyHall />

      {/* Frequently Asked Questions */}
      <section className="py-16 lg:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#1E3A8A]/10 text-[#1E3A8A] rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle size={15} /> Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Study Hall Questions & Answers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs">
                <h3 className="font-extrabold text-slate-900 text-base mb-2">
                  {faq.q}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA Box */}
          <div className="mt-12 text-center bg-gradient-to-r from-blue-900 to-[#1E3A8A] rounded-3xl p-8 sm:p-10 text-white shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black mb-3">
              Ready to Reserve Your Study Desk?
            </h3>
            <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-6">
              Seats fill up fast during exam season. Contact Dr. Ashok Yadav directly to inquire about morning, evening, or full-day seat availability.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+919963095103"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#1E3A8A] font-extrabold text-sm hover:bg-slate-100 transition-colors shadow-md min-h-[48px]"
              >
                <Phone size={16} />
                <span>Call: 9963095103</span>
              </a>
              <a
                href="https://wa.me/919963095103?text=Hi%2C%20I%20want%20to%20visit%20Ashok%20Yadav%20Study%20Hall%20and%20check%20desk%20availability."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#25D366] text-white font-extrabold text-sm hover:bg-[#128C7E] transition-colors shadow-md min-h-[48px]"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Desk Booking</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
