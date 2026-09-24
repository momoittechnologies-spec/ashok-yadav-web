"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
    exam: null,
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
    text: "The silent study environment here is incomparable. Power backup is always on, no disruptions. I study here daily for UPSC preparation. The staff is also very cooperative. Perfect reading room!",
    exam: "UPSC",
  },
  {
    name: "Praveen Kumar",
    source: "Justdial · Xerox",
    rating: 5,
    text: "Spiral binding quality is the best in Kadapa! I got my DSC notes bound here and the quality was amazing. Bulk printing with binding was done very quickly. Prices are genuinely cheap compared to others.",
    exam: "DSC",
  },
  {
    name: "Swetha Reddy",
    source: "Justdial · Study Hall",
    rating: 5,
    text: "Individual study desks are comfortable and lighting is perfect for long study sessions. The 5 AM opening time is a great advantage — I can study before office hours. Highly recommended for serious candidates!",
    exam: "SI Exam",
  },
];

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < rating ? "fill-[#F59E0B] text-[#F59E0B]" : "fill-slate-200 text-slate-200"}
        />
      ))}
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
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            ⭐ Customer Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            What Kadapa Students{" "}
            <span className="text-[#F59E0B]">Are Saying</span>
          </h2>

          {/* Aggregate Rating Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 mb-4">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-[#1E3A8A]">5.0</div>
              <StarRow rating={5} />
              <div className="text-xs text-slate-500 mt-1">Study Hall · 92 reviews</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-[#1E3A8A]">4.9</div>
              <StarRow rating={5} />
              <div className="text-xs text-slate-500 mt-1">Xerox · 1,384+ reviews</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-[#10B981]">6+</div>
              <div className="text-xs text-slate-500 mt-2">Years in Business</div>
            </div>
          </div>
        </div>

        {/* Mobile: vertical stack; Desktop: sliding carousel */}
        <div className="block sm:hidden space-y-4 mb-8">
          {REVIEWS.slice(0, 3).map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>

        <div className="hidden sm:block">
          <div className="overflow-hidden">
            <div
              className="flex gap-5 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
            >
              {REVIEWS.map((review) => (
                <div key={review.name} className="min-w-[calc(33.333%-14px)] flex-shrink-0">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-[#1E3A8A] hover:text-[#1E3A8A] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            {[...Array(max + 1)].map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to review group ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === index ? "bg-[#1E3A8A]" : "bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
            <button
              onClick={next}
              disabled={index === max}
              aria-label="Next review"
              className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-[#1E3A8A] hover:text-[#1E3A8A] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Directory source note */}
        <p className="text-center text-xs text-slate-400 mt-8">
          Reviews sourced from Justdial and Yappe business listings. Ratings are customer-generated opinions.
        </p>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: (typeof REVIEWS)[0] }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-shadow h-full flex flex-col">
      <Quote size={20} className="text-[#1E3A8A]/20 mb-3 flex-shrink-0" />
      <p className="text-slate-700 text-sm leading-relaxed flex-1 mb-4">"{review.text}"</p>
      <div className="flex items-center justify-between mt-auto">
        <div>
          <div className="font-bold text-slate-900 text-sm">{review.name}</div>
          <div className="text-xs text-slate-400">{review.source}</div>
          {review.exam && (
            <span className="inline-block mt-1 text-xs bg-[#1E3A8A]/10 text-[#1E3A8A] px-2 py-0.5 rounded-full font-medium">
              {review.exam}
            </span>
          )}
        </div>
        <div className="flex flex-col items-end gap-1">
          <StarRow rating={review.rating} />
          <span className="text-xs font-bold text-[#F59E0B]">{review.rating}.0</span>
        </div>
      </div>
    </div>
  );
}
