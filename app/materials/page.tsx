import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Materials from "@/components/Materials";
import { BookOpen, FileText, ShoppingCart, Phone, MessageCircle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Competitive Exam Study Materials & Printed Notes in Kadapa",
  description:
    "Order printed study materials, syllabus digests, and previous 10-year question banks for APPSC Group 1, 2, 4, DSC, TET, AP Police SI, UPSC, and SSC in Kadapa. Spiral bound and ready for pickup.",
  alternates: {
    canonical: "https://ashok-yadav-web.vercel.app/materials",
  },
  openGraph: {
    title: "Printed Study Materials for Competitive Exams | Ashok Yadav Kadapa",
    description:
      "Spiral-bound notes, question banks, and material printing for APPSC, DSC, SI & UPSC aspirants in Kadapa.",
    url: "https://ashok-yadav-web.vercel.app/materials",
  },
};

export default function MaterialsPage() {
  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200/80">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <Breadcrumb items={[{ label: "Exam Study Materials" }]} />
          <div className="mt-2 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen size={13} /> Competitive Exam Resources
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Ready-to-Study <span className="text-[#10B981]">Exam Notes</span> & Question Banks
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              High-quality printed and spiral-bound materials for APPSC, DSC, AP Police, UPSC, and SSC exams. Save time by ordering your copies directly for instant counter pickup.
            </p>
          </div>
        </div>
      </div>

      {/* Main Materials Component */}
      <Materials />

      {/* How to Order Guide */}
      <section className="py-16 lg:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              How to Order Your Exam Materials in 3 Simple Steps
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              Fast, convenient, and prepared before you arrive at our center
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/80 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 font-black text-lg flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Select Your Exam</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Choose the subject or exam notes you require from the list above, or prepare your custom PDF.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/80 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-[#1E3A8A] font-black text-lg flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Message Us on WhatsApp</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Send your exam name or files to +91 99630 95103. Our team confirms page count and pickup timing.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/80 text-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 font-black text-lg flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Collect Bound Copy</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Walk in to our center at RIMS Road, Kadapa, and pick up your freshly printed, durable spiral book.
              </p>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="text-center">
            <a
              href="https://wa.me/919963095103?text=Hi%2C%20I%20want%20to%20order%20exam%20study%20materials%20from%20Ashok%20Yadav%20Xerox."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#25D366] text-white font-extrabold text-sm hover:bg-[#128C7E] transition-colors shadow-md min-h-[48px]"
            >
              <MessageCircle size={16} />
              <span>Order Material on WhatsApp Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
