"use client";

import { Copy, Palette, Printer, ScanLine, BookCopy, Package, Clock, CheckCircle2, Phone, MessageCircle } from "lucide-react";

const SERVICES = [
  {
    icon: Copy,
    title: "Photocopying & Jumbo Xerox",
    desc: "Black & white and large-format Xerox copies at the most competitive student and commercial rates in Kadapa.",
    badge: "Most Popular",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    icon: Palette,
    title: "High-Resolution Colour Print",
    desc: "Vivid, high-density colour printing for certificates, project reports, architecture maps, and presentation sheets.",
    badge: "Studio Quality",
    badgeColor: "bg-amber-100 text-amber-700",
  },
  {
    icon: Printer,
    title: "Bulk & Institutional Printing",
    desc: "High-volume job handling for coaching test series, institute notes, school worksheets, and office records.",
    badge: "Fast Turnaround",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: ScanLine,
    title: "Document Scanning & Archival",
    desc: "High-DPI multi-page scanning, PDF creation, and digital submission services for government examinations.",
    badge: "Instant PDF",
    badgeColor: "bg-cyan-100 text-cyan-700",
  },
  {
    icon: BookCopy,
    title: "Spiral, Thermal & Book Binding",
    desc: "Neat spiral binding, hard-cover, and soft-cover thesis and project binding crafted for durability and aesthetics.",
    badge: "Express Finish",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    icon: Package,
    title: "Academic Stationery & Paper",
    desc: "A4 reams, exam pads, ball pens, highlighters, folders, and essential stationery available on-site.",
    badge: "All Essentials",
    badgeColor: "bg-slate-100 text-slate-700",
  },
];

export default function XeroxSection() {
  return (
    <section id="xerox" className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            🖨️ 24-Hour Print & Xerox Centre
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Kadapa's <span className="text-[#F59E0B]">Most Trusted</span> Print Shop
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Rated 4.9★ with over 1,384+ customer reviews on Justdial — appreciated for ultra-fast turnaround, superior paper quality, and honest pricing at RIMS Road near Kadapa Railway Station.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs sm:text-sm font-bold shadow-xs">
            <Clock size={15} className="text-emerald-600" />
            <span>Open 24 Hours, 7 Days a Week for Urgent Needs</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mb-16">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 hover:border-[#1E3A8A]/40 hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-[#F59E0B]/10 flex items-center justify-center group-hover:bg-[#F59E0B]/20 group-hover:scale-105 transition-all">
                    <service.icon size={24} className="text-[#F59E0B]" />
                  </div>
                  {service.badge && (
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-2 group-hover:text-[#1E3A8A] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              <a
                href={`https://wa.me/919963095103?text=Hi%2C%20I%20need%20details%20for%20${encodeURIComponent(service.title)}%20at%20Ashok%20Yadav%20Xerox.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:border-[#F59E0B] hover:text-[#F59E0B] hover:bg-amber-50/50 transition-all"
              >
                <MessageCircle size={14} />
                <span>Enquire Price & Timing</span>
              </a>
            </div>
          ))}
        </div>

        {/* Why Choose Us & Instant Order Banner */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Key Advantages */}
            <div className="lg:col-span-7">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Why Students & Offices Prefer Ashok Yadav Xerox
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "Unbeatable pricing — best rates in Kadapa",
                  "Fast counter service with zero delays",
                  "High contrast, crisp text & sharp images",
                  "Large volume test series & notes handling",
                  "Experienced and polite service staff",
                  "Competitive exam study materials in stock",
                  "Minutes from Kadapa Railway Station",
                  "Open 24 hours round the clock",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 size={16} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-xs sm:text-sm font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Order Callout Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-lg">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 block">
                  Quick Service Desk
                </span>
                <h4 className="text-xl sm:text-2xl font-black mb-3">
                  Have an urgent or bulk print requirement?
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Send your PDF documents directly on WhatsApp or call our counter team. We keep your prints ready for hassle-free pickup!
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="tel:+919963095103"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white text-slate-900 font-extrabold text-sm hover:bg-slate-100 transition-colors min-h-[48px]"
                >
                  <Phone size={16} className="text-[#1E3A8A]" />
                  <span>Call Counter: 9963095103</span>
                </a>
                <a
                  href="https://wa.me/919963095103?text=Hi%2C%20I%20have%20a%20print%20order.%20I%20am%20sending%20the%20files%20now."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25D366] text-white font-extrabold text-sm hover:bg-[#128C7E] transition-colors min-h-[48px]"
                >
                  <MessageCircle size={16} />
                  <span>Send Files on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
