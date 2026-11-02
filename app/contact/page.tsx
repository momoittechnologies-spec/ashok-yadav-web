import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import { Phone, MessageCircle, MapPin, Clock, Mail, Navigation, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Inquiries | Ashok Yadav Study Hall Kadapa",
  description:
    "Get in touch with Dr. Ashok Yadav, MBA. Direct contact numbers, WhatsApp chat, official address at Industrial Estate RIMS Road, operating hours, and inquiry form for Kadapa students.",
  alternates: {
    canonical: "https://ashok-yadav-web.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Ashok Yadav Study Hall & Education Hub | Kadapa",
    description:
      "Direct line: +91 99630 95103. Quick response for study desk reservations, print orders, and distance education admissions.",
    url: "https://ashok-yadav-web.vercel.app/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200/80">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <Breadcrumb items={[{ label: "Contact Us & Support" }]} />
          <div className="mt-2 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-[#1E3A8A] text-xs font-bold uppercase tracking-wider mb-3">
              <Phone size={13} /> Direct Counter & Admissions Line
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Get in Touch with <span className="text-[#1E3A8A]">Ashok Yadav Hub</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Have questions about study desk seat availability, bulk Xerox orders, AU/ANU distance degree admissions, or digital studio reservations? We are here to assist you daily.
            </p>
          </div>
        </div>
      </div>

      {/* Main Contact Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
            {/* Left Column: Direct Info Cards (6 cols) */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              {/* Leadership Card */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1E3A8A] flex items-center justify-center font-black">
                    AY
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">Dr. Ashok Yadav, MBA</h3>
                    <p className="text-xs text-slate-500">Proprietor & Educational Consultant</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Leading Kadapa's premier educational center with over 6+ years of dedicated service in competitive exam infrastructure and distance education guidance.
                </p>
              </div>

              {/* Contact Actions Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:+919963095103"
                  className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#1E3A8A] shadow-xs hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1E3A8A]/10 text-[#1E3A8A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Direct Phone Call</div>
                    <div className="text-sm font-bold text-slate-900">+91 99630 95103</div>
                    <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">Quick Response</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919963095103?text=Hi%20Dr.%20Ashok%20Yadav%2C%20I%20have%20an%20inquiry%20regarding%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#25D366] shadow-xs hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">WhatsApp Chat</div>
                    <div className="text-sm font-bold text-slate-900">9963095103</div>
                    <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">Active Online</div>
                  </div>
                </a>
              </div>

              {/* Address & Hours */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm mb-1">Center Address</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      D.No. 43, Industrial Estate, 281-1-8, RIMS Road, Railway Colony, Kadapa – 516004, Andhra Pradesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                  <Clock size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm mb-1">Operating Hours</h4>
                    <div className="text-xs sm:text-sm text-slate-600 space-y-1">
                      <div>Study Hall: <strong className="text-slate-800">5:00 AM – 11:00 PM (Daily)</strong></div>
                      <div>Xerox & Print: <strong className="text-emerald-700">Open 24 Hours Daily</strong></div>
                      <div>Distance Edu & Studio: <strong className="text-blue-700">9:00 AM – 9:00 PM</strong></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form (6 cols) */}
            <div className="lg:col-span-6">
              <ContactForm />
            </div>
          </div>

          {/* Map Embed Section */}
          <div className="mt-14 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Interactive Map Location
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Located near RIMS Hospital & Kadapa Railway Station
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Ashok+Yadav+Study+Hall+Kadapa+Industrial+Estate+RIMS+Road"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1E3A8A] text-white font-bold text-xs hover:bg-[#2563EB] transition-colors"
              >
                <Navigation size={14} />
                <span>Open in Google Maps</span>
              </a>
            </div>

            <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200">
              <iframe
                title="Ashok Yadav Kadapa Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7!2d78.8217!3d14.4673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI4JzAyLjMiTiA3OMKwNDknMTguMSJF!5e0!3m2!1sen!2sin!4v1695000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
