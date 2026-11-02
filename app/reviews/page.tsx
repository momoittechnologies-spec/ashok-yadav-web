import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Reviews from "@/components/Reviews";
import { Star, MessageCircle, ExternalLink, ThumbsUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Reviews & Ratings (5.0★) | Ashok Yadav Study Hall Kadapa",
  description:
    "Read real reviews from government job aspirants and students in Kadapa. 5.0★ rated study hall on Justdial and 4.9★ rated Xerox and printing shop with 1,384+ customer testimonials.",
  alternates: {
    canonical: "https://ashok-yadav-web.vercel.app/reviews",
  },
  openGraph: {
    title: "Student Reviews & Testimonials | Ashok Yadav Kadapa",
    description:
      "Over 1,476+ students and customers have rated Ashok Yadav Study Hall & Xerox in Kadapa. Check verified feedback.",
    url: "https://ashok-yadav-web.vercel.app/reviews",
  },
};

export default function ReviewsPage() {
  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <Breadcrumb items={[{ label: "Customer Reviews & Ratings" }]} />
          <div className="mt-2 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Star size={13} className="fill-amber-600 text-amber-600" /> Over 1,476+ Verified Ratings
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              What Kadapa Students & Aspirants <span className="text-[#F59E0B]">Say About Us</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Read transparent feedback from serious candidates who studied for APPSC, DSC, Police SI, and UPSC exams, as well as university scholars utilizing our 24-hour printing and distance education services.
            </p>
          </div>
        </div>
      </div>

      {/* Main Reviews Component */}
      <Reviews />

      {/* Leave a Review Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4">
            <ThumbsUp size={28} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Have You Studied or Printed at Ashok Yadav?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-lg mx-auto">
            Your feedback helps fellow aspirants find the best study environment and motivates our team to keep improving. Share your experience with us!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/919963095103?text=Hi%20Dr.%20Ashok%20Yadav%2C%20I%20would%20like%20to%20share%20my%20feedback%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#25D366] text-white font-extrabold text-sm hover:bg-[#128C7E] transition-colors shadow-md min-h-[48px]"
            >
              <MessageCircle size={16} />
              <span>Share Feedback on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
