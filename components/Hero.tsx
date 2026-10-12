"use client";

import { useEffect, useState } from "react";
import { Clock, Star, Phone, MessageCircle, MapPin, ChevronDown, Award } from "lucide-react";

// Inline SVG for social icons
function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function FacebookIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function isBusinessOpen(): boolean {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const totalMinutes = hours * 60 + minutes;
  // Open: 5:00 AM (300) to 11:00 PM (1380)
  return totalMinutes >= 300 && totalMinutes < 1380;
}

function getNextEventLabel(): string {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const totalMinutes = hours * 60 + minutes;
  if (totalMinutes < 300) {
    const diff = 300 - totalMinutes;
    const h = Math.floor(diff / 60);
    const m = diff % 60;
    return `Opens in ${h > 0 ? h + "h " : ""}${m}m`;
  } else if (totalMinutes >= 1380) {
    return "Opens tomorrow at 5:00 AM";
  } else {
    const diff = 1380 - totalMinutes;
    const h = Math.floor(diff / 60);
    const m = diff % 60;
    return `Closes in ${h > 0 ? h + "h " : ""}${m}m`;
  }
}

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [timeLabel, setTimeLabel] = useState("");

  useEffect(() => {
    const update = () => {
      setOpen(isBusinessOpen());
      setTimeLabel(getNextEventLabel());
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  const handleScrollDown = () => {
    document.getElementById("study-hall")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-[#1E3A8A]/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F59E0B]/8 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center text-center">
        {/* Leadership & Live Status Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-[#1E3A8A] text-xs font-bold">
            <Award size={14} className="text-[#1E3A8A]" /> Led by Dr. Ashok Yadav, MBA
          </div>

          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm border ${
              open
                ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                : "bg-rose-50 border-rose-200 text-rose-700"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                open ? "bg-emerald-500 animate-pulse" : "bg-rose-400"
              }`}
            />
            {open ? "🟢 Open Now (5 AM – 11 PM)" : "🔴 Closed Right Now"}
            <span className="font-normal opacity-80">· {timeLabel}</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1E3A8A] leading-tight mb-4">
          Ashok Yadav
          <br />
          <span className="text-[#F59E0B]">Study Hall & Education Hub</span>
        </h1>
        <p className="text-base sm:text-xl text-slate-600 font-medium mb-3 max-w-2xl">
          Study Hall · 24-Hour Xerox · Distance Education · Digital Classroom Studio
        </p>
        <div className="flex items-center justify-center gap-1 text-slate-500 text-xs sm:text-sm mb-6">
          <MapPin size={14} className="text-[#1E3A8A]" />
          Industrial Estate, RIMS Road, Kadapa, Andhra Pradesh – 516004
        </div>

        {/* Social Follow Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <a
            href="https://www.instagram.com/ashok_yadav_xerox_distance_edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold hover:opacity-90 shadow-sm transition-opacity"
          >
            <InstagramIcon size={14} /> @ashok_yadav_xerox_distance_edu
          </a>
          <a
            href="https://www.facebook.com/AshokyadaXerox/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1877F2] text-white text-xs font-bold hover:opacity-90 shadow-sm transition-opacity"
          >
            <FacebookIcon size={14} /> Facebook Page
          </a>
        </div>

        {/* Rating Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 shadow-sm border border-slate-200">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
              ))}
            </div>
            <span className="font-bold text-slate-900 text-sm">5.0</span>
            <span className="text-slate-500 text-xs">Study Hall (92)</span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 shadow-sm border border-slate-200">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
              ))}
            </div>
            <span className="font-bold text-slate-900 text-sm">4.9</span>
            <span className="text-slate-500 text-xs">Xerox (1,384+)</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full max-w-3xl mb-8">
          <a
            href="#study-hall"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("study-hall")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#1E3A8A] text-white font-bold text-sm hover:bg-[#2563EB] shadow-md transition-all min-h-[48px]"
          >
            Book Study Desk
          </a>
          <a
            href="#xerox"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("xerox")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#F59E0B] text-white font-bold text-sm hover:bg-[#D97706] shadow-md transition-all min-h-[48px]"
          >
            24/7 Xerox & Print 🖨️
          </a>
          <a
            href="#distance-education"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("distance-education")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 shadow-md transition-all min-h-[48px]"
          >
            Distance Admissions 🎓
          </a>
          <a
            href="#digital-studio"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("digital-studio")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-purple-700 text-white font-bold text-sm hover:bg-purple-800 shadow-md transition-all min-h-[48px]"
          >
            Digital Studio (₹499/hr) 🎬
          </a>
        </div>

        {/* Operating Hours Info */}
        <div className="flex items-center gap-2 text-slate-500 text-xs sm:text-sm">
          <Clock size={14} />
          <span>
            Study Hall: <strong className="text-slate-700">5:00 AM – 11:00 PM</strong> · Xerox:{" "}
            <strong className="text-slate-700">24 Hours Daily</strong>
          </span>
        </div>

        {/* Contact quick row */}
        <div className="flex items-center gap-4 mt-3">
          <a
            href="tel:+919963095103"
            className="flex items-center gap-1.5 text-[#1E3A8A] font-semibold text-sm hover:underline"
          >
            <Phone size={14} />
            +91 99630 95103
          </a>
          <span className="text-slate-300">|</span>
          <a
            href="https://wa.me/919963095103"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#25D366] font-semibold text-sm hover:underline"
          >
            <MessageCircle size={14} />
            WhatsApp Chat
          </a>
        </div>

        {/* Scroll down indicator */}
        <button
          onClick={handleScrollDown}
          aria-label="Scroll to services"
          className="mt-12 flex flex-col items-center gap-1 text-slate-400 hover:text-[#1E3A8A] transition-colors cursor-pointer"
        >
          <span className="text-xs">Explore All Services</span>
          <ChevronDown size={20} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
