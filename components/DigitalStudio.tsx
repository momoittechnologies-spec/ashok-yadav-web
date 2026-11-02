"use client";

import Image from "next/image";
import { Video, Monitor, Wifi, Mic, Sparkles, MessageCircle, Clock, CheckCircle2, Phone } from "lucide-react";

const STUDIO_FEATURES = [
  {
    icon: Monitor,
    title: "Interactive Digital Smart Board",
    desc: "Large touchscreen smart panel for teaching, annotating slides, writing equations, and showing diagrams with stylus touch.",
  },
  {
    icon: Video,
    title: "Professional HD / 4K Recording",
    desc: "Crystal-clear high-definition camera setup with optimal studio angles, professional tripods, and wide capture lenses.",
  },
  {
    icon: Mic,
    title: "Studio Audio & Pro Softbox Lighting",
    desc: "Wireless lapel microphones with background noise cancellation and professional softbox lighting for broadcast quality.",
  },
  {
    icon: Wifi,
    title: "Ultra High-Speed Dedicated Wi-Fi",
    desc: "Buffer-free high-speed fiber internet for seamless YouTube live streaming, webinars, and interactive zoom classes.",
  },
];

const USE_CASES = [
  { label: "YouTube Content Creators", desc: "Record educational videos, lectures, and series with zero setup hassle or equipment costs." },
  { label: "Online Tutors & Faculty", desc: "Conduct live interactive batches for schools, colleges, and EdTech apps with digital blackboard." },
  { label: "Competitive Exam Mentors", desc: "Create high-impact video courses for APPSC, SI, Constable, DSC & UPSC students across AP & TS." },
  { label: "Corporate & Interview Coaching", desc: "Record mock interviews, executive seminars, and professional training presentations with pro studio backdrops." },
];

export default function DigitalStudio() {
  return (
    <section id="digital-studio" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#F59E0B]/15 text-amber-800 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <Video size={16} /> Digital Classroom Studio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Ashok Yadav <span className="text-[#F59E0B]">Digital Studio</span>
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            మీ బోధనకు... మా డిజిటల్ స్టూడియో! (Your Teaching... Our Digital Studio!)
            Kadapa's state-of-the-art recording space with smart interactive panels for teachers, YouTubers, and coaches.
          </p>
        </div>

        {/* Hero Banner with Rate Card */}
        <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 rounded-3xl p-8 sm:p-12 lg:p-14 text-white shadow-xl mb-16 lg:mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/3" />

          <div className="relative flex flex-col lg:flex-row items-center gap-10 xl:gap-14 justify-between">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={14} /> Book Now · Teach Bigger
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
                Record High-Quality Videos at Just
              </h3>
              <div className="inline-flex items-baseline gap-2.5 bg-white text-slate-900 px-7 py-3 rounded-2xl shadow-lg mb-6">
                <span className="text-4xl sm:text-5xl font-black text-rose-600">₹499</span>
                <span className="text-slate-600 font-bold text-lg">/ Per Hour</span>
              </div>
              <p className="text-amber-100 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
                Whether you teach mathematics, science, competitive exams, or executive training — simply walk in with your slides, step in front of the smart board, and walk out with professional 4K lecture files ready to upload!
              </p>
            </div>

            <div className="w-full lg:w-[440px] xl:w-[480px] flex-shrink-0">
              <div className="relative w-full h-72 sm:h-80 xl:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30 bg-slate-900">
                <Image
                  src="/images/digital-studio-recording.jpg"
                  alt="Ashok Yadav Digital Class Room Studio Kadapa ₹499 per hour"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-amber-100">
              <Clock size={16} /> Hourly slot booking available daily · Prior appointment recommended
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <a
                href="https://wa.me/919963095103?text=Hi%2C%20I%20want%20to%20book%20a%20slot%20at%20Ashok%20Yadav%20Digital%20Class%20Room%20Studio%20(%E2%82%B9499%2Fhr)."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors shadow-md min-h-[48px]"
              >
                <MessageCircle size={16} className="text-[#25D366]" />
                <span>Book Studio on WhatsApp</span>
              </a>
              <a
                href="tel:+919963095103"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors min-h-[48px]"
              >
                <Phone size={16} />
                <span>Call: 9963095103</span>
              </a>
            </div>
          </div>
        </div>

        {/* Studio Amenities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 mb-16 lg:mb-20">
          {STUDIO_FEATURES.map((feat) => (
            <div
              key={feat.title}
              className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-amber-300 hover:bg-amber-50/30 hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-13 h-13 rounded-2xl bg-amber-100 flex items-center justify-center mb-5 group-hover:bg-amber-200 group-hover:scale-105 transition-all">
                  <feat.icon size={24} className="text-amber-700" />
                </div>
                <h4 className="font-extrabold text-slate-900 text-base sm:text-lg mb-2">{feat.title}</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Who Can Use The Studio */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 lg:p-12 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Who Uses Ashok Yadav Digital Studio?
            </h3>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              Empowering regional educators and creators with broadcast infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 mb-8">
            {USE_CASES.map((uc) => (
              <div key={uc.label} className="flex items-start gap-3.5 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all">
                <CheckCircle2 size={20} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-slate-900 text-sm sm:text-base">{uc.label}</h5>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-6 border-t border-slate-100">
            <p className="text-sm text-slate-600 mb-4">
              Located at <strong>Industrial Estate, RIMS Road, Kadapa</strong>. Walk in or reserve your slot now!
            </p>
            <a
              href="https://wa.me/919963095103?text=Hi%20Dr.%20Ashok%20Yadav%2C%20I%20am%20an%20educator%2Fcreator%20and%20want%20to%20visit%2Fbook%20the%20digital%20classroom%20studio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#128C7E] transition-colors shadow-md min-h-[48px]"
            >
              <MessageCircle size={16} />
              <span>Inquire Studio Slot on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
