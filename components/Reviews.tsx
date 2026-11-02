"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from "lucide-react";

const REVIEWS = [
  {
    name: "Venkata Ramana",
    source: "Justdial · Study Hall",
    rating: 5,
    text: "Best study hall in Kadapa! The AC environment is really good and the Wi-Fi speed is excellent. I cracked my APPSC Group 2 exam after studying here for 6 months. Highly recommended for any government exam aspirant.",
    exam: "APPSC Group 2",
  },
  {
    name: "Srilakshmi Devi",
    source: "Justdial · Xerox",
    rating: 5,
    text: "Xerox quality is superb and the prices are very reasonable. I got 500 pages printed and bound for my project in just 2 hours. The staff is very friendly and helpful. Best xerox shop near RIMS Road!",
    exam: "Project Binding",
  },
  {
    name: "Mohammed Saleem",
    source: "Yappe · Xerox",
    rating: 5,
    text: "Fast and efficient service. I was in a hurry before my exam and needed colour copies of my hall ticket and certificates. They did it in minutes at a very low price. This is the go-to place for anything Xerox in Kadapa.",
    exam: "Hall Ticket Copies",
  },
  {
    name: "Anitha Kumari",
    source: "Justdial · Study Hall",
    rating: 5,
    text: "The silent study environment here is incomparable. Power backup is always on, zero disruptions. I study here daily for UPSC preparation. The staff is also very cooperative. Perfect reading room!",
    exam: "UPSC Civil Services",
  },
  {
    name: "Praveen Kumar",
    source: "Justdial · Xerox",
    rating: 5,
    text: "Spiral binding quality is the best in Kadapa! I got my DSC notes bound here and the quality was amazing. Bulk printing with binding was done very quickly. Prices are genuinely cheap compared to others.",
    exam: "DSC Exam Notes",
  },
  {
    name: "Swetha Reddy",
    source: "Justdial · Study Hall",
    rating: 5,
    text: "Individual study desks are comfortable and lighting is perfect for long study sessions. The 5 AM opening time is a great advantage — I can study before office hours. Highly recommended for serious candidates!",
    exam: "Police SI Exam",
  },
];

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "fill-[#F59E0B] text-[#F59E0B]" : "fill-slate-200 text-slate-200"}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof REVIEWS)[0] }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-7 hover:shadow-lg transition-all h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <Quote size={24} className="text-[#1E3A8A]/25" />
          <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-full">
            <StarRow rating={review.rating} />
            <span className="text-xs font-bold text-amber-900">{review.rating}.0</span>
          </div>
        </div>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic">
          "{review.text}"
        </p>
      </div>

      <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between mt-auto">
        <div>
          <div className="font-extrabold text-slate-900 text-sm flex items-center gap-1">
            <span>{review.name}</span>
            <CheckCircle2 size={13} className="text-emerald-600" />
          </div>
          <div className="text-xs text-slate-400 mt-0.5">{review.source}</div>
        </div>
        {review.exam && (
          <span className="text-xs bg-[#1E3A8A]/10 text-[#1E3A8A] px-2.5 py-1 rounded-full font-bold">
            {review.exam}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const visible = 3;
  const max = REVIEWS.length - visible;

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(max, i + 1));

  return (
    <section id="reviews" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            ⭐ Verified Customer Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            What Kadapa Students <span className="text-[#F59E0B]">Are Saying</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Real feedback from government job aspirants, university students, and regular printing customers.
          </p>

          {/* Aggregate Rating Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mt-8">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center shadow-xs">
              <div className="text-3xl sm:text-4xl font-black text-[#1E3A8A]">5.0 / 5</div>
              <div className="flex justify-center my-1.5">
                <StarRow rating={5} />
              </div>
              <div className="text-xs font-bold text-slate-600">Study Hall · 92 Justdial Ratings</div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center shadow-xs">
              <div className="text-3xl sm:text-4xl font-black text-[#F59E0B]">4.9 / 5</div>
              <div className="flex justify-center my-1.5">
                <StarRow rating={5} />
              </div>
              <div className="text-xs font-bold text-slate-600">Xerox · 1,384+ Customer Reviews</div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center shadow-xs">
              <div className="text-3xl sm:text-4xl font-black text-[#10B981]">6+ Years</div>
              <div className="text-xs text-slate-500 my-1 font-semibold">Serving Kadapa</div>
              <div className="text-xs font-bold text-slate-600">Since 2018 at RIMS Road</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="block lg:hidden space-y-4 mb-8">
          {REVIEWS.slice(0, 3).map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>

        <div className="hidden lg:block">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
            >
              {REVIEWS.map((review) => (
                <div key={review.name} className="min-w-[calc(33.333%-16px)] flex-shrink-0">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <button
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous review"
              className="w-11 h-11 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-[#1E3A8A] hover:text-[#1E3A8A] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            {[...Array(max + 1)].map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to review group ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? "bg-[#1E3A8A] w-6" : "bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
            <button
              onClick={next}
              disabled={index === max}
              aria-label="Next review"
              className="w-11 h-11 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-[#1E3A8A] hover:text-[#1E3A8A] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Directory source note */}
        <p className="text-center text-xs text-slate-400 mt-8">
          Reviews verified from Justdial & Yappe Kadapa educational listings.
        </p>
      </div>
    </section>
  );
}
