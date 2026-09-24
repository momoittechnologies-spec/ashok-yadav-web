"use client";

import { useEffect, useState } from "react";
import { Clock, Star, Phone, MessageCircle, MapPin, ChevronDown } from "lucide-react";

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
        {/* Live Status Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm border ${
            open
              ? "bg-emerald-50 border-emerald-200 text-emerald-700"
              : "bg-rose-50 border-rose-200 text-rose-700"
          }`}
        >
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              open ? "bg-emerald-500 animate-pulse" : "bg-rose-400"
            }`}
          />
          {open ? "🟢 Open Now — Study Hall & Xerox" : "🔴 Closed Right Now"}
          <span className="text-xs font-normal opacity-80 ml-1">· {timeLabel}</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1E3A8A] leading-tight mb-4">
          Ashok Yadav
          <br />
          <span className="text-[#F59E0B]">Study Hall</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 font-medium mb-3 max-w-xl">
          & Xerox Centre, Kadapa
        </p>
        <div className="flex items-center justify-center gap-1 text-slate-500 text-sm mb-8">
          <MapPin size={14} className="text-[#1E3A8A]" />
          Industrial Estate, RIMS Road, Kadapa, Andhra Pradesh
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
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <a
            href="#study-hall"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("study-hall")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#1E3A8A] text-white font-bold text-base hover:bg-[#2563EB] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all min-h-[56px]"
          >
            Book a Study Desk
          </a>
          <a
            href="#quickprint"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("quickprint")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#F59E0B] text-white font-bold text-base hover:bg-[#D97706] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all min-h-[56px]"
          >
            QuickPrint Order ⚡
          </a>
        </div>

        {/* Hours tag */}
        <div className="flex items-center gap-2 mt-8 text-slate-500 text-sm">
          <Clock size={14} />
          <span>
            Study Hall: <strong className="text-slate-700">5:00 AM – 11:00 PM</strong> · Xerox:{" "}
            <strong className="text-slate-700">24 Hours</strong> · Daily
          </span>
        </div>

        {/* Contact quick row */}
        <div className="flex items-center gap-4 mt-4">
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
            WhatsApp
          </a>
        </div>

        {/* Scroll down indicator */}
        <button
          onClick={handleScrollDown}
          aria-label="Scroll to services"
          className="mt-14 flex flex-col items-center gap-1 text-slate-400 hover:text-[#1E3A8A] transition-colors cursor-pointer"
        >
          <span className="text-xs">Explore Services</span>
          <ChevronDown size={20} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
