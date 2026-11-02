import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import DigitalStudio from "@/components/DigitalStudio";
import { Video, Sparkles, Monitor, Phone, MessageCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Smart Digital Classroom Studio Rental in Kadapa (₹499/hr)",
  description:
    "Record professional 4K lectures and YouTube videos with large interactive smart board, broadcast lighting, and wireless studio mics. Hourly slots at ₹499/hr in Kadapa. Call +91 99630 95103.",
  alternates: {
    canonical: "https://ashok-yadav-web.vercel.app/digital-studio",
  },
  openGraph: {
    title: "Digital Recording Studio Rental in Kadapa (₹499/hr) | Ashok Yadav",
    description:
      "Interactive smart panel recording studio for teachers, faculty, and YouTube creators in Kadapa. Affordable hourly rental.",
    url: "https://ashok-yadav-web.vercel.app/digital-studio",
  },
};

const STUDIO_FAQS = [
  {
    q: "How much does it cost to record in Ashok Yadav Digital Studio?",
    a: "The rental rate is just ₹499 per hour. This includes full access to the interactive smart board, 4K camera setup, studio lights, wireless microphones, and high-speed internet.",
  },
  {
    q: "Do I need to bring any technical recording equipment with me?",
    a: "No equipment is needed! All cameras, lighting, digital panels, tripods, and wireless microphones are already configured in our studio. You just need to bring your lesson plan, PPT slides, or PDF notes on a pen drive or email.",
  },
  {
    q: "Can I live-stream on YouTube or conduct Zoom / Google Meet classes?",
    a: "Yes! We have high-speed dedicated fiber broadband specifically configured for buffer-free live broadcasts, webinars, and live interactive student tutoring batches.",
  },
  {
    q: "How do I receive my recorded video files?",
    a: "Immediately upon finishing your lecture recording, we transfer the high-resolution MP4 video files directly to your USB pen drive, external hard drive, or Google Drive folder.",
  },
];

export default function DigitalStudioPage() {
  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <Breadcrumb items={[{ label: "Smart Digital Studio" }]} />
          <div className="mt-2 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles size={13} /> ₹499 / Hour Affordable Rental
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Smart Digital Classroom & <span className="text-[#F59E0B]">4K Recording Studio</span> in Kadapa
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              మీ బోధనకు... మా డిజిటల్ స్టూడియో! Modern interactive touchscreen smart board, broadcast lighting, and crisp wireless microphones for tutors, faculty, and YouTube creators.
            </p>
          </div>
        </div>
      </div>

      {/* Main Digital Studio Component */}
      <DigitalStudio />

      {/* FAQs */}
      <section className="py-16 lg:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle size={15} /> Studio Questions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Digital Studio Booking FAQ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {STUDIO_FAQS.map((faq) => (
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

          {/* Bottom Studio Reservation Box */}
          <div className="mt-12 text-center bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black mb-3">
              Book Your Studio Slot for Today or Tomorrow
            </h3>
            <p className="text-purple-200 text-sm sm:text-base max-w-xl mx-auto mb-6">
              Hourly slots are assigned on a prior appointment basis. Message us on WhatsApp to check slot timings and reserve your recording hour.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+919963095103"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-slate-900 font-extrabold text-sm hover:bg-slate-100 transition-colors shadow-md min-h-[48px]"
              >
                <Phone size={16} />
                <span>Call Studio: 9963095103</span>
              </a>
              <a
                href="https://wa.me/919963095103?text=Hi%2C%20I%20want%20to%20book%20a%20slot%20at%20Ashok%20Yadav%20Digital%20Class%20Room%20Studio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#25D366] text-white font-extrabold text-sm hover:bg-[#128C7E] transition-colors shadow-md min-h-[48px]"
              >
                <MessageCircle size={16} />
                <span>Book Slot on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
