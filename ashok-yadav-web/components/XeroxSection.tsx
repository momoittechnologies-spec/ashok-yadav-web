"use client";

import { Copy, Palette, Printer, ScanLine, BookCopy, Package, Clock, CheckCircle2 } from "lucide-react";

const SERVICES = [
  {
    icon: Copy,
    title: "Photocopying",
    desc: "Black & white and jumbo-format Xerox copies at the most competitive prices in Kadapa.",
    badge: "Most Popular",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    icon: Palette,
    title: "Colour Xerox & Printing",
    desc: "Vivid, high-quality colour copies for documents, certificates, maps and study materials.",
    badge: "High Quality",
    badgeColor: "bg-amber-100 text-amber-700",
  },
  {
    icon: Printer,
    title: "Bulk / Large-Scale Printing",
    desc: "Large orders handled efficiently. Ideal for test series, notes & office documents.",
    badge: "Fast Turnaround",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: ScanLine,
    title: "Scanning & Document Services",
    desc: "High-resolution scanning for official documents, applications and certificates.",
    badge: "",
    badgeColor: "",
  },
  {
    icon: BookCopy,
    title: "Spiral & Book Binding",
    desc: "Spiral binding, soft-cover and book binding for notes, projects and reports.",
    badge: "Fast",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    icon: Package,
    title: "Stationery & Books",
    desc: "Paper, pens, notebooks and academic stationery available at the shop.",
    badge: "",
    badgeColor: "",
  },
];

export default function XeroxSection() {
  return (
    <section id="xerox" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            🖨️ Xerox & Print Centre
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Kadapa's{" "}
            <span className="text-[#F59E0B]">Most Trusted</span> Print Shop
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            4.9★ rated with over 1,384 reviews on Justdial — customers love our speed,
            quality, and unbeatable prices. Located near Kadapa Railway Station, RIMS Road.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-500">
            <Clock size={14} className="text-[#1E3A8A]" />
            <span>
              Xerox Centre:{" "}
              <strong className="text-slate-700">Open 24 Hours, 7 Days</strong>
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#1E3A8A]/30 hover:shadow-lg transition-all group"
            >
              {service.badge && (
                <span
                  className={`absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full ${service.badgeColor}`}
                >
                  {service.badge}
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center mb-4 group-hover:bg-[#F59E0B]/20 transition-colors">
                <service.icon size={22} className="text-[#F59E0B]" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
            Why Students & Offices Choose Ashok Yadav Xerox
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Competitive pricing — lowest in the area",
              "Fast, speedy service with no long waits",
              "Superior print & Xerox quality",
              "Bulk orders handled with care",
              "Friendly, helpful counter staff",
              "Study materials for exam aspirants ready",
              "Near Kadapa Railway Station & RIMS Road",
              "Open 24 hours for urgent print needs",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 text-sm">{point}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#quickprint"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("quickprint")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#F59E0B] text-white font-bold text-sm hover:bg-[#D97706] transition-colors min-h-[48px]"
            >
              ⚡ Use QuickPrint Calculator
            </a>
            <a
              href="https://wa.me/919963095103?text=Hi%2C%20I%20need%20Xerox%20%2F%20printing%20services.%20Please%20help%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border-2 border-[#25D366] text-[#25D366] font-bold text-sm hover:bg-[#25D366] hover:text-white transition-colors min-h-[48px]"
            >
              💬 WhatsApp Print Order
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
