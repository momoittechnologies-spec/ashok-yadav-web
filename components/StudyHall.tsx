"use client";

import {
  Wifi,
  Zap,
  Wind,
  Shield,
  Droplets,
  Lock,
  Car,
  Sun,
  Clock,
  Users,
  BookOpen,
  CheckCircle2,
  Phone,
  MessageCircle,
} from "lucide-react";

const AMENITIES = [
  { icon: Wifi, label: "High-Speed Wi-Fi", desc: "Unlimited dedicated bandwidth for video lectures, mock tests & research" },
  { icon: Zap, label: "100% Power Backup", desc: "Inverter and generator backup ensures zero study interruptions" },
  { icon: Wind, label: "Full Air Conditioning", desc: "Optimally cooled, clean, noise-free atmosphere for all-day focus" },
  { icon: Shield, label: "24/7 CCTV Security", desc: "Monitored round-the-clock for a secure, professional study environment" },
  { icon: Droplets, label: "Purified RO Water", desc: "Clean chilled and ambient drinking water available throughout the day" },
  { icon: Lock, label: "Personal Safe Lockers", desc: "Lockers to safely store your textbooks, laptops and personal belongings" },
  { icon: Car, label: "Convenient Parking", desc: "Ample vehicle parking space at Industrial Estate on RIMS Road" },
  { icon: Sun, label: "Early 5 AM Opening", desc: "Ideal for early risers looking to complete peak study hours before dawn" },
];

const SHIFTS = [
  {
    name: "Morning Shift",
    time: "5:00 AM – 1:00 PM",
    icon: Sun,
    color: "text-amber-500",
    bg: "bg-amber-50/60 border-amber-200/80",
    badge: "Early Birds Choice",
    desc: "Best for intense morning revisions and quiet exam preparation.",
  },
  {
    name: "Evening Shift",
    time: "1:00 PM – 11:00 PM",
    icon: Clock,
    color: "text-blue-600",
    bg: "bg-blue-50/60 border-blue-200/80",
    badge: "Most Popular",
    desc: "Suits college students and professionals after daytime hours.",
  },
  {
    name: "Full Day Pass",
    time: "5:00 AM – 11:00 PM",
    icon: BookOpen,
    color: "text-[#1E3A8A]",
    bg: "bg-slate-50 border-[#1E3A8A]/30",
    badge: "Maximum Immersion",
    desc: "Complete 18-hour access for dedicated competitive aspirants.",
  },
];

const EXAMS = [
  "APPSC Group 1, 2, 4",
  "TSPSC Exams",
  "AP Police SI & Constable",
  "DSC / TET / CTET",
  "UPSC Civil Services",
  "SSC CGL / CHSL / MTS",
  "NEET & JEE Aspirants",
  "RRB / NTPC / ALP",
  "Banking (IBPS, SBI PO/Clerk)",
  "AP Grama / Ward Sachivalayam",
];

export default function StudyHall() {
  return (
    <section id="study-hall" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#1E3A8A]/10 text-[#1E3A8A] rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <BookOpen size={15} /> Study Hall & Reading Room
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Kadapa's Favourite <span className="text-[#1E3A8A]">Study Destination</span>
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            A dedicated, distraction-free environment engineered to help competitive exam aspirants achieve their government and professional goals — from APPSC to UPSC to Police SI.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 xl:gap-6 mb-16 lg:mb-20">
          {AMENITIES.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#1E3A8A]/40 hover:bg-blue-50/40 hover:shadow-md transition-all group"
            >
              <div className="w-13 h-13 rounded-2xl bg-[#1E3A8A]/10 flex items-center justify-center mb-4 group-hover:bg-[#1E3A8A]/20 transition-colors">
                <item.icon size={24} className="text-[#1E3A8A]" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base mb-1.5">{item.label}</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Shift Timings Section */}
        <div className="mb-16 lg:mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Flexible Shift Options for Every Aspirant
            </h3>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              Choose the schedule that matches your preparation routine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
            {SHIFTS.map((shift) => (
              <div
                key={shift.name}
                className={`relative rounded-3xl border-2 p-6 sm:p-8 ${shift.bg} flex flex-col justify-between hover:shadow-xl transition-all group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <shift.icon size={32} className={`${shift.color}`} />
                    <span className="text-xs font-bold bg-white px-3 py-1 rounded-full text-slate-700 shadow-xs border border-slate-200">
                      {shift.badge}
                    </span>
                  </div>
                  <h4 className="text-xl font-extrabold text-slate-900 mb-1">{shift.name}</h4>
                  <div className={`text-base font-bold ${shift.color} mb-3`}>{shift.time}</div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{shift.desc}</p>
                </div>

                <a
                  href={`https://wa.me/919963095103?text=Hi%2C%20I%20want%20to%20book%20a%20desk%20for%20${encodeURIComponent(shift.name)}%20(${encodeURIComponent(shift.time)})%20at%20Ashok%20Yadav%20Study%20Hall.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1E3A8A] text-white font-bold text-sm hover:bg-[#2563EB] shadow-xs group-hover:shadow-md transition-all min-h-[46px]"
                >
                  <MessageCircle size={15} />
                  <span>Enquire Seat Availability</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Serious Exam Aspirant Banner */}
        <div className="bg-gradient-to-br from-[#1E3A8A] via-blue-900 to-[#2563EB] rounded-3xl p-8 sm:p-10 lg:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Users size={15} /> Competitive Exam Hub
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 leading-tight">
                Serious study space for future officers
              </h3>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-6">
                Join hundreds of aspirants from Kadapa and Rayalaseema who cracked their government dream jobs studying right here — with total silence, high-speed connectivity, and uninterrupted power.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+919963095103"
                  className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white text-[#1E3A8A] font-extrabold text-sm hover:bg-slate-100 shadow-md transition-colors min-h-[48px]"
                >
                  <Phone size={15} />
                  <span>Call: 9963095103</span>
                </a>
                <a
                  href="https://wa.me/919963095103?text=Hi%2C%20I%20want%20to%20visit%20Ashok%20Yadav%20Study%20Hall%20to%20check%20facilities."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#25D366] text-white font-extrabold text-sm hover:bg-[#128C7E] shadow-md transition-colors min-h-[48px]"
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp Admission</span>
                </a>
              </div>
            </div>

            {/* Right Column: Exam Chips Grid */}
            <div className="lg:col-span-7 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/20">
              <div className="text-xs uppercase tracking-wider font-extrabold text-amber-300 mb-4">
                Aspirants Studying Here For
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EXAMS.map((exam) => (
                  <div key={exam} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/10 border border-white/15 text-sm text-blue-50 font-medium">
                    <CheckCircle2 size={16} className="text-[#10B981] flex-shrink-0" />
                    <span>{exam}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
