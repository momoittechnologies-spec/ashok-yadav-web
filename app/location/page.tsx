import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Location from "@/components/Location";
import { MapPin, Navigation, Train, Bus, Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Location & Directions | Ashok Yadav Study Hall Kadapa",
  description:
    "Official location of Ashok Yadav Study Hall & 24-Hour Xerox: D.No. 43, Industrial Estate, RIMS Road, Kadapa – 516004. ~1.5 km from Kadapa Railway Station. Open Google Maps for directions.",
  alternates: {
    canonical: "https://ashok-yadav-web.vercel.app/location",
  },
  openGraph: {
    title: "Visit Ashok Yadav Study Hall & Xerox in Kadapa | Location & Map",
    description:
      "Easy access near RIMS Hospital and Kadapa Railway Station at Industrial Estate. Turn-by-turn GPS route and contact details.",
    url: "https://ashok-yadav-web.vercel.app/location",
  },
};

export default function LocationPage() {
  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200/80">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <Breadcrumb items={[{ label: "Location & Directions" }]} />
          <div className="mt-2 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin size={13} /> Industrial Estate, RIMS Road
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              How to Reach <span className="text-[#1E3A8A]">Ashok Yadav Hub</span> in Kadapa
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Centrally located on RIMS Road, just minutes from Cuddapah Railway Station with direct road connectivity from all key areas of Kadapa.
            </p>
          </div>
        </div>
      </div>

      {/* Main Location & Maps Component */}
      <Location />

      {/* Transit Guidance */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Transit & Commute Information
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              Simple ways to visit our center from different parts of Kadapa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 text-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#1E3A8A] flex items-center justify-center mx-auto mb-4">
                <Train size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">From Railway Station</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Just 1.5 km (~5 mins by auto or two-wheeler) from Kadapa Railway Station towards RIMS Road.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-4">
                <Bus size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">From RTC Bus Stand</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Around 3.5 km from Kadapa Old & New RTC Bus Stands. Frequent sharing autos available towards RIMS hospital.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">From RIMS Hospital</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Located right near the Industrial Estate entry arch on the main RIMS Road. Look for the Ashok Yadav signboard!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
