import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

// Inline SVG for social icons
function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B132B] text-white border-t border-slate-800">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* Brand & Mission: 4 cols */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-base shadow-xs">
                  AY
                </div>
                <div>
                  <div className="text-xl font-extrabold text-white tracking-tight">Ashok Yadav</div>
                  <div className="text-[#F59E0B] font-bold text-xs tracking-wider uppercase">
                    Study Hall · Xerox · Distance Edu
                  </div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-sm">
                Kadapa's most trusted educational hub — Study Hall, 24-Hour Xerox, Distance Education admissions, and Digital Studio headed by <strong className="text-white">Dr. Ashok Yadav, MBA</strong>.
              </p>
              <p className="text-slate-500 text-xs mb-6">
                Serving students, exam aspirants, and working professionals since 2018 at Industrial Estate, RIMS Road.
              </p>
            </div>

            {/* Social Icons with Official Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919963095103"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="Chat on WhatsApp"
                className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://www.instagram.com/ashok_yadav_xerox_distance_edu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Follow on Instagram (@ashok_yadav_xerox_distance_edu)"
                className="w-10 h-10 rounded-xl bg-pink-600 flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://www.facebook.com/AshokyadaXerox/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Follow on Facebook (@AshokyadaXerox)"
                className="w-10 h-10 rounded-xl bg-[#1877F2] flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Service Links: 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="font-extrabold text-white mb-5 text-xs uppercase tracking-wider text-slate-300">
              Services Directory
            </h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#study-hall" className="hover:text-white transition-colors">AC Study Hall & Reading Rooms</a></li>
              <li><a href="#xerox" className="hover:text-white transition-colors">24-Hour Photocopying & Jumbo Print</a></li>
              <li><a href="#distance-education" className="hover:text-white transition-colors">AU Special Drive Exams 2026</a></li>
              <li><a href="#distance-education" className="hover:text-white transition-colors">C.LI.SC & B.LI.SC Library Science</a></li>
              <li><a href="#digital-studio" className="hover:text-white transition-colors">Smart Digital Studio (₹499/hr)</a></li>
              <li><a href="#materials" className="hover:text-white transition-colors">Competitive Exam Notes & Printing</a></li>
            </ul>
          </div>

          {/* Operating Hours: 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="font-extrabold text-white mb-5 text-xs uppercase tracking-wider text-slate-300">
              Operating Timings
            </h4>
            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <div className="text-amber-400 font-bold">Study Hall</div>
                <div className="text-slate-300 font-medium">5:00 AM – 11:00 PM</div>
                <div className="text-slate-500 text-xs">All 7 Days Open</div>
              </div>
              <div>
                <div className="text-emerald-400 font-bold">Xerox Centre</div>
                <div className="text-[#10B981] font-extrabold">Open 24 Hours</div>
                <div className="text-slate-500 text-xs">Round the Clock</div>
              </div>
              <div>
                <div className="text-blue-400 font-bold">Distance Edu & Studio</div>
                <div className="text-slate-300 font-medium">9:00 AM – 9:00 PM</div>
                <div className="text-slate-500 text-xs">Daily Admissions</div>
              </div>
            </div>
          </div>

          {/* Official Location & Contact: 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="font-extrabold text-white mb-5 text-xs uppercase tracking-wider text-slate-300">
              Official Center
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  D.No. 43, Industrial Estate, 281-1-8, RIMS Road, Kadapa – 516004, AP
                </span>
              </div>
              <a
                href="tel:+919963095103"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-xs sm:text-sm"
              >
                <Phone size={15} className="text-blue-400 flex-shrink-0" />
                <span>+91 99630 95103 (Dr. Ashok Yadav)</span>
              </a>
              <a
                href="https://wa.me/919963095103"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-[#25D366] transition-colors text-xs sm:text-sm"
              >
                <MessageCircle size={15} className="text-[#25D366] flex-shrink-0" />
                <span>WhatsApp: 9963095103</span>
              </a>
              <div className="pt-2">
                <a
                  href="#location"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                >
                  View Location & Directions on Map →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <span>
            © {year} Ashok Yadav Study Hall, Xerox & Distance Education, Kadapa. All rights reserved.
          </span>
          <span>
            Designed & developed by{" "}
            <a
              href="mailto:momoit.technologies@gmail.com"
              className="text-slate-300 hover:text-white transition-colors font-bold"
            >
              Momo IT Technologies
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
