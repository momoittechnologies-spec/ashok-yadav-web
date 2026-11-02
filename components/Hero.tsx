"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Star,
  Phone,
  MessageCircle,
  MapPin,
  Award,
  BookOpen,
  Printer,
  GraduationCap,
  Video,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

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

const QUICK_SERVICES = [
  {
    title: "AC Study Hall & Reading Rooms",
    badge: "5 AM – 11 PM",
    badgeColor: "bg-blue-100 text-[#1E3A8A]",
    desc: "AC cabins, 100% power backup & high-speed Wi-Fi for APPSC, UPSC & SI aspirants.",
    icon: BookOpen,
    iconColor: "text-[#1E3A8A]",
    iconBg: "bg-blue-50",
    href: "/study-hall",
  },
  {
    title: "24-Hour Xerox & Jumbo Print",
    badge: "24/7 Daily",
    badgeColor: "bg-amber-100 text-amber-800",
    desc: "B&W / Colour photocopying, spiral binding & competitive exam notes pickup.",
    icon: Printer,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50",
    href: "/xerox-printing",
  },
  {
    title: "Distance Education Hub",
    badge: "AU & ANU Official",
    badgeColor: "bg-emerald-100 text-emerald-800",
    desc: "Andhra Univ Special Drive 2026, C.LI.SC (3-month Library Science) & Degrees.",
    icon: GraduationCap,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    href: "/distance-education",
  },
  {
    title: "Smart Digital Classroom Studio",
    badge: "₹499 / Hour",
    badgeColor: "bg-purple-100 text-purple-800",
    desc: "Interactive digital board, 4K camera & studio lighting for YouTube & online tutors.",
    icon: Video,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50",
    href: "/digital-studio",
  },
];

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

  const handleScrollToOverview = () => {
    const el = document.getElementById("services-overview");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/40 pt-24 pb-12 sm:pb-16 lg:pt-28 lg:pb-20">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 lg:w-[32rem] lg:h-[32rem] bg-[#1E3A8A]/5 rounded-full -translate-y-1/3 translate-x-1/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 lg:w-[28rem] lg:h-[28rem] bg-[#F59E0B]/8 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
        {/* Main 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column: Brand, Title, Credentials, Trust & Direct Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Leadership & Operating Live Status Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-5">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200/80 text-[#1E3A8A] text-xs font-bold shadow-xs">
                <Award size={14} className="text-[#1E3A8A]" />
                <span>Led by Dr. Ashok Yadav, MBA</span>
              </div>

              <div
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs border ${
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
                <span className="font-bold">{open ? "Open Now (5 AM – 11 PM)" : "Closed Right Now"}</span>
                <span className="font-normal opacity-85">· {timeLabel}</span>
              </div>
            </div>

            {/* Business Logo & Main Headline */}
            <h1 className="flex flex-col items-center lg:items-start leading-tight mb-4 w-full">
              <span className="sr-only">శ్రీ అశోక్ యాదవ్ (Ashok Yadav) - Study Hall & Education Hub Kadapa</span>
              
              {/* Refined Telugu Logo Presentation */}
              <div className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[520px] xl:max-w-[560px] flex justify-center lg:justify-start mb-2 sm:mb-3">
                <Image
                  src="/images/sri-ashok-yadav-telugu.png"
                  alt="శ్రీ అశోక్ యాదవ్ - Ashok Yadav"
                  width={973}
                  height={201}
                  priority
                  className="w-full h-auto object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.12)] hover:scale-[1.01] transition-transform duration-300"
                />
              </div>

              {/* Main Heading with Subtle Complementary Amber Stroke & Depth */}
              <span className="heading-brand-stroke block text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black tracking-tight leading-tight">
                Study Hall & Education Hub
              </span>
            </h1>

            {/* Value Proposition Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-medium leading-relaxed mb-4 max-w-2xl">
              Kadapa's premier integrated center for 5 AM–11 PM AC study halls, 24-hour Xerox & large-scale printing, official AU & ANU distance admissions, and modern 4K digital recording studio.
            </p>

            {/* Address Badge with Pin */}
            <Link
              href="/location"
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-[#1E3A8A] text-xs sm:text-sm mb-6 bg-slate-100/80 hover:bg-slate-200/70 border border-slate-200/80 px-3.5 py-1.5 rounded-xl transition-colors"
            >
              <MapPin size={15} className="text-[#1E3A8A] flex-shrink-0" />
              <span>D.No. 43, Industrial Estate, RIMS Road, Kadapa, AP – 516004</span>
            </Link>

            {/* Trust Proof & Social Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
              {/* Study Hall Rating */}
              <Link
                href="/reviews"
                className="flex items-center gap-2 bg-white rounded-xl px-3.5 py-2 shadow-xs border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <span className="font-extrabold text-slate-900 text-xs sm:text-sm">5.0</span>
                <span className="text-slate-500 text-xs">Study Hall (92)</span>
              </Link>

              {/* Xerox Rating */}
              <Link
                href="/reviews"
                className="flex items-center gap-2 bg-white rounded-xl px-3.5 py-2 shadow-xs border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <span className="font-extrabold text-slate-900 text-xs sm:text-sm">4.9</span>
                <span className="text-slate-500 text-xs">Xerox (1,384+)</span>
              </Link>

              {/* Social Channels */}
              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/ashok_yadav_xerox_distance_edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold hover:opacity-90 shadow-xs transition-opacity"
                >
                  <InstagramIcon size={13} />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/AshokyadaXerox/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#1877F2] text-white text-xs font-bold hover:opacity-90 shadow-xs transition-opacity"
                >
                  <FacebookIcon size={13} />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Direct Action Call & WhatsApp Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-4">
              <a
                href="tel:+919963095103"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1E3A8A] text-white font-bold text-sm hover:bg-[#2563EB] shadow-sm hover:shadow-md transition-all min-h-[48px]"
              >
                <Phone size={16} />
                <span>Call: +91 99630 95103</span>
              </a>

              <a
                href="https://wa.me/919963095103?text=Hi%2C%20I%20want%20to%20enquire%20about%20Ashok%20Yadav%20Study%20Hall%20%2F%20Education%20Hub%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#128C7E] shadow-sm hover:shadow-md transition-all min-h-[48px]"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            {/* Timing Note */}
            <div className="flex items-center gap-2 text-slate-500 text-xs sm:text-sm mt-1">
              <Clock size={14} className="text-[#1E3A8A]" />
              <span>
                Study Hall: <strong className="text-slate-700">5 AM – 11 PM</strong> · Xerox:{" "}
                <strong className="text-slate-700">24 Hours Daily</strong>
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Quick-Service Directory Hub */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-base sm:text-lg font-extrabold text-slate-900">
                    Quick Service Directory
                  </h2>
                  <p className="text-xs text-slate-500">
                    Select a service to view full dedicated page & details
                  </p>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                  Kadapa Hub
                </span>
              </div>

              {/* Service Cards Stack with Next.js Links */}
              <div className="space-y-3">
                {QUICK_SERVICES.map((s) => (
                  <Link
                    key={s.title}
                    href={s.href}
                    className="w-full flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/70 hover:border-[#1E3A8A]/30 transition-all text-left group"
                  >
                    <div className={`w-11 h-11 rounded-xl ${s.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                      <s.icon size={20} className={s.iconColor} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#1E3A8A] transition-colors truncate">
                          {s.title}
                        </h3>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${s.badgeColor}`}>
                          {s.badge}
                        </span>
                      </div>
                      <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                    <ArrowRight size={15} className="text-slate-400 group-hover:text-[#1E3A8A] group-hover:translate-x-0.5 transition-all mt-1 flex-shrink-0" />
                  </Link>
                ))}
              </div>

              {/* Card Footer Banner */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
                <Link href="/contact" className="text-slate-500 hover:text-slate-800 font-medium">
                  Need admissions assistance?
                </Link>
                <a
                  href="https://wa.me/919963095103?text=Hi%2C%20I%20am%20looking%20for%20admissions%20or%20desk%20booking%20at%20Ashok%20Yadav%20Study%20Hall."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
                >
                  <MessageCircle size={13} />
                  <span>Instant WhatsApp Chat →</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-10 lg:mt-14 flex justify-center">
          <button
            onClick={handleScrollToOverview}
            aria-label="Scroll to services overview"
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-[#1E3A8A] transition-colors cursor-pointer group"
          >
            <span className="text-xs font-semibold tracking-wide">Explore All Facilities & Services Below</span>
            <ChevronDown size={18} className="animate-bounce group-hover:text-[#1E3A8A]" />
          </button>
        </div>
      </div>
    </section>
  );
}
