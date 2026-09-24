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
} from "lucide-react";

const AMENITIES = [
  { icon: Wifi, label: "High-Speed Wi-Fi", desc: "Unlimited bandwidth for research, downloads & online exams" },
  { icon: Zap, label: "Power Backup", desc: "100% inverter/generator backup — zero interruptions" },
  { icon: Wind, label: "Air Conditioned", desc: "Cool, comfortable AC environment for focused study" },
  { icon: Shield, label: "CCTV Security", desc: "24/7 surveillance for a safe & secure environment" },
  { icon: Droplets, label: "RO Drinking Water", desc: "Clean purified cold & normal water on-site" },
  { icon: Lock, label: "Safe Lockers", desc: "Individual lockers to secure your valuables" },
  { icon: Car, label: "Easy Parking", desc: "Parking available near Industrial Estate, RIMS Road" },
  { icon: Sun, label: "5 AM Opening", desc: "Early birds welcome — start your day at dawn" },
];

const SHIFTS = [
  {
    name: "Morning Shift",
    time: "5:00 AM – 1:00 PM",
    icon: Sun,
    color: "text-amber-500",
    bg: "bg-amber-50 border-amber-200",
    badge: "Perfect for early birds",
  },
  {
    name: "Evening Shift",
    time: "1:00 PM – 11:00 PM",
    icon: Clock,
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-200",
    badge: "Most popular",
  },
  {
    name: "Full Day Pass",
    time: "5:00 AM – 11:00 PM",
    icon: BookOpen,
    color: "text-[#1E3A8A]",
    bg: "bg-slate-50 border-[#1E3A8A]/20",
    badge: "Maximum value",
  },
];

const EXAMS = [
  "APPSC Group 1, 2, 4",
  "TSPSC Exams",
  "AP Police SI / Constable",
  "DSC / TET / CTET",
  "UPSC Civil Services",
  "SSC CGL / CHSL",
  "NEET / JEE",
  "RRB / NTPC / ALP",
  "Banking (IBPS / SBI)",
  "AP GRAMA / Ward Secretariat",
];

export default function StudyHall() {
  return (
    <section id="study-hall" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-[#1E3A8A]/10 text-[#1E3A8A] rounded-full text-sm font-semibold mb-4">
            📚 Study Hall & Reading Room
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Kadapa's Favourite
            <span className="text-[#1E3A8A]"> Study Destination</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            A dedicated, distraction-free environment designed to help competitive exam
            aspirants achieve their government job dreams — from APPSC to UPSC to Police SI.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {AMENITIES.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#1E3A8A]/30 hover:bg-blue-50/50 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1E3A8A]/10 flex items-center justify-center mb-3 group-hover:bg-[#1E3A8A]/20 transition-colors">
                <item.icon size={22} className="text-[#1E3A8A]" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm mb-1">{item.label}</h3>
              <p className="text-slate-500 text-xs leading-relaxed hidden sm:block">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Shifts */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-8">
            Choose Your Study Shift
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {SHIFTS.map((shift) => (
              <div
                key={shift.name}
                className={`relative rounded-2xl border-2 p-6 ${shift.bg} hover:shadow-lg transition-shadow`}
              >
                <span className="absolute top-3 right-3 text-xs font-semibold bg-white px-2 py-1 rounded-full text-slate-600 shadow-sm border border-slate-100">
                  {shift.badge}
                </span>
                <shift.icon size={28} className={`${shift.color} mb-4`} />
                <h4 className="text-lg font-bold text-slate-900 mb-1">{shift.name}</h4>
                <p className={`text-sm font-semibold ${shift.color} mb-4`}>{shift.time}</p>
                <a
                  href={`https://wa.me/919963095103?text=Hi%2C%20I%20want%20to%20book%20a%20desk%20for%20${encodeURIComponent(shift.name)}%20(${encodeURIComponent(shift.time)})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#1E3A8A] text-white font-semibold text-sm hover:bg-[#2563EB] transition-colors min-h-[44px]"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Exam Aspirant Section */}
        <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-3xl p-8 sm:p-10 text-white">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Users size={20} className="text-[#F59E0B]" />
                <span className="text-[#F59E0B] font-semibold text-sm uppercase tracking-wider">
                  Government Job Aspirants
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-tight">
                Serious study space for serious candidates
              </h3>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                Join hundreds of students from Kadapa who cracked their government exams
                studying right here — with no noise, no distractions, and everything you need.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="grid grid-cols-2 gap-2">
                {EXAMS.map((exam) => (
                  <div key={exam} className="flex items-center gap-2 text-sm text-blue-100">
                    <CheckCircle2 size={14} className="text-[#10B981] flex-shrink-0" />
                    {exam}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+919963095103"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white text-[#1E3A8A] font-bold text-sm hover:bg-slate-100 transition-colors min-h-[48px]"
            >
              📞 Call: +91 99630 95103
            </a>
            <a
              href="https://wa.me/919963095103?text=Hi%2C%20I%20want%20to%20join%20Ashok%20Yadav%20Study%20Hall.%20Please%20share%20seat%20availability%20and%20plans."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#128C7E] transition-colors min-h-[48px]"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
